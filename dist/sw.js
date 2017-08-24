importScripts('workbox-sw.prod.v1.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/_nuxt/0.nuxt.bundle.a7ee51b96b1b0039e6e6.js",
    "revision": "285c54e8a3ffd2a54ef03982c020c38c"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.f56002869b6743f2c551.js",
    "revision": "22c61fd5ffd9f9e8134df24ba74b0f15"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.0a13096312c342fb2d92.js",
    "revision": "fd45ed2a57661b4af748d1a6e6f46308"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.619958a3ce48741522e5.js",
    "revision": "ada32e39d074d5b9e77aadc2b471a779"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.b506ef94e1a983fe6e2b.js",
    "revision": "d2ee145e8419b01ede1e6917a32229fc"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.6e1b6d3bcf17f9b5504b.js",
    "revision": "d0df2cd6698ca34875faa0fba751ee22"
  },
  {
    "url": "/_nuxt/6.nuxt.bundle.218dd3cd2c174a852ca9.js",
    "revision": "ef7b80121327095adeb9284b51313ac5"
  },
  {
    "url": "/_nuxt/7.nuxt.bundle.a8b354690f3f25daf77d.js",
    "revision": "c69eebfbf04120188d2245aa8ebbb40e"
  },
  {
    "url": "/_nuxt/8.nuxt.bundle.3097d2d28c0c2ab0311b.js",
    "revision": "eabb2f9483689b9ddae3401045424ce2"
  },
  {
    "url": "/_nuxt/9.nuxt.bundle.bfa603fa0cfa13425db8.js",
    "revision": "cd9a1d985ce2297ed8c5e5272c340148"
  },
  {
    "url": "/_nuxt/manifest.23d25379229b6ce5b198.js",
    "revision": "382dadc8f14572c16365fbdc30cf2486"
  },
  {
    "url": "/_nuxt/nuxt.bundle.cf8b585db98a19319109.js",
    "revision": "95e236ee842ddb50f8d6c8afbd55b270"
  },
  {
    "url": "/_nuxt/vendor.bundle.1f73d0ba4ac817320e06.js",
    "revision": "8bf998ad55219d873d2e2ddac7087a10"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "eli5-pwa_1.0.0",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('/_nuxt/**', workboxSW.strategies.cacheFirst({}), 'GET');
