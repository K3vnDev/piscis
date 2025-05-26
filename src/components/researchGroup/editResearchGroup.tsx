import { useUserData } from '@/hooks/useUserData'
import { UserIcon } from '../icons'
import { Section } from '../section'
import { useEffect, useRef, useState } from 'react'
import { ParticipantCard } from '../participantCard'
import type { User } from '@/types'
import { AddParticipants } from '../addParticipants'
import { useDebounce } from '@/hooks/useDebounce'
import { dataFetch } from '@/lib/utils/dataFetch'
import { CONTENT_JSON } from '@/consts'

interface Props {
  id: string
}

export const EditResearchGroup = ({ id }: Props) => {
  const userData = useUserData()
  const [participants, setParticipants] = useState<User[] | null>(null)
  const debouncedParticipants = useDebounce(participants, 900)

  // Update participants in the research group
  useEffect(() => {
    if (!debouncedParticipants) return

    dataFetch({
      url: `/api/research-group/${id}/participants`,
      options: {
        method: 'PATCH',
        headers: CONTENT_JSON,
        body: JSON.stringify({ ids: debouncedParticipants.map(p => p.id) })
      }
    })
  }, [debouncedParticipants])

  useEffect(() => {
    dataFetch<User[]>({
      url: `/api/research-group/${id}/participants`,
      onSuccess: data => setParticipants(data)
    })
  }, [])

  const sortedParticipants = participants?.sort((a, b) => a.name.localeCompare(b.name))

  return (
    <Section className='py-8 px-14 flex flex-col gap-6 relative'>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2'>
          <UserIcon />
          <span>Integrantes del semillero</span>
        </div>
        <line className='w-full h-0.5 rounded-full bg-zinc-200' />
      </div>

      <AddParticipants {...{ participants, setParticipants, rgId: id }} />

      <ul className='flex flex-col gap-4.5'>
        {userData && <ParticipantCard owner {...{ participants, setParticipants, ...userData }} />}
        {sortedParticipants?.map((participant, index) => (
          <ParticipantCard key={index} {...{ ...participant, participants, setParticipants }} />
        ))}
      </ul>
    </Section>
  )
}
