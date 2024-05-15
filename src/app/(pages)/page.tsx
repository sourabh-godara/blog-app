import BlogCard from '@/components/blog-card'
import React from 'react'

const fetchNews = async () => {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&sortBy=popularity&apiKey=62cc131f607c4cd98efdecb48f7ecbd9`
    )
    const data = await res.json()
    if (data.status !== 'ok') {
      return { data: null, error: 'Network Error' }
    }
    return { data: data.articles, error: null }
  } catch (error) {
    console.log('error')
    return { data: null, error: 'Something went wrong' }
  }
}
export default async function page() {
  const { data, error } = await fetchNews()
  if (error) {
    return <div className='text-center text-2xl'>{error && error}</div>
  }
  return (
    <>
      <main>
        <BlogCard articles={data} />
      </main>
    </>
  )
}
