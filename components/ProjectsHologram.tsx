
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Cpu, FileText, Gavel } from 'lucide-react';

const projects = [
  {
    title: "Personal AI Legal Assistant",
    desc: "Streamlit-based AI web app helping Indians file legal complaints. Features voice input, IPC section finder via semantic search (ChromaDB), and multilingual support.",
    tech: ["Python", "Streamlit", "ChromaDB", "Gemini AI"],
    icon: <Gavel size={40} />,
    color: "#ff00c8",
    github: "https://github.com/Praneeth7665/Personal-ai-legal-assistant_by_using_Rag",
    live: null
  },
  {
    title: "Smart Safety: Automated PPE Recognition",
    desc: "AI-powered safety monitoring detecting helmets, vests, and masks in real-time using YOLOv5 & OpenCV. Trained on Roboflow dataset with 94% accuracy.",
    tech: ["Python", "YOLOv5", "PyTorch", "OpenCV"],
    icon: <Cpu size={40} />,
    color: "#00f2ff",
    github: "https://github.com/Praneeth7665/PPE-Detection-",
    live: null
  },
  {
    title: "Smart Document Generation Web App",
    desc: "AI platform using Gemini AI to generate/refine professional Word & PPT documents. Features secure Firebase auth and document exports.",
    tech: ["Next.js", "Gemini AI", "Firebase", "Node.js"],
    icon: <FileText size={40} />,
    color: "#7000ff",
    github: "https://github.com/Praneeth7665/AI-DOC-Generator",
    live: "https://ai-document-generator-taupe.vercel.app"
  }
];

const ProjectsHologram: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-8 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-orbitron font-bold mb-16 text-center">
          <span className="text-cyber-primary">DEPLOYED_</span>SYSTEMS
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className="relative group h-full"
            >
              <div className="glass-card p-8 rounded-2xl border-l-4 overflow-hidden h-full flex flex-col" style={{ borderLeftColor: project.color }}>
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                  {project.icon}
                </div>
                
                <div className="font-mono text-[10px] text-gray-500 mb-2 uppercase tracking-widest">
                  PROJECT_REF_{idx + 104}
                </div>
                
                <h3 className="text-2xl font-orbitron font-bold mb-4 group-hover:text-cyber-primary transition-colors uppercase">
                  {project.title}
                </h3>
                
                <p className="text-rajdhani text-gray-400 mb-8 flex-grow">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-white/70">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 mt-auto">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cyber-primary font-orbitron text-xs hover:underline uppercase">
                    <Github size={16} /> REPOSITORY
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white font-orbitron text-xs hover:underline uppercase">
                      <ExternalLink size={16} /> LIVE_UPLINK
                    </a>
                  )}
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none" 
                     style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsHologram;
