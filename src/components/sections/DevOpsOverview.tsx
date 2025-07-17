import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

const DevOpsOverview: React.FC = () => {
  return (
    <section id="devops" className="section-padding bg-white">
      <div className="container-desktop">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">DevOps Overview</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). 
            It aims to shorten the systems development life cycle and provide continuous delivery with high software quality.
          </p>
        </div>

        <Tabs defaultValue="workbench" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="workbench">Workbench Setup</TabsTrigger>
            <TabsTrigger value="runners">GitHub Runners</TabsTrigger>
            <TabsTrigger value="testing">Test Automation</TabsTrigger>
            <TabsTrigger value="deployment">Remote Deployment</TabsTrigger>
          </TabsList>

          <TabsContent value="workbench" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Workbench Setup & Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Standardizing development environments across teams to ensure consistency, 
                  reduce setup time, and minimize environment-related issues.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Key Components:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Docker containerization</li>
                      <li>• Development tool standardization</li>
                      <li>• Environment variable management</li>
                      <li>• Code editor configurations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Benefits Achieved:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 70% reduction in setup time</li>
                      <li>• Consistent development experience</li>
                      <li>• Reduced environment conflicts</li>
                      <li>• Improved team productivity</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="runners" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">GitHub Runners Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Implementing self-hosted GitHub Actions runners to provide more control over 
                  the CI/CD environment and reduce dependency on external resources.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Implementation:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Self-hosted runner deployment</li>
                      <li>• Security configuration</li>
                      <li>• Workflow optimization</li>
                      <li>• Resource management</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Results:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Faster build times</li>
                      <li>• Enhanced security control</li>
                      <li>• Cost optimization</li>
                      <li>• Custom environment support</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="testing" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Test Automation Framework</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Building comprehensive automated testing frameworks to ensure code quality, 
                  reduce manual testing effort, and catch issues early in the development cycle.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Framework Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Unit test automation</li>
                      <li>• Integration testing</li>
                      <li>• Quality gates implementation</li>
                      <li>• Test reporting & analytics</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Impact:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 90% test coverage achieved</li>
                      <li>• 60% reduction in bugs</li>
                      <li>• Faster feedback cycles</li>
                      <li>• Improved code reliability</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="deployment" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Remote Deployment of Avila Builds</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Implementing automated remote deployment strategies for Avila applications, 
                  ensuring consistent and reliable deployments across different environments.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Deployment Strategy:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Automated deployment pipelines</li>
                      <li>• Environment-specific configurations</li>
                      <li>• Rollback mechanisms</li>
                      <li>• Health monitoring</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Achievements:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Zero-downtime deployments</li>
                      <li>• 95% deployment success rate</li>
                      <li>• Reduced deployment time</li>
                      <li>• Enhanced system reliability</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default DevOpsOverview;
