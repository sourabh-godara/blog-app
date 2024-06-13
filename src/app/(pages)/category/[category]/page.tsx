import BlogCard from '@/components/blog-card'
import { client } from '@/lib/sanity.client'
import { blog } from '@/lib/types'
import { notFound } from 'next/navigation'
import React from 'react'

type Props = {
  params: {
    category: string
  }
}
const fetchPosts = async (category: string) => {
  const query = `*[_type == 'category' && title == '${category.charAt(0).toUpperCase() + category.slice(1)}'][0]{
  'posts': *[_type == 'post' && ^._id in categories[]._ref]{
    title,
    'slug':slug.current,
    mainImage,
    publishedAt,
    author->{'slug':slug.current,name}
  }
}`

  const { posts } = await client.fetch(query)
  if (!posts) {
    return { data: null, error: 'No Blogs Found' }
  }
  return { data: posts, error: null }
}
export default async function page({ params: { category } }: Props) {
  const { data, error }: { data: blog; error: any } = await fetchPosts(category)
  if (error) {
    ;<h1>No Blogs Found</h1>
  }
  return (
    <>
      <main>
        <BlogCard blogs={data} />
      </main>
    </>
  )
}
