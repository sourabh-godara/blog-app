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
    <nav>
      <ul className='flex items-center justify-center gap-14 p-2'>
        {categories.map(category => (
          <li key={category.link}>{category.name}</li>
        ))}
        <div className='relative left-40 flex gap-4'>
          <ThemeToggle />
          <SignIn />
        </div>
      </ul>
    </nav>
  )
}
