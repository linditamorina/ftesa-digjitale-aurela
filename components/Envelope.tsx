'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface EnvelopeProps {
  onOpen: () => void;
}

export default function Envelope({ onOpen }: EnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleInteraction = () => {
    if (isOpening) return; // Parandalon klikimet e dyfishta
    setIsOpening(true);
    
    // Zvogëlojmë kohën në 800ms për t'u përputhur me ritmin më të shpejtë të animacionit të ri
    setTimeout(() => {
      onOpen();
    }, 800);
  };

  return (
    <AnimatePresence>
      {!isOpening && (
        <motion.div
          className="fixed inset-0 z-50 overflow-hidden bg-[#fdfaf9] m-0 p-0 origin-center"
          // Animacioni kryesor: Kur ikën, zmadhohet dhe zbehet drejt përdoruesit
          exit={{ opacity: 0, scale: 1.2, filter: "blur(4px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div
            onClick={handleInteraction}
            className="relative w-screen h-screen cursor-pointer bg-[#f0deed]"
          >
            {/* Prapavija e Zarfit */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
              {/* DESKTOP */}
              <img
                src="/envelope-bg.jpeg"
                alt="Zarfi"
                className="hidden md:block absolute inset-0 w-full h-full object-cover object-center"
              />

              {/* MOBILE */}
              {windowDimensions.width > 0 && (
                <div
                  className="md:hidden absolute top-120 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90"
                  style={{
                    // width: `${windowDimensions.height}px`,
                    width: `250%`,
                    height: `${windowDimensions.width}px`,
                  }}
                >
                  <img
                    src="/envelope-bg.jpeg"
                    alt="Zarfi Mobile"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              )}
            </div>

            {/* VULA E DYLLIT */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[30px] ml-[-30px] md:mt-45 z-10 flex items-center justify-center w-72 h-72 md:w-50 md:h-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              // Vula "thyhet" (zhduket më shpejt se zarfi) për t'i dhënë rrugë hapjes
              animate={{
                scale: isOpening ? 0 : 1,
                opacity: isOpening ? 0 : 1,
              }}
              transition={{ duration: 0.3, ease: "easeIn" }}
            >
              <img
                src="/wax-seal.png"
                alt="Vula"
                className="absolute inset-0 w-full h-full object-contain opacity-90 mix-blend-multiply pointer-events-none"
              />
            </motion.div>

            {/* Teksti Informues */}
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-end pb-25 pointer-events-none"
              animate={{ opacity: isOpening ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-[#776568] text-[14px] md:text-xs font-serif font-medium tracking-[0.3em] uppercase mix-blend-color-burn">
                Kliko për të hapur
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}