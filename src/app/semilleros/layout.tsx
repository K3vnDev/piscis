'use client'

import { AppHeader } from '@/components/appHeader'
import { AppSidebar } from '@/components/appSidebar/appSidebar'
import { useUserData } from '@/hooks/useUserData'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const userData = useUserData()

  return (
    <body className='flex bg-[#efefef] '>
      <AppSidebar {...{ userData }} />
      <div className='flex flex-col ml-(--sidebar-w) pt-[calc(var(--body-pt)+var(--header-h))] w-full pb-16'>
        <AppHeader />
        <main className='mx-64 flex flex-col gap-4'>{children}</main>
      </div>
    </body>
  )
}
