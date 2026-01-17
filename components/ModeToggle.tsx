
import React from 'react';
import { Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface ModeToggleProps {
  mode: 'normal' | 'futuristic';
  onToggle: () => void;
}

const ModeToggle: React.FC<ModeToggleProps> = ({ mode, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="fixed bottom-24 right-8 z-[150] flex items-center gap-3 px-4 py-2 glass-card rounded-full border border-white/10 group transition-all duration-300 backdrop-blur-xl"
    >
      <span className="text-[10px] font-mono text-gray-500 group-hover:text-white uppercase tracking-tighter">
        {mode === 'futuristic' ? 'HYPER_DRIVE' : 'STABLE_OS'}
      </span>
      <div className={`w-10 h-5 rounded-full relative transition-colors duration-500 ${mode === 'futuristic' ? 'bg-cyber-primary' : 'bg-slate-700'}`}>
        <motion.div
          animate={{ x: mode === 'futuristic' ? 20 : 4 }}
          className="absolute top-1 w-3 h-3 bg-white rounded-full shadow-lg"
        />
      </div>
      {mode === 'futuristic' ? <Zap size={14} className="text-cyber-primary" /> : <ShieldCheck size={14} />}
    </button>
  );
};

export default ModeToggle;
