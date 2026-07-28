const APP_VERSION = 'v37';

function renderHomeLink() {
  const here = location.pathname.split('/').pop() || 'index.html';
  if (here === 'index.html' || here === '' || here === 'methodology.html') return;
  document.body.insertAdjacentHTML('afterbegin',
    '<a href="index.html" class="home-link">← Home</a>'
  );
  // If we arrived here from the homepage, "Home" goes BACK so the browser
  // restores exactly where you were scrolled to — you don't lose your place.
  const link = document.querySelector('.home-link');
  if (link) link.addEventListener('click', (e) => {
    let fromHome = false;
    try {
      const r = new URL(document.referrer);
      const path = r.pathname.split('/').pop();
      fromHome = r.origin === location.origin && (path === '' || path === 'index.html');
    } catch {}
    if (fromHome && history.length > 1) { e.preventDefault(); history.back(); }
  });
}

function renderVersionPill() {
  document.body.insertAdjacentHTML('beforeend',
    `<div class="version-pill">${APP_VERSION}</div>`
  );
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
  renderHomeLink();
  renderVersionPill();
  registerSW();
});

window.NB = { store, save, uid, fmtDate, isoDay };
