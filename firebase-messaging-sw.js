importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyAEcrKcQlWmAiC7PS1m7dkxZg6d3TvNvjw",
    authDomain: "keiser-music-demo.firebaseapp.com",
    projectId: "keiser-music-demo",
    storageBucket: "keiser-music-demo.appspot.com",
    messagingSenderId: "654139722703",
    appId: "1:654139722703:web:a39b44e161f11a0fe8a0ba",
    measurementId: "G-1DG7V5L0MW"
});
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((m) => {
  console.log("onBackgroundMessage", m);
});