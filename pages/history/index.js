const catalog = require('../../utils/catalog.js')
const storage = require('../../utils/storage.js')
const clipboard = require('../../utils/clipboard.js')
const { formatTime } = require('../../utils/format.js')

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
    const counts = storage.getCopyCounts()
    const list = storage.getHistory().filter(function (item) {
      return !categoryId || item.categoryId === categoryId
    }).map(function (item) {
      const found = catalog.getById(item.promptId, mine)
      const base = found || {
        id: item.promptId || item.id,
        title: item.title || '已复制的提示词',
        description: '原提示词可能已删除，这条记录仍可复制',
        categoryId: item.categoryId,
        content: item.content,
        heat: 0,
        tags: [],
        source: 'system'
      }
      return {
        recordId: item.id,
        promptId: item.promptId,
        exists: !!found,
        timeText: formatTime(item.copiedAt),
        content: item.content,
        title: item.title,
        categoryId: item.categoryId,
        card: catalog.decorate(base, counts[item.promptId] || 0)
      }
    })
    this.setData({ categoryId: categoryId, list: list })
  },

  onCategory(event) {
    this.apply(event.currentTarget.dataset.id)
  },

  onSelect(event) {
    const promptId = event.detail.id
    const record = this.data.list.find(function (item) {
      return item.promptId === promptId
    })
    if (!record || !record.exists) {
      wx.showToast({ title: '原提示词已不在，仍可复制这条记录', icon: 'none' })
      return
    }
    wx.navigateTo({ url: '/pages/prompt/detail?id=' + promptId })
  },

  onCopy(event) {
    const record = this.data.list.find(function (item) {
      return item.recordId === event.currentTarget.dataset.record
    })
    if (!record) return
    clipboard.copyPrompt({
      promptId: record.promptId,
      title: record.title,
      content: record.content,
      categoryId: record.categoryId
    })
  },

  onDelete(event) {
    storage.removeHistory(event.currentTarget.dataset.record)
    this.apply(this.data.categoryId)
  },

  onClear() {
    const page = this
    wx.showModal({
      title: '清空使用记录',
      content: '清空后不可恢复',
      success: function (res) {
        if (!res.confirm) return
        storage.clearHistory()
        page.apply(page.data.categoryId)
      }
    })
  }
})
