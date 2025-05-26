import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Response } from '../../utils/Respoonse'

export const GET = async () => {
  const supabase = createServerComponentClient({ cookies })

  try {
    const { data, error } = await supabase.from('users').select('*').eq('role', 'student')

    if (error) throw new Error()
    if (!data.length) return Response(false, 404)

    return Response(true, 200, { data })
  } catch {
    return Response(false, 500)
  }
}
