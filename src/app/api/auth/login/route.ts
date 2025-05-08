import { LoginForm, type LoginFormType } from '@/lib/schemas/loginForm'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Response } from '../../utils/Respoonse'

// Handle login requests
export const POST = async (req: Request) => {
  const supabase = createServerComponentClient({ cookies })
  let loginData: LoginFormType

  try {
    const data = await req.json()
    loginData = await LoginForm.parseAsync(data)
  } catch (error) {
    return Response(false, 400, { msg: 'Invalid data' })
  }

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: loginData.email,
      password: loginData.pass
    })

    if (error) {
      return Response(false, 401, { msg: 'Invalid credentials' })
    }
    return Response(true, 200, { msg: 'Login successful', data })
  } catch {
    return Response(false, 500)
  }
}
