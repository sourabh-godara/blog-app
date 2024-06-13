import Link from 'next/link'
import React from 'react'
import { ThemeToggle } from './ThemeToggle'
import { Button } from './ui/button'
import NavbarModal from './navbar-modal'
import { client } from '@/lib/sanity.client'
import { notFound } from 'next/navigation'

type category = {
  title: string
  link: string
}[]
const fetchCategory = async () => {
  const query = `*[_type=='category']| order(_createdAt desc) {
    title,
    link
  }`
  const categories = await client.fetch(query)
  if (!categories) {
    return { data: null, error: 'Categories not found' }
  }
  return { data: categories, error: null }
}
export default async function Navbar() {
  const { data, error }: { data: category; error: string } =
    await fetchCategory()
  if (error) {
    return notFound()
  }
  return (
    <nav className='flex items-center justify-between'>
      <div className='ml-4 md:hidden'>
        <NavbarModal categories={data} />
      </div>
      <Link
        href={'/'}
        className='w-full px-2 text-center text-xl font-semibold md:w-fit'
      >
        <span className='font-bold text-red-700'>FRESH </span>
        KHABAR
      </Link>
      <div className=' hidden items-center justify-center p-0.5 md:flex'>
        {data.map(c => (
          <Link href={c.link} key={c.link}>
            <Button className='mx-0 text-base ' variant='ghost'>
              {c.title}
            </Button>
          </Link>
        ))}
      </div>
      <div className='hidden gap-3 md:flex'>
        <ThemeToggle />
        <Link href={'/studio'}>
          <Button size='sm'>Dashboard</Button>
        </Link>
      </div>
    </nav>
  )
}
