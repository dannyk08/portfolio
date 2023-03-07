import { NextRequest, NextResponse } from 'next/server';
import { Buffer } from 'buffer'

const {
  STAGE_MODE_ENV,
  STAGING_ADMIN_NAME,
  STAGING_ADMIN_PW,
} = process.env
const isStagingMode = STAGE_MODE_ENV as any === 'staging'

export const config = {
  matcher: '/:path*'
  // matcher: '/'
}

export function middleware(req: NextRequest) {
  if (isStagingMode) {
    const basicAuth = req.headers.get('authorization')

    if (basicAuth) {
      const auth = basicAuth.split(' ')[1]
      const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':')

      if (user === STAGING_ADMIN_NAME && pwd === STAGING_ADMIN_PW) {
        return NextResponse.next()
      }
    }

    return new Response('Auth required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    })
  }

  return NextResponse.next()
}
