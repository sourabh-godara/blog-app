import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface blog {
  publishedAt: String
  updatedAt: String
  image: {
    filePath: String
  }
  url: String
  title: String
  description: String
  author: String
  _raw: {
    flattenedPath: String
  }
}

export default async function BlogCard({ blogs }) {
  return (
    <>
      <div className='grid grid-cols-1 gap-8 p-4 md:grid-cols-3'>
        {blogs &&
          blogs.map((blog: blog) => (
            <Link
              href={`/blog/${blog._raw.flattenedPath}`}
              key={`${blog.publishedAt}`}
              className='rounded border'
            >
              <div className='relative h-44 w-full'>
                {blog.image ? (
                  <Image
                    src={`${blog?.image.filePath.replace('../public', '')}`}
                    alt='article'
                    className='relative'
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                ) : null}
              </div>
              <div className='mt-2 p-2'>
                <div className='line-clamp-2 text-lg font-medium'>
                  {blog.title}
                </div>
                <div className='mt-2 line-clamp-2 text-sm font-light'>
                  {blog.description}
                </div>
              </div>
            </Link>
          ))}
      </div>
    </>
  )
}
