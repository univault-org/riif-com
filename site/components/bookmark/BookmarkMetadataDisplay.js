'use client';

import { toast } from 'sonner';

export default function BookmarkMetadataDisplay({ metadata }) {
    const formatBookmarkMarkdown = (metadata) => {
        const timestamp = new Date().toISOString();
        const markdownTemplate = `---
title: ${metadata.title || 'Untitled'}
url: ${metadata.url}
description: ${(metadata.description || '').replace(/\n/g, ' ')}
date: ${timestamp}
tags: []
type: bookmark
site_name: ${metadata.siteName || ''}
favicon: ${metadata.favicon || ''}
${metadata.image ? `image: ${metadata.image}` : ''}
---

`;
        return markdownTemplate.trim();
    };

    const copyToClipboard = async (metadata) => {
        try {
            const formattedBookmark = formatBookmarkMarkdown(metadata);
            await navigator.clipboard.writeText(formattedBookmark);
            toast.success('Bookmark markdown copied to clipboard!');
        } catch (err) {
            toast.error('Failed to copy bookmark');
            console.error('Copy failed:', err);
        }
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-start gap-4">
                {metadata.favicon && (
                    <img 
                        src={metadata.favicon} 
                        alt="Site favicon" 
                        className="w-8 h-8 rounded"
                    />
                )}
                <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {metadata.title}
                    </h2>
                    {metadata.siteName && (
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            <i className="bi bi-globe2 mr-1"></i>
                            {metadata.siteName}
                        </p>
                    )}
                    <a 
                        href={metadata.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm text-blue-500 hover:underline mt-1 block"
                    >
                        <i className="bi bi-link-45deg mr-1"></i>
                        {metadata.url}
                    </a>
                </div>
            </div>

            {metadata.description && (
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                    <i className="bi bi-card-text mr-2"></i>
                    {metadata.description}
                </p>
            )}

            {metadata.image && (
                <div className="mt-4 relative">
                    <i className="bi bi-image absolute top-2 left-2 text-white bg-black/50 p-1 rounded"></i>
                    <img 
                        src={metadata.image} 
                        alt="Preview" 
                        className="rounded-lg w-full object-cover max-h-48"
                    />
                </div>
            )}

            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <button
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 
                             bg-primary-500 hover:bg-primary-600 text-white rounded-lg 
                             transition-colors duration-200"
                    onClick={() => copyToClipboard(metadata)}
                >
                    <i className="bi bi-clipboard text-xl"></i>
                    <span>Copy Bookmark Markdown</span>
                </button>
                
                <div className="mt-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <i className="bi bi-eye mr-1"></i>
                        Preview of markdown to be copied:
                    </p>
                    <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm font-mono">
                        <code className="text-gray-800 dark:text-gray-200">
                            {formatBookmarkMarkdown(metadata)}
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    );
}