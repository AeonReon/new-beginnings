const PAGES = [
  { href: 'index.html', label: 'Compass' },
  { href: 'compare.html', label: 'Compare' },
  { href: 'rhythm.html', label: 'Rhythm' },
  { href: 'feast.html', label: 'Feast' },
  { href: 'resources.html', label: 'Resources' },
  { href: 'keeping.html', label: 'Keeping' }
];

function renderHeader() {
  const here = (location.pathname.split('/').pop() || 'index.html');
  const nav = PAGES.map(p =>
    `<a href="${p.href}"${p.href === here ? ' class="active"' : ''}>${p.label}</a>`
  ).join('');
  document.body.insertAdjacentHTML('afterbegin', `
    <header class="site">
      <div class="wrap">
        <a href="index.html" class="brand">New Beginnings</a>
        <nav>${nav}</nav>
      </div>
    </header>
  `);
}

function renderFooter() {
  document.body.insertAdjacentHTML('beforeend', `
    <footer class="site">
      A first-principles guide for the early years — not a curriculum.
      Content is an honest synthesis, not an authority. Test it against your child.
    </footer>
  `);
}

function registerSW() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    });
  }
}

function store(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}
function save(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
}
function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }
function fmtDate(d) {
  const dt = d ? new Date(d) : new Date();
  return dt.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
}
function isoDay(d) {
  const dt = d ? new Date(d) : new Date();
  return dt.toISOString().slice(0, 10);
}

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
  registerSW();
});

window.NB = { store, save, uid, fmtDate, isoDay };
