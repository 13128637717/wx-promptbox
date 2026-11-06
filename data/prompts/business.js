module.exports = [
  {
    "id": "b01",
    "title": "商业策划提纲",
    "description": "把一个想法写成问题、客户、方案和未验证假设。",
    "categoryId": "business",
    "content": "请写商业策划提纲。\n想法：{{想法}}\n已知事实：{{事实}}\n包含：谁有这个问题、现在怎么解决、我们提供什么、为什么现在做、最先要验证的假设、不做的范围。事实和假设分开。不要编造市场规模。",
    "variables": [
      { "name": "想法", "label": "想法", "defaultValue": "", "required": true },
      { "name": "事实", "label": "已知事实", "defaultValue": "", "required": true }
    ],
    "tags": ["策划", "商业"],
    "difficulty": "intermediate",
    "isFeatured": true,
    "sort": 1,
    "heat": 5600,
    "updatedAt": "2026-10-11"
  },
  {
    "id": "b02",
    "title": "竞品对比",
    "description": "只对比用户能感知的差异，并注明信息来源。",
    "categoryId": "business",
    "content": "请做竞品对比。\n我们的产品：{{产品}}\n竞品及我看到的信息：{{竞品}}\n对比维度限于价格展示、目标用户、核心功能、上手步骤。每格注明信息来自哪里。没看到的写未知，不要根据官网形容词推断份额。",
    "variables": [
      { "name": "产品", "label": "我们的产品", "defaultValue": "", "required": true },
      { "name": "竞品", "label": "竞品信息", "defaultValue": "", "required": true }
    ],
    "tags": ["竞品", "对比"],
    "difficulty": "intermediate",
    "isFeatured": true,
    "sort": 2,
    "heat": 6100,
    "updatedAt": "2026-09-19"
  },
  {
    "id": "b03",
    "title": "用户访谈提纲",
    "description": "问过去的行为，而不是问用户喜不喜欢想法。",
    "categoryId": "business",
    "content": "请写用户访谈提纲。\n想验证的问题：{{问题}}\n访谈对象：{{对象}}\n问题围绕最近一次相关行为：当时怎么做、花了什么、哪里不满意。不要问「如果有这个功能你会不会用」。准备追问和结束语。",
    "variables": [
      { "name": "问题", "label": "想验证的问题", "defaultValue": "", "required": true },
      { "name": "对象", "label": "访谈对象", "defaultValue": "", "required": true }
    ],
    "tags": ["访谈", "用户"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 3,
    "heat": 4300,
    "updatedAt": "2026-10-06"
  },
  {
    "id": "b04",
    "title": "定价说明",
    "description": "把价格档位和各自包含的东西写清楚。",
    "categoryId": "business",
    "content": "请整理定价说明。\n产品：{{产品}}\n现有档位和包含内容：{{档位}}\n输出给客户看的说明，以及内部备注：哪一档最容易被误解、哪些功能不该跨档赠送。不要建议一个没有成本信息支持的新价格。",
    "variables": [
      { "name": "产品", "label": "产品", "defaultValue": "", "required": true },
      { "name": "档位", "label": "档位", "defaultValue": "", "required": true }
    ],
    "tags": ["定价", "说明"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 4,
    "heat": 3800,
    "updatedAt": "2026-09-07"
  },
  {
    "id": "b05",
    "title": "活动方案",
    "description": "写清活动目标、规则和如何判断做完是否有效。",
    "categoryId": "business",
    "content": "请写活动方案。\n目标：{{目标}}\n预算和限制：{{限制}}\n包含规则、时间、需要的人或物料、用户参与的步骤、不做什么、用哪个数字判断有效。目标如果无法测量，先把它改成可测量的说法。",
    "variables": [
      { "name": "目标", "label": "目标", "defaultValue": "", "required": true },
      { "name": "限制", "label": "预算和限制", "defaultValue": "", "required": true }
    ],
    "tags": ["活动", "方案"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 5,
    "heat": 4700,
    "updatedAt": "2026-08-25"
  },
  {
    "id": "b06",
    "title": "销售异议回应",
    "description": "针对具体异议准备回应，不背通用话术。",
    "categoryId": "business",
    "content": "请准备异议回应。\n产品事实：{{事实}}\n客户原话：{{异议}}\n每个回应先确认异议，再用一条产品事实回答，并给出一个可以继续问的问题。没有事实支撑的好处不要说。",
    "variables": [
      { "name": "事实", "label": "产品事实", "defaultValue": "", "required": true },
      { "name": "异议", "label": "客户异议", "defaultValue": "", "required": true }
    ],
    "tags": ["销售", "异议"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 6,
    "heat": 5200,
    "updatedAt": "2026-10-15"
  },
  {
    "id": "b07",
    "title": "渠道选择",
    "description": "按客户在哪里做决定来选渠道，而不是哪个渠道热门。",
    "categoryId": "business",
    "content": "请帮我选择获客渠道。\n客户是谁：{{客户}}\n他们做决定前会去哪里：{{场所}}\n我们能持续投入的时间：{{时间}}\n推荐不超过两个渠道，写出第一周的具体动作和怎样算试错失败。不要因为某个平台用户多就推荐。",
    "variables": [
      { "name": "客户", "label": "客户", "defaultValue": "", "required": true },
      { "name": "场所", "label": "做决定的场所", "defaultValue": "", "required": true },
      { "name": "时间", "label": "可投入时间", "defaultValue": "", "required": true }
    ],
    "tags": ["渠道", "获客"],
    "difficulty": "advanced",
    "isFeatured": false,
    "sort": 7,
    "heat": 2900,
    "updatedAt": "2026-09-13"
  },
  {
    "id": "b08",
    "title": "合作备忘录",
    "description": "把口头合作收成双方义务和退出方式。",
    "categoryId": "business",
    "content": "请把这次合作谈话整理成备忘录。\n谈话要点：{{要点}}\n写出双方各自交付、时间、费用或分成是否已经说定、没说定的项目、任何一方停止合作时未完成部分怎么处理。没谈过的法律条款不要虚构，列为待律师确认。",
    "variables": [
      { "name": "要点", "label": "谈话要点", "defaultValue": "", "required": true }
    ],
    "tags": ["合作", "备忘录"],
    "difficulty": "advanced",
    "isFeatured": false,
    "sort": 8,
    "heat": 2100,
    "updatedAt": "2026-08-18"
  },
  {
    "id": "b09",
    "title": "市场进入问题",
    "description": "把「要不要进入一个市场」拆成必须先回答的问题。",
    "categoryId": "business",
    "content": "请把进入新市场的决定拆成问题清单。\n市场：{{市场}}\n我们已有的能力：{{能力}}\n列出必须用事实回答的问题，并说明每个问题去哪里找证据。区分能在两周内查到的和需要长期数据的。不要直接给「应该进入」的结论。",
    "variables": [
      { "name": "市场", "label": "市场", "defaultValue": "", "required": true },
      { "name": "能力", "label": "已有能力", "defaultValue": "", "required": true }
    ],
    "tags": ["市场", "决策"],
    "difficulty": "advanced",
    "isFeatured": false,
    "sort": 9,
    "heat": 2400,
    "updatedAt": "2026-09-24"
  },
  {
    "id": "b10",
    "title": "客户成功交接",
    "description": "签约后把承诺和风险交给交付同事。",
    "categoryId": "business",
    "content": "请写客户交接说明。\n客户：{{客户}}\n销售阶段的承诺：{{承诺}}\n已知风险：{{风险}}\n说明客户要的结果、我们已经答应的范围、没有答应的要求、第一周建议联系谁。承诺以外的需求标成新增，不要悄悄加进范围。",
    "variables": [
      { "name": "客户", "label": "客户", "defaultValue": "", "required": true },
      { "name": "承诺", "label": "承诺", "defaultValue": "", "required": true },
      { "name": "风险", "label": "风险", "defaultValue": "暂无", "required": false }
    ],
    "tags": ["客户", "交接"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 10,
    "heat": 1800,
    "updatedAt": "2026-10-02"
  },
  {
    "id": "b11",
    "title": "季度目标拆解",
    "description": "把一个大数字拆到可检查的周动作。",
    "categoryId": "business",
    "content": "请拆解季度目标。\n目标：{{目标}}\n现有资源：{{资源}}\n写出每月要看到的结果和每周的主要动作。如果资源明显不够，给出削减后的目标，而不是假设人会突然变多。标出依赖外部才能完成的部分。",
    "variables": [
      { "name": "目标", "label": "目标", "defaultValue": "", "required": true },
      { "name": "资源", "label": "资源", "defaultValue": "", "required": true }
    ],
    "tags": ["目标", "季度"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 11,
    "heat": 3500,
    "updatedAt": "2026-09-30"
  },
  {
    "id": "b12",
    "title": "提案邮件",
    "description": "用一封邮件说明问题、做法和希望约的下一步。",
    "categoryId": "business",
    "content": "请写提案邮件。\n对方的问题：{{问题}}\n我们能做的：{{做法}}\n邮件要短：问题、做法、一个已有的相关例子、希望的下一步。例子只能使用我提供的事实。不要附上完整方案当附件说明还没写。",
    "variables": [
      { "name": "问题", "label": "对方的问题", "defaultValue": "", "required": true },
      { "name": "做法", "label": "我们能做的", "defaultValue": "", "required": true }
    ],
    "tags": ["提案", "邮件"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 12,
    "heat": 3200,
    "updatedAt": "2026-08-08"
  },
  {
    "id": "b13",
    "title": "流程瓶颈描述",
    "description": "把「效率低」写成具体等待发生在哪一步。",
    "categoryId": "business",
    "content": "请描述这个业务流程的瓶颈。\n流程步骤：{{步骤}}\n我观察到的等待：{{等待}}\n画出步骤顺序，标出等待发生的交接，给出一个不增加人头也能试的改法，以及怎样知道它有效。不要建议上一整套新系统，除非现有步骤已经说不清。",
    "variables": [
      { "name": "步骤", "label": "流程步骤", "defaultValue": "", "required": true },
      { "name": "等待", "label": "观察到的等待", "defaultValue": "", "required": true }
    ],
    "tags": ["流程", "瓶颈"],
    "difficulty": "advanced",
    "isFeatured": false,
    "sort": 13,
    "heat": 2300,
    "updatedAt": "2026-10-18"
  },
  {
    "id": "b14",
    "title": "会员权益说明",
    "description": "写清权益、限制和到期后发生什么。",
    "categoryId": "business",
    "content": "请写会员权益说明。\n权益和限制：{{权益}}\n面向用户的文字要包含：能得到什么、不能得到什么、何时生效、到期或退款后保留什么。内部未确定的规则用待确认列出，不要写成已经承诺。",
    "variables": [
      { "name": "权益", "label": "权益和限制", "defaultValue": "", "required": true }
    ],
    "tags": ["会员", "权益"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 14,
    "heat": 2000,
    "updatedAt": "2026-09-02"
  },
  {
    "id": "b15",
    "title": "实验记录",
    "description": "把一次运营实验的假设、做法和结果分开记。",
    "categoryId": "business",
    "content": "请整理这次实验。\n假设：{{假设}}\n做法：{{做法}}\n结果数据：{{结果}}\n分开写假设是否被数据支持、样本是否太小、下次只改一个变量会改哪一个。不要把相关写成因果。没有对照组时要说明。",
    "variables": [
      { "name": "假设", "label": "假设", "defaultValue": "", "required": true },
      { "name": "做法", "label": "做法", "defaultValue": "", "required": true },
      { "name": "结果", "label": "结果数据", "defaultValue": "", "required": true }
    ],
    "tags": ["实验", "运营"],
    "difficulty": "advanced",
    "isFeatured": false,
    "sort": 15,
    "heat": 2700,
    "updatedAt": "2026-10-21"
  }
]
