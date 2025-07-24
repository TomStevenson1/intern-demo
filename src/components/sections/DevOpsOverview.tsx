import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import { TestCasesBarChart } from '../charts/TestCasesBarChart';
import { WorkflowChart } from '../charts/WorkflowChart';
import { DeploymentBuildsChart } from '../charts/DeploymentBuildsChart';
import { TestCoverageLineChart } from '../charts/TestCoverageLineChart';
import { UsageFrequencyChart } from '../charts/UsageFrequencyChart';
import { PerformanceComparisonChart } from '../charts/PerformanceComparisonChart';

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
                  The workbench setup resulted in improved team productivity.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Provides a standardized testing environment</li>
                  <li>• Place for demos and collaboration</li>
                  <li>• Centralized location for all project-related resources</li>
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <UsageFrequencyChart />
                  <PerformanceComparisonChart />
                </div>
                <div className="w-full mt-6">
                  <WorkflowChart />
                </div>
                <p className="text-gray-700 mt-4">
                  Leveraging GitHub runners increased developer velocity through improved reliability and efficiency of CI/CD pipelines.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Automated test and coverage workflows to validate developer changes</li>
                  <li>• Reduced build failures blocking developers</li>
                  <li>• Provides more granular control over resource configuration and system optimization.</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="testing" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Test Automation ROI</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="w-full">
                  <TestCoverageLineChart />
                </div>
                <p className="text-gray-700 mt-4">
                  Test Automation Framework improved code reliability and reduced manual effort.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 1068 reliability test points</li>
                  <li>• Identify bugs earlier in the testing process</li>
                  <li>• 100% automation of testing workflows</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="deployment" className="space-y-6">
            <Card className="shadow-lg min-h-[700px] md:min-h-[800px]">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Remote Deployment ROI</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="w-full flex justify-center">
                  <div className="relative w-full">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {[
                          { 
                            before: { title: "Manual Build Selection", value: "~1 min", description: "Determine build to install" },
                            after: { title: "Automated Trigger", value: "<1 min", description: "Trigger build via GitHub with single action" }
                          },
                          { 
                            before: { title: "Download & USB Setup", value: "~2 min", description: "Log into artifactory/sharepoint, download build, get USB and image" },
                            after: { title: "Automated Download", value: "0 min", description: "Workflow automatically pulls specified build from artifactory" }
                          },
                          { 
                            before: { title: "Waiting Time", value: "30-60 min", description: "Download latest build and image USB for installation" },
                            after: { title: "Automated USB Imaging", value: "0 min", description: "Workflow moves install files to SUT and images USB automatically" }
                          },
                          { 
                            before: { title: "Manual Deployment", value: "45-60 min", description: "Kick off build, select build type, provide manual input during process" },
                            after: { title: "Automated Installation", value: "0 min", description: "Workflow initiates build type and proceeds with installation automatically" }
                          },
                          { 
                            before: { title: "Manual Configuration", value: "5-15 min", description: "Update settings, license, etc. (completely manual)" },
                            after: { title: "Automated Configuration", value: "0 min", description: "Configuration and settings set automatically, status reported to GitHub" }
                          }
                        ].map((item, index) => (
                          <CarouselItem key={index}>
                            <div className="p-1">
                              <Card>
                                <CardContent className="flex p-8 text-center">
                                  <div className="flex-1 border-r border-gray-200 pr-4">
                                    <h4 className="text-lg font-semibold text-gray-600 mb-2">Before</h4>
                                    <span className="text-3xl font-bold text-gray-600 block mb-2">{item.before.value}</span>
                                    <h3 className="text-lg font-semibold mb-2">{item.before.title}</h3>
                                    <p className="text-sm text-gray-600">{item.before.description}</p>
                                  </div>
                                  <div className="flex-1 pl-4">
                                    <h4 className="text-lg font-semibold text-primary mb-2">After</h4>
                                    <span className="text-3xl font-bold text-primary block mb-2">{item.after.value}</span>
                                    <h3 className="text-lg font-semibold mb-2">{item.after.title}</h3>
                                    <p className="text-sm text-gray-600">{item.after.description}</p>
                                  </div>
                                </CardContent>
                              </Card>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2" />
                      <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2" />
                    </Carousel>
                  </div>
                </div>
                <div className="w-full flex justify-center">
                  <div className="w-full">
                    <DeploymentBuildsChart />
                  </div>
                </div>
                <p className="text-gray-700 mt-4">
                  Automated deployment strategies introduce reliable and efficient integration build delivery to test systems.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Reduce scrum member downtime for builds</li>
                  <li>• Minimize manual intervention and potential for mistakes</li>
                  <li>• Enable faster iterations for testing and feedback</li>
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
