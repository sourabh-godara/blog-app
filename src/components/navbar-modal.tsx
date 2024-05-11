import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { RiMenu2Fill } from 'react-icons/ri'
import { Button } from './ui/button'

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
            <li className='list-none ' key={c.link}>
              <Button className='text-base' variant='ghost'>
                {c.name}
              </Button>
            </li>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
