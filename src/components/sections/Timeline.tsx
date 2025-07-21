import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const Timeline: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const timelineData = [
    {
      week: "April 21 - May 2",
      title: "Workbench Unboxing & Setup",
      description: "Unboxing and setting up the workbench to be used for the software lab.",
      highlights: ["Workbenches received", "Workbenches assembled", "Infrastructure completed"],
      image: "/images/timeline/PLY_SW_Team_Layout.png"
    },
    {
      week: "May 5 - May 9",
      title: "Software Lab Setup",
      description: "Completing setup of the software lab environment for testing and demos.",
      highlights: ["IntraSight systems setup", "Software installed on test systems", "Manual testing ready"],
      image: "/images/timeline/lab_demo.png"
    },
    {
      week: "May 19 - May 30",
      title: "Test Automation Framework Setup",
      description: "Configuring the test automation framework (TAF) for use on our systems.",
      highlights: ["Automation framework setup", "Ready to execute TAF tests"],
      image: "" // Placeholder for image
    },
    {
      week: "June 2 - June 6",
      title: "Integration Build Deployment Investigation",
      description: "Investigating deployment strategies for software integration builds on the IntraSight platform.",
      highlights: ["Investigated available deployment tools", "Evaluated deployment processes", "Documented processes"],
      image: "/images/timeline/Runner_Workflow.png"
    },
    {
      week: "June 9 - June 13",
      title: "TAF Testing After Deployment Investigation",
      description: "Testing the automation framework post deployment investigation.",
      highlights: ["Identified test cases", "Bug identification", "Performance metrics"],
      image: "" // Placeholder for image
    },
    {
      week: "June 16 - June 20",
      title: "GitHub Runner Software Investigation",
      description: "Exploring GitHub runner software for CI/CD pipelines.",
      highlights: ["Received runner computers", "Obtained software set", "Developed use cases"],
      image: "" // Placeholder for image
    },
    {
      week: "June 23 - July 2",
      title: "GitHub Runner Software Installation",
      description: "Installing GitHub runner software for enhanced CI/CD capabilities.",
      highlights: ["Installed software set on runners", "Configured runners for projects"],
      image: "" // Placeholder for image
    },
    {
      week: "July 10 - July 21",
      title: "GitHub Runner Configuration",
      description: "Configuring GitHub runners for optimized CI/CD workflows.",
      highlights: ["Linked runners to GitHub", "Setup artifact servers"],
      image: "" // Placeholder for image
    },
    {
      week: "June 30 - July 21",
      title: "GitHub Runner Testing",
      description: "Testing GitHub runners to ensure reliability and efficiency.",
      highlights: ["Test GitHub Workflows", "Resolved Bugs", "Performance validated"],
      image: "" // Placeholder for image
    },
    {
      week: "July 21 - July 30",
      title: "Integration Build Remote Deployment",
      description: "Deploying integration builds remotely for test systems in our software lab.",
      highlights: ["Implemented selected deployment strategies", "Linked with GitHub", "Increased team efficiency"],
      image: "" // Placeholder for image
    },
    {
      week: "July 30 - August 15",
      title: "TAF Integration with GitHub",
      description: "Integrating the test automation framework with GitHub workflows.",
      highlights: ["Implemented TAF integration with GitHub", "Created automation workflows"],
      image: "" // Placeholder for image
    }
  ];

  return (
    <section id="timeline" className="section-padding bg-gray-50">
      <div className="container-desktop">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Internship Timeline</h2>
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
                    {item.image && (
                      <div className="mt-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full rounded-lg shadow-md cursor-pointer"
                          style={{ objectFit: 'contain' }}
                          onClick={() => setSelectedImage(item.image)}
                        />
                      </div>
                    )}
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

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative">
              <img
                src={selectedImage}
                alt="Enlarged"
                className="max-w-full max-h-full rounded-lg shadow-lg"
              />
              <button
                className="fixed top-4 right-4 bg-white rounded-full p-2 shadow-md z-50"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Timeline;
