const CACHE = 'new-beginnings-v135';
const ASSETS = [
  './',
  './index.html',
  './education.html',
  './run-the-week.html',
  './screens.html',
  './food.html',
  './things-to-do.html',
  './health.html',
  './books.html',
  './learning-apps.html',
  './watching.html',
  './birth.html',
  './assets/pillars/birth.jpg',
  './assets/pillars/birth-home.jpg',
  './assets/pillars/birth-support.jpg',
  './assets/pillars/birth-skin.jpg',
  './assets/pillars/birth-ideal.jpg',
  './assets/pillars/birth-spa.jpg',
  './assets/pillars/birth-grim.jpg',
  './assets/pillars/birth-ritual.jpg',
  './assets/pillars/home.jpg',
  './assets/pillars/home-hero.jpg',
  './assets/pillars/education.jpg',
  './assets/pillars/education-banner.jpg',
  './assets/pillars/books.jpg',
  './assets/pillars/food.jpg',
  './assets/pillars/health.jpg',
  './assets/pillars/daysout.jpg',
  './assets/pillars/daysout-map.jpg',
  './assets/audio/welcome.mp3',
  './assets/screens/show-berenstain.jpg',
  './assets/screens/show-franklin.jpg',
  './assets/screens/show-littlebear.jpg',
  './assets/screens/show-rupert.jpg',
  './assets/screens/show-films.jpg',
  './assets/pillars/emotions.jpg',
  './assets/pillars/learning-apps.jpg',
  './assets/pillars/watching.jpg',
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
  './activities.html',
  './recipes.html',
  './assets/recipes-data.js',
  './assets/recipes-data-2.js',
  './assets/games-data-2.js',
  './assets/deeds-data-2.js',
  './assets/philosophy-data-2.js',
  './assets/phrases-data.js',
  './assets/daily/words.jpg',
  './assets/recipe-modal.js',
  './assets/recipe-credits.js',
  './assets/daily/play.jpg',
  './assets/daily/do.jpg',
  './assets/daily/think.jpg',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './assets/style.css',
  './assets/app.js',
  './assets/reader.js',
  './assets/methods-data.js',
  './assets/feast-data.js',
  './assets/path.js',
  './moment.html',
  './turn-it-around.html',
  './when-its-hard.html',
  './assets/moments-data.js',
  './make-it-a-game.html',
  './assets/playful-data.js',
  './assets/tools/make-it-a-game.jpg',
  './rhymes.html',
  './assets/rhymes-data.js',
  './assets/tools/rhymes.jpg',
  './assets/resources-data.js',
  './assets/games-data.js',
  './assets/activities-data.js',
  './assets/tools/activities.jpg',
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
