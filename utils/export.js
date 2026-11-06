const { CATEGORY_IDS, MAX_MY_PROMPTS, MAX_PROMPT_CONTENT } = require('./constants.js')

function fail(error) {
  return { ok: false, error: error }
}

function copyList(list) {
  return (list || []).slice()
}

function sanitizeIncomingPrompt(raw) {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return null
  if (typeof raw.id !== 'string' || raw.id.indexOf('user_') !== 0) return null
  if (typeof raw.title !== 'string' || !raw.title.trim()) return null
  if (typeof raw.content !== 'string' || !raw.content.trim()) return null
  if (raw.content.length > MAX_PROMPT_CONTENT) return null
  if (CATEGORY_IDS.indexOf(raw.categoryId) === -1) return null
  const variables = Array.isArray(raw.variables)
    ? raw.variables.filter(function (item) {
      return item && typeof item.name === 'string' && item.name.trim()
    }).slice(0, 20).map(function (item) {
      return {
        name: item.name.trim(),
        label: typeof item.label === 'string' && item.label.trim() ? item.label.trim() : item.name.trim(),
        defaultValue: item.defaultValue == null ? '' : String(item.defaultValue),
        required: !!item.required
      }
    })
    : []
  const tags = Array.isArray(raw.tags)
    ? raw.tags.filter(function (tag) { return typeof tag === 'string' && tag.trim() }).map(function (tag) {
      return tag.trim()
    }).slice(0, 8)
    : []
  return {
    id: raw.id,
    title: raw.title.trim(),
    description: typeof raw.description === 'string' ? raw.description.slice(0, 200) : '',
    categoryId: raw.categoryId,
    content: raw.content,
    variables: variables,
    tags: tags,
    difficulty: 'beginner',
    isFeatured: false,
    sort: 0,
    heat: 0,
    updatedAt: typeof raw.updatedAt === 'string' ? raw.updatedAt : '',
    source: 'user'
  }
}

function validateAndMerge(current, incoming) {
  const source = current || {}
  if (!incoming || typeof incoming !== 'object' || Array.isArray(incoming)) {
    return fail('文件格式不正确')
  }
  if (incoming.version !== 1) return fail('不支持的数据版本')
  if (!Array.isArray(incoming.favorites) || !Array.isArray(incoming.myPrompts)) {
    return fail('缺少收藏或提示词数据')
  }

  const favorites = copyList(source.favorites).map(function (item) {
    return { id: item.id, createdAt: item.createdAt }
  })
  const favIds = {}
  favorites.forEach(function (item) { favIds[item.id] = true })

  const myPrompts = copyList(source.myPrompts)
  const promptIds = {}
  myPrompts.forEach(function (item) { promptIds[item.id] = true })

  const stats = {
    favAdded: 0,
    favSkipped: 0,
    promptAdded: 0,
    promptSkipped: 0,
    invalid: 0
  }

  incoming.favorites.forEach(function (item) {
    if (!item || typeof item.id !== 'string' || !item.id.trim()) {
      stats.invalid += 1
      return
    }
    const id = item.id.trim()
    if (favIds[id]) {
      stats.favSkipped += 1
      return
    }
    favIds[id] = true
    favorites.push({
      id: id,
      createdAt: typeof item.createdAt === 'number' ? item.createdAt : 0
    })
    stats.favAdded += 1
  })

  incoming.myPrompts.forEach(function (item) {
    const prompt = sanitizeIncomingPrompt(item)
    if (!prompt) {
      stats.invalid += 1
      return
    }
    if (promptIds[prompt.id] || myPrompts.length >= MAX_MY_PROMPTS) {
      stats.promptSkipped += 1
      return
    }
    promptIds[prompt.id] = true
    myPrompts.push(prompt)
    stats.promptAdded += 1
  })

  return {
    ok: true,
    favorites: favorites,
    myPrompts: myPrompts,
    stats: stats
  }
}

function buildExport(favorites, myPrompts, exportedAt) {
  return {
    version: 1,
    exportedAt: exportedAt || new Date().toISOString(),
    favorites: (favorites || []).map(function (item) {
      return { id: item.id, createdAt: item.createdAt }
    }),
    myPrompts: myPrompts || []
  }
}

module.exports = {
  validateAndMerge,
  buildExport
}
