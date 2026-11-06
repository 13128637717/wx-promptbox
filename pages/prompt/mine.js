const catalog = require('../../utils/catalog.js')
const storage = require('../../utils/storage.js')

Page({
  data: {
    list: []
  },

  onShow() {
    const list = storage.getMyPrompts()
    this.setData({
      list: catalog.decorateList(list, storage.getCopyCounts())
    })
  },

  onCreate() {
    wx.navigateTo({ url: '/pages/prompt/edit' })
  },

  onSelect(event) {
    wx.navigateTo({ url: '/pages/prompt/detail?id=' + event.detail.id })
  },

  onMore(event) {
    const page = this
    const id = event.detail.id
    wx.showActionSheet({
      itemList: ['编辑', '删除'],
      success: function (res) {
        if (res.tapIndex === 0) {
          page.onEdit({ detail: { id: id } })
          return
        }
        if (res.tapIndex === 1) {
          page.onDelete({ detail: { id: id } })
        }
      }
    })
  },

  onEdit(event) {
    wx.navigateTo({ url: '/pages/prompt/edit?id=' + event.detail.id })
  },

  onDelete(event) {
    const page = this
    const id = event.detail.id
    wx.showModal({
      title: '删除提示词',
      content: '删除后不可恢复。使用记录里的复制内容会保留。',
      success: function (res) {
        if (!res.confirm) return
        storage.removeMyPrompt(id)
        storage.removeFavorite(id)
        page.setData({
          list: catalog.decorateList(storage.getMyPrompts(), storage.getCopyCounts())
        })
      }
    })
  }
})
