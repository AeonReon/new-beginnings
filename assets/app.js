const APP_VERSION = 'v81';

function renderHomeLink() {
  const here = location.pathname.split('/').pop() || 'index.html';
  if (here === 'index.html' || here === '') return;
  // Top-left "Back" goes to the exact previous point (browser history — restores
  // scroll too); top-right Home icon jumps straight to the homepage.
  document.body.insertAdjacentHTML('afterbegin',
    '<a href="index.html" class="home-link" id="navBack">← Back</a>' +
    '<a href="index.html" class="home-corner" id="navHome" aria-label="Home" title="Home">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10.4V19a1 1 0 0 0 1 1H10v-5h4v5h3.5a1 1 0 0 0 1-1v-8.6"/></svg>' +
    '</a>'
  );
  const back = document.getElementById('navBack');
  if (back) back.addEventListener('click', (e) => {
    // Real back to where you came from; fall through to Home only if there's
    // no history (e.g. the page was opened directly).
    if (history.length > 1) { e.preventDefault(); history.back(); }
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
