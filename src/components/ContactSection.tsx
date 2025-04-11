
import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    toast({
      title: "Message sent!",
      description: "I'll get back to you as soon as possible.",
    });
    
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  // Social media links with actual URLs
  const socialLinks = [
    { 
      name: 'instagram', 
      url: 'https://www.instagram.com/vanshikanimwal?igsh=NmFvcjY3dXpkN2dr', 
      icon: <Instagram size={18} /> 
    },
    { 
      name: 'twitter', 
      url: 'https://x.com/Vanshikanimwal?t=HyM32F94jeFhebQZuYcf9g&s=08', 
      icon: <Twitter size={18} /> 
    },
    { 
      name: 'linkedin', 
      url: 'https://www.linkedin.com/in/vanshika-nimwal-90ab24314', 
      icon: <Linkedin size={18} /> 
    },
    { 
      name: 'leetcode', 
      url: 'https://leetcode.com/u/vanni2005/', 
      icon: <Code size={18} /> 
    },
    { 
      name: 'hackerrank', 
      url: 'https://www.hackerrank.com/profile/vanshikanimwal21', 
      icon: <Code size={18} /> 
    }
  ];

  return (
    <section id="contact" className="py-20 bg-cyber-dark relative">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute h-px w-40 bg-cyber-blue/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.2 + Math.random() * 0.3,
              transform: `rotate(${Math.random() * 360}deg)`,
              filter: `blur(${Math.random() * 2}px)`,
              animation: `float ${5 + Math.random() * 15}s linear infinite`
            }}
          />
        ))}
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl md:text-4xl mb-4 inline-block relative group">
            <span className="text-white group-hover:animate-glitch">&lt;Contact Me /&gt;</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyber-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="glass-card p-8 border border-cyber-green/20">
            <h3 className="text-2xl font-bold mb-6 text-cyber-green">Get In Touch</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-white text-lg mb-2">Email</h4>
                <a href="mailto:contact@example.com" className="text-gray-400 hover:text-cyber-green transition-colors">
                  contact@example.com
                </a>
              </div>
              
              <div>
                <h4 className="text-white text-lg mb-2">Location</h4>
                <p className="text-gray-400">New York, USA</p>
              </div>
              
              <div>
                <h4 className="text-white text-lg mb-2">Follow Me</h4>
                <div className="flex flex-wrap gap-4 mt-2">
                  {socialLinks.map((social) => (
                    <a 
                      key={social.name}
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-600 text-gray-400 hover:text-cyber-blue hover:border-cyber-blue transition-all duration-300 group"
                      aria-label={social.name}
                    >
                      <span className="sr-only">{social.name}</span>
                      <div className="transform group-hover:scale-110 group-hover:animate-pulse-glow transition-all duration-300">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass-card p-8 border border-cyber-blue/20">
            <h3 className="text-2xl font-bold mb-6 text-cyber-blue">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-cyber-darker border border-gray-700 focus:border-cyber-blue rounded-md text-white outline-none transition-all duration-300 focus:neon-border"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-cyber-darker border border-gray-700 focus:border-cyber-blue rounded-md text-white outline-none transition-all duration-300 focus:neon-border"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-cyber-darker border border-gray-700 focus:border-cyber-blue rounded-md text-white outline-none transition-all duration-300 focus:neon-border resize-none"
                  placeholder="Your message"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`
                  cyber-button w-full relative group overflow-hidden
                  ${isSubmitted ? 'bg-cyber-green' : 'bg-cyber-blue hover:bg-cyber-blue/80'}
                  ${isSubmitting ? 'opacity-80' : 'opacity-100'}
                `}
              >
                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
                <span className="relative flex items-center justify-center text-white">
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : isSubmitted ? (
                    <span className="flex items-center"><Check size={18} className="mr-2" /> Message Sent!</span>
                  ) : (
                    <span className="flex items-center"><Send size={18} className="mr-2" /> Send Message</span>
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Import social media icons
import { Github, Twitter, Linkedin, Instagram, Code } from 'lucide-react';

export default ContactSection;
