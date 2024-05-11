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

export default async function BlogCard({ articles }) {
  const filteredArticles = articles?.filter(
    (item: articles) => item.urlToImage !== null
  )
  return (
    <>
      <div className='grid grid-cols-1 gap-8 p-4 md:grid-cols-3'>
        {filteredArticles &&
          filteredArticles.map((articles: articles) => (
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
