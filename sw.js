self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["index.html","jquery-3.6.0.min.js","sw.js","index.js","fontawesome/js/all.js"])
        })
    );
});

self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request)
        .then(() => {
            return fetch(e.request)
            .catch(() => caches.match('index.html'))
        })
    )
})