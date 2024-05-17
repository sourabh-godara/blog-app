import BlogCard from '@/components/blog-card'
import { allBlogs } from 'contentlayer/generated'
import React from 'react'

export default async function page() {
  return (
    <>
      <main>
        <BlogCard blogs={allBlogs} />
      </main>
    </>
  )
}
