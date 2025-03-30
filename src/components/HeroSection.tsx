
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const particleRef = useRef<HTMLDivElement>(null);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  
  const roles = [
    "Java Developer",
    "Web Developer",
    "Game Developer",
    "Frontend Developer"
  ];

  useEffect(() => {
    // Parallax effect for particles
    const handleMouseMove = (e: MouseEvent) => {
      if (!particleRef.current) return;
      
      const particles = particleRef.current.querySelectorAll('.particle');
      const x = (window.innerWidth / 2 - e.clientX) / 25;
      const y = (window.innerHeight / 2 - e.clientY) / 25;
      
      particles.forEach((particle, i) => {
        const speed = i % 5 + 1;
        const htmlParticle = particle as HTMLElement;
        htmlParticle.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Role switcher
    const intervalId = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(intervalId);
    };
  }, [roles.length]);

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden bg-cyber-darker bg-cyber-grid"
    >
      {/* Background particles */}
      <div 
        ref={particleRef} 
        className="absolute inset-0 z-0"
      >
        {Array.from({ length: 15 }).map((_, i) => (
          <div 
            key={i}
            className={`particle absolute w-2 h-2 rounded-full opacity-20 ${
              i % 3 === 0 ? 'bg-cyber-blue' : i % 3 === 1 ? 'bg-cyber-pink' : 'bg-cyber-green'
            }`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="container px-4 mx-auto z-10 text-center">
        <div className="inline-block mb-4 px-6 py-1 border border-cyber-blue text-cyber-blue rounded-full text-sm">
          WELCOME TO MY CYBERPUNK WORLD
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
          <div className="inline-block">
            <span className="text-white">I'm </span>
            <span className="text-cyber-pink animate-pulse-glow">Vanshika Nimwal</span>
          </div>
        </h1>
        
        <div className="mx-auto max-w-2xl mb-8">
          <div className="mb-4 h-10 overflow-hidden">
            <motion.div
              key={currentRoleIndex}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-xl md:text-2xl text-cyber-blue"
            >
              {roles[currentRoleIndex]}
            </motion.div>
          </div>
          <p className="text-gray-400 mb-8">
            Crafting the future with code, one pixel at a time.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            className="cyber-button bg-cyber-blue hover:bg-cyber-blue/80 group"
          >
            <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
            <span className="relative text-white group-hover:text-white">View My Work</span>
          </Link>
          
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="cyber-button bg-transparent border border-cyber-pink hover:border-cyber-pink/50 group"
          >
            <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
            <span className="relative text-cyber-pink group-hover:text-white">Get In Touch</span>
          </Link>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-70}
          className="text-cyber-blue hover:text-cyber-green cursor-pointer transition-all"
        >
          <ArrowDown size={32} />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
