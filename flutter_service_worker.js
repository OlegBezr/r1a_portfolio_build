'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "0e4313a9bd089fd1c3f1b87514a1ca95",
"index.html": "6229bfc9450261cc281109e825fe68cd",
"/": "6229bfc9450261cc281109e825fe68cd",
"main.dart.js": "40c126b6620f7dac770a3cb1b7026855",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "dc70ae88cf2ea3a861eface249d7625f",
".git/config": "9087132329c6b49ab563bdb479de4180",
".git/objects/0d/6f95d2ba57fb90d70a1dd9d6d57ea5c97518b4": "2fc56c85b2d8241b05f90a6814b5975e",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3d/a04a32a7893f81e0b0a8866d00d3a3b576c165": "030a7f1f2d7edda9bf9a6198d98970f9",
".git/objects/d7/a99bc1e93607b20799ecfc01ac4231918f1766": "1e3b99f1a22d8847ba32cae2edfe3416",
".git/objects/da/9e9e45b54f98ab5b157db66e65d514fbf1d718": "59190459bf73fc08223e910f79a9c9de",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/1dfcb2a144cc7cbe947f33409b69ca7723c797": "00631649575baf7bef671f2bdebff8f4",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/e667cc156db6a11abb6cb2e24f159e0dff6dc7": "e8c9a6551955fcc8bc106c84cf6a9404",
".git/objects/c8/d501ea4022c4730a638da12e503e1cdaaf6ccf": "1bbadf62a9ff80caeab11bf9f15f3470",
".git/objects/ec/d75c3ffd41530134ebbb9056814e1268658d5b": "68c8e1b9d2a98c589ca3e3a6f0a09320",
".git/objects/42/c2be459be0c67236c0576779a77d905c8df5d7": "545bfc94ef136620f970de47630557b4",
".git/objects/89/c5e5e28426faf95fc51f825efa5a6f8a07f624": "bd2e2d1c86a36f9fafc75017c9941f68",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/75/dde1442e12b14161f35e3689f6735f862ff063": "c3a1b6a6a4e980aab9c682c423fb2054",
".git/objects/86/7200e288a4b33e6dc3ffe49debe5d6c9550f14": "f61a8c19e82fdf4b3b6d83b64a41cd88",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/fa973ce789ceb07e699446f9df5cde65d7198d": "5f53e52d4b2a49c38ef78a93a8d95498",
".git/objects/9a/a8aefe7913102f6626b8ec1e26843516715779": "2fcb5e510176d3d1d42d63ce05a84f36",
".git/objects/36/a809502d0cbb573e1b9a0550a053e1fa3ed6d7": "b90bf605b78c60750197f33ba69bc094",
".git/objects/09/fe26190b49b0ca894d070ad85a46488c663e42": "5f29dc4b356f071d2a864d183b86ed34",
".git/objects/63/a60b3cf5328ecf490b06ce8188d1e3e7436c80": "d0435c8db36da06a744a4befb48ce6ad",
".git/objects/0f/8b890efe1fbe53f301a478efb4d0e6250a49f9": "5592a817857347a627d98949f168ba48",
".git/objects/90/60049b2884bddeeabe3afd9abe128288885d97": "eab3045c70ad5c206518f7dd2251a8ed",
".git/objects/bf/8e9a9f5b592bebe54acdf2b29c1a21c6306758": "72b67413ad62b100381dbd5330dd7967",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e8/7db7c6b30fe47890b70f0c50af688860872a30": "217628192b88853b560dbf821c4c92b7",
".git/objects/e0/eb94535eb5f67021b389248cccb2b081b25e71": "cdc6300e1c7eb6055093c7ebac56c5a1",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/8496ce97c8e065ee119fb1a8054d8958d482f5": "ea2506e8850df28c6c32c4c584605b23",
".git/objects/24/91138e0c8dfd93b175c990357cd03319919040": "75e6298205a6abbf25cc295537051634",
".git/objects/76/de66f6c889671fa5573b283eeae8c3dc870323": "7b3dbf640f0a52c059c7978b695cdbe7",
".git/objects/47/c09ad1ae2358f858e26d06df32d3cd2809104b": "17d88cdece6f76a16e658e77df32b761",
".git/objects/47/3a243966cd51b76e0fcbef9566ab7f71f77977": "2046bba5a87fc5b8226672423b703db0",
".git/objects/25/a78c0fa8c5824f49d5b524d7e9d2118ef3566c": "186bdd80df7e5025da6461983cac28af",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5182d6a2686ed5a1123266e2c221ec94",
".git/logs/refs/heads/master": "5182d6a2686ed5a1123266e2c221ec94",
".git/logs/refs/remotes/origin/master": "5c11d2fc1804ac3f4852b38aa89a441f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "ab590b80b9373cbfe5f9dc8a12a3adfa",
".git/refs/remotes/origin/master": "ab590b80b9373cbfe5f9dc8a12a3adfa",
".git/index": "02049d2bc2572bd45fa2f496dad9f8b3",
".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "43512071a05db75a3c6c7a2e60f59485",
"assets/NOTICES": "7b96e7aa6da0ac42a10a7bd4baa2b0cc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/quote3.md": "19bb7c030ddd0a39c79a0f506df9d0d2",
"assets/assets/comment2.md": "8d275a8708de4301b34de74277e98fd2",
"assets/assets/quote7.md": "328c152b6f9ae73785059a59ee67a8f0",
"assets/assets/comment6.md": "efff2724917bdd222da41397e7f10661",
"assets/assets/quote6.md": "3f0eb22ef228f62f9de2affbd8cc7658",
"assets/assets/comment7.md": "f4521272dcd8570a8f59611f860b153a",
"assets/assets/quote2.md": "c2f17502803090ba6686adb06e4f44f2",
"assets/assets/comment3.md": "75cedcd9c779e1db3ff389c955a750c5",
"assets/assets/comment8.md": "9c022d032ba034a4c95c82e037d27f80",
"assets/assets/quote8.md": "c0a5cd3f63590771a54147a46d206421",
"assets/assets/quote5.md": "4b8cce760db7c229e56f06597083447e",
"assets/assets/comment4.md": "33efe1afdbcffb3d86f6e0c307b7ef75",
"assets/assets/quote1.md": "c4bc226ce1739fed03063daa0631bfee",
"assets/assets/comment1.md": "10d7399fe05220cb24744aa9fee5cae6",
"assets/assets/quote4.md": "5bb9ab30512c514cc152b0bfaedf3395",
"assets/assets/comment5.md": "2784896f6a0a526dd00dcb370099d5d3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
