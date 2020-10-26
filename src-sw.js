importScripts('./workbox-v5.1.4/workbox-sw.js')

const users = new RegExp('https://jsonplaceholder.typicode.com/users');
const cacheName = "api-v1";

workbox.routing.registerRoute(
    users,
    handleCb
);

workbox.routing.registerRoute(
    users,
    handleCb,
    'POST'
);

function handleCb(e) {
  // console.log("hello from generateSW POST")
  console.log(e)

  switch (e.request.method) {
    case 'GET':
     caches.open(cacheName) 
      .then(cache => {
        cache.add(e.request.url)
      })
    case 'POST':
     caches.open(cacheName) 
      .then(cache => {
        cache.delete(e.request.url)
      })
    default:
      console.error("unexpected method:", e.request.method)
  }

}

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);