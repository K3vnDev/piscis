import { PROTECTED_ROUTES } from '@/consts'
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { type NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const { pathname, searchParams } = new URL(req.url)

  if (Array(...PROTECTED_ROUTES).some(r => pathname.startsWith(r))) {
    const supabase = createMiddlewareClient({ req, res })

    const { data } = await supabase.auth.getSession()
    const devMode = searchParams.get('dev')

    if (!data.session && devMode !== 'true') {
      return NextResponse.redirect(new URL('/', req.url))
    }
  }
  return NextResponse.next()
}
