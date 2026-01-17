
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'ACADEMIC', href: '#academic' },
    { name: 'CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      
      const sections = ['home', 'about', 'skills', 'projects', 'academic', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 w-full z-[150] transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md py-1.5' : 'bg-black/20 py-3'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 flex items-center justify-between">
        
        {/* HUD Left: Branding */}
        <div className="flex-1 flex items-center gap-4">
          <a
            href="#home"
            onClick={(e) => handleClick(e, '#home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-6 h-6 border border-cyber-primary rotate-45 flex items-center justify-center group-hover:bg-cyber-primary transition-all duration-300">
              <span className="text-[8px] -rotate-45 group-hover:text-black font-bold font-orbitron text-cyber-primary">PR</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-orbitron font-bold tracking-[0.2em] neon-text hidden sm:block">T. PRANEETH</span>
              <span className="text-[7px] font-mono text-gray-500 tracking-tighter opacity-60 hidden lg:block uppercase">SYSTEM_READY</span>
            </div>
          </a>
        </div>

        {/* HUD Center: Navigation Links */}
        <div className="flex-[3] flex justify-center">
          <div className="flex items-center bg-white/5 px-2 py-1 rounded-full border border-white/5 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name.toLowerCase();
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`relative px-3 md:px-4 py-1 rounded-full font-orbitron text-[8px] md:text-[9px] lg:text-[10px] tracking-[0.15em] md:tracking-[0.2em] transition-all duration-300 ${
                    isActive ? 'text-black font-bold' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavHUD"
                      className="absolute inset-0 bg-cyber-primary rounded-full z-0 shadow-[0_0_12px_rgba(0,242,255,0.6)]"
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}
                </a>
              );
            })}
          </div>
        </div>

        {/* HUD Right: Status */}
        <div className="flex-1 flex items-center justify-end gap-6 text-cyber-primary font-mono text-[9px] tracking-widest">
          <div className="flex items-center gap-2">
            <span className="opacity-40 hidden md:inline">SYS:</span>
            <span className="animate-pulse">ACTIVE</span>
            <div className="w-1.5 h-1.5 rounded-full bg-cyber-primary shadow-[0_0_8px_rgba(0,242,255,1)]" />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
