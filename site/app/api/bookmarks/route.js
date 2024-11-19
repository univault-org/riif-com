import { NextResponse } from 'next/server'

export const dynamic = 'force-static'
export const revalidate = false

export async function GET() {
    try {
        const initialBookmarks = [
            {
                title: 'Next.js Documentation',
                description: 'Learn about Next.js features and API.',
                url: 'https://nextjs.org/docs',
                userNotes: 'Great resource for learning Next.js!',
                tags: ['nextjs', 'documentation'],
            },
            {
                title: 'React Documentation',
                description: 'Official React documentation.',
                url: 'https://reactjs.org/docs/getting-started.html',
                userNotes: 'Helpful for understanding React concepts.',
                tags: ['react', 'documentation'],
            },
        ]

        return NextResponse.json({ bookmarks: initialBookmarks })
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch bookmarks' },
            { status: 500 }
        )
    }
}