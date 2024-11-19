import { motion } from 'framer-motion';

export default function Logo({ className = "" }) {
  // Enhanced sparkle variants with more pronounced glow effect
  const sparkleVariants = {
    shine: {
      scale: [1, 1.2, 1],
      opacity: [0.8, 1, 0.8],
      filter: ["drop-shadow(0 0 2px #B45309)", "drop-shadow(0 0 6px #B45309)", "drop-shadow(0 0 2px #B45309)"],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Magic wand trail effect for rays
  const rayVariants = {
    shine: {
      rotate: 360,
      filter: ["drop-shadow(0 0 2px #B45309)", "drop-shadow(0 0 8px #B45309)", "drop-shadow(0 0 2px #B45309)"],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  // Enhanced staggered dots with magic trail
  const dotVariants = {
    shine: (i) => ({
      scale: [1, 1.3, 1],
      opacity: [0.7, 1, 0.7],
      filter: [
        "drop-shadow(0 0 1px #B45309)",
        "drop-shadow(0 0 3px #B45309)",
        "drop-shadow(0 0 1px #B45309)"
      ],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        delay: i * 0.2,
        ease: "easeInOut"
      }
    })
  };

  // Magic trail effect
  const magicTrailVariants = {
    animate: {
      opacity: [0, 0.8, 0],
      scale: [0.8, 1.2, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

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
            {/* Container */}
            <motion.path
              d="M3 4C3 2.89543 3.89543 2 5 2H19C20.1046 2 21 2.89543 21 4V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V4Z"
              className="fill-primary-700 dark:fill-primary-800"
              initial={{ opacity: 0.9 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
            
            {/* Magic trail background effect */}
            <motion.circle
              cx="15"
              cy="8"
              r="3"
              className="fill-amber-600/20 dark:fill-yellow-300/20"
              variants={magicTrailVariants}
              animate="animate"
            />
            
            {/* J Symbol */}
            <motion.path
              d="M12 7v7c0 1.6569-1.3431 3-3 3h0"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            
            {/* Main Sparkle */}
            <motion.g
              variants={sparkleVariants}
              animate="shine"
            >
              <circle 
                cx="15" 
                cy="8" 
                r="1" 
                className="fill-amber-600 dark:fill-yellow-400" 
              />
              <motion.path
                variants={rayVariants}
                animate="shine"
                d="M15 6v1.5M15 8.5V10M16.5 8H15M13.5 8H15"
                className="stroke-amber-600 dark:stroke-yellow-400"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </motion.g>
            
            {/* Additional Small Sparkles */}
            <motion.path
              variants={sparkleVariants}
              animate="shine"
              d="M16.5 6.5l0.4 0.4M17 9l-0.4-0.4M13.5 9.5l0.4-0.4M13 7l0.4 0.4"
              className="stroke-amber-600 dark:stroke-yellow-400"
              strokeWidth="0.75"
              strokeLinecap="round"
            />
            
            {/* Tiny Glowing Dots */}
            {[
              { cx: 17, cy: 7.5 },
              { cx: 13.5, cy: 6.5 },
              { cx: 16.5, cy: 10 }
            ].map((dot, i) => (
              <motion.circle
                key={`dot-${i}`}
                cx={dot.cx}
                cy={dot.cy}
                r="0.4"
                className="fill-amber-600 dark:fill-yellow-400"
                custom={i}
                variants={dotVariants}
                animate="shine"
              />
            ))}
          </svg>
        </div>
      </div>
      <motion.span 
        className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-neutral-100 dark:to-neutral-300"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        JoySpace
        <span className="relative">
          <motion.span 
            className="absolute bottom-0 -right-4 inline-block w-4 h-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            {/* Small sparkle with theme-aware colors */}
            <svg
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <motion.g
                variants={sparkleVariants}
                animate="shine"
              >
                <circle 
                  cx="4" 
                  cy="4" 
                  r="0.5" 
                  className="fill-amber-600 dark:fill-yellow-400" 
                />
                <motion.path
                  variants={rayVariants}
                  animate="shine"
                  d="M4 2.5v0.75M4 4.75V6M5.5 4H4.75M2.5 4h0.75"
                  className="stroke-amber-600 dark:stroke-yellow-400"
                  strokeWidth="0.375"
                  strokeLinecap="round"
                />
              </motion.g>
              
              <motion.path
                variants={sparkleVariants}
                animate="shine"
                d="M5.5 2.5l0.2 0.2M5.5 5.5l-0.2-0.2M2.5 5.5l0.2-0.2M2.5 2.5l0.2 0.2"
                className="stroke-amber-600 dark:stroke-yellow-400"
                strokeWidth="0.25"
                strokeLinecap="round"
              />
              
              {/* Tiny dots with theme-aware colors */}
              {[
                { cx: 5.75, cy: 3.75 },
                { cx: 2.25, cy: 3.25 },
                { cx: 5.25, cy: 5 }
              ].map((dot, i) => (
                <motion.circle
                  key={`small-dot-${i}`}
                  cx={dot.cx}
                  cy={dot.cy}
                  r="0.175"
                  className="fill-amber-600 dark:fill-yellow-400"
                  custom={i}
                  variants={dotVariants}
                  animate="shine"
                />
              ))}
            </svg>
          </motion.span>
        </span>
        <motion.span 
          className="ml-3.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.7 }}
        >
          Wiki
        </motion.span>
      </motion.span>
    </div>
  );
}