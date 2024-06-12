import Link from 'next/link'
import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className=' mt-14 flex flex-col items-center justify-center gap-3 bg-zinc-300 p-4 text-gray-700'>
      <div className=' mt-3 flex items-center justify-center gap-6'>
        <Link href={'/about'}>About us</Link>
        <Link href={'/about'}>Contact</Link>
        <Link href={'/about'}>Jobs</Link>
      </div>
      <div className='flex gap-4'>
        <FaTwitter size={28} />
        <FaYoutube size={28} />
        <FaFacebook size={28} />
      </div>
      <aside className='p-4'>
        <p>Copyright © 2024 - All right reserved by Fresh Khabar Ltd</p>
      </aside>
    </footer>
  )
}
