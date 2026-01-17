
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Code, Shield, Layers, FileCode } from 'lucide-react';

const skills = [
  { name: 'Java Core', icon: <Cpu />, category: 'Backend', color: '#00f2ff' },
  { name: 'n8n Automation', icon: <Layers />, category: 'Workflows', color: '#7000ff' },
  { name: 'SQL Architecture', icon: <Database />, category: 'Data', color: '#ff00c8' },
  { name: 'OOPS Concepts', icon: <Shield />, category: 'Fundamentals', color: '#00f2ff' },
  { name: 'HTML5 & CSS3', icon: <FileCode />, category: 'Frontend', color: '#7000ff' },
  { name: 'JavaScript ES6+', icon: <Code />, category: 'Logic', color: '#ff00c8' },
];

const SkillsGalaxy: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-8 relative bg-black/20">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-orbitron font-black text-white mb-4 tracking-tighter uppercase"
          >
            TECHNICAL_<span className="text-cyber-primary">SKILLS</span>
          </motion.h2>
          <div className="w-24 h-1 bg-cyber-primary mb-6 shadow-[0_0_15px_rgba(0,242,255,0.5)]" />
          <p className="text-rajdhani text-gray-400 uppercase tracking-[0.3em] text-[10px]">CORE COMPETENCIES & TECHNOLOGY STACK</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                y: -10,
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderColor: skill.color
              }}
              className="glass-card p-8 rounded-2xl border border-white/5 group transition-all duration-300 cursor-default"
            >
              <div className="flex items-start justify-between mb-6">
                <div 
                  className="p-4 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors duration-300"
                  style={{ color: skill.color }}
                >
                  {/* Added <any> to React.ReactElement to fix TypeScript overload error when passing 'size' prop */}
                  {React.cloneElement(skill.icon as React.ReactElement<any>, { size: 28 })}
                </div>
                <div className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em]">
                  {skill.category}
                </div>
              </div>
              
              <h3 className="text-2xl font-orbitron font-bold text-white mb-2 group-hover:text-cyber-primary transition-colors duration-300">
                {skill.name}
              </h3>
              
              <div className="w-12 h-1 bg-gray-800 rounded-full group-hover:w-full transition-all duration-500" style={{ backgroundColor: `${skill.color}44` }}>
                <div className="h-full w-0 group-hover:w-full transition-all duration-500" style={{ backgroundColor: skill.color }} />
              </div>
              
              <p className="mt-4 text-rajdhani text-gray-500 text-sm group-hover:text-gray-300 transition-colors duration-300">
                Professional proficiency in {skill.name.toLowerCase()} architectures and real-world implementations.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsGalaxy;
