// https://jakearchibald.com/2014/offline-cookbook/

const cacheName = "1466048504758"

/* eslint-disable quotes */
const cacheListAsync = JSON.parse('["/_/_/logo/phenomic-logo-white.png","/_/web_modules/Banner/backgrounds/grass-sun.jpg","/_/web_modules/Banner/backgrounds/grass.jpg","/_/web_modules/Banner/backgrounds/molecules.jpg","/404.html.f3d82a4d938b593823c37ead979b3b86.json","/assets/dx-play.jpg","/assets/dx.mp4","/assets/favicon.png","/assets/react.svg","/assets/short-url.mov","/CNAME","/contributing/index.html.81f4e49f1f58e5d68b458329764cbd9c.json","/docs/advanced/engine/index.html.c59d8b56ee151baabbff13231cdb79cf.json","/docs/advanced/good-practices/index.html.722790342d6eb599351fe10a4dd3260f.json","/docs/advanced/index.html.c90e36b70ddf6378e20c90ff0d836f08.json","/docs/advanced/offline-browsing/index.html.18bb6434c9ff66e3c1e0b1f329ba07ec.json","/docs/advanced/redux/index.html.a950560a173ce352551c203931767423.json","/docs/faq/babel/index.html.accbc49a11321dfa404a9c56565db41f.json","/docs/faq/gatsby/index.html.57295d910aa3b354597c15b7f62230d2.json","/docs/faq/index.html.07059f1cf4d600fd77f92fecfef3e611.json","/docs/faq/react/index.html.ef4843f9f21fda50c192a499c23e03b7.json","/docs/index.html.cb6a329ccb08947b3ac94ae953328a3e.json","/docs/setup/index.html.53d4ac7b015e2b0c7d70792a38fe6bcc.json","/docs/usage/collections/index.html.4a16dca50be8ef5cf982ef1ab80b84e9.json","/docs/usage/configuration/index.html.12b62096b5d42707767f4a2cd7bb1a21.json","/docs/usage/feeds/index.html.a8924080c3f423d35b87464a03ff4733.json","/docs/usage/gh-pages/index.html.4f3b6f8367c1b0395ff6c8a525f28ded.json","/docs/usage/index.html.ec4df79721502ff60e56f0978d9f6d3d.json","/docs/usage/layouts/index.html.cf77b19e3bbb0ee9e0c35ac07bf4f073.json","/docs/usage/scripting/index.html.6f4b02320c42af692be33c6b0906c04c.json","/docs/usage/styling/index.html.0a5c79d2ae800f0e979e2e3eb13e3b40.json","/docs/usage/write/index.html.85e46e790277b3592127366fb1be534b.json","/feed.xml","/index.html.721e4f478fad2e23197843228c9da3b1.json","/loading/index.html.b5f541545d81fef7d1c72fd9f27c703e.json","/phenomic.browser.d1adc5ea1efb12932138.css","/phenomic.browser.d1adc5ea1efb12932138.js","/showcase/index.html.97166437c09b9ec5733628e4fc56bf74.json","/index.html"]')
// const cacheListSync = JSON.parse('["/_/_/logo/phenomic-logo-white.png","/_/web_modules/Banner/backgrounds/grass-sun.jpg","/_/web_modules/Banner/backgrounds/grass.jpg","/_/web_modules/Banner/backgrounds/molecules.jpg","/404.html.f3d82a4d938b593823c37ead979b3b86.json","/assets/dx-play.jpg","/assets/dx.mp4","/assets/favicon.png","/assets/react.svg","/assets/short-url.mov","/CNAME","/contributing/index.html.81f4e49f1f58e5d68b458329764cbd9c.json","/docs/advanced/engine/index.html.c59d8b56ee151baabbff13231cdb79cf.json","/docs/advanced/good-practices/index.html.722790342d6eb599351fe10a4dd3260f.json","/docs/advanced/index.html.c90e36b70ddf6378e20c90ff0d836f08.json","/docs/advanced/offline-browsing/index.html.18bb6434c9ff66e3c1e0b1f329ba07ec.json","/docs/advanced/redux/index.html.a950560a173ce352551c203931767423.json","/docs/faq/babel/index.html.accbc49a11321dfa404a9c56565db41f.json","/docs/faq/gatsby/index.html.57295d910aa3b354597c15b7f62230d2.json","/docs/faq/index.html.07059f1cf4d600fd77f92fecfef3e611.json","/docs/faq/react/index.html.ef4843f9f21fda50c192a499c23e03b7.json","/docs/index.html.cb6a329ccb08947b3ac94ae953328a3e.json","/docs/setup/index.html.53d4ac7b015e2b0c7d70792a38fe6bcc.json","/docs/usage/collections/index.html.4a16dca50be8ef5cf982ef1ab80b84e9.json","/docs/usage/configuration/index.html.12b62096b5d42707767f4a2cd7bb1a21.json","/docs/usage/feeds/index.html.a8924080c3f423d35b87464a03ff4733.json","/docs/usage/gh-pages/index.html.4f3b6f8367c1b0395ff6c8a525f28ded.json","/docs/usage/index.html.ec4df79721502ff60e56f0978d9f6d3d.json","/docs/usage/layouts/index.html.cf77b19e3bbb0ee9e0c35ac07bf4f073.json","/docs/usage/scripting/index.html.6f4b02320c42af692be33c6b0906c04c.json","/docs/usage/styling/index.html.0a5c79d2ae800f0e979e2e3eb13e3b40.json","/docs/usage/write/index.html.85e46e790277b3592127366fb1be534b.json","/feed.xml","/index.html.721e4f478fad2e23197843228c9da3b1.json","/loading/index.html.b5f541545d81fef7d1c72fd9f27c703e.json","/phenomic.browser.d1adc5ea1efb12932138.css","/phenomic.browser.d1adc5ea1efb12932138.js","/showcase/index.html.97166437c09b9ec5733628e4fc56bf74.json","/index.html"]')
/* eslint-enable quotes */

self.addEventListener("install", (event) => {
  console.log("[SW]:", "installing")
  event.waitUntil(
    caches.open(cacheName).then((cache) => (
      cache.addAll(cacheListAsync)
      .then(() => self.skipWaiting())
      // return cache.addAll(cacheListSync)
    ))
  )
  console.log("[SW]:", "install completed")
})

self.addEventListener("activate", (event) => {
  console.log("[SW]:", "activating")

  event.waitUntil(
    caches.keys()
    // cleanup entries that do not match the current cacheName
    .then((keys) => Promise.all(
      keys.filter((key) => key !== cacheName)
      .map((key) => caches.delete(key))
    ))
    .then(() => {
      self.clients.claim()
      console.log("[SW]:", "activate completed")
    })
  )
})

self.addEventListener("fetch", (event) => {
  const requestURL = new URL(event.request.url)

  // Only cache files within the same origin
  // @todo reconsider this, user might want to cache assets from CDN etc
  if (requestURL.origin == location.origin) {
    event.respondWith(
      caches.open(cacheName)

      // @todo add filter to decide if
      // data are essential (eg: content): network first + cache
      // data are not essential (eg: avatar): cache first + network
      // more at
      // https://github.com/MoOx/phenomic/issues/277#issuecomment-215346577

      // Try the cache
      .then((cache) => (
        cache.match(event.request)
        .then((response) => {

          const fetchPromise = fetch(event.request)
          .then((networkResponse) => {
            // cache on demand
            cache.put(event.request, networkResponse.clone())

            return networkResponse
          })

          // Return from cache or start a new fetch Promise
          return response || fetchPromise
        })
      ))

      // Fallback when cache doesn't match and fetch failed
      .catch(() => {
        // Reponse with /index.html if user is trying to access a page
        if (
          requestURL.href.endsWith(".html") ||
          requestURL.href.endsWith("/")
        ) {
          return caches.match("/index.html")
        }

        // Other urls will received normal browser's behavior
        // like json, image, ...
      })
    )
  }
})
