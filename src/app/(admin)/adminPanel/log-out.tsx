'use client'
import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React from 'react'

export default function LogOut() {
  const handleLogOut = async () => {
    await signOut()
    return redirect('/auth')
  }
  return (
    <>
      <Button size='sm' onClick={() => handleLogOut}>
        Log Out
      </Button>
    </>
  )
}
