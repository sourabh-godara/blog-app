import { getServerSession } from 'next-auth'
import React from 'react'
import LogOut from './log-out'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default async function page() {
  const { user } = await getServerSession()
  return (
    <>
      <div className='flex gap-4'>
        <div>{user.name}</div>
        <LogOut />
        <Link href={'/adminPanel/createblog'}>
          <Button size='sm'>Create Blog</Button>
        </Link>
      </div>
    </>
  )
}
