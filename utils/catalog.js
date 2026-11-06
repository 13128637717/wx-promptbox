const categories = require('../data/categories.js')
const { formatHeat } = require('./format.js')
const { TEMPLATE_CHIPS } = require('./constants.js')

const groups = [
  require('../data/prompts/writing.js'),
  require('../data/prompts/coding.js'),
  require('../data/prompts/drawing.js'),
  require('../data/prompts/video.js'),
  require('../data/prompts/office.js'),
  require('../data/prompts/media.js'),
  require('../data/prompts/learning.js'),
  require('../data/prompts/business.js'),
  require('../data/prompts/analysis.js'),
  require('../data/prompts/general.js')
]

const categoryMap = {}
categories.forEach(function (item) {
  categoryMap[item.id] = item
})

const prompts = groups.reduce(function (list, group) {
  return list.concat(group)
}, [])

function getCategories() {
  return categories
}

function getHomeCategories() {
  return categories.filter(function (item) { return item.homeVisible })
}

function getCategory(id) {
  return categoryMap[id] || null
}

function getSystemPrompts() {
  return prompts
}

function getById(id, extra) {
  const mine = (extra || []).find(function (item) { return item.id === id })
  if (mine) return mine
  return prompts.find(function (item) { return item.id === id }) || null
}

function getAll(extra) {
  return prompts.concat(extra || [])
}

function decorate(prompt, copyCount) {
  const category = categoryMap[prompt.categoryId]
  const heat = (Number(prompt.heat) || 0) + (Number(copyCount) || 0)
  return Object.assign({}, prompt, {
    source: prompt.source || 'system',
    categoryName: category ? category.name : '',
    categoryColor: category ? category.color : '#2563EB',
    categoryTint: category ? category.tint : '#EFF6FF',
    categoryGlyph: category ? category.glyph : '词',
    categoryIcon: category && category.icon ? category.icon : 'grid',
    heatText: formatHeat(heat) + ' 人在用'
  })
}

function decorateList(list, counts) {
  const map = counts || {}
  return (list || []).map(function (item) {
    return decorate(item, map[item.id] || 0)
  })
}

function getTemplates() {
  return TEMPLATE_CHIPS.map(function (chip) {
    const prompt = prompts.find(function (item) { return item.id === chip.id })
    if (!prompt) return null
    return Object.assign({ chipLabel: chip.label }, prompt)
  }).filter(Boolean)
}

function relatedPrompts(prompt, extra, limit) {
  return getAll(extra)
    .filter(function (item) {
      return item.id !== prompt.id && item.categoryId === prompt.categoryId
    })
    .slice()
    .sort(function (a, b) {
      return (Number(b.heat) || 0) - (Number(a.heat) || 0)
    })
    .slice(0, limit || 4)
}

module.exports = {
  getCategories,
  getHomeCategories,
  getCategory,
  getSystemPrompts,
  getById,
  getAll,
  decorate,
  decorateList,
  getTemplates,
  relatedPrompts
}
