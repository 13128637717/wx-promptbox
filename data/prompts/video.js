module.exports = [
  {
    "id": "v01",
    "title": "视频脚本",
    "description": "按主题写出有镜头、台词和时长的短视频脚本。",
    "categoryId": "video",
    "content": "请写一条短视频脚本。\n主题：{{主题}}\n时长：{{时长}}\n按秒给出：画面、台词或字幕、音效。开头 3 秒必须出现主题里的具体物件或动作。结尾留一个可以继续拍下一条的问题。不要写成文章。",
    "variables": [
      { "name": "主题", "label": "主题", "defaultValue": "", "required": true },
      { "name": "时长", "label": "时长", "defaultValue": "30 秒", "required": false }
    ],
    "tags": ["脚本", "短视频"],
    "difficulty": "beginner",
    "isFeatured": true,
    "sort": 1,
    "heat": 7400,
    "updatedAt": "2026-10-15"
  },
  {
    "id": "v02",
    "title": "分镜表",
    "description": "把一段叙述拆成可以拍摄的镜头表。",
    "categoryId": "video",
    "content": "请把内容拆成分镜表。\n内容：{{内容}}\n表格列：镜号、景别、画面、台词、秒数。总时长控制在 {{时长}}。同一信息不要用三个相似中景重复。最后标出哪一镜是封面帧。",
    "variables": [
      { "name": "内容", "label": "内容", "defaultValue": "", "required": true },
      { "name": "时长", "label": "时长", "defaultValue": "45 秒", "required": false }
    ],
    "tags": ["分镜", "拍摄"],
    "difficulty": "intermediate",
    "isFeatured": true,
    "sort": 2,
    "heat": 5600,
    "updatedAt": "2026-09-24"
  },
  {
    "id": "v03",
    "title": "产品演示镜头",
    "description": "只拍使用过程，不拍无法证明的功效。",
    "categoryId": "video",
    "content": "请为产品写演示镜头。\n产品：{{产品}}\n要演示的动作：{{动作}}\n输出 6 个镜头：开箱或入画、手部操作、结果特写、错误用法对照（如果有）、使用环境、结尾定格。每个镜头写清能看清的细节。不要出现未提供的实验数据。",
    "variables": [
      { "name": "产品", "label": "产品", "defaultValue": "", "required": true },
      { "name": "动作", "label": "动作", "defaultValue": "", "required": true }
    ],
    "tags": ["产品", "演示"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 3,
    "heat": 4900,
    "updatedAt": "2026-10-06"
  },
  {
    "id": "v04",
    "title": "口播提词",
    "description": "写成看提词器也不会拗口的句子。",
    "categoryId": "video",
    "content": "请把要点写成口播提词。\n要点：{{要点}}\n每句不超过 18 个字，标出换气位置。先给一句能在前两秒说完的钩子，再讲一个例子，最后告诉观众下一步看什么。删掉「大家好我是」这种开场。",
    "variables": [
      { "name": "要点", "label": "要点", "defaultValue": "", "required": true }
    ],
    "tags": ["口播", "提词"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 4,
    "heat": 6300,
    "updatedAt": "2026-09-12"
  },
  {
    "id": "v05",
    "title": "教程步骤视频",
    "description": "把操作拆成观众能暂停照做的步骤。",
    "categoryId": "video",
    "content": "请把这个操作写成教程视频脚本。\n操作：{{操作}}\n观众基础：{{基础}}\n每一步都要有：画面里必须出现的东西、嘴里要说的那一句、做完怎样算对。超过 7 步就合并。开头说明做完能得到什么，而不是介绍自己。",
    "variables": [
      { "name": "操作", "label": "操作", "defaultValue": "", "required": true },
      { "name": "基础", "label": "观众基础", "defaultValue": "第一次接触", "required": false }
    ],
    "tags": ["教程", "步骤"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 5,
    "heat": 4100,
    "updatedAt": "2026-08-23"
  },
  {
    "id": "v06",
    "title": "访谈切片选题",
    "description": "从一场访谈里挑出可以独立成片的段落。",
    "categoryId": "video",
    "content": "请从访谈记录里挑切片。\n记录：{{记录}}\n挑出 5 段。每段给出：起止话题、为什么单独能看懂、建议标题、需要打在画面上的一句原话。不要挑选只有上下文才成立的段落。",
    "variables": [
      { "name": "记录", "label": "访谈记录", "defaultValue": "", "required": true }
    ],
    "tags": ["访谈", "切片"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 6,
    "heat": 2800,
    "updatedAt": "2026-09-05"
  },
  {
    "id": "v07",
    "title": "视频开头三秒",
    "description": "只设计开头，让人知道这条视频要解决什么。",
    "categoryId": "video",
    "content": "请只设计视频的前 3 秒。\n这条视频要说明：{{目的}}\n给出 4 个开头方案。每个方案包含画面和第一句台词，并说明它靠冲突、演示还是提问留下人。不要四个方案都是对着镜头打招呼。",
    "variables": [
      { "name": "目的", "label": "目的", "defaultValue": "", "required": true }
    ],
    "tags": ["开头", "钩子"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 7,
    "heat": 6700,
    "updatedAt": "2026-10-19"
  },
  {
    "id": "v08",
    "title": "字幕稿整理",
    "description": "把口语整理成能看的字幕，同时保留说话人的意思。",
    "categoryId": "video",
    "content": "请把口语整理成字幕。\n原文：{{原文}}\n每行不超过 16 个字，去掉无意义重复，保留关键数字和否定词。标出你不确定听写是否正确的词。不要把口语改成书面演讲。",
    "variables": [
      { "name": "原文", "label": "口语原文", "defaultValue": "", "required": true }
    ],
    "tags": ["字幕", "整理"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 8,
    "heat": 3500,
    "updatedAt": "2026-08-31"
  },
  {
    "id": "v09",
    "title": "系列视频规划",
    "description": "把一个主题拆成彼此能独立观看的系列。",
    "categoryId": "video",
    "content": "请把主题规划成系列短视频。\n主题：{{主题}}\n集数：{{集数}}\n每集写：标题、这一集只回答的一个问题、需要的素材、和上一集的连接句。观众随机点开任何一集都要能看懂，不要把关键信息只放在第一集。",
    "variables": [
      { "name": "主题", "label": "主题", "defaultValue": "", "required": true },
      { "name": "集数", "label": "集数", "defaultValue": "5", "required": false }
    ],
    "tags": ["系列", "规划"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 9,
    "heat": 3000,
    "updatedAt": "2026-09-17"
  },
  {
    "id": "v10",
    "title": "画面与旁白对齐",
    "description": "检查旁白说到某物时，画面是否真的出现了它。",
    "categoryId": "video",
    "content": "请检查旁白和画面是否对齐。\n旁白：{{旁白}}\n现有画面：{{画面}}\n按句子列出：说到什么、画面应该出现什么、现有画面是否够。缺的镜头单独列成补拍清单，每条写景别和时长。",
    "variables": [
      { "name": "旁白", "label": "旁白", "defaultValue": "", "required": true },
      { "name": "画面", "label": "现有画面", "defaultValue": "", "required": true }
    ],
    "tags": ["旁白", "对齐"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 10,
    "heat": 2200,
    "updatedAt": "2026-10-01"
  },
  {
    "id": "v11",
    "title": "活动回顾成片",
    "description": "用时间顺序之外的结构剪一条回顾，而不是流水账。",
    "categoryId": "video",
    "content": "请为活动设计回顾视频结构。\n活动：{{活动}}\n可用素材：{{素材}}\n不要按日程表罗列。用「一个参与者的路径」来组织：到达、参与、离开时带走什么。标出素材里没有、需要补一句字幕说明的缺口。",
    "variables": [
      { "name": "活动", "label": "活动", "defaultValue": "", "required": true },
      { "name": "素材", "label": "可用素材", "defaultValue": "", "required": true }
    ],
    "tags": ["回顾", "活动"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 11,
    "heat": 1900,
    "updatedAt": "2026-08-15"
  },
  {
    "id": "v12",
    "title": "转场理由",
    "description": "只在场景或时间变化时使用转场，并写明原因。",
    "categoryId": "video",
    "content": "请为这个脚本标注转场。\n脚本：{{脚本}}\n默认硬切。只有地点、时间或视角变化时才使用转场，并写出为什么。如果连续镜头都在同一张桌子上，请明确写不要加花哨转场。",
    "variables": [
      { "name": "脚本", "label": "脚本", "defaultValue": "", "required": true }
    ],
    "tags": ["剪辑", "转场"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 12,
    "heat": 1600,
    "updatedAt": "2026-09-09"
  },
  {
    "id": "v13",
    "title": "封面与标题组合",
    "description": "封面文字和标题不要重复同一句话。",
    "categoryId": "video",
    "content": "请为视频设计封面文字和标题。\n视频内容：{{内容}}\n给 3 组。每组包含：封面上不超过 8 个字、标题不超过 22 个字、它们各自承担的信息。封面负责吸引注意，标题负责说明看完能得到什么，两者不要逐字重复。",
    "variables": [
      { "name": "内容", "label": "视频内容", "defaultValue": "", "required": true }
    ],
    "tags": ["封面", "标题"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 13,
    "heat": 5200,
    "updatedAt": "2026-10-11"
  },
  {
    "id": "v14",
    "title": "无对白镜头描述",
    "description": "用动作和环境声讲清楚一件事，不依赖旁白。",
    "categoryId": "video",
    "content": "请写一条没有对白的镜头描述。\n要表达：{{表达}}\n用 5 个镜头，只能靠动作、物件和环境声。每个镜头写观众应该推断出的信息。如果某个信息无法用画面表达，请改掉它，不要偷偷加旁白。",
    "variables": [
      { "name": "表达", "label": "要表达的事", "defaultValue": "", "required": true }
    ],
    "tags": ["镜头", "无对白"],
    "difficulty": "advanced",
    "isFeatured": false,
    "sort": 14,
    "heat": 2100,
    "updatedAt": "2026-09-28"
  },
  {
    "id": "v15",
    "title": "拍摄清单",
    "description": "出发前列出镜头、道具和容易漏拍的空镜。",
    "categoryId": "video",
    "content": "请根据脚本列拍摄清单。\n脚本：{{脚本}}\n分成：必须拍到的镜头、道具、场地条件、容易忘记的空镜和手部特写。每项注明可以补拍还是必须现场完成。不要增加脚本里没有的剧情。",
    "variables": [
      { "name": "脚本", "label": "脚本", "defaultValue": "", "required": true }
    ],
    "tags": ["拍摄", "清单"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 15,
    "heat": 3400,
    "updatedAt": "2026-10-20"
  }
]
