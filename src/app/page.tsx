import { LoginBackground } from '@/components/LoginBackground'
import { LoginForm } from '@/components/LoginForm'

export default function Home() {
  return (
    <body className='flex items-center justify-center h-screen bg-black'>
      <LoginForm />
      <LoginBackground />
    </body>
  )
}
