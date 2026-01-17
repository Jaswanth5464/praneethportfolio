
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch("https://formspree.io/f/maqqqapn", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 px-8 max-w-4xl mx-auto">
      <div className="glass-card rounded-3xl p-8 md:p-12 border-cyber-primary/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5">
           <Send size={120} className="text-cyber-primary" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 text-center neon-text uppercase">INITIATE_CONTACT</h2>
        <p className="text-rajdhani text-gray-400 text-center mb-12 uppercase tracking-widest text-sm">Transmission relay for inquiries and collaborations</p>
        
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20 flex flex-col items-center gap-6"
            >
              <CheckCircle size={80} className="text-cyber-primary animate-pulse" />
              <div className="space-y-2">
                <h3 className="text-2xl font-orbitron font-bold text-white uppercase tracking-widest">Transmission Successful</h3>
                <p className="text-gray-400 font-rajdhani uppercase tracking-tighter">Payload received. System acknowledgement pending.</p>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                onClick={() => setStatus('idle')}
                className="mt-4 px-8 py-2 border border-cyber-primary/30 text-cyber-primary text-xs font-mono rounded hover:bg-cyber-primary/10"
              >
                // REINITIALIZE_FORM
              </motion.button>
            </motion.div>
          ) : (
            <motion.form 
              key="form"
              onSubmit={handleSubmit}
              className="space-y-6 relative z-10"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-cyber-primary uppercase tracking-tighter">IDENT_NAME</label>
                  <input 
                    type="text" 
                    name="name" 
                    required
                    disabled={status === 'submitting'}
                    placeholder="Enter Your Full Name"
                    className="w-full bg-black/50 border border-white/10 rounded-lg p-4 font-rajdhani text-white focus:outline-none focus:border-cyber-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-cyber-primary uppercase tracking-tighter">IDENT_EMAIL</label>
                  <input 
                    type="email" 
                    name="email" 
                    required
                    disabled={status === 'submitting'}
                    placeholder="Enter Your Email Address"
                    className="w-full bg-black/50 border border-white/10 rounded-lg p-4 font-rajdhani text-white focus:outline-none focus:border-cyber-primary transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-cyber-primary uppercase tracking-tighter">IDENT_MESSAGE</label>
                <textarea 
                  name="message" 
                  rows={5}
                  required
                  disabled={status === 'submitting'}
                  placeholder="System Transmission Payload..."
                  className="w-full bg-black/50 border border-white/10 rounded-lg p-4 font-rajdhani text-white focus:outline-none focus:border-cyber-primary transition-colors resize-none"
                />
              </div>
              
              {status === 'error' && (
                <p className="text-red-500 text-xs font-mono text-center">TRANSMISSION_FAILED: PLEASE RETRY LATER</p>
              )}

              <motion.button 
                whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(0, 242, 255, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === 'submitting'}
                className={`w-full py-4 ${status === 'submitting' ? 'bg-gray-600' : 'bg-cyber-primary'} text-black font-orbitron font-black text-sm rounded-lg uppercase tracking-widest hover:bg-white transition-all duration-300 flex items-center justify-center gap-3`}
              >
                {status === 'submitting' ? 'SUBMITTING...' : 'SEND TRANSMISSION'} <Send size={18} />
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ContactForm;
