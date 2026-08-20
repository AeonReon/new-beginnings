// Render every tradition landing page in a shim DOM and report failures.
import fs from 'node:fs';
const html = fs.readFileSync('methodology.html','utf8');
const script = [...html.matchAll(/<script>\n([\s\S]*?)<\/script>/g)].map(m=>m[1]).join('\n');

function el(){ const e={ innerHTML:'', style:{setProperty(){}}, dataset:{}, classList:{add(){},remove(){}},
  querySelectorAll:()=>[], querySelector:()=>null, addEventListener(){}, appendChild(){}, setAttribute(){}, getAttribute:()=>null,
  replaceWith(){}, remove(){}, closest:()=>null, scrollIntoView(){} }; return e; }

const ids = process.argv.slice(2);
let fails = 0;
for (const id of ids) {
  const root = el();
  const win = {
    location:{ search:`?id=${id}`, hash:'', href:'' },
    document:{ getElementById:()=>root, querySelector:()=>el(), querySelectorAll:()=>[],
      createElement:()=>el(), addEventListener(){}, title:'', documentElement:el(), body:el() },
    localStorage:{ getItem:()=>null, setItem(){}, removeItem(){} },
    addEventListener(){}, scrollTo(){}, matchMedia:()=>({matches:false,addEventListener(){}}),
    history:{ replaceState(){}, pushState(){} }, navigator:{ share:null, userAgent:'node' },
    ARTS:[], setTimeout(){}, requestAnimationFrame(){}, console
  };
  win.window = win;
  for (const f of ['assets/methods-data.js','assets/videos-data.js']) {
    new Function('window','document','localStorage', fs.readFileSync(f,'utf8'))(win, win.document, win.localStorage);
  }
  try {
    new Function('window','document','location','localStorage','history','navigator','setTimeout','requestAnimationFrame','matchMedia',
      script)(win, win.document, win.location, win.localStorage, win.history, win.navigator, ()=>{}, ()=>{}, win.matchMedia);
    const out = root.innerHTML || '';
    const hasWatch = out.includes('watch-play');
    const ok = out.length > 500;
    console.log(`${ok?'ok  ':'FAIL'} ${id.padEnd(22)} html=${String(out.length).padStart(6)}  watch=${hasWatch?'yes':'no '}`);
    if (!ok) fails++;
  } catch (e) {
    fails++;
    console.log(`FAIL ${id.padEnd(22)} ${e.constructor.name}: ${e.message}`);
  }
}
process.exit(fails?1:0);
