
import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ParticlesBackground from '../components/ParticlesBackground';

// Import required packages
<lov-add-dependency>framer-motion@latest</lov-add-dependency>
<lov-add-dependency>react-scroll@latest</lov-add-dependency>

const Index = () => {
  useEffect(() => {
    // Setting up the title
    document.title = "CyberPortfolio | Your Name";
    
    // Smooth scrolling setup for the whole page
    const html = document.querySelector('html');
    if (html) {
      html.style.scrollBehavior = 'smooth';
    }
    
    return () => {
      if (html) {
        html.style.scrollBehavior = '';
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark text-white overflow-x-hidden">
      {/* Background particles */}
      <ParticlesBackground />
      
      {/* Navigation */}
      <NavBar />
      
      {/* Main content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
