const catalog = require('../../utils/catalog.js')
const storage = require('../../utils/storage.js')
const clipboard = require('../../utils/clipboard.js')
const { buildFields } = require('../../utils/prompt.js')

Page({
  data: {
    missing: false,
    prompt: null,
    fieldCount: 0,
    favored: false,
    isUser: false,
    related: []
  },

  onLoad(query) {
    this.promptId = query.id || ''
  },

  onShow() {
    const prompt = catalog.getById(this.promptId, storage.getMyPrompts())
    if (!prompt) {
      this.setData({ missing: true, prompt: null })
      return
    }
    const fields = buildFields(prompt.content, prompt.variables)
    const related = catalog.relatedPrompts(prompt, storage.getMyPrompts(), 4)
    this.setData({
      missing: false,
      prompt: catalog.decorate(prompt, (storage.getCopyCounts()[prompt.id] || 0)),
      fieldCount: fields.length,
      favored: storage.isFavorite(prompt.id),
      isUser: String(prompt.id).indexOf('user_') === 0,
      related: catalog.decorateList(related, storage.getCopyCounts())
    })
  },

  onCopy() {
    clipboard.copyPrompt(this.data.prompt)
  },

  onFill() {
    wx.navigateTo({ url: '/pages/prompt/editor?id=' + this.data.prompt.id })
  },

  onFav() {
    const favored = storage.toggleFavorite(this.data.prompt.id)
    this.setData({ favored: favored })
    wx.showToast({ title: favored ? '已收藏' : '已取消收藏', icon: 'none' })
  },

  onHistory() {
    wx.navigateTo({ url: '/pages/history/index' })
  },

  onEdit() {
    wx.navigateTo({ url: '/pages/prompt/edit?id=' + this.data.prompt.id })
  },

  onDelete() {
    const id = this.data.prompt.id
    wx.showModal({
      title: '删除提示词',
      content: '删除后不可恢复。使用记录里的复制内容会保留。',
      success: function (res) {
        if (!res.confirm) return
        storage.removeMyPrompt(id)
        storage.removeFavorite(id)
        wx.navigateBack({ delta: 1 })
      }
    })
  },

  onSelect(event) {
    wx.navigateTo({ url: '/pages/prompt/detail?id=' + event.detail.id })
  },

  onShareAppMessage() {
    const prompt = this.data.prompt || {}
    return {
      title: prompt.title || 'AI 提示词工具箱',
      path: '/pages/prompt/detail?id=' + (prompt.id || '')
    }
  }
})
