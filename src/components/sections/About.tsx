import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white pt-20 pb-20 md:pt-32 md:pb-32">
      <div className="container-desktop">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet the Interns</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            You likely remember us, but just in case, here is a quick refresh on our backgrounds. 
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Judson's Bio */}
          <Card className="h-full shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center p-2">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">J</span>
              </div>
              <CardTitle className="text-2xl text-primary">Judson Hartman</CardTitle>
              <p className="text-gray-600">Software Engineering Intern</p>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mt-6 pt-4 border-t">
                <h4 className="font-semibold text-primary mb-2">Education:</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>University:</strong> University of Minnesota</p>
                  <p><strong>Major:</strong> Computer Science</p>
                  <p><strong>Expected Graduation:</strong> Fall 2025</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t space-y-2">
                <h4 className="font-semibold text-primary">Interests Outside of Work:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Basketball (playing and watching)</li>
                  <li>• Cars</li>
                  <li>• Travel</li>
                  <li>• Cooking</li>
                  <li>• Video Games</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Tom's Bio */}
          <Card className="h-full shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center p-2">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">T</span>
              </div>
              <CardTitle className="text-2xl text-primary">Tom Stevenson</CardTitle>
              <p className="text-gray-600">Software Engineering Intern</p>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mt-6 pt-4 border-t">
                <h4 className="font-semibold text-primary mb-2">Education:</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>University:</strong> University of Minnesota</p>
                  <p><strong>Major:</strong> Computer Science</p>
                  <p><strong>Expected Graduation:</strong> Spring 2026</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t space-y-2">
                <h4 className="font-semibold text-primary">Interests Outside of Work:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Baseball, Basketball, and Hockey</li>
                  <li>• Chess</li>
                  <li>• Weightlifting</li>
                  <li>• Cooking</li>
                  <li>• French (Very much still learning)</li>
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
