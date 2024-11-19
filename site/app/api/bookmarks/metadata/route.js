import { NextResponse } from 'next/server'

export const dynamic = 'force-static'
export const revalidate = false

export async function GET() {
    // For static builds, we'll return a 404 indicating this endpoint
    // should be called client-side instead
    return NextResponse.json(
        { 
            error: 'This API endpoint is not available in static builds. Please fetch from microlink.io directly in the client.' 
        },
        { status: 404 }
    )
} 