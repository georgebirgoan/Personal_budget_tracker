/* eslint-disable no-undef */
/* eslint-env serviceworker */

// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyDNojxBHXK-xJ-PLv-2pdDHwmSnsFU1RGI",
    authDomain: "budgetgeorge-991d6.firebaseapp.com",
    projectId: "budgetgeorge-991d6",
    storageBucket: "budgetgeorge-991d6.appspot.com",
    messagingSenderId: "1012385694066",
    appId: "1:1012385694066:web:ad1c5c8bf7b06367521deb"
});

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();

// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker `messaging.onBackgroundMessage` handler.
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);

  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon:payload.notification.image 
  };

  // eslint-disable-next-line no-restricted-globals
  self.registration.showNotification(notificationTitle, notificationOptions);
});
