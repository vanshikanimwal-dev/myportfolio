
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollPosition > 50 ? 'bg-cyber-darker/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-cyber-blue text-2xl font-bold neon-text">
          <span className="text-cyber-pink">Vanshika</span> Nimwal
        </div>
        
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="text-white hover:text-cyber-blue cursor-pointer transform hover:scale-110 transition-all duration-300 hover:text-shadow-neon"
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-white hover:text-cyber-blue"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-cyber-darker/90 backdrop-blur-md`}>
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="text-white py-2 text-center hover:text-cyber-blue cursor-pointer hover:text-shadow-neon"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
