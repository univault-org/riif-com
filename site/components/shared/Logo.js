export default function Logo({ className = "" }) {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        <div className="relative w-8 h-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 4C3 2.89543 3.89543 2 5 2H19C20.1046 2 21 2.89543 21 4V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V4Z"
                className="fill-primary-500 dark:fill-primary-400"
              />
              <path
                d="M7 7V17H9L11 13L13 17H15V7M17 7V17"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-800 to-neutral-600 dark:from-neutral-100 dark:to-neutral-300">
          MarkVault
        </span>
      </div>
    )
  }