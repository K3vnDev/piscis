import type { ResearchGroupType } from './lib/schemas/researchGroup'

export interface Logo {
  className?: string
  w?: number
  h?: number
}

export interface User {
  name: string
  id: string
  role: 'teacher' | 'student'
}

export type SavedResearchGroup = ResearchGroupType & {
  id: string
  created_at: string
}
