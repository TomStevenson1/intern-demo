import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { TestCasesBarChart } from '../charts/TestCasesBarChart';
import { BuildTestPublishChart } from '../charts/BuildTestPublishChart';
import { DeploymentBuildsChart } from '../charts/DeploymentBuildsChart';
import { ROISection } from './ROISection';

const DevOpsOverview: React.FC = () => {
  return (
    <section id="roi" className="section-padding bg-white pt-20 pb-20 md:pt-32 md:pb-32">
      <div className="container-desktop">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Project Return on Investment</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Evaluating the impact and benefits achieved through our implemented solutions.
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
                <CardTitle className="text-2xl text-primary">Workbench Setup ROI</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="w-full">
                  <TestCasesBarChart />
                </div>
                <p className="text-gray-700 mt-4">
                  The workbench setup resulted in significant time savings and improved team productivity.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 70% reduction in setup time</li>
                  <li>• Consistent development environments</li>
                  <li>• Enhanced team collaboration</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="runners" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">GitHub Runners ROI</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ROISection />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="testing" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Test Automation ROI</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="h-64 w-full bg-gray-200 rounded-lg flex items-center justify-center p-4">
                  <span className="text-gray-500">Graph Placeholder</span>
                </div>
                <p className="text-gray-700 mt-4">
                  Automated testing frameworks improved code reliability and reduced manual effort.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 90% test coverage</li>
                  <li>• 60% reduction in bugs</li>
                  <li>• Faster feedback cycles</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="deployment" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Remote Deployment ROI</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="w-full">
                  <DeploymentBuildsChart />
                </div>
                <p className="text-gray-700 mt-4">
                  Remote deployment strategies ensured reliable and efficient application delivery.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Zero-downtime deployments</li>
                  <li>• 95% deployment success rate</li>
                  <li>• Reduced deployment time</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default DevOpsOverview;
