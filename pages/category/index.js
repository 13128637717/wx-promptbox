const catalog = require('../../utils/catalog.js')
const storage = require('../../utils/storage.js')
const search = require('../../utils/search.js')

function loadList(activeId, sort, tag) {
  const all = catalog.getAll(storage.getMyPrompts())
  const scoped = search.searchPrompts(all, { categoryId: activeId })
  const tags = search.collectTags(scoped)
  const nextTag = tags.indexOf(tag) >= 0 ? tag : ''
  const list = search.searchPrompts(all, {
    categoryId: activeId,
    tag: nextTag,
    sort: sort
  })
  return {
    tags: tags,
    tag: nextTag,
    total: list.length,
    list: catalog.decorateList(list, storage.getCopyCounts())
  }
}

Page({
  data: {
    categories: [],
    activeId: '',
    sort: 'heat',
    tag: '',
    tags: [],
    list: [],
    total: 0
  },

  onShow() {
    const categories = [{ id: '', name: '全部' }].concat(catalog.getCategories())
    this.setData(Object.assign({ categories: categories }, loadList(this.data.activeId, this.data.sort, this.data.tag)))
  },

  onPick(event) {
    const activeId = event.currentTarget.dataset.id
    this.setData(Object.assign({ activeId: activeId }, loadList(activeId, this.data.sort, '')))
  },

  onSort(event) {
    const sort = event.currentTarget.dataset.sort
    this.setData(Object.assign({ sort: sort }, loadList(this.data.activeId, sort, this.data.tag)))
  },

  onTag(event) {
    const tag = event.currentTarget.dataset.tag
    this.setData(Object.assign({ tag: tag }, loadList(this.data.activeId, this.data.sort, tag)))
  },

  onSelect(event) {
    wx.navigateTo({ url: '/pages/prompt/detail?id=' + event.detail.id })
  }
})
