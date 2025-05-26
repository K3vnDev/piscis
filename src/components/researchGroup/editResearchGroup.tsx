import { useUserData } from '@/hooks/useUserData'
import { TrashIcon, UserIcon } from '../icons'
import { Section } from '../section'

interface Props {
  id: string
}

export const EditResearchGroup = ({ id }: Props) => {
  const userData = useUserData()

  return (
    <Section className='py-8 px-14 flex flex-col gap-6 relative'>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2'>
          <UserIcon />
          <span>Integrantes del semillero</span>
        </div>
        <line className='w-full h-0.5 rounded-full bg-zinc-200' />
      </div>
      <ul className='flex flex-col gap-4.5'>
        {userData && <ParticipantCard name={userData.name} role='teacher' owner />}
        {participantsMock.map((participant, index) => (
          <ParticipantCard key={index} {...participant} />
        ))}
      </ul>
    </Section>
  )
}

interface ParticipantCardProps {
  name: string
  role: 'teacher' | 'student'
  owner?: boolean
}

const ParticipantCard = ({ name, role, owner = false }: ParticipantCardProps) => {
  const roleText = {
    teacher: 'Docente',
    student: 'Estudiante'
  }

  const handleDelete = () => {}

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

const participantsMock = [
  { name: 'Ana Martínez', role: 'student' as const },
  { name: 'Carlos Gómez', role: 'student' as const },
  { name: 'Lucía Torres', role: 'student' as const },
  { name: 'Miguel Rojas', role: 'student' as const },
  { name: 'Sofía Ramírez', role: 'student' as const }
]
