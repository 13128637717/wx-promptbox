const catalog = require('../../utils/catalog.js')
const storage = require('../../utils/storage.js')
const { extractVariableNames } = require('../../utils/prompt.js')
const { formatDate } = require('../../utils/format.js')
const { MAX_PROMPT_CONTENT } = require('../../utils/constants.js')

function toast(title) {
  wx.showToast({ title: title, icon: 'none' })
}

Page({
  data: {
    id: '',
    title: '',
    description: '',
    content: '',
    tagText: '',
    categories: [],
    categoryNames: [],
    categoryIndex: 0,
    variables: [],
    favored: false,
    namePlaceholder: '变量名，与正文中的 {{名称}} 一致'
  },

  onLoad(query) {
    const categories = catalog.getCategories()
    const names = categories.map(function (item) { return item.name })
    let categoryIndex = 0
    let prompt = null
    let variableRows = []
    if (query.id) {
      prompt = storage.getMyPrompts().find(function (item) { return item.id === query.id })
      if (!prompt) {
        toast('只能编辑自己的提示词')
        setTimeout(function () {
          wx.navigateBack({ delta: 1 })
        }, 400)
        return
      }
      variableRows = (prompt.variables || []).map(function (item, index) {
        return Object.assign({ key: 'k' + index }, item)
      })
      const found = categories.findIndex(function (item) { return item.id === prompt.categoryId })
      categoryIndex = found >= 0 ? found : 0
    }
    wx.setNavigationBarTitle({ title: prompt ? '编辑提示词' : '新建提示词' })
    this.setData({
      id: prompt ? prompt.id : '',
      title: prompt ? prompt.title : '',
      description: prompt ? (prompt.description || '') : '',
      content: prompt ? prompt.content : '',
      tagText: prompt ? (prompt.tags || []).join('，') : '',
      categories: categories,
      categoryNames: names,
      categoryIndex: categoryIndex,
      variables: variableRows,
      favored: prompt ? storage.isFavorite(prompt.id) : false
    })
  },

  onTitle(event) { this.setData({ title: event.detail.value }) },
  onDescription(event) { this.setData({ description: event.detail.value }) },
  onContent(event) { this.setData({ content: event.detail.value }) },
  onTags(event) { this.setData({ tagText: event.detail.value }) },
  onCategory(event) { this.setData({ categoryIndex: Number(event.detail.value) }) },

  onVar(event) {
    const index = Number(event.currentTarget.dataset.index)
    const key = event.currentTarget.dataset.key
    const variables = this.data.variables.slice()
    const current = Object.assign({}, variables[index])
    current[key] = event.detail.value
    variables[index] = current
    this.setData({ variables: variables })
  },

  onRequired(event) {
    const index = Number(event.currentTarget.dataset.index)
    const variables = this.data.variables.slice()
    const current = Object.assign({}, variables[index])
    current.required = !!event.detail.value
    variables[index] = current
    this.setData({ variables: variables })
  },

  addVar() {
    const variables = this.data.variables.concat([{
      key: 'k' + Date.now(),
      name: '',
      label: '',
      defaultValue: '',
      required: true
    }])
    this.setData({ variables: variables })
  },

  removeVar(event) {
    const index = Number(event.currentTarget.dataset.index)
    const variables = this.data.variables.slice()
    variables.splice(index, 1)
    this.setData({ variables: variables })
  },

  onFav() {
    if (!this.data.id) {
      toast('先保存，再收藏')
      return
    }
    const favored = storage.toggleFavorite(this.data.id)
    this.setData({ favored: favored })
  },

  onSave() {
    const title = (this.data.title || '').trim()
    const content = this.data.content || ''
    if (!title) {
      toast('请填写标题')
      return
    }
    if (!content.trim()) {
      toast('请填写正文')
      return
    }
    if (content.length > MAX_PROMPT_CONTENT) {
      toast('正文过长')
      return
    }
    const category = this.data.categories[this.data.categoryIndex]
    const byName = {}
    this.data.variables.forEach(function (item) {
      const name = (item.name || '').trim()
      if (name) byName[name] = item
    })
    const variables = extractVariableNames(content).map(function (name) {
      const old = byName[name] || {}
      return {
        name: name,
        label: (old.label || name).trim(),
        defaultValue: old.defaultValue || '',
        required: old.required !== false
      }
    })
    const tags = String(this.data.tagText || '').split(/[,，\s]+/).filter(Boolean).slice(0, 8)
    const id = this.data.id || ('user_' + Date.now())
    storage.saveMyPrompt({
      id: id,
      title: title,
      description: (this.data.description || '').trim(),
      categoryId: category.id,
      content: content,
      variables: variables,
      tags: tags,
      difficulty: 'beginner',
      isFeatured: false,
      sort: 0,
      heat: 0,
      updatedAt: formatDate(Date.now()),
      source: 'user'
    })
    wx.showToast({ title: '已保存', icon: 'success' })
    setTimeout(function () {
      wx.navigateBack({ delta: 1 })
    }, 400)
  },

  onDelete() {
    const id = this.data.id
    if (!id) return
    wx.showModal({
      title: '删除提示词',
      content: '删除后不可恢复。使用记录里的复制内容会保留。',
      success: function (res) {
        if (!res.confirm) return
        storage.removeMyPrompt(id)
        storage.removeFavorite(id)
        wx.navigateBack({ delta: 1 })
      }
    })
  }
})
