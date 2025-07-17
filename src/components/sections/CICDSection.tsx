import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const CICDSection: React.FC = () => {
  return (
    <section id="cicd" className="section-padding bg-gray-50">
      <div className="container-desktop">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">CI/CD Pipeline & Architecture</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visualizing our continuous integration and deployment workflows, 
            including pipeline triggers and environment flow diagrams.
          </p>
        </div>

        <div className="space-y-8">
          {/* Pipeline Overview */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Pipeline Architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
                  <iframe
                    src="https://miro.com/app/live-embed/uXjVIh52_e8=/?moveToViewport=-2084,-1189,4168,2378&embedId=123456789"
                    className="absolute top-0 left-0 w-full h-full border-0 rounded-lg"
                    allowFullScreen
                    title="CI/CD Pipeline Architecture - Miro Board"
                  />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-sm text-gray-600">
                    Interactive CI/CD pipeline diagram showing our complete DevOps workflow
                  </p>
                  <a
                    href="https://miro.com/app/board/uXjVIh52_e8=/?utm_source=notification&utm_medium=email&utm_campaign=daily-updates&utm_content=view-board-cta&lid=tlcqi37mj8ty"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 text-sm font-medium underline"
                  >
                    Open Full Board →
                  </a>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Source Control</h4>
                  <p className="text-sm text-gray-600">
                    Code commits trigger automated pipeline execution
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Build & Test</h4>
                  <p className="text-sm text-gray-600">
                    Automated building, testing, and quality checks
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Deploy</h4>
                  <p className="text-sm text-gray-600">
                    Automated deployment to target environments
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Environment Flow */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Environment Flow</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6">
                <div className="flex-1 text-center">
                  <div className="bg-blue-100 p-4 rounded-lg mb-2">
                    <h4 className="font-semibold text-primary">Development</h4>
                    <p className="text-sm text-gray-600">Feature branches & local testing</p>
                  </div>
                </div>
                
                <div className="text-primary">→</div>
                
                <div className="flex-1 text-center">
                  <div className="bg-yellow-100 p-4 rounded-lg mb-2">
                    <h4 className="font-semibold text-yellow-700">Staging</h4>
                    <p className="text-sm text-gray-600">Integration testing & QA</p>
                  </div>
                </div>
                
                <div className="text-primary">→</div>
                
                <div className="flex-1 text-center">
                  <div className="bg-green-100 p-4 rounded-lg mb-2">
                    <h4 className="font-semibold text-green-700">Production</h4>
                    <p className="text-sm text-gray-600">Live deployment & monitoring</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pipeline Triggers */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Pipeline Triggers & Automation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-primary mb-4">Automated Triggers</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Push to main branch</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">Pull request creation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-sm">Scheduled nightly builds</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-sm">Manual deployment triggers</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-4">Quality Gates</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Code coverage &gt; 80%</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">All tests passing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-sm">Security scan approval</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-sm">Performance benchmarks met</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CICDSection;
