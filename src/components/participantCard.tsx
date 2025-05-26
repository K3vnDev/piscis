import type { User } from '@/types'
import { TrashIcon } from './icons'

type Props = User & {
  owner?: boolean
  participants: User[] | null
  setParticipants: (participants: User[]) => void
}

export const ParticipantCard = ({ id, name, role, owner = false, participants, setParticipants }: Props) => {
  const roleText = {
    teacher: 'Docente',
    student: 'Estudiante'
  }

  const handleDelete = () => {
    if (!participants) return
    setParticipants(participants.filter(p => p.id !== id))
  }

  return (
    <li
      className={`
        bg-gray-100 py-3.5 px-8 rounded-lg shadow-md
        flex justify-between w-full items-center
      `}
    >
      <div className='flex flex-col'>
        <span className='flex gap-2 items-center'>
          <span className='text-lg font-semibold'>{name}</span>
          {owner && <span className='text-gray-500 text-sm'>(Organizador)</span>}
        </span>
        <p className='text-gray-600'>{roleText[role]}</p>
      </div>
      {!owner && (
        <button
          className='button bg-gray-200 shadow-card rounded-full size-13 flex items-center justify-center'
          onClick={handleDelete}
        >
          <TrashIcon className='text-gray-500 size-7' />
        </button>
      )}
    </li>
  )
}
