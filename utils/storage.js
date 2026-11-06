const { MAX_HISTORY, MAX_SEARCH_HISTORY } = require('./constants.js')
const { formatStorageSize } = require('./format.js')

const KEYS = {
  favorites: 'favorites',
  myPrompts: 'my_prompts',
  history: 'recent_history',
  searchHistory: 'search_history',
  settings: 'user_settings',
  copyCounts: 'copy_counts',
  draft: 'promptbox_draft'
}

function read(key, fallback) {
  try {
    const value = wx.getStorageSync(key)
    if (value === '' || value === undefined || value === null) return fallback
    return value
  } catch (e) {
    return fallback
  }
}

function write(key, value) {
  wx.setStorageSync(key, value)
}

function getFavorites() {
  const list = read(KEYS.favorites, [])
  return list.slice().sort(function (a, b) {
    return (b.createdAt || 0) - (a.createdAt || 0)
  })
}

function setFavorites(list) {
  write(KEYS.favorites, list || [])
}

function isFavorite(id) {
  return getFavorites().some(function (item) { return item.id === id })
}

function toggleFavorite(id) {
  const list = read(KEYS.favorites, []).slice()
  const index = list.findIndex(function (item) { return item.id === id })
  let favored = false
  if (index >= 0) list.splice(index, 1)
  else {
    list.unshift({ id: id, createdAt: Date.now() })
    favored = true
  }
  write(KEYS.favorites, list)
  return favored
}

function removeFavorite(id) {
  const list = read(KEYS.favorites, []).filter(function (item) { return item.id !== id })
  write(KEYS.favorites, list)
}

function getMyPrompts() {
  return read(KEYS.myPrompts, [])
}

function setMyPrompts(list) {
  write(KEYS.myPrompts, list || [])
}

function saveMyPrompt(prompt) {
  const list = getMyPrompts().slice()
  const index = list.findIndex(function (item) { return item.id === prompt.id })
  if (index >= 0) list.splice(index, 1, prompt)
  else list.unshift(prompt)
  write(KEYS.myPrompts, list)
}

function removeMyPrompt(id) {
  const list = getMyPrompts().filter(function (item) { return item.id !== id })
  write(KEYS.myPrompts, list)
}

function getHistory() {
  return read(KEYS.history, [])
}

function pushHistory(item) {
  const list = getHistory().slice()
  list.unshift({
    id: 'h' + Date.now() + Math.floor(Math.random() * 1000),
    promptId: item.promptId || '',
    title: item.title || '',
    content: item.content || '',
    categoryId: item.categoryId || '',
    copiedAt: Date.now()
  })
  write(KEYS.history, list.slice(0, MAX_HISTORY))
}

function removeHistory(id) {
  write(KEYS.history, getHistory().filter(function (item) { return item.id !== id }))
}

function clearHistory() {
  write(KEYS.history, [])
}

function getSearchHistory() {
  return read(KEYS.searchHistory, [])
}

function pushSearch(keyword) {
  const text = String(keyword || '').trim()
  if (!text) return getSearchHistory()
  const list = getSearchHistory().filter(function (item) { return item !== text })
  list.unshift(text)
  const next = list.slice(0, MAX_SEARCH_HISTORY)
  write(KEYS.searchHistory, next)
  return next
}

function clearSearchHistory() {
  write(KEYS.searchHistory, [])
}

function getSettings() {
  const stored = read(KEYS.settings, null)
  return Object.assign({ nickname: 'AI探索者', splashSeen: false }, stored || {})
}

function updateSettings(patch) {
  const next = Object.assign(getSettings(), patch || {})
  write(KEYS.settings, next)
  return next
}

function getCopyCounts() {
  return read(KEYS.copyCounts, {})
}

function bumpCopy(id) {
  if (!id) return
  const counts = Object.assign({}, getCopyCounts())
  counts[id] = (counts[id] || 0) + 1
  write(KEYS.copyCounts, counts)
}

function getDraft() {
  return read(KEYS.draft, null)
}

function setDraft(draft) {
  write(KEYS.draft, draft)
}

function getStorageSizeText() {
  try {
    const info = wx.getStorageInfoSync()
    return formatStorageSize(info.currentSize || 0)
  } catch (e) {
    return '0KB'
  }
}

module.exports = {
  getFavorites,
  setFavorites,
  isFavorite,
  toggleFavorite,
  removeFavorite,
  getMyPrompts,
  setMyPrompts,
  saveMyPrompt,
  removeMyPrompt,
  getHistory,
  pushHistory,
  removeHistory,
  clearHistory,
  getSearchHistory,
  pushSearch,
  clearSearchHistory,
  getSettings,
  updateSettings,
  getCopyCounts,
  bumpCopy,
  getDraft,
  setDraft,
  getStorageSizeText
}
