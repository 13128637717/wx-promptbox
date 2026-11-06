const assert = require('assert')
const {
  extractVariableNames,
  buildFields,
  primaryField,
  applyVariables,
  fillPreview
} = require('../utils/prompt.js')

const content = '你好{{语言}}，再用{{语言}}写{{主题}}。'
const names = extractVariableNames(content)
assert.deepStrictEqual(names, ['语言', '主题'])

const fields = buildFields(content, [
  { name: '语言', label: '编程语言', defaultValue: 'Java', required: true }
])
assert.strictEqual(fields.length, 2)
assert.strictEqual(fields[0].label, '编程语言')
assert.strictEqual(fields[1].required, true)
assert.strictEqual(fields[1].label, '主题')
assert.strictEqual(primaryField(fields).name, '主题')

const filled = applyVariables(content, fields, {})
assert.strictEqual(filled.ok, false)
assert.deepStrictEqual(filled.missing.map(function (item) { return item.name }), ['主题'])
assert.strictEqual(filled.text, content)

const done = applyVariables(content, fields, { 主题: ' 排序 ' })
assert.strictEqual(done.ok, true)
assert.strictEqual(done.text, '你好Java，再用Java写排序。')

const optional = buildFields('备注：{{备注}}', [
  { name: '备注', label: '备注', defaultValue: '', required: false }
])
const emptyOptional = applyVariables('备注：{{备注}}', optional, { 备注: '   ' })
assert.strictEqual(emptyOptional.ok, true)
assert.strictEqual(emptyOptional.text, '备注：')

const preview = fillPreview(content, fields, { 语言: '' })
assert.strictEqual(preview, '你好Java，再用Java写{{主题}}。')

console.log('prompt.test.js ok')
