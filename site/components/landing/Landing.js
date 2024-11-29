"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Landing() {
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPlaying(prev => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black p-5 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <div className="flex items-center gap-3 relative">
          <motion.div
            animate={{ opacity: isPlaying ? 1 : 0 }}
            transition={{ duration: 2 }}
          >
            <Image
              src="/R II F_logo.png"
              alt="R II F Logo"
              width={80}
              height={80}
              className="object-contain scale-[0.95] mb-2 -mr-2 mt-1"
              id="logo-with-play"
            />
          </motion.div>
          <motion.div
            animate={{ opacity: isPlaying ? 0 : 1 }}
            transition={{ duration: 2 }}
            className="absolute left-0"
          >
            <Image
              src="/R II F_logo_no_red_play.png"
              alt="R II F Logo"
              width={80}
              height={80}
              className="object-contain scale-[0.95] mb-2 -mr-2 mt-1"
              id="logo-no-play"
            />
          </motion.div>
          <span className="text-white text-[64px] font-bold flex items-center gap-3">
            <div className="w-16 h-16 flex items-center justify-center relative">
              <motion.span
                animate={{ opacity: isPlaying ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="pause-text"
              >
                I<span className="mx-2">I</span>
              </motion.span>
              <motion.span
                animate={{ opacity: isPlaying ? 0 : 1 }}
                transition={{ duration: 0.5 }}
                className="play-icon absolute w-[42px] h-[42px] bg-red-600"
                style={{ clipPath: 'polygon(0 0, 0 100%, 100% 50%)' }}
              />
            </div>
            <span>F</span>
          </span>
        </div>

        <div className="text-center">
          <div className="font-['Cormorant_Garamond'] text-white text-base font-light tracking-wider opacity-80 leading-relaxed">
            The World's First Artificial Intelligence Operating System
            <div className="mt-2 opacity-70 tracking-[0.15em]">
              AIOS - for Secure AI Play
            </div>
          </div>
        </div>

        <div className="h-8 relative flex justify-center items-center min-w-[300px]">
          <AnimatePresence mode="wait">
            {isPlaying ? (
              <motion.div
                key="play"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="message play-message absolute font-['Cormorant_Garamond'] text-white text-3xl tracking-[0.15em]"
              >
                Play Joyfully
              </motion.div>
            ) : (
              <motion.div
                key="soon"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="message coming-soon absolute font-['Cormorant_Garamond'] text-red-600 font-bold text-2xl tracking-wider"
              >
                COMING SOON
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}