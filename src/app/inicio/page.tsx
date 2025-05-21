'use client'

import { EmailIcon, GroupIcon, ToggleRightIcon } from '@/components/icons'
import { InfoCard } from '@/components/infoCard'
import { AppSidebar } from '@/components/appSidebar/appSidebar'
import { WelcomeCard } from '@/components/welcomeCard'
import { AppHeader } from '@/components/appHeader'
import { useUserData } from '@/hooks/useUserData'

export default function Home() {
  const userData = useUserData()

  return (
    <body className='flex'>
      <AppSidebar {...{ userData }} />

      <main className='ml-24 w-full min-h-screen bg-[#efefef] flex flex-col'>
        <AppHeader />
        <WelcomeCard />

        <div className='w-full px-32 mt-9'>
          <div className='flex gap-8'>
            {cards.map((card, i) => (
              <InfoCard className='w-full' {...card} key={i} />
            ))}
          </div>
        </div>
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
