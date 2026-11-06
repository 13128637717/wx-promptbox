const catalog = require('../../utils/catalog.js')
const storage = require('../../utils/storage.js')
const search = require('../../utils/search.js')

Page({
  data: {
    featured: false,
    keyword: '',
    focus: false,
    categoryId: '',
    categories: [],
    history: [],
    showHistory: false,
    searched: false,
    list: []
  },

  onLoad(query) {
    this.featured = query.featured === '1'
    const keyword = query.keyword || ''
    wx.setNavigationBarTitle({ title: this.featured ? '精选提示词' : '搜索' })
    this.setData({
      featured: this.featured,
      keyword: keyword,
      focus: !this.featured && !keyword,
      categories: catalog.getCategories()
    })
    if (this.featured || keyword) this.run(keyword)
    else this.showHistory()
  },

  showHistory() {
    this.setData({
      showHistory: true,
      searched: false,
      history: storage.getSearchHistory(),
      list: []
    })
  },

  run(keyword, categoryId) {
    const text = String(keyword || '').trim()
    const category = categoryId === undefined ? this.data.categoryId : categoryId
    if (!this.featured && !text) {
      this.showHistory()
      return
    }
    if (!this.featured && text) storage.pushSearch(text)
    const list = search.searchPrompts(catalog.getAll(storage.getMyPrompts()), {
      keyword: this.featured ? '' : text,
      featured: !!this.featured,
      categoryId: category,
      sort: 'heat'
    })
    this.setData({
      keyword: text,
      categoryId: category,
      showHistory: false,
      searched: true,
      history: storage.getSearchHistory(),
      list: catalog.decorateList(list, storage.getCopyCounts())
    })
  },

  onInput(event) {
    this.setData({ keyword: event.detail.value })
  },

  onConfirm(event) {
    this.run(event.detail.value)
  },

  onClear() {
    this.setData({ keyword: '' })
    if (!this.featured) this.showHistory()
  },

  onHistory(event) {
    this.run(event.currentTarget.dataset.word)
  },

  onClearHistory() {
    storage.clearSearchHistory()
    this.setData({ history: [] })
  },

  onCategory(event) {
    const categoryId = event.currentTarget.dataset.id
    this.setData({ categoryId: categoryId })
    if (this.data.searched || this.featured) this.run(this.data.keyword, categoryId)
  },

  onSelect(event) {
    wx.navigateTo({ url: '/pages/prompt/detail?id=' + event.detail.id })
  }
})
