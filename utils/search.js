function matchesKeyword(prompt, keyword) {
  const text = String(keyword || '').trim().toLowerCase()
  if (!text) return true
  const tags = Array.isArray(prompt.tags) ? prompt.tags : []
  const hay = [prompt.title || '', prompt.content || ''].concat(tags).join('\n').toLowerCase()
  return hay.indexOf(text) !== -1
}

function searchPrompts(list, options) {
  const opts = options || {}
  const categoryId = opts.categoryId || ''
  const tag = opts.tag || ''
  const keyword = opts.keyword || ''
  let result = (list || []).filter(function (prompt) {
    if (categoryId && prompt.categoryId !== categoryId) return false
    if (opts.featured && !prompt.isFeatured) return false
    if (tag) {
      const tags = prompt.tags || []
      if (tags.indexOf(tag) === -1) return false
    }
    return matchesKeyword(prompt, keyword)
  })
  if (opts.sort === 'heat') {
    result = result.slice().sort(function (a, b) {
      return (Number(b.heat) || 0) - (Number(a.heat) || 0)
    })
  } else if (opts.sort === 'latest') {
    result = result.slice().sort(function (a, b) {
      return String(b.updatedAt || '').localeCompare(String(a.updatedAt || ''))
    })
  }
  return result
}

function collectTags(list) {
  const tags = []
  ;(list || []).forEach(function (prompt) {
    ;(prompt.tags || []).forEach(function (tag) {
      if (tag && tags.indexOf(tag) === -1) tags.push(tag)
    })
  })
  return tags
}

module.exports = {
  matchesKeyword,
  searchPrompts,
  collectTags
}
