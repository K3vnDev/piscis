'use client'

import { AppHeader } from '@/components/appHeader'
import { AppSidebar } from '@/components/appSidebar/appSidebar'
import { Header } from '@/components/header'
import { LoadingIcon, PlusIcon } from '@/components/icons'
import { Section } from '@/components/section'
import { useUserData } from '@/hooks/useUserData'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function SemillerosPage() {
  const [isLoadingCreate, setIsLoadingCreate] = useState(false)
  const userData = useUserData()
  const router = useRouter()

  const handleClick = () => {
    router.push('/semilleros/crear')
    setIsLoadingCreate(true)
  }

  return (
    <body className='flex bg-[#efefef] '>
      <AppSidebar {...{ userData }} />
      <main className='flex flex-col ml-24 w-full'>
        <AppHeader />
        <div className='mx-24 flex flex-col gap-4'>
          <Header>Semilleros</Header>

          <Section>
            <button
              className='bg-green-30 text-white font-semibold flex gap-1 items-center px-3 py-1 rounded-sm button'
              onClick={handleClick}
              disabled={isLoadingCreate}
            >
              {isLoadingCreate ? <LoadingIcon className='animate-spin' /> : <PlusIcon />}
              Crear nuevo semillero
            </button>
          </Section>
        </div>
      </main>
    </body>
  )
}
