'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { LoadingIcon, PowerIcon } from '../icons'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const SignOutButton = () => {
  const [isLoading, setIsLoading] = useState(false)

  const supabase = createClientComponentClient()
  const router = useRouter()

  const handleClick = async () => {
    setIsLoading(true)
    const { error } = await supabase.auth.signOut()
    if (error) {
      setIsLoading(false)
      return
    }
    router.refresh()
  }

  return (
    <button
      onClick={handleClick}
      className='button w-10 flex items-center justify-center'
      disabled={isLoading}
    >
      {isLoading ? (
        <LoadingIcon className='text-white size-full animate-spin' />
      ) : (
        <PowerIcon className='text-white size-full' />
      )}
    </button>
  )
}
