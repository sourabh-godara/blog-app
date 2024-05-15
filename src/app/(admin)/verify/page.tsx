import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { notFound, redirect } from 'next/navigation'
import React from 'react'

export default async function page() {
  const session = await getServerSession(authOptions)
  if (!session) {
    return notFound()
  }
  if (session.user.role === 'MODERATOR') {
    return redirect('/moderatorPanel')
  } else if (session.user.role === 'ADMIN') {
    return redirect('/adminPanel')
  }
  return <div>Verifying...</div>
}
