'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function EditarPage() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/semilleros')
  }, [router])

  return null
}
