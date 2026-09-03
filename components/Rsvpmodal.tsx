'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { X } from 'lucide-react';

interface RsvpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RsvpModal({ isOpen, onClose }: RsvpModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [status, setStatus] = useState<'po' | 'jo'>('po');
  const [formData, setFormData] = useState({ name: '', contact: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSelection = (selectedStatus: 'po' | 'jo') => {
    setStatus(selectedStatus);
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    const { error } = await supabase
      .from('rsvps')
      .insert([{ name: formData.name, contact: formData.contact, status }]);

    setLoading(false);
    if (error) {
      setErrorMsg('Ndodhi një gabim gjatë dërgimit. Provoni përsëri.');
    } else {
      setSuccess(true);
    }
  };

  const resetAndClose = () => {
    setStep(1);
    setSuccess(false);
    setFormData({ name: '', contact: '' });
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div 
          className="relative bg-[#fbf6f5] w-full max-w-md rounded-2xl shadow-2xl border-4 border-white p-6 md:p-8 text-center overflow-hidden"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
        >
          <button onClick={resetAndClose} className="absolute top-4 right-4 text-[#8c7377] hover:text-[#c17a86] transition-colors">
            <X size={24} />
          </button>

          {!success ? (
            <>
              <h2 className="text-2xl md:text-3xl text-[#c17a86] mb-3 uppercase tracking-widest font-medium font-serif">
                Konfirmo<br/>Pjesëmarrjen
              </h2>
              
              <p className="text-[#a87c82] text-[10px] md:text-xs tracking-[0.2em] uppercase mb-8 leading-relaxed px-4">
                Rrezoni dhe Aurela do të dëshironin të dinin nëse mund të merrni pjesë
              </p>

              {step === 1 ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                  <p className="text-[#8c7377] text-sm md:text-base font-serif mb-4">A DO TË NA BASHKOHENI?</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button 
                      onClick={() => handleSelection('po')}
                      className="flex-1 py-3 md:py-4 border border-[#e1c4c8] text-[#c17a86] rounded-xl hover:bg-[#f6ebea] transition-colors tracking-widest text-[10px] md:text-xs uppercase bg-white shadow-sm"
                    >
                      PO, DO TË VI
                    </button>
                    <button 
                      onClick={() => handleSelection('jo')}
                      className="flex-1 py-3 md:py-4 border border-[#e1c4c8] text-[#8c7377] rounded-xl hover:bg-[#f6ebea] transition-colors tracking-widest text-[10px] md:text-xs uppercase bg-[#fcf9f8] shadow-sm"
                    >
                      JO, NUK MUNDEM
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form 
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} 
                  onSubmit={handleSubmit} 
                  className="space-y-4"
                >
                  <p className="text-[#8c7377] mb-4 text-sm">
                    Keni zgjedhur: <strong className="text-[#c17a86] uppercase tracking-wider">{status === 'po' ? 'Do të vi' : 'Nuk mundem'}</strong>
                  </p>
                  <input 
                    required type="text" placeholder="Emri dhe Mbiemri" 
                    className="w-full p-3 md:p-4 border border-[#e1c4c8] rounded-xl bg-white focus:outline-none focus:border-[#c17a86] text-center text-[#8c7377] placeholder:text-[#d4c3c5]"
                    value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  <input 
                    required type="text" placeholder="Nr. i Telefonit / Email" 
                    className="w-full p-3 md:p-4 border border-[#e1c4c8] rounded-xl bg-white focus:outline-none focus:border-[#c17a86] text-center text-[#8c7377] placeholder:text-[#d4c3c5]"
                    value={formData.contact} onChange={(e) => setFormData({...formData, contact: e.target.value})}
                  />
                  
                  {errorMsg && <p className="text-red-500 text-xs mt-2">{errorMsg}</p>}

                  <button 
                    disabled={loading} type="submit" 
                    className="w-full py-3 md:py-4 bg-[#c17a86] text-white rounded-xl hover:bg-[#a86671] transition-colors tracking-widest uppercase text-[10px] md:text-xs disabled:opacity-50 mt-4 shadow-md"
                  >
                    {loading ? 'Duke dërguar...' : 'DËRGO KONFIRMIMIN'}
                  </button>
                </motion.form>
              )}
            </>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-8 md:py-10">
              <h3 className="text-2xl md:text-3xl text-[#c17a86] mb-4 italic font-serif">Faleminderit!</h3>
              <p className="text-[#8c7377] text-sm">Konfirmimi juaj u regjistrua me sukses.</p>
              <button 
                onClick={resetAndClose} 
                className="mt-8 px-8 py-3 border border-[#e1c4c8] text-[#c17a86] rounded-xl text-xs tracking-widest uppercase hover:bg-white transition-colors"
              >
                Mbylle
              </button>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}