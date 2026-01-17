
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface IntroScreenProps {
  onEnter: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onEnter }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("INITIALIZING PORTFOLIO SYSTEM...");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setStatus("PROFILE READY • PROJECTS LOADED • SKILLS ONLINE");
          return 100;
        }
        return p + 1;
      });
    }, 15);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-screen bg-black flex flex-col items-center justify-center overflow-hidden font-mono px-6">
      <div className="absolute inset-0 opacity-20" 
           style={{ backgroundImage: 'linear-gradient(rgba(0, 242, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 242, 255, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* Small top left: SYSTEM MODE: PORTFOLIO */}
      <div className="absolute top-6 left-6 md:top-10 md:left-10 text-[9px] md:text-[10px] text-cyber-primary opacity-80 space-y-1">
        <div className="font-bold tracking-[0.2em] border-l-2 border-cyber-primary pl-2 uppercase">SYSTEM MODE: PORTFOLIO</div>
        <div className="opacity-40 pl-2">UPLINK_STABLE // NEXUS_v3.1</div>
      </div>

      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center z-10 w-full max-w-5xl"
      >
        {/* Main title (big) - Significantly reduced size for mobile to prevent wrapping/overflow */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-orbitron font-black mb-4 tracking-tighter neon-text animate-glitch uppercase leading-tight">
          TIPPIREDDY PRANEETH<br className="block sm:hidden" /> RAGHU RAMI REDDY
        </h1>
        
        {/* Sub title */}
        <div className="text-cyber-primary/70 text-[10px] sm:text-sm md:text-lg mb-8 md:mb-12 tracking-[0.2em] sm:tracking-[0.4em] uppercase font-rajdhani font-semibold">
          Computer Science Engineer // Software Developer
        </div>

        <div className="w-full max-w-[280px] md:max-w-md h-1 bg-white/10 rounded-full mx-auto relative overflow-hidden mb-6">
          <motion.div 
            className="absolute inset-y-0 left-0 bg-cyber-primary shadow-[0_0_15px_rgba(0,242,255,1)]"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Status line (small) */}
        <div className="text-[8px] md:text-xs text-cyber-primary mb-12 opacity-80 h-4 tracking-[0.1em] md:tracking-[0.2em] font-bold uppercase">
          {status}
        </div>

        {progress >= 100 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 242, 255, 1)", color: "#000" }}
              whileTap={{ scale: 0.95 }}
              onClick={onEnter}
              className="px-6 md:px-10 py-3 md:py-4 bg-transparent border-2 border-cyber-primary text-cyber-primary font-orbitron text-xs md:text-sm font-bold tracking-widest transition-all duration-300 shadow-[0_0_15px_rgba(0,242,255,0.2)]"
            >
              ✅ ENTER PORTFOLIO →
            </motion.button>
            {/* Mini line under button */}
            <span className="text-[8px] md:text-[10px] text-gray-500 uppercase tracking-[0.2em] md:tracking-[0.3em] animate-pulse">
              Welcome to my work space
            </span>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default IntroScreen;
