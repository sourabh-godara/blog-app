import Link from 'next/link'
import React from 'react'
import { ThemeToggle } from './ThemeToogle'
import { Button } from './ui/button'
import SignIn from './SignIn'

export default function Navbar() {
  let categories = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Trending',
      link: '/trending'
    },
    {
      name: 'Technology',
      link: '/about'
    },
    {
      name: 'Jobs',
      link: '/profile'
    }
  ]
  return (
    <nav className='flex items-center justify-between'>
      <h1 className='w-full px-2 text-center font-semibold md:w-fit md:text-left md:text-xl'>
        <span className='text-red-700'>FRESH </span>
        KHABAR
      </h1>
      <ul className=' hidden items-center justify-center gap-14 p-2 md:flex'>
        {categories.map(category => (
          <li key={category.link}>{category.name}</li>
        ))}
      </ul>
      <div className='hidden gap-3 md:flex'>
        <ThemeToggle />
        <SignIn />
      </div>
    </nav>
  )
}
