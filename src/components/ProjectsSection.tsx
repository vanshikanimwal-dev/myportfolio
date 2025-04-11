import React, { useState } from 'react';
import { Github, ExternalLink, Info, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}

const ProjectsSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [detailsOpen, setDetailsOpen] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Organ Donation System",
      description: "A comprehensive frontend for an organ donation platform that streamlines the donation process and connects donors with recipients. Features modern UI design with accessibility in mind.",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=600&q=60",
      technologies: ["Vite", "TypeScript", "React", "shadcn/ui", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: 2,
      title: "Currency Converter",
      description: "A Java application that enables real-time currency conversion using REST APIs. Features include live exchange rates, historical data tracking, and persistent storage of conversion history.",
      image: "https://images.unsplash.com/photo-1511883040705-6011fad9edfc?auto=format&fit=crop&w=600&q=60",
      technologies: ["Java", "JavaFX", "REST API", "SQL"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: 4,
      title: "CyberDash Analytics",
      description: "A real-time dashboard for tracking user analytics with customizable metrics and interactive charts. Built with a focus on performance and data visualization.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=60",
      technologies: ["React", "D3.js", "Firebase", "TypeScript"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: 5,
      title: "NeuroSync AI",
      description: "An AI-powered content generation platform that uses machine learning to create personalized content. Features include text prediction, style transfer, and sentiment analysis.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=60",
      technologies: ["Python", "TensorFlow", "Next.js", "MongoDB"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: 6,
      title: "GlitchFusion E-commerce",
      description: "A fully-featured e-commerce platform with advanced filtering, real-time inventory, and secure payment processing. Includes admin dashboard and analytics.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=60",
      technologies: ["React", "Node.js", "Stripe", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: 7,
      title: "NeonPulse Chat App",
      description: "Real-time encrypted messaging application with features like voice messages, file sharing, and group conversations. Focused on privacy and security.",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=600&q=60",
      technologies: ["React Native", "Firebase", "WebRTC", "Encryption"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: 8,
      title: "VaporTrail Blog",
      description: "A modern blogging platform with markdown support, code highlighting, and a custom CMS. Features SEO optimization and social sharing capabilities.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=60",
      technologies: ["Next.js", "GraphQL", "Tailwind CSS", "Vercel"],
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  const handleProjectClick = (id: number) => {
    setDetailsOpen(detailsOpen === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 bg-cyber-darker relative">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark to-cyber-darker opacity-80 z-0"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl md:text-4xl mb-4 inline-block relative group">
            <span className="text-white group-hover:animate-glitch">&lt;Projects /&gt;</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyber-pink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one represents a unique challenge and solution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id}
              className={`relative overflow-hidden rounded-xl transition-all duration-500 ${
                activeProject === project.id ? 'scale-105 z-20' : ''
              }`}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className={`
                relative group w-full h-[400px] transition-all duration-300
                ${activeProject === project.id ? 'neon-border-pink' : 'border border-white/10'}
              `}>
                <div className="absolute inset-0 z-0">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-all duration-500 filter brightness-50 group-hover:brightness-40 group-hover:scale-110"
                  />
                </div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                  <div className="space-y-4 transform transition-all duration-300">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="px-2 py-1 bg-cyber-darker/80 text-xs rounded-full text-cyber-blue"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className={`
                      flex space-x-4 transform transition-all duration-300
                      ${activeProject === project.id ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                    `}>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2 bg-cyber-dark rounded-full text-white hover:text-cyber-green transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2 bg-cyber-dark rounded-full text-white hover:text-cyber-blue transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <button
                        onClick={() => handleProjectClick(project.id)}
                        className="p-2 bg-cyber-dark rounded-full text-white hover:text-cyber-pink transition-colors"
                      >
                        <Info size={20} />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className={`
                  absolute inset-0 flex items-center justify-center p-6 z-20
                  glass-card bg-cyber-darker/90 transition-all duration-300
                  ${detailsOpen === project.id ? 'opacity-100 visible' : 'opacity-0 invisible'}
                `}>
                  <div className="max-w-md">
                    <h3 className="text-2xl font-bold text-cyber-pink mb-4">{project.title}</h3>
                    <p className="text-gray-300 mb-6">{project.description}</p>
                    <div className="flex justify-between">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="cyber-button bg-cyber-dark hover:bg-cyber-dark/80 text-sm group"
                      >
                        <span className="relative flex items-center"><Github size={16} className="mr-2" /> View Code</span>
                      </a>
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="cyber-button bg-cyber-blue hover:bg-cyber-blue/80 text-sm group"
                      >
                        <span className="relative flex items-center"><ExternalLink size={16} className="mr-2" /> Live Demo</span>
                      </a>
                    </div>
                    
                    <button
                      onClick={() => setDetailsOpen(null)}
                      className="absolute top-4 right-4 text-white hover:text-cyber-pink"
                    >
                      <X size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
