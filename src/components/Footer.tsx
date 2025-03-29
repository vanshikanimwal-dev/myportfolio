
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cyber-darker py-10 border-t border-cyber-blue/20">
      <div className="container px-4 mx-auto">
        <div className="text-center">
          <div className="text-cyber-blue text-2xl font-bold mb-4 neon-text">
            <span className="text-cyber-pink">Cyber</span>Portfolio
          </div>
          
          <p className="text-gray-400 mb-6">
            Crafting digital experiences with code and creativity
          </p>
          
          <div className="flex items-center justify-center space-x-6 mb-8">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-cyber-blue transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 flex items-center justify-center">
              <span>© {currentYear} Your Name. All rights reserved.</span>
              <span className="mx-2">|</span>
              <span className="flex items-center">
                Made with <Heart size={14} className="mx-1 text-cyber-pink" /> in React
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
