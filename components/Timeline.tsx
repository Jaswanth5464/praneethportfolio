
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
    <section id="academic" className="py-24 px-8 max-w-5xl mx-auto scroll-mt-20">
      <h2 className="text-4xl font-orbitron font-bold mb-20 text-center uppercase tracking-tighter">ACADEMIC_CHRONOLOGY</h2>
      
      <div className="relative">
        {/* Central Beam */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyber-primary via-cyber-secondary to-transparent opacity-20" />
        
        <div className="space-y-24">
          {education.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className={`flex items-center justify-between w-full ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className="w-[45%]">
                <div className={`glass-card p-6 rounded-2xl relative ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="text-cyber-primary font-mono text-sm mb-2">{item.period}</div>
                  <h3 className="text-xl font-orbitron font-bold mb-1">{item.title}</h3>
                  <div className="text-gray-400 font-rajdhani">{item.institution}</div>
                  <div className="mt-4 inline-block px-3 py-1 bg-cyber-primary/10 rounded-full text-cyber-primary text-xs font-bold border border-cyber-primary/20">
                    {item.stats}
                  </div>
                </div>
              </div>

              {/* Node */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-black border-2 border-cyber-primary rounded-full z-10 shadow-[0_0_10px_rgba(0,242,255,1)]" />

              <div className="w-[45%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
