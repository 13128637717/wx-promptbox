const storage = require('../../utils/storage.js')
const ui = require('../../utils/ui.js')

Page({
  data: {
    statusBarHeight: 20
  },

  onLoad() {
    ui.attachNav(this)
    if (storage.getSettings().splashSeen) {
      wx.switchTab({ url: '/pages/home/index' })
      return
    }
    this._timer = setTimeout(() => {
      this.onEnter()
    }, 1600)
  },

  onUnload() {
    if (this._timer) clearTimeout(this._timer)
  },

  onEnter() {
    if (this._left) return
    this._left = true
    if (this._timer) clearTimeout(this._timer)
    storage.updateSettings({ splashSeen: true })
    wx.switchTab({ url: '/pages/home/index' })
  }
})
