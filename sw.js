const CACHE = 'new-beginnings-v33';
const ASSETS = [
  './',
  './index.html',
  './education.html',
  './food.html',
  './things-to-do.html',
  './health.html',
  './emotions.html',
  './books.html',
  './learning-apps.html',
  './watching.html',
  './assets/pillars/education.jpg',
  './assets/pillars/books.jpg',
  './assets/pillars/food.jpg',
  './assets/pillars/health.jpg',
  './assets/pillars/daysout.jpg',
  './assets/pillars/emotions.jpg',
  './schools.html',
  './assets/schools-data.js',
  './assets/map-style.json',
  './compass.html',
  './methodology.html',
  './random.html',
  './compare.html',
  './rhythm.html',
  './feast.html',
  './resources.html',
  './keeping.html',
  './games.html',
  './recipes.html',
  './assets/recipes-data.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './assets/style.css',
  './assets/app.js',
  './assets/reader.js',
  './assets/methods-data.js',
  './assets/feast-data.js',
  './assets/resources-data.js',
  './assets/games-data.js',
  './assets/deeds-data.js',
  './assets/philosophy-data.js',
  './assets/methodologies-data.js',
  './assets/rhythms-data.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then((hit) => hit || fetch(e.request).then((res) => {
      const copy = res.clone();
      caches.open(CACHE).then((c) => c.put(e.request, copy));
      return res;
    }).catch(() => caches.match('./index.html')))
  );
});
