'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import BookmarkMetadataDisplay from '@/components/bookmark/BookmarkMetadataDisplay';

export default function BookmarkAssistant() {
    const searchParams = useSearchParams();
    const url = searchParams.get('url');
    const [metadata, setMetadata] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchMetadata() {
            if (!url) return;
            
            try {
                setIsLoading(true);
                let decodedUrl = decodeURIComponent(url);
                
                if (!decodedUrl.startsWith('http://') && !decodedUrl.startsWith('https://')) {
                    decodedUrl = `https://${decodedUrl}`;
                }

                const response = await fetch(`https://api.microlink.io?url=${encodeURIComponent(decodedUrl)}`);
                
                if (!response.ok) {
                    throw new Error(`Failed to fetch metadata: ${response.statusText}`);
                }

                const data = await response.json();
                
                if (data.status === 'success') {
                    setMetadata({
                        title: data.data.title || '',
                        description: data.data.description || '',
                        image: data.data.image?.url,
                        siteName: data.data.publisher,
                        favicon: `https://www.google.com/s2/favicons?domain=${decodedUrl}&sz=128`,
                        url: decodedUrl
                    });
                } else {
                    throw new Error('Failed to extract metadata');
                }
            } catch (err) {
                setError('Failed to fetch metadata. Please check the URL and try again.');
                console.error('Error fetching metadata:', err);
            } finally {
                setIsLoading(false);
            }
        }

        fetchMetadata();
    }, [url]);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
            <div className="max-w-3xl mx-auto px-4">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                    <i className="bi bi-bookmark-star mr-2"></i>
                    Bookmark Assistant
                </h1>

                {isLoading && (
                    <div className="flex items-center justify-center p-8">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
                    </div>
                )}

                {error && (
                    <div className="bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-4 rounded-lg">
                        <i className="bi bi-exclamation-triangle mr-2"></i>
                        {error}
                        <div className="mt-2 text-sm">
                            <i className="bi bi-link-45deg mr-1"></i>
                            URL attempted: {url}
                        </div>
                    </div>
                )}

                {metadata && !isLoading && <BookmarkMetadataDisplay metadata={metadata} />}
            </div>
        </div>
    );
}