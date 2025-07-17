import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-desktop">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet the Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Two passionate interns dedicated to advancing DevOps practices at Philips
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Judson's Bio */}
          <Card className="h-full shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">J</span>
              </div>
              <CardTitle className="text-2xl text-primary">Judson</CardTitle>
              <p className="text-gray-600">Software Engineering Intern</p>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-700 mb-4">
                Passionate about automation and infrastructure optimization. 
                Focused on implementing robust CI/CD pipelines and improving 
                development workflows.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-primary">Key Contributions:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• GitHub Runners Configuration</li>
                  <li>• Test Automation Framework</li>
                  <li>• Pipeline Optimization</li>
                </ul>
              </div>
              <div className="mt-4 pt-4 border-t">
                <p className="text-sm text-gray-500">
                  "Striving to make development processes more efficient and reliable."
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Tom's Bio */}
          <Card className="h-full shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">T</span>
              </div>
              <CardTitle className="text-2xl text-primary">Tom</CardTitle>
              <p className="text-gray-600">Software Engineering Intern</p>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-700 mb-4">
                Enthusiastic about cloud technologies and deployment strategies. 
                Specialized in workbench setup and remote deployment solutions 
                for scalable applications.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-primary">Key Contributions:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Workbench Setup & Configuration</li>
                  <li>• Remote Deployment Systems</li>
                  <li>• Environment Management</li>
                </ul>
              </div>
              <div className="mt-4 pt-4 border-t">
                <p className="text-sm text-gray-500">
                  "Building bridges between development and production environments."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
