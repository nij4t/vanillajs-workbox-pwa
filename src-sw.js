importScripts('./workbox-v5.1.4/workbox-sw.js')

workbox.routing.registerRoute(
    new RegExp('https://jsonplaceholder.typicode.com/users'),
    handleCb
);

function handleCb() {
  console.log("hello from generateSW")
}

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);