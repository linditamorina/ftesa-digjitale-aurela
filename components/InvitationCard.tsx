'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface InvitationProps {
  onOpenRsvp: () => void;
}

export default function InvitationCard({ onOpenRsvp }: InvitationProps) {
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div 
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#fdfaf9]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
    >
      {/* SHTRESA 1: Prapavija (Background) e ndarë nga teksti */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        
        {/* DESKTOP VIEW: Imazhi normal horizontal */}
        <img 
          src="/invitation-bg.jpeg" 
          alt="Background Desktop" 
          className="hidden md:block absolute inset-0 w-full h-full object-cover object-center"
        />
        
        {/* MOBILE VIEW: Imazhi i rrotulluar 90 gradë për të ruajtur proporcionet dhe lulet */}
        {windowDimensions.width > 0 && (
          <div 
            className="md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90"
            style={{ width: `${windowDimensions.height}px`, height: `${windowDimensions.width}px` }}
          >
            <img 
              src="/invitation-bg.jpeg" 
              alt="Background Mobile" 
              className="w-full h-full object-cover object-center opacity-80"
            />
          </div>
        )}
      </div>

      {/* SHTRESA 2: Përmbajtja e tekstit e qendërzuar mbi prapavijë */}
      <div className="relative z-10 flex flex-col items-center text-center px-8 md:px-12 py-16 w-full max-w-lg mx-auto h-full justify-center">
        
        <div className="text-[#a7999b] text-[13px] md:text-base leading-relaxed space-y-6 mb-3 mt-12 font-light px-4">
            <p>NGA NJË TAKIM I BUKUR, NË NJË HISTORI DASHURIE PËRJETË</p>
            <p>JU FTOJMË ME ZEMËR TË FESTONI ME NE FILLIMIN E JETËS SONË SË BASHKU</p>
        </div>

        <h1 className="text-4xl md:text-5xl text-[#b8979c] mb-5 mt-10 font-medium italic">
          Rrezon <br /> & <br /> Aurela
        </h1>

        <div className="text-[#a7999b] text-[13px] md:text-base leading-relaxed space-y-6 mb-3 mt-12 font-light px-4">
            <p>6 TETOR 2026 | NË 19:00</p>
            <p>CITY GRILL | VUSHTRRI</p>
            <p>PRITJA E MUSAFIRËVE 18:00 - 18:30</p>
        </div>
        
        {/* <div className="flex items-center justify-center gap-4 md:gap-6 mb-16">
          <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-[#b8979c]">E MARTË</span>
          <div className="flex flex-col items-center border-x px-4 md:px-6 border-[#e8d5d8]">
            <span className="text-5xl md:text-6xl text-[#b8979c] font-light mb-1">6</span>
            <span className="text-[8px] md:text-[10px] tracking-widest text-[#a87c82] whitespace-nowrap">PRITJA E MYSAFIRËVE 18:00 - 18:30</span>
          </div>
          <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-[#b8979c]">TETOR 2026</span>
        </div>

        <div className="flex flex-col items-center space-y-2 mb-16 text-[#a87c82]">
          <span className="text-sm tracking-widest font-medium">CITY GRILL</span>
          <span className="text-[10px] tracking-widest">VUSHTRRI</span>
        </div> */}

        <button 
          onClick={onOpenRsvp}
          className="flex flex-col items-center group cursor-pointer bg-white/60 px-10 py-5 rounded-xl backdrop-blur-md border border-[#e8d5d8] shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:bg-white/80 transition-all"
        >
          <span className="text-[9px] tracking-[0.3em] text-[#a87c82] mb-2 font-semibold">KLIKO KËTU</span>
          <span className="text-xs tracking-[0.15em] text-[#c17a86] font-medium border-b border-[#c17a86] pb-1 group-hover:opacity-70 transition-opacity">
            KONFIRMO PJESËMARRJEN
          </span>
        </button>

      </div>
    </motion.div>
  );
}