import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { CheckCircle, Users, Code, FileCheck, Brain, TestTube, Code2, Database, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { ChartContainer, ChartTooltip } from '../ui/chart';

const TeamContributions: React.FC = () => {
  const contributions = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Manual Test Case Creation and Execution",
      description: "Thorough manual testing to ensure software quality",
      items: [
        "Create detailed manual Sync Playback test cases from requirements",
        "Execute regression test cases to identify defects",
        "Execute new feature test cases to validatew functionality",
        "Collaborate with testers and developers to identify issues and improvements"
      ]
    },
    {
      icon: <FileCheck className="h-8 w-8 text-primary" />,
      title: "Code Changes & Bug Fixes",
      description: "Making impactful contributions through code changes and bug fixes",
      items: [
        "Settings flag to boot into PV or CV clinical cases",
        "Merged and tested changes from other branches to ensure compatibility",
        "Identified and resolved bugs in newly implemented features",
        "Implemented functionality to have Sync Playback in Avila develop builds"
      ]
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Automated Integration Tests",
      description: "Using Sense Automation to enhance test coverage",
      items: [
        "Updated Sense Automation test cases to increase coverage in existing tests",
        "Created new automated tests for Live, Record, and Review modes",
        "Contributed to utility functions for efficient test execution",
        "Test Suite executed on all PRs to ensure stability"
      ]
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Team Enablers",
      description: "Enabling team success to increase velocity",
      items: [
        "Created FXD x-ray files for testing purposes",
        "Documented team process on Confluence to improve efficiency and understanding",
        "Deployed integration builds to facilitate testing velocity",
        "Filled in the gaps to meet sprint commitments wherever possible"
      ]
    }
  ];

  // Sample data for charts
  const integrationTestData = [
    { name: 'API Tests', passed: 45, failed: 2 },
    { name: 'Database Tests', passed: 32, failed: 1 },
    { name: 'Service Tests', passed: 28, failed: 0 },
    { name: 'E2E Tests', passed: 15, failed: 3 }
  ];

  const aiModelData = [
    { week: 'Week 1', accuracy: 65 },
    { week: 'Week 2', accuracy: 72 },
    { week: 'Week 3', accuracy: 78 },
    { week: 'Week 4', accuracy: 84 },
    { week: 'Week 5', accuracy: 87 },
    { week: 'Week 6', accuracy: 91 }
  ];

  const testCoverageData = [
    { name: 'Unit Tests', value: 85, color: '#0065d3' },
    { name: 'Integration Tests', value: 78, color: '#4285f4' },
    { name: 'Manual Tests', value: 92, color: '#34a853' }
  ];

  return (
    <section id="team-contributions" className="section-padding bg-white pt-16 pb-20 md:pt-24 md:pb-32 relative overflow-hidden">
      <div className="container-desktop relative z-10">
        {/* Team Contributions Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Contributions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Going beyond the project to contribute to team success
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {contributions.map((contribution, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-lg mr-4 flex-shrink-0">
                  {contribution.icon}
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl text-gray-900 mb-2">{contribution.title}</CardTitle>
                  <p className="text-gray-600 text-sm">{contribution.description}</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {contribution.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Impact Metrics */}
        <div className="mb-20">
          <Card className="shadow-lg bg-white">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">Team Impact Metrics</CardTitle>
              <p className="text-gray-600">Quantifiable contributions to team productivity and quality</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">47+</div>
                  <div className="text-lg font-semibold text-gray-900">Test Cases Executed</div>
                  <div className="text-sm text-gray-600">To ensure software quality</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">5+</div>
                  <div className="text-lg font-semibold text-gray-900">Test Cases Created</div>
                  <div className="text-sm text-gray-600">To test and validate new features</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">16+</div>
                  <div className="text-lg font-semibold text-gray-900">Sense Integration Tests</div>
                  <div className="text-sm text-gray-600">To add coverage for code changes</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">19+</div>
                  <div className="text-lg font-semibold text-gray-900">Confluence Contributions</div>
                  <div className="text-sm text-gray-600">Documented team processes and knowledge</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Projects Section with Tabs */}

        <Tabs defaultValue="integration-testing" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="integration-testing">Integration Testing</TabsTrigger>
            <TabsTrigger value="ai-model">AI Model Development</TabsTrigger>
            <TabsTrigger value="manual-testing">Manual Testing</TabsTrigger>
          </TabsList>

          <TabsContent value="integration-testing" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center">
                  <Code2 className="h-8 w-8 text-primary mr-4" />
                  <div>
                    <CardTitle className="text-2xl text-primary">Integration Testing Framework</CardTitle>
                    <p className="text-gray-600 mt-2">Building comprehensive integration tests to ensure system reliability</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="w-full">
                  <ChartContainer
                    config={{
                      passed: { label: "Passed", color: "#22c55e" },
                      failed: { label: "Failed", color: "#ef4444" }
                    }}
                    className="h-[300px] w-full"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={integrationTestData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis 
                          dataKey="name" 
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 12, fill: '#6b7280' }}
                        />
                        <YAxis 
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 12, fill: '#6b7280' }}
                        />
                        <ChartTooltip />
                        <Bar dataKey="passed" fill="#22c55e" name="Passed" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="failed" fill="#ef4444" name="Failed" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="bg-green-50 border-green-200">
                    <CardContent className="p-6 text-center">
                      <TestTube className="h-8 w-8 text-green-600 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-green-600 mb-1">120+</div>
                      <div className="text-sm text-green-700">Integration Tests Written</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-6 text-center">
                      <Database className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-blue-600 mb-1">8</div>
                      <div className="text-sm text-blue-700">Systems Integrated</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-purple-50 border-purple-200">
                    <CardContent className="p-6 text-center">
                      <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-purple-600 mb-1">95%</div>
                      <div className="text-sm text-purple-700">Test Success Rate</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-4 text-gray-900">Key Achievements</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Developed comprehensive API integration test suite covering all major endpoints</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Implemented database integration tests ensuring data consistency across services</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Created end-to-end workflow tests validating complete user journeys</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Established continuous integration pipeline for automated test execution</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ai-model" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center">
                  <Brain className="h-8 w-8 text-primary mr-4" />
                  <div>
                    <CardTitle className="text-2xl text-primary">AI Model Development</CardTitle>
                    <p className="text-gray-600 mt-2">Research and development of machine learning solutions for process optimization</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="w-full">
                  <ChartContainer
                    config={{
                      accuracy: { label: "Accuracy %", color: "#0065d3" }
                    }}
                    className="h-[300px] w-full"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={aiModelData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis 
                          dataKey="week" 
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 12, fill: '#6b7280' }}
                        />
                        <YAxis 
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 12, fill: '#6b7280' }}
                          domain={[60, 95]}
                        />
                        <ChartTooltip />
                        <Line 
                          type="monotone" 
                          dataKey="accuracy" 
                          stroke="#0065d3" 
                          strokeWidth={3}
                          dot={{ fill: "#0065d3", strokeWidth: 2, r: 6 }}
                          activeDot={{ r: 8, stroke: "#0065d3", strokeWidth: 2 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Model Specifications</h4>
                      <ul className="space-y-3">
                        <li className="flex justify-between">
                          <span className="text-gray-700">Model Type:</span>
                          <span className="font-semibold text-gray-900">Neural Network</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-700">Training Data:</span>
                          <span className="font-semibold text-gray-900">10K+ samples</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-700">Accuracy:</span>
                          <span className="font-semibold text-primary">91%</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-700">Use Case:</span>
                          <span className="font-semibold text-gray-900">Test Prediction</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Impact & Results</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          <span className="text-gray-700">25% reduction in test execution time</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          <span className="text-gray-700">Improved failure prediction accuracy</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          <span className="text-gray-700">Automated risk assessment</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          <span className="text-gray-700">Enhanced decision making process</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-4 text-gray-900">Technical Implementation</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Technologies Used:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Python with scikit-learn and TensorFlow</li>
                        <li>• Data preprocessing with pandas and numpy</li>
                        <li>• Model validation using cross-validation</li>
                        <li>• Integration with existing test infrastructure</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Key Features:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Real-time prediction capabilities</li>
                        <li>• Automated model retraining pipeline</li>
                        <li>• Performance monitoring dashboard</li>
                        <li>• Integration with CI/CD workflows</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="manual-testing" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center">
                  <TestTube className="h-8 w-8 text-primary mr-4" />
                  <div>
                    <CardTitle className="text-2xl text-primary">Manual Testing Excellence</CardTitle>
                    <p className="text-gray-600 mt-2">Comprehensive manual testing strategies ensuring quality and user experience</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="w-full flex justify-center">
                  <ChartContainer
                    config={{
                      value: { label: "Coverage %", color: "#0065d3" }
                    }}
                    className="h-[300px] w-full max-w-md"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={testCoverageData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {testCoverageData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <ChartTooltip 
                          content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                              const data = payload[0].payload;
                              return (
                                <div className="bg-white p-3 border rounded-lg shadow-lg">
                                  <p className="font-medium">{data.name}</p>
                                  <p className="text-sm text-primary">{data.value}% Coverage</p>
                                </div>
                              );
                            }
                            return null;
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  {testCoverageData.map((item, index) => (
                    <div key={index} className="flex items-center justify-center space-x-2">
                      <div 
                        className="w-4 h-4 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-sm text-gray-700">{item.name}: {item.value}%</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-orange-50 border-orange-200">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Testing Scope</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                          <span>Exploratory testing of new features</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                          <span>User acceptance testing scenarios</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                          <span>Cross-browser compatibility testing</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                          <span>Performance and load testing</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                          <span>Accessibility compliance verification</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-indigo-50 border-indigo-200">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Quality Metrics</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-700">Bug Detection Rate</span>
                          <span className="font-semibold text-indigo-600">15 bugs/week</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-700">Test Case Execution</span>
                          <span className="font-semibold text-indigo-600">50+ cases/day</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-700">Critical Issues Found</span>
                          <span className="font-semibold text-indigo-600">8 resolved</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-700">User Story Validation</span>
                          <span className="font-semibold text-indigo-600">100% coverage</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-4 text-gray-900">Manual Testing Methodology</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Testing Approaches:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Boundary value analysis and equivalence partitioning</li>
                        <li>• Error guessing and negative testing scenarios</li>
                        <li>• Usability and user experience evaluation</li>
                        <li>• Security testing for common vulnerabilities</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Documentation & Reporting:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Detailed test case documentation</li>
                        <li>• Bug reports with reproduction steps</li>
                        <li>• Test execution reports and metrics</li>
                        <li>• Risk assessment and mitigation strategies</li>
                      </ul>
                    </div>
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

export default TeamContributions;
