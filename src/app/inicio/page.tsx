'use client'

import { EmailIcon, GroupIcon, ToggleRightIcon } from '@/components/icons'
import { InfoCard } from '@/components/infoCard'
import { AppSidebar } from '@/components/appSidebar/appSidebar'
import { WelcomeCard } from '@/components/welcomeCard'
import { AppHeader } from '@/components/appHeader'
import { useUserData } from '@/hooks/useUserData'
import { NewsCard } from '@/components/newsCard'

export default function InicioPage() {
  const userData = useUserData()

  return (
    <body className='flex bg-[#efefef]'>
      <AppSidebar {...{ userData }} />
      <AppHeader />

      <main className='ml-(--sidebar-w) pt-[calc(2rem+var(--body-pt)+var(--header-h))] w-full min-h-screen flex flex-col items-center gap-14 pb-16'>
        <WelcomeCard />

        <div className='w-full px-32'>
          <div className='flex gap-8'>
            {cards.map((card, i) => (
              <InfoCard className='w-full' {...card} key={i} />
            ))}
          </div>
        </div>

        <NewsCard />
      </main>
    </body>
  )
}

const cards = [
  {
    icon: <ToggleRightIcon />,
    count: 5,
    label: 'Semilleros activos'
  },
  {
    icon: <GroupIcon />,
    count: 20,
    label: 'Estudiantes inscritos'
  },
  {
    icon: <EmailIcon />,
    count: 3,
    label: 'Solicitudes pendientes'
  }
]
