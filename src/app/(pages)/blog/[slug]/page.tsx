import RenderMdx from '@/components/RenderMdx'
import { allBlogs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import React from 'react'

export default function page({ params }) {
  const blog = allBlogs.find(blog => blog._raw.flattenedPath === params.slug)

  if (!blog) {
    notFound()
  }
  return (
    <>
      <article>
        <h1 className='mt-6 p-4 text-center text-5xl font-bold'>
          {blog.title}
        </h1>
        <div>
          <RenderMdx blog={blog} />
        </div>
      </article>
    </>
  )
}
