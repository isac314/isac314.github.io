// Setbook moved to https://setbook-app.pages.dev/. This replaces the old service worker and removes itself.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))))
    .then(() => self.registration.unregister())
    .then(() => self.clients.matchAll()).then(clients => clients.forEach(c => c.navigate("https://setbook-app.pages.dev/"))));
});
