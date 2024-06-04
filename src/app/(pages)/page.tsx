import BlogCard from '@/components/blog-card'
import { client } from '@/lib/sanity.client'
import React from 'react'

export default async function page() {
  const query = `
  *[_type == "post"] {
  title,
    'slug':slug.current,
    mainImage,
    publishedAt
}`
  const allBlogs = await client.fetch(query)
  return (
    <>
      <main>
        <BlogCard blogs={allBlogs} />
      </main>
    </>
  )
}
