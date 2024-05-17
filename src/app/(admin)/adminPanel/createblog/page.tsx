'use client'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

export default function page() {
  return (
    <>
      <div className='mt-4'>
        <Textarea placeholder='Enter Text Here' />
        <div className='mt-2 p-2'>
          <Button>Submit</Button>
        </div>
      </div>
    </>
  )
}
