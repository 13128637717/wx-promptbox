const catalog = require('../../utils/catalog.js')
const storage = require('../../utils/storage.js')
const ui = require('../../utils/ui.js')
const { buildFields, primaryField, applyVariables } = require('../../utils/prompt.js')

function toast(title) {
  wx.showToast({ title: title, icon: 'none' })
}

Page({
  data: {
    statusBarHeight: 20,
    demand: '',
    templates: [],
    selectedId: ''
  },

  onLoad() {
    ui.attachNav(this)
    const counts = storage.getCopyCounts()
    const templates = catalog.getTemplates().map(function (item) {
      return catalog.decorate(item, counts[item.id] || 0)
    })
    this.setData({ templates: templates })
  },

  onDemand(event) {
    this.setData({ demand: event.detail.value })
  },

  onPick(event) {
    this.setData({ selectedId: event.currentTarget.dataset.id })
  },

  onGenerate() {
    const selectedId = this.data.selectedId
    const selected = this.data.templates.find(function (item) {
      return item.id === selectedId
    })
    if (!selected) {
      toast('请选择推荐模板')
      return
    }
    const demand = (this.data.demand || '').trim()
    const raw = catalog.getById(selected.id, [])
    const fields = buildFields(raw.content, raw.variables)
    const values = {}
    fields.forEach(function (field) {
      values[field.name] = field.defaultValue || ''
    })
    const primary = primaryField(fields)
    if (primary && demand) values[primary.name] = demand
    if (!demand && primary && primary.required && !primary.defaultValue) {
      toast('请输入你的需求')
      return
    }
    const result = applyVariables(raw.content, fields, values)
    if (!result.ok) {
      storage.setDraft({ type: 'prefill', promptId: raw.id, values: values })
      wx.navigateTo({
        url: '/pages/prompt/editor?id=' + raw.id + '&next=result&prefill=1'
      })
      return
    }
    storage.setDraft({
      type: 'result',
      promptId: raw.id,
      title: raw.title,
      description: raw.description,
      categoryId: raw.categoryId,
      categoryName: selected.categoryName,
      categoryColor: selected.categoryColor,
      categoryTint: selected.categoryTint,
      categoryGlyph: selected.categoryGlyph,
      text: result.text
    })
    wx.navigateTo({ url: '/pages/prompt/result' })
  },

  onBack() {
    ui.backOrHome()
  }
})
