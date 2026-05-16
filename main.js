/* ============================================================
   main.js — Creator Portfolio
   ============================================================
   EDIT THE DATA SECTIONS BELOW to customize your portfolio.
   No build step needed — save and reload.
   ============================================================ */

'use strict';

/* ─────────────────────────────────────────────────────────────
   ★ DATA: SKILLS
   status: 'done' | 'learning' | 'planned'
───────────────────────────────────────────────────────────── */
const SKILLS = [
  {
    category: { ja: 'フロントエンド', en: 'Frontend' },
    items: [
      { name: 'HTML / CSS',     status: 'done' },
      { name: 'JavaScript',     status: 'done' },
      { name: 'React / Next.js',status: 'learning' },
    ],
  },
  {
    category: { ja: 'データベース', en: 'Database' },
    items: [
      { name: 'SQL', status: 'learning' },
    ],
  },
  {
    category: { ja: 'セキュリティ', en: 'Security' },
    items: [
      { name: 'OWASP TOP10',            status: 'learning' },
      { name: 'Vulnerability Analysis', status: 'learning' },
    ],
  },
  {
    category: { ja: 'クリエイティブ', en: 'Creative' },
    items: [
      { name: 'Illustration',  status: 'done' },
      { name: 'Visual Design', status: 'done' },
    ],
  },
  {
    category: { ja: '言語', en: 'Languages' },
    items: [
      { name: '日本語',  status: 'done' },
      { name: 'English', status: 'learning' },
    ],
  },
];

/* ─────────────────────────────────────────────────────────────
   ★ DATA: OWASP TOP10
   Edit status and descriptions to match your own service.
   status: 'done' | 'learning' | 'planned'
───────────────────────────────────────────────────────────── */
const OWASP_DATA = [
  {
    id: 'A01:2021',
    nameJa: 'アクセス制御の不備',
    nameEn: 'Broken Access Control',
    descJa: '認可されていないユーザーが制限されたリソースへアクセスできてしまう脆弱性。ロール検証・認可ロジックを丁寧に実装。',
    descEn: 'Unauthorized access to restricted resources. Addressed by strict role-based access control.',
    status: 'done',
  },
  {
    id: 'A02:2021',
    nameJa: '暗号化の失敗',
    nameEn: 'Cryptographic Failures',
    descJa: '機密データが平文で送受信・保存されるリスク。HTTPS強制・パスワードのハッシュ化で対応。',
    descEn: 'Sensitive data exposed due to weak encryption. HTTPS enforced; passwords hashed properly.',
    status: 'done',
  },
  {
    id: 'A03:2021',
    nameJa: 'インジェクション',
    nameEn: 'Injection',
    descJa: 'SQLインジェクション・XSSなど悪意ある入力がシステムに混入する脆弱性。プリペアドステートメントとサニタイズで対応。',
    descEn: 'SQL injection, XSS and similar attacks. Prevented by parameterized queries and input sanitization.',
    status: 'done',
  },
  {
    id: 'A04:2021',
    nameJa: '安全でない設計',
    nameEn: 'Insecure Design',
    descJa: 'セキュリティを考慮しない設計・アーキテクチャに起因するリスク。脅威モデリングを学習中。',
    descEn: 'Missing security controls at design level. Currently studying threat modeling.',
    status: 'learning',
  },
  {
    id: 'A05:2021',
    nameJa: 'セキュリティの設定ミス',
    nameEn: 'Security Misconfiguration',
    descJa: '不適切な設定・デフォルト設定の放置。CSP・HTTPSリダイレクト・不要なヘッダーの削除を実施。',
    descEn: 'Improper configuration or default settings. CSP headers, HTTPS redirect, and header cleanup applied.',
    status: 'done',
  },
  {
    id: 'A06:2021',
    nameJa: '脆弱で古くなったコンポーネント',
    nameEn: 'Vulnerable & Outdated Components',
    descJa: '既知の脆弱性を持つライブラリの使用。定期的な依存関係の更新を習慣化中。',
    descEn: 'Using components with known vulnerabilities. Building habits of regular dependency updates.',
    status: 'learning',
  },
  {
    id: 'A07:2021',
    nameJa: '識別と認証の失敗',
    nameEn: 'Identification & Authentication Failures',
    descJa: '認証・セッション管理の不備によるなりすまし。セッション固定対策・ログアウト処理を実装。',
    descEn: 'Weak authentication allowing account takeover. Session fixation prevention and proper logout implemented.',
    status: 'done',
  },
  {
    id: 'A08:2021',
    nameJa: 'ソフトウェアとデータの整合性の不具合',
    nameEn: 'Software & Data Integrity Failures',
    descJa: '信頼できないソースからの更新・依存関係の無検証な使用。SRIハッシュの活用を準備中。',
    descEn: 'Unverified updates from untrusted sources. Planning to implement SRI hashes.',
    status: 'planned',
  },
  {
    id: 'A09:2021',
    nameJa: 'セキュリティログとモニタリングの失敗',
    nameEn: 'Security Logging & Monitoring Failures',
    descJa: 'インシデント検知のためのログ・監視の不備。適切なログ設計とアラート設定を学習中。',
    descEn: 'Insufficient logging leading to undetected breaches. Studying proper log design and alerting.',
    status: 'learning',
  },
  {
    id: 'A10:2021',
    nameJa: 'サーバーサイドリクエストフォージェリ',
    nameEn: 'Server-Side Request Forgery (SSRF)',
    descJa: 'サーバーが攻撃者の意図した先に不正なリクエストを送る脆弱性。URLの検証と許可リスト方式を準備中。',
    descEn: 'Server making requests to attacker-controlled locations. URL validation and allowlists planned.',
    status: 'planned',
  },
];

/* ─────────────────────────────────────────────────────────────
   ★ DATA: TIMELINE
   Add new entries at the bottom. Set current: true for ongoing.
───────────────────────────────────────────────────────────── */
const TIMELINE = [
  {
    year: '2024',
    titleJa: 'Webサービスを個人で開発・公開',
    titleEn: 'Built and launched a personal web service',
    current: false,
  },
  {
    year: '2025',
    titleJa: 'OWASP TOP10の学習を開始し、自サービスにセキュリティ対策を適用',
    titleEn: 'Began OWASP TOP10 study; applied security measures to my service',
    current: false,
  },
  {
    year: '2026',
    titleJa: 'このポートフォリオを開設。AI黎明期の活動記録を始める',
    titleEn: 'Launched this portfolio. Started documenting my work from the AI era.',
    current: true,
  },
  {
    year: '2026',
    titleJa: 'AI × 人間ワークショップを大学で企画・進行中',
    titleEn: 'Planning AI × Human existence workshop at university (in progress)',
    current: true,
  },
];

/* ─────────────────────────────────────────────────────────────
   ★ DATA: CONTACT
   Email is split to deter automated scrapers (OWASP best practice).
   Replace each part with your own values.
───────────────────────────────────────────────────────────── */
// Email assembled at runtime — not visible to crawlers scraping HTML
const EMAIL_USER   = '[YOUR_EMAIL_USER]';
const EMAIL_DOMAIN = '[YOUR_EMAIL_DOMAIN]';

const SOCIAL_LINKS = [
  { icon: 'x',         label: 'X (Twitter)',  href: 'https://x.com/[YOUR_X_HANDLE]' },
  { icon: 'instagram', label: 'Instagram',    href: 'https://instagram.com/[YOUR_INSTAGRAM]' },
  { icon: 'note',      label: 'note',         href: 'https://note.com/[YOUR_NOTE_ID]' },
];

/* ─────────────────────────────────────────────────────────────
   STATE
───────────────────────────────────────────────────────────── */
let lang  = localStorage.getItem('pf-lang')  || 'ja';
let theme = localStorage.getItem('pf-theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

/* ─────────────────────────────────────────────────────────────
   DOM HELPERS
   Always use textContent — never innerHTML — for user-supplied data.
───────────────────────────────────────────────────────────── */
function make(tag, className) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  return e;
}

function makeText(tag, className, text) {
  const e = make(tag, className);
  e.textContent = text;   // Safe: no HTML injection possible
  return e;
}

/* ─────────────────────────────────────────────────────────────
   LANGUAGE
───────────────────────────────────────────────────────────── */
function applyLang(l) {
  lang = l;
  localStorage.setItem('pf-lang', l);
  document.documentElement.lang = l;

  document.querySelectorAll('.lang-ja').forEach(e => { e.hidden = (l !== 'ja'); });
  document.querySelectorAll('.lang-en').forEach(e => { e.hidden = (l !== 'en'); });

  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = l === 'ja' ? 'EN' : 'JA';

  renderSkills();
  renderOwasp();
  renderTimeline();
  renderContact();
}

/* ─────────────────────────────────────────────────────────────
   THEME
───────────────────────────────────────────────────────────── */
function applyTheme(t) {
  theme = t;
  localStorage.setItem('pf-theme', t);
  document.documentElement.dataset.theme = t;

  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = t === 'dark' ? '☀' : '◐';
}

/* ─────────────────────────────────────────────────────────────
   STATUS BADGE
───────────────────────────────────────────────────────────── */
const STATUS_LABEL = {
  done:     { ja: '対応済',  en: 'Implemented' },
  learning: { ja: '学習中',  en: 'Learning' },
  planned:  { ja: '準備中',  en: 'Planned' },
};

function makeBadge(status) {
  return makeText('span', `status-badge status-${status}`, STATUS_LABEL[status][lang]);
}

/* ─────────────────────────────────────────────────────────────
   RENDER: SKILLS
───────────────────────────────────────────────────────────── */
function renderSkills() {
  const container = document.getElementById('skills-grid');
  if (!container) return;
  container.innerHTML = '';

  SKILLS.forEach(group => {
    const card = make('div', 'skill-card fade-in');
    card.appendChild(makeText('h3', 'skill-category', group.category[lang]));

    const tags = make('div', 'skill-tags');
    group.items.forEach(item => {
      const row = make('div', 'skill-tag');
      row.appendChild(makeText('span', 'skill-name', item.name));
      row.appendChild(makeBadge(item.status));
      tags.appendChild(row);
    });

    card.appendChild(tags);
    container.appendChild(card);
  });

  // Re-observe new elements
  observeFadeIns();
}

/* ─────────────────────────────────────────────────────────────
   RENDER: OWASP TOP10
───────────────────────────────────────────────────────────── */
function renderOwasp() {
  const container = document.getElementById('owasp-grid');
  if (!container) return;
  container.innerHTML = '';

  OWASP_DATA.forEach(item => {
    const card = make('article', 'owasp-card fade-in');

    card.appendChild(makeText('span', 'owasp-id',   item.id));
    card.appendChild(makeText('h3',   'owasp-name',  lang === 'ja' ? item.nameJa : item.nameEn));
    card.appendChild(makeText('p',    'owasp-desc',  lang === 'ja' ? item.descJa : item.descEn));
    card.appendChild(makeBadge(item.status));

    container.appendChild(card);
  });

  observeFadeIns();
}

/* ─────────────────────────────────────────────────────────────
   RENDER: TIMELINE
───────────────────────────────────────────────────────────── */
function renderTimeline() {
  const container = document.getElementById('timeline-list');
  if (!container) return;
  container.innerHTML = '';

  TIMELINE.forEach(entry => {
    const item    = make('div', `timeline-item${entry.current ? ' timeline-current' : ''} fade-in`);
    const dot     = make('div', 'timeline-dot');
    const content = make('div', 'timeline-content');

    content.appendChild(makeText('span', 'timeline-year',  entry.year));
    content.appendChild(makeText('p',    'timeline-title', lang === 'ja' ? entry.titleJa : entry.titleEn));

    if (entry.current) {
      content.appendChild(makeText('span', 'timeline-now', lang === 'ja' ? '進行中' : 'Ongoing'));
    }

    item.appendChild(dot);
    item.appendChild(content);
    container.appendChild(item);
  });

  observeFadeIns();
}

/* ─────────────────────────────────────────────────────────────
   RENDER: CONTACT
   Email is assembled here at runtime to deter scrapers.
───────────────────────────────────────────────────────────── */
// SVG paths for contact icons — these are trusted strings from our source code
const ICON_SVG = {
  email: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>`,
  x: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 5.962zM17.083 20.25h1.836L6.853 4.086H4.882z"/>
  </svg>`,
  instagram: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="5"/>
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/>
  </svg>`,
  note: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
  </svg>`,
};

function renderContact() {
  const container = document.getElementById('contact-links');
  if (!container) return;
  container.innerHTML = '';

  // Assemble email at runtime (deters simple scrapers)
  const email = EMAIL_USER + '@' + EMAIL_DOMAIN;

  const emailLink = make('a', 'contact-link');
  emailLink.href  = 'mailto:' + email;
  // OWASP A01: no target="_blank" for mailto — stays in same context
  emailLink.innerHTML = ICON_SVG.email; // Trusted: hardcoded icon SVG
  emailLink.appendChild(makeText('span', 'contact-label', email));
  container.appendChild(emailLink);

  SOCIAL_LINKS.forEach(social => {
    const a = make('a', 'contact-link');
    a.href   = social.href;
    a.target = '_blank';
    a.rel    = 'noopener noreferrer'; // Prevent opener hijack (security)
    a.setAttribute('aria-label', social.label);
    a.innerHTML = ICON_SVG[social.icon] || ICON_SVG.note; // Trusted: hardcoded
    a.appendChild(makeText('span', 'contact-label', social.label));
    container.appendChild(a);
  });
}

/* ─────────────────────────────────────────────────────────────
   SCROLL FADE-IN (IntersectionObserver)
───────────────────────────────────────────────────────────── */
let scrollObserver;

function observeFadeIns() {
  if (!scrollObserver) return;
  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
    scrollObserver.observe(el);
  });
}

function initScrollObserver() {
  scrollObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        scrollObserver.unobserve(entry.target); // Fire once only
      }
    });
  }, { threshold: 0.08 });

  observeFadeIns();
}

/* ─────────────────────────────────────────────────────────────
   ACTIVE NAV HIGHLIGHT
───────────────────────────────────────────────────────────── */
function initNavHighlight() {
  const sections  = document.querySelectorAll('main section[id]');
  const navLinks  = document.querySelectorAll('.nav-link');

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => obs.observe(s));
}

/* ─────────────────────────────────────────────────────────────
   MOBILE NAV
───────────────────────────────────────────────────────────── */
function initMobileNav() {
  const hamburger = document.getElementById('nav-hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', () => {
    const open = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!open));
    mobileNav.classList.toggle('open', !open);
    mobileNav.setAttribute('aria-hidden', String(open));
    document.body.style.overflow = open ? '' : 'hidden';
  });

  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.setAttribute('aria-expanded', 'false');
      mobileNav.classList.remove('open');
      mobileNav.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  });
}

/* ─────────────────────────────────────────────────────────────
   AVATAR FALLBACK
   If avatar.png fails to load, show the text placeholder.
───────────────────────────────────────────────────────────── */
function initAvatarFallback() {
  const img      = document.querySelector('.hero-avatar img');
  const fallback = document.querySelector('.avatar-fallback');
  if (!img || !fallback) return;

  img.addEventListener('error', () => {
    img.style.display      = 'none';
    fallback.style.visibility = 'visible';
  });
}

/* ─────────────────────────────────────────────────────────────
   INIT
───────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(theme);
  applyLang(lang);   // Also calls all render functions

  document.getElementById('lang-toggle')?.addEventListener('click', () => {
    applyLang(lang === 'ja' ? 'en' : 'ja');
  });

  document.getElementById('theme-toggle')?.addEventListener('click', () => {
    applyTheme(theme === 'dark' ? 'light' : 'dark');
  });

  initMobileNav();
  initScrollObserver();
  initNavHighlight();
  initAvatarFallback();
});
