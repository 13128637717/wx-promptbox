function variablePattern() {
  return /\{\{\s*([^{}]+?)\s*\}\}/g
}

function extractVariableNames(content) {
  const names = []
  const seen = {}
  const text = String(content || '')
  const re = variablePattern()
  let match = re.exec(text)
  while (match) {
    const name = String(match[1] || '').trim()
    if (name && !seen[name]) {
      seen[name] = true
      names.push(name)
    }
    match = re.exec(text)
  }
  return names
}

function buildFields(content, definitions) {
  const defs = Array.isArray(definitions) ? definitions : []
  const byName = {}
  defs.forEach(function (item) {
    if (item && item.name) byName[String(item.name).trim()] = item
  })
  return extractVariableNames(content).map(function (name) {
    const def = byName[name]
    return {
      name: name,
      label: def && def.label ? String(def.label) : name,
      defaultValue: def && def.defaultValue != null ? String(def.defaultValue) : '',
      required: def ? !!def.required : true
    }
  })
}

function primaryField(fields) {
  const list = fields || []
  for (let i = 0; i < list.length; i += 1) {
    if (list[i].name === '主题') return list[i]
  }
  return list[0] || null
}

function resolveValue(field, input) {
  const raw = input == null ? '' : String(input).trim()
  if (raw) return { ok: true, value: raw }
  if (field.defaultValue) return { ok: true, value: field.defaultValue }
  if (field.required) return { ok: false, value: '' }
  return { ok: true, value: '' }
}

function applyVariables(content, fields, values) {
  const map = {}
  const missing = []
  ;(fields || []).forEach(function (field) {
    const resolved = resolveValue(field, values ? values[field.name] : '')
    if (!resolved.ok) missing.push(field)
    else map[field.name] = resolved.value
  })
  if (missing.length) {
    return { ok: false, missing: missing, text: String(content || '') }
  }
  const text = String(content || '').replace(variablePattern(), function (_, raw) {
    const name = String(raw || '').trim()
    if (Object.prototype.hasOwnProperty.call(map, name)) return map[name]
    return '{{' + name + '}}'
  })
  return { ok: true, missing: [], text: text }
}

function fillPreview(content, fields, values) {
  const fieldMap = {}
  ;(fields || []).forEach(function (field) {
    fieldMap[field.name] = field
  })
  return String(content || '').replace(variablePattern(), function (_, raw) {
    const name = String(raw || '').trim()
    const input = values && values[name] != null ? String(values[name]).trim() : ''
    if (input) return input
    const field = fieldMap[name]
    if (field && field.defaultValue) return field.defaultValue
    return '{{' + name + '}}'
  })
}

module.exports = {
  extractVariableNames,
  buildFields,
  primaryField,
  applyVariables,
  fillPreview
}
