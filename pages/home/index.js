const catalog = require('../../utils/catalog.js')
const storage = require('../../utils/storage.js')
const search = require('../../utils/search.js')
const ui = require('../../utils/ui.js')

Page({
  data: {
    statusBarHeight: 20,
    categories: [],
    hot: []
  },

  onLoad() {
    ui.attachNav(this)
  },

  onShow() {
    const counts = storage.getCopyCounts()
    const hot = search.searchPrompts(catalog.getAll(storage.getMyPrompts()), { sort: 'heat' }).slice(0, 6)
    this.setData({
      categories: catalog.getHomeCategories(),
      hot: catalog.decorateList(hot, counts)
    })
  },

  onSearch() {
    wx.navigateTo({ url: '/pages/search/index' })
  },

  onFeatured() {
    wx.navigateTo({ url: '/pages/search/index?featured=1' })
  },

  onCategory(event) {
    const id = event.currentTarget.dataset.id
    if (id === 'all') {
      wx.switchTab({ url: '/pages/category/index' })
      return
    }
    wx.navigateTo({ url: '/pages/category/detail?id=' + id })
  },

  onSelect(event) {
    wx.navigateTo({ url: '/pages/prompt/detail?id=' + event.detail.id })
  }
})
