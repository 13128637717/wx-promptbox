module.exports = [
  {
    "id": "a01",
    "title": "数据解读",
    "description": "先说数字是什么，再谈可能的解释，不跳到建议。",
    "categoryId": "analysis",
    "content": "请解读这些数据。\n指标定义：{{定义}}\n数据：{{数据}}\n输出：数字本身的变化、能排除的解释、仍然可能的两种解释、要区分它们还缺什么数据。没有统计检验就不要说显著。建议最多一条，并且必须对应某一条解释。",
    "variables": [
      { "name": "定义", "label": "指标定义", "defaultValue": "", "required": true },
      { "name": "数据", "label": "数据", "defaultValue": "", "required": true }
    ],
    "tags": ["解读", "数据"],
    "difficulty": "intermediate",
    "isFeatured": true,
    "sort": 1,
    "heat": 6400,
    "updatedAt": "2026-10-12"
  },
  {
    "id": "a02",
    "title": "指标口径说明",
    "description": "给一张报表写清每个指标怎么算、不能怎么用。",
    "categoryId": "analysis",
    "content": "请为报表写口径说明。\n报表用途：{{用途}}\n字段：{{字段}}\n每个字段写计算公式或计数规则、时间口径、去重单位、已知不能相加或对比的情况。字段含义不清楚就标成待确认，不要用字段名猜测业务。",
    "variables": [
      { "name": "用途", "label": "报表用途", "defaultValue": "", "required": true },
      { "name": "字段", "label": "字段", "defaultValue": "", "required": true }
    ],
    "tags": ["口径", "报表"],
    "difficulty": "intermediate",
    "isFeatured": true,
    "sort": 2,
    "heat": 4800,
    "updatedAt": "2026-09-17"
  },
  {
    "id": "a03",
    "title": "异常波动排查",
    "description": "把一次突然升降拆成可核对的原因清单。",
    "categoryId": "analysis",
    "content": "请排查这次波动。\n指标：{{指标}}\n波动描述：{{波动}}\n最近的变更：{{变更}}\n按优先级列出原因：统计口径变化、流量构成变化、产品变更、外部事件。每个原因给一个能在数据里证实或排除的检查。变更未知就不要假设发过版。",
    "variables": [
      { "name": "指标", "label": "指标", "defaultValue": "", "required": true },
      { "name": "波动", "label": "波动", "defaultValue": "", "required": true },
      { "name": "变更", "label": "最近变更", "defaultValue": "未知", "required": false }
    ],
    "tags": ["异常", "排查"],
    "difficulty": "advanced",
    "isFeatured": false,
    "sort": 3,
    "heat": 5300,
    "updatedAt": "2026-10-08"
  },
  {
    "id": "a04",
    "title": "图表选择",
    "description": "按要比较的关系选择图表，而不是按好看。",
    "categoryId": "analysis",
    "content": "请选择图表。\n想让读者比较：{{比较}}\n数据形状：{{数据}}\n推荐一种主图，说明为什么不用饼图或双轴（如果它们不合适）。写出坐标、单位和标题应该怎么写才不会误解。数据点太少时建议用表格。",
    "variables": [
      { "name": "比较", "label": "要比较的关系", "defaultValue": "", "required": true },
      { "name": "数据", "label": "数据形状", "defaultValue": "", "required": true }
    ],
    "tags": ["图表", "可视化"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 4,
    "heat": 3600,
    "updatedAt": "2026-09-05"
  },
  {
    "id": "a05",
    "title": "分析报告结构",
    "description": "把分析写成结论先行的短报告。",
    "categoryId": "analysis",
    "content": "请把分析素材整理成报告大纲。\n读者要做的决定：{{决定}}\n素材：{{素材}}\n顺序：结论、证据、不支持结论的数据、局限、建议的下一步。证据必须能在素材里找到。素材不足时，结论改成「目前不能判断」。",
    "variables": [
      { "name": "决定", "label": "要做的决定", "defaultValue": "", "required": true },
      { "name": "素材", "label": "素材", "defaultValue": "", "required": true }
    ],
    "tags": ["报告", "结构"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 5,
    "heat": 4100,
    "updatedAt": "2026-08-26"
  },
  {
    "id": "a06",
    "title": "分组对比",
    "description": "比较两组之前先检查它们是不是可比。",
    "categoryId": "analysis",
    "content": "请设计这组对比。\n想比较：{{比较}}\n分组方式：{{分组}}\n检查两组在时间、渠道、用户构成上是否一致。列出会让对比失效的混杂因素，以及一个更公平的切法。不要直接算一个涨幅当结论。",
    "variables": [
      { "name": "比较", "label": "想比较的事", "defaultValue": "", "required": true },
      { "name": "分组", "label": "分组方式", "defaultValue": "", "required": true }
    ],
    "tags": ["对比", "分组"],
    "difficulty": "advanced",
    "isFeatured": false,
    "sort": 6,
    "heat": 2900,
    "updatedAt": "2026-09-23"
  },
  {
    "id": "a07",
    "title": "漏斗拆解",
    "description": "按步骤看流失，并指出哪一步的定义可能有问题。",
    "categoryId": "analysis",
    "content": "请拆解这个漏斗。\n步骤和人数：{{步骤}}\n每步定义：{{定义}}\n计算相邻转化，指出人数对不上的地方，并提出可能是定义问题还是真实流失。下一步只建议查流失最大且定义清楚的那一步。",
    "variables": [
      { "name": "步骤", "label": "步骤和人数", "defaultValue": "", "required": true },
      { "name": "定义", "label": "每步定义", "defaultValue": "", "required": true }
    ],
    "tags": ["漏斗", "转化"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 7,
    "heat": 4500,
    "updatedAt": "2026-10-19"
  },
  {
    "id": "a08",
    "title": "问卷结果阅读",
    "description": "阅读问卷时分开题干、样本和不能推论的范围。",
    "categoryId": "analysis",
    "content": "请阅读这份问卷结果。\n发放方式和人数：{{样本}}\n题目和结果：{{结果}}\n总结受访者实际回答了什么。说明不能推论到哪些人。标出引导性题干。开放题只归纳原文里反复出现的说法，不要升华成动机。",
    "variables": [
      { "name": "样本", "label": "样本", "defaultValue": "", "required": true },
      { "name": "结果", "label": "题目和结果", "defaultValue": "", "required": true }
    ],
    "tags": ["问卷", "样本"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 8,
    "heat": 2400,
    "updatedAt": "2026-09-11"
  },
  {
    "id": "a09",
    "title": "实验结论边界",
    "description": "写清实验结论能用在什么范围，不能用在哪里。",
    "categoryId": "analysis",
    "content": "请写实验结论的边界。\n实验设计：{{设计}}\n结果：{{结果}}\n说明随机或对照是否成立、样本是谁、结论可以推广到的人群、不能推广的情况、如果只观察到相关应如何改写句子。不要补做统计。",
    "variables": [
      { "name": "设计", "label": "实验设计", "defaultValue": "", "required": true },
      { "name": "结果", "label": "结果", "defaultValue": "", "required": true }
    ],
    "tags": ["实验", "结论"],
    "difficulty": "advanced",
    "isFeatured": false,
    "sort": 9,
    "heat": 2100,
    "updatedAt": "2026-08-14"
  },
  {
    "id": "a10",
    "title": "数据质量检查",
    "description": "在分析前先检查空值、重复和不可能的值。",
    "categoryId": "analysis",
    "content": "请列出分析前的数据检查。\n字段说明：{{字段}}\n我已经注意到的问题：{{问题}}\n检查空值、重复主键、超出合理范围的值、时间倒序、单位不一致。每个检查写出怎样算通过。不要在检查通过前给业务结论。",
    "variables": [
      { "name": "字段", "label": "字段说明", "defaultValue": "", "required": true },
      { "name": "问题", "label": "已注意到的问题", "defaultValue": "暂无", "required": false }
    ],
    "tags": ["质量", "检查"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 10,
    "heat": 3300,
    "updatedAt": "2026-10-03"
  },
  {
    "id": "a11",
    "title": "同期群描述",
    "description": "按进入时间描述一群人后来发生了什么。",
    "categoryId": "analysis",
    "content": "请描述这个同期群。\n进入规则：{{规则}}\n后续数据：{{数据}}\n写清人群如何定义、观察了多久、留存或重复行为如何计算。如果不同月份的人群不可比，请说明原因，不要合成一条趋势。",
    "variables": [
      { "name": "规则", "label": "进入规则", "defaultValue": "", "required": true },
      { "name": "数据", "label": "后续数据", "defaultValue": "", "required": true }
    ],
    "tags": ["同期群", "留存"],
    "difficulty": "advanced",
    "isFeatured": false,
    "sort": 11,
    "heat": 2600,
    "updatedAt": "2026-09-28"
  },
  {
    "id": "a12",
    "title": "分析需求澄清",
    "description": "在取数前把模糊的「看一下数据」问清楚。",
    "categoryId": "analysis",
    "content": "请把这个分析需求澄清成可以取数的问题。\n原话：{{原话}}\n改写成：决策是什么、指标定义、时间范围、对比对象、不需要分析的部分。列出还要问提出人的三个问题。不要自己假设一个宏大的分析项目。",
    "variables": [
      { "name": "原话", "label": "原始需求", "defaultValue": "", "required": true }
    ],
    "tags": ["需求", "澄清"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 12,
    "heat": 3900,
    "updatedAt": "2026-10-16"
  },
  {
    "id": "a13",
    "title": "单位和比率核对",
    "description": "在汇报前检查百分比的分母到底是谁。",
    "categoryId": "analysis",
    "content": "请核对这些比率。\n比率和我理解的公式：{{比率}}\n逐个写出分子、分母、时间窗口，以及把它和另一个比率相减或相除是否有意义。发现分母不一致时，给出应如何改写句子。",
    "variables": [
      { "name": "比率", "label": "比率", "defaultValue": "", "required": true }
    ],
    "tags": ["比率", "核对"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 13,
    "heat": 1800,
    "updatedAt": "2026-08-21"
  },
  {
    "id": "a14",
    "title": "周报里的数字",
    "description": "选择周报里真正值得出现的少数数字。",
    "categoryId": "analysis",
    "content": "请从这些数字里选周报要用的。\n候选数字：{{数字}}\n本周要传达的判断：{{判断}}\n最多留 4 个数字，每个说明它如何支持或削弱判断。其余数字写明为什么这次不放。不要为了好看凑趋势。",
    "variables": [
      { "name": "数字", "label": "候选数字", "defaultValue": "", "required": true },
      { "name": "判断", "label": "要传达的判断", "defaultValue": "", "required": true }
    ],
    "tags": ["周报", "数字"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 14,
    "heat": 2200,
    "updatedAt": "2026-09-08"
  },
  {
    "id": "a15",
    "title": "复现分析步骤",
    "description": "把一次分析写成别人能重做的步骤。",
    "categoryId": "analysis",
    "content": "请把这次分析写成可复现步骤。\n问题：{{问题}}\n我做了什么：{{步骤}}\n按顺序写数据来源、过滤条件、计算、输出表。标出依赖人工判断的地方。别人缺少权限时，步骤里要写明需要哪张表，而不是写「导出后处理」。",
    "variables": [
      { "name": "问题", "label": "问题", "defaultValue": "", "required": true },
      { "name": "步骤", "label": "我做的步骤", "defaultValue": "", "required": true }
    ],
    "tags": ["复现", "步骤"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 15,
    "heat": 1700,
    "updatedAt": "2026-10-05"
  }
]
