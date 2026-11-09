function attachNav(page) {
  const app = getApp()
  const globalData = app && app.globalData ? app.globalData : {}
  const statusBarHeight = globalData.statusBarHeight || 20
  const navBarHeight = globalData.navBarHeight || statusBarHeight + 44
  page.setData({
    statusBarHeight: statusBarHeight,
    navBarHeight: navBarHeight
  })
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
