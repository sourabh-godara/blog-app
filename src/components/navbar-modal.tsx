import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { RiMenu2Fill } from 'react-icons/ri'
import { Button } from './ui/button'
import Link from 'next/link'

export default function NavbarModal({ categories }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <RiMenu2Fill size={22} />
      </SheetTrigger>
      <SheetContent className=' w-56' side={'left'}>
        <SheetHeader>
          <SheetTitle>Fresh Khabar</SheetTitle>
        </SheetHeader>
        <div className='mt-10 flex flex-col items-center gap-2'>
          {categories.map(c => (
            <Link href={c.link} key={c.link}>
              <SheetClose asChild>
                <Button className='mx-0 text-base ' variant='ghost'>
                  {c.name}
                </Button>
              </SheetClose>
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
