importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js')

import {
  apiKey,
  appId,
  authDomain,
  measurementId,
  messagingSenderId,
  projectId,
  storageBucket
} from '../src/lib/firebase.api'

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId: '1:328361184149:web:c344c7b760a47b573cc49c',
  measurementId
}

firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging()

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload)

  const notificationTitle = payload.notification.title
  const notificationOptions = {
    body: payload.notification.body
  }

  self.registration.showNotification(notificationTitle, notificationOptions)
})
