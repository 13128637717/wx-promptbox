const assert = require('assert')
const catalog = require('../utils/catalog.js')
const { extractVariableNames } = require('../utils/prompt.js')
const { CATEGORY_IDS, TEMPLATE_CHIPS } = require('../utils/constants.js')

const expected = {
  writing: 20,
  coding: 25,
  drawing: 20,
  video: 15,
  office: 20,
  media: 20,
  learning: 15,
  business: 15,
  analysis: 15,
  general: 15
}

const categories = catalog.getCategories()
assert.deepStrictEqual(categories.map(function (item) { return item.id }), CATEGORY_IDS)
assert.deepStrictEqual(
  catalog.getHomeCategories().map(function (item) { return item.id }),
  ['writing', 'coding', 'drawing', 'video', 'office', 'learning', 'general']
)
assert.deepStrictEqual(
  catalog.getHomeCategories().map(function (item) { return item.name }),
  ['写作创作', '代码开发', '图像生成', '视频创作', '办公效率', '学习教育', '生活实用']
)
assert.deepStrictEqual(
  catalog.getHomeCategories().map(function (item) { return item.icon }),
  ['pencil', 'code', 'image', 'video', 'case', 'cap', 'house']
)

const prompts = catalog.getSystemPrompts()
assert.strictEqual(prompts.length, 180)

const ids = {}
const counts = {}
let withVariables = 0
prompts.forEach(function (prompt) {
  assert.ok(!ids[prompt.id], 'duplicate id ' + prompt.id)
  ids[prompt.id] = true
  assert.ok(prompt.title && prompt.description && prompt.content, prompt.id)
  assert.ok(CATEGORY_IDS.indexOf(prompt.categoryId) >= 0, prompt.id)
  counts[prompt.categoryId] = (counts[prompt.categoryId] || 0) + 1
  const names = extractVariableNames(prompt.content)
  const defNames = (prompt.variables || []).map(function (item) { return item.name })
  assert.deepStrictEqual(defNames.slice().sort(), names.slice().sort(), prompt.id)
  if (names.length) withVariables += 1
})

assert.deepStrictEqual(counts, expected)
assert.ok(withVariables >= 80, 'variable prompts ' + withVariables)

TEMPLATE_CHIPS.forEach(function (chip) {
  const prompt = catalog.getById(chip.id)
  assert.ok(prompt, chip.id)
  assert.ok(extractVariableNames(prompt.content).indexOf('主题') >= 0, chip.id)
})

const templates = catalog.getTemplates()
assert.strictEqual(templates.length, 6)
assert.strictEqual(templates[0].chipLabel, '小红书爆款')

console.log('catalog.test.js ok, with variables: ' + withVariables)
