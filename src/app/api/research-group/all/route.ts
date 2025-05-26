import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Response } from '../../utils/Respoonse'

export const GET = async () => {
  const supabase = createServerComponentClient({ cookies })

  const userId = (await supabase.auth.getUser()).data.user?.id
  if (!userId) return Response(false, 401)

  try {
    const { data, error } = await supabase.from('research_groups').select().eq('owner_id', userId)
    if (error) throw new Error()

    return Response(true, 200, { data })
  } catch {
    return Response(false, 500)
  }
}
