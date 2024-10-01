import { SignUp,ClerkLoading,ClerkLoaded } from '@clerk/nextjs'
import { Loader2 } from 'lucide-react'
import Image from 'next/image'

export default function Page() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 h-screen'>
        <div className='bg-primary hidden gap-3 md:flex justify-center items-center'>
            <Image src='./white-dollar.svg' alt='dollar' width={50} height={50}/>
            <div className='text-white'>
                <h1 className='text-4xl uppercase font-bold'>Prudencia</h1>
                <p>Powering financial advice through A.I solutions</p>
            </div>
        </div>
        <div className='flex items-center justify-center'>
            <ClerkLoading>
                <Loader2 className='animate-spin'/>
            </ClerkLoading>
            <ClerkLoaded>
                <SignUp />
            </ClerkLoaded>
        </div>
    </div>
  )
}
