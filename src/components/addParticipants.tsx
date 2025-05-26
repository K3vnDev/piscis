'use client'

import { dataFetch } from '@/lib/utils/dataFetch'
import type { User } from '@/types'
import { useEffect, useState } from 'react'
import { LoadingIcon } from './icons'

interface Props {
  participants: User[] | null
  setParticipants: (participants: User[]) => void
  rgId: string
}

export const AddParticipants = ({ rgId, participants, setParticipants }: Props) => {
  const [allStudents, setAllStudents] = useState<User[] | null>(null)
  const [isAdding, setIsAdding] = useState(false)

  useEffect(() => {
    dataFetch<User[]>({
      url: '/api/user/all',
      onSuccess: data => setAllStudents(data)
    })
  }, [])

  const toggleAdding = () => {
    setIsAdding(!isAdding)
  }

  const buttonData = isAdding
    ? {
        label: 'Todo listo',
        color: 'bg-gray-500'
      }
    : {
        label: 'Agregar participante...',
        color: 'bg-green-30'
      }

  if (!allStudents || !participants) {
    return <LoadingIcon className='size-8 animate-spin text-gray-400' />
  }

  const filteredStudents = allStudents.filter(s => !participants.some(p => p.id === s.id))

  return (
    <div className='flex flex-col gap-2 p-4 rounded-lg outline outline-gray-400/50 mb-4'>
      <button
        className={`
            ${buttonData.color} text-white font-semibold flex gap-1
            items-center px-4 py-1.5 rounded-sm button w-fit transition-all
        `}
        onClick={toggleAdding}
      >
        {buttonData.label}
      </button>

      {isAdding && (
        <ul className='overflow-x-hidden overflow-y-scroll h-fit max-h-48'>
          {filteredStudents.map((student, index) => {
            const studentRole = student.role === 'teacher' ? 'Docente' : 'Estudiante'

            return (
              <li
                key={index}
                className='py-2 px-4 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors'
                onClick={() => setParticipants([...participants, student])}
              >
                {student.name} <span className='opacity-55'>({studentRole})</span>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
