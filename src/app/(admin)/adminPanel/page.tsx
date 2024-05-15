import { getServerSession } from 'next-auth'
import React from 'react'
import LogOut from './log-out'

export default async function page() {
  const { user } = await getServerSession()
  return (
    <>
      <div className='flex gap-4'>
        <div>{user.name}</div>
        <LogOut />
      </div>
    </>
  )
}
