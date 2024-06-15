'use client'
import { useEffect } from 'react'
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
} from '../lib/firebase.api'

export let app
export let messaging

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId: '1:328361184149:web:c344c7b760a47b573cc49c',
  measurementId
}

export default function FirebaseInit() {
  useEffect(() => {
    app = initializeApp(firebaseConfig)
    messaging = getMessaging(app)
  })
  return null
}
