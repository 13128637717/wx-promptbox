function attachNav(page) {
  const app = getApp()
  const height = app && app.globalData ? app.globalData.statusBarHeight : 20
  page.setData({ statusBarHeight: height || 20 })
}

function backOrHome() {
  wx.navigateBack({
    delta: 1,
    fail: function () {
      wx.switchTab({ url: '/pages/home/index' })
    }
  })
}

module.exports = {
  attachNav,
  backOrHome
}
