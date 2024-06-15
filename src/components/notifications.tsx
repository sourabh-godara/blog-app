'use client'

import { getToken } from 'firebase/messaging'
import { messaging } from '@/lib/firebase'
import { useEffect } from 'react'

export default function Notifications() {
  async function requestPermission() {
    const permission = await Notification.requestPermission()
    if (permission === 'granted') {
      const token = await getToken(messaging, {
        vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY
      })
        .then(currentToken => {
          if (currentToken) {
            console.log('Firebase Token', currentToken)
          } else {
            // Show permission request UI
            console.log(
              'No registration token available. Request permission to generate one.'
            )
            // ...
          }
        })
        .catch(err => {
          console.log('An error occurred while retrieving token. ', err)
          // ...
        })
    } else if (permission === 'denied') {
      console.log('permission denied')
    }
  }
  useEffect(() => {
    requestPermission()
  }, [])
  return null
}
