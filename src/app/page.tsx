import { LoginBackground } from '@/components/LoginBackground'
import { LoginForm } from '@/components/LoginForm'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Home() {
  const supabase = createServerComponentClient({ cookies })

  // biome-ignore format: <>
  const { data: { user } } = await supabase.auth.getUser()

  if (user?.user_metadata.email_verified) {
    redirect('/inicio')
  }

  return (
    <body className='flex items-center justify-center h-screen bg-black'>
      <LoginForm />
      <LoginBackground />
    </body>
  )
}
