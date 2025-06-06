import type { SavedResearchGroup, User } from '@/types'
import { create } from 'zustand'

export interface Store {
  userData: User | null
  setUserData: (data: User | null) => void

  researchGroups: SavedResearchGroup[] | null
  setResearchGroups: (data: Store['researchGroups']) => void
}

export const useStore = create<Store>(set => ({
  userData: null,
  setUserData: data => set(() => ({ userData: data })),

  researchGroups: null,
  setResearchGroups: data => set(() => ({ researchGroups: data }))
}))
