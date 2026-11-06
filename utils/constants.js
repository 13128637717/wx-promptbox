const CATEGORY_IDS = [
  'writing',
  'coding',
  'drawing',
  'video',
  'office',
  'media',
  'learning',
  'business',
  'analysis',
  'general'
]

const TEMPLATE_CHIPS = [
  { id: 'w01', label: '小红书爆款' },
  { id: 'w02', label: '公众号文章' },
  { id: 'o01', label: '工作总结' },
  { id: 'c01', label: '代码生成' },
  { id: 'd01', label: '图像描述' },
  { id: 'v01', label: '视频脚本' }
]

const MAX_PROMPT_CONTENT = 8000
const MAX_MY_PROMPTS = 200
const MAX_HISTORY = 50
const MAX_SEARCH_HISTORY = 10

module.exports = {
  CATEGORY_IDS,
  TEMPLATE_CHIPS,
  MAX_PROMPT_CONTENT,
  MAX_MY_PROMPTS,
  MAX_HISTORY,
  MAX_SEARCH_HISTORY
}
