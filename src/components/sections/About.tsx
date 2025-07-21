import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white pt-20 pb-20 md:pt-32 md:pb-32">
      <div className="container-desktop">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet the Interns</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Two passionate interns working on the PV IVUS project at Philips
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Judson's Bio */}
          <Card className="h-full shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">J</span>
              </div>
              <CardTitle className="text-2xl text-primary">Judson Hartman</CardTitle>
              <p className="text-gray-600">Software Engineering Intern</p>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-700 mb-6">
                Passionate software engineer dedicated to enhancing team velocity and 
                development efficiency. Focused on creating streamlined workflows and 
                automated solutions that accelerate delivery and reduce friction.
              </p>
              
              <div className="mt-6 pt-4 border-t">
                <h4 className="font-semibold text-primary mb-2">Education & Background:</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>University:</strong> University of Minnesota - College of Science and Engineering</p>
                  <p><strong>Major:</strong> Computer Science</p>
                  <p><strong>Expected Graduation:</strong> Fall 2025</p>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t space-y-2">
                <h4 className="font-semibold text-primary">Key Contributions:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Workbench Setup & Configuration</li>
                  <li>• Test Automation Framework Setup</li>
                  <li>• Software Remote Deployment</li>
                  <li>• PV IVUS integration test development</li>
                  <li>• Sync Playback Manual Testing</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Tom's Bio */}
          <Card className="h-full shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">T</span>
              </div>
              <CardTitle className="text-2xl text-primary">Tom Stevenson</CardTitle>
              <p className="text-gray-600">Software Engineering Intern</p>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-700 mb-6">
                Software engineer passionate about optimizing development infrastructure and 
                boosting team productivity. Building robust CI/CD systems and 
                optimization solutions that enable faster delivery.
              </p>
              
              <div className="mt-6 pt-4 border-t">
                <h4 className="font-semibold text-primary mb-2">Education & Background:</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>University:</strong>  University of Minnesota - College of Science and Engineering</p>
                  <p><strong>Major:</strong> Computer Science</p>
                  <p><strong>Expected Graduation:</strong> Spring 2026</p>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t space-y-2">
                <h4 className="font-semibold text-primary">Key Contributions:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Workbench Setup & Configuration</li>
                  <li>• GitHub Runner Setup & Configuration</li>
                  <li>• Artifactory Caching & Federation for NA Team Performance</li>
                  <li>• Sync Playback Manual Testing</li>
                  <li>• AI Feature Development</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
