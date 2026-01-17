
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
          if (rect.top <= 150 && rect.bottom >= 150) {
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
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 w-full z-[150] transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md py-2' : 'bg-black/20 py-4'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
        
        {/* HUD Left: Branding - Smaller on mobile */}
        <div className="flex-shrink-0">
          <a
            href="#home"
            onClick={(e) => handleClick(e, '#home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-5 h-5 md:w-6 md:h-6 border border-cyber-primary rotate-45 flex items-center justify-center group-hover:bg-cyber-primary transition-all duration-300">
              <span className="text-[7px] md:text-[8px] -rotate-45 group-hover:text-black font-bold font-orbitron text-cyber-primary">PR</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-[9px] md:text-[10px] font-orbitron font-bold tracking-[0.1em] md:tracking-[0.2em] neon-text">T. PRANEETH</span>
            </div>
          </a>
        </div>

        {/* HUD Center: Navigation Links - Horizontal scrollable on mobile */}
        <div className="flex-grow overflow-x-auto no-scrollbar scroll-smooth">
          <div className="flex items-center bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-sm min-w-max mx-auto sm:min-w-0 sm:w-fit">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name.toLowerCase();
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`relative px-2.5 md:px-4 py-1 rounded-full font-orbitron text-[8px] md:text-[10px] tracking-[0.1em] md:tracking-[0.2em] transition-all duration-300 ${
                    isActive ? 'text-black font-bold' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <span className="relative z-10 whitespace-nowrap">{link.name}</span>
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

        {/* HUD Right: Status - Hidden on extra small screens */}
        <div className="hidden lg:flex items-center justify-end gap-4 text-cyber-primary font-mono text-[9px] tracking-widest flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="opacity-40">SYS:</span>
            <span className="animate-pulse uppercase">Active</span>
            <div className="w-1.5 h-1.5 rounded-full bg-cyber-primary shadow-[0_0_8px_rgba(0,242,255,1)]" />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator for mobile nav */}
      <div className="sm:hidden w-full overflow-hidden h-[1px] bg-white/5">
        <div className="h-full bg-cyber-primary/20 w-1/3 animate-scanline" />
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
