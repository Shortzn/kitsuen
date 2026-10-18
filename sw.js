// Alter Service Worker der Vorgängerversion: räumt auf und meldet sich ab.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys()
    .then((keys) => Promise.all(keys.filter((k) => k.startsWith("kitsuen")).map((k) => caches.delete(k))))
    .then(() => self.registration.unregister()));
});
