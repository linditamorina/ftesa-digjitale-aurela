'use client';
import { motion } from 'framer-motion';

interface InvitationProps {
  onOpenRsvp: () => void;
}

export default function InvitationCard({ onOpenRsvp }: InvitationProps) {
  return (
    <motion.div 
      className="min-h-screen w-full mx-auto bg-cover bg-center flex flex-col items-center py-20 px-8 text-center relative"
      style={{ backgroundImage: "url('/invitation-bg.jpeg')" }} 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
    >
      <h1 className="text-4xl md:text-5xl text-[#c17a86] mb-10 font-medium italic mt-10">
        Fejesa e Rrezonit dhe Aureles
      </h1>
      
      <div className="text-[#8c7377] text-sm md:text-base leading-relaxed space-y-6 max-w-sm mb-16 font-light">
        <p>
          Me shumë dashuri dhe kënaqësi, kemi nderin t’ju ftojmë 
          të jeni pjesë e mbrëmjes sonë të veçantë të fejesës.
        </p>
        {/* <p>
          Një mbrëmje e bukur, e mbushur me gëzim, muzikë, 
          valle dhe momente të paharrueshme, të cilat 
          dëshirojmë t’i ndajmë me njerëzit tanë.
        </p> */}
        <p>
          Prania juaj do ta bëjë këtë natë edhe më të veçantë 
          dhe do të mbetet një kujtim i bukur për ne.
        </p>
        <p className="font-medium italic text-[#c17a86] text-lg pt-4">
          Me shumë dashuri, ju mirëpresim!
        </p>
      </div>
      
      <div className="flex items-center justify-center gap-6 mb-20">
        <span className="text-xs font-semibold tracking-[0.2em] text-[#a87c82]">E MARTË</span>
        <div className="flex flex-col items-center border-x px-6 border-[#e8d5d8]">
          <span className="text-5xl text-[#c17a86] font-light mb-1">6</span>
          <span className="text-[10px] tracking-widest text-[#a87c82]">ORA 18:00</span>
        </div>
        <span className="text-xs font-semibold tracking-[0.2em] text-[#a87c82]">TETOR 2026</span>
      </div>

      <div className="flex flex-col items-center space-y-1 mb-16 text-[#a87c82]">
        <span className="text-sm tracking-widest">CITY GRILL</span>
        <span className="text-xs tracking-widest">VUSHTRRI</span>
      </div>

      <button 
        onClick={onOpenRsvp}
        className="flex flex-col items-center group cursor-pointer bg-white/40 px-8 py-4 rounded-xl backdrop-blur-sm border border-white/50 shadow-sm"
      >
        <span className="text-[10px] tracking-[0.2em] text-[#a87c82] mb-1">KLIKO KËTU</span>
        <span className="text-sm tracking-[0.1em] text-[#c17a86] border-b border-[#c17a86] pb-1 group-hover:opacity-70 transition-opacity">
          KONFIRMO PJESËMARRJEN
        </span>
      </button>
    </motion.div>
  );
}