'use client'
import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

function Navbar() {
    const {user,isSignedIn}=useUser()
    return (
        <div className='p-5 flex justify-between items-center border shadow-sm'>
            <div className='flex gap-2 items-center'>
                <Image src="./download.svg" alt="dollar" width={20} height={20} className='text-blue-800'/>
                <h1 className='text-blue-800 text-2xl font-bold'>Prudencia</h1>
            </div>
            {isSignedIn?
            (
                <div className='flex items-center gap-3'>
                    <Link href="/dashboard">
                        <Button variant={"outline"}>Dashboard</Button>
                    </Link>
                    <UserButton/>
                </div>
            ):(
                <div className='flex gap-3 items-center'>
                    <Link href="/dashboard">
                        <Button variant={"outline"}>Dashboard</Button>
                    </Link>
                    <Link href='/sign-in'>
                        <Button className='primary'>Get Started</Button>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Navbar
