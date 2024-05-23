'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "98a5a4e9e6528ee4ad0d81b88782dca4",
"index.html": "1cd775f527102b9174131761c3b1fad1",
"/": "1cd775f527102b9174131761c3b1fad1",
"firebase-messaging-sw.js": "eb03cf6c3b6cc99ee1061fefcfa07a9b",
"main.dart.js": "206759c31c2ab91c5fff9a76b077c776",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e3b8458fd7c72b0ce2f1fdf38a9c6667",
"assets/AssetManifest.json": "efd295a22ccd6d4ce9ac1fb206267f77",
"assets/NOTICES": "6aa9e1f35df9d435a1cc326d74624a92",
"assets/FontManifest.json": "c5e4072815e4416ad2d890572b099032",
"assets/AssetManifest.bin.json": "441951993048a3e7d43f5dd2b4750ae1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f2163b9d4e6f1ea52063f498c8878bb9",
"assets/packages/mobkit_dashed_border/images/type2.png": "17a23dec244c3d1bb5b4ae67d7bd48b3",
"assets/packages/mobkit_dashed_border/images/type3.png": "2d50ab9d78a15b2f20012c3b9ea56c46",
"assets/packages/mobkit_dashed_border/images/type1.png": "9f8e612a54622229bd4b97e5357a473c",
"assets/packages/mobkit_dashed_border/images/type4.png": "9250b4ccf17768b5c7d6afcaebadf3f9",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "8e886cc068aad4847f003dcfc51ff988",
"assets/fonts/MaterialIcons-Regular.otf": "877a2667dd4c756cd1bab87b9e40a8fd",
"assets/assets/images/wrk.png": "804c7060f19c8241841e547ae5842ba4",
"assets/assets/images/avatars/avatar5_active.png": "a81c16ebffbf278fd4718f0d2c954bc1",
"assets/assets/images/avatars/avatar8_active.png": "29c8f9e3f80cbdcad799151e3ebc4148",
"assets/assets/images/avatars/avatar0_active.png": "a9608b3ddc71b13b39b849e0914ee84f",
"assets/assets/images/avatars/avatar7_active.png": "300978258448385a3e8f4b60dbdaeb83",
"assets/assets/images/avatars/avatar9.png": "2c4636aadbf7ff7562639c6167ebf93a",
"assets/assets/images/avatars/avatar8.png": "4850dd6bdc130b95ca8e380e7767bc7c",
"assets/assets/images/avatars/avatar2_active.png": "fd055cbf5ff29ca9654711975eb94a41",
"assets/assets/images/avatars/avatar5.png": "61bb87e8495b40c2a9ed25d670ba8ab1",
"assets/assets/images/avatars/avatar4.png": "fa3e5e68437a1462c2e01a18522d1d9f",
"assets/assets/images/avatars/avatar1_active.png": "c871be225731928765644380d84b8c40",
"assets/assets/images/avatars/avatar6.png": "851ac0af39ee30803e1ef99edb35e928",
"assets/assets/images/avatars/avatar7.png": "c1545cba37b44ce89c19ee427a79b5c6",
"assets/assets/images/avatars/avatar3.png": "6b871cc7da80a7deb7b9f3e4c812cdb4",
"assets/assets/images/avatars/avatar4_active.png": "d248612b1e3280156ccc5b2e7d33dec1",
"assets/assets/images/avatars/avatar2.png": "9cc26adfc5064b6955e82515653ca9de",
"assets/assets/images/avatars/avatar9_active.png": "350e1a73229375adb19c0cb6bc3a50c3",
"assets/assets/images/avatars/avatar0.png": "6672ec167e817ec1e61af54601a92269",
"assets/assets/images/avatars/avatar10.png": "510021524a8ea90462dc634a677d2904",
"assets/assets/images/avatars/avatar1.png": "35db452d19fb3919316c524c846a4dd9",
"assets/assets/images/avatars/avatar10_active.png": "548735ef4cb9b03e5685a5e9939a33b5",
"assets/assets/images/avatars/avatar3_active.png": "fd460e1024bf5f77d72831affca834d4",
"assets/assets/images/avatars/avatar6_active.png": "48a729818692245c1b4ec54423287234",
"assets/assets/images/logo.svg": "1b4ec4d197eceef818a3917a71931e30",
"assets/assets/images/not_found.png": "976d88a3675201422168185d232491f9",
"assets/assets/music_temps/Shopper-IU-13829434.mp3": "530b448674eab1f713ee788069855454",
"assets/assets/music_temps/RunRun-PROWDMON-8489751.mp3": "2b3577d7fe3d38f8663d0cb3493a0550",
"assets/assets/music_temps/CoBaCaCo.mp3": "3e57b38d457575329d28983febe51b7b",
"assets/assets/music_temps/GieoQue-HoangThuyLinhFeatDen-7702264.mp3": "606bdcd9de7f83ca5f8ce5c281c63078",
"assets/assets/music_temps/GalzXypher-XG-8871972.mp3": "70fa92a0faec1b7b989d7527e26a52d0",
"assets/assets/music_temps/ChoToiLangThang-NgotDen-4817311.mp3": "e3d8a0eb09ae697a545a369eb62200fd",
"assets/assets/music_temps/KhiNguoiMinhYeuKhoc-PhanManhQuynh-4291421.mp3": "5f4765015cc95afd31e0c1cc8519bc19",
"assets/assets/env/data_music.json": "5d22fadd953016b6d9461ad5e1eca923",
"assets/assets/env/data_sign_in.json": "cc7e7e4ba689796742f753a54aa0caf6",
"assets/assets/env/dev.json": "e5a9c8406b5ec056586b8a64466fa718",
"assets/assets/env/data_artist.json": "a463abd82a960edbc8fc742ea2477965",
"assets/assets/env/prod.json": "e5a9c8406b5ec056586b8a64466fa718",
"assets/assets/env/data_album.json": "87ea338a588ecae5e1ac7a728aa71760",
"assets/assets/images_temp/image4_2.png": "28bfbd44417e2b36f92cd79b73d184ba",
"assets/assets/images_temp/image11.png": "b04b4e65a82c6cfd3a5ff5e205fe57e9",
"assets/assets/images_temp/image4_1.png": "fbcea1ff020365f87005f0b8c2fcf46e",
"assets/assets/images_temp/image10.png": "711422ae5d02806a9f8cc3b6f3d6dfeb",
"assets/assets/images_temp/barcode.svg": "913585ab8b4d7089bdaabd62bd9aebce",
"assets/assets/images_temp/tax_receipt.png": "5794094255dc5f8a269da2ab3282d8ce",
"assets/assets/icons/search.svg": "66b21388bb2ac5473d4df259409f01e4",
"assets/assets/icons/arrow_next.svg": "75c32c4ca20d66e12bd0bd26067fc01c",
"assets/assets/icons/releases/new_add.svg": "fec3e2f06736937d1be2b475cc0fa2d5",
"assets/assets/icons/releases/register.svg": "4e9de8fa705353e5a2f454b0112349c8",
"assets/assets/icons/releases/wealth_none.svg": "c3f4b7eea4db66219c18713a5d563538",
"assets/assets/icons/releases/main.svg": "d1173a0be61173b91d37cb5b602ec679",
"assets/assets/icons/releases/paper_none.svg": "b273bfabcb9a1a8a6eea532bd16f99b9",
"assets/assets/icons/releases/paper.svg": "cb137634edcf82fdfeecae71965ac47e",
"assets/assets/icons/releases/wealth.svg": "ddd4e5c73c38e603cb2bdae5e4b10808",
"assets/assets/icons/releases/add.svg": "7b93ddaab62dcd3873333cc8b6793129",
"assets/assets/icons/releases/main_none.svg": "cc21ee35f010d4f700ff42820541c204",
"assets/assets/icons/releases/flow_step.svg": "3990c9163130736335a687bf0a498989",
"assets/assets/icons/lock_password.svg": "6d8c34ef1201c0860222107a31fb2a24",
"assets/assets/icons/rating/un_active.svg": "6be2c1e945333cb6f4de0184f9e4d024",
"assets/assets/icons/rating/active.svg": "6be2ebb1f04614534859fd05a6d59d22",
"assets/assets/icons/arrow_back.svg": "acfadec9619088660383e3de42c48a04",
"assets/assets/icons/calender.svg": "dd2d26dbd25edea02642cf43bc2f3766",
"assets/assets/icons/arrow_drop.svg": "f0be48d6f12158b76e26c74e1c4d93ee",
"assets/assets/icons/button_search.svg": "04bbdab941542f0b1afb7086dee3399a",
"assets/assets/icons/checkbox/check_off.svg": "777cfc1d2d1735fd07d4cad5ea4cccb2",
"assets/assets/icons/checkbox/check_success.svg": "6fe449a73f654b55c559e080db7b21ca",
"assets/assets/icons/checkbox/check_on.svg": "9c7d1abf055d935fd9559a21d897797e",
"assets/assets/icons/checkbox/check_error.svg": "b82d3d06708d6f9c463539bfa6184252",
"assets/assets/icons/checkbox/check_warning.svg": "d051802fb0882bf57cab6b667849f840",
"assets/assets/icons/checkbox/check_off_gray.svg": "d61dcf9943ed686bd7645d33471a22d0",
"assets/assets/icons/favorite/un_active.svg": "71965eaa66658d75ff5a4c68e7b2ee61",
"assets/assets/icons/favorite/active.svg": "f85df54f1100de303d3af25b24bdf6f3",
"assets/assets/icons/plus.svg": "4daba1b6275df51bc8495bd19602e191",
"assets/assets/icons/add.svg": "7265d1de7837226caab29a0c0690d4d9",
"assets/assets/icons/rectangle/un_active.svg": "86e669d989f7fb09f029b7c15a6a077a",
"assets/assets/icons/rectangle/active_3.svg": "4821613aa15f2d2014fec71091765b91",
"assets/assets/icons/rectangle/active.svg": "7d813b6d40032a07da94e537605d2cf1",
"assets/assets/icons/copy.svg": "a6351633519ba6014445df27706e4344",
"assets/assets/icons/controls/end.svg": "997448b9640d7942c3d7c9bd98d96be7",
"assets/assets/icons/controls/reset.svg": "a7533df6640504ee057d1dc4c35ac6d4",
"assets/assets/icons/controls/termination.svg": "87904d5356efb6d5cece9bfeb46fece7",
"assets/assets/icons/controls/start.svg": "41e9856fce6a6cb4e45f7650ea47b3eb",
"assets/assets/icons/controls/back.svg": "1966e60cc3e180aae2a91e1063322383",
"assets/assets/icons/controls/next.svg": "9d450f622a600275700e419db5472fcf",
"assets/assets/icons/chart_music/background_color.svg": "c5d130dbd5cbc4430fc2b40bb533b6a3",
"assets/assets/icons/chart_music/gbc.png": "b4c767f16cdff0091c398f9e9da71494",
"assets/assets/icons/chart_music/background_default.svg": "3444673d08480c776e3e6c89adec0e05",
"assets/assets/icons/chart_music/count4.svg": "6d7786d4a60a9eade523728e7cbf25e9",
"assets/assets/icons/chart_music/count5.svg": "c937d85ecc896884cdc5ea85c05c3307",
"assets/assets/icons/chart_music/count1.svg": "2251316c127703a48bc65063f0a3bd20",
"assets/assets/icons/chart_music/count0.svg": "0899d684ca33d5ce3493f6577a5453f8",
"assets/assets/icons/chart_music/count2.svg": "325ecbca87e8e2ed1bfd3db3a279c337",
"assets/assets/icons/chart_music/count3.svg": "7e1498a1dc1c4b1765ae0401df00a40d",
"assets/assets/icons/card_unactive.svg": "5a454f9783b2423419c7d0aa141e21f7",
"assets/assets/icons/more.svg": "b9f262d893760d0a1163942b86f35b0e",
"assets/assets/icons/my/bank_daegu.png": "ea89b80176255e0344aef29c0b9b5d7b",
"assets/assets/icons/my/bank_kookmin.png": "eb3ffc1ee5fead2474232b9fa187cec7",
"assets/assets/icons/my/arrow_right.png": "210b5f6fa57df6bcad11adb1f7320ee7",
"assets/assets/icons/my/arrow_up.png": "a95e7a785ae5d6ff38f844f7e42dd3f6",
"assets/assets/icons/my/bank_industrial.png": "d5ab23bc2a70173ad040495395ed52f5",
"assets/assets/icons/my/bank_suhyup.png": "55078f643c3d92fb88eaf1b9c0db69d5",
"assets/assets/icons/my/bank_my.png": "7b38101c923cec547b37422440d28552",
"assets/assets/icons/my/user.png": "4b6f22b195149c38a150b111fd20b607",
"assets/assets/icons/my/receipt.png": "78e95f1fad5e3893a72db5eed041ee3d",
"assets/assets/icons/my/logo_usa.png": "8eff1ff5b12e158a53b5b454e1bcae74",
"assets/assets/icons/my/questioning.png": "e3d93b2af7609036824ff2986b2c7651",
"assets/assets/icons/my/bacnk_hana.png": "8c82d8242e6f9e725dffde8cc006bc7b",
"assets/assets/icons/my/detailPayment.png": "b39bd58dc66afc179477434307a05ee5",
"assets/assets/icons/my/bank_gwangju.png": "3e4171909956adc4aa7b690a6d343acf",
"assets/assets/icons/my/bank_citi.png": "88e8446f54eccb9c61971f7c1286524f",
"assets/assets/icons/my/bank_busan.png": "32edb559798e43770f2372650235c710",
"assets/assets/icons/my/bank_saemaeul_geumgo.png": "df9d1336e4f8cf0b77952c083c7a60c9",
"assets/assets/icons/my/bank_first.png": "5aa5e82da4c191c5b8d7ed3483d55ddb",
"assets/assets/icons/my/bank_shinhan.png": "a1acceb6c2132eeb0519e3323487d419",
"assets/assets/icons/my/danger.png": "de813350fe5194afea19f3ac9d2a41c0",
"assets/assets/icons/my/logo_korea.png": "0a5f1d939dbae28a3196751604afa0ce",
"assets/assets/icons/my/arrow_dow.png": "5bf018cdd55563e10ac5135745d072ad",
"assets/assets/icons/my/bank_union.png": "7e903c650023808002b053107a418ba0",
"assets/assets/icons/my/icon_check.png": "282be63721e545d453851e93bf6d6204",
"assets/assets/icons/my/setting.png": "47f0ef83132c6375edf6fbc051d98750",
"assets/assets/icons/my/bank_kakao.png": "0e8ecfb07942d6cc321ebc0e72c61aef",
"assets/assets/icons/danger.svg": "f14c07eaa7ae11b1ca6ab4ccad5fb583",
"assets/assets/icons/next.svg": "2fc4b25c42c432bebc72533197b1ae26",
"assets/assets/icons/backs/back_circle.svg": "82c2c94fba22e88a6b870c08c98e27f4",
"assets/assets/icons/backs/none.svg": "27767e14d8ee03b5d26589a7214c3a67",
"assets/assets/icons/backs/drop.svg": "c461ff4b1d50f701f183473533944743",
"assets/assets/icons/delete.svg": "53770483eddda6d702aa21456ee415f2",
"assets/assets/icons/search_v2.svg": "6c5b4b183275d79dce27ea9e39a62f2d",
"assets/assets/icons/bottom_menu/icon4.svg": "b196a80a237bfc1d08662ba127bca3d9",
"assets/assets/icons/bottom_menu/icon2.svg": "32ebde9f68cfa8a85a24611c9fd0e833",
"assets/assets/icons/bottom_menu/icon3.svg": "a1901b7a8efa1f42ef1563ae0fb1ce9f",
"assets/assets/icons/bottom_menu/icon1.svg": "7936b32a9f1396af2b3cea7f14d8c006",
"assets/assets/icons/location.svg": "2bc9a5abaeb57d109615abc0f7b4e574",
"assets/assets/icons/album.svg": "b04efff82e71a1fb8a25144c0a58d5c2",
"assets/assets/icons/remove.svg": "aaf51e7b9af60c38782ff19b280552d8",
"assets/assets/icons/video.svg": "bfd34fd7ea8b5cb5e9e05cff33f2ecc0",
"assets/assets/icons/arrow_drop_v3.svg": "567f85d7c3832edddb3af76c4364b610",
"assets/assets/icons/card_active.svg": "72c27973d2d0f523efc53442bcaee17a",
"assets/assets/icons/help.svg": "bb169b5c269af7d4979b28f1162d179d",
"assets/assets/icons/button_music/list.svg": "76e8551dace5998e91a50c37d9c50940",
"assets/assets/icons/button_music/replace_active.svg": "9363aa00bbd70cee533a0f0507feb5a9",
"assets/assets/icons/button_music/replace_1.svg": "8be48c927376062f8b49694c0fbf6fa1",
"assets/assets/icons/button_music/replace_3.svg": "3bc47876dfeeb85e8d5b9e85c18a8440",
"assets/assets/icons/button_music/replace_2.svg": "68d0a1a4c5b564130a3610a6ec4d2a6a",
"assets/assets/icons/button_music/replace_4.svg": "e78ded240b0104eb6f4e16c854dca0c7",
"assets/assets/icons/button_music/back.svg": "e8ede9ea6ab760a2c518b9bb1bb44292",
"assets/assets/icons/button_music/play.svg": "9e5ee38eeb11b4756f71e40073b74003",
"assets/assets/icons/button_music/setting_song.svg": "8170d59fa07b91af64bac37563292f99",
"assets/assets/icons/button_music/next.svg": "606c970ef19c2b75d73dd9fb7abf0e85",
"assets/assets/icons/button_music/share.svg": "5445612671505addbe10affcae191d59",
"assets/assets/icons/button_music/setting_song_v2.svg": "733594b330640c6e69a338a1650a2c70",
"assets/assets/icons/button_music/pause.svg": "5a66e282c3db410b86bbc29d5dc6d183",
"assets/assets/icons/button_music/replace.svg": "4d31467b12e88d30ed86f1701df4941f",
"assets/assets/icons/button_music/play_v2.svg": "8b4a76eabf183e13b5914f998da7f557",
"assets/assets/icons/unlock_password.svg": "cd2d61edef145402da1f009d858f5b0f",
"assets/assets/icons/edits/gray.svg": "d0c255206c1285a6c3adf1c8f1b4f5cf",
"assets/assets/icons/edits/white.svg": "4084461f609a00e7645668df5569d0d9",
"assets/assets/icons/edits/transparent.svg": "3b52446ee5788705e346065b8ff4f7c7",
"assets/assets/icons/arrow_drop_v2.svg": "238fee7113adb6b4b585aec61fafca96",
"assets/assets/fonts/AppleSDGothicNeo-Bold.ttf": "67680f2eb947c5cbd58b40961b4a61e9",
"assets/assets/fonts/AppleSDGothicNeo-Regular.ttf": "ddf7d49e75259d7806e0b1f72bcb54e6",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
