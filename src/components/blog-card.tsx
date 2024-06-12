import { urlForImage } from '@/lib/sanity.image'
import { blog } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaUser } from 'react-icons/fa6'

export default async function BlogCard({ blogs }) {
  return (
    <>
      <div className='grid grid-cols-1 gap-8 p-4 md:grid-cols-3'>
        {blogs &&
          blogs.map((blog: blog) => (
            <Link
              href={`/blog/${blog.slug}`}
              key={`${blog.publishedAt}`}
              className='rounded border'
            >
              <div className='relative h-48 w-full'>
                {blog.mainImage ? (
                  <Image
                    src={urlForImage(blog.mainImage)}
                    alt='article'
                    className='relative'
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                ) : null}
              </div>
              <div className='mt-2 p-2'>
                <div className='line-clamp-3 text-xl font-semibold leading-7'>
                  {blog.title}
                </div>
                <div className='mt-3 line-clamp-2 flex items-center justify-between '>
                  <h3 className='flex items-center gap-1 text-sm font-medium opacity-95'>
                    <FaUser size={14} />
                    {blog.author.name}
                  </h3>
                  <span className='text-xs  text-gray-500'>
                    {blog.publishedAt.split('T')[0]}
                  </span>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </>
  )
}
