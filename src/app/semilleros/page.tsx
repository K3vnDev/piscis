'use client'

import { AppHeader } from '@/components/appHeader'
import { AppSidebar } from '@/components/appSidebar/appSidebar'
import { Header } from '@/components/header'
import { PlusIcon } from '@/components/icons'
import { useUserData } from '@/hooks/useUserData'

export default function SemillerosPage() {
  const userData = useUserData()

  return (
    <body className='flex bg-[#efefef] '>
      <AppSidebar {...{ userData }} />
      <main className='flex flex-col ml-24 w-full'>
        <AppHeader />
        <div className='mx-16 flex flex-col gap-4'>
          <Header>Semilleros</Header>
          <div className='w-full bg-white p-8 rounded-md shadow-card'>
            <button className='bg-green-30 text-white font-semibold flex gap-1 items-center px-3 py-1 rounded-sm button'>
              <PlusIcon />
              Crear nuevo semillero
            </button>
          </div>
        </div>
      </main>
    </body>
  )
}
