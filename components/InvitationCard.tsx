// 'use client';
// import { motion } from 'framer-motion';
// import { useState, useEffect } from 'react';

// interface InvitationProps {
//   onOpenRsvp: () => void;
// }

// export default function InvitationCard({ onOpenRsvp }: InvitationProps) {
//   const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
//     };
    
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <motion.div 
//       // FIX 1: h-[100dvh] në vend të min-h-screen e bllokon scroll-in dhe e kyç ftesën në dimensionet e ekranit
//       className="relative h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden bg-[#fdfaf9]"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
//     >
//       {/* SHTRESA 1: Prapavija (Background) e ndarë nga teksti */}
//       <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        
//         {/* DESKTOP VIEW: Imazhi normal horizontal */}
//         <img 
//           src="/invitation-bg.jpeg" 
//           alt="Background Desktop" 
//           className="hidden md:block absolute inset-0 w-full h-full object-cover object-center"
//         />
        
//         {/* MOBILE VIEW: Imazhi i rrotulluar 90 gradë për të ruajtur proporcionet dhe lulet */}
//         {windowDimensions.width > 0 && (
//           <div 
//             className="md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90"
//             style={{ width: `${windowDimensions.height}px`, height: `${windowDimensions.width}px` }}
//           >
//             <img 
//               src="/invitation-bg.jpeg" 
//               alt="Background Mobile" 
//               // FIX 2: scale-105 e detyron imazhin të dalë 5% jashtë kornizave, duke mbuluar çdo hapësirë të bardhë të mbetur
//               className="w-full h-full object-cover object-center opacity-80 scale-105"
//             />
//           </div>
//         )}
//       </div>

//       {/* SHTRESA 2: Përmbajtja e tekstit e qendërzuar mbi prapavijë */}
//       <div className="relative z-10 flex flex-col items-center text-center px-8 md:px-12 py-16 w-full max-w-lg mx-auto h-full justify-center">
        
//         <div className="text-[#746063] text-[13px] md:text-base leading-relaxed space-y-6 mb-1 mt-20 font-light px-4">
//             <p>NGA NJË TAKIM I BUKUR, NË NJË HISTORI DASHURIE PËRJETË</p>
//             <p>JU FTOJMË ME ZEMËR TË FESTONI ME NE FILLIMIN E JETËS SONË SË BASHKU</p>
//         </div>

//         <h1 className="text-7xl md:text-6xl text-[#746063] mb-3 mt-7 font-script leading-tight drop-shadow-sm">
//           Rrezon <br /> 
//           <span className="text-5xl md:text-4xl opacity-80">&</span> <br /> 
//           Aurela
//         </h1>

//         <div className="text-[#746063] text-[13px] md:text-base leading-relaxed space-y-6 mb-3 mt-2 font-light px-4">
//             <p>6 TETOR 2026 | NË 19:00</p>
//             <p>CITY GRILL | VUSHTRRI</p>
//             <p>PRITJA E MUSAFIRËVE 18:00 - 18:30</p>
//         </div>

//         <button 
//           onClick={onOpenRsvp}
//           className="flex flex-col items-center group cursor-pointer bg-white/60 px-10 py-5 rounded-xl backdrop-blur-md border border-[#e8d5d8] shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:bg-white/80 transition-all mt-4"
//         >
//           <span className="text-[9px] tracking-[0.3em] text-[#746063] mb-2 font-semibold">KLIKO KËTU</span>
//           <span className="text-xs tracking-[0.15em] text-[#746063] font-medium border-b border-[#c17a86] pb-1 group-hover:opacity-70 transition-opacity">
//             KONFIRMO PJESËMARRJEN
//           </span>
//         </button>

//       </div>
//     </motion.div>
//   );
// }

// 'use client';
// import { motion } from 'framer-motion';
// import { useState, useEffect } from 'react';

// interface InvitationProps {
//   onOpenRsvp: () => void;
// }

// export default function InvitationCard({ onOpenRsvp }: InvitationProps) {
//   const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
//     };
    
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <motion.div 
//       // ARKITEKTURA E RE: Kontejneri tani ka h-[100dvh] të kyçur, por lejon scroll vertikal me "snap"
//       className="relative h-[100dvh] w-full overflow-y-auto snap-y snap-mandatory bg-[#fdfaf9] scroll-smooth"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
//     >
//       {/* ================================
//           FAQJA 1: KOPERTINA (rra.jpeg)
//       ================================= */}
//       <section className="relative w-full h-[100dvh] snap-start shrink-0 flex flex-col items-center justify-center bg-[#fdfaf9]">
//         <img 
//           src="/rra.png" 
//           alt="Kopertina Rrezon dhe Aurela" 
//           className="absolute inset-0 w-full h-full object-cover object-center"
//         />
        
//         {/* Indikatori udhëzues që pulson për t'i treguar përdoruesit të bëjë scroll */}
//         <motion.div 
//           className="absolute bottom-10 flex flex-col items-center pointer-events-none"
//           animate={{ y: [0, 10, 0] }}
//           transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
//         >
//           <span className="text-[#a87c82] text-[9px] md:text-[10px] tracking-[0.3em] font-semibold uppercase mb-2 mix-blend-multiply opacity-70">
//             Rrëshqit Poshtë
//           </span>
//           <div className="w-[1px] h-8 bg-[#a87c82] opacity-50"></div>
//         </motion.div>
//       </section>

//       {/* ================================
//           FAQJA 2: DETAJET E FTESËS
//       ================================= */}
//       <section className="relative w-full h-[100dvh] snap-start shrink-0 flex flex-col items-center justify-center overflow-hidden">
        
//         {/* SHTRESA 1: Prapavija e Seksionit 2 */}
//         <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
//           <img 
//             src="/invitation-bg.jpeg" 
//             alt="Background Desktop" 
//             className="hidden md:block absolute inset-0 w-full h-full object-cover object-center"
//           />
          
//           {/* MOBILE VIEW (I rrotulluar si më parë) */}
//           {windowDimensions.width > 0 && (
//             <div 
//               className="md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90"
//               style={{ width: `${windowDimensions.height}px`, height: `${windowDimensions.width}px` }}
//             >
//               <img 
//                 src="/invitation-bg.jpeg" 
//                 alt="Background Mobile" 
//                 className="w-full h-full object-cover object-center opacity-80 scale-105"
//               />
//             </div>
//           )}
//         </div>

//         {/* SHTRESA 2: Teksti (Kemi ngjeshur pak marginat që të futet perfekt në një ekran pa scroll brenda vetes) */}
//         <div className="relative z-10 flex flex-col items-center text-center px-8 md:px-12 w-full max-w-lg mx-auto justify-center h-full">
          
//           <div className="text-[#a7999b] text-[10px] md:text-xs tracking-[0.1em] leading-relaxed space-y-4 mb-2 mt-4 font-light px-4">
//               <p>NGA NJË TAKIM I BUKUR, NË NJË HISTORI DASHURIE PËRJETË</p>
//               <p>JU FTOJMË ME ZEMËR TË FESTONI ME NE FILLIMIN E JETËS SONË SË BASHKU</p>
//           </div>

//           <h1 className="text-6xl md:text-7xl text-[#b8979c] my-6 font-script leading-tight drop-shadow-sm">
//             Rrezon <br /> 
//             <span className="text-4xl md:text-5xl opacity-80">&</span> <br /> 
//             Aurela
//           </h1>

//           <div className="text-[#a7999b] text-[11px] md:text-sm tracking-[0.1em] leading-relaxed space-y-4 mb-4 font-light px-4">
//               <p>6 TETOR 2026 | NË 19:00</p>
//               <p>CITY GRILL | VUSHTRRI</p>
//               <p className="text-[9px] md:text-xs mt-2 font-medium tracking-[0.15em]">PRITJA E MYSAFIRËVE 18:00 - 18:30</p>
//           </div>

//           <button 
//             onClick={onOpenRsvp}
//             className="flex flex-col items-center group cursor-pointer bg-white/60 px-10 py-4 rounded-xl backdrop-blur-md border border-[#e8d5d8] shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:bg-white/80 transition-all mt-4"
//           >
//             <span className="text-[9px] tracking-[0.3em] text-[#a87c82] mb-1 font-semibold">KLIKO KËTU</span>
//             <span className="text-xs tracking-[0.15em] text-[#c17a86] font-medium border-b border-[#c17a86] pb-1 group-hover:opacity-70 transition-opacity">
//               KONFIRMO PJESËMARRJEN
//             </span>
//           </button>

//         </div>
//       </section>
//     </motion.div>
//   );
// }

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
      className="relative h-[100dvh] w-full overflow-y-auto snap-y snap-mandatory bg-[#ebd9d0] scroll-smooth"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
    >
      {/* ================================
          FAQJA 1: KOPERTINA E RE (Ekuilibri i Artë)
      ================================= */}
      <section className="relative w-full h-[100dvh] snap-start shrink-0 flex flex-col items-center justify-center bg-[#E8DED6] overflow-hidden">
        
        {/* KORNIZA FLORALE: Proporcionale me gjerësinë e ekranit */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 max-w-[900px] aspect-square flex items-center justify-center pointer-events-none">
          <img 
            src="/arr.png" 
            alt="Dekorimi Floral" 
            // scale-[1.15] i pozicionon lulet saktësisht në qoshet e qendrës, pa bërë "zoom" të shëmtuar vertikal
            className="w-full h-full object-contain scale-[1.15] opacity-95 mix-blend-multiply"
          />
        </div>

        {/* INICIALET: Të zvogëluara dhe më elegante */}
        <motion.div 
          className="relative z-10 flex flex-col items-center justify-center mt-[-2vh]"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        >
          <h2 className="text-5xl md:text-6xl text-[#746063] font-script leading-none drop-shadow-sm flex flex-col items-center">
            <span>Rr</span>
            <span className="text-2xl md:text-3xl opacity-70 my-2">&</span>
            <span>A</span>
          </h2>
        </motion.div>
        
        {/* Indikatori udhëzues */}
        <motion.div 
          className="absolute bottom-10 flex flex-col items-center pointer-events-none"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <span className="text-[#746063] text-[9px] md:text-[10px] tracking-[0.3em] font-semibold uppercase mb-2 mix-blend-multiply opacity-70">
            Rrëshqit Poshtë
          </span>
          <div className="w-[1px] h-8 bg-[#746063] opacity-50"></div>
        </motion.div>
      </section>

      {/* ================================
          FAQJA 2: DETAJET E FTESËS
      ================================= */}
      <section className="relative w-full h-[100dvh] snap-start shrink-0 flex flex-col items-center justify-center overflow-hidden">
        
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <img 
            src="/invitation-bg.jpeg" 
            alt="Background Desktop" 
            className="hidden md:block absolute inset-0 w-full h-full object-cover object-center"
          />
          {windowDimensions.width > 0 && (
            <div 
              className="md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90"
              style={{ width: `${windowDimensions.height}px`, height: `${windowDimensions.width}px` }}
            >
              <img 
                src="/invitation-bg.jpeg" 
                alt="Background Mobile" 
                className="w-full h-full object-cover object-center opacity-80 scale-105"
              />
            </div>
          )}
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-8 md:px-12 w-full max-w-lg mx-auto justify-center h-full">
          
          <div className="text-[#746063] text-[10px] md:text-xs tracking-[0.1em] leading-relaxed space-y-4 mb-2 mt-4 font-light px-4">
              <p>NGA NJË TAKIM I BUKUR, NË NJË HISTORI DASHURIE PËRJETË</p>
              <p>JU FTOJMË ME ZEMËR TË FESTONI ME NE FILLIMIN E JETËS SONË SË BASHKU</p>
          </div>

          {/* <h1 className="text-6xl md:text-7xl text-[#746063] my-4 font-script leading-tight drop-shadow-sm">
            Rrezon <br /> 
            <span className="text-4xl md:text-5xl opacity-80">&</span> <br /> 
            Aurela
          </h1> */}
            <h1 className="text-6xl md:text-7xl text-[#746063] my-6 font-script flex flex-col items-center drop-shadow-sm -space-y-1 md:-space-y-4">
                <span>Rrezon</span>
                <span className="text-4xl md:text-5xl opacity-80">&</span>
                <span>Aurela</span>
            </h1>

          <div className="text-[#746063] text-[11px] md:text-sm tracking-[0.1em] leading-relaxed space-y-4 mb-4 font-light px-4">
              <p>6 TETOR 2026</p>
              <p>CITY GRILL | VUSHTRRI</p>
              <p className="text-[9px] md:text-xs mt-2 font-medium tracking-[0.15em]">PRITJA E MYSAFIRËVE 18:00 - 18:30</p>
          </div>

          <button 
            onClick={onOpenRsvp}
            className="flex flex-col items-center group cursor-pointer bg-white/60 px-10 py-4 rounded-xl backdrop-blur-md border border-[#e8d5d8] shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:bg-white/80 transition-all mt-4"
          >
            <span className="text-[9px] tracking-[0.3em] text-[#746063] mb-1 font-semibold">KLIKO KËTU</span>
            <span className="text-xs tracking-[0.15em] text-[#746063] font-medium border-b border-[#746063] pb-1 group-hover:opacity-70 transition-opacity">
              KONFIRMO PJESËMARRJEN
            </span>
          </button>

        </div>
      </section>
    </motion.div>
  );
}