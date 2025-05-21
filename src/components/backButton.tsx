'use client'

import { useRouter } from 'next/navigation'
import { ChevronIcon } from './icons'

interface Props {
  prevRoute?: string
}

export const BackButton = ({ prevRoute }: Props) => {
  const router = useRouter()

  const handleClick = () => {
    if (prevRoute) {
      router.replace(prevRoute)
      return
    }
    router.back()
  }

  return (
    <button onClick={handleClick} className='px-4 py-1 bg-zinc-600 text-white rounded-sm flex gap-1 button'>
      <ChevronIcon />
      Volver
    </button>
  )
}
