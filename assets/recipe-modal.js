// RecipeModal — one shared pop-up card for a full recipe, used by the homepage
// "Cook" card and the Recipes page. Tap a recipe anywhere → this opens with the
// bigger description, the child's job, what you need, and the simple steps.
// Depends on window.RECIPES + window.RECIPE_KINDS (recipes-data.js) and, if
// present, window.Reader (reader.js) for read-aloud. Self-injects its own
// styles and DOM once; call window.RecipeModal.open(id).
(function () {
  if (window.RecipeModal) return;

  const CSS = `
  .rcm-backdrop{position:fixed;inset:0;z-index:1000;background:rgba(20,28,36,.55);
    display:flex;align-items:flex-end;justify-content:center;padding:0;
    -webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);animation:rcmFade .2s ease;}
  @media(min-width:560px){.rcm-backdrop{align-items:center;padding:4vh 4vw;}}
  @keyframes rcmFade{from{opacity:0;}}
  .rcm-modal{position:relative;background:var(--paper,#fffdf8);width:100%;max-width:560px;
    max-height:92vh;border-radius:24px 24px 0 0;box-shadow:0 -8px 40px rgba(0,0,0,.25);
    display:flex;flex-direction:column;min-height:0;border-top:6px solid var(--rc,#C73B7A);
    animation:rcmRise .28s cubic-bezier(0.34,1.56,0.64,1);}
  @media(min-width:560px){.rcm-modal{border-radius:22px;border-top:none;box-shadow:0 20px 60px rgba(0,0,0,.3);}}
  @keyframes rcmRise{from{transform:translateY(24px);opacity:.4;}}
  .rcm-close{position:absolute;top:12px;right:12px;z-index:3;width:40px;height:40px;
    border-radius:50%;border:none;cursor:pointer;background:var(--paper-card,#fff);
    color:var(--ink-soft,#555);font-size:1.4rem;line-height:1;box-shadow:var(--shadow-sm,0 2px 8px rgba(0,0,0,.15));
    display:grid;place-items:center;}
  .rcm-close:active{transform:scale(.92);}
  .rcm-body{overflow-y:auto;min-height:0;padding:1.6em 1.5em 2em;
    font-family:var(--serif,Georgia,serif);color:var(--ink,#26313a);}
  .rcm-head h2{margin:.1em 2rem .1em 0;font-family:var(--sans,system-ui);font-size:1.5rem;
    line-height:1.15;display:flex;align-items:center;gap:.4em;}
  .rcm-head .rcm-emoji{font-size:1.3em;}
  .rcm-tag{font-family:var(--sans,system-ui);font-size:.64rem;font-weight:800;letter-spacing:.12em;
    text-transform:uppercase;color:var(--rcd,#A21D57);}
  .rcm-head p.rcm-blurb{margin:.45em 0 0;color:var(--ink-soft,#555);font-style:italic;}
  .rcm-meta{display:flex;flex-wrap:wrap;gap:.45em;margin:1em 0 1.3em;}
  .rcm-chip{font-family:var(--sans,system-ui);font-size:.72rem;font-weight:700;
    padding:.3em .75em;border-radius:999px;background:var(--rcs,#FCE7F3);color:var(--rcd,#A21D57);}
  .rcm-job{display:flex;gap:.7em;align-items:flex-start;
    background:linear-gradient(135deg,var(--rcs,#FCE7F3),var(--paper-card,#fff));
    border:2px solid var(--rc,#C73B7A);border-radius:18px;padding:1em 1.15em;margin:0 0 1.5em;}
  .rcm-job .rcm-ico{font-size:1.7rem;line-height:1;flex:none;}
  .rcm-job b{display:block;font-family:var(--sans,system-ui);font-size:.66rem;font-weight:800;
    letter-spacing:.1em;text-transform:uppercase;color:var(--rcd,#A21D57);margin-bottom:.25em;}
  .rcm-job p{margin:0;font-size:1.02em;}
  .rcm-h{font-family:var(--sans,system-ui);font-size:.7rem;font-weight:800;letter-spacing:.1em;
    text-transform:uppercase;color:var(--rcd,#A21D57);margin:1.5em 0 .6em;}
  .rcm-ing{margin:0;padding-left:1.15em;}
  .rcm-ing li{margin-bottom:.32em;font-size:.98em;}
  .rcm-steps{list-style:none;margin:0;padding:0;counter-reset:step;}
  .rcm-steps li{position:relative;counter-increment:step;padding:.15em 0 .9em 2.6em;
    font-size:1em;line-height:1.45;}
  .rcm-steps li::before{content:counter(step);position:absolute;left:0;top:0;width:1.9em;height:1.9em;
    border-radius:50%;background:var(--rc,#C73B7A);color:#fff;font-family:var(--sans,system-ui);
    font-weight:800;font-size:.85em;display:grid;place-items:center;}
  .rcm-steps li:not(:last-child)::after{content:"";position:absolute;left:.95em;top:1.9em;bottom:.35em;
    width:2px;background:var(--rcs,#FCE7F3);transform:translateX(-1px);}
  .rcm-why{margin:1.6em 0 0;color:var(--ink-soft,#555);}
  .rcm-instead{font-size:.9em;color:var(--ink-soft,#555);margin:1em 0 0;
    background:var(--paper-card,#fff);border-radius:14px;padding:.8em 1em;}
  .rcm-instead b{color:var(--rcd,#A21D57);font-weight:800;}
  .rcm-read{margin:1.5em 0 0;}
  body.rcm-locked{overflow:hidden;}
  `;

  function esc(s) {
    return String(s).replace(/[&<>"]/g, c =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  }

  let backdrop, body, panel, wired = false;

  function ensureDom() {
    if (wired) return;
    const style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    backdrop = document.createElement('div');
    backdrop.className = 'rcm-backdrop';
    backdrop.hidden = true;
    backdrop.innerHTML =
      '<div class="rcm-modal" role="dialog" aria-modal="true" aria-label="Recipe">' +
        '<button class="rcm-close" aria-label="Close">×</button>' +
        '<div class="rcm-body"></div>' +
      '</div>';
    document.body.appendChild(backdrop);
    panel = backdrop.querySelector('.rcm-modal');
    body = backdrop.querySelector('.rcm-body');

    backdrop.querySelector('.rcm-close').addEventListener('click', close);
    backdrop.addEventListener('click', e => { if (e.target === backdrop) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && !backdrop.hidden) close(); });
    wired = true;
  }

  function html(r, kd) {
    const ingredients = r.ingredients.map(i => `<li>${esc(i)}</li>`).join('');
    const steps = r.steps.map(s => `<li>${esc(s)}</li>`).join('');
    return `
      <div class="rcm-head">
        <span class="rcm-tag">${esc(kd.label || '')}</span>
        <h2><span class="rcm-emoji">${r.emoji || ''}</span>${esc(r.name)}</h2>
        <p class="rcm-blurb">${esc(r.blurb || '')}</p>
      </div>
      <div class="rcm-meta">
        ${r.time ? `<span class="rcm-chip">⏱ ${esc(r.time)}</span>` : ''}
        ${r.makes ? `<span class="rcm-chip">Makes ${esc(r.makes)}</span>` : ''}
      </div>
      ${r.hands ? `<div class="rcm-job"><span class="rcm-ico" aria-hidden="true">🧒</span>
        <div><b>Your little one's job</b><p>${esc(r.hands)}</p></div></div>` : ''}
      <p class="rcm-h">What you need</p>
      <ul class="rcm-ing">${ingredients}</ul>
      <p class="rcm-h">Make it together</p>
      <ol class="rcm-steps">${steps}</ol>
      ${r.why ? `<p class="rcm-why">${esc(r.why)}</p>` : ''}
      ${r.instead ? `<p class="rcm-instead"><b>Instead of the shop version —</b> ${esc(r.instead)}</p>` : ''}
      <button class="read-btn rcm-read" type="button">▶ Read this recipe aloud</button>`;
  }

  function open(id) {
    const recipes = window.RECIPES || [];
    const r = recipes.find(x => x.id === id);
    if (!r) return;
    ensureDom();
    const kd = (window.RECIPE_KINDS || {})[r.kind] || {};
    panel.style.cssText = `--rc:${kd.c || '#C73B7A'};--rcd:${kd.cd || '#A21D57'};--rcs:${kd.cs || '#FCE7F3'};`;
    body.innerHTML = html(r, kd);
    body.scrollTop = 0;
    backdrop.hidden = false;
    document.body.classList.add('rcm-locked');
    backdrop.querySelector('.rcm-close').focus();
    const readBtn = body.querySelector('.rcm-read');
    if (readBtn && window.Reader) {
      readBtn.addEventListener('click', () => {
        if (window.Reader.speaking) window.Reader.stop();
        else window.Reader.readElement(body);
      });
    } else if (readBtn) {
      readBtn.remove();
    }
  }

  function close() {
    if (!backdrop) return;
    if (window.Reader && window.Reader.speaking) window.Reader.stop();
    backdrop.hidden = true;
    document.body.classList.remove('rcm-locked');
  }

  window.RecipeModal = { open, close };
})();
