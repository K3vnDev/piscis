'use client'

import { CrossIcon } from './icons'

interface Props {
  children: string
  closeCard: () => void
}

export const ErrorCard = ({ children, closeCard }: Props) => (
  <div
    className={`
      bg-red-400/35 border border-red-500 px-4 py-1 rounded-sm flex 
      justify-between items-center
    `}
  >
    <span className='text-sm text-red-500'>{children}</span>
    <button className='button hover:brightness-200 p-1' onClick={closeCard}>
      <CrossIcon className='text-red-500' />
    </button>
  </div>
)
