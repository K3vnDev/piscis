'use client'

import { dataFetch } from '@/lib/utils/dataFetch'
import { Field } from './form/field'
import { Submit } from './form/submit'
import { EmailIcon, LockIcon } from './icons'
import { LogoIcon } from './images/logoIcon'
import { LogoText } from './images/logoText'
import { CONTENT_JSON } from '@/consts'
import { useRouter } from 'next/navigation'
import { ErrorCard } from './errorCard'
import { useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export const LoginForm = () => {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const supabase = createClientComponentClient()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)

    const data = {
      email: String(formData.get('email') ?? ''),
      pass: String(formData.get('pass') ?? '')
    }

    if (data.pass.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.')
      return
    }

    setIsLoading(true)

    dataFetch<any>({
      url: '/api/auth/login',
      options: {
        method: 'POST',
        headers: CONTENT_JSON,
        body: JSON.stringify(data)
      },
      onSuccess: async ({ access_token, refresh_token }) => {
        const { error } = await supabase.auth.setSession({ access_token, refresh_token })

        if (error) {
          setError('Hubo un error al iniciar sesión, inténtelo nuevamente.')
          return
        }
        router.replace('/home')
      },
      onError: m => {
        setError(m ?? null)
        setIsLoading(false)
      }
    })
  }

  const closeErrorCard = () => {
    setError(null)
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3.5 bg-white px-8 pt-10 pb-7 rounded-lg'>
      <Logo />
      <Field name='email' placeholder='Correo electrónico' type='email' icon={<EmailIcon />} />
      <Field name='pass' placeholder='Contraseña' type='password' icon={<LockIcon />} />
      {error && <ErrorCard closeCard={closeErrorCard}>{error}</ErrorCard>}
      <Submit isLoading={isLoading}>Acceder</Submit>
    </form>
  )
}

const Logo = () => {
  const logoIconSize = 130
  const logoTextWH = { w: 300, h: 50 }

  return (
    <div className='flex items-center justify-center gap-2 mb-4'>
      <LogoIcon w={logoIconSize} h={logoIconSize} />
      <LogoText {...logoTextWH} />
    </div>
  )
}
