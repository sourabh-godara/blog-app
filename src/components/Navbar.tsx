import Link from 'next/link'
import React from 'react'
import { ThemeToggle } from './ThemeToogle'
import { Button } from './ui/button'
import NavbarModal from './navbar-modal'

export default function Navbar() {
  let categories = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Health',
      link: '/category/health'
    },
    {
      name: 'Technology',
      link: '/category/technology'
    },
    {
      name: 'Sports',
      link: '/category/sports'
    },
    {
      name: 'Entertainment',
      link: '/category/entertainment'
    }
  ]
  return (
    <nav className='flex items-center justify-between'>
      <div className='ml-4 md:hidden'>
        <NavbarModal categories={categories} />
      </div>
      <h1 className='w-full px-2 text-center text-xl font-semibold md:w-fit'>
        <span className='font-bold text-red-700'>FRESH </span>
        KHABAR
      </h1>
      <div className=' hidden items-center justify-center gap-10 p-2 md:flex'>
        {categories.map(c => (
          <Link href={c.link} key={c.link}>
            <Button className='mx-0 text-base ' variant='ghost'>
              {c.name}
            </Button>
          </Link>
        ))}
      </div>
      <div className='hidden gap-3 md:flex'>
        <ThemeToggle />
      </div>
    </nav>
  )
}
