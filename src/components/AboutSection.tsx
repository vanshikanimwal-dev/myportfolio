
import React, { useState } from 'react';
import { Code, Monitor, Server, Smartphone, Hexagon, Database } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState('');
  
  const skills = [
    { id: 'frontend', name: 'Frontend', icon: <Monitor size={24} />, color: 'cyber-blue', 
      technologies: ['React', 'TypeScript', 'Next.js', 'TailwindCSS', 'GSAP', 'Framer Motion'] },
    { id: 'backend', name: 'Backend', icon: <Server size={24} />, color: 'cyber-pink', 
      technologies: ['Node.js', 'Express', 'Python', 'Java', 'GraphQL', 'REST APIs'] },
    { id: 'mobile', name: 'Mobile Dev', icon: <Smartphone size={24} />, color: 'cyber-green', 
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Redux'] },
    { id: 'database', name: 'Database', icon: <Database size={24} />, color: 'cyber-yellow', 
      technologies: ['MongoDB', 'PostgreSQL', 'Firebase', 'Redis', 'Supabase', 'MySQL'] },
    { id: 'devops', name: 'DevOps', icon: <Hexagon size={24} />, color: 'cyber-purple', 
      technologies: ['Docker', 'AWS', 'CI/CD', 'Kubernetes', 'Terraform', 'Linux'] },
    { id: 'other', name: 'Other Skills', icon: <Code size={24} />, color: 'white', 
      technologies: ['Git', 'GitHub', 'VS Code', 'Figma', 'Adobe XD', 'Photoshop'] },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-cyber-dark">
      {/* Background effect */}
      <div className="absolute inset-0 bg-cyber-dots opacity-20 z-0"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl md:text-4xl mb-4 inline-block relative group">
            <span className="text-white group-hover:animate-glitch">&lt;About Me /&gt;</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyber-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </h2>
          <div className="max-w-3xl mx-auto mt-8">
            <p className="text-gray-400 mb-6">
              I'm a passionate developer focused on creating modern, interactive web experiences. 
              With expertise in both frontend and backend technologies, I build scalable, user-friendly applications.
            </p>
            <p className="text-gray-400">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source,
              or playing with the latest design tools to create immersive digital experiences.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill) => (
            <div 
              key={skill.id}
              className="glass-card p-6 group transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyber-blue/20"
              onMouseEnter={() => setActiveSkill(skill.id)}
              onMouseLeave={() => setActiveSkill('')}
            >
              <div className={`flex items-center mb-4 text-${skill.color}`}>
                <div className="mr-3">{skill.icon}</div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <div className="h-[120px]">
                <ul className="text-gray-400 space-y-1">
                  {skill.technologies.map((tech, i) => (
                    <li 
                      key={i} 
                      className={`transition-all duration-300 transform ${
                        activeSkill === skill.id ? 'translate-x-2 text-white' : ''
                      }`}
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="glass-card p-8 border border-cyber-blue/30">
            <h3 className="text-2xl font-bold mb-4 text-cyber-blue">My Journey</h3>
            <div className="space-y-6">
              <div className="relative pl-8 border-l border-cyber-blue/30">
                <div className="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-cyber-dark border-2 border-cyber-blue"></div>
                <div className="text-lg font-semibold text-white">Senior Developer</div>
                <div className="text-cyber-blue">2020 - Present</div>
                <p className="text-gray-400 mt-2">
                  Leading development teams and architecting solutions for complex web applications.
                  Mentoring junior developers and implementing best practices.
                </p>
              </div>
              
              <div className="relative pl-8 border-l border-cyber-pink/30">
                <div className="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-cyber-dark border-2 border-cyber-pink"></div>
                <div className="text-lg font-semibold text-white">Full Stack Developer</div>
                <div className="text-cyber-pink">2018 - 2020</div>
                <p className="text-gray-400 mt-2">
                  Built end-to-end solutions using modern JavaScript frameworks.
                  Collaborated with designers to implement pixel-perfect interfaces.
                </p>
              </div>
              
              <div className="relative pl-8 border-l border-cyber-green/30">
                <div className="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-cyber-dark border-2 border-cyber-green"></div>
                <div className="text-lg font-semibold text-white">Frontend Developer</div>
                <div className="text-cyber-green">2016 - 2018</div>
                <p className="text-gray-400 mt-2">
                  Focused on creating responsive, accessible web interfaces with attention to detail.
                  Specialized in JavaScript frameworks and modern CSS techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
