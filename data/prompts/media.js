module.exports = [
  {
    "id": "m01",
    "title": "选题判断",
    "description": "在写之前判断一个选题值不值得做、做成什么样。",
    "categoryId": "media",
    "content": "请判断这个选题。\n选题：{{选题}}\n账号平时讲：{{账号}}\n输出：适合的读者、读者已经知道什么、这篇能新增的信息、可能和别人重复的角度、建议做成短帖还是长文。如果信息增量不够，直接建议放弃，并给一个更窄的改法。",
    "variables": [
      { "name": "选题", "label": "选题", "defaultValue": "", "required": true },
      { "name": "账号", "label": "账号定位", "defaultValue": "", "required": true }
    ],
    "tags": ["选题", "自媒体"],
    "difficulty": "intermediate",
    "isFeatured": true,
    "sort": 1,
    "heat": 7900,
    "updatedAt": "2026-10-13"
  },
  {
    "id": "m02",
    "title": "标题与封面文案",
    "description": "同一内容写出标题和封面短句，避免两者说一样的话。",
    "categoryId": "media",
    "content": "请为这条内容写标题和封面短句。\n内容：{{内容}}\n平台：{{平台}}\n给 6 组。标题负责搜索或信息，封面短句不超过 8 个字，负责停住滑动。每组用一句话说明它强调的是结果、过程还是反差。不要使用无法兑现的「必看」「绝了」。",
    "variables": [
      { "name": "内容", "label": "内容", "defaultValue": "", "required": true },
      { "name": "平台", "label": "平台", "defaultValue": "小红书", "required": false }
    ],
    "tags": ["标题", "封面"],
    "difficulty": "beginner",
    "isFeatured": true,
    "sort": 2,
    "heat": 8600,
    "updatedAt": "2026-10-08"
  },
  {
    "id": "m03",
    "title": "评论区回复",
    "description": "按评论类型起草回复，不和读者争输赢。",
    "categoryId": "media",
    "content": "请为这些评论起草回复。\n原内容：{{内容}}\n评论：{{评论}}\n分成提问、补充、误解和攻击。提问要回答具体问题；误解先复述对方理解再澄清；攻击若无事实争议可以不回复，并说明理由。不要承诺私信发资料，除非我写了可以发。",
    "variables": [
      { "name": "内容", "label": "原内容", "defaultValue": "", "required": true },
      { "name": "评论", "label": "评论", "defaultValue": "", "required": true }
    ],
    "tags": ["评论", "互动"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 3,
    "heat": 3400,
    "updatedAt": "2026-09-16"
  },
  {
    "id": "m04",
    "title": "系列栏目设计",
    "description": "设计一个能连续更新、单篇也能看懂的栏目。",
    "categoryId": "media",
    "content": "请设计一个内容栏目。\n领域：{{领域}}\n更新频率：{{频率}}\n写出栏目名、固定结构、第一期到第四期各自的题目、每期需要的素材、什么样的选题不符合这个栏目。栏目名不要使用看不懂的英文缩写。",
    "variables": [
      { "name": "领域", "label": "领域", "defaultValue": "", "required": true },
      { "name": "频率", "label": "更新频率", "defaultValue": "每周一篇", "required": false }
    ],
    "tags": ["栏目", "系列"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 4,
    "heat": 2800,
    "updatedAt": "2026-08-24"
  },
  {
    "id": "m05",
    "title": "个人经历帖",
    "description": "把经历写成有细节的帖子，不编造成绩。",
    "categoryId": "media",
    "content": "请把这段经历写成帖子。\n经历：{{经历}}\n想让读者带走的一点：{{要点}}\n用第一人称。必须保留一个具体时间、一个物件或对话。不要添加粉丝数、收入和「因此成功」的结论，除非经历里写了。结尾只留一个问题。",
    "variables": [
      { "name": "经历", "label": "经历", "defaultValue": "", "required": true },
      { "name": "要点", "label": "想表达的一点", "defaultValue": "", "required": true }
    ],
    "tags": ["经历", "帖子"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 5,
    "heat": 4700,
    "updatedAt": "2026-09-25"
  },
  {
    "id": "m06",
    "title": "清单型笔记",
    "description": "把零散技巧收成可以照做的清单。",
    "categoryId": "media",
    "content": "请把这些技巧写成清单笔记。\n主题：{{主题}}\n技巧：{{技巧}}\n每条包含动作和做完能看到的结果。删掉重复项。超过 9 条就分成两组并说明分组理由。开头用两句说明这张清单不解决什么。",
    "variables": [
      { "name": "主题", "label": "主题", "defaultValue": "", "required": true },
      { "name": "技巧", "label": "技巧", "defaultValue": "", "required": true }
    ],
    "tags": ["清单", "笔记"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 6,
    "heat": 3900,
    "updatedAt": "2026-10-02"
  },
  {
    "id": "m07",
    "title": "热点回应边界",
    "description": "决定要不要追热点，以及能说和不能说的范围。",
    "categoryId": "media",
    "content": "请帮我判断要不要回应这个热点。\n热点：{{热点}}\n我的账号能提供的经验：{{经验}}\n输出：回应或不回应的建议、如果回应只使用哪些已有经验、明确不要评论的部分、一个不追热点也能讲同一经验的替选题。不确定事实时不要给立场。",
    "variables": [
      { "name": "热点", "label": "热点", "defaultValue": "", "required": true },
      { "name": "经验", "label": "已有经验", "defaultValue": "", "required": true }
    ],
    "tags": ["热点", "边界"],
    "difficulty": "advanced",
    "isFeatured": false,
    "sort": 7,
    "heat": 3100,
    "updatedAt": "2026-09-11"
  },
  {
    "id": "m08",
    "title": "直播提纲",
    "description": "按时间段写直播在讲什么、演示什么、何时互动。",
    "categoryId": "media",
    "content": "请写直播提纲。\n主题：{{主题}}\n时长：{{时长}}\n分成开场、演示、答疑三段，写每段分钟数、要展示的屏幕或物件、准备好的两个问题。不要安排没有产品或内容支撑的抽奖承诺。",
    "variables": [
      { "name": "主题", "label": "主题", "defaultValue": "", "required": true },
      { "name": "时长", "label": "时长", "defaultValue": "40 分钟", "required": false }
    ],
    "tags": ["直播", "提纲"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 8,
    "heat": 2600,
    "updatedAt": "2026-08-19"
  },
  {
    "id": "m09",
    "title": "旧文翻新",
    "description": "在事实仍成立的前提下，把旧文改成现在还能发的版本。",
    "categoryId": "media",
    "content": "请翻新这篇旧文。\n旧文：{{旧文}}\n现在仍成立的事实：{{事实}}\n需要删掉或标注过时的句子，保留还能用的例子，补一个新的开头。不要把旧数据改成新数据，除非我提供了新数字。",
    "variables": [
      { "name": "旧文", "label": "旧文", "defaultValue": "", "required": true },
      { "name": "事实", "label": "仍成立的事实", "defaultValue": "", "required": true }
    ],
    "tags": ["翻新", "改写"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 9,
    "heat": 2200,
    "updatedAt": "2026-09-06"
  },
  {
    "id": "m10",
    "title": "合作brief拆解",
    "description": "把品牌合作要求拆成能执行的内容要点和风险。",
    "categoryId": "media",
    "content": "请拆解这份合作要求。\n要求原文：{{要求}}\n我的账号能做的形式：{{形式}}\n输出：必须出现的信息、不能承诺的效果、建议的内容结构、需要向对方确认的问题。如果要求与我能做的形式冲突，直接指出冲突。",
    "variables": [
      { "name": "要求", "label": "合作要求", "defaultValue": "", "required": true },
      { "name": "形式", "label": "我能做的形式", "defaultValue": "", "required": true }
    ],
    "tags": ["合作", "brief"],
    "difficulty": "advanced",
    "isFeatured": false,
    "sort": 10,
    "heat": 2400,
    "updatedAt": "2026-10-17"
  },
  {
    "id": "m11",
    "title": "粉丝常见问题合集",
    "description": "把重复问题收成一篇可以置顶的回答。",
    "categoryId": "media",
    "content": "请把这些问题整理成一篇置顶回答。\n领域：{{领域}}\n问题：{{问题}}\n合并重复问题，每个问题用三句话回答，并注明哪种情况这个回答不适用。没有把握的问题列为需要我补充资料，不要编造步骤。",
    "variables": [
      { "name": "领域", "label": "领域", "defaultValue": "", "required": true },
      { "name": "问题", "label": "问题列表", "defaultValue": "", "required": true }
    ],
    "tags": ["问答", "置顶"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 11,
    "heat": 3000,
    "updatedAt": "2026-09-20"
  },
  {
    "id": "m12",
    "title": "一周内容排期",
    "description": "按现有素材排七天，而不是每天都从零想选题。",
    "categoryId": "media",
    "content": "请排接下来七天的内容。\n账号定位：{{定位}}\n已有素材：{{素材}}\n每天写形式、题目、要用的素材、预计制作时间。至少留两天用现成素材。如果素材不够七天，宁可减少更新，不要发明没素材的选题。",
    "variables": [
      { "name": "定位", "label": "账号定位", "defaultValue": "", "required": true },
      { "name": "素材", "label": "已有素材", "defaultValue": "", "required": true }
    ],
    "tags": ["排期", "计划"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 12,
    "heat": 3600,
    "updatedAt": "2026-10-05"
  },
  {
    "id": "m13",
    "title": "数据复盘帖",
    "description": "只根据给出的数据解释哪条内容表现不同。",
    "categoryId": "media",
    "content": "请根据数据做内容复盘。\n各条内容的数据：{{数据}}\n比较标题、形式和主题的差异，给出两个下一步可以验证的改动。样本很少时要说明不能下结论。不要把播放量直接解释成内容质量。",
    "variables": [
      { "name": "数据", "label": "内容数据", "defaultValue": "", "required": true }
    ],
    "tags": ["复盘", "数据"],
    "difficulty": "advanced",
    "isFeatured": false,
    "sort": 13,
    "heat": 2700,
    "updatedAt": "2026-09-29"
  },
  {
    "id": "m14",
    "title": "开箱笔记结构",
    "description": "按真实使用顺序写开箱，不写没有做过的测试。",
    "categoryId": "media",
    "content": "请写开箱笔记提纲。\n物品：{{物品}}\n我实际做了的事：{{使用}}\n顺序：外观和配件、第一次使用卡住的地方、使用一天后的判断、不适合谁。没做过的测试不要写。广告信息只放在我提供的事实里。",
    "variables": [
      { "name": "物品", "label": "物品", "defaultValue": "", "required": true },
      { "name": "使用", "label": "实际使用", "defaultValue": "", "required": true }
    ],
    "tags": ["开箱", "测评"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 14,
    "heat": 4100,
    "updatedAt": "2026-08-11"
  },
  {
    "id": "m15",
    "title": "故事脚本三十秒",
    "description": "用一个场景讲清一个观点。",
    "categoryId": "media",
    "content": "请用一个场景写 30 秒脚本。\n观点：{{观点}}\n可用场景：{{场景}}\n只允许一个地点和两句对话。开头就能看到冲突，结尾用动作而不是口号收住。如果场景支撑不了观点，请换一种更小的说法。",
    "variables": [
      { "name": "观点", "label": "观点", "defaultValue": "", "required": true },
      { "name": "场景", "label": "场景", "defaultValue": "", "required": true }
    ],
    "tags": ["脚本", "故事"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 15,
    "heat": 2500,
    "updatedAt": "2026-10-19"
  },
  {
    "id": "m16",
    "title": "账号简介",
    "description": "用一两句说清账号给谁看、能看到什么。",
    "categoryId": "media",
    "content": "请写账号简介。\n给谁看：{{读者}}\n持续提供：{{内容}}\n给 5 个版本，每个不超过 40 字。必须同时出现读者和内容类型。不要写「分享生活的点点滴滴」这种无法分辨的句子。",
    "variables": [
      { "name": "读者", "label": "读者", "defaultValue": "", "required": true },
      { "name": "内容", "label": "持续提供的内容", "defaultValue": "", "required": true }
    ],
    "tags": ["简介", "账号"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 16,
    "heat": 3300,
    "updatedAt": "2026-09-03"
  },
  {
    "id": "m17",
    "title": "系列封面统一",
    "description": "规定系列内容的标题公式和封面信息位置。",
    "categoryId": "media",
    "content": "请为系列内容定统一规则。\n系列名：{{系列}}\n已有三期标题：{{标题}}\n输出：标题公式、封面上固定出现的信息、每期可以变的只有哪一项。用已有标题各改一版作为例子，改动要能看出来属于同一系列。",
    "variables": [
      { "name": "系列", "label": "系列名", "defaultValue": "", "required": true },
      { "name": "标题", "label": "已有标题", "defaultValue": "", "required": true }
    ],
    "tags": ["系列", "封面"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 17,
    "heat": 1900,
    "updatedAt": "2026-08-27"
  },
  {
    "id": "m18",
    "title": "采访当事人提纲",
    "description": "向当事人提问时避免诱导和空泛感受。",
    "categoryId": "media",
    "content": "请准备采访提纲。\n人物身份：{{身份}}\n想了解的决定：{{决定}}\n问题要问当时的选项、信息和约束，而不是「你勇不勇敢」。准备 8 个问题，并标出哪些问题如果对方不愿答可以跳过。",
    "variables": [
      { "name": "身份", "label": "人物身份", "defaultValue": "", "required": true },
      { "name": "决定", "label": "想了解的决定", "defaultValue": "", "required": true }
    ],
    "tags": ["采访", "提纲"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 18,
    "heat": 1700,
    "updatedAt": "2026-09-18"
  },
  {
    "id": "m19",
    "title": "内容合规自检",
    "description": "发布前检查夸大承诺、未标注的广告和无法证实的数据。",
    "categoryId": "media",
    "content": "请在发布前检查这篇内容。\n正文：{{正文}}\n是否商业合作：{{合作}}\n标出绝对化承诺、没有来源的数据、可能被理解成医疗或金融建议的句子、广告却没有标明的位置。给出改写，不扩大原意。我没有授权的合作不要写成已合作。",
    "variables": [
      { "name": "正文", "label": "正文", "defaultValue": "", "required": true },
      { "name": "合作", "label": "是否商业合作", "defaultValue": "不是", "required": false }
    ],
    "tags": ["合规", "自检"],
    "difficulty": "advanced",
    "isFeatured": false,
    "sort": 19,
    "heat": 2100,
    "updatedAt": "2026-10-22"
  },
  {
    "id": "m20",
    "title": "读者来信回复",
    "description": "认真回复一个具体处境，不给万能人生建议。",
    "categoryId": "media",
    "content": "请回复这封读者来信。\n来信：{{来信}}\n我有把握的经验范围：{{范围}}\n先复述对方的处境，再只在经验范围内给一个可试的做法和一个不做的建议。超出范围就说明我不能判断，并建议对方寻找哪类专业帮助，不要假装诊断。",
    "variables": [
      { "name": "来信", "label": "来信", "defaultValue": "", "required": true },
      { "name": "范围", "label": "经验范围", "defaultValue": "", "required": true }
    ],
    "tags": ["回复", "读者"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 20,
    "heat": 1800,
    "updatedAt": "2026-09-22"
  }
]
