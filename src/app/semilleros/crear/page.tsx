'use client'

import { AppHeader } from '@/components/appHeader'
import { AppSidebar } from '@/components/appSidebar/appSidebar'
import { BackButton } from '@/components/backButton'
import { Header } from '@/components/header'
import { CreateResearchGroup } from '@/components/researchGroup/createResearchGroup'
import { Section } from '@/components/section'
import { useUserData } from '@/hooks/useUserData'

export default function SemillerosCrearPage() {
  const userData = useUserData()

  return (
    <body className='flex bg-[#efefef] '>
      <AppSidebar {...{ userData }} />
      <main className='flex flex-col ml-24 w-full'>
        <AppHeader />
        <div className='mx-24 flex flex-col gap-4 mb-20'>
          <Header>Crear semillero</Header>

          <Section>
            <BackButton />
          </Section>
          <CreateResearchGroup />
        </div>
      </main>
    </body>
  )
}
