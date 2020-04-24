/* eslint-disable no-restricted-globals */
 var CACHE_NAME = 'lastSearchs';
// var urlsToCache = [
//   './',
//   './index.js'
// ];

//Install service worker
self.addEventListener('install', event => {
  // Perform the install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
       // return cache.addAll(urlsToCache);
      })
  );
});

// // Cache and return the requests
self.addEventListener('fetch', event => {
    console.log(event.request.url)

  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Return response as Cache is hit 
        if (response) {
          return response;
        }
        return fetchAndUpdate(event.request);
      }
    )
  );
});

function fetchAndUpdate(request){
    return fetch(request)
    .then(function(res){
        if (res){
            return caches.open(CACHE_NAME)
            .then(function(cache){
                return cache.put(request,res.clone())
                .then(function(){
                    return res
                })
                .then(self.skipWaiting());
            });
        }
    });
}

// // Update service worker
 self.addEventListener('activate', event => {
   console.log("Activate")
  var cacheWhitelist = ['task-manager-pwa'];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
            console.log(cacheName)
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
 });