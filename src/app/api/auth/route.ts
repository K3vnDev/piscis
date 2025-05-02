import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { SignUpForm, type SignUpFormType } from '@/lib/schemas/SignUpForm'
import { Response } from '../utils/Respoonse'

// Handles user sign-up requests
export const POST = async (req: NextRequest) => {
  const supabase = createServerComponentClient({ cookies })
  let signUpData: SignUpFormType

  try {
    const reqData = await req.json()
    signUpData = await SignUpForm.parseAsync(reqData)
  } catch {
    return Response(false, 400, { msg: 'Invalid data' })
  }

  const { email, name, pass, role } = signUpData

  // Send sign-up request to Supabase
  const { data, error } = await supabase.auth.signUp({
    email,
    password: pass,
    options: {
      data: { name, role }
    }
  })

  if (error) {
    // TODO: Handle specific error codes
    return Response(false, 400, { msg: error.message })
  }

  return Response(true, 200, { msg: 'User created successfully', data })
}
