module.exports = [
  {
    "id": "o01",
    "title": "工作总结",
    "description": "按结果、做法和风险写一份能交差的工作总结。",
    "categoryId": "office",
    "content": "请把素材整理成工作总结。\n主题：{{主题}}\n素材：{{素材}}\n结构：先写完成了什么结果，再写关键做法，然后写未完成事项和原因，最后写下一步与需要的支持。保留素材中的数字和时间。素材没有的成绩不要补充。控制在 600 字以内。",
    "variables": [
      { "name": "主题", "label": "主题", "defaultValue": "", "required": true },
      { "name": "素材", "label": "素材", "defaultValue": "", "required": true }
    ],
    "tags": ["总结", "办公"],
    "difficulty": "beginner",
    "isFeatured": true,
    "sort": 1,
    "heat": 10200,
    "updatedAt": "2026-10-18"
  },
  {
    "id": "o02",
    "title": "会议纪要",
    "description": "把讨论收成决定、负责人和未决问题。",
    "categoryId": "office",
    "content": "请把会议记录整理成纪要。\n记录：{{记录}}\n输出：会议目的、已做决定、每项决定的负责人和时间、未决问题、下次会前要准备的材料。讨论过程只保留影响决定的一句。没有明确负责人的事项标成待指定。",
    "variables": [
      { "name": "记录", "label": "会议记录", "defaultValue": "", "required": true }
    ],
    "tags": ["会议", "纪要"],
    "difficulty": "beginner",
    "isFeatured": true,
    "sort": 2,
    "heat": 8800,
    "updatedAt": "2026-10-09"
  },
  {
    "id": "o03",
    "title": "PPT 大纲",
    "description": "按页写出标题和这一页只讲的一件事。",
    "categoryId": "office",
    "content": "请做一份演示大纲。\n主题：{{主题}}\n听众：{{听众}}\n时长：{{时长}}\n每页只放一个观点，写出页标题、页面上的三行以内要点、建议用的一个例子。总页数按时长控制，大约一分钟一页。不要写「谢谢观看」占掉内容页。",
    "variables": [
      { "name": "主题", "label": "主题", "defaultValue": "", "required": true },
      { "name": "听众", "label": "听众", "defaultValue": "同事", "required": false },
      { "name": "时长", "label": "时长", "defaultValue": "10 分钟", "required": false }
    ],
    "tags": ["PPT", "大纲"],
    "difficulty": "beginner",
    "isFeatured": true,
    "sort": 3,
    "heat": 9100,
    "updatedAt": "2026-09-30"
  },
  {
    "id": "o04",
    "title": "Excel 任务说明",
    "description": "把表格需求写成公式或步骤，而不是笼统地说整理一下。",
    "categoryId": "office",
    "content": "请把这个表格需求写成可执行步骤。\n表格里有：{{列}}\n要得到：{{结果}}\n说明用排序、筛选、数据透视还是公式。如果用公式，写出公式并解释每个区域。指出哪一列如果有空值会导致结果不可信。",
    "variables": [
      { "name": "列", "label": "现有列", "defaultValue": "", "required": true },
      { "name": "结果", "label": "想得到的结果", "defaultValue": "", "required": true }
    ],
    "tags": ["Excel", "表格"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 4,
    "heat": 6400,
    "updatedAt": "2026-09-14"
  },
  {
    "id": "o05",
    "title": "请假与交接",
    "description": "写明离开期间谁接手、什么事不能等。",
    "categoryId": "office",
    "content": "请写一段请假说明和交接清单。\n时间：{{时间}}\n正在推进的事：{{事项}}\n输出给上级的简短说明，以及给交接人的清单：事项、当前进度、到期日、相关文件在哪里、离开期间可以延后的事。",
    "variables": [
      { "name": "时间", "label": "请假时间", "defaultValue": "", "required": true },
      { "name": "事项", "label": "正在推进的事", "defaultValue": "", "required": true }
    ],
    "tags": ["请假", "交接"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 5,
    "heat": 2700,
    "updatedAt": "2026-08-20"
  },
  {
    "id": "o06",
    "title": "项目周报",
    "description": "用同一格式汇报进度、阻碍和需要决定的事。",
    "categoryId": "office",
    "content": "请根据素材写项目周报。\n项目：{{项目}}\n素材：{{素材}}\n固定四段：本周完成、与计划的差距、阻碍、需要谁在什么时间前做决定。没有阻碍就写「无」，不要用套话填满。",
    "variables": [
      { "name": "项目", "label": "项目", "defaultValue": "", "required": true },
      { "name": "素材", "label": "素材", "defaultValue": "", "required": true }
    ],
    "tags": ["周报", "项目"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 6,
    "heat": 5900,
    "updatedAt": "2026-10-05"
  },
  {
    "id": "o07",
    "title": "请示邮件",
    "description": "把选项、建议和需要拍板的点写在同一封邮件里。",
    "categoryId": "office",
    "content": "请写一封请示邮件。\n事项：{{事项}}\n可选方案：{{方案}}\n邮件要包含：背景不超过四行、方案对比、我的建议、希望对方回复的具体问题、期望回复日期。不要把压力转写成情绪。",
    "variables": [
      { "name": "事项", "label": "事项", "defaultValue": "", "required": true },
      { "name": "方案", "label": "可选方案", "defaultValue": "", "required": true }
    ],
    "tags": ["请示", "邮件"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 7,
    "heat": 3600,
    "updatedAt": "2026-09-08"
  },
  {
    "id": "o08",
    "title": "制度条文改写",
    "description": "把含糊的规定改成谁在什么条件下做什么。",
    "categoryId": "office",
    "content": "请改写这段制度，让它可以被执行。\n原文：{{原文}}\n每条都要能回答：谁、在什么条件下、做什么、例外是什么、违反后谁处理。原文没写的例外不要发明，改列为待确认。保留原意，标出你认为原意不清的句子。",
    "variables": [
      { "name": "原文", "label": "原文", "defaultValue": "", "required": true }
    ],
    "tags": ["制度", "改写"],
    "difficulty": "advanced",
    "isFeatured": false,
    "sort": 8,
    "heat": 2400,
    "updatedAt": "2026-08-28"
  },
  {
    "id": "o09",
    "title": "日程安排",
    "description": "把一天的事排进时间块，并留出缓冲。",
    "categoryId": "office",
    "content": "请帮我排今天的日程。\n必须完成：{{必须}}\n可以移动：{{可移动}}\n可用时间：{{时间}}\n按时间块输出，两件需要专注的事之间留出缓冲。标出如果被会议打断，哪一件可以挪到明天。不要把所有空档都填满。",
    "variables": [
      { "name": "必须", "label": "必须完成", "defaultValue": "", "required": true },
      { "name": "可移动", "label": "可以移动", "defaultValue": "无", "required": false },
      { "name": "时间", "label": "可用时间", "defaultValue": "9:00-18:00", "required": false }
    ],
    "tags": ["日程", "时间"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 9,
    "heat": 4100,
    "updatedAt": "2026-10-12"
  },
  {
    "id": "o10",
    "title": "复盘纪要",
    "description": "分开事实、判断和下次会改的动作。",
    "categoryId": "office",
    "content": "请做一次复盘。\n事情：{{事情}}\n经过：{{经过}}\n分成事实、当时的判断、结果、下次保留的做法、下次停止的做法。每条停止或保留都要对应经过里的具体行为，不要写成「加强沟通」。",
    "variables": [
      { "name": "事情", "label": "事情", "defaultValue": "", "required": true },
      { "name": "经过", "label": "经过", "defaultValue": "", "required": true }
    ],
    "tags": ["复盘", "总结"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 10,
    "heat": 4500,
    "updatedAt": "2026-09-19"
  },
  {
    "id": "o11",
    "title": "通知公告",
    "description": "让读者一眼看到时间变化和自己要做的事。",
    "categoryId": "office",
    "content": "请写一份内部通知。\n事项：{{事项}}\n生效时间：{{时间}}\n影响的人：{{对象}}\n第一句写变化是什么，接着写谁需要做什么，最后写咨询谁。不要用「现将有关事项通知如下」开头。",
    "variables": [
      { "name": "事项", "label": "事项", "defaultValue": "", "required": true },
      { "name": "时间", "label": "生效时间", "defaultValue": "", "required": true },
      { "name": "对象", "label": "影响的人", "defaultValue": "", "required": true }
    ],
    "tags": ["通知", "公告"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 11,
    "heat": 3300,
    "updatedAt": "2026-08-07"
  },
  {
    "id": "o12",
    "title": "阅读长文摘要",
    "description": "为忙的人摘要一篇材料，并标出页码或段落来源。",
    "categoryId": "office",
    "content": "请摘要这份材料。\n材料：{{材料}}\n读者要做的决定：{{决定}}\n用 8 条以内摘要，每条注明它来自材料的哪一部分。单独列出和这个决定相关的风险。材料没写的背景不要补充。",
    "variables": [
      { "name": "材料", "label": "材料", "defaultValue": "", "required": true },
      { "name": "决定", "label": "要做的决定", "defaultValue": "", "required": true }
    ],
    "tags": ["摘要", "阅读"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 12,
    "heat": 5200,
    "updatedAt": "2026-10-03"
  },
  {
    "id": "o13",
    "title": "跨部门协作说明",
    "description": "写清双方各自交付什么，避免责任写在一起。",
    "categoryId": "office",
    "content": "请写一份协作说明。\n目标：{{目标}}\n我方能做：{{我方}}\n需要对方做：{{对方}}\n用表格列出交付物、负责人所属、完成标准、日期。有依赖关系的步骤按顺序写。不要把「共同负责」当成负责人。",
    "variables": [
      { "name": "目标", "label": "目标", "defaultValue": "", "required": true },
      { "name": "我方", "label": "我方能做", "defaultValue": "", "required": true },
      { "name": "对方", "label": "需要对方做", "defaultValue": "", "required": true }
    ],
    "tags": ["协作", "分工"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 13,
    "heat": 2900,
    "updatedAt": "2026-09-23"
  },
  {
    "id": "o14",
    "title": "培训签到后的要点",
    "description": "把一场培训收成学员周一能用的清单。",
    "categoryId": "office",
    "content": "请把培训内容收成行动清单。\n培训主题：{{主题}}\n我记下的内容：{{笔记}}\n输出：三个可以直接试用的做法、每个做法的第一步、不适合使用的情况、还需要问讲师的问题。不要重讲整场培训。",
    "variables": [
      { "name": "主题", "label": "培训主题", "defaultValue": "", "required": true },
      { "name": "笔记", "label": "笔记", "defaultValue": "", "required": true }
    ],
    "tags": ["培训", "清单"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 14,
    "heat": 1800,
    "updatedAt": "2026-08-13"
  },
  {
    "id": "o15",
    "title": "客户拜访记录",
    "description": "记下对方原话、承诺和我们没回答上的问题。",
    "categoryId": "office",
    "content": "请整理客户拜访记录。\n客户：{{客户}}\n谈话要点：{{要点}}\n分成：对方的原话或诉求、我们当场承诺的事、没能回答的问题、建议的下一步和日期。承诺只写我提供的内容，不要脑补优惠。",
    "variables": [
      { "name": "客户", "label": "客户", "defaultValue": "", "required": true },
      { "name": "要点", "label": "谈话要点", "defaultValue": "", "required": true }
    ],
    "tags": ["客户", "拜访"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 15,
    "heat": 3100,
    "updatedAt": "2026-10-16"
  },
  {
    "id": "o16",
    "title": "表格口径核对",
    "description": "在汇总前先统一每个数字的定义。",
    "categoryId": "office",
    "content": "请帮我核对这些数字能不能放进同一张表。\n数字及来源：{{数字}}\n对每个数字写出：统计对象、时间范围、是否去重、和另一个数字相加是否有意义。如果口径不同，给出改法或建议不要比较。",
    "variables": [
      { "name": "数字", "label": "数字及来源", "defaultValue": "", "required": true }
    ],
    "tags": ["口径", "表格"],
    "difficulty": "advanced",
    "isFeatured": false,
    "sort": 16,
    "heat": 2600,
    "updatedAt": "2026-09-02"
  },
  {
    "id": "o17",
    "title": "发言提纲",
    "description": "为即将会上的三分钟发言准备提纲。",
    "categoryId": "office",
    "content": "请准备三分钟发言提纲。\n会议目的：{{目的}}\n我负责的部分：{{部分}}\n提纲只留：开场一句、两个事实、一个请求。每个事实下面写我要引用的材料。不要写成完整演讲稿。",
    "variables": [
      { "name": "目的", "label": "会议目的", "defaultValue": "", "required": true },
      { "name": "部分", "label": "我负责的部分", "defaultValue": "", "required": true }
    ],
    "tags": ["发言", "提纲"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 17,
    "heat": 2200,
    "updatedAt": "2026-10-21"
  },
  {
    "id": "o18",
    "title": "文件命名与归档",
    "description": "给一批文件定能检索的名字和文件夹规则。",
    "categoryId": "office",
    "content": "请为这些文件设计命名和归档规则。\n文件类型：{{类型}}\n谁会来找：{{使用者}}\n规则要包含日期格式、版本号放在哪里、草稿和终稿如何区分、过期文件放哪。给 5 个按此规则改好的示例文件名。",
    "variables": [
      { "name": "类型", "label": "文件类型", "defaultValue": "", "required": true },
      { "name": "使用者", "label": "使用者", "defaultValue": "本小组", "required": false }
    ],
    "tags": ["归档", "命名"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 18,
    "heat": 1500,
    "updatedAt": "2026-08-04"
  },
  {
    "id": "o19",
    "title": "差旅报销核对",
    "description": "按票据列出缺什么、哪一笔需要说明。",
    "categoryId": "office",
    "content": "请根据票据信息列出报销核对结果。\n行程：{{行程}}\n票据：{{票据}}\n规则：{{规则}}\n输出可以报的项目、缺少的票据、需要写情况说明的项目、金额合计前还不能确定的部分。规则没写的费用不要默认能报。",
    "variables": [
      { "name": "行程", "label": "行程", "defaultValue": "", "required": true },
      { "name": "票据", "label": "票据", "defaultValue": "", "required": true },
      { "name": "规则", "label": "报销规则", "defaultValue": "", "required": true }
    ],
    "tags": ["报销", "核对"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 19,
    "heat": 2000,
    "updatedAt": "2026-09-27"
  },
  {
    "id": "o20",
    "title": "一页纸项目简介",
    "description": "给不了解背景的人一页看完项目在做什么。",
    "categoryId": "office",
    "content": "请写一页纸项目简介。\n项目：{{项目}}\n读者：{{读者}}\n包含：要解决的问题、当前做法、这次要交付的东西、不在范围内的事、时间点、主要风险。全文不超过 400 字。读者不需要先了解内部缩写，缩写第一次要写出全称；如果我没给全称，就不要用缩写。",
    "variables": [
      { "name": "项目", "label": "项目", "defaultValue": "", "required": true },
      { "name": "读者", "label": "读者", "defaultValue": "新加入的同事", "required": false }
    ],
    "tags": ["简介", "项目"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 20,
    "heat": 3800,
    "updatedAt": "2026-10-14"
  }
]
