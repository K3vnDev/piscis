import type { User } from '@/types'
import Image from 'next/image'

interface Props {
  userData: User | null
}

export const UserImage = ({ userData }: Props) => (
  <div className='size-14 rounded-full bg-gray-600 overflow-hidden'>
    {userData && (
      <Image
        src={`https://ui-avatars.com/api/?name=${userData.name}&length=1&background=034E96&color=FFF&bold=true`}
        width={256}
        height={256}
        title={userData.name}
        alt={`La imagen de perfil de ${userData?.name}`}
        className='size-full max-w-full aspect-square'
        draggable={false}
      />
    )}
  </div>
)
