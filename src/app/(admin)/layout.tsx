import { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import SessionProvider from '@/components/session-provider'
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
  title: 'Admin',
  description: 'Admin Panel'
}

export default async function AdminLayout({
  children
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()

  return (
    <>
      <SessionProvider session={session}>
        <section>{children}</section>
        <Toaster />
      </SessionProvider>
    </>
  )
}
