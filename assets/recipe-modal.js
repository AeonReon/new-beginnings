// A shared pop-up card that sits on top of the page (it does NOT navigate away)
// — used by the homepage "For today" cards and the Recipes page. Opens as a
// card over most of the screen, scrolls within itself, and closes on the ×, on
// Escape, or on a tap outside. Self-injects its styles + DOM once.
//   window.RecipeModal.open(recipeId)      → a full recipe
//   window.RecipeModal.openContent({...})  → any card (play / do / think / …)
// Depends on window.RECIPES + window.RECIPE_KINDS for open(); window.Reader
// (optional) powers read-aloud.
(function () {
  if (window.RecipeModal) return;

  const CSS = `
  .rcm-backdrop{position:fixed;inset:0;z-index:1000;background:rgba(20,28,36,.55);
    display:flex;align-items:center;justify-content:center;box-sizing:border-box;
    padding:max(6vh,env(safe-area-inset-top)) 16px max(6vh,env(safe-area-inset-bottom));
    -webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);animation:rcmFade .2s ease;}
  .rcm-backdrop[hidden]{display:none!important;}
  @media(min-width:560px){.rcm-backdrop{padding:6vh 4vw;}}
  @keyframes rcmFade{from{opacity:0;}}
  /* one uniform floating card, same size regardless of content, space all around */
  .rcm-modal{position:relative;background:var(--paper,#fffdf8);width:100%;max-width:560px;
    height:100%;max-height:760px;border-radius:22px;box-shadow:0 18px 60px rgba(0,0,0,.34);
    display:flex;flex-direction:column;min-height:0;overflow:hidden;
    animation:rcmRise .28s cubic-bezier(0.34,1.56,0.64,1);}
  @keyframes rcmRise{from{transform:translateY(24px) scale(.98);opacity:.4;}}
  .rcm-modal.rcm-compact{height:auto;}
  .rcm-hero{margin:-1.6em -1.5em 1.4em;height:210px;background:var(--rcs,#FCE7F3);position:relative;}
  .rcm-hero img{width:100%;height:100%;object-fit:cover;display:block;}
  .rcm-hero::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,0) 62%,rgba(0,0,0,.22));}
  .rcm-credit{margin:1.5em 0 0;font-size:.72em;color:var(--ink-mute,#8a97a3);}
  .rcm-credit a{color:inherit;text-decoration:underline;}
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
  /* generic content helpers (play / do / think) */
  .rcm-prose p{margin:0 0 .9em;line-height:1.6;}
  .rcm-prose p:last-child{margin:0;}
  .rcm-quote{font-size:1.14em;line-height:1.6;color:var(--ink,#26313a);margin:0 0 .7em;}
  .rcm-source{font-family:var(--sans,system-ui);font-size:.85em;font-weight:700;color:var(--rcd,#A21D57);margin:0;}
  .rcm-tags{display:flex;flex-wrap:wrap;gap:.4em;margin:1.2em 0 0;}
  .rcm-tag-pill{font-family:var(--sans,system-ui);font-size:.72rem;font-weight:700;
    padding:.32em .78em;border-radius:999px;background:var(--rcs,#FCE7F3);color:var(--rcd,#A21D57);}
  .rcm-morelink{display:inline-block;margin:1.6em 0 0;font-family:var(--sans,system-ui);
    font-weight:800;color:var(--rcd,#A21D57);text-decoration:none;}
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
      '<div class="rcm-modal" role="dialog" aria-modal="true" aria-label="Card">' +
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

  function headHTML({ kicker, emoji, title, blurb }) {
    return `<div class="rcm-head">
        ${kicker ? `<span class="rcm-tag">${esc(kicker)}</span>` : ''}
        <h2>${emoji ? `<span class="rcm-emoji">${emoji}</span>` : ''}${esc(title || '')}</h2>
        ${blurb ? `<p class="rcm-blurb">${esc(blurb)}</p>` : ''}
      </div>`;
  }

  // Core renderer used by both open() and openContent().
  function show({ accent, image, imageAlt, head, bodyHTML, onReady, compact }) {
    ensureDom();
    const a = accent || {};
    panel.classList.toggle('rcm-compact', !!compact);
    panel.style.cssText = `--rc:${a.c || '#C73B7A'};--rcd:${a.cd || '#A21D57'};--rcs:${a.cs || '#FCE7F3'};`;
    const hero = image
      ? `<div class="rcm-hero"><img src="${esc(image)}" alt="${esc(imageAlt || '')}" onerror="this.parentNode.style.display='none'"></div>`
      : '';
    body.innerHTML = hero + (head || '') + (bodyHTML || '');
    body.scrollTop = 0;
    backdrop.hidden = false;
    document.body.classList.add('rcm-locked');
    backdrop.querySelector('.rcm-close').focus();
    if (onReady) onReady(body);
  }

  // ---- a full recipe ----
  function open(id) {
    const r = (window.RECIPES || []).find(x => x.id === id);
    if (!r) return;
    const kd = (window.RECIPE_KINDS || {})[r.kind] || {};
    const cred = (window.RECIPE_CREDITS || {})[r.id];
    const ingredients = r.ingredients.map(i => `<li>${esc(i)}</li>`).join('');
    const steps = r.steps.map(s => `<li>${esc(s)}</li>`).join('');
    const bodyHTML = `
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
      <button class="read-btn rcm-read" type="button">▶ Read this recipe aloud</button>
      ${cred && cred.source ? `<p class="rcm-credit">Photo via the web — <a href="${esc(cred.source)}" target="_blank" rel="noopener">source</a>.</p>` : ''}`;
    show({
      accent: { c: kd.c, cd: kd.cd, cs: kd.cs },
      image: `assets/recipes/${r.id}.jpg`, imageAlt: r.name,
      head: headHTML({ kicker: kd.label, emoji: r.emoji, title: r.name, blurb: r.blurb }),
      bodyHTML,
      onReady(b) {
        const readBtn = b.querySelector('.rcm-read');
        if (readBtn && window.Reader) {
          readBtn.addEventListener('click', () => {
            if (window.Reader.speaking) window.Reader.stop();
            else window.Reader.readElement(b);
          });
        } else if (readBtn) { readBtn.remove(); }
      },
    });
  }

  // ---- any card (play / do / think / …) ----
  function openContent(opts) {
    const o = opts || {};
    show({
      accent: o.accent, image: o.image, imageAlt: o.imageAlt || o.title,
      head: headHTML({ kicker: o.kicker, emoji: o.emoji, title: o.title, blurb: o.blurb }),
      bodyHTML: o.bodyHTML || '',
      onReady: o.onReady,
      compact: o.compact,
    });
  }

  function close() {
    if (!backdrop) return;
    if (window.Reader && window.Reader.speaking) window.Reader.stop();
    backdrop.hidden = true;
    document.body.classList.remove('rcm-locked');
  }

  window.RecipeModal = { open, openContent, close, esc };
})();
