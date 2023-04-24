'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "a38e0607fe8d0d71a02afe3217db1703",
"index.html": "271fddf9d5317c47c08202bec54a3f20",
"/": "271fddf9d5317c47c08202bec54a3f20",
"main.dart.js": "d6681badecb1e5eb0b9a4f30abdbec16",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c94f6ef30b1cab84360de9f0e02f6512",
"assets/AssetManifest.json": "1abb4951f1db5cbb6f603009763b4c19",
"assets/NOTICES": "5b84a43eda77bcfd8761b5e88265eeba",
"assets/FontManifest.json": "3a03d14ef33df1e79edb0da94132283a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/svg/search.svg": "1219d9f19d8d2ce734fc7b27431d469e",
"assets/assets/svg/person_color.svg": "23062f6a16e696daa0e3535b52a1e2b4",
"assets/assets/svg/feedback_screen/sad.svg": "403510bf0bad82f68da149e7d67759ae",
"assets/assets/svg/feedback_screen/lol.svg": "2def5a2fed19a0732889adc6474ff4c4",
"assets/assets/svg/feedback_screen/happy.svg": "0687cbe3626730226b26ef50d4a0016c",
"assets/assets/svg/feedback_screen/wow.svg": "e39737bbc1be012eb21b7b542f717698",
"assets/assets/svg/lock.svg": "0a81b57c7de1a08d97dd7b3cfff908cf",
"assets/assets/svg/students/invite.svg": "1a06abc2351337b0926f3ffb9b6e578b",
"assets/assets/svg/students/like.svg": "2555bf08838d65a352e9f0f8a2293ed0",
"assets/assets/svg/students/liked.svg": "748919c8be78aceb7dbcdeccbdd6b1f8",
"assets/assets/svg/students/user_add.svg": "e54e4b848c1f81f6e11a28291768bfe5",
"assets/assets/svg/students/logout.svg": "8bfb8c13943aa5461d28af017eb108a4",
"assets/assets/svg/students/Chat_plus.svg": "cd94ecda381d0ba317160be919405f79",
"assets/assets/svg/students/book.svg": "fa018417014683fb76a79bc21a7dd1ff",
"assets/assets/svg/students/add.svg": "9c0d2e4bb94c01ff41c2423bd7bcdb39",
"assets/assets/svg/students/save.svg": "79570ee5d7f155065cb3991f855509b8",
"assets/assets/svg/students/feedback.svg": "cfbbf0d6d2670eee8eaca4a62da73b9f",
"assets/assets/svg/students/camera.svg": "27c169ba42a17d1f20bfd31f1d70febb",
"assets/assets/svg/students/general.svg": "d87f58be9dd0e38180dcf4d1b1ce6338",
"assets/assets/svg/students/edit.svg": "4198cccf55127969560944070f1f997a",
"assets/assets/svg/students/faq.svg": "63485eb5ed1945cb856a4bf67fbe1f48",
"assets/assets/svg/students/bug.svg": "ac079a7b80adc3ffd48db7772376c434",
"assets/assets/svg/students/phone.svg": "f6cda639c262eca0f989953b45921385",
"assets/assets/svg/students/share.svg": "f0ff47bd1a71e83925e2de4f50f9496d",
"assets/assets/svg/students/comment.svg": "c554d7b4dd348caff23ba54d4539d2e4",
"assets/assets/svg/students/notifications.svg": "c30897c7b7538ff0861f9f3fb8049164",
"assets/assets/svg/students/help.svg": "0aee6f6b2f16b58caa96c79446aa3cc8",
"assets/assets/svg/students/menu.svg": "3afc8b4711ca0a364c25b1be4777b8b8",
"assets/assets/svg/students/password.svg": "776c6a7867778b35dfc78288c6420ede",
"assets/assets/svg/students/privacy.svg": "6ec370fea58421e5ade0dafdfc468dca",
"assets/assets/svg/send.svg": "df1cb556b26848da4d1b2eb552d9d433",
"assets/assets/svg/interest_screen/sports.svg": "8f120a7e2c181009df27309270a7aef9",
"assets/assets/svg/interest_screen/crafts.svg": "e99b60d57b56d65ed85f7d9d6f4c4edd",
"assets/assets/svg/interest_screen/hobbies.svg": "6d170069ad7036e014bda9c0abf5d721",
"assets/assets/svg/interest_screen/volunteering.svg": "5320b1ae16177c5d33248788ade96189",
"assets/assets/svg/interest_screen/club.svg": "0aee6f6b2f16b58caa96c79446aa3cc8",
"assets/assets/svg/interest_screen/art.svg": "ff542bab16ff8a524037d13c1b1ca332",
"assets/assets/svg/interest_screen/academics.svg": "8955af30202f1ebe61d1530f2b99eb41",
"assets/assets/svg/phone.svg": "efda8ecd1a59bc184c20a879681ba20a",
"assets/assets/images/home/uni.png": "31fdb4c8cb442e240465911fd151e99c",
"assets/assets/images/home/mentor.png": "cacb4c017d17fa8d1fb67028bda3fbff",
"assets/assets/images/home/my_image.png": "40dcc3cf067a42e874cff9ccb1a8de60",
"assets/assets/images/home/message/profile2.png": "4fa067907a2718a2757cc02bfd214a18",
"assets/assets/images/home/message/profile3.png": "831be5e6b60db40091a720b4c5c28fe4",
"assets/assets/images/home/message/profile1.png": "801c03020fdda683d2a0e83c284f9325",
"assets/assets/images/home/student.png": "5ae1cfaf54fe7f9e2b60ffd4667e4c92",
"assets/assets/images/home/invite/invite.png": "c549e0aa79c6565bd546c59451edf505",
"assets/assets/images/home/profile/cert2.png": "16da5e53f8bff8d05beeb8d26a0d4bb5",
"assets/assets/images/home/profile/college_profile.png": "4a1454a284dd3dff2a577201964cc6ba",
"assets/assets/images/home/profile/edu1.png": "f4268a5ff60ec3340a193fdb664bbbac",
"assets/assets/images/home/profile/uni1.png": "b845ab6f2d56bed9976e0211e83e9b2f",
"assets/assets/images/home/profile/cert1.png": "0b13e9c35ff068615b1b10df8e681041",
"assets/assets/images/home/profile/edu2.png": "92e12c54fdc477a11ea6f9684536ecd8",
"assets/assets/images/home/profile/uni2.png": "44341fefb8acb93d600a48f4c0a834c2",
"assets/assets/images/home/profile/myScool.png": "5eaba02fbcc62459ac65b80616b5b971",
"assets/assets/images/home/profile/myUni.png": "53b26cec0f62120cc474ef86cb5f6995",
"assets/assets/images/home/profile/inter2.png": "df71fa884821230e4a858db6fd842ce4",
"assets/assets/images/home/profile/inter1.png": "4bdebafc65c66b71516ee33b34e3fefa",
"assets/assets/images/home/post3.png": "c621020061ee9526b242cdffa16ea5f3",
"assets/assets/images/home/post2.png": "9e05adbc573a899ba27f095658981c80",
"assets/assets/images/home/post1.png": "c0917f1d3f72f02fb4fc9a322623a54a",
"assets/assets/images/signup_login/login.png": "9b27a6f7bb45a82399492f570fca99f5",
"assets/assets/images/signup_login/forgot_password.png": "1b5456724774f91fea814c374de7f408",
"assets/assets/images/signup_login/fb.png": "e9e72b2b0937afb9846c368ce4175005",
"assets/assets/images/signup_login/otp.png": "90695d09a98300a604f240d8ac7fdb06",
"assets/assets/images/signup_login/reset_password.png": "32a09f5dbcea8856647327d0cd70aeee",
"assets/assets/images/signup_login/apple.png": "321d59d890baea1bb3a704b524ce8443",
"assets/assets/images/signup_login/signup.png": "77169101bffebbe641325ed6c6fcf751",
"assets/assets/images/signup_login/google.png": "9f2f1c7f31c3a53058777b188be7ea62",
"assets/assets/images/mentor_university/community.png": "fe05e1ce57910c9e086144fbb5af8815",
"assets/assets/images/mentor_university/find.png": "25fcadb1a67a86427099c416eedc9846",
"assets/assets/images/mentor_university/hello.png": "0324964caa95c9ee3de34517abf4f40d",
"assets/assets/images/student/community.png": "faba9984c38b42a02591b6494ba9b43a",
"assets/assets/images/student/grid_background.jpeg": "b720d7e3bf59c2bc6a3dbbd65346a575",
"assets/assets/images/student/background.png": "d561baa1148f2f3c93dfe39c54676eb9",
"assets/assets/images/student/find.png": "dae45d08c383c21709284e99fd416081",
"assets/assets/images/student/hello.png": "2a992cb6c0d5624d084e2de2f70ef8c9",
"assets/assets/images/landing.jpeg": "23a3bdc9f1f1768b7a8801fbd203d1e8",
"assets/assets/images/web_landing.jpeg": "bf8387d55c9284fdd288a27b23cb5c90",
"assets/assets/images/savvy_pool.png": "542ade74bc57c913f8c25a6578e3bd81",
"assets/assets/images/selection.jpeg": "90c673bb3bc8f805849569b5de30b626",
"assets/assets/fonts/DM_Sans/DMSans-Regular.ttf": "7c217bc9433889f55c38ca9d058514d3",
"assets/assets/fonts/DM_Sans/DMSans-Medium.ttf": "24bfda9719b2ba60b94a0f9412757d10",
"assets/assets/fonts/DM_Sans/DMSans-Bold.ttf": "b9cec5212f09838534e6215d1f23ed55",
"assets/assets/fonts/Poppins/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/fonts/Poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
