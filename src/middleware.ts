import { PROTECTED_ROUTES } from '@/consts'
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { type NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const { pathname } = new URL(req.url)

  if (PROTECTED_ROUTES.has(pathname)) {
    const supabase = createMiddlewareClient({ req, res })

    const { data } = await supabase.auth.getSession()

    if (!data.session) {
      return NextResponse.redirect(new URL('/', req.url))
    }
  }
  return NextResponse.next()
}
