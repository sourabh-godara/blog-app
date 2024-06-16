import { initializeApp } from 'firebase/app'
import { getMessaging } from 'firebase/messaging'

const firebaseConfig = {
  apiKey: 'AIzaSyBxhyU7JSIKD8Q0uVXJQaUP44T6AatnTfY',
  authDomain: 'blog-notification-33975.firebaseapp.com',
  projectId: 'blog-notification-33975',
  storageBucket: 'blog-notification-33975.appspot.com',
  messagingSenderId: '328361184149',
  appId: '1:328361184149:web:c344c7b760a47b573cc49c',
  measurementId: 'G-PMB8GPKC46'
}

export const app = initializeApp(firebaseConfig)
export const messaging = getMessaging(app)
