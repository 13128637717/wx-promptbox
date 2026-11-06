const catalog = require('../../utils/catalog.js')
const storage = require('../../utils/storage.js')
const clipboard = require('../../utils/clipboard.js')
const { buildFields, applyVariables, fillPreview } = require('../../utils/prompt.js')

function toast(title) {
  wx.showToast({ title: title, icon: 'none' })
}

Page({
  data: {
    missing: false,
    title: '',
    fields: [],
    values: {},
    preview: '',
    manual: false,
    nextResult: false
  },

  onLoad(query) {
    this.promptId = query.id || ''
    this.nextResult = query.next === 'result'
    const prompt = catalog.getById(this.promptId, storage.getMyPrompts())
    if (!prompt) {
      this.setData({ missing: true })
      return
    }
    const fields = buildFields(prompt.content, prompt.variables)
    const values = {}
    fields.forEach(function (field) {
      values[field.name] = field.defaultValue || ''
    })
    if (query.prefill === '1') {
      const draft = storage.getDraft()
      if (draft && draft.type === 'prefill' && draft.promptId === prompt.id && draft.values) {
        Object.keys(draft.values).forEach(function (key) {
          if (draft.values[key]) values[key] = draft.values[key]
        })
      }
    }
    this.prompt = prompt
    this.fields = fields
    this.content = prompt.content
    this.setData({
      title: prompt.title,
      fields: fields,
      values: values,
      preview: fillPreview(prompt.content, fields, values),
      nextResult: this.nextResult
    })
  },

  onField(event) {
    const name = event.currentTarget.dataset.name
    const values = Object.assign({}, this.data.values)
    values[name] = event.detail.value
    const patch = { values: values }
    if (!this.data.manual) {
      patch.preview = fillPreview(this.content, this.fields, values)
    }
    this.setData(patch)
  },

  onPreview(event) {
    this.setData({ preview: event.detail.value, manual: true })
  },

  onReset() {
    const values = {}
    this.fields.forEach(function (field) {
      values[field.name] = field.defaultValue || ''
    })
    this.setData({
      values: values,
      manual: false,
      preview: fillPreview(this.content, this.fields, values)
    })
  },

  resolvedText() {
    if (this.data.manual) return { ok: true, text: this.data.preview }
    const result = applyVariables(this.content, this.fields, this.data.values)
    if (!result.ok) {
      toast('请填写' + result.missing.map(function (item) { return item.label }).join('、'))
      return { ok: false, text: '' }
    }
    return { ok: true, text: result.text }
  },

  onCopy() {
    const resolved = this.resolvedText()
    if (!resolved.ok) return
    clipboard.copyPrompt({
      id: this.prompt.id,
      title: this.prompt.title,
      content: resolved.text,
      categoryId: this.prompt.categoryId
    })
  },

  onGenerate() {
    const resolved = this.resolvedText()
    if (!resolved.ok) return
    const view = catalog.decorate(this.prompt, 0)
    storage.setDraft({
      type: 'result',
      promptId: this.prompt.id,
      title: this.prompt.title,
      description: this.prompt.description,
      categoryId: this.prompt.categoryId,
      categoryName: view.categoryName,
      categoryColor: view.categoryColor,
      categoryTint: view.categoryTint,
      categoryGlyph: view.categoryGlyph,
      text: resolved.text
    })
    wx.redirectTo({ url: '/pages/prompt/result' })
  },

  onSave() {
    const resolved = this.resolvedText()
    if (!resolved.ok || !resolved.text.trim()) return
    const { formatDate } = require('../../utils/format.js')
    storage.saveMyPrompt({
      id: 'user_' + Date.now(),
      title: this.prompt.title,
      description: '由模板填写后保存',
      categoryId: this.prompt.categoryId,
      content: resolved.text,
      variables: [],
      tags: ['我的'],
      difficulty: 'beginner',
      isFeatured: false,
      sort: 0,
      heat: 0,
      updatedAt: formatDate(Date.now()),
      source: 'user'
    })
    wx.showToast({ title: '已保存', icon: 'success' })
  }
})
