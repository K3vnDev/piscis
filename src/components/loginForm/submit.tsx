'use client'

import { LoadingIcon } from '../icons'

interface Props {
  children: React.ReactNode
  className?: string
  isLoading?: boolean
}

export const Submit = ({ children, className, isLoading = false }: Props) => (
  <button
    className={`
    button bg-[#1A6AFF] rounded-md text-white font-semibold py-3
    flex gap-2 justify-center ${className}`}
    disabled={isLoading}
  >
    {isLoading && <LoadingIcon className='animate-spin' />}
    {children}
  </button>
)
