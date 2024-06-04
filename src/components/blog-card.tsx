import { urlForImage } from '@/lib/sanity.image'
import { blog } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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
              <div className='relative h-44 w-full'>
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
                <div className='line-clamp-2 text-base font-medium'>
                  {blog.title}
                </div>
                <div className='mt-2 line-clamp-2 text-xs text-gray-500'>
                  {blog.publishedAt.split('T')[0]}
                </div>
              </div>
            </Link>
          ))}
      </div>
    </>
  )
}
