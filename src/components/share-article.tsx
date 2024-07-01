'use client'
import React from 'react'
import { Separator } from '@/components/ui/separator'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { useToast } from '@/components/ui/use-toast'
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton
} from 'react-share'

import { usePathname } from 'next/navigation'
import { FaLink } from 'react-icons/fa6'
import { FaFacebook } from 'react-icons/fa6'
import { IoLogoWhatsapp } from 'react-icons/io'
import { FaTwitter } from 'react-icons/fa'
import { FaTelegramPlane } from 'react-icons/fa'
import Link from 'next/link'
export default function ShareArticle() {
  const { toast } = useToast()
  const pathname = usePathname()
  const base = 'https://blog-app-cznt.vercel.app'
  const link = base + pathname
  const copyLink = e => {
    navigator.clipboard.writeText(link)
    toast({
      title: 'Link copied to clipboard'
    })
  }
  let size = 34
  return (
    <>
      <div className='flex'>
        <div className=' flex items-center gap-1 md:mr-4 md:gap-2'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <FaLink
                  onClick={copyLink}
                  className='rounded-lg p-1.5 hover:bg-accent'
                  size={size}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Copy Link</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Separator className='h-3' orientation='vertical' />
        </div>
        <div className='flex gap-1 md:gap-2'>
          <Link href={`whatsapp://send?text=${link}`}>
            <IoLogoWhatsapp
              className='rounded-lg p-1.5 hover:bg-accent'
              size={size}
            />
          </Link>
          <FacebookShareButton url={link}>
            <FaFacebook
              className='rounded-lg p-1.5 hover:bg-accent'
              size={size}
            />
          </FacebookShareButton>
          <TelegramShareButton url={link}>
            <FaTelegramPlane
              className='rounded-lg p-1.5 hover:bg-accent'
              size={size}
            />
          </TelegramShareButton>
          <TwitterShareButton url={link}>
            <FaTwitter
              className='rounded-lg p-1.5 hover:bg-accent'
              size={size}
            />
          </TwitterShareButton>
        </div>
      </div>
    </>
  )
}
