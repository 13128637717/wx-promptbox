Page({
  data: {
    version: '1.0.0'
  },

  onLoad() {
    const app = getApp()
    this.setData({ version: app.globalData.version || '1.0.0' })
  }
})
