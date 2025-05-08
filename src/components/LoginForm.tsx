'use client'

import { Field } from './form/field'
import { Submit } from './form/submit'
import { EmailIcon, LockIcon } from './icons'
import { LogoIcon } from './images/logoIcon'
import { LogoText } from './images/logoText'

export const LoginForm = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)

    const data = {
      email: String(formData.get('email') ?? ''),
      password: String(formData.get('pass') ?? '')
    }

    e.currentTarget.reset()
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3.5 bg-white px-8 pt-10 pb-7 rounded-lg'>
      <Logo />
      <Field name='email' placeholder='Correo electrónico' type='email' icon={<EmailIcon />} />
      <Field name='pass' placeholder='Contraseña' type='password' icon={<LockIcon />} />
      <Submit>Acceder</Submit>
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
