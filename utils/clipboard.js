const storage = require('./storage.js')

function copyPrompt(item) {
  const content = item && item.content ? String(item.content) : ''
  if (!content) {
    wx.showToast({ title: '没有可复制的内容', icon: 'none' })
    return
  }
  wx.setClipboardData({
    data: content,
    success: function () {
      storage.pushHistory({
        promptId: item.promptId || item.id || '',
        title: item.title || '',
        content: content,
        categoryId: item.categoryId || ''
      })
      storage.bumpCopy(item.promptId || item.id || '')
      wx.hideToast()
      setTimeout(function () {
        wx.showToast({ title: '已复制', icon: 'success' })
      }, 200)
    },
    fail: function () {
      wx.showToast({ title: '复制失败', icon: 'none' })
    }
  })
}

module.exports = {
  copyPrompt
}
