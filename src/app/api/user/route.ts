import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Response } from '../utils/Respoonse'

export const GET = async () => {
  const supabase = createServerComponentClient({ cookies })

  const user = await supabase.auth.getUser()
  if (user.error) return Response(false, 401)

  try {
    const userId = user.data.user.id
    const { data, error } = await supabase.from('users').select('name, role').eq('id', userId)

    if (error) throw new Error()
    if (!data.length) return Response(false, 404)

    const [foundUser] = data
    return Response(true, 200, { data: { ...foundUser, id: userId } })
  } catch {
    return Response(false, 500)
  }
}
