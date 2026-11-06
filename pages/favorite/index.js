const catalog = require('../../utils/catalog.js')
const storage = require('../../utils/storage.js')

Page({
  data: {
    categoryId: '',
    categories: [],
    list: []
  },

  onShow() {
    this.setData({ categories: catalog.getCategories() })
    this.apply(this.data.categoryId)
  },

  apply(categoryId) {
    const mine = storage.getMyPrompts()
    const prompts = storage.getFavorites().map(function (item) {
      return catalog.getById(item.id, mine)
    }).filter(Boolean).filter(function (prompt) {
      if (categoryId && prompt.categoryId !== categoryId) return false
      return true
    })
    this.setData({
      categoryId: categoryId,
      list: catalog.decorateList(prompts, storage.getCopyCounts())
    })
  },

  onCategory(event) {
    this.apply(event.currentTarget.dataset.id)
  },

  onSelect(event) {
    wx.navigateTo({ url: '/pages/prompt/detail?id=' + event.detail.id })
  },

  onMore(event) {
    const page = this
    const id = event.detail.id
    wx.showActionSheet({
      itemList: ['取消收藏'],
      success: function (res) {
        if (res.tapIndex !== 0) return
        storage.removeFavorite(id)
        wx.showToast({ title: '已取消收藏', icon: 'none' })
        page.apply(page.data.categoryId)
      }
    })
  }
})
