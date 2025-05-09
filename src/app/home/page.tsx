'use client'

import { LogoIcon } from '@/components/images/logoIcon'
import { FONTS } from '@/consts'
import Image from 'next/image'

export default function Home() {
  return (
    <body className='flex'>
      <aside className='bg-[#181A17] fixed h-screen w-24 flex flex-col py-8 items-center'>
        <LogoIcon className='brightness-0 invert w-16' />
      </aside>

      <main className='ml-24 w-full min-h-screen bg-[#efefef] flex flex-col gap-20'>
        <header className='w-full h-20 bg-white'>{'>Header here<'}</header>
        <WelcomeCard />
      </main>
    </body>
  )
}

const WelcomeCard = () => {
  return (
    <div
      className={`
      w-full bg-gradient-to-r from-[#0464B2] to-[#66AEE9] px-28 flex justify-between
      ${FONTS.POPPINS} text-white
    `}
    >
      <span className='flex flex-col gap-2 py-12'>
        <h2 className='font-bold text-3xl'>¡Bienvenido, tutor!</h2>
        <p className='text-xl'>
          Organiza tus semilleros, gestiona estudiantes <br /> y revisa solicitudes fácilmente.
        </p>
      </span>
      <span className='w-72 h-full relative mr-24'>
        <Image
          src='/smiling-girl-with-notebook.webp'
          width={400}
          height={400}
          alt='A smiling girl with a notebook in her arms'
          className='absolute h-[140%] object-cover bottom-0'
        />
      </span>
    </div>
  )
}
