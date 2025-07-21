import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const Timeline: React.FC = () => {
  const timelineData = [
    {
      week: "April 21 - May 2",
      title: "Workbench Unboxing & Setup",
      description: "Unboxing and setting up the workbench for development activities.",
      highlights: ["Workbench assembly", "Initial configuration", "Tool installation"]
    },
    {
      week: "May 5 - May 9",
      title: "Software Lab Setup",
      description: "Setting up the software lab environment for testing and development.",
      highlights: ["Lab infrastructure setup", "Software installation", "Environment validation"]
    },
    {
      week: "May 19 - May 30",
      title: "Test Automation Framework Setup",
      description: "Developing and configuring the test automation framework.",
      highlights: ["Framework design", "Tool integration", "Initial test cases"]
    },
    {
      week: "June 2 - June 6",
      title: "Integration Build Deployment Investigation",
      description: "Investigating deployment strategies for integration builds.",
      highlights: ["Deployment analysis", "Build optimization", "Documentation"]
    },
    {
      week: "June 9 - June 13",
      title: "TAF Testing After Deployment Investigation",
      description: "Testing the automation framework post deployment investigation.",
      highlights: ["Test execution", "Bug identification", "Performance metrics"]
    },
    {
      week: "June 16 - June 20",
      title: "GitHub Runner Software Investigation",
      description: "Exploring GitHub runner software for CI/CD pipelines.",
      highlights: ["Runner analysis", "Compatibility checks", "Workflow design"]
    },
    {
      week: "June 23 - July 2",
      title: "GitHub Runner Software Installation",
      description: "Installing GitHub runner software for enhanced CI/CD capabilities.",
      highlights: ["Installation procedures", "Configuration setup", "Validation"]
    },
    {
      week: "July 10 - July 21",
      title: "GitHub Runner Configuration",
      description: "Configuring GitHub runners for optimized CI/CD workflows.",
      highlights: ["Workflow setup", "Security implementation", "Performance tuning"]
    },
    {
      week: "June 30 - July 21",
      title: "GitHub Runner Testing",
      description: "Testing GitHub runners to ensure reliability and efficiency.",
      highlights: ["Test scenarios", "Bug fixes", "Performance validation"]
    },
    {
      week: "July 21 - July 30",
      title: "Integration Build Remote Deployment",
      description: "Deploying integration builds remotely for production readiness.",
      highlights: ["Deployment strategies", "Pipeline optimization", "Documentation"]
    },
    {
      week: "July 30 - August 15",
      title: "TAF Integration with GitHub",
      description: "Integrating the test automation framework with GitHub workflows.",
      highlights: ["Framework integration", "Workflow automation", "Final validation"]
    }
  ];

  return (
    <section id="timeline" className="section-padding bg-gray-50">
      <div className="container-desktop">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Internship Timeline</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A journey through a summer of learning, building, and implementing software engineering solutions
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
