// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getMessaging } from 'firebase/messaging'
import {
  apiKey,
  appId,
  authDomain,
  measurementId,
  messagingSenderId,
  projectId,
  storageBucket
} from './firebase.api'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId: '1:328361184149:web:c344c7b760a47b573cc49c',
  measurementId
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const messaging = getMessaging(app)
