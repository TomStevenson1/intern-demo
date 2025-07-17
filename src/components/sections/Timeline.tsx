import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const Timeline: React.FC = () => {
  const timelineData = [
    {
      week: "Week 1-2",
      title: "Onboarding & Environment Setup",
      description: "Initial setup of development environments, understanding Philips infrastructure, and team introductions.",
      highlights: ["DevOps tool familiarization", "Security protocols training", "Project scope definition"]
    },
    {
      week: "Week 3-4",
      title: "Workbench Configuration",
      description: "Setting up and optimizing development workbenches for improved productivity and standardization.",
      highlights: ["Standardized development environments", "Tool integration", "Documentation creation"]
    },
    {
      week: "Week 5-7",
      title: "GitHub Runners & Automation",
      description: "Implementing and configuring GitHub Actions runners for enhanced CI/CD capabilities.",
      highlights: ["Self-hosted runner setup", "Workflow optimization", "Security implementation"]
    },
    {
      week: "Week 8-10",
      title: "Test Automation Framework",
      description: "Developing comprehensive testing frameworks to ensure code quality and reliability.",
      highlights: ["Automated testing pipelines", "Quality gates implementation", "Performance monitoring"]
    },
    {
      week: "Week 11-12",
      title: "Remote Deployment & Integration",
      description: "Implementing remote deployment solutions and finalizing CI/CD integration.",
      highlights: ["Avila builds deployment", "Production pipeline", "Final documentation"]
    }
  ];

  return (
    <section id="timeline" className="section-padding bg-gray-50">
      <div className="container-desktop">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Internship Timeline</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A journey through 12 weeks of learning, building, and implementing DevOps solutions
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary h-full"></div>
          
          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <Card className={`w-5/12 shadow-lg hover:shadow-xl transition-shadow ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <div>
                        <CardTitle className="text-lg text-primary">{item.week}</CardTitle>
                        <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{item.description}</p>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Key Highlights:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {item.highlights.map((highlight, idx) => (
                          <li key={idx}>• {highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
