const catalog = require('../../utils/catalog.js')
const storage = require('../../utils/storage.js')
const search = require('../../utils/search.js')
const ui = require('../../utils/ui.js')

Page({
  data: {
    statusBarHeight: 20,
    category: null,
    sort: 'heat',
    tag: '',
    tags: [],
    list: [],
    missing: false
  },

  onLoad(query) {
    ui.attachNav(this)
    this.categoryId = query.id || ''
    const category = catalog.getCategory(this.categoryId)
    if (!category) {
      this.setData({ missing: true })
      return
    }
    this.setData({ category: category })
    this.reload('heat', '')
  },

  reload(sort, tag) {
    const all = catalog.getAll(storage.getMyPrompts())
    const scoped = search.searchPrompts(all, { categoryId: this.categoryId })
    const tags = search.collectTags(scoped)
    const nextTag = tags.indexOf(tag) >= 0 ? tag : ''
    const list = search.searchPrompts(all, {
      categoryId: this.categoryId,
      tag: nextTag,
      sort: sort
    })
    this.setData({
      sort: sort,
      tag: nextTag,
      tags: tags,
      list: catalog.decorateList(list, storage.getCopyCounts())
    })
  },

  onSort(event) {
    this.reload(event.currentTarget.dataset.sort, this.data.tag)
  },

  onTag(event) {
    this.reload(this.data.sort, event.currentTarget.dataset.tag)
  },

  onSelect(event) {
    wx.navigateTo({ url: '/pages/prompt/detail?id=' + event.detail.id })
  },

  onBack() {
    ui.backOrHome()
  }
})
