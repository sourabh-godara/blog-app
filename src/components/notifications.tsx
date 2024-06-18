'use client'
import { getMessaging, getToken } from 'firebase/messaging'
import { useEffect } from 'react'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyBxhyU7JSIKD8Q0uVXJQaUP44T6AatnTfY',
  authDomain: 'blog-notification-33975.firebaseapp.com',
  projectId: 'blog-notification-33975',
  storageBucket: 'blog-notification-33975.appspot.com',
  messagingSenderId: '328361184149',
  appId: '1:328361184149:web:c344c7b760a47b573cc49c',
  measurementId: 'G-PMB8GPKC46'
}
let messaging
async function firebaseInitialize() {
  const app = initializeApp(firebaseConfig)
  messaging = getMessaging(app)
}

export default function Notifications() {
  async function requestPermission() {
    const permission = await Notification.requestPermission()
    if (permission === 'granted') {
      const token = await getToken(messaging, {
        vapidKey:
          'BH9o1s332JWGrXZtm8j0knICCAbl9QBDZEcd91ek-P3s_8UDEzZMR4Vc8K29ONFbKZUCGwwlmP1ifT_6L7KTOsA'
      })
      console.log('Generated Token: ' + token)
    }
  }

  useEffect(() => {
    firebaseInitialize()
    requestPermission()
  }, [])
  return null
}
