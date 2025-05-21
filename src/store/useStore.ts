import type { User } from '@/types'
import { create } from 'zustand'

export interface Store {
  userData: User | null
  setUserData: (data: User | null) => void
}

export const useStore = create<Store>(set => ({
  userData: null,
  setUserData: data => set(() => ({ userData: data }))
}))
