
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import IntroScreen from './components/IntroScreen';
import Hero from './components/Hero';
import About from './components/About';
import SkillsGalaxy from './components/SkillsGalaxy';
import ProjectsHologram from './components/ProjectsHologram';
import Timeline from './components/Timeline';
import SocialDock from './components/SocialDock';
import Background3D from './components/Background3D';
import ModeToggle from './components/ModeToggle';
import ContactForm from './components/ContactForm';
import Navbar from './components/Navbar';
import useEasterEgg from './hooks/useEasterEgg';

const App: React.FC = () => {
  const [hasEntered, setHasEntered] = useState(false);
  const [aiMode, setAiMode] = useState<'normal' | 'futuristic'>('futuristic');

  useEasterEgg('praneeth', () => {
    alert("SYSTEM ACTIVATED 🚀 - PRANEETH OVERRIDE ENGAGED");
  });

  return (
    <div className={`min-h-screen transition-colors duration-1000 ${aiMode === 'futuristic' ? 'bg-[#020617]' : 'bg-[#0f172a]'}`}>
      <ModeToggle mode={aiMode} onToggle={() => setAiMode(prev => prev === 'normal' ? 'futuristic' : 'normal')} />
      
      <AnimatePresence mode="wait">
        {!hasEntered ? (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.5, filter: 'blur(20px)' }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="fixed inset-0 z-[100]"
          >
            <IntroScreen onEnter={() => setHasEntered(true)} />
          </motion.div>
        ) : (
          <motion.main
            key="portfolio"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <Navbar />
            
            <div className="fixed inset-0 pointer-events-none z-[-2]">
              <Background3D intensity={aiMode === 'futuristic' ? 1 : 0.4} />
            </div>

            <Hero aiMode={aiMode} />
            <About />
            <SkillsGalaxy />
            <ProjectsHologram />
            <Timeline />
            <ContactForm />
            
            <footer className="py-24 text-center text-gray-500 font-mono text-xs tracking-widest uppercase pb-32">
              &copy; 2024 TIPPIREDDY PRANEETH RAGHU RAMI REDDY // SYSTEM_ACTIVE
            </footer>

            <SocialDock />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
