'use client';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Envelope from '@/components/Envelope';
import InvitationCard from '@/components/InvitationCard';
import RsvpModal from '@/components/Rsvpmodal';

export default function Home() {
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="relative overflow-hidden min-h-screen bg-[#fdfaf9]">
      
      {/* AnimatePresence lejon që animacioni "exit" i zarfit të ekzekutohet plotësisht para se të fshihet nga DOM */}
      <AnimatePresence>
        {!isEnvelopeOpened && (
          <Envelope key="envelope" onOpen={() => setIsEnvelopeOpened(true)} />
        )}
      </AnimatePresence>
      
      {/* Ftesa shfaqet pasi zarfi të ketë mbaruar ciklin e tij */}
      {isEnvelopeOpened && (
        <InvitationCard onOpenRsvp={() => setIsModalOpen(true)} />
      )}

      {/* Thërrasim modalin e vërtetë me Supabase */}
      <RsvpModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </main>
  );
}