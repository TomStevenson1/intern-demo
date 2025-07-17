import React from 'react';
import { Button } from '../ui/button';

const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="header" className="relative min-h-screen flex items-center justify-center philips-gradient">
      <div className="container-desktop text-center text-white">
        <div className="mb-8">
          <h1 className="text-6xl font-bold mb-4">
            Judson & Tom
          </h1>
          <h2 className="text-2xl font-light mb-6">
            DevOps Engineering Interns
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Showcasing our internship journey at Philips, where we contributed to 
            modern DevOps practices, automation frameworks, and continuous integration pipelines.
          </p>
        </div>
        
        <div className="flex justify-center space-x-4">
          <Button 
            variant="outline" 
            size="lg"
            className="bg-white text-primary hover:bg-gray-100"
            onClick={() => scrollToSection('about')}
          >
            Meet the Team
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-white text-primary hover:bg-gray-100"
            onClick={() => scrollToSection('devops')}
          >
            Our Work
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
