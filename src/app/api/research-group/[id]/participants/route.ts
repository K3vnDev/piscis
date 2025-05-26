import { Response } from '@/app/api/utils/Respoonse'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import type { NextRequest } from 'next/server'
import { z } from 'zod'

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  const supabase = createServerComponentClient({ cookies })
  const idFromParams = params.id

  let researchGroupId: string
  try {
    researchGroupId = z.string().uuid().parse(idFromParams)
  } catch {
    return Response(false, 400)
  }

  let participantsIds: string[]

  try {
    const { data, error } = await supabase
      .from('research_groups')
      .select('participants')
      .eq('id', researchGroupId)

    if (error) return Response(false, 500)
    participantsIds = data[0].participants
  } catch {
    return Response(false, 500)
  }

  try {
    const { data: users, error: usersError } = await supabase
      .from('users')
      .select('*')
      .in('id', participantsIds)

    if (usersError) return Response(false, 500)
    return Response(true, 200, { data: users })
  } catch {
    return Response(false, 500)
  }
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const supabase = createServerComponentClient({ cookies })
  const idFromParams = params.id

  let researchGroupId: string
  try {
    researchGroupId = z.string().uuid().parse(idFromParams)
  } catch {
    return Response(false, 400)
  }

  try {
    const { ids } = await req.json()
    const insertingParticipants = z.array(z.string().uuid()).parse(ids)

    const { error: insertError, data } = await supabase
      .from('research_groups')
      .update({ participants: insertingParticipants })
      .eq('id', researchGroupId)
      .select()

    if (insertError) throw new Error()

    return Response(true, 200, { data: data[0] })
  } catch {
    return Response(false, 500)
  }
}
