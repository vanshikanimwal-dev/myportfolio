
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
  Box,
  Briefcase,
  Award,
  GraduationCap,
  Calendar 
} from 'lucide-react';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Card, CardContent } from './ui/card';

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
          <Card className="glass-card border border-cyber-blue/30 bg-transparent">
            <CardContent className="p-0">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-8 text-center text-cyber-blue flex items-center justify-center">
                  <Briefcase className="mr-2" size={24} />
                  My Journey
                </h3>

                <div className="space-y-8">
                  <div className="relative group">
                    <div className="flex items-start">
                      <div className="relative mr-4">
                        <div className="w-14 h-14 rounded-full flex items-center justify-center bg-cyber-pink/20 border border-cyber-pink/50 shadow-lg shadow-cyber-pink/20 group-hover:shadow-cyber-pink/40 transition-all duration-300">
                          <Briefcase className="text-cyber-pink" size={24} />
                        </div>
                        <div className="absolute top-14 bottom-0 left-1/2 w-1 bg-gradient-to-b from-cyber-pink to-transparent h-full transform -translate-x-1/2"></div>
                      </div>
                      
                      <div className="flex-1 glass-card p-6 border border-cyber-pink/30 group-hover:border-cyber-pink/60 transition-all duration-300">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-xl font-bold text-white group-hover:text-cyber-pink transition-colors duration-300">Java Developer</h4>
                          <Badge className="bg-cyber-pink/20 text-cyber-pink hover:bg-cyber-pink/30 flex items-center">
                            <Calendar className="mr-1" size={14} />
                            2022 - Present
                          </Badge>
                        </div>
                        <p className="text-gray-400 mb-3">Cognyfiz</p>
                        <p className="text-gray-400">
                          Developing Java-based applications and solutions with a focus on maintainability and performance.
                          Implementing RESTful APIs and working with Spring Boot ecosystem.
                          Collaborating with cross-functional teams to deliver high-quality software products.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Badge className="bg-orange-600/20 text-orange-600">Java</Badge>
                          <Badge className="bg-green-500/20 text-green-500">Spring Boot</Badge>
                          <Badge className="bg-blue-500/20 text-blue-500">REST APIs</Badge>
                          <Badge className="bg-purple-600/20 text-purple-600">Microservices</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <div className="flex items-start">
                      <div className="relative mr-4">
                        <div className="w-14 h-14 rounded-full flex items-center justify-center bg-cyber-pink/20 border border-cyber-pink/50 shadow-lg shadow-cyber-pink/20 group-hover:shadow-cyber-pink/40 transition-all duration-300">
                          <Briefcase className="text-cyber-pink" size={24} />
                        </div>
                        <div className="absolute top-14 bottom-0 left-1/2 w-1 bg-gradient-to-b from-cyber-pink to-transparent h-full transform -translate-x-1/2"></div>
                      </div>
                      
                      <div className="flex-1 glass-card p-6 border border-cyber-pink/30 group-hover:border-cyber-pink/60 transition-all duration-300">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-xl font-bold text-white group-hover:text-cyber-pink transition-colors duration-300">Senior Java Developer</h4>
                          <Badge className="bg-cyber-pink/20 text-cyber-pink hover:bg-cyber-pink/30 flex items-center">
                            <Calendar className="mr-1" size={14} />
                            2020 - 2022
                          </Badge>
                        </div>
                        <p className="text-gray-400 mb-3">TechCorp Solutions</p>
                        <p className="text-gray-400">
                          Leading development of enterprise Java applications and microservices architecture. 
                          Mentoring junior developers and implementing CI/CD pipelines for streamlined deployment.
                          Working with Spring Boot, Hibernate, and Angular for full-stack solutions.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Badge className="bg-sky-400/20 text-sky-400">Java</Badge>
                          <Badge className="bg-blue-500/20 text-blue-500">Spring</Badge>
                          <Badge className="bg-orange-500/20 text-orange-500">Microservices</Badge>
                          <Badge className="bg-green-500/20 text-green-500">REST APIs</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <div className="flex items-start">
                      <div className="relative mr-4">
                        <div className="w-14 h-14 rounded-full flex items-center justify-center bg-cyber-blue/20 border border-cyber-blue/50 shadow-lg shadow-cyber-blue/20 group-hover:shadow-cyber-blue/40 transition-all duration-300">
                          <Monitor className="text-cyber-blue" size={24} />
                        </div>
                        <div className="absolute top-14 bottom-0 left-1/2 w-1 bg-gradient-to-b from-cyber-blue to-transparent h-full transform -translate-x-1/2"></div>
                      </div>
                      
                      <div className="flex-1 glass-card p-6 border border-cyber-blue/30 group-hover:border-cyber-blue/60 transition-all duration-300">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-xl font-bold text-white group-hover:text-cyber-blue transition-colors duration-300">Full Stack Developer</h4>
                          <Badge className="bg-cyber-blue/20 text-cyber-blue hover:bg-cyber-blue/30 flex items-center">
                            <Calendar className="mr-1" size={14} />
                            2018 - 2020
                          </Badge>
                        </div>
                        <p className="text-gray-400 mb-3">WebFront Interactive</p>
                        <p className="text-gray-400">
                          Developed responsive web applications using React and Node.js.
                          Implemented RESTful APIs and integrated with third-party services.
                          Collaborated with designers to create intuitive user interfaces and experiences.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Badge className="bg-sky-400/20 text-sky-400">React</Badge>
                          <Badge className="bg-green-500/20 text-green-500">Node.js</Badge>
                          <Badge className="bg-yellow-400/20 text-yellow-400">JavaScript</Badge>
                          <Badge className="bg-blue-600/20 text-blue-600">MySQL</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <div className="flex items-start">
                      <div className="relative mr-4">
                        <div className="w-14 h-14 rounded-full flex items-center justify-center bg-cyber-green/20 border border-cyber-green/50 shadow-lg shadow-cyber-green/20 group-hover:shadow-cyber-green/40 transition-all duration-300">
                          <GraduationCap className="text-cyber-green" size={24} />
                        </div>
                      </div>
                      
                      <div className="flex-1 glass-card p-6 border border-cyber-green/30 group-hover:border-cyber-green/60 transition-all duration-300">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-xl font-bold text-white group-hover:text-cyber-green transition-colors duration-300">Computer Science Degree</h4>
                          <Badge className="bg-cyber-green/20 text-cyber-green hover:bg-cyber-green/30 flex items-center">
                            <Calendar className="mr-1" size={14} />
                            2012 - 2016
                          </Badge>
                        </div>
                        <p className="text-gray-400 mb-3">Tech University</p>
                        <p className="text-gray-400">
                          Bachelor's degree in Computer Science with a focus on software engineering and game development.
                          Specialized in Java programming, data structures, and algorithms.
                          Senior project: Developed a 3D game using Unity and C#.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Badge className="bg-orange-600/20 text-orange-600">Java</Badge>
                          <Badge className="bg-purple-600/20 text-purple-600">C#</Badge>
                          <Badge className="bg-gray-400/20 text-gray-400">Unity</Badge>
                          <Badge className="bg-blue-500/20 text-blue-500">Algorithms</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
