module.exports = [
  {
    "id": "d01",
    "title": "图像描述",
    "description": "把主题写成可投喂给绘图模型的画面描述。",
    "categoryId": "drawing",
    "content": "请把主题写成一段图像提示词。\n主题：{{主题}}\n风格：{{风格}}\n按这个顺序写：主体、动作、环境、光线、镜头、色彩、材质。最后单独列出不想出现的元素。使用具体名词，少用「好看」「高级」这种无法绘制的词。",
    "variables": [
      { "name": "主题", "label": "主题", "defaultValue": "", "required": true },
      { "name": "风格", "label": "风格", "defaultValue": "干净的商业摄影", "required": false }
    ],
    "tags": ["绘画", "提示词", "画面"],
    "difficulty": "beginner",
    "isFeatured": true,
    "sort": 1,
    "heat": 9600,
    "updatedAt": "2026-10-17"
  },
  {
    "id": "d02",
    "title": "产品静物布光",
    "description": "为商品图写清背景、道具和光线，方便出图后还能改。",
    "categoryId": "drawing",
    "content": "请为商品写一条静物图提示词。\n商品：{{商品}}\n要传达的感觉：{{感觉}}\n写明：商品占画面的位置、桌面材质、背景颜色、主光方向、是否有投影、画面里不能出现的文字和商标。再给一个同一商品的俯拍备选。",
    "variables": [
      { "name": "商品", "label": "商品", "defaultValue": "", "required": true },
      { "name": "感觉", "label": "感觉", "defaultValue": "干净、可信", "required": false }
    ],
    "tags": ["产品", "静物", "摄影"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 2,
    "heat": 5400,
    "updatedAt": "2026-09-21"
  },
  {
    "id": "d03",
    "title": "人物肖像约束",
    "description": "描述人物时固定五官、服装和镜头，减少每次跑偏。",
    "categoryId": "drawing",
    "content": "请写一条人物肖像提示词，并单独列出必须保持不变的特征。\n人物：{{人物}}\n场景：{{场景}}\n不变项至少包括：年龄段、发型、服装主色、表情、景别。可变项只留光线和时间。提醒：不要生成可识别的真实名人。",
    "variables": [
      { "name": "人物", "label": "人物", "defaultValue": "", "required": true },
      { "name": "场景", "label": "场景", "defaultValue": "", "required": true }
    ],
    "tags": ["肖像", "人物"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 3,
    "heat": 6100,
    "updatedAt": "2026-10-04"
  },
  {
    "id": "d04",
    "title": "同一角色多角度",
    "description": "让同一角色在三个角度下保持服装和脸的一致。",
    "categoryId": "drawing",
    "content": "请为同一角色写正面、侧面、背面三条提示词。\n角色设定：{{角色}}\n三条都重复同一组锚点：脸型、发色、服装、配饰。每条只改身体朝向和镜头高度。最后写一段负面提示，避免多手、多余饰品和文字水印。",
    "variables": [
      { "name": "角色", "label": "角色设定", "defaultValue": "", "required": true }
    ],
    "tags": ["角色", "一致性"],
    "difficulty": "intermediate",
    "isFeatured": true,
    "sort": 4,
    "heat": 7200,
    "updatedAt": "2026-09-29"
  },
  {
    "id": "d05",
    "title": "海报版式描述",
    "description": "把海报拆成主体、标题区和留白，而不是堆风格词。",
    "categoryId": "drawing",
    "content": "请描述一张海报的画面，供图像模型使用。\n主题：{{主题}}\n需要出现的短句：{{短句}}\n说明主体在左还是右、标题区留在哪里、背景是否简洁到能看清字、主色不超过三种。如果模型不擅长渲染文字，请同时给一版不含文字、只留标题空白区的描述。",
    "variables": [
      { "name": "主题", "label": "主题", "defaultValue": "", "required": true },
      { "name": "短句", "label": "短句", "defaultValue": "", "required": true }
    ],
    "tags": ["海报", "版式"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 5,
    "heat": 4800,
    "updatedAt": "2026-08-21"
  },
  {
    "id": "d06",
    "title": "室内空间提示词",
    "description": "按房间用途写材料、采光和镜头位置。",
    "categoryId": "drawing",
    "content": "请写一段室内效果图提示词。\n房间：{{房间}}\n用途：{{用途}}\n包含：房间尺寸感、主要家具三件、地面和墙面材料、窗户方向、镜头是站立视角还是俯视。不要出现与用途无关的装饰堆砌。",
    "variables": [
      { "name": "房间", "label": "房间", "defaultValue": "", "required": true },
      { "name": "用途", "label": "用途", "defaultValue": "", "required": true }
    ],
    "tags": ["室内", "空间"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 6,
    "heat": 3900,
    "updatedAt": "2026-09-03"
  },
  {
    "id": "d07",
    "title": "图标风格统一",
    "description": "为一组功能写同一套线性图标的描述。",
    "categoryId": "drawing",
    "content": "请为这些功能各写一条图标提示词，并先定义统一规则。\n功能列表：{{功能}}\n统一规则要规定：线宽、圆角、是否填充、画布留白、是否允许渐变。每条图标只描述一个物体，避免用字母代替图形。",
    "variables": [
      { "name": "功能", "label": "功能列表", "defaultValue": "", "required": true }
    ],
    "tags": ["图标", "界面"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 7,
    "heat": 2600,
    "updatedAt": "2026-08-12"
  },
  {
    "id": "d08",
    "title": "食物特写",
    "description": "写清食材状态和拍摄距离，避免塑料感。",
    "categoryId": "drawing",
    "content": "请写一条食物摄影提示词。\n菜品：{{菜品}}\n描述温度感（热气、冷凝或常温）、切开或完整、餐具、桌面、光线是窗光还是顶光、镜头距离。负面提示里排除塑料光泽、过多酱汁和看不清的糊状。",
    "variables": [
      { "name": "菜品", "label": "菜品", "defaultValue": "", "required": true }
    ],
    "tags": ["美食", "摄影"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 8,
    "heat": 4400,
    "updatedAt": "2026-10-10"
  },
  {
    "id": "d09",
    "title": "场景概念图",
    "description": "先定故事发生的一刻，再写环境和气氛。",
    "categoryId": "drawing",
    "content": "请把这个情节画成一张概念图的提示词。\n情节：{{情节}}\n必须能看出：谁在场、正在做什么、时间、天气、前景和远景各有什么。用一段连续描述，不要只堆标签。另外用一句话说明这张图要让人感受到的冲突。",
    "variables": [
      { "name": "情节", "label": "情节", "defaultValue": "", "required": true }
    ],
    "tags": ["概念图", "场景"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 9,
    "heat": 3500,
    "updatedAt": "2026-09-13"
  },
  {
    "id": "d10",
    "title": "负面提示词整理",
    "description": "根据常见翻车点写负面提示，而不是套用万用词表。",
    "categoryId": "drawing",
    "content": "我的画面经常出现这些问题：{{问题}}\n画面目标是：{{目标}}\n请写一组负面提示，只针对这些问题。每条说明它在防止什么。不要把「低质量、糟糕」这类空词算作有效约束。",
    "variables": [
      { "name": "问题", "label": "常见问题", "defaultValue": "", "required": true },
      { "name": "目标", "label": "画面目标", "defaultValue": "", "required": true }
    ],
    "tags": ["负面提示", "绘图"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 10,
    "heat": 5100,
    "updatedAt": "2026-09-26"
  },
  {
    "id": "d11",
    "title": "服装设计稿描述",
    "description": "按单品写版型、材料和颜色，方便出设计稿。",
    "categoryId": "drawing",
    "content": "请写一条服装设计稿提示词。\n单品：{{单品}}\n穿着场合：{{场合}}\n写清廓形、领口、袖长、面料、主色和辅色、正面平铺还是上身。背景用纯色。不要加入与服装无关的街景。",
    "variables": [
      { "name": "单品", "label": "单品", "defaultValue": "", "required": true },
      { "name": "场合", "label": "场合", "defaultValue": "日常", "required": false }
    ],
    "tags": ["服装", "设计"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 11,
    "heat": 2900,
    "updatedAt": "2026-08-17"
  },
  {
    "id": "d12",
    "title": "儿童绘本单页",
    "description": "一页只讲一个动作，角色外形保持简单可复述。",
    "categoryId": "drawing",
    "content": "请为绘本的这一页写画面提示词。\n角色：{{角色}}\n这一页发生的事：{{事件}}\n风格要适合 4 到 7 岁：形状简单、表情清楚、危险物品不要出现。角色的颜色和衣服写成可以在下一页重复的短句。",
    "variables": [
      { "name": "角色", "label": "角色", "defaultValue": "", "required": true },
      { "name": "事件", "label": "这一页的事", "defaultValue": "", "required": true }
    ],
    "tags": ["绘本", "儿童"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 12,
    "heat": 3300,
    "updatedAt": "2026-10-02"
  },
  {
    "id": "d13",
    "title": "建筑外观",
    "description": "描述体量、材料和观看时间，避免只有风格名词。",
    "categoryId": "drawing",
    "content": "请写建筑外观效果图提示词。\n建筑类型：{{类型}}\n地点气质：{{地点}}\n包含层数感、屋顶、立面材料、入口、周边植物、是清晨还是黄昏、人视点还是半鸟瞰。不要加入无法从描述里看出来的获奖风格名。",
    "variables": [
      { "name": "类型", "label": "建筑类型", "defaultValue": "", "required": true },
      { "name": "地点", "label": "地点气质", "defaultValue": "", "required": true }
    ],
    "tags": ["建筑", "外观"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 13,
    "heat": 2400,
    "updatedAt": "2026-08-09"
  },
  {
    "id": "d14",
    "title": "信息图画面",
    "description": "先规定阅读顺序，再描述图形，避免一张图塞太多。",
    "categoryId": "drawing",
    "content": "请把这些信息规划成一张图的画面描述。\n信息：{{信息}}\n限制在 4 个模块以内，写出从左到右或从上到下的阅读顺序、每个模块用什么图形、背景是否留白。文字内容单独列出，方便后期用设计软件排，而不是让模型硬画小字。",
    "variables": [
      { "name": "信息", "label": "信息", "defaultValue": "", "required": true }
    ],
    "tags": ["信息图", "版式"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 14,
    "heat": 3100,
    "updatedAt": "2026-09-07"
  },
  {
    "id": "d15",
    "title": "参考图改写",
    "description": "说明想保留什么、只改什么，避免整张被重画。",
    "categoryId": "drawing",
    "content": "我有一张参考，想只改其中一部分。\n要保留：{{保留}}\n要修改：{{修改}}\n请写成提示词：先重复保留项，再写修改项，并加一句「其余构图不变」。如果修改会破坏保留项，请先提醒冲突。",
    "variables": [
      { "name": "保留", "label": "要保留", "defaultValue": "", "required": true },
      { "name": "修改", "label": "要修改", "defaultValue": "", "required": true }
    ],
    "tags": ["改图", "参考"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 15,
    "heat": 4700,
    "updatedAt": "2026-10-13"
  },
  {
    "id": "d16",
    "title": "季节风景",
    "description": "用植被、光线和天气区分季节，而不是只写季节名。",
    "categoryId": "drawing",
    "content": "请写一条风景提示词。\n地点：{{地点}}\n季节：{{季节}}\n必须出现能证明季节的两处细节，例如植物状态或地面。写清前景、中景、天空和镜头焦段感觉。不要只写「唯美风景」。",
    "variables": [
      { "name": "地点", "label": "地点", "defaultValue": "", "required": true },
      { "name": "季节", "label": "季节", "defaultValue": "", "required": true }
    ],
    "tags": ["风景", "季节"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 16,
    "heat": 3800,
    "updatedAt": "2026-09-15"
  },
  {
    "id": "d17",
    "title": "包装平面展开",
    "description": "描述包装的正面主视觉和需要留白的信息区。",
    "categoryId": "drawing",
    "content": "请为包装写主视觉提示词。\n产品：{{产品}}\n包装形态：{{形态}}\n说明正面图形、主色、必须留出的品名和容量空白、侧面不要出现的复杂图案。图形本身不要包含假的品牌标志。",
    "variables": [
      { "name": "产品", "label": "产品", "defaultValue": "", "required": true },
      { "name": "形态", "label": "包装形态", "defaultValue": "纸盒", "required": false }
    ],
    "tags": ["包装", "平面"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 17,
    "heat": 2100,
    "updatedAt": "2026-08-26"
  },
  {
    "id": "d18",
    "title": "分镜首帧",
    "description": "为视频的第一帧写静态画面，方便后面接动作。",
    "categoryId": "drawing",
    "content": "请为视频第一帧写静态画面提示词。\n视频要讲：{{内容}}\n画面要让人一眼看出主角和下一个动作即将发生，写清起幅构图、人物朝向、手里的物件。不要在一张静帧里塞完整个故事。",
    "variables": [
      { "name": "内容", "label": "视频内容", "defaultValue": "", "required": true }
    ],
    "tags": ["首帧", "分镜"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 18,
    "heat": 3600,
    "updatedAt": "2026-10-08"
  },
  {
    "id": "d19",
    "title": "色彩方案说明",
    "description": "给画面定三种颜色，并说明每种用在哪里。",
    "categoryId": "drawing",
    "content": "请为这个画面定色。\n画面：{{画面}}\n情绪：{{情绪}}\n只给三种颜色，写明谁是主色、谁是点缀、大面积背景用哪一种。用日常语言描述颜色，并说明为什么这个搭配能撑住情绪。",
    "variables": [
      { "name": "画面", "label": "画面", "defaultValue": "", "required": true },
      { "name": "情绪", "label": "情绪", "defaultValue": "", "required": true }
    ],
    "tags": ["色彩", "方案"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 19,
    "heat": 2700,
    "updatedAt": "2026-09-01"
  },
  {
    "id": "d20",
    "title": "出图结果复查",
    "description": "对照原提示词检查成图哪里跑偏，并改一版提示词。",
    "categoryId": "drawing",
    "content": "请对照目标检查这次出图可能跑偏的点，并改写提示词。\n原提示词：{{原提示词}}\n成图问题：{{问题}}\n输出：哪些要求没有被执行、改写后的提示词、这次只改一句以免同时变动太多。不要建议我换成另一个完全无关的主题。",
    "variables": [
      { "name": "原提示词", "label": "原提示词", "defaultValue": "", "required": true },
      { "name": "问题", "label": "成图问题", "defaultValue": "", "required": true }
    ],
    "tags": ["复查", "改写"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 20,
    "heat": 4300,
    "updatedAt": "2026-10-22"
  }
]
