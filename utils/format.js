function formatHeat(value) {
  const n = Number(value) || 0
  if (n >= 10000) {
    return trimNumber(n / 10000) + 'w'
  }
  if (n >= 1000) {
    return trimNumber(n / 1000) + 'k'
  }
  return String(n)
}

function trimNumber(value) {
  return value.toFixed(1).replace(/\.0$/, '')
}

function pad(value) {
  return value < 10 ? '0' + value : String(value)
}

function formatTime(timestamp) {
  const date = new Date(timestamp)
  if (Number.isNaN(date.getTime())) return ''
  return (
    date.getFullYear() +
    '-' + pad(date.getMonth() + 1) +
    '-' + pad(date.getDate()) +
    ' ' + pad(date.getHours()) +
    ':' + pad(date.getMinutes())
  )
}

function formatDate(timestamp) {
  const date = new Date(timestamp || Date.now())
  return date.getFullYear() + '-' + pad(date.getMonth() + 1) + '-' + pad(date.getDate())
}

function formatStorageSize(kb) {
  const size = Number(kb) || 0
  if (size >= 1024) return (size / 1024).toFixed(1) + 'MB'
  return size + 'KB'
}

module.exports = {
  formatHeat,
  formatTime,
  formatDate,
  formatStorageSize
}
