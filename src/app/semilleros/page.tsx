'use client'

import { Header } from '@/components/header'
import { CalendarIcon, LoadingIcon, PlusIcon } from '@/components/icons'
import { Section } from '@/components/section'
import { dataFetch } from '@/lib/utils/dataFetch'
import { useStore } from '@/store/useStore'
import type { SavedResearchGroup } from '@/types'
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
    dataFetch<SavedResearchGroup[]>({
      url: '/api/research-group/all',
      onSuccess: data => setResearchGroups(data)
    })
  }, [])

  const sortedResearchGroups = researchGroups?.sort((a, b) => a.name.localeCompare(b.name))

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
        {sortedResearchGroups ? (
          sortedResearchGroups.map((group, index) => <ResearchGroupCard key={index} {...group} />)
        ) : (
          <LoadingIcon className='animate-spin size-10 text-gray-400' />
        )}
      </Section>
    </>
  )
}

const ResearchGroupCard = ({ id, name, desc, program, created_at }: SavedResearchGroup) => {
  const [date] = created_at.split('T')
  const router = useRouter()

  const handleClick = () => {
    router.push(`/semilleros/editar/${id}`)
  }

  return (
    <div
      className={`
      bg-gray-100 p-4 rounded-lg shadow-md mb-4 hover:shadow-lg transition-all cursor-pointer
        active:scale-[.99] active:brightness-95 relative
      `}
      onClick={handleClick}
    >
      <h3 className='text-lg font-semibold'>{name}</h3>
      <p className='text-gray-600'>{desc}</p>
      <span className='text-sm text-gray-500'>Programa: {program}</span>

      <div className='absolute right-4 top-4 flex items-center gap-2 text-gray-400'>
        <span className='text-md'>{date}</span>
        <CalendarIcon className='size-5' />
      </div>
    </div>
  )
}
