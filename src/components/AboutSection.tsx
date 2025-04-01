
import React, { useState } from 'react';
import { 
  Code, 
  Monitor, 
  Server, 
  Smartphone, 
  Hexagon, 
  Database, 
  Braces, 
  FileCode, 
  Cloud, 
  GitBranch, 
  Github,
  Box
} from 'lucide-react';
import { Badge } from './ui/badge';

// Tech logos/icons with custom colors
const TechLogo: React.FC<{ name: string; icon: React.ReactNode; color: string }> = ({ 
  name, 
  icon, 
  color 
}) => (
  <div className="flex flex-col items-center justify-center group p-2 transition-all duration-300 hover:scale-110">
    <div className={`mb-2 p-3 rounded-lg bg-cyber-darker/50 text-${color} transition-all duration-300 group-hover:shadow-lg group-hover:shadow-${color}/20`}>
      {icon}
    </div>
    <span className="text-xs text-gray-400 group-hover:text-white transition-all duration-300">{name}</span>
  </div>
);

const AboutSection: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState('');
  
  const skills = [
    { 
      id: 'frontend', 
      name: 'Frontend', 
      icon: <Monitor size={24} />, 
      color: 'cyber-blue', 
      technologies: ['React', 'HTML', 'CSS', 'JavaScript'] 
    },
    { 
      id: 'backend', 
      name: 'Backend', 
      icon: <Server size={24} />, 
      color: 'cyber-pink', 
      technologies: ['Java', 'Python', 'Node.js'] 
    },
    { 
      id: 'database', 
      name: 'Database', 
      icon: <Database size={24} />, 
      color: 'cyber-green', 
      technologies: ['MySQL', 'MongoDB', 'PostgreSQL'] 
    },
    { 
      id: 'gamedev', 
      name: 'Game Dev', 
      icon: <Smartphone size={24} />, 
      color: 'cyber-purple', 
      technologies: ['C#', 'Unity', 'Blender'] 
    },
    { 
      id: 'devops', 
      name: 'DevOps', 
      icon: <Hexagon size={24} />, 
      color: 'cyber-orange', 
      technologies: ['AWS', 'Git', 'GitHub'] 
    },
  ];

  // Tech logos mapping with more accurate branding colors
  const techLogos = {
    // Frontend
    'React': { icon: <Box size={24} />, color: 'sky-400' },
    'HTML': { icon: <FileCode size={24} />, color: 'orange-500' },
    'CSS': { icon: <Braces size={24} />, color: 'blue-500' },
    'JavaScript': { icon: <Code size={24} />, color: 'yellow-400' },
    
    // Backend
    'Java': { icon: <Code size={24} />, color: 'orange-600' },
    'Python': { icon: <Code size={24} />, color: 'blue-500' },
    'Node.js': { icon: <Server size={24} />, color: 'green-500' },
    
    // Database
    'MySQL': { icon: <Database size={24} />, color: 'blue-600' },
    'MongoDB': { icon: <Database size={24} />, color: 'green-500' },
    'PostgreSQL': { icon: <Database size={24} />, color: 'blue-400' },
    
    // Game Dev
    'C#': { icon: <Code size={24} />, color: 'purple-600' },
    'Unity': { icon: <Box size={24} />, color: 'gray-400' },
    'Blender': { icon: <Box size={24} />, color: 'orange-500' },
    
    // DevOps
    'AWS': { icon: <Cloud size={24} />, color: 'orange-400' },
    'Git': { icon: <GitBranch size={24} />, color: 'orange-600' },
    'GitHub': { icon: <Github size={24} />, color: 'white' },
  };

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
              Hey there! I'm a Java Developer and Game Developer with a passion for building dynamic and interactive applications. I specialize in Java-based web development and game design, always striving to create seamless and engaging user experiences.
            </p>
            <p className="text-gray-400">
              With a strong foundation in Java, front-end and back-end development, and game mechanics, I love bringing ideas to life—whether it's crafting web applications or designing immersive gameplay.
              When I'm not coding, I enjoy learning new technologies, experimenting with creative design, and pushing the boundaries of what's possible in development. Let's connect and build something awesome!
            </p>
          </div>
        </div>
        
        {/* Tech Stack Section - Featured in grid */}
        <div className="glass-card p-8 mb-16 border border-cyber-blue/30">
          <h3 className="text-2xl font-bold mb-8 text-center text-cyber-blue">My Tech Stack</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
            {Object.entries(techLogos).map(([name, {icon, color}]) => (
              <TechLogo key={name} name={name} icon={icon} color={color} />
            ))}
          </div>
        </div>
        
        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.slice(0, 3).map((skill) => (
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
              
              <div className="flex flex-wrap gap-3 mt-4">
                {skill.technologies.map((tech, i) => (
                  <Badge key={i} className={`bg-${techLogos[tech].color}/20 text-${techLogos[tech].color} hover:bg-${techLogos[tech].color}/30`}>
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {skills.slice(3).map((skill) => (
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
              
              <div className="flex flex-wrap gap-3 mt-4">
                {skill.technologies.map((tech, i) => (
                  <Badge key={i} className={`bg-${techLogos[tech].color}/20 text-${techLogos[tech].color} hover:bg-${techLogos[tech].color}/30`}>
                    {tech}
                  </Badge>
                ))}
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
