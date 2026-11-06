const assert = require('assert')
const { validateAndMerge, buildExport } = require('../utils/export.js')

function prompt(id, title) {
  return {
    id: id,
    title: title,
    description: '说明',
    categoryId: 'writing',
    content: '正文',
    variables: [],
    tags: ['我的'],
    updatedAt: '2026-10-01'
  }
}

const current = {
  favorites: [{ id: 'w01', createdAt: 1 }],
  myPrompts: [prompt('user_1', '本地标题')]
}
const snapshot = JSON.parse(JSON.stringify(current))

const invalid = validateAndMerge(current, { version: 2, favorites: [], myPrompts: [] })
assert.strictEqual(invalid.ok, false)
assert.deepStrictEqual(current, snapshot)

const broken = validateAndMerge(current, { version: 1 })
assert.strictEqual(broken.ok, false)
assert.deepStrictEqual(current, snapshot)

const merged = validateAndMerge(current, {
  version: 1,
  favorites: [
    { id: 'w01', createdAt: 9 },
    { id: 'c01', createdAt: 2 },
    { id: '' }
  ],
  myPrompts: [
    prompt('user_1', '试图覆盖'),
    prompt('user_2', '新的提示词'),
    { id: 'w01', title: '系统', content: 'x', categoryId: 'writing' }
  ]
})
assert.strictEqual(merged.ok, true)
assert.strictEqual(merged.stats.favAdded, 1)
assert.strictEqual(merged.stats.favSkipped, 1)
assert.strictEqual(merged.stats.invalid, 2)
assert.strictEqual(merged.stats.promptAdded, 1)
assert.strictEqual(merged.stats.promptSkipped, 1)
assert.strictEqual(merged.myPrompts[0].title, '本地标题')
assert.strictEqual(merged.myPrompts[1].id, 'user_2')
assert.deepStrictEqual(current, snapshot)

const exported = buildExport(current.favorites, current.myPrompts, '2026-10-30T00:00:00.000Z')
assert.strictEqual(exported.version, 1)
assert.strictEqual(exported.exportedAt, '2026-10-30T00:00:00.000Z')
assert.strictEqual(Object.prototype.hasOwnProperty.call(exported, 'history'), false)

console.log('export.test.js ok')
