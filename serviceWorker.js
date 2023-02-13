const staticJorgosLovesGwen = "jorgos-loves-gwen"
const assets = [
    "/",
    "/index.html",
    "/style/style.css",
    "/script/main.js",
    "/img/balloon.svg",
    "/img/eggplant.svg",
    "/img/Gwen.jpg",
    "/img/happy.svg",
    "/img/heart.svg",
    "/img/smiling.svg",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticJorgosLovesGwen).then(cache => {
            cache.addAll(assets)
        })
    )
});
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})