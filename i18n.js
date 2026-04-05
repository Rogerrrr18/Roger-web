/* i18n — Chinese / English toggle */

const translations = {
  zh: {
    "nav.work": "Work",
    "nav.about": "About",
    "nav.gallery": "Gallery",
    "nav.journey": "Journey",
    "nav.cta": "⮑ Start a project",

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
    "nav.cta": "⮑ Start a project",

    "hero.intro": "I'm Roger, based in Shanghai. Driven by relentless curiosity and a desire to disrupt, I approach work with a playful, experimental mindset — which is how I stay energized and efficient through intense creative sprints. I don't worship existing rules or get boxed in by convention. I challenge authority when it matters, and I'm not afraid to flip the table and start fresh.",
    "hero.focus": "Agent Orchestration, Growth, PMF",
    "hero.currentlyLabel": "Currently",
    "hero.currently": "M.S. at UCAS · Open to collaboration",

    "work.title": "Work",
    "work.desc": "Selected projects I'm building or have contributed to.",
    "work.zhuangleme": "A social exploration app studying \"impression management, identity packaging, and social cognition.\" Turning the unspoken rules of everyday social interaction into a learnable, interactive, and shareable product experience.",
    "work.veritex": "Efficient literature retrieval powered by semantic understanding. Built around a Chat & Search interaction model, using LangGraph for intent recognition, keyword expansion, and multi-source fusion ranking.",
    "work.note1": "Aesthetic note — I like products to feel like a great film: emotionally compelling yet structurally restrained, while still growing from real business needs.",
    "work.note2": "Future directions — A2A · Smart hardware · Context sensor for agent",

    "about.title": "About",
    "about.desc": "A data-driven product person who writes PRDs, ships code, and drives growth.",
    "about.bio": "Currently pursuing my M.S. at UCAS, focused on AI products from PMF validation to MVP delivery. I believe in the fusion of creativity, art, and technology — and I'm equally obsessed with growth and ROI.",
    "about.builder": "Full-stack AI product development from scratch. Comfortable with rapid iteration, documenting learnings, and pushing through uncertainty to a shippable state.",
    "about.operator": "Focused on retention, conversion, and repeat engagement. Using metric dashboards and user feedback loops to continuously calibrate feature priorities and business value.",
    "about.leader": "Leading a team of 4, owning product direction, contributing to development, and coordinating operations to keep design, engineering, and go-to-market in sync.",
    "about.beliefQuote": "Staying curious matters more than staying correct.",
    "about.beliefText": "I jot down inspiration in quick notes — from films, music, street conversations, and every team retrospective. Break complex problems into small pieces, get them running first, then polish into something great.",

    "gallery.title": "Gallery",
    "gallery.desc": "Life moments are inspiration too.",
    "gallery.filmTitle": "Favorite Films",
    "gallery.film3": "Whisper of the Heart",

    "journey.title": "Journey",
    "journey.desc": "Research, product, and business — all on one path.",
    "journey.nio.title": 'NIO NOMI Team <span class="timeline-role">AI Product Manager</span>',
    "journey.nio.desc": "Led the end-to-end intelligent evaluation loop for in-car Agents — from requirement definition and test set design to result attribution and release gating — and drove cross-domain multi-turn benchmarking and data governance.",
    "journey.kr.title": '36Kr · ZhiSheng <span class="timeline-role">AI Job Product Intern</span>',
    "journey.kr.desc": "Ran user insights, prompt UX optimization, and growth experiments for an AI job-search product. Built 15+ metric dashboards, analyzed 500+ feedback entries, boosting 7-day retention by 15% and session duration by 30%.",
    "journey.yitan.title": 'Shanghai Yitan <span class="timeline-role">AI Product Intern</span>',
    "journey.yitan.desc": "Contributed to industrial carbon accounting SaaS. Drove prediction model accuracy to target (MAPE < 8%), completed API productization, and coordinated enterprise carbon compliance requirements through PRD delivery.",

    "contact.title": "Get in touch",
    "contact.desc": "If you have the ambition to build something great, let's talk.",

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
