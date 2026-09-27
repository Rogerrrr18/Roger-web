/* i18n — Chinese / English toggle */

const translations = {
  zh: {
    "nav.work": "Work",
    "nav.about": "About",
    "nav.gallery": "Gallery",
    "nav.journey": "Journey",
    "nav.blog": "Blog",
    "nav.cta": "⮑ Get in touch",

    "nav.research": "Research",
    "nav.publications": "Papers",
    "nav.perspective": "Ideas",
    "research.title": "Research",
    "research.desc": "从真实实验出发，研究材料结构如何改变反应，并让 AI 帮助提出更好的下一次实验。",
    "research.lead": "我的主线是建立可检验的“合成—结构—性能”关系：在 Ni/CeO₂ 光热甲烷干重整中，区分颗粒尺寸、氧空位、金属载体界面与反应稳定性的作用；再用这些数据检验科学 Agent 的证据推理能力。",
    "research.catalysis.label": "硕士研究 · 进行中",
    "research.catalysis.title": "催化剂结构，决定了什么？",
    "research.catalysis.text": "比较不同合成路线下的 Ni/CeO₂，追踪 Ni 分散、CeO₂ 缺陷和界面结构如何影响 CH₄/CO₂ 活化、积碳与失活。",
    "research.catalysis.caption": "示意图为本网站重绘，并非论文原图。",
    "research.bench.label": "学位论文项目 · 开发中",
    "research.bench.title": "让科学 Agent 接受实验检验",
    "research.bench.text": "PT-DRM-Bench 正在开发中，关注数据质量、证据约束下的结构—性能推理，以及能区分竞争假设的实验选择。",
    "research.bench.caption": "研究设计示意图；尚未作为已发表的 benchmark 结果。",
    "publications.title": "Selected papers",
    "publications.desc": "优先展示可核实的成果和我在其中的位置。通过 DOI 链接查看期刊页面。",
    "publications.figureNote": "依据论文报告的条件与结果重绘；非出版物原图。",
    "publications.firstAuthor": "第一作者 · 2025",
    "publications.featuredText": "我主导了面向湿法磷酸废水的磁性介孔吸附剂研究，从材料制备到吸附动力学、等温线及 XPS/分子动力学机理分析，连接工业场景与原子尺度证据。",
    "publications.coauthor": "合作作者 · 2026",
    "publications.coauthor2022": "合作作者 · 2022",
    "publications.additional": "其他第一作者成果",
    "publications.smallText": "合作研究：缺陷 CeO₂ 上的 Cu⁺ 调控 Ni 位点；论文报告 42.8% 光能到燃料效率。",
    "publications.nanoText": "合作研究：通过局部配位调控理解单原子 Ni 的活性与稳定性。",
    "perspective.title": "Where AI meets the lab",
    "perspective.desc": "这些是我目前研究与实践中形成的问题意识，不是已经得到证明的结论。",
    "perspective.one.title": "让模型指出证据边界",
    "perspective.one.text": "一个好的科学 Agent 应当能说清哪条结构—性能推断来自测量，哪条仍是假设；缺字段、单位错误或批次差异都应被显式处理。",
    "perspective.two.title": "用下一次实验衡量推理",
    "perspective.two.text": "流畅的机理叙述容易产生；真正有价值的建议应能区分竞争解释，并满足实验室的物理与资源约束。",
    "perspective.three.title": "把评测带回真实工作流",
    "perspective.three.text": "在催化研究和车载 Agent 项目中，我都更关注失败样例、数据来源和版本回归，而非单一总分。",

    "blog.title": "Blog",
    "blog.desc": "关于 AI 产品、评测与行业趋势的独立观察。",

    "hero.intro": "我是杨皓然，正在中国科学院大学研究光热催化与材料界面。我也设计科学 Agent 的评测方法：让模型的判断回到实验记录、物理约束与下一步可验证的问题。",
    "hero.focus": "Photothermal catalysis · AI for Science",
    "hero.currentlyLabel": "Currently",
    "hero.currently": "M.Eng., UCAS · Shanghai Advanced Research Institute",

    "hero.bridgeLabel": "Bridge",
    "hero.bridge": "Materials ↔ Scientific AI",

    "work.title": "Work",
    "work.desc": "AI 项目：从实践中建立对证据、评测和工具价值的判断。",
    "work.zhuangleme": "一款社交探索类应用，研究\u201C表达策略、身份包装与社交认知\u201D。把年轻人日常社交中的隐性规则做成可学习、可互动、可传播的产品体验。",
    "work.veritex": "通过语义理解实现高效文献检索。以 Chat & Search 交互为核心，结合 LangGraph 架构做意图识别、关键词扩展与多源融合排序。",
    "work.zeval": "Agent 时代的评测基础设施。从真实对话日志中自动发现交互摩擦点，持续生成评测数据集，让 AI 产品团队第一次能用数据驱动 Agent 迭代。",
    "work.note1": "Aesthetic note — 我喜欢让产品像一部好电影，既有情绪张力，也有克制的结构感，同时也能够在业务和真实需求中生长。",
    "work.note2": "Future directions — A2A · 智能硬件 · Context sensor for agent",

    "about.title": "About",
    "about.desc": "研究材料界面，也研究 AI 如何支持更可靠的科学判断。",
    "about.bio": "我在中国科学院大学上海高等研究院攻读材料与化工硕士，研究光热催化、界面结构与反应机理。实验之外，我把 Agent 评测经验带进科学工作流，关注数据来源、可解释的推断与实验决策。",
    "about.builder": "在材料实验中追踪结构与性能的关系，结合表征与计算提出可验证的机理假设。",
    "about.operator": "为科学 Agent 与产品 Agent 设计案例、评分标准和失败分析，关注数据来源与版本回归。",
    "about.leader": "用 LangGraph 和 Python 搭建文献检索与 Agent 评测原型，把研究问题转成可用工具。",
    "about.beliefQuote": "让下一个实验回答更好的问题。",
    "about.beliefText": "我喜欢把复杂问题拆成能被观察和反驳的小问题。实验、代码与产品是不同的工具，但都需要清楚的证据链。",

    "gallery.title": "Gallery",
    "gallery.desc": "生活瞬间也是灵感。",
    "gallery.filmTitle": "Favorite Films",
    "gallery.film3": "侧耳倾听",

    "journey.title": "Journey",
    "journey.desc": "把研究、产品与业务放进同一条实践路径里。",
    "journey.ucas.title": "中国科学院大学 · 上海高等研究院 <span class=\"timeline-role\">材料与化工硕士</span>",
    "journey.ucas.desc": "研究 Ni/CeO₂ 光热催化与科学 Agent 评测；获 2025 年中国科学院研究所奖学金。",
    "journey.wit.title": "武汉工程大学 <span class=\"timeline-role\">无机非金属材料工程学士</span>",
    "journey.wit.desc": "专业排名 7/101；2024 年国家奖学金。早期研究包括磁性纳米材料与氮化硼纳米管。",
    "journey.bytedance.title": '字节跳动·火山引擎 Data-数据平台（Aide 团队）<span class="timeline-role">AI 产品经理</span>',
    "journey.bytedance.desc": "研究知识库、策略与执行 Skill 组成的企业数据治理 Agent 工作流；对比 Agent 生成策略与传统流程，实习项目报告治理成本降低 20%。",
    "journey.nio.title": '蔚来汽车 NOMI 团队 <span class="timeline-role">AI 产品经理</span>',
    "journey.nio.desc": "从用户日志构造跨域多轮评测案例，分析车载 Agent 的失败模式并评估模型及上下文流程修订；内部评测中的任务成功率从 27% 升至 82%。",
    "journey.kr.title": '36氪·职升未来 <span class="timeline-role">AI 求职产品实习生</span>',
    "journey.kr.desc": "围绕 AI 求职产品做用户洞察、Prompt 体验优化与增长实验，沉淀 15+ 项指标看板并分析 500+ 条反馈，推动 7 日留存提升 15%，互动时长提升 30%。",
    "journey.yitan.title": '上海易碳 <span class="timeline-role">AI 产品实习生</span>',
    "journey.yitan.desc": "参与工业碳核算 SaaS 建设，推动预测模型精度达标（MAPE < 8%）并完成 API 产品化封装，同时协同梳理企业碳合规需求并推进 PRD 交付。",

    "contact.title": "Get in touch",
    "contact.desc": "欢迎讨论催化、AI for Science、研究合作或博士申请机会。",

    "footer.text": "Designed & built with focus, speed, and taste."
  },

  en: {
    "nav.work": "Work",
    "nav.about": "About",
    "nav.gallery": "Gallery",
    "nav.journey": "Journey",
    "nav.blog": "Blog",
    "nav.cta": "⮑ Get in touch",

    "nav.research": "Research",
    "nav.publications": "Papers",
    "nav.perspective": "Ideas",
    "research.title": "Research",
    "research.desc": "I study how material structure shapes reactions, then ask how AI can help choose the next experiment.",
    "research.lead": "My research connects synthesis, structure and performance. In Ni/CeO₂ photothermal dry reforming, I examine the roles of Ni dispersion, ceria defects and metal–support interfaces in activity and stability. I use these experimental records to test evidence-grounded reasoning in scientific agents.",
    "research.catalysis.label": "MASTER'S RESEARCH · ONGOING",
    "research.catalysis.title": "What does catalyst structure change?",
    "research.catalysis.text": "I compare Ni/CeO₂ prepared by different routes and trace how dispersion, defects and interfaces affect CH₄/CO₂ activation, coking and deactivation.",
    "research.catalysis.caption": "Editorial schematic redrawn for this website; not an original paper figure.",
    "research.bench.label": "THESIS PROJECT · IN DEVELOPMENT",
    "research.bench.title": "Putting scientific agents to the test",
    "research.bench.text": "PT-DRM-Bench is in development. It asks agents to check data quality, make evidence-bounded structure–performance inferences and select experiments that distinguish competing hypotheses.",
    "research.bench.caption": "Concept illustration; no published benchmark result is implied.",
    "publications.title": "Selected papers",
    "publications.desc": "Published work, with my authorship clearly labeled. Follow the DOI links to journal records.",
    "publications.figureNote": "Editorial redraw of reported values and conditions; not a figure from the publication.",
    "publications.firstAuthor": "FIRST AUTHOR · 2025",
    "publications.featuredText": "I led this study of a magnetic mesoporous adsorbent for wet-process phosphoric acid wastewater, connecting synthesis, adsorption kinetics and isotherms with XPS and molecular dynamics evidence.",
    "publications.coauthor": "COAUTHOR · 2026",
    "publications.coauthor2022": "COAUTHOR · 2022",
    "publications.additional": "Additional first-author work",
    "publications.smallText": "Collaborative study of Cu⁺ on defective CeO₂ and its effect on Ni sites; the paper reports 42.8% light-to-fuel efficiency.",
    "publications.nanoText": "Collaborative study linking local coordination around single-atom Ni to catalytic activity and stability.",
    "perspective.title": "Where AI meets the lab",
    "perspective.desc": "Questions shaping my work, presented as research directions rather than settled findings.",
    "perspective.one.title": "Show the limits of evidence",
    "perspective.one.text": "A scientific agent should separate measurements from hypotheses and make missing fields, unit errors and batch effects visible.",
    "perspective.two.title": "Judge reasoning by the next experiment",
    "perspective.two.text": "A useful suggestion should discriminate between competing explanations while respecting physical and laboratory constraints.",
    "perspective.three.title": "Evaluate in real workflows",
    "perspective.three.text": "Across catalysis and in-car agents, I focus on failure cases, data provenance and regression across versions rather than a single aggregate score.",

    "blog.title": "Blog",
    "blog.desc": "Independent observations on AI products, evaluation, and industry trends.",

    "hero.intro": "I’m Haoran (Roger) Yang, a master’s researcher at UCAS studying photothermal catalysis and materials interfaces. I also design ways to evaluate scientific agents against experimental records, physical constraints and testable next steps.",
    "hero.focus": "Photothermal catalysis · AI for Science",
    "hero.currentlyLabel": "Currently",
    "hero.currently": "M.Eng., UCAS · Shanghai Advanced Research Institute",

    "hero.bridgeLabel": "Bridge",
    "hero.bridge": "Materials ↔ Scientific AI",

    "work.title": "Work",
    "work.desc": "AI projects that shaped how I think about evidence, evaluation and useful tools.",
    "work.zhuangleme": "A social app exploring how people package identity and play the unwritten rules of self-presentation — making those hidden dynamics learnable and shareable.",
    "work.veritex": "Semantic-powered literature search. Chat-first interaction with LangGraph under the hood for intent parsing, query expansion, and cross-source ranking.",
    "work.zeval": "Eval infrastructure for the Agent era. Automatically surfaces interaction friction from real conversation logs, generates regression test cases, and lets AI product teams iterate on agents with data.",
    "work.note1": "Aesthetic note — A good product should feel like a good film: emotionally resonant, structurally tight, and always grounded in real need.",
    "work.note2": "Next — A2A · Smart hardware · Context sensor for agent",

    "about.title": "About",
    "about.desc": "Studying materials interfaces and the reliability of scientific AI.",
    "about.bio": "I am pursuing an M.Eng. in Materials and Chemical Engineering at the Shanghai Advanced Research Institute, UCAS. My work spans photothermal catalysis, interfacial mechanisms and the evaluation of AI tools used in scientific workflows.",
    "about.builder": "I connect characterization and computation to testable hypotheses about how structure affects catalytic behavior.",
    "about.operator": "I design cases, rubrics and failure analysis for scientific and product agents, with attention to provenance and regression.",
    "about.leader": "I use LangGraph and Python to build literature-retrieval and agent-evaluation prototypes around research questions.",
    "about.beliefQuote": "Make the next experiment answer a better question.",
    "about.beliefText": "I break complex questions into claims that can be observed and challenged. Experiments, code and products need the same clear chain of evidence.",

    "gallery.title": "Gallery",
    "gallery.desc": "Moments that feed the work.",
    "gallery.filmTitle": "Favorite Films",
    "gallery.film3": "Whisper of the Heart",

    "journey.title": "Journey",
    "journey.desc": "Research, product, and business on one track.",
    "journey.ucas.title": "University of Chinese Academy of Sciences · Shanghai Advanced Research Institute <span class=\"timeline-role\">M.Eng., Materials and Chemical Engineering</span>",
    "journey.ucas.desc": "Research on Ni/CeO₂ photothermal catalysis and scientific-agent evaluation; CAS institute scholarship, 2025.",
    "journey.wit.title": "Wuhan Institute of Technology <span class=\"timeline-role\">B.Eng., Inorganic Nonmetallic Materials Engineering</span>",
    "journey.wit.desc": "Major rank 7/101; National Scholarship, 2024. Early research in magnetic nanomaterials and boron nitride nanotubes.",
    "journey.bytedance.title": 'ByteDance · Volcano Engine Data Platform (Aide Team) <span class="timeline-role">AI Product Manager</span>',
    "journey.bytedance.desc": "Studied enterprise data-governance agent workflows combining a knowledge base, strategies and execution skills. An internal comparison reported 20% lower governance cost than the conventional workflow.",
    "journey.nio.title": 'NIO · NOMI <span class="timeline-role">AI Product Manager</span>',
    "journey.nio.desc": "Built multi-turn, cross-domain benchmark cases from user logs and analyzed in-car agent failures. Internal evaluation reported task success rising from 27% to 82% after model and context-flow revisions.",
    "journey.kr.title": '36Kr · ZhiSheng <span class="timeline-role">AI Product Intern</span>',
    "journey.kr.desc": "User research, prompt UX, and growth experiments for an AI job-search product. 15+ dashboards, 500+ feedback entries analyzed. 7-day retention +15%, session time +30%.",
    "journey.yitan.title": 'Yitan Energy <span class="timeline-role">AI Product Intern</span>',
    "journey.yitan.desc": "Industrial carbon-accounting SaaS. Brought prediction accuracy to MAPE < 8%, shipped the API layer, and drove PRD delivery for enterprise compliance.",

    "contact.title": "Get in touch",
    "contact.desc": "I welcome conversations about catalysis, AI for Science, research collaborations and PhD opportunities.",

    "footer.text": "Designed & built with focus, speed, and taste."
  }
};

let currentLang = localStorage.getItem("lang") || "en";

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

  const dict = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) {
      el.innerHTML = dict[key];
    }
  });

  // Update toggle button text
  const btn = document.getElementById("langToggle");
  if (btn) {
    btn.textContent = lang === "zh" ? "EN" : "中";
  }
}

// Init
applyLang(currentLang);

// Toggle handler
const langBtn = document.getElementById("langToggle");
if (langBtn) {
  langBtn.addEventListener("click", () => {
    applyLang(currentLang === "zh" ? "en" : "zh");
  });
}
