import { dataFetch } from '@/lib/utils/dataFetch'
import { useStore } from '@/store/useStore'
import type { User } from '@/types'
import { useEffect } from 'react'

export const useUserData = () => {
  const userData = useStore(s => s.userData)
  const setUserData = useStore(s => s.setUserData)

  useEffect(() => {
    if (userData) return

    dataFetch<User>({
      url: '/api/user',
      onSuccess: data => {
        setUserData(data)
      }
    })
  }, [])

  return userData
}
