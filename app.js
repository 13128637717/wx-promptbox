App({
  globalData: {
    statusBarHeight: 20,
    navBarHeight: 64,
    version: '1.0.0'
  },

  onLaunch() {
    try {
      const sys = wx.getSystemInfoSync()
      const statusBarHeight = sys.statusBarHeight || 20
      this.globalData.statusBarHeight = statusBarHeight
      this.globalData.navBarHeight = statusBarHeight + 44
    } catch (e) {
      // 取不到系统信息时沿用默认高度，页面仍可显示。
    }
  }
})
