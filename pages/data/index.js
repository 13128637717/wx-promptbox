const storage = require('../../utils/storage.js')
const { buildExport, validateAndMerge } = require('../../utils/export.js')

function toast(title) {
  wx.showToast({ title: title, icon: 'none' })
}

Page({
  data: {
    message: ''
  },

  onExport() {
    const payload = buildExport(storage.getFavorites(), storage.getMyPrompts())
    const json = JSON.stringify(payload, null, 2)
    const fs = wx.getFileSystemManager()
    const filePath = wx.env.USER_DATA_PATH + '/promptbox-backup.json'
    try {
      fs.writeFileSync(filePath, json, 'utf8')
    } catch (error) {
      this.copyFallback(json, '文件写入失败，已复制 JSON')
      return
    }
    const page = this
    if (!wx.shareFileMessage) {
      page.copyFallback(json, '当前环境不能发送文件，已复制 JSON')
      return
    }
    wx.shareFileMessage({
      filePath: filePath,
      fileName: 'promptbox-backup.json',
      fail: function () {
        page.copyFallback(json, '发送取消或失败，已复制 JSON')
      }
    })
  },

  copyFallback(json, message) {
    wx.setClipboardData({
      data: json,
      success: function () {
        wx.hideToast()
        wx.showToast({ title: '已复制', icon: 'success' })
      }
    })
    this.setData({ message: message })
  },

  onImport() {
    const page = this
    if (!wx.chooseMessageFile) {
      toast('当前微信版本不支持选择文件')
      return
    }
    wx.chooseMessageFile({
      count: 1,
      type: 'file',
      extension: ['json'],
      success: function (res) {
        const file = res.tempFiles && res.tempFiles[0]
        if (!file) return
        page.readImport(file.path)
      }
    })
  },

  readImport(filePath) {
    const page = this
    wx.getFileSystemManager().readFile({
      filePath: filePath,
      encoding: 'utf8',
      success: function (res) {
        page.applyImport(res.data)
      },
      fail: function () {
        toast('读取文件失败')
      }
    })
  },

  applyImport(raw) {
    let incoming
    try {
      incoming = JSON.parse(raw)
    } catch (error) {
      toast('文件不是有效 JSON')
      return
    }
    const current = {
      favorites: storage.getFavorites(),
      myPrompts: storage.getMyPrompts()
    }
    const merged = validateAndMerge(current, incoming)
    if (!merged.ok) {
      toast(merged.error)
      this.setData({ message: merged.error + '。原有数据未改动。' })
      return
    }
    try {
      storage.setFavorites(merged.favorites)
      storage.setMyPrompts(merged.myPrompts)
    } catch (error) {
      storage.setFavorites(current.favorites)
      storage.setMyPrompts(current.myPrompts)
      toast('写入失败，已保留原数据')
      return
    }
    const stats = merged.stats
    const message = '导入完成：收藏新增 ' + stats.favAdded + '，跳过 ' + stats.favSkipped
      + '；提示词新增 ' + stats.promptAdded + '，跳过 ' + stats.promptSkipped
      + '；无效 ' + stats.invalid
    this.setData({ message: message })
    wx.showToast({ title: '导入完成', icon: 'success' })
  }
})
