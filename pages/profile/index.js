const storage = require('../../utils/storage.js')

Page({
  data: {
    nickname: 'AI探索者',
    favoriteCount: 0,
    historyCount: 0,
    mineCount: 0,
    cacheSize: '0KB',
    menus: [
      { id: 'mine', label: '我的提示词', glyph: '词', tint: '#EFF6FF', color: '#2563EB' },
      { id: 'create', label: '创建提示词', glyph: '建', tint: '#F4F1FF', color: '#8B7CF6' },
      { id: 'data', label: '数据管理', glyph: '档', tint: '#ECFDFD', color: '#22B8CF' },
      { id: 'feedback', label: '意见反馈', glyph: '馈', tint: '#FFF8EB', color: '#F59E0B', openType: 'feedback' },
      { id: 'about', label: '关于我们', glyph: '关', tint: '#F0FDF4', color: '#22C55E' },
      { id: 'share', label: '分享给好友', glyph: '享', tint: '#EEF2FF', color: '#6366F1', openType: 'share' },
      { id: 'cache', label: '清除缓存', glyph: '清', tint: '#F3F4F6', color: '#64748B' }
    ]
  },

  onShow() {
    const settings = storage.getSettings()
    this.setData({
      nickname: settings.nickname || 'AI探索者',
      favoriteCount: storage.getFavorites().length,
      historyCount: storage.getHistory().length,
      mineCount: storage.getMyPrompts().length,
      cacheSize: storage.getStorageSizeText()
    })
  },

  onEditName() {
    const page = this
    wx.showModal({
      title: '修改昵称',
      editable: true,
      placeholderText: '请输入昵称',
      content: this.data.nickname,
      success: function (res) {
        if (!res.confirm) return
        const name = String(res.content || '').trim().slice(0, 12)
        if (!name) return
        storage.updateSettings({ nickname: name })
        page.setData({ nickname: name })
      }
    })
  },

  onFavorites() {
    wx.switchTab({ url: '/pages/favorite/index' })
  },

  onHistory() {
    wx.navigateTo({ url: '/pages/history/index' })
  },

  onMenu(event) {
    const id = event.currentTarget.dataset.id
    if (id === 'mine') wx.navigateTo({ url: '/pages/prompt/mine' })
    else if (id === 'create') wx.navigateTo({ url: '/pages/prompt/create' })
    else if (id === 'data') wx.navigateTo({ url: '/pages/data/index' })
    else if (id === 'about') wx.navigateTo({ url: '/pages/about/index' })
    else if (id === 'cache') this.clearCache()
  },

  clearCache() {
    const page = this
    wx.showModal({
      title: '清除缓存',
      content: '将清除搜索历史。收藏和我的提示词会保留。',
      success: function (res) {
        if (!res.confirm) return
        storage.clearSearchHistory()
        page.setData({ cacheSize: storage.getStorageSizeText() })
        wx.showToast({ title: '已清除', icon: 'success' })
      }
    })
  },

  onShareAppMessage() {
    return {
      title: 'AI 提示词工具箱',
      path: '/pages/home/index'
    }
  }
})
