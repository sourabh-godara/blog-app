import Image from 'next/image'
import React from 'react'

type articles = {
  publishedAt: String
  urlToImage: String
  title: String
  description: String
}
const fetchNews = async () => {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=sports&sortBy=popularity&apiKey=62cc131f607c4cd98efdecb48f7ecbd9`
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
  return (
    <>
      <div className='grid grid-cols-3 gap-8 p-4'>
        {data &&
          data.map(articles => (
            <div key={articles.publishedAt} className='rounded border'>
              <div>
                {articles.urlToImage ? (
                  <Image
                    src={articles?.urlToImage}
                    alt='article'
                    width={400}
                    height={400}
                  />
                ) : null}
              </div>
              <div className='mt-2 p-2'>
                <div className='text-lg font-medium'>{articles.title}</div>
                <div className='line-clamp-2 text-sm font-light'>
                  {articles.description}
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  )
}
