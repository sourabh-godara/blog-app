import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <>
      <div>
        <h1 className='mt-4 p-2 text-center text-2xl font-bold'>
          Moderator Panel
        </h1>
        <Link href={'/moderatorPanel/createblog'}>
          <Button>Create Blog</Button>
        </Link>
      </div>
    </>
  )
}
