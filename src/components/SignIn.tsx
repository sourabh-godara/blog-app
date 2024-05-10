'use client'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from './ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

import { Icons } from '@/components/ui/icons'

export default function SignIn() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Sign In</Button>
      </DialogTrigger>
      <DialogContent>
        <Card className='border-0'>
          <DialogHeader>
            <CardHeader className='space-y-1'>
              <CardTitle className='text-2xl'>Sign In </CardTitle>
              <CardDescription>
                Enter your email below to sign in to your account
              </CardDescription>
            </CardHeader>
          </DialogHeader>
          <CardContent className='grid gap-4'>
            <div className='grid grid-cols-2 gap-6'>
              <Button variant='outline'>
                <Icons.gitHub className='mr-2 h-4 w-4' />
                Github
              </Button>
              <Button variant='outline'>
                <Icons.google className='mr-2 h-4 w-4' />
                Google
              </Button>
            </div>
            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <span className='w-full border-t' />
              </div>
              <div className='relative flex justify-center text-xs uppercase'>
                <span className='bg-background px-2 text-muted-foreground'>
                  Or continue with
                </span>
              </div>
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' type='email' placeholder='m@example.com' />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='password'>Password</Label>
              <Input id='password' type='password' />
            </div>
          </CardContent>
          <CardFooter>
            <Button className='w-full'>Create account</Button>
          </CardFooter>
        </Card>
      </DialogContent>
    </Dialog>
  )
}
