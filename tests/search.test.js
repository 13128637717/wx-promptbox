const assert = require('assert')
const { matchesKeyword, searchPrompts, collectTags } = require('../utils/search.js')

const list = [
  {
    id: 'a',
    title: '小红书标题',
    content: '写一篇笔记',
    tags: ['文案', '种草'],
    categoryId: 'writing',
    isFeatured: true,
    heat: 10,
    updatedAt: '2026-01-01'
  },
  {
    id: 'b',
    title: 'SQL 编写',
    content: 'select from orders',
    tags: ['查询'],
    categoryId: 'coding',
    isFeatured: false,
    heat: 30,
    updatedAt: '2026-08-01'
  },
  {
    id: 'c',
    title: '周报',
    content: '本周完成接口',
    tags: ['文案'],
    categoryId: 'writing',
    isFeatured: false,
    heat: 20,
    updatedAt: '2026-10-01'
  }
]

assert.strictEqual(matchesKeyword(list[0], '种草'), true)
assert.strictEqual(matchesKeyword(list[1], 'ORDERS'), true)
assert.strictEqual(matchesKeyword(list[2], '不存在'), false)

const byTag = searchPrompts(list, { keyword: '文案', categoryId: 'writing', tag: '种草' })
assert.deepStrictEqual(byTag.map(function (item) { return item.id }), ['a'])

const featured = searchPrompts(list, { featured: true })
assert.deepStrictEqual(featured.map(function (item) { return item.id }), ['a'])

const byHeat = searchPrompts(list, { sort: 'heat' })
assert.deepStrictEqual(byHeat.map(function (item) { return item.id }), ['b', 'c', 'a'])

const byLatest = searchPrompts(list, { sort: 'latest' })
assert.deepStrictEqual(byLatest.map(function (item) { return item.id }), ['c', 'b', 'a'])

assert.deepStrictEqual(collectTags(list.filter(function (item) { return item.categoryId === 'writing' })), ['文案', '种草'])

console.log('search.test.js ok')
