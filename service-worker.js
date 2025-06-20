self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("mi-cache-v1").then((cache) =>
      cache.addAll(["/", "/index.html", "/style.css", "/script.js", "/https://shre.ink/xwfN"])
    )
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((respuesta) => respuesta || fetch(e.request))
  );
});
