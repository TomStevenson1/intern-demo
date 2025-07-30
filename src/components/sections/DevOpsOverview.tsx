import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
} from '../ui/chart';
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
import FlowingStreaksBackground from '../FlowingStreaksBackground';

const DevOpsOverview: React.FC = () => {
  return (
    <section id="roi" className="section-padding bg-white pt-20 pb-20 md:pt-32 md:pb-32 relative overflow-hidden">
      <FlowingStreaksBackground />
      <div className="container-desktop relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Project Return on Investment</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Evaluating the impact and benefits achieved through our implemented solutions
          </p>
        </div>

        <Tabs defaultValue="runners" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="runners">GitHub Runners</TabsTrigger>
            <TabsTrigger value="testing">Test Automation</TabsTrigger>
            <TabsTrigger value="deployment">Remote Deployment</TabsTrigger>
            <TabsTrigger value="workbench">Workbench Setup</TabsTrigger>
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
              <CardContent className="space-y-6">
                {/* Top Section - Execution Time and Performance */}
                <div className="w-full">
                  <Card className="shadow-md hover:shadow-lg transition-all duration-300">
                    <CardHeader className="text-center">
                      <CardTitle className="text-xl text-primary">Test Automation Performance</CardTitle>
                      <p className="text-gray-600">Manual vs automated testing comparison</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <ChartContainer
                        config={{
                          time: { label: "Time (minutes)" },
                          manual: { label: "Manual Testing", color: "rgb(55, 65, 81)" },
                          automated: { label: "Automated (TAF)", color: "rgb(0, 101, 211)" },
                        }}
                        className="h-[200px] w-full"
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart 
                            data={[
                              { method: "Automated (TAF)", time: 2, fill: "rgb(0, 101, 211)" },
                              { method: "Manual Testing", time: 180, fill: "rgb(55, 65, 81)" }
                            ]} 
                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                            <XAxis 
                              dataKey="method" 
                              axisLine={false}
                              tickLine={false}
                              tick={{ fontSize: 12, fill: '#6b7280' }}
                            />
                            <YAxis 
                              axisLine={false}
                              tickLine={false}
                              tick={{ fontSize: 12, fill: '#6b7280' }}
                              label={{ value: 'Minutes', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fontSize: '12px', fill: '#6b7280' } }}
                            />
                            <ChartTooltip 
                              content={({ active, payload, label }) => {
                                if (active && payload && payload.length) {
                                  const data = payload[0].payload;
                                  return (
                                    <div className="bg-white p-3 border rounded-lg shadow-lg">
                                      <p className="font-medium">{label}</p>
                                      <p className="text-sm">Time: {data.time} minutes</p>
                                    </div>
                                  );
                                }
                                return null;
                              }}
                            />
                            <Bar dataKey="time" radius={[4, 4, 0, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                      
                      <div className="border-t pt-4">
                        <div className="grid grid-cols-3 gap-6 text-center">
                          <div>
                            <div className="text-3xl font-bold text-primary mb-2">
                              108
                            </div>
                            <div className="text-lg font-semibold text-gray-900 mb-1">
                              Requirements
                            </div>
                            <div className="text-sm text-gray-600">
                              Fully automated
                            </div>
                          </div>
                          <div>
                            <div className="text-3xl font-bold text-primary mb-2">
                              99%
                            </div>
                            <div className="text-lg font-semibold text-gray-900 mb-1">
                              Time Reduction
                            </div>
                            <div className="text-sm text-gray-600">
                              178 minutes saved per cycle
                            </div>
                          </div>
                          <div>
                            <div className="text-3xl font-bold text-primary mb-2">
                              2.2
                            </div>
                            <div className="text-lg font-semibold text-gray-900 mb-1">
                              Hours Saved
                            </div>
                            <div className="text-sm text-gray-600">
                              Per test cycle
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Bottom Section - Coverage Trends */}
                <div className="w-full">
                  <TestCoverageLineChart />
                </div>

                <p className="text-gray-700 mt-4">
                  Test Automation Framework significantly improved code reliability and reduced manual effort through comprehensive automation.
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
