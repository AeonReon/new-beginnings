const APP_VERSION = 'v13';

function renderHomeLink() {
  const here = location.pathname.split('/').pop() || 'index.html';
  if (here === 'index.html' || here === '' || here === 'methodology.html') return;
  document.body.insertAdjacentHTML('afterbegin',
    '<a href="index.html" class="home-link">← Home</a>'
  );
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
