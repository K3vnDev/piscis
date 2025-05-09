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
  } catch {
    return Response(false, 400, { msg: 'Mala petición' })
  }

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: loginData.email,
      password: loginData.pass
    })

    if (error) {
      return Response(false, 401, { msg: 'Correo o contraseña inválidos' })
    }

    const {
      user: { id, email },
      session: { access_token, refresh_token }
    } = data

    return Response(true, 200, {
      msg: 'Login successful',
      data: { access_token, refresh_token, id, email }
    })
  } catch {
    return Response(false, 500)
  }
}
