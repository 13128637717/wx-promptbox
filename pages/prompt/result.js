const catalog = require('../../utils/catalog.js')
const storage = require('../../utils/storage.js')
const clipboard = require('../../utils/clipboard.js')
const ui = require('../../utils/ui.js')
const { formatDate } = require('../../utils/format.js')

Page({
  data: {
    statusBarHeight: 20,
    missing: false,
    saved: false,
    title: '',
    text: '',
    categoryName: '',
    categoryColor: '#2563EB',
    categoryTint: '#EFF6FF',
    categoryGlyph: '词',
    categoryIcon: 'grid',
    promptId: '',
    categoryId: ''
  },

  onLoad() {
    ui.attachNav(this)
    const draft = storage.getDraft()
    if (!draft || draft.type !== 'result' || !draft.text) {
      this.setData({ missing: true })
      return
    }
    const category = catalog.getCategory(draft.categoryId)
    this.setData({
      title: draft.title || '',
      text: draft.text,
      categoryName: draft.categoryName || '',
      categoryColor: draft.categoryColor || '#2563EB',
      categoryTint: draft.categoryTint || '#EFF6FF',
      categoryGlyph: draft.categoryGlyph || '词',
      categoryIcon: category && category.icon ? category.icon : 'grid',
      promptId: draft.promptId || '',
      categoryId: draft.categoryId || '',
      description: draft.description || ''
    })
  },

  onText(event) {
    this.setData({ text: event.detail.value, saved: false })
  },

  onCopy() {
    clipboard.copyPrompt({
      id: this.data.promptId,
      title: this.data.title,
      content: this.data.text,
      categoryId: this.data.categoryId
    })
  },

  onSave() {
    if (this.data.saved) {
      wx.showToast({ title: '已经保存过', icon: 'none' })
      return
    }
    if (!this.data.text.trim()) {
      wx.showToast({ title: '没有可保存的内容', icon: 'none' })
      return
    }
    storage.saveMyPrompt({
      id: 'user_' + Date.now(),
      title: this.data.title || '未命名提示词',
      description: '由模板生成',
      categoryId: this.data.categoryId,
      content: this.data.text,
      variables: [],
      tags: ['我的'],
      difficulty: 'beginner',
      isFeatured: false,
      sort: 0,
      heat: 0,
      updatedAt: formatDate(Date.now()),
      source: 'user'
    })
    this.setData({ saved: true })
    wx.showToast({ title: '已保存', icon: 'success' })
  },

  onAgain() {
    wx.navigateBack({
      delta: 1,
      fail: function () {
        wx.redirectTo({ url: '/pages/prompt/create' })
      }
    })
  },

  onBack() {
    ui.backOrHome()
  }
})
