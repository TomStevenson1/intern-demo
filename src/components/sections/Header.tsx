import React from 'react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import FlowingStreaksBackground from '../FlowingStreaksBackground';

const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="header" className="relative min-h-screen flex items-center justify-center philips-gradient overflow-hidden">
      <FlowingStreaksBackground />
      
      <motion.div 
        className="container-desktop text-center text-white relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-6xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Judson & Tom
          </motion.h1>
          <motion.h2 
            className="text-2xl font-light mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Software Engineering Interns
          </motion.h2>

        </motion.div>
        
        <motion.div 
          className="flex justify-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Button 
            variant="outline" 
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 transition-colors duration-300"
            onClick={() => scrollToSection('about')}
          >
            Meet the Interns
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 transition-colors duration-300"
            onClick={() => scrollToSection('timeline')}
          >
            Learn About Our Work
          </Button>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;
