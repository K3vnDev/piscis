import { ResearchGroup, type ResearchGroupType } from '@/lib/schemas/researchGroup'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import type { NextRequest } from 'next/server'
import { Response } from '../utils/Respoonse'

export const POST = async (req: NextRequest) => {
  let researchGroup: ResearchGroupType
  const supabase = createServerComponentClient({ cookies })

  const userId = (await supabase.auth.getUser()).data.user?.id
  if (!userId) return Response(false, 401)

  try {
    const rawData = await req.json()
    researchGroup = await ResearchGroup.parseAsync(rawData)
  } catch {
    return Response(false, 400)
  }

  try {
    const { data, error } = await supabase
      .from('research_groups')
      .insert({ ...researchGroup, owner_id: userId })
      .select()

    if (error) throw new Error()

    const [created] = data
    return Response(true, 201, { data: created })
  } catch {
    return Response(false, 500)
  }
}
