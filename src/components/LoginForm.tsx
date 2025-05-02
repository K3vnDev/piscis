'use client'

export const LoginForm = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)

    const email = String(formData.get('email') ?? '')
    const password = String(formData.get('pass') ?? '')
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3 w-96 bg-white px-8 py-12 rounded-lg'>
      <FormField name='email' placeholder='Correo electrónico' type='email' />
      <FormField name='pass' placeholder='Contraseña' type='password' />
      <FormSubmitButton>Acceder</FormSubmitButton>
    </form>
  )
}

interface FormFieldProps {
  name: string
  placeholder: string
  type: React.HTMLInputTypeAttribute
  icon?: React.ReactNode
  className?: string
}

const FormField = ({ name, placeholder, type, icon, className }: FormFieldProps) => {
  return (
    <label className={`flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 ${className}`}>
      <span>{icon}</span>
      <input {...{ name, type, placeholder }} className='w-full outline-none placeholder:text-sm' />
    </label>
  )
}

interface FormSubmitButtonProps {
  children: React.ReactNode
  className?: string
}

const FormSubmitButton = ({ children, className }: FormSubmitButtonProps) => {
  return (
    <button className={`bg-[#1A6AFF] rounded-md text-white font-semibold py-2 ${className}`}>
      {children}
    </button>
  )
}
