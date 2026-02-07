const CACHE_NAME = 'playtoy-v1';
const ASSETS = [
  './',
  './index.html',
  './checklist.html',
  './icon-192.png',
  './icon-512.png',
  './logo_abertura.png',
  './manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Arquivos em cache');
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});

