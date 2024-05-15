import { withAuth } from 'next-auth/middleware'

export default withAuth(
  function middleware({ nextauth }) {
    const { token } = nextauth
    if (token.role === 'MODERATOR') {
      console.log('Moderator')
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => token?.role === 'MODERATOR'
    }
  }
)

export const config = { matcher: ['/verify'] }
