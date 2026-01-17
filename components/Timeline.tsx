
import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    period: "2022 - 2026",
    title: "B.Tech in Computer Science",
    institution: "Vellore Institute of Technology",
    stats: "CGPA: 7.62"
  },
  {
    period: "2020 - 2022",
    title: "Intermediate Education",
    institution: "Shastra Junior College",
    stats: "Percentage: 94.4%"
  },
  {
    period: "2019 - 2020",
    title: "Secondary Education",
    institution: "Viswabharati High School",
    stats: "CGPA: 10"
  }
];

const Timeline: React.FC = () => {
  return (
    <section id="academic" className="py-24 px-6 md:px-8 max-w-5xl mx-auto scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-16 md:20 text-center uppercase tracking-tighter">ACADEMIC_CHRONOLOGY</h2>
      
      <div className="relative">
        {/* Central Beam - Positioned left on mobile, center on desktop */}
        <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyber-primary via-cyber-secondary to-transparent opacity-20" />
        
        <div className="space-y-12 md:space-y-24">
          {education.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className={`flex items-center justify-between w-full relative ${
                idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-row`}
            >
              {/* Card Container */}
              <div className="w-[calc(100%-40px)] md:w-[45%] ml-auto md:ml-0">
                <div className={`glass-card p-5 md:p-6 rounded-2xl relative ${
                  idx % 2 === 0 ? 'md:text-right' : 'md:text-left'
                } text-left`}>
                  <div className="text-cyber-primary font-mono text-[10px] md:text-sm mb-2">{item.period}</div>
                  <h3 className="text-lg md:text-xl font-orbitron font-bold mb-1 uppercase leading-tight">{item.title}</h3>
                  <div className="text-gray-400 font-rajdhani text-sm md:text-base">{item.institution}</div>
                  <div className="mt-4 inline-block px-3 py-1 bg-cyber-primary/10 rounded-full text-cyber-primary text-[10px] md:text-xs font-bold border border-cyber-primary/20">
                    {item.stats}
                  </div>
                  
                  {/* Decorative corner for mobile */}
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyber-primary/30 md:hidden" />
                </div>
              </div>

              {/* Node - Positioned relative to beam */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-black border-2 border-cyber-primary rounded-full z-10 shadow-[0_0_10px_rgba(0,242,255,1)]" />

              {/* Invisible spacer for desktop flex layout */}
              <div className="hidden md:block w-[45%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
