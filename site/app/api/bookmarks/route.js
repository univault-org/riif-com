import { NextResponse } from 'next/server'

export const dynamic = 'force-static'
export const revalidate = false

// Move the static data to a separate file
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

export async function GET() {
    return new Response(JSON.stringify({ bookmarks: initialBookmarks }), {
        headers: { 'content-type': 'application/json' },
    })
}