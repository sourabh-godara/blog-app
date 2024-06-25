import BlogCard from '@/components/blog-card'
import { client } from '@/lib/sanity.client'
import React from 'react'

export type blog = {
  publishedAt: Date
  slug: String
  mainImage: any
  title: String
  description: String
  author: {
    slug: String
    name: String
  }
}
export default async function page() {
  const query = `
  *[_type == "post"] {
  title,
    'slug':slug.current,
    mainImage,
    publishedAt,
    author->{'slug':slug.current,name}
}`
  const blogs = await client.fetch(query)
  return (
    <>
      <BlogCard blogs={blogs} />
    </>
  )
}
