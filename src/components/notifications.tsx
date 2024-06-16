'use client'

import { getToken } from 'firebase/messaging'
import { messaging } from './firebase-init'
import { useEffect } from 'react'

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
    requestPermission()
  }, [])
  return null
}
