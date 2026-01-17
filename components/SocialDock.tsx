
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Smartphone } from 'lucide-react';

const SocialDock: React.FC = () => {
  const links = [
    { icon: <Github size={24} />, url: "https://github.com/Praneeth7665/", label: "GitHub" },
    { icon: <Linkedin size={24} />, url: "https://www.linkedin.com/in/praneeth-raghu-rami-reddy-tippireddy-378729262/", label: "LinkedIn" },
    { icon: <Mail size={24} />, url: "mailto:praneethreddy7665@gmail.com", label: "Email" },
    { icon: <Smartphone size={24} />, url: "tel:+918639383729", label: "Phone" },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[140]">
      <div className="glass-card flex items-end gap-4 p-4 rounded-3xl border-white/5 shadow-2xl backdrop-blur-2xl">
        {links.map((link, idx) => (
          <motion.a
            key={idx}
            href={link.url}
            target={link.url.startsWith('http') ? "_blank" : "_self"}
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.5, 
              y: -10,
              backgroundColor: "rgba(0, 242, 255, 0.2)",
              color: "#00f2ff"
            }}
            className="p-3 bg-white/5 rounded-2xl text-gray-400 transition-all duration-300 relative group flex items-center justify-center cursor-pointer"
          >
            {link.icon}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-[10px] font-mono text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {link.label}
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default SocialDock;
