import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import Footer from '@/components/footer'
import Notifications from '@/components/notifications'
import FirebaseInit from '@/components/firebase-init'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fresh Khabar',
  description: 'News | Blogs'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        {/* <FirebaseInit /> */}
        <Notifications />
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          <main className='m-auto max-w-[75rem] p-2'>{children}</main>
          <Footer />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
