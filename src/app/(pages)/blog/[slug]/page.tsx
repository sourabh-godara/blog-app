import { client } from '@/lib/sanity.client'
import { urlForImage } from '@/lib/sanity.image'
import { blogDetails } from '@/lib/types'
import { PortableText } from 'next-sanity'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'

type Props = {
  params: {
    slug: string
  }
}
export const revalidate = 20

const ImageComponent = ({ value }) => {
  return (
    <div className='relative m-auto mb-10 aspect-video h-full w-full'>
      <Image
        src={urlForImage(value)}
        alt='blog-img'
        className='relative'
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
  )
}

export async function generateStaticParams() {
  const query = `*[_type=='post']{
    slug
  }`
  const slugs = await client.fetch(query)

  const slugRoutes = slugs.map(slug => slug.slug.current)
  return slugRoutes.map(slug => ({
    slug
  }))
}

export default async function page({ params: { slug } }: Props) {
  const query = `*[slug.current == "${slug}"]{
  title,
    mainImage,
    publishedAt,
    body
}[0]`
  const blog: blogDetails = await client.fetch(query)
  if (!blog) {
    notFound()
  }
  return (
    <>
      <article>
        <h1 className=' mt-6 p-4 text-center text-3xl font-bold md:text-5xl md:leading-normal'>
          {blog.title}
        </h1>
        <div className='relative m-auto aspect-video h-full w-[90%]'>
          <Image
            src={urlForImage(blog.mainImage)}
            alt='blog-img'
            className='relative'
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className='prose prose-lg prose-blue m-auto  max-w-4xl dark:prose-invert '>
          <PortableText
            value={blog.body}
            components={{
              types: {
                image: ImageComponent
              }
            }}
          />
        </div>
      </article>
    </>
  )
}
