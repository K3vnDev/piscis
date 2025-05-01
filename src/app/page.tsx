'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function Home() {
  const supabase = createClientComponentClient()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)

    const email = String(formData.get('email') ?? '')
    const password = String(formData.get('pass') ?? '')

    // TODO: validate info

    const { data, error } = await supabase.auth.signUp({
      options: {
        data: {
          name: 'example',
          role: 'teacher' // or student
        }
      },
      email,
      password
    })

    console.log({ data, error })
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-2 w-64'>
      <label>
        <span>Email</span>
        <input type='email' name='email' className='border-black border' />
      </label>
      <label>
        <span>Password</span>
        <input type='password' name='pass' className='border-black border' />
      </label>
      <button className='bg-gray-400'>Register</button>
    </form>
  )
}
