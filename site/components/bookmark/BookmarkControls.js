'use client'

import { useState } from 'react'

export default function BookmarkControls({ onSearch }) {
    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Bookmark Assistant
                </h1>
                <button
                    className="flex items-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 
                             text-white rounded-lg transition-colors duration-200
                             focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                    onClick={() => {
                        // Add your bookmark handling logic here
                        console.log('Add bookmark clicked')
                    }}
                >
                    <i className="bi bi-bookmark-plus text-lg"></i>
                    <span>Add Bookmark</span>
                </button>
            </div>
            
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search bookmarks..."
                    onChange={(e) => onSearch(e.target.value)}
                    className="w-full p-3 pl-10 rounded-lg border border-gray-300 dark:border-gray-700 
                             bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                             focus:ring-2 focus:ring-primary-500 focus:border-transparent
                             transition-colors"
                />
                <i className="bi bi-search absolute left-3 top-3.5 text-gray-400"></i>
            </div>
        </div>
    )
}