export default function Bookmark({ title, description, url, userNotes, tags = [] }) {
    return (
        <div className="p-4 mb-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                    <img 
                        src={`https://www.google.com/s2/favicons?domain=${url}&sz=128`}
                        alt=""
                        className="w-6 h-6 rounded"
                    />
                </div>
                <div className="flex-grow min-w-0">
                    <a 
                        href={url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-lg font-semibold text-primary-600 dark:text-primary-400 hover:underline"
                    >
                        {title}
                    </a>
                    {description && (
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                            {description}
                        </p>
                    )}
                    {userNotes && (
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                            {userNotes}
                        </p>
                    )}
                    {tags.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <span 
                                    key={index}
                                    className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}