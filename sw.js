const CACHE = 'poststudio-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './css/reset.css',
  './css/themes.css',
  './css/app.css',
  './js/backgrounds.js',
  './js/templates.js',
  './js/canvas.js',
  './js/typography.js',
  './js/carousel.js',
  './js/export.js',
  './js/app.js',
  './lib/html2canvas.min.js',
  './assets/icon.svg',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/icon-180.png',
];

// cache all assets on install
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// clean old caches on activate
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// cache-first for app assets, network-first for Google Fonts
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Google Fonts — network first, fallback to cache
  if (url.hostname.includes('fonts.')) {
    e.respondWith(
      fetch(e.request).catch(() => caches.match(e.request))
    );
    return;
  }

  // SVG backgrounds — cache first
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      });
    })
  );
});
