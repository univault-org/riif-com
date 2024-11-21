'use client';

export default function PricingButton({ primaryButton, secondaryButton, highlighted }) {
  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-3">
      <button
        onClick={() => handleClick(primaryButton.url)}
        className={`w-full py-3 px-4 rounded-xl font-medium transition-all
          bg-gradient-to-r from-primary-500 to-primary-600 
          hover:from-primary-600 hover:to-primary-700 
          text-white shadow-md hover:shadow-lg`}
      >
        {primaryButton.text}
      </button>
      
      {secondaryButton && (
        <button
          onClick={() => handleClick(secondaryButton.url)}
          className="w-full py-3 px-4 rounded-xl font-medium transition-all
            bg-neutral-100 hover:bg-neutral-200 
            dark:bg-neutral-700 dark:hover:bg-neutral-600 
            text-neutral-800 dark:text-neutral-100"
        >
          {secondaryButton.text}
        </button>
      )}
    </div>
  );
}