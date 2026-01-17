
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h2 className="text-4xl font-orbitron font-bold mb-8 flex items-center justify-center uppercase tracking-tighter">
            <span className="text-cyber-primary mr-4">01.</span>
            ABOUT ME
          </h2>
          <div className="space-y-6 text-rajdhani text-lg md:text-xl text-gray-300 leading-relaxed">
            <p>
              I’m a Computer Science undergraduate at <span className="text-white font-bold">VIT Andhra Pradesh</span> with a passion for building clean and practical software solutions. 
            </p>
            <p>
              My experience spans <span className="text-cyber-primary font-medium">Java based development</span>, basic frontend technologies, databases, and AI driven projects. I value continuous learning, strong fundamentals, and contributing to products that solve real problems.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="glass-card p-4 rounded-xl">
                <div className="text-cyber-primary font-mono text-xs mb-1 uppercase">LOCATION</div>
                <div className="font-orbitron text-sm">VIT AP // INDIA</div>
              </div>
              <div className="glass-card p-4 rounded-xl">
                <div className="text-cyber-secondary font-mono text-xs mb-1 uppercase">EDUCATION</div>
                <div className="font-orbitron text-sm">VIT AP - B.TECH</div>
              </div>
              <div className="glass-card p-4 rounded-xl">
                <div className="text-cyber-accent font-mono text-xs mb-1 uppercase">FOCUS</div>
                <div className="font-orbitron text-sm">JAVA / WEB / AI</div>
              </div>
              <div className="glass-card p-4 rounded-xl">
                <div className="text-green-400 font-mono text-xs mb-1 uppercase">INTERESTS</div>
                <div className="font-orbitron text-sm">TECH / LEGAL / CRICKET</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
