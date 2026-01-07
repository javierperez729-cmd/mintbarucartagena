import { NextResponse } from 'next/server'

export async function POST() {
  return NextResponse.json({
    status: 'ok',
    message: 'WhatsApp assistant coming soon',
  })
}


