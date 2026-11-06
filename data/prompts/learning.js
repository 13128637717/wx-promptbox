module.exports = [
  {
    "id": "l01",
    "title": "学习计划",
    "description": "按目标和可用时间排一份能执行的学习计划。",
    "categoryId": "learning",
    "content": "请制定学习计划。\n目标：{{目标}}\n当前水平：{{水平}}\n每周可用时间：{{时间}}\n计划按周写出要完成的产出，而不是只列课程名。每周留一次回顾。如果时间不够完成目标，请缩小第一阶段目标，不要把每天排满。",
    "variables": [
      { "name": "目标", "label": "目标", "defaultValue": "", "required": true },
      { "name": "水平", "label": "当前水平", "defaultValue": "", "required": true },
      { "name": "时间", "label": "每周时间", "defaultValue": "5 小时", "required": false }
    ],
    "tags": ["学习计划", "规划"],
    "difficulty": "beginner",
    "isFeatured": true,
    "sort": 1,
    "heat": 6800,
    "updatedAt": "2026-10-10"
  },
  {
    "id": "l02",
    "title": "费曼式讲解",
    "description": "用自己的话讲清一个概念，并标出讲不顺的地方。",
    "categoryId": "learning",
    "content": "请用费曼方式讲解这个概念。\n概念：{{概念}}\n听众：{{听众}}\n先用日常语言讲，再给一个具体例子，最后列出三个如果被追问可能答不上的点。不要用定义回圈定义。",
    "variables": [
      { "name": "概念", "label": "概念", "defaultValue": "", "required": true },
      { "name": "听众", "label": "听众", "defaultValue": "第一次接触的同事", "required": false }
    ],
    "tags": ["讲解", "概念"],
    "difficulty": "intermediate",
    "isFeatured": true,
    "sort": 2,
    "heat": 4500,
    "updatedAt": "2026-09-15"
  },
  {
    "id": "l03",
    "title": "读书问题单",
    "description": "读之前先写问题，读的时候才知道要找什么。",
    "categoryId": "learning",
    "content": "我准备读这份材料。请先写问题单。\n材料主题：{{主题}}\n我要用来做的事：{{用途}}\n写 8 个问题，区分事实问题和判断问题。每个问题注明读的时候应该在哪类段落找答案。不要提前替材料回答。",
    "variables": [
      { "name": "主题", "label": "主题", "defaultValue": "", "required": true },
      { "name": "用途", "label": "用途", "defaultValue": "", "required": true }
    ],
    "tags": ["阅读", "问题"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 3,
    "heat": 2600,
    "updatedAt": "2026-08-16"
  },
  {
    "id": "l04",
    "title": "笔记重组",
    "description": "把听课笔记从时间顺序改成问题顺序。",
    "categoryId": "learning",
    "content": "请重组这些笔记。\n笔记：{{笔记}}\n按「问题、结论、例子、我还不懂的地方」四列整理。合并重复。老师没下结论的地方不要写成结论。最后给三个最值得复习的问题。",
    "variables": [
      { "name": "笔记", "label": "笔记", "defaultValue": "", "required": true }
    ],
    "tags": ["笔记", "整理"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 4,
    "heat": 3900,
    "updatedAt": "2026-10-04"
  },
  {
    "id": "l05",
    "title": "错题归因",
    "description": "区分不会、看错和步骤断了，再决定怎么练。",
    "categoryId": "learning",
    "content": "请分析这些错题。\n题目和我的解答：{{错题}}\n每题判断更像是概念不清、条件看错，还是中途计算或推理断了。给出下一题该练的最小动作，而不是「多做题」。如果信息不够判断，请说明缺哪一步。",
    "variables": [
      { "name": "错题", "label": "错题", "defaultValue": "", "required": true }
    ],
    "tags": ["错题", "练习"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 5,
    "heat": 4200,
    "updatedAt": "2026-09-21"
  },
  {
    "id": "l06",
    "title": "知识卡片",
    "description": "把一个知识点写成正面问题和背面答案。",
    "categoryId": "learning",
    "content": "请把内容做成记忆卡片。\n内容：{{内容}}\n每张卡正面是一个问题，背面是简短答案和一个例子。不要把整段原文贴到背面。标出哪些卡依赖前一张，不适合打乱复习。",
    "variables": [
      { "name": "内容", "label": "内容", "defaultValue": "", "required": true }
    ],
    "tags": ["记忆", "卡片"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 6,
    "heat": 3100,
    "updatedAt": "2026-09-09"
  },
  {
    "id": "l07",
    "title": "论文阅读摘要",
    "description": "按问题、方法和证据摘要一篇论文，不夸大结论。",
    "categoryId": "learning",
    "content": "请摘要这篇论文或论文笔记。\n文本：{{文本}}\n输出：研究问题、数据或材料、方法、作者的结论、证据是否只支持更弱的说法、我还需要查的术语。看不懂的部分保持原词并标注，不要补完实验。",
    "variables": [
      { "name": "文本", "label": "论文或笔记", "defaultValue": "", "required": true }
    ],
    "tags": ["论文", "摘要"],
    "difficulty": "advanced",
    "isFeatured": false,
    "sort": 7,
    "heat": 2800,
    "updatedAt": "2026-08-29"
  },
  {
    "id": "l08",
    "title": "练习题设计",
    "description": "围绕一个技能出由易到难的小题。",
    "categoryId": "learning",
    "content": "请为这个技能设计练习。\n技能：{{技能}}\n出 5 题，从识别到应用。每题给参考答案和常见错法。不要出需要教材外冷知识才能做的题。最后说明怎样算练会了。",
    "variables": [
      { "name": "技能", "label": "技能", "defaultValue": "", "required": true }
    ],
    "tags": ["练习", "出题"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 8,
    "heat": 2400,
    "updatedAt": "2026-10-16"
  },
  {
    "id": "l09",
    "title": "学习材料取舍",
    "description": "在有限时间里决定先读哪一份材料。",
    "categoryId": "learning",
    "content": "请帮我取舍学习材料。\n目标：{{目标}}\n材料列表：{{材料}}\n可用时间：{{时间}}\n选出现在该读的，写出跳过或延后的理由。如果两份材料覆盖相同内容，只留一份，并说明留它的原因。",
    "variables": [
      { "name": "目标", "label": "目标", "defaultValue": "", "required": true },
      { "name": "材料", "label": "材料", "defaultValue": "", "required": true },
      { "name": "时间", "label": "可用时间", "defaultValue": "", "required": true }
    ],
    "tags": ["取舍", "材料"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 9,
    "heat": 1900,
    "updatedAt": "2026-09-26"
  },
  {
    "id": "l10",
    "title": "概念对比表",
    "description": "把容易混淆的概念放在同一张表里对比。",
    "categoryId": "learning",
    "content": "请对比这些概念。\n概念：{{概念}}\n表格列：定义、解决的问题、一个例子、最容易和谁混淆、混淆时怎么区分。如果我给的词不是同一层次，请先指出再对比。",
    "variables": [
      { "name": "概念", "label": "概念", "defaultValue": "", "required": true }
    ],
    "tags": ["对比", "概念"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 10,
    "heat": 3600,
    "updatedAt": "2026-10-07"
  },
  {
    "id": "l11",
    "title": "项目式作业拆解",
    "description": "把一个大作业拆成可以每天交得出的小块。",
    "categoryId": "learning",
    "content": "请拆解这个作业。\n作业要求：{{要求}}\n截止日期：{{日期}}\n按日期列出产出，例如提纲、一节草稿、图表、检查。标出评分标准里权重最高、应该先做的部分。不要替我写完成稿。",
    "variables": [
      { "name": "要求", "label": "作业要求", "defaultValue": "", "required": true },
      { "name": "日期", "label": "截止日期", "defaultValue": "", "required": true }
    ],
    "tags": ["作业", "拆解"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 11,
    "heat": 3300,
    "updatedAt": "2026-08-22"
  },
  {
    "id": "l12",
    "title": "讲解录音复听",
    "description": "根据自己的讲解录音找出含糊句子。",
    "categoryId": "learning",
    "content": "这是我讲解一个主题的文字稿。请找出含糊的地方。\n主题：{{主题}}\n文字稿：{{文字稿}}\n标出跳跃的推理、没有例子的抽象词、和主题无关的句子。给每处一个更具体的改写。不要整篇重写。",
    "variables": [
      { "name": "主题", "label": "主题", "defaultValue": "", "required": true },
      { "name": "文字稿", "label": "文字稿", "defaultValue": "", "required": true }
    ],
    "tags": ["讲解", "复听"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 12,
    "heat": 1500,
    "updatedAt": "2026-09-04"
  },
  {
    "id": "l13",
    "title": "术语表",
    "description": "为一门课整理术语、缩写和它们不要混用的情况。",
    "categoryId": "learning",
    "content": "请整理术语表。\n领域：{{领域}}\n文中出现的词：{{词汇}}\n每个词给一句话解释、缩写、和它经常被错当成的另一个词。解释必须能让刚入门的人使用，不要只重复词根。",
    "variables": [
      { "name": "领域", "label": "领域", "defaultValue": "", "required": true },
      { "name": "词汇", "label": "词汇", "defaultValue": "", "required": true }
    ],
    "tags": ["术语", "词汇"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 13,
    "heat": 2200,
    "updatedAt": "2026-10-20"
  },
  {
    "id": "l14",
    "title": "周复习",
    "description": "用本周笔记决定下周复习什么，而不是全部重看。",
    "categoryId": "learning",
    "content": "请根据本周学习记录安排复习。\n记录：{{记录}}\n可用时间：{{时间}}\n选出最容易忘或还不能举例的三点，给出复习方式：回忆、做题或讲给别人。其余内容写明为什么这次可以不复习。",
    "variables": [
      { "name": "记录", "label": "学习记录", "defaultValue": "", "required": true },
      { "name": "时间", "label": "复习时间", "defaultValue": "40 分钟", "required": false }
    ],
    "tags": ["复习", "每周"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 14,
    "heat": 2700,
    "updatedAt": "2026-09-28"
  },
  {
    "id": "l15",
    "title": "学习目标改写",
    "description": "把「学会某某」改成可以观察的结果。",
    "categoryId": "learning",
    "content": "请把学习目标改成可观察的结果。\n原目标：{{目标}}\n时间：{{时间}}\n每个目标都写成：在什么条件下，我能独立做出什么。去掉「了解」「掌握」这类无法检查的词。如果原目标太大，拆成两个阶段。",
    "variables": [
      { "name": "目标", "label": "原目标", "defaultValue": "", "required": true },
      { "name": "时间", "label": "时间", "defaultValue": "两周", "required": false }
    ],
    "tags": ["目标", "学习"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 15,
    "heat": 3400,
    "updatedAt": "2026-10-01"
  }
]
