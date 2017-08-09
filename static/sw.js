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
    "url": "/_nuxt/0.nuxt.bundle.1d89a7a2b50a6220bdf5.js",
    "revision": "8fbd4e0cff1f94a9fd299f38fcfecbaf"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.dcfb21a7333b5d73a4a4.js",
    "revision": "4925f860d7a01d964098b9ffc6563692"
  },
  {
    "url": "/_nuxt/manifest.f90034ca9f20da971eee.js",
    "revision": "39f2ce5bd140210c9f60498c72e3d600"
  },
  {
    "url": "/_nuxt/nuxt.bundle.417447c4492c6796707a.js",
    "revision": "79cc6ca0942182759564c80d1b55560e"
  },
  {
    "url": "/_nuxt/vendor.bundle.a4a5870e2d91a576147c.js",
    "revision": "dda31f86d7d0ddc1919f72e376240ee5"
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
