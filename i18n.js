/* i18n — Chinese / English toggle */

const translations = {
  zh: {
    "nav.work": "Work",
    "nav.about": "About",
    "nav.gallery": "Gallery",
    "nav.journey": "Journey",
    "nav.blog": "Blog",
    "nav.cta": "⮑ Start a project",

    "blog.title": "Blog",
    "blog.desc": "关于 AI 产品、评测与行业趋势的独立观察。",

    "hero.intro": "我是 Roger，base 上海。有足够强烈的好奇心和颠覆欲，习惯以玩乐和实验的心态去做事，也因此常常能在高强度创造中保持效率与热情。不迷信既有规则，不拘泥于条条框框，敢于挑战权威，也敢在必要的时候掀桌重来。",
    "hero.focus": "Agent Orchestration, Growth, PMF",
    "hero.currentlyLabel": "Currently",
    "hero.currently": "M.S. at UCAS · Open to collaboration",

    "work.title": "Work",
    "work.desc": "Selected projects I'm building or have contributed to.",
    "work.zhuangleme": "一款社交探索类应用，研究\u201C表达策略、身份包装与社交认知\u201D。把年轻人日常社交中的隐性规则做成可学习、可互动、可传播的产品体验。",
    "work.veritex": "通过语义理解实现高效文献检索。以 Chat & Search 交互为核心，结合 LangGraph 架构做意图识别、关键词扩展与多源融合排序。",
    "work.note1": "Aesthetic note — 我喜欢让产品像一部好电影，既有情绪张力，也有克制的结构感，同时也能够在业务和真实需求中生长。",
    "work.note2": "Future directions — A2A · 智能硬件 · Context sensor for agent",

    "about.title": "About",
    "about.desc": "一个会写 PRD、能上代码、也盯增长的数据导向产品人。",
    "about.bio": "中国科学院大学硕士在读，聚焦 AI 产品从 PMF 验证到 MVP 落地。崇尚创意、艺术与科技的融合，也执着于增长和 ROI。",
    "about.builder": "自主完成 AI 产品全栈开发，习惯快速试错并记录复盘，能在不确定中推进到可上线状态。",
    "about.operator": "注重留存、转化与复购，通过指标看板和用户反馈闭环，持续校准功能优先级与商业价值。",
    "about.leader": "4人团队负责人，承担产品方向、部分开发与运营协同，推动设计、技术与市场节奏一致。",
    "about.beliefQuote": "保持好奇，比保持正确更重要。",
    "about.beliefText": "我会把灵感记在随手笔记里，来自电影、音乐、街头对话，也来自和团队的每次复盘。复杂问题先拆小，先跑起来，再打磨成作品。",

    "gallery.title": "Gallery",
    "gallery.desc": "生活瞬间也是灵感。",
    "gallery.filmTitle": "Favorite Films",
    "gallery.film3": "侧耳倾听",

    "journey.title": "Journey",
    "journey.desc": "把研究、产品与业务放进同一条实践路径里。",
    "journey.nio.title": '蔚来汽车 NOMI 团队 <span class="timeline-role">AI 产品经理</span>',
    "journey.nio.desc": "主导车载 Agent 智能化评测闭环，从需求定义、评测集设计到结果归因与版本准出形成统一框架，并推动跨域多轮 Benchmark 与数据治理落地。",
    "journey.kr.title": '36氪·职升未来 <span class="timeline-role">AI 求职产品实习生</span>',
    "journey.kr.desc": "围绕 AI 求职产品做用户洞察、Prompt 体验优化与增长实验，沉淀 15+ 项指标看板并分析 500+ 条反馈，推动 7 日留存提升 15%，互动时长提升 30%。",
    "journey.yitan.title": '上海易碳 <span class="timeline-role">AI 产品实习生</span>',
    "journey.yitan.desc": "参与工业碳核算 SaaS 建设，推动预测模型精度达标（MAPE < 8%）并完成 API 产品化封装，同时协同梳理企业碳合规需求并推进 PRD 交付。",

    "contact.title": "Get in touch",
    "contact.desc": "如果你也有野心做一款伟大的产品，我们可以聊聊。",

    "footer.text": "Designed & built with focus, speed, and taste."
  },

  en: {
    "nav.work": "Work",
    "nav.about": "About",
    "nav.gallery": "Gallery",
    "nav.journey": "Journey",
    "nav.blog": "Blog",
    "nav.cta": "⮑ Start a project",

    "blog.title": "Blog",
    "blog.desc": "Independent observations on AI products, evaluation, and industry trends.",

    "hero.intro": "I'm Roger, based in Shanghai. Endlessly curious, restless by nature. I treat every project like play and every constraint like an invitation. That energy keeps me sharp through long creative pushes. No sacred rules, no borrowed frameworks — just the willingness to challenge what's there and, when needed, tear it all down and start over.",
    "hero.focus": "Agent Orchestration, Growth, PMF",
    "hero.currentlyLabel": "Currently",
    "hero.currently": "M.S. at UCAS · Open to collaboration",

    "work.title": "Work",
    "work.desc": "Things I'm building.",
    "work.zhuangleme": "A social app exploring how people package identity and play the unwritten rules of self-presentation — making those hidden dynamics learnable and shareable.",
    "work.veritex": "Semantic-powered literature search. Chat-first interaction with LangGraph under the hood for intent parsing, query expansion, and cross-source ranking.",
    "work.note1": "Aesthetic note — A good product should feel like a good film: emotionally resonant, structurally tight, and always grounded in real need.",
    "work.note2": "Next — A2A · Smart hardware · Context sensor for agent",

    "about.title": "About",
    "about.desc": "Writes PRDs, ships code, watches metrics.",
    "about.bio": "M.S. candidate at UCAS. I work across the full arc of AI products — from finding fit to shipping MVPs. I care about craft, and I care about numbers.",
    "about.builder": "End-to-end product development. Fast iteration, honest retros, comfort with ambiguity — shipping through uncertainty.",
    "about.operator": "Retention, conversion, repeat usage. Dashboard-driven prioritization with tight user-feedback loops.",
    "about.leader": "Team of 4. Own direction, contribute code, keep design and go-to-market in lockstep.",
    "about.beliefQuote": "Stay curious over staying correct.",
    "about.beliefText": "Inspiration lives in quick notes — films, music, overheard conversations, team retros. Start small, ship early, refine relentlessly.",

    "gallery.title": "Gallery",
    "gallery.desc": "Moments that feed the work.",
    "gallery.filmTitle": "Favorite Films",
    "gallery.film3": "Whisper of the Heart",

    "journey.title": "Journey",
    "journey.desc": "Research, product, and business on one track.",
    "journey.nio.title": 'NIO · NOMI <span class="timeline-role">AI Product Manager</span>',
    "journey.nio.desc": "Owned the evaluation loop for in-car Agents end to end — test design, attribution, release gating — and drove cross-domain benchmarking and data governance.",
    "journey.kr.title": '36Kr · ZhiSheng <span class="timeline-role">AI Product Intern</span>',
    "journey.kr.desc": "User research, prompt UX, and growth experiments for an AI job-search product. 15+ dashboards, 500+ feedback entries analyzed. 7-day retention +15%, session time +30%.",
    "journey.yitan.title": 'Yitan Energy <span class="timeline-role">AI Product Intern</span>',
    "journey.yitan.desc": "Industrial carbon-accounting SaaS. Brought prediction accuracy to MAPE < 8%, shipped the API layer, and drove PRD delivery for enterprise compliance.",

    "contact.title": "Get in touch",
    "contact.desc": "Building something ambitious? Let's talk.",

    "footer.text": "Designed & built with focus, speed, and taste."
  }
};

let currentLang = localStorage.getItem("lang") || "zh";

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
