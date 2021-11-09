'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "2d35eef00069e47ff3d6e026dff9b5dc",
"index.html": "ecf4d16fbe9dcefcc1b89ac62546bfe4",
"/": "ecf4d16fbe9dcefcc1b89ac62546bfe4",
"main.dart.js": "35bcaf09d5a896a70374a47c108ccfe6",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fbae58788093bbb51ba8133032912873",
".git/config": "1faf2495160468d4f6502ac3c085ba87",
".git/objects/61/2102e767cd70a9459fa04a714ec72da8e2911b": "36e37df6fca3a4274f560f7bfb023d8b",
".git/objects/92/3cab6c140883f23138185fe182854e671bef66": "89f2705cf40df223c976b65d86ff5e2e",
".git/objects/66/2551f6dec6dfa19cb88ec2280639d0eb05b09d": "d0e4c9a40a1e39f9661467b5bc62efb9",
".git/objects/68/c41062745316bf9a3a9cb8979c9ce364309bb5": "6c59f945fd1d773760c1d28d7be33bd2",
".git/objects/6f/878289a8cf1364ff9334ffb833aecb776d2339": "3c5288c427a381d930a38764b3737750",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/04/3fe2591d927eae31c8ca995b4118d67778d7d6": "a9cb3bad0a8489ea8e9bfb80e03c6b2d",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/56/dcbcc57215bc2bfd9d5297d13f04d144b213cb": "c548245371f3d7d9579b2ad43d181852",
".git/objects/0b/d6f3afa5434db8fd4f486556608a05ec80ea12": "83392c2a88418c9ae6e16edf7aea68b7",
".git/objects/60/2562adedb036942ccc2b32ba0bd81aeb44f16f": "4a08610f3d97a8730c3a0329e0664d72",
".git/objects/5f/7ed74e9d5d2c631f3e186f3961a0c4b8923c75": "4920a6bdf65f4aef819017825d1ec3c3",
".git/objects/5f/f8af616c959eb1f6b93b26c04c4e75938c40eb": "5b0efb4826ade3b49ef652ac170b207a",
".git/objects/a4/6bc68e02a6f397667febbd7db87541dad4e533": "7c93b7fb5bd2184efec39477428a9d25",
".git/objects/ac/4b9fe28a7e1b12eebd365f4bc7b5acbca815f4": "68cd1ca24f51ce63e0c6c9473a2a5c06",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/bb/79bdd68d873db0212b9ffa2e58e8fb1b5a2e2a": "bcd8c44a0e76bd72f6e4502b99f8ba1b",
".git/objects/d7/e7237c7dcd609ceed77021b9a33134cf919d60": "6f3ebff9b7509a84663048a570f9ac8e",
".git/objects/da/33441e6f18de808a3f42a6f85c54552556aaa9": "13649c9b41dce52ed33a138a3199ed42",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/eb82c508b978c0a9a2a453e787d60189e0755c": "5782c6c95e8365d98e4a037c310df571",
".git/objects/fc/acb414d1bb2afb75a1b4b450ab6c90d168bfdf": "e251cb5aaec0f60866b27b3de23a471d",
".git/objects/ca/89d57a82eeecc811de10d367725e98301709f0": "35266374784a340cbcfedea397d52341",
".git/objects/4e/2b0aa41f054ad563f6db0bbb7d388cf6c74124": "7b6ec49e98d68e47e88797edfd8180da",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/7c/122e1f2bbc155ba991ef0f52707c1f3cd7200b": "4d230200b28b03f6f6584678379169f3",
".git/objects/7c/a27e55c131f4f253132e6c426f6d8fd514b00f": "a339e3f41800dffc38b17edddef1828b",
".git/objects/89/e58d60d53ea1f75c7d73eba3b45e47db8b2793": "d44d80aba817bbb1e46e5deef0231b25",
".git/objects/73/b3e1032ada651b1b0db478b57564892923983a": "02b20a0f4f7fec9127eb0a7beec3c093",
".git/objects/7b/f84de35522be7328f96f634a6d18fe851baa79": "2f9438428194672e3ddbb0c0b425ab04",
".git/objects/8a/5e8fad7e86ac450c6ff601e2345e5796ce0f3d": "800e2b678c52cc4735a38d50051940df",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/fd19b4b5250ba9ae2d6f3efc0d60d48b39cc25": "f276db5b99eecf324fda2c0c7bd70036",
".git/objects/21/26dadcd4bf6da29dd4a5d1a2708be03e3920c7": "2702ee62c5abc5111fb8060ac22b36ea",
".git/objects/86/8f11ce9ad92e019393ceef96feb2cb08c34ca7": "4db8089bd0697c3b545ede6a8baf9cfd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/65/289dea080c34139415330a187461a33feaa5c3": "f8a79f5d8c76a335990f94744ee506b3",
".git/objects/5e/563011a42ea80eedacc8b3ad43b86aee296697": "a8091f891ae78088c701a8d7570fdb60",
".git/objects/6c/f5bde28e740a5f415ff3158ff9367209454994": "9259cdb6a7db7f183bd6f28bcb3ba0ef",
".git/objects/99/5b20287d923a1556f660ec01865916ecb32a27": "479eeea48b31dcb708e702f47fc6990e",
".git/objects/99/608644d398a4896ad9418e7a351b9e5af08933": "eb85614a6c75ae5b5b4a7997dc92702e",
".git/objects/97/57fdd8f66a138f741e53c893750a0ae48885de": "5f3ab2c7dbdbe5777822481a655da2b9",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/a0/803bf207f864890ea1b5731d58c14ef15eec5f": "16078586e7689771b79c19ea5cde2ca9",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b9/356cebe2ae6f486995b67255a280c6821370cc": "3fa1a48f5e8ef5b24803e944d2de82c9",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/c2/25369fb361ae8cb5648db7dc70af896d0053c9": "938b60c72b3b33d4fdbd7c2be24cf9d1",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/e727a2085f36f4c30ce59090f207f1862209b9": "34ce415a6de9f9c49765ac6ad0a16576",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/ffc46f26b9d7608884d4a24e4a69c8d29c30b0": "4e64fb80fa9d02c60e3a3f5ab110b5a0",
".git/objects/24/3fcf0388b86d2d7b3fe87390457f9ca98576b6": "6d38c527ee7c1080578d3df6f3b3f057",
".git/objects/13/52949d8e39bd8b6797c32cf267ce164df241c4": "74ac3a68e67ab000f4e3acbddb655a44",
".git/objects/7a/64fc8e0ce76ecc5f56339d19253f925807b28f": "990fa5c1116a61d52ec83f1ab962dc9a",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a2c0ec99a47a4583097a00ec95210cb3",
".git/logs/refs/heads/master": "a2c0ec99a47a4583097a00ec95210cb3",
".git/logs/refs/remotes/vero/master": "17834482c7b186389d78f1d2e31b7eaf",
".git/logs/refs/remotes/upstream/master": "bffc5e7e02df15a3625f3d6a37e05230",
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
".git/refs/heads/master": "e78daa78132166c36c6b95d006d0b1d7",
".git/refs/remotes/vero/master": "e78daa78132166c36c6b95d006d0b1d7",
".git/refs/remotes/upstream/master": "25fbedfecf10ec57453035cc3184aeac",
".git/index": "89f723bfc47cb810104dfa074b541991",
".git/COMMIT_EDITMSG": "bb3742c5cc8e8ce973cdb56a5f314e1a",
"assets/AssetManifest.json": "75514ecfffd7899924596bf2f6e59f93",
"assets/NOTICES": "76507c28fb3ca042e998f31609395f4f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/thumbs/flutter.jpeg": "11ed9af4fd05580e2e2e3f15fe1a47e4",
"assets/assets/thumbs/cover.png": "c0d9674654afc5f0134c0a2f758e1b38",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
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
