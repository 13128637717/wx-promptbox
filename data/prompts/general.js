module.exports = [
  {
    "id": "g01",
    "title": "角色设定",
    "description": "给助手一个清晰角色、边界和不知道时该怎么说。",
    "categoryId": "general",
    "content": "请根据下面的要求，先复述你的角色，再等待我的具体任务。\n角色：{{角色}}\n服务对象：{{对象}}\n你需要做到：先澄清任务，再给步骤；不知道就说明不知道；不替我做没有信息支持的决定。\n现在请只确认角色和你会拒绝的两类请求。",
    "variables": [
      { "name": "角色", "label": "角色", "defaultValue": "", "required": true },
      { "name": "对象", "label": "服务对象", "defaultValue": "我自己", "required": false }
    ],
    "tags": ["角色", "助手"],
    "difficulty": "beginner",
    "isFeatured": true,
    "sort": 1,
    "heat": 5000,
    "updatedAt": "2026-10-09"
  },
  {
    "id": "g02",
    "title": "翻译并保留语气",
    "description": "翻译时保留正式或随意的语气，并标出不确定的词。",
    "categoryId": "general",
    "content": "请翻译这段文字。\n目标语言：{{语言}}\n原文：{{原文}}\n保留人称和语气。专有名词第一次可以在括号里留原文。不确定的词用括号标注，不要为了通顺添加原文没有的信息。译完后用两句说明你做了哪些意译。",
    "variables": [
      { "name": "语言", "label": "目标语言", "defaultValue": "英文", "required": false },
      { "name": "原文", "label": "原文", "defaultValue": "", "required": true }
    ],
    "tags": ["翻译", "语气"],
    "difficulty": "beginner",
    "isFeatured": true,
    "sort": 2,
    "heat": 7200,
    "updatedAt": "2026-09-27"
  },
  {
    "id": "g03",
    "title": "决策对照",
    "description": "把两个选项的差别写成可比较的表，不替我选择。",
    "categoryId": "general",
    "content": "请比较这两个选项，但不要替我做决定。\n选项：{{选项}}\n我在意的标准：{{标准}}\n按标准列表格。信息不足的格子写未知。最后只问我还缺哪一个标准的权重，以便我自己选。",
    "variables": [
      { "name": "选项", "label": "选项", "defaultValue": "", "required": true },
      { "name": "标准", "label": "在意的标准", "defaultValue": "", "required": true }
    ],
    "tags": ["决策", "比较"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 3,
    "heat": 3400,
    "updatedAt": "2026-10-14"
  },
  {
    "id": "g04",
    "title": "清单生成",
    "description": "把一件模糊的事拆成可以勾选的清单。",
    "categoryId": "general",
    "content": "请把这件事做成清单。\n事情：{{事情}}\n完成的标准：{{标准}}\n每项都是一个动作，包含完成时能看到的结果。超过 10 项就分组。标出必须按顺序做的步骤。不要加入事情里没提到的购物或工具，除非没有它就做不了，并说明原因。",
    "variables": [
      { "name": "事情", "label": "事情", "defaultValue": "", "required": true },
      { "name": "标准", "label": "完成标准", "defaultValue": "", "required": true }
    ],
    "tags": ["清单", "拆解"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 4,
    "heat": 4600,
    "updatedAt": "2026-09-12"
  },
  {
    "id": "g05",
    "title": "会议前准备",
    "description": "在开会前整理目标、材料和想问的问题。",
    "categoryId": "general",
    "content": "请帮我准备这次会面。\n目的：{{目的}}\n对方：{{对方}}\n我已有的材料：{{材料}}\n输出：开场要说的两句、必须确认的问题、可以不谈的话题、会后要发出的记录要点。材料里没有的承诺不要提前写进开场。",
    "variables": [
      { "name": "目的", "label": "目的", "defaultValue": "", "required": true },
      { "name": "对方", "label": "对方", "defaultValue": "", "required": true },
      { "name": "材料", "label": "已有材料", "defaultValue": "无", "required": false }
    ],
    "tags": ["准备", "会议"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 5,
    "heat": 2900,
    "updatedAt": "2026-08-30"
  },
  {
    "id": "g06",
    "title": "文本校对",
    "description": "只改语病和不一致，不改写作者的观点。",
    "categoryId": "general",
    "content": "请校对下面的文字。\n文字：{{文字}}\n修正错别字、标点和明显病句。列出你改了什么。不要为了文采重写，不要改变观点和数字。遇到可能有两种理解的句子，提出问题而不是自行选择。",
    "variables": [
      { "name": "文字", "label": "文字", "defaultValue": "", "required": true }
    ],
    "tags": ["校对", "文字"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 6,
    "heat": 5100,
    "updatedAt": "2026-10-17"
  },
  {
    "id": "g07",
    "title": "解释给非专业的人",
    "description": "把一段专业说明改成没有该背景的人能照做的话。",
    "categoryId": "general",
    "content": "请把说明改写给没有这个背景的人。\n读者要完成的事：{{任务}}\n原文：{{原文}}\n先说结果，再说步骤。术语保留但立刻用一句话解释。删掉与完成任务无关的历史。如果原文缺少关键步骤，列出缺失，不要编。",
    "variables": [
      { "name": "任务", "label": "读者要完成的事", "defaultValue": "", "required": true },
      { "name": "原文", "label": "原文", "defaultValue": "", "required": true }
    ],
    "tags": ["解释", "改写"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 7,
    "heat": 3700,
    "updatedAt": "2026-09-06"
  },
  {
    "id": "g08",
    "title": "旅行当天安排",
    "description": "按交通和开门时间排一天，留下吃饭和缓冲。",
    "categoryId": "general",
    "content": "请安排这一天。\n城市和日期：{{日期}}\n想去的地方：{{地点}}\n出发和返回约束：{{约束}}\n按时间排列，标出哪些地方相邻、哪里需要提前预约。午餐单独留出。如果一天塞不下，明确建议删掉哪一个并说明原因。不要编造门票价格。",
    "variables": [
      { "name": "日期", "label": "城市和日期", "defaultValue": "", "required": true },
      { "name": "地点", "label": "想去的地方", "defaultValue": "", "required": true },
      { "name": "约束", "label": "交通约束", "defaultValue": "", "required": true }
    ],
    "tags": ["旅行", "安排"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 8,
    "heat": 2800,
    "updatedAt": "2026-08-10"
  },
  {
    "id": "g09",
    "title": "家务分工",
    "description": "把重复家务写成负责人和完成标准。",
    "categoryId": "general",
    "content": "请帮我们分这些家务。\n家务：{{家务}}\n参与的人：{{人员}}\n每项写出频率、完成时的样子、建议负责人。负担按次数和耗时粗略平衡，并留出可以交换的两项。不要假设谁更应该做某一类。",
    "variables": [
      { "name": "家务", "label": "家务", "defaultValue": "", "required": true },
      { "name": "人员", "label": "参与的人", "defaultValue": "", "required": true }
    ],
    "tags": ["家务", "分工"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 9,
    "heat": 1600,
    "updatedAt": "2026-09-20"
  },
  {
    "id": "g10",
    "title": "礼物选择",
    "description": "根据对方的限制选礼物，不按节日套路推荐。",
    "categoryId": "general",
    "content": "请帮我想礼物。\n对方近况：{{近况}}\n不能送的东西：{{限制}}\n预算：{{预算}}\n给 3 个具体方向，每个说明为什么适合近况、大概落在预算的哪一档、什么情况下不该送。不要推荐需要对方爱好假设才能成立的东西。",
    "variables": [
      { "name": "近况", "label": "对方近况", "defaultValue": "", "required": true },
      { "name": "限制", "label": "限制", "defaultValue": "无特别限制", "required": false },
      { "name": "预算", "label": "预算", "defaultValue": "", "required": true }
    ],
    "tags": ["礼物", "选择"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 10,
    "heat": 2100,
    "updatedAt": "2026-10-22"
  },
  {
    "id": "g11",
    "title": "困难对话草稿",
    "description": "起草一次需要说清事实和请求的对话。",
    "categoryId": "general",
    "content": "请起草一段对话。\n事实：{{事实}}\n我的请求：{{请求}}\n开场先说事实，再说感受只限一句，然后提出可接受的请求。准备对方如果拒绝时的下一句。不要写指责人格的句子，不要替对方承认错误。",
    "variables": [
      { "name": "事实", "label": "事实", "defaultValue": "", "required": true },
      { "name": "请求", "label": "请求", "defaultValue": "", "required": true }
    ],
    "tags": ["对话", "沟通"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 11,
    "heat": 3900,
    "updatedAt": "2026-09-15"
  },
  {
    "id": "g12",
    "title": "信息来源核对",
    "description": "区分一段话里哪些是事实、哪些是转述、哪些没来源。",
    "categoryId": "general",
    "content": "请核对这段话的信息来源。\n文字：{{文字}}\n把句子分成：有明确来源、只是转述、无法判断。对无法判断的句子，写出需要查找的关键词。不要自行搜索后假装已经证实，这个环境里你只能根据我给的文字判断。",
    "variables": [
      { "name": "文字", "label": "文字", "defaultValue": "", "required": true }
    ],
    "tags": ["核对", "来源"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 12,
    "heat": 2400,
    "updatedAt": "2026-08-19"
  },
  {
    "id": "g13",
    "title": "个人说明压缩",
    "description": "把一段自我介绍压到指定长度，保留最相关的事实。",
    "categoryId": "general",
    "content": "请压缩这段自我介绍。\n场合：{{场合}}\n原文：{{原文}}\n字数不超过 {{字数}}。只留和场合相关的经历，删掉形容词堆叠。给出一版书面和一版口语。不要新增原文没有的头衔。",
    "variables": [
      { "name": "场合", "label": "场合", "defaultValue": "", "required": true },
      { "name": "原文", "label": "原文", "defaultValue": "", "required": true },
      { "name": "字数", "label": "字数", "defaultValue": "120", "required": false }
    ],
    "tags": ["介绍", "压缩"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 13,
    "heat": 3100,
    "updatedAt": "2026-10-04"
  },
  {
    "id": "g14",
    "title": "步骤说明书",
    "description": "把一件你会做的事写成别人能跟着做的说明。",
    "categoryId": "general",
    "content": "请把我的做法写成说明书。\n事情：{{事情}}\n我的做法：{{做法}}\n按步骤编号，每步写动作、所需物品和做完的样子。把我省略的「然后就好了」追问成具体动作；如果我没写，就列为需要补充，不要猜。",
    "variables": [
      { "name": "事情", "label": "事情", "defaultValue": "", "required": true },
      { "name": "做法", "label": "我的做法", "defaultValue": "", "required": true }
    ],
    "tags": ["说明", "步骤"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 14,
    "heat": 2600,
    "updatedAt": "2026-09-25"
  },
  {
    "id": "g15",
    "title": "每日收尾",
    "description": "用几分钟记下今天完成的、卡住的和明天第一件。",
    "categoryId": "general",
    "content": "请根据我今天的记录做收尾。\n记录：{{记录}}\n输出三行：完成的具体结果、仍卡住的一个问题、明天开始时的第一件小事。第一件要小到 15 分钟内能开工。不要评价我的效率，不要追加新的长期计划。",
    "variables": [
      { "name": "记录", "label": "今天的记录", "defaultValue": "", "required": true }
    ],
    "tags": ["每日", "收尾"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 15,
    "heat": 4300,
    "updatedAt": "2026-10-20"
  }
]
