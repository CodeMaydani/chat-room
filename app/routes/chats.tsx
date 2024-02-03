import type { LoaderFunctionArgs } from "@remix-run/node"
import { useLoaderData } from '@remix-run/react'
import Contact from '~/components/Contact'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/components/ui/avatar"
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'

export async function loader({ }: LoaderFunctionArgs) {
  const contacts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
  return { contacts }
}

function chats() {
  const { contacts } = useLoaderData<typeof loader>()

  return (
    <div className='h-screen flex'>
      <nav className='border-r-2 w-1/5 flex flex-col'>
        <div className='bg-secondary p-4'>
          <Input placeholder='Find or start a conversation' />
        </div>
        <div className='flex flex-col p-2'>
          <Button variant='ghost'>Games</Button>
          <Button>Friends</Button>
        </div>
        <div className='p-4 flex-1'>
          <p className='text-sm'>DIRECT MESSAGES</p>
          <div className='overflow-auto max-h-[500px] h-fit scrollbar-thin scrollbar-thumb-secondary'>
            {contacts.map(contact => <Contact />)}
          </div>
        </div>
        <div className="flex bg-secondary gap-2 p-2">
          <div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="grow">
            <p className="">Name</p>
            <p className="text-sm ">active</p>
          </div>
        </div>
      </nav>
      <main></main>
    </div>
  )
}

export default chats
