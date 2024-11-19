import { NextResponse } from 'next/server'

export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const url = searchParams.get('url')

    if (!url) {
        return NextResponse.json(
            { error: 'URL parameter is required' },
            { status: 400 }
        )
    }

    try {
        // Using microlink.io API
        const response = await fetch(`https://api.microlink.io?url=${encodeURIComponent(url)}`)
        
        if (!response.ok) {
            throw new Error(`Failed to fetch metadata: ${response.statusText}`)
        }

        const data = await response.json()
        
        if (data.status === 'success') {
            return NextResponse.json({
                title: data.data.title || '',
                description: data.data.description || '',
                image: data.data.image?.url,
                siteName: data.data.publisher,
                favicon: `https://www.google.com/s2/favicons?domain=${url}&sz=128`,
                url: url
            })
        } else {
            throw new Error('Failed to extract metadata')
        }
    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        )
    }
} 