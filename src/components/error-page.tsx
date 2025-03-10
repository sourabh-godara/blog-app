import React from 'react'
import { Button } from '@/components/ui/button'

export default function ErrorPage({ error, reset }) {
  return (
    <div className='flex h-[calc(100vh-80px)] w-full items-center justify-center p-5 text-white'>
      <div className='text-center'>
        <div className='inline-flex rounded-full bg-red-100 p-4'>
          <div className='rounded-full bg-red-200 stroke-red-600 p-4'>
            <svg
              className='h-16 w-16'
              viewBox='0 0 28 28'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6 8H6.01M6 16H6.01M6 12H18C20.2091 12 22 10.2091 22 8C22 5.79086 20.2091 4 18 4H6C3.79086 4 2 5.79086 2 8C2 10.2091 3.79086 12 6 12ZM6 12C3.79086 12 2 13.7909 2 16C2 18.2091 3.79086 20 6 20H14'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
              <path
                d='M17 16L22 21M22 16L17 21'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
            </svg>
          </div>
        </div>
        <h1 className='mt-5 text-[36px] font-bold lg:text-[50px]'>
          Server Error
        </h1>
        <p className='mt-5 text-slate-400 lg:text-lg'>
          Oops something went wrong. Try to refresh this page or <br /> feel
          free to contact us if the problem presists.
        </p>
        <Button onClick={reset} className='mt-4 border' variant='ghost'>
          Try Again
        </Button>
      </div>
    </div>
  )
}
