module.exports = [
  {
    "id": "c01",
    "title": "代码生成",
    "description": "按需求生成可运行代码，并说明如何验证。",
    "categoryId": "coding",
    "content": "你是资深工程师。请根据需求写代码。\n语言：{{语言}}\n需求：{{主题}}\n要求：\n1. 先用三句话说明实现思路和边界\n2. 给出完整、可运行的代码，包含必要的输入校验\n3. 不要省略关键逻辑，不要用「此处省略」\n4. 给出 3 个可以手工验证的例子，其中 1 个是异常输入\n5. 如果需求有歧义，先列出假设再写代码",
    "variables": [
      { "name": "主题", "label": "需求", "defaultValue": "", "required": true },
      { "name": "语言", "label": "编程语言", "defaultValue": "Python", "required": false }
    ],
    "tags": ["代码生成", "编程"],
    "difficulty": "intermediate",
    "isFeatured": true,
    "sort": 1,
    "heat": 11200,
    "updatedAt": "2026-10-16"
  },
  {
    "id": "c02",
    "title": "Python 代码生成与调试",
    "description": "根据报错和代码片段定位原因，并给出最小修改。",
    "categoryId": "coding",
    "content": "请调试这段 Python。\n目标：{{目标}}\n代码：{{代码}}\n报错：{{报错}}\n输出：最可能的原因、最小修改后的完整函数、为什么这样改、还需要我补充的运行环境信息。不要重写整个项目。",
    "variables": [
      { "name": "目标", "label": "目标", "defaultValue": "", "required": true },
      { "name": "代码", "label": "代码", "defaultValue": "", "required": true },
      { "name": "报错", "label": "报错", "defaultValue": "没有粘贴报错", "required": false }
    ],
    "tags": ["Python", "调试"],
    "difficulty": "intermediate",
    "isFeatured": true,
    "sort": 2,
    "heat": 8400,
    "updatedAt": "2026-10-11"
  },
  {
    "id": "c03",
    "title": "代码审查",
    "description": "按正确性、安全和可维护性审查一段代码。",
    "categoryId": "coding",
    "content": "你是代码审查员。请审查下面的代码。\n语言：{{语言}}\n代码：{{代码}}\n按严重程度列出问题。每条包含：位置、问题、为什么重要、建议改法。只报告代码里能看出的问题，不要泛泛介绍最佳实践。最后用一句话说明能否合并。",
    "variables": [
      { "name": "语言", "label": "编程语言", "defaultValue": "Java", "required": false },
      { "name": "代码", "label": "代码", "defaultValue": "", "required": true }
    ],
    "tags": ["代码审查", "编程"],
    "difficulty": "advanced",
    "isFeatured": true,
    "sort": 3,
    "heat": 7600,
    "updatedAt": "2026-10-01"
  },
  {
    "id": "c04",
    "title": "Bug 定位",
    "description": "根据现象和复现步骤缩小缺陷范围。",
    "categoryId": "coding",
    "content": "请帮我定位缺陷。\n现象：{{现象}}\n复现步骤：{{步骤}}\n已尝试：{{已尝试}}\n请给出：最可能的 3 个原因及各自的验证方法、下一步最值得看的日志或断点、一个能区分这些原因的最小实验。不要直接假设某一行一定错了。",
    "variables": [
      { "name": "现象", "label": "现象", "defaultValue": "", "required": true },
      { "name": "步骤", "label": "复现步骤", "defaultValue": "", "required": true },
      { "name": "已尝试", "label": "已尝试", "defaultValue": "还没有额外尝试", "required": false }
    ],
    "tags": ["Bug", "排查"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 4,
    "heat": 6900,
    "updatedAt": "2026-09-18"
  },
  {
    "id": "c05",
    "title": "单元测试设计",
    "description": "为函数补上边界、异常和正常路径的测试用例。",
    "categoryId": "coding",
    "content": "请为下面的函数设计单元测试。\n语言：{{语言}}\n函数：{{函数}}\n列出测试用例表格：名称、输入、期望、测的是哪条分支。至少覆盖空值、边界、正常值和一个失败路径。然后写出可运行的测试代码。不要测试私有实现细节。",
    "variables": [
      { "name": "语言", "label": "编程语言", "defaultValue": "Python", "required": false },
      { "name": "函数", "label": "函数", "defaultValue": "", "required": true }
    ],
    "tags": ["测试", "单元测试"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 5,
    "heat": 5400,
    "updatedAt": "2026-09-22"
  },
  {
    "id": "c06",
    "title": "SQL 编写",
    "description": "按问题和表结构写出可解释的查询。",
    "categoryId": "coding",
    "content": "请写 SQL。\n数据库：{{数据库}}\n表结构：{{表结构}}\n问题：{{问题}}\n给出 SQL、每段在做什么、结果可能重复或变慢的地方、需要的索引。如果字段不够，说明缺哪一列，不要发明不存在的表。",
    "variables": [
      { "name": "数据库", "label": "数据库", "defaultValue": "MySQL 8", "required": false },
      { "name": "表结构", "label": "表结构", "defaultValue": "", "required": true },
      { "name": "问题", "label": "问题", "defaultValue": "", "required": true }
    ],
    "tags": ["SQL", "查询"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 6,
    "heat": 8100,
    "updatedAt": "2026-10-09"
  },
  {
    "id": "c07",
    "title": "正则表达式",
    "description": "为一段样例写出正则，并附上匹配与不匹配的例子。",
    "categoryId": "coding",
    "content": "请写一个正则表达式。\n要匹配：{{要匹配}}\n不要匹配：{{不要匹配}}\n输出：正则、分组含义、3 个应匹配的例子、3 个不应匹配的例子、这个表达式在超长输入下可能慢在哪里。优先可读，而不是最短。",
    "variables": [
      { "name": "要匹配", "label": "要匹配", "defaultValue": "", "required": true },
      { "name": "不要匹配", "label": "不要匹配", "defaultValue": "", "required": true }
    ],
    "tags": ["正则", "文本"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 7,
    "heat": 4300,
    "updatedAt": "2026-08-27"
  },
  {
    "id": "c08",
    "title": "接口设计",
    "description": "把一个功能设计成请求、响应和错误都明确的接口。",
    "categoryId": "coding",
    "content": "请设计一个 HTTP 接口。\n功能：{{功能}}\n调用方：{{调用方}}\n输出：方法与路径、请求字段、成功响应、失败时的错误码和调用方可采取的动作、幂等和分页约定。字段用表格。不要设计调用方没有提到的后台管理功能。",
    "variables": [
      { "name": "功能", "label": "功能", "defaultValue": "", "required": true },
      { "name": "调用方", "label": "调用方", "defaultValue": "本系统前端", "required": false }
    ],
    "tags": ["接口", "API"],
    "difficulty": "advanced",
    "isFeatured": false,
    "sort": 8,
    "heat": 6200,
    "updatedAt": "2026-09-30"
  },
  {
    "id": "c09",
    "title": "给代码补注释",
    "description": "只在意图不明显的地方补注释，不重复代码字面意思。",
    "categoryId": "coding",
    "content": "请为这段代码补充注释，并保持代码本身不变。\n{{代码}}\n规则：注释解释为什么这样做、有什么约束、哪条分支容易误改。不要逐行翻译。最后单独列出命名含糊、建议改名的标识符。",
    "variables": [
      { "name": "代码", "label": "代码", "defaultValue": "", "required": true }
    ],
    "tags": ["注释", "可读性"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 9,
    "heat": 2100,
    "updatedAt": "2026-08-14"
  },
  {
    "id": "c10",
    "title": "小步重构建议",
    "description": "在不改变行为的前提下拆出可回退的重构步骤。",
    "categoryId": "coding",
    "content": "请给这段代码一份小步重构计划。\n痛点：{{痛点}}\n代码：{{代码}}\n每一步都要能单独提交，并说明如何确认行为没变。不要一次重写架构。如果某段缺少测试，第一步应该是补测试而不是搬代码。",
    "variables": [
      { "name": "痛点", "label": "痛点", "defaultValue": "", "required": true },
      { "name": "代码", "label": "代码", "defaultValue": "", "required": true }
    ],
    "tags": ["重构", "维护"],
    "difficulty": "advanced",
    "isFeatured": false,
    "sort": 10,
    "heat": 4800,
    "updatedAt": "2026-09-11"
  },
  {
    "id": "c11",
    "title": "报错信息解释",
    "description": "把报错翻译成原因、触发条件和可以尝试的修复。",
    "categoryId": "coding",
    "content": "请解释这条报错。\n环境：{{环境}}\n报错全文：{{报错}}\n用非术语先说它在抱怨什么，再指出堆栈里最值得看的一帧，给出两个可能修复，并说明各自适用的情况。如果报错被截断，请指出还缺哪一段。",
    "variables": [
      { "name": "环境", "label": "环境", "defaultValue": "", "required": true },
      { "name": "报错", "label": "报错", "defaultValue": "", "required": true }
    ],
    "tags": ["报错", "调试"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 11,
    "heat": 7300,
    "updatedAt": "2026-10-06"
  },
  {
    "id": "c12",
    "title": "Git 提交说明",
    "description": "根据 diff 写出说明为什么改，而不是罗列文件。",
    "categoryId": "coding",
    "content": "请根据变更写提交说明。\n变更：{{变更}}\n格式：第一行 50 字以内说明结果，空行后用条目写动机和风险。不要写「update」「fix bug」这种没有对象的句子。如果变更里混了无关修改，请指出来建议拆分。",
    "variables": [
      { "name": "变更", "label": "变更内容", "defaultValue": "", "required": true }
    ],
    "tags": ["Git", "提交"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 12,
    "heat": 5600,
    "updatedAt": "2026-09-04"
  },
  {
    "id": "c13",
    "title": "性能热点分析",
    "description": "从现象出发列出可测量的性能假设。",
    "categoryId": "coding",
    "content": "请分析性能问题。\n现象：{{现象}}\n代码或接口：{{代码}}\n请列出 3 个可测量的假设，每个假设包含：如何用日志、计时或一条查询验证，预期看到什么才算证实。不要在没有数据时建议换语言或加缓存。",
    "variables": [
      { "name": "现象", "label": "现象", "defaultValue": "", "required": true },
      { "name": "代码", "label": "代码或接口", "defaultValue": "", "required": true }
    ],
    "tags": ["性能", "分析"],
    "difficulty": "advanced",
    "isFeatured": false,
    "sort": 13,
    "heat": 3900,
    "updatedAt": "2026-08-25"
  },
  {
    "id": "c14",
    "title": "安全检查清单",
    "description": "针对一段处理外部输入的代码做针对性安全检查。",
    "categoryId": "coding",
    "content": "请检查这段处理外部输入的代码。\n场景：{{场景}}\n代码：{{代码}}\n检查注入、越权、敏感信息泄露、不安全的反序列化和路径穿越。只报告与这段代码相关的项，并给出利用前提。没有证据的项标成「需要更多上下文」。",
    "variables": [
      { "name": "场景", "label": "场景", "defaultValue": "", "required": true },
      { "name": "代码", "label": "代码", "defaultValue": "", "required": true }
    ],
    "tags": ["安全", "审查"],
    "difficulty": "advanced",
    "isFeatured": false,
    "sort": 14,
    "heat": 4500,
    "updatedAt": "2026-10-03"
  },
  {
    "id": "c15",
    "title": "Shell 脚本",
    "description": "把重复的命令行操作写成可中断、有提示的脚本。",
    "categoryId": "coding",
    "content": "请把这个操作写成 shell 脚本。\n操作：{{操作}}\n环境：{{环境}}\n要求：开头说明用途，对危险操作先打印将要做什么并要求确认，失败时退出非 0，不使用未声明的变量。脚本后说明如何做一次干运行。",
    "variables": [
      { "name": "操作", "label": "操作", "defaultValue": "", "required": true },
      { "name": "环境", "label": "环境", "defaultValue": "bash", "required": false }
    ],
    "tags": ["Shell", "脚本"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 15,
    "heat": 3700,
    "updatedAt": "2026-09-16"
  },
  {
    "id": "c16",
    "title": "前端组件拆分",
    "description": "判断一个界面该拆成哪些组件，以及状态放在哪里。",
    "categoryId": "coding",
    "content": "请帮我拆分这个界面。\n界面描述：{{界面}}\n技术：{{技术}}\n输出：组件树、每个组件的输入和输出、哪些状态必须提升、哪些交互可以先不做。保持现有视觉，不要顺便改产品流程。",
    "variables": [
      { "name": "界面", "label": "界面", "defaultValue": "", "required": true },
      { "name": "技术", "label": "技术", "defaultValue": "原生微信小程序", "required": false }
    ],
    "tags": ["前端", "组件"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 16,
    "heat": 4200,
    "updatedAt": "2026-10-14"
  },
  {
    "id": "c17",
    "title": "数据结构选择",
    "description": "按读写比例和规模选择数据结构，并说明代价。",
    "categoryId": "coding",
    "content": "请帮我选择数据结构。\n数据：{{数据}}\n操作：{{操作}}\n规模：{{规模}}\n给出首选和备选，比较读写复杂度和内存。说明什么规模下这个选择会失效。不要只回答「用哈希表」而不说键是什么。",
    "variables": [
      { "name": "数据", "label": "数据", "defaultValue": "", "required": true },
      { "name": "操作", "label": "操作", "defaultValue": "", "required": true },
      { "name": "规模", "label": "规模", "defaultValue": "万级", "required": false }
    ],
    "tags": ["数据结构", "设计"],
    "difficulty": "advanced",
    "isFeatured": false,
    "sort": 17,
    "heat": 2600,
    "updatedAt": "2026-08-06"
  },
  {
    "id": "c18",
    "title": "算法题讲解",
    "description": "先讲思路和复杂度，再给一份可读实现。",
    "categoryId": "coding",
    "content": "请讲解这道题并写出实现。\n题目：{{题目}}\n语言：{{语言}}\n顺序：输入输出约定、核心观察、为什么暴力不够、实现、时间与空间、一个容易写错的边界。代码变量名要能看出含义。",
    "variables": [
      { "name": "题目", "label": "题目", "defaultValue": "", "required": true },
      { "name": "语言", "label": "编程语言", "defaultValue": "Python", "required": false }
    ],
    "tags": ["算法", "讲解"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 18,
    "heat": 5800,
    "updatedAt": "2026-09-27"
  },
  {
    "id": "c19",
    "title": "变更影响面",
    "description": "在改一个模块前，列出调用方和需要回归的路径。",
    "categoryId": "coding",
    "content": "我准备修改这个模块，请帮我看影响面。\n模块职责：{{职责}}\n计划修改：{{修改}}\n已知调用方：{{调用方}}\n输出：可能受影响的行为、建议回归的用户路径、可以安全忽略的部分、上线后第一条该看的日志。调用方未知时明确写未知，不要编造系统结构。",
    "variables": [
      { "name": "职责", "label": "模块职责", "defaultValue": "", "required": true },
      { "name": "修改", "label": "计划修改", "defaultValue": "", "required": true },
      { "name": "调用方", "label": "已知调用方", "defaultValue": "未知", "required": false }
    ],
    "tags": ["影响面", "回归"],
    "difficulty": "advanced",
    "isFeatured": false,
    "sort": 19,
    "heat": 2400,
    "updatedAt": "2026-10-21"
  },
  {
    "id": "c20",
    "title": "依赖升级评估",
    "description": "评估一次依赖升级要看的变更和回退方式。",
    "categoryId": "coding",
    "content": "请评估这次依赖升级。\n依赖：{{依赖}}\n当前版本到目标版本：{{版本}}\n我们用到的功能：{{功能}}\n输出：可能破坏兼容的变更、需要改的调用、升级前要跑的检查、回退步骤。没有发行说明时，请列出我应该去核对的关键词，不要假装读过更新日志。",
    "variables": [
      { "name": "依赖", "label": "依赖", "defaultValue": "", "required": true },
      { "name": "版本", "label": "版本变化", "defaultValue": "", "required": true },
      { "name": "功能", "label": "用到的功能", "defaultValue": "", "required": true }
    ],
    "tags": ["依赖", "升级"],
    "difficulty": "advanced",
    "isFeatured": false,
    "sort": 20,
    "heat": 1900,
    "updatedAt": "2026-08-18"
  },
  {
    "id": "c21",
    "title": "日志排查顺序",
    "description": "把一次线上异常排成先看什么、再看什么。",
    "categoryId": "coding",
    "content": "请给这次异常一个排查顺序。\n现象：{{现象}}\n时间范围：{{时间}}\n已有日志：{{日志}}\n按优先级列出要搜的关键字、期望看到的正常日志、看到什么就可以排除一条假设。控制在 6 步以内，避免同时让人查十个系统。",
    "variables": [
      { "name": "现象", "label": "现象", "defaultValue": "", "required": true },
      { "name": "时间", "label": "时间范围", "defaultValue": "", "required": true },
      { "name": "日志", "label": "已有日志", "defaultValue": "暂无", "required": false }
    ],
    "tags": ["日志", "排查"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 21,
    "heat": 3300,
    "updatedAt": "2026-09-08"
  },
  {
    "id": "c22",
    "title": "配置项说明",
    "description": "把一份配置解释成每项改了会影响什么。",
    "categoryId": "coding",
    "content": "请解释这份配置。\n配置：{{配置}}\n按键列出：含义、当前值会带来的行为、改大或改小的影响、是否需要重启。不确定的键标成不确定，不要根据名字猜测业务规则。",
    "variables": [
      { "name": "配置", "label": "配置", "defaultValue": "", "required": true }
    ],
    "tags": ["配置", "说明"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 22,
    "heat": 2800,
    "updatedAt": "2026-09-19"
  },
  {
    "id": "c23",
    "title": "伪代码落地",
    "description": "把伪代码变成指定语言的实现，并标出伪代码没写清的地方。",
    "categoryId": "coding",
    "content": "请把伪代码实现为可运行代码。\n语言：{{语言}}\n伪代码：{{伪代码}}\n先列出伪代码没有定义的类型、错误处理和循环终止条件，给出你的假设，再写实现。假设要尽量少。",
    "variables": [
      { "name": "语言", "label": "编程语言", "defaultValue": "Python", "required": false },
      { "name": "伪代码", "label": "伪代码", "defaultValue": "", "required": true }
    ],
    "tags": ["实现", "伪代码"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 23,
    "heat": 2300,
    "updatedAt": "2026-08-29"
  },
  {
    "id": "c24",
    "title": "命名与函数边界",
    "description": "检查一段代码的名字是否说明了它真正做的事。",
    "categoryId": "coding",
    "content": "请检查命名和函数边界。\n代码：{{代码}}\n找出名不副实的函数和变量，给出更准确的名字，并指出哪些函数同时做了两件不该放在一起的事。只建议改名和拆分，不重写业务。",
    "variables": [
      { "name": "代码", "label": "代码", "defaultValue": "", "required": true }
    ],
    "tags": ["命名", "重构"],
    "difficulty": "beginner",
    "isFeatured": false,
    "sort": 24,
    "heat": 1700,
    "updatedAt": "2026-10-07"
  },
  {
    "id": "c25",
    "title": "技术说明文档",
    "description": "把一个模块写成后来者能接手的说明。",
    "categoryId": "coding",
    "content": "请为这个模块写接手说明。\n模块：{{模块}}\n我知道的行为：{{行为}}\n文档包含：它负责什么、不负责什么、输入输出、失败时发生什么、本地如何跑通一个例子、改动时最容易破坏的约定。用我提供的事实，缺少的部分列为待确认问题。",
    "variables": [
      { "name": "模块", "label": "模块", "defaultValue": "", "required": true },
      { "name": "行为", "label": "已知行为", "defaultValue": "", "required": true }
    ],
    "tags": ["文档", "接手"],
    "difficulty": "intermediate",
    "isFeatured": false,
    "sort": 25,
    "heat": 3000,
    "updatedAt": "2026-10-19"
  }
]
