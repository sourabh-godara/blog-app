import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface articles {
  publishedAt: String
  urlToImage: String
  url: String
  title: String
  description: String
}
const fetchNews = async () => {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&sortBy=popularity&apiKey=62cc131f607c4cd98efdecb48f7ecbd9`
    )
    const data = await res.json()
    return { data: data.articles, error: null }
  } catch (error) {
    console.log(error)
    return { data: null, error: 'Something went wrong' }
  }
}
export default async function BlogCard() {
  const { data, error } = await fetchNews()
  let blogs = [
    {
      id: 1,
      title: 'Title of Blog 1',
      imageUrl: '/article.png',
      description: 'Description of Blog 1'
    },
    {
      id: 2,
      title: 'Title of Blog 2',
      imageUrl: '/article2.jpg',
      description: 'Description of Blog 2'
    },
    {
      id: 3,
      title: 'New Blog Read it NOW!!',
      imageUrl: '/article.png',
      description: 'Description of Blog 4'
    },
    {
      id: 4,
      title: 'New Blog Read it NOW!!',
      imageUrl: '/article2.jpg',
      description: 'Description of Blog 5'
    }
  ]
  const filteredData = data.filter((item: articles) => item.urlToImage !== null)
  return (
    <>
      <div className='grid grid-cols-1 gap-8 p-4 md:grid-cols-3'>
        {filteredData &&
          filteredData.map((articles: articles) => (
            <Link
              href={`${articles.url}`}
              key={`${articles.publishedAt}`}
              className='rounded border'
            >
              <div className='relative h-44 w-full'>
                {articles.urlToImage ? (
                  <Image
                    src={`${articles?.urlToImage}`}
                    alt='article'
                    className='relative'
                    fill
                    objectFit='cover'
                  />
                ) : null}
              </div>
              <div className='mt-2 p-2'>
                <div className='line-clamp-2 text-lg font-medium'>
                  {articles.title}
                </div>
                <div className='mt-2 line-clamp-2 text-sm font-light'>
                  {articles.description}
                </div>
              </div>
            </Link>
          ))}
      </div>
    </>
  )
}
