
import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  aiMode: 'normal' | 'futuristic';
}

const Hero: React.FC<HeroProps> = ({ aiMode }) => {
  const personalPhoto = "https://lh3.googleusercontent.com/d/1orKO72GLsvbbi6GH8vO0iIQD_R1hZZhd";
  const cvLink = "https://drive.google.com/file/d/1DBhnvzmsrgITZwsQ9xc3YUJWj3oazB_8/view?usp=drivesdk";
  const projectsLink = "https://github.com/Praneeth7665?tab=repositories";

  return (
    <section id="home" className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-24 pt-24 pb-20 overflow-hidden">
      <div className="w-full md:w-1/2 flex flex-col items-start z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="font-mono text-cyber-primary text-sm mb-4 tracking-[0.4em]"
        >
          // ACCESSING CORE_ID_2026
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-6xl font-orbitron font-black mb-6 leading-tight uppercase"
        >
          TIPPIREDDY <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary via-cyber-secondary to-cyber-accent">
            PRANEETH RAGHU RAMI REDDY
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-rajdhani text-lg md:text-xl text-gray-400 max-w-xl mb-10"
        >
          Dedicated Computer Science student at VIT AP. Building high-performance software solutions and intelligent systems. Focused on Java, modern web tech, and practical engineering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-4 flex-wrap"
        >
          <a 
            href={projectsLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 bg-cyber-primary text-black font-orbitron font-bold hover:bg-white transition-colors duration-300 rounded-sm shadow-[0_0_20px_rgba(0,242,255,0.3)]"
          >
            EXPLORE PROJECTS
          </a>
          <a 
            href={cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-white/20 font-orbitron text-white hover:bg-white/10 transition-colors duration-300 rounded-sm uppercase tracking-widest"
          >
            RETRIEVE_CV
          </a>
        </motion.div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center mt-20 md:mt-0 relative">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 group">
            <div className="absolute inset-0 border-4 border-cyber-primary rounded-full animate-pulse-slow shadow-[0_0_40px_rgba(0,242,255,0.5)]" />
            <div className="absolute inset-[-10px] border border-cyber-secondary/30 rounded-full animate-spin-slow" />
            <div className="absolute inset-2 border border-cyber-secondary rounded-full animate-spin-slow opacity-50" style={{ animationDirection: 'reverse', animationDuration: '10s' }} />
            
            <div className="absolute inset-4 overflow-hidden rounded-full glass-card border-2 border-white/10">
              <img 
                src={personalPhoto} 
                alt="Praneeth Raghu" 
                className="w-full h-full object-cover transition-all duration-700 scale-110 group-hover:scale-100"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/bottts/svg?seed=Praneeth&backgroundColor=050505`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
