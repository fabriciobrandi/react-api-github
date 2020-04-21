/* eslint-disable no-restricted-globals */
 var CACHE_NAME = 'lastSearchs';
// var urlsToCache = [
//   './',
//   './index.js'
// ];

// Install service worker
//self.addEventListener('install', event => {
//   // Perform the install steps
 // console.log("Install")
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then(function(cache) {
//         console.log('Cache opened');
//        // return cache.addAll(urlsToCache);
//       })
//   );
//});

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

// A "fake" prefix used for all the normalized entries.
// Choose something that is not used by your real URLs.
const NORMALIZED_PREFIX = '/__normalized/';

// A list of "files" whose URLs you want to normalize.
const FILES_TO_NORMALIZE = [
//   '/ProfileDetail',
//   '/users',
  // ...anything else...
];

function normalizeRequestUrl(request) {
  // Convert the request.url string into a URL object,
  // so that we can get the pathname cleanly.
  const url = new URL(request.url);

  for (const file of FILES_TO_NORMALIZE) {
    if (url.pathname.startsWith(file)) {
      // If we have a match, then normalize the URL by using our
      // standard prefix along with the specific file name.
      url.pathname = NORMALIZED_PREFIX + file;
      return url.href;
    }

  }

  // Otherwise, just return the original request's URL.
  return request.url;
}

self.addEventListener('fetch', event => {
    // This is a naive cache-first strategy. Customize to suit your needs:
    // https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/
    event.respondWith(async function() {
      const requestKey = normalizeRequestUrl(event.request);
  
      const cache = await caches.open('runtime-cache');
      const cachedResponse = await caches.match(requestKey);
  
      // If there's a cached response, use it.
      if (cachedResponse) {
        return cachedResponse;
      }
  
      // Otherwise, get a response from the network for the original request.
      // Make sure you *don't* call fetch(requestKey),
      // since that URL doesn't exist on the server!
      const networkResponse = await fetch(event.request);
  
      // When you save the entry in the cache, use cache.put()
      // with requestKey as the first parameter.
      await cache.put(requestKey, networkResponse.clone());
  
      return networkResponse;
    }());
  });

function fetchAndUpdate(request){

    deleteStaleAssets(request.url, ["/ProfileDetail/defunkt", "https://api.github.com/users/defunkt","http://localhost:3000/ProfileDetail/defunkt"]);

    return fetch(request)
    .then(function(res){
        if (res){
            return caches.open(CACHE_NAME)
            .then(function(cache){
               
                caches.keys().then(function(keyList) {
                    return Promise.all(keyList.map(function(key) {
                         console.log(key)
                        if(key.url == "1")
                            return caches.delete(key);
                    }));
                });
                
                
                return cache.put(request,res.clone())
                .then(function(){
                    return res
                })
                .then(self.skipWaiting());
            });
        }
    });
}


function deleteStaleAssets(url, asset) {
    caches.open(CACHE_NAME).then(function(cache) {
      cache.keys().then(function(keys) {
        let cc = keys.filter(function(req) {
            console.log(req.url)
          //if(req.url.includes(asset) && req.url !== url) {
            if(req.url.includes(asset)) {
            return true;
          }
        });
        cc.forEach(function(r) {
          cache.delete(r);
        });
      });
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