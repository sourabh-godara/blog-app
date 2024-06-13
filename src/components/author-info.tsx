import { formatDate } from '@/lib/dateFormat'
import React from 'react'
import { FaUser } from 'react-icons/fa6'

export default function AuthorInfo({ author, publishedAt }) {
  return (
    <div className='flex items-center gap-3 p-3'>
      <div>
        <FaUser size={32} />
      </div>
      <div className='flex flex-col'>
        <div className=' font-medium md:text-sm'>{author.name}</div>
        <div className=' text-xs text-zinc-500 md:text-sm'>
          Last Updated: {formatDate(publishedAt)}
        </div>
      </div>
    </div>
  )
}
