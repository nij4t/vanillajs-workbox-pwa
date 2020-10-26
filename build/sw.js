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

workbox.precaching.precacheAndRoute([{"revision":"260f65e3e7c2fa6952ac9131086d0030","url":"css/main.css"},{"revision":"f0910b3a13bcaa97bee07d214b8b6011","url":"index.html"},{"revision":"b85e8930ece9fcee0f3910057f2a6c7a","url":"js/app.js"},{"revision":"292540f6dfbf73613fee69c4daa34768","url":"workbox-v5.1.4/workbox-background-sync.dev.js"},{"revision":"1477337d11af8f727e9203690ef10cfc","url":"workbox-v5.1.4/workbox-background-sync.prod.js"},{"revision":"c8aec116b72d5a6f4fbdf895cbe9a6a2","url":"workbox-v5.1.4/workbox-broadcast-update.dev.js"},{"revision":"3b28d76111687065750273c7ac7f4c97","url":"workbox-v5.1.4/workbox-broadcast-update.prod.js"},{"revision":"22b01a882fa59ca2dc95581a863d6543","url":"workbox-v5.1.4/workbox-cacheable-response.dev.js"},{"revision":"baa5a06eb89620c714728d9292895824","url":"workbox-v5.1.4/workbox-cacheable-response.prod.js"},{"revision":"4da76fb060d4145b55f770ef2ba1916e","url":"workbox-v5.1.4/workbox-core.dev.js"},{"revision":"2002e39bc413245e9466646856a3a1a0","url":"workbox-v5.1.4/workbox-core.prod.js"},{"revision":"2b6ecefe6b4de33b232b1d4f3f6f2d4d","url":"workbox-v5.1.4/workbox-expiration.dev.js"},{"revision":"3c39521fc764b9952c819c8be6bdee40","url":"workbox-v5.1.4/workbox-expiration.prod.js"},{"revision":"79bf2718a2ad92bc4b16e90df9a6813e","url":"workbox-v5.1.4/workbox-navigation-preload.dev.js"},{"revision":"b08e45df331d747386f7a9d3ce8d6f35","url":"workbox-v5.1.4/workbox-navigation-preload.prod.js"},{"revision":"3bfac87afd96631ca169f1580340bb09","url":"workbox-v5.1.4/workbox-offline-ga.dev.js"},{"revision":"291d35c6a2d5e4e63240804f3da93dff","url":"workbox-v5.1.4/workbox-offline-ga.prod.js"},{"revision":"fe30d3ca56741cc350362b551cc81ea6","url":"workbox-v5.1.4/workbox-precaching.dev.js"},{"revision":"aad79f6fd69e76afce9a9bc0444fb4b1","url":"workbox-v5.1.4/workbox-precaching.prod.js"},{"revision":"0aba977d2b293ce947ace319edfff93f","url":"workbox-v5.1.4/workbox-range-requests.dev.js"},{"revision":"05a4f56357fc7bc48478d8048df4f0e3","url":"workbox-v5.1.4/workbox-range-requests.prod.js"},{"revision":"eb2ee6155e0c721707d9fa05e4590f28","url":"workbox-v5.1.4/workbox-routing.dev.js"},{"revision":"65baaf497738a14f1b694a9cff829d4d","url":"workbox-v5.1.4/workbox-routing.prod.js"},{"revision":"929f436eeb0effe772037b7afb8ab1db","url":"workbox-v5.1.4/workbox-strategies.dev.js"},{"revision":"2a12ac7e1932c797cb3084c2543066c9","url":"workbox-v5.1.4/workbox-strategies.prod.js"},{"revision":"1ebc21ea730f92a3ea3e2698f9449a65","url":"workbox-v5.1.4/workbox-streams.dev.js"},{"revision":"e1ce8b87604c3265fcca4504f1b97814","url":"workbox-v5.1.4/workbox-streams.prod.js"},{"revision":"dc277aae8a000c27df99aba092aa1832","url":"workbox-v5.1.4/workbox-sw.js"},{"revision":"80d6025c59787e3fbdbd4e55ef08d7f3","url":"workbox-v5.1.4/workbox-window.dev.umd.js"},{"revision":"a416894a85a10c88abd525b50d27ffed","url":"workbox-v5.1.4/workbox-window.prod.umd.js"}]);