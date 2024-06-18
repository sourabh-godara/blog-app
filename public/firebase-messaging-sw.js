importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js')

const firebaseConfig = {
  apiKey: 'AIzaSyBxhyU7JSIKD8Q0uVXJQaUP44T6AatnTfY',
  authDomain: 'blog-notification-33975.firebaseapp.com',
  projectId: 'blog-notification-33975',
  storageBucket: 'blog-notification-33975.appspot.com',
  messagingSenderId: '328361184149',
  appId: '1:328361184149:web:c344c7b760a47b573cc49c',
  measurementId: 'G-PMB8GPKC46'
}

firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging()

messaging.onBackgroundMessage(payload => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  )
  const notificationTitle = payload.notification.title
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image
  }

  self.registration.showNotification(notificationTitle, notificationOptions)
})
