const CACHE_NAME = 'wa-hub-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Install Service Worker & Cache Files
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Serve Cached Content When Offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
