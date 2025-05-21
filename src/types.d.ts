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
