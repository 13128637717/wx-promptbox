module.exports = [
  {
    "id": "w01",
    "title": "小红书爆款文案生成",
    "description": "按主题生成可直接发布的小红书笔记，含标题、正文和话题标签。",
    "categoryId": "writing",
    "content": "你是一位小红书爆款文案创作者。请根据主题写一篇能直接发布的笔记。\n要求：\n1. 语言真实、亲切，有具体细节，不要空泛口号\n2. 结构：标题 + 正文 + 5 个话题标签\n3. 标题不超过 20 个字，正文 300 到 500 字\n4. 先给 1 个推荐标题，再给 2 个备选标题\n主题：{{主题}}",
    "variables": [
      { "name": "主题", "label": "主题", "defaultValue": "", "required": true }
    ],
    "tags": ["小红书", "文案", "种草"],
    "difficulty": "beginner",
    "isFeatured": true,
    "sort": 1,
    "heat": 12000,
    "updatedAt": "2026-10-18"
  },
  {
    "id": "w02",
    "title": "公众号文章",
    "description": "按主题和读者写出有结构的公众号长文大纲与正文。",
    "categoryId": "writing",
    "content": "你是资深公众号编辑。请围绕主题写一篇文章。\n读者：{{读者}}\n要求：\n1. 标题 2 个，一个偏信息、一个偏情绪\n2. 用小标题分成 4 到 6 节，每节先讲一个具体场景再给做法\n3. 正文约 1200 字，结尾给出可执行的下一步\n4. 不要使用夸张承诺和虚假数据\n主题：{{主题}}",
    "variables": [
      { "name": "主题", "label": "主题", "defaultValue": "", "required": true },
      { "name": "读者", "label": "读者", "defaultValue": "对这个话题有兴趣的普通读者", "required": false }
    ],
    "tags": ["公众号", "长文", "写作"],
    "difficulty": "intermediate",
    "isFeatured": true,
    "sort": 2,
    "heat": 9800,
    "updatedAt": "2026-10-12"
  },
  {
    "id": "w03",
    "title": "文章标题十连发",
    "description": "同一个内容给出 10 个不同角度的标题，并说明适合的渠道。",
    "categoryId": "writing",
    "content": "请为下面的内容写 10 个标题。\n内容：{{内容}}\n要求：\n1. 覆盖疑问、数字、对比、场景、好处五种角度\n2. 每个标题不超过 22 个字\n3. 在标题后用一句话说明它适合公众号、短视频还是搜索\n4. 不要标题党，不承诺未在原文出现的结果",
    "variables": [
      { "name": "内容", "label": "内容", "defaultValue": "", "required": true }
    ],
    "tags": ["标题", "写作"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 3,
    "heat": 6400,
    "updatedAt": "2026-09-28"
  },
  {
    "id": "w04",
    "title": "营销卖点文案",
    "description": "把产品卖点写成面向指定人群的短文案。",
    "categoryId": "writing",
    "content": "你是转化文案编辑。请为产品写一组卖点文案。\n产品：{{产品}}\n人群：{{人群}}\n输出：\n1. 一句话定位\n2. 3 条卖点，每条包含用户痛点、产品做法、可感知结果\n3. 80 字以内的详情页首屏文案\n4. 一条 30 字以内的广告语\n不要编造认证、销量和用户评价。",
    "variables": [
      { "name": "产品", "label": "产品", "defaultValue": "", "required": true },
      { "name": "人群", "label": "人群", "defaultValue": "", "required": true }
    ],
    "tags": ["营销", "卖点", "文案"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 4,
    "heat": 7200,
    "updatedAt": "2026-10-02"
  },
  {
    "id": "w05",
    "title": "短篇故事大纲",
    "description": "按题材和主角生成可扩展的短篇故事结构。",
    "categoryId": "writing",
    "content": "你是故事编辑。请写一个 3000 字以内短篇的大纲。\n题材：{{题材}}\n主角：{{主角}}\n输出：\n1. 一句话故事\n2. 开场、冲突、转折、结局四段，每段写清场景和人物选择\n3. 主角想要什么、阻碍是什么、最后付出什么代价\n4. 三个可以写成细节的感官画面\n不要写成流水账，结局要和开场的选择有关。",
    "variables": [
      { "name": "题材", "label": "题材", "defaultValue": "现实生活", "required": false },
      { "name": "主角", "label": "主角", "defaultValue": "", "required": true }
    ],
    "tags": ["故事", "大纲"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 5,
    "heat": 4100,
    "updatedAt": "2026-08-16"
  },
  {
    "id": "w06",
    "title": "场合演讲稿",
    "description": "按场合和时长写出口语化演讲稿。",
    "categoryId": "writing",
    "content": "请写一份可以照着讲的演讲稿。\n场合：{{场合}}\n时长：{{时长}}\n要求：\n1. 开头 30 秒内进入一个具体故事或问题\n2. 中间只讲 3 个要点，每个要点配一个例子\n3. 句子短，适合口语，避免书面套话\n4. 结尾给出听众离开后可以做的一件事\n5. 在稿子旁用括号标出停顿",
    "variables": [
      { "name": "场合", "label": "场合", "defaultValue": "", "required": true },
      { "name": "时长", "label": "时长", "defaultValue": "5 分钟", "required": false }
    ],
    "tags": ["演讲", "口播"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 6,
    "heat": 5300,
    "updatedAt": "2026-09-06"
  },
  {
    "id": "w07",
    "title": "产品介绍页",
    "description": "把产品信息整理成介绍页的段落结构。",
    "categoryId": "writing",
    "content": "请为下面的产品写介绍页文案。\n产品名称：{{产品名称}}\n已知信息：{{已知信息}}\n按这个顺序输出：首屏标题和副标题、适合谁、解决什么问题、如何使用、边界和注意事项、常见问题 3 条。\n未知信息写成需要补充的问题，不要编造价格、奖项和用户数量。",
    "variables": [
      { "name": "产品名称", "label": "产品名称", "defaultValue": "", "required": true },
      { "name": "已知信息", "label": "已知信息", "defaultValue": "", "required": true }
    ],
    "tags": ["产品", "介绍页"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 7,
    "heat": 4600,
    "updatedAt": "2026-09-20"
  },
  {
    "id": "w08",
    "title": "周报润色",
    "description": "把零散周报改成结果、过程和风险都清楚的版本。",
    "categoryId": "writing",
    "content": "请把这份周报改写成给上级看的版本。\n原文：{{周报原文}}\n要求：\n1. 先写结果，再写做法，最后写风险和下周计划\n2. 删掉空话，保留数字、对象和时间\n3. 原文没写的数据不要补充\n4. 控制在 400 字以内，并列出你删掉的含糊表述",
    "variables": [
      { "name": "周报原文", "label": "周报原文", "defaultValue": "", "required": true }
    ],
    "tags": ["周报", "润色", "职场"],
    "difficulty": "beginner",
    "isFeatured": true,
    "sort": 8,
    "heat": 8600,
    "updatedAt": "2026-10-20"
  },
  {
    "id": "w09",
    "title": "商务邮件",
    "description": "按目的和对象写一封克制、可回复的邮件。",
    "categoryId": "writing",
    "content": "请写一封商务邮件。\n目的：{{目的}}\n对象：{{对象}}\n背景：{{背景}}\n要求：\n1. 主题行单独给出\n2. 第一段说明来意，第二段给必要背景，第三段写清希望对方做什么以及时间\n3. 语气礼貌、直接，不卑不亢\n4. 如果信息不够，用括号标出需要我补充的地方",
    "variables": [
      { "name": "目的", "label": "目的", "defaultValue": "", "required": true },
      { "name": "对象", "label": "对象", "defaultValue": "", "required": true },
      { "name": "背景", "label": "背景", "defaultValue": "无补充背景", "required": false }
    ],
    "tags": ["邮件", "商务"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 9,
    "heat": 5100,
    "updatedAt": "2026-08-30"
  },
  {
    "id": "w10",
    "title": "读书笔记",
    "description": "把一本书整理成可回顾的笔记，而不是复述目录。",
    "categoryId": "writing",
    "content": "请为《{{书名}}》写一份读书笔记。如果书的内容你不能确认，请先说明不确定，再只根据我提供的要点来写。\n我的要点：{{要点}}\n输出：这本书要解决的问题、三个核心观点、每个观点对应的一个例子、我可以在本周试用的一个做法、还想继续查证的问题。",
    "variables": [
      { "name": "书名", "label": "书名", "defaultValue": "", "required": true },
      { "name": "要点", "label": "要点", "defaultValue": "", "required": true }
    ],
    "tags": ["读书", "笔记"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 10,
    "heat": 3900,
    "updatedAt": "2026-08-08"
  },
  {
    "id": "w11",
    "title": "新闻通稿",
    "description": "把事件素材整理成客观、可发布的通稿。",
    "categoryId": "writing",
    "content": "请根据素材写一则新闻通稿。\n事件：{{事件}}\n素材：{{素材}}\n要求：\n1. 标题、导语、主体、背景、联系人五部分\n2. 导语回答谁、何时、何地、做了什么\n3. 只使用素材中的事实，不添加评价和未提供的数据\n4. 列出素材里缺少、发布前必须确认的信息",
    "variables": [
      { "name": "事件", "label": "事件", "defaultValue": "", "required": true },
      { "name": "素材", "label": "素材", "defaultValue": "", "required": true }
    ],
    "tags": ["新闻", "通稿"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 11,
    "heat": 2800,
    "updatedAt": "2026-09-02"
  },
  {
    "id": "w12",
    "title": "课程招生文案",
    "description": "说明课程适合谁、能学会什么，以及不适合谁。",
    "categoryId": "writing",
    "content": "请为课程写招生文案。\n课程：{{课程}}\n学员基础：{{学员基础}}\n输出：适合谁、不适合谁、学完能独立完成的 3 件事、课程如何安排、报名前需要准备什么。\n不要承诺就业、收入或证书，除非我在课程信息里写明。",
    "variables": [
      { "name": "课程", "label": "课程", "defaultValue": "", "required": true },
      { "name": "学员基础", "label": "学员基础", "defaultValue": "零基础", "required": false }
    ],
    "tags": ["课程", "招生"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 12,
    "heat": 3400,
    "updatedAt": "2026-09-14"
  },
  {
    "id": "w13",
    "title": "品牌故事",
    "description": "用具体起点和选择来写品牌故事，而不是形容词堆叠。",
    "categoryId": "writing",
    "content": "请为品牌写 500 字左右的故事。\n品牌：{{品牌}}\n起点：{{起点}}\n结构：当时遇到的具体问题、做过的一个关键选择、现在如何服务用户、没有选择的那条路是什么。\n少用「极致」「赋能」「引领」这类词，多用动作和物件。",
    "variables": [
      { "name": "品牌", "label": "品牌", "defaultValue": "", "required": true },
      { "name": "起点", "label": "起点", "defaultValue": "", "required": true }
    ],
    "tags": ["品牌", "故事"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 13,
    "heat": 3600,
    "updatedAt": "2026-08-22"
  },
  {
    "id": "w14",
    "title": "口播稿",
    "description": "把话题写成 60 秒内能说完的口播。",
    "categoryId": "writing",
    "content": "请把话题写成口播稿。\n话题：{{话题}}\n时长：45 到 60 秒。\n结构：第一句抛出听众正在遇到的情况，中间给一个做法和一步示范，最后用一句话收束。\n句子要能一口气读完，避免「首先、其次、最后」的论文腔。",
    "variables": [
      { "name": "话题", "label": "话题", "defaultValue": "", "required": true }
    ],
    "tags": ["口播", "短视频"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 14,
    "heat": 6100,
    "updatedAt": "2026-10-08"
  },
  {
    "id": "w15",
    "title": "活动邀请函",
    "description": "写清时间、地点、对象和需要回复的动作。",
    "categoryId": "writing",
    "content": "请写一封活动邀请。\n活动名称：{{活动名称}}\n时间地点：{{时间地点}}\n邀请对象：{{邀请对象}}\n输出邮件版和 120 字以内的即时消息版。两版都要包含参加方式、是否需要回复、回复截止日期。信息不足就用待确认标注，不要编造嘉宾。",
    "variables": [
      { "name": "活动名称", "label": "活动名称", "defaultValue": "", "required": true },
      { "name": "时间地点", "label": "时间地点", "defaultValue": "", "required": true },
      { "name": "邀请对象", "label": "邀请对象", "defaultValue": "", "required": true }
    ],
    "tags": ["邀请", "活动"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 15,
    "heat": 2500,
    "updatedAt": "2026-08-11"
  },
  {
    "id": "w16",
    "title": "招聘启事",
    "description": "按岗位写出职责、要求和筛选标准都清楚的启事。",
    "categoryId": "writing",
    "content": "请写一份招聘启事。\n岗位：{{岗位}}\n团队在做的事：{{团队工作}}\n输出：岗位要完成的结果、日常工作、必须具备的能力、加分项、不合适的情况、应聘时要提供的材料。\n不要写与能力无关的年龄、性别和地域限制。",
    "variables": [
      { "name": "岗位", "label": "岗位", "defaultValue": "", "required": true },
      { "name": "团队工作", "label": "团队工作", "defaultValue": "", "required": true }
    ],
    "tags": ["招聘", "启事"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 16,
    "heat": 4700,
    "updatedAt": "2026-09-25"
  },
  {
    "id": "w17",
    "title": "公开说明",
    "description": "把一件需要解释的事写成冷静、可核对的说明。",
    "categoryId": "writing",
    "content": "请写一份公开说明。\n事件：{{事件}}\n已确认事实：{{事实}}\n结构：发生了什么、影响谁、我们正在做什么、用户现在可以怎么做、何时再更新。\n不推卸、不猜测原因。事实和计划分开写。未确认的内容标成「尚未确认」。",
    "variables": [
      { "name": "事件", "label": "事件", "defaultValue": "", "required": true },
      { "name": "事实", "label": "已确认事实", "defaultValue": "", "required": true }
    ],
    "tags": ["说明", "公关"],
    "difficulty": "advanced",
    "isFeatured": false,
    "sort": 17,
    "heat": 2200,
    "updatedAt": "2026-10-05"
  },
  {
    "id": "w18",
    "title": "文本改写",
    "description": "按指定风格重写原文，并保持事实不变。",
    "categoryId": "writing",
    "content": "请重写下面的文字。\n风格：{{风格}}\n原文：{{原文}}\n规则：\n1. 不增加原文没有的事实、数字和承诺\n2. 保留专有名词\n3. 给出改写稿，并用三句话说明主要改了什么\n4. 如果原文有语病，先纠正再改风格",
    "variables": [
      { "name": "风格", "label": "风格", "defaultValue": "简洁、口语", "required": false },
      { "name": "原文", "label": "原文", "defaultValue": "", "required": true }
    ],
    "tags": ["改写", "润色"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 18,
    "heat": 6900,
    "updatedAt": "2026-10-15"
  },
  {
    "id": "w19",
    "title": "金句提炼",
    "description": "从文章里抽出能独立成立的句子，并核对是否忠实。",
    "categoryId": "writing",
    "content": "请从文章中提炼 8 句可以单独引用的话。\n文章：{{文章}}\n每句不超过 28 个字。每句后面注明它对应原文的哪一层意思。不要把原文没有的判断写成金句。最后标出哪 2 句最适合做标题。",
    "variables": [
      { "name": "文章", "label": "文章", "defaultValue": "", "required": true }
    ],
    "tags": ["金句", "提炼"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 19,
    "heat": 3100,
    "updatedAt": "2026-09-09"
  },
  {
    "id": "w20",
    "title": "访谈提纲",
    "description": "按嘉宾和话题准备能问出故事的问题。",
    "categoryId": "writing",
    "content": "请准备一份访谈提纲。\n嘉宾：{{嘉宾}}\n话题：{{话题}}\n输出：开场如何介绍嘉宾、8 个问题、每个问题想听到的信息、2 个可以追问的方向、结束时如何请嘉宾补充。\n问题要具体，避免「你有什么感想」这种无法展开的问法。",
    "variables": [
      { "name": "嘉宾", "label": "嘉宾", "defaultValue": "", "required": true },
      { "name": "话题", "label": "话题", "defaultValue": "", "required": true }
    ],
    "tags": ["访谈", "提纲"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 20,
    "heat": 2700,
    "updatedAt": "2026-08-19"
  }
]
