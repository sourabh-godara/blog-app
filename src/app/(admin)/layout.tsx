import { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import SessionProvider from '@/components/session-provider'

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
  console.log('hiet from admin panel')
  return (
    <>
      <SessionProvider session={session}>
        <section>{children}</section>
      </SessionProvider>
    </>
  )
}
