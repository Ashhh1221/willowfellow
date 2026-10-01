'use strict';
// Change this version whenever any cached application file changes.
const VERSION = 'v3';
const PREFIX = 'pocket-shell-' + encodeURIComponent(self.registration.scope) + '-';
const CACHE = PREFIX + VERSION;
const APP_FILES = ['index.html', 'style.css', 'app.js', 'pwa.js', 'manifest.json', 'favicon.svg', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png', 'icons/apple-touch-icon.png'];
const urls = APP_FILES.map(path => new URL(path, self.registration.scope).href);

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(urls)));
  // Updates wait until all old app windows close, avoiding mixed app versions.
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith(PREFIX) && key !== CACHE).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin || !url.href.startsWith(self.registration.scope)) return;
  if (request.mode === 'navigate') {
    // The application is one HTML shell with hash-based navigation.
    const root = new URL('./', self.registration.scope).pathname;
    const index = new URL('index.html', self.registration.scope).pathname;
    if (url.pathname !== root && url.pathname !== index) return;
    event.respondWith(caches.open(CACHE).then(async cache => (await cache.match(urls[0])) || fetch(request)));
    return;
  }
  if (!urls.includes(url.href)) return;
  event.respondWith(caches.open(CACHE).then(async cache => (await cache.match(request)) || fetch(request)));
});
