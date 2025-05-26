'use client'

import { Header } from '@/components/header'
import { LoadingIcon, PlusIcon } from '@/components/icons'
import { Section } from '@/components/section'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function SemillerosPage() {
  const [isLoadingCreate, setIsLoadingCreate] = useState(false)
  const router = useRouter()

  const handleClick = () => {
    router.push('/semilleros/crear')
    setIsLoadingCreate(true)
  }

  return (
    <>
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
    </>
  )
}
