'use client'

import { EmailIcon, GroupIcon, ToggleRightIcon } from '@/components/icons'
import { InfoCard } from '@/components/infoCard'
import { Sidebar } from '@/components/sidebar/sidebar'
import { WelcomeCard } from '@/components/welcomeCard'

export default function Home() {
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

  return (
    <body className='flex'>
      <Sidebar />

      <main className='ml-24 w-full min-h-screen bg-[#efefef] flex flex-col'>
        <header className='w-full h-20 bg-white mt-20' />
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
