'use client'

import { useState } from 'react'
import { LogoIcon } from '../images/logoIcon'
import { SignOutButton } from './signOutButton'
import { HomeIcon, PCIcon } from '../icons'
import { RouteButton } from './routeButtons'
import type { User } from '@/types'
import { UserImage } from './userImage'

interface Props {
  userData: User | null
}

export const AppSidebar = ({ userData }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <aside
      className={`
        bg-zinc-900 fixed h-screen w-(--sidebar-w) flex flex-col py-8
        items-center space justify-between z-10
      `}
    >
      <div className='flex flex-col items-center gap-14'>
        <LogoIcon className='brightness-0 invert w-16' />
        <UserImage userData={userData} />
        <ul className='flex flex-col gap-8'>
          {routes.map(route => (
            <RouteButton {...{ ...route, isExpanded }} key={route.path} />
          ))}
        </ul>
      </div>
      <SignOutButton />
    </aside>
  )
}

const routes = [
  {
    label: 'Inicio',
    icon: <HomeIcon />,
    path: '/inicio'
  },
  {
    label: 'Semilleros',
    icon: <PCIcon />,
    path: '/semilleros'
  }
]
