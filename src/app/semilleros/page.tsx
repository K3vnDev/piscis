'use client'

import { Header } from '@/components/header'
import { CalendarIcon, LoadingIcon, PlusIcon } from '@/components/icons'
import { Section } from '@/components/section'
import type { ResearchGroupType } from '@/lib/schemas/researchGroup'
import { dataFetch } from '@/lib/utils/dataFetch'
import { useStore } from '@/store/useStore'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function SemillerosPage() {
  const [isLoadingCreate, setIsLoadingCreate] = useState(false)
  const researchGroups = useStore(s => s.researchGroups)
  const setResearchGroups = useStore(s => s.setResearchGroups)
  const router = useRouter()

  const handleClick = () => {
    router.push('/semilleros/crear')
    setIsLoadingCreate(true)
  }

  useEffect(() => {
    dataFetch<ResearchGroupType[]>({
      url: '/api/research-group/all',
      onSuccess: data => setResearchGroups(data)
    })
  }, [])

  return (
    <>
      <Header>Semilleros</Header>
      <Section className='gap-4 pb-8'>
        <button
          className={`
            bg-green-30 text-white font-semibold flex gap-1
            items-center px-3 py-1 rounded-sm button mb-8
          `}
          onClick={handleClick}
          disabled={isLoadingCreate}
        >
          {isLoadingCreate ? <LoadingIcon className='animate-spin' /> : <PlusIcon />}
          Crear nuevo semillero
        </button>
        {researchGroups?.map((group, index) => (
          <ResearchGroup key={index} {...group} />
        ))}
      </Section>
    </>
  )
}

const ResearchGroup = ({ name, desc, program }: ResearchGroupType) => {
  return (
    <div
      className={`
      bg-gray-100 p-4 rounded-lg shadow-md mb-4 hover:shadow-lg transition-all cursor-pointer
        active:scale-[.99] active:brightness-95 relative
      `}
    >
      <h3 className='text-lg font-semibold'>{name}</h3>
      <p className='text-gray-600'>{desc}</p>
      <span className='text-sm text-gray-500'>Programa: {program}</span>

      <div className='absolute right-4 top-4'>
        <CalendarIcon className='text-gray-300 size-8' />
      </div>
    </div>
  )
}
