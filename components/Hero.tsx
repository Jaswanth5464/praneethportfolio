
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
    <section id="home" className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-24 pt-28 pb-20 overflow-hidden">
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10 order-2 md:order-1">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="font-mono text-cyber-primary text-[10px] md:text-sm mb-4 tracking-[0.3em] md:tracking-[0.4em] uppercase"
        >
          // ACCESSING CORE_ID_2026
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-orbitron font-black mb-6 leading-tight uppercase"
        >
          TIPPIREDDY <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary via-cyber-secondary to-cyber-accent">
            PRANEETH RAGHU RAMI REDDY
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-rajdhani text-base md:text-lg lg:text-xl text-gray-400 max-w-xl mb-10 px-4 md:px-0"
        >
          Dedicated Computer Science student at VIT AP. Building high-performance software solutions and intelligent systems. Focused on Java, modern web tech, and practical engineering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6 sm:px-0"
        >
          <a 
            href={projectsLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 bg-cyber-primary text-black font-orbitron font-bold hover:bg-white transition-colors duration-300 rounded-sm shadow-[0_0_20px_rgba(0,242,255,0.3)] text-center text-xs md:text-sm"
          >
            EXPLORE PROJECTS
          </a>
          <a 
            href={cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-white/20 font-orbitron text-white hover:bg-white/10 transition-colors duration-300 rounded-sm uppercase tracking-widest text-center text-xs md:text-sm"
          >
            RETRIEVE_CV
          </a>
        </motion.div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center mb-12 md:mb-0 relative order-1 md:order-2 md:pr-12 lg:pr-24">
        <motion.div
          initial={{ scale: 0.8, opacity: 0, x: 20 }}
          whileInView={{ scale: 1, opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group">
            <div className="absolute inset-0 border-4 border-cyber-primary rounded-full animate-pulse-slow shadow-[0_0_30px_rgba(0,242,255,0.4)]" />
            <div className="absolute inset-[-8px] border border-cyber-secondary/30 rounded-full animate-spin-slow" />
            
            <div className="absolute inset-3 overflow-hidden rounded-full glass-card border-2 border-white/10">
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
