import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { CheckCircle, Users, Code, FileCheck, Brain, TestTube, Code2, Database, TrendingUp } from 'lucide-react';
import { AikeaModelChart } from '../charts/AikeaModelChart';

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

  // GUI Component Dependency Graph Data (from DOT file)
  const guiDependencyData = {
    nodes: [
      // Main UI files that have connections
      { id: 'LiveBoom.ui', label: 'LiveBoom.ui', type: 'main', x: -200, y: 0, color: '#3b82f6' },
      { id: 'ReviewBoom.ui', label: 'ReviewBoom.ui', type: 'main', x: 0, y: 0, color: '#10b981' },
      
      // Common controls
      { id: 'LeftExpander.ui', label: 'LeftExpander.ui', type: 'control', x: 200, y: 0, color: '#f59e0b' },
      { id: 'HorizontalTrackBar.ui', label: 'HorizontalTrackBar.ui', type: 'control', x: 200, y: 50, color: '#f59e0b' },
      { id: 'TrackBarVert.ui', label: 'TrackBarVert.ui', type: 'control', x: 200, y: 100, color: '#f59e0b' },
      { id: 'TgcControls.ui', label: 'TgcControls.ui', type: 'control', x: 200, y: 150, color: '#f59e0b' },
      { id: 'MeasureExpander.ui', label: 'MeasureExpander.ui', type: 'control', x: 200, y: 200, color: '#f59e0b' },
      
      // Base components
      { id: 'AutoCollapseControl', label: 'AutoCollapseControl', type: 'base', x: 400, y: 0, color: '#8b5cf6' },
      { id: 'SideExpander', label: 'SideExpander', type: 'base', x: 400, y: 50, color: '#8b5cf6' },
      { id: 'ClickablePanel', label: 'ClickablePanel', type: 'base', x: 400, y: 100, color: '#8b5cf6' },
      { id: 'FadeInControl', label: 'FadeInControl', type: 'base', x: 400, y: 150, color: '#8b5cf6' },
      
      // Specialized controls
      { id: 'Sensitivity.ui', label: 'Sensitivity.ui', type: 'specialized', x: 200, y: 250, color: '#ef4444' },
      { id: 'PullbackRate.ui', label: 'PullbackRate.ui', type: 'specialized', x: 200, y: 300, color: '#ef4444' },
      { id: 'AdaptiveRingdown.ui', label: 'AdaptiveRingdown.ui', type: 'specialized', x: 200, y: 350, color: '#ef4444' },
      { id: 'AreaLabel.ui', label: 'AreaLabel.ui', type: 'specialized', x: 200, y: 400, color: '#ef4444' }
    ],
    links: [
      // LiveBoom dependencies
      { source: 'LiveBoom.ui', target: 'LeftExpander.ui', type: 'uses' },
      { source: 'LiveBoom.ui', target: 'HorizontalTrackBar.ui', type: 'uses' },
      { source: 'LiveBoom.ui', target: 'TrackBarVert.ui', type: 'uses' },
      { source: 'LiveBoom.ui', target: 'TgcControls.ui', type: 'uses' },
      { source: 'LiveBoom.ui', target: 'Sensitivity.ui', type: 'uses' },
      { source: 'LiveBoom.ui', target: 'PullbackRate.ui', type: 'uses' },
      { source: 'LiveBoom.ui', target: 'AdaptiveRingdown.ui', type: 'uses' },
      
      // ReviewBoom dependencies
      { source: 'ReviewBoom.ui', target: 'LeftExpander.ui', type: 'uses' },
      { source: 'ReviewBoom.ui', target: 'HorizontalTrackBar.ui', type: 'uses' },
      { source: 'ReviewBoom.ui', target: 'TrackBarVert.ui', type: 'uses' },
      { source: 'ReviewBoom.ui', target: 'TgcControls.ui', type: 'uses' },
      { source: 'ReviewBoom.ui', target: 'MeasureExpander.ui', type: 'uses' },
      { source: 'ReviewBoom.ui', target: 'AreaLabel.ui', type: 'uses' },
      
      // Control dependencies
      { source: 'LeftExpander.ui', target: 'SideExpander', type: 'inherits' },
      { source: 'HorizontalTrackBar.ui', target: 'AutoCollapseControl', type: 'inherits' },
      { source: 'TgcControls.ui', target: 'AutoCollapseControl', type: 'inherits' },
      { source: 'MeasureExpander.ui', target: 'ClickablePanel', type: 'inherits' },
      { source: 'AreaLabel.ui', target: 'FadeInControl', type: 'inherits' },
      { source: 'Sensitivity.ui', target: 'AutoCollapseControl', type: 'inherits' },
      { source: 'PullbackRate.ui', target: 'AutoCollapseControl', type: 'inherits' },
      { source: 'AdaptiveRingdown.ui', target: 'AutoCollapseControl', type: 'inherits' },
      
      // Base component inheritance
      { source: 'AutoCollapseControl', target: 'SideExpander', type: 'extends' }
    ]
  };

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
                  <div className="text-4xl font-bold text-primary">5</div>
                  <div className="text-lg font-semibold text-gray-900">Test Cases Created</div>
                  <div className="text-sm text-gray-600">To test and validate new features</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">16</div>
                  <div className="text-lg font-semibold text-gray-900">Sense Integration Tests</div>
                  <div className="text-sm text-gray-600">To add coverage for code changes</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">~19</div>
                  <div className="text-lg font-semibold text-gray-900">Confluence Page Contributions</div>
                  <div className="text-sm text-gray-600">Documented team processes and knowledge</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Projects Section with Tabs */}

        <Tabs defaultValue="ai-model" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="ai-model">AIKEA Development</TabsTrigger>
            <TabsTrigger value="dependency-diagrams">Dependency Diagrams</TabsTrigger>
          </TabsList>

          <TabsContent value="ai-model" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center">
                  <Brain className="h-8 w-8 text-primary mr-4" />
                  <div>
                    <CardTitle className="text-2xl text-primary">AIKEA Model Analysis</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="w-full">
                  <AikeaModelChart />
                </div>
                <div>
                  <p className="text-gray-700">Ported a statistical analysis module from AI Suite to ClearML to support the AIKEA team's migration to ClearML.</p>
                  <h4 className="font-semibold text-primary mt-4">Key Highlights:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Trained several convolutional neural networks</li>
                    <li>• Gained valuable experience in the MLops space</li>
                    <li>• Successfully migrated model training pipeline</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="dependency-diagrams" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center">
                  <Code2 className="h-8 w-8 text-primary mr-4" />
                  <div>
                    <CardTitle className="text-2xl text-primary">IVUS Dependency Diagram</CardTitle>
                    <p className="text-gray-600 mt-2">IVUS GUI Architecture - Component Relationship Analysis</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="w-full">
                  <div className="bg-gradient-to-br from-slate-50 to-gray-100 p-0 rounded-lg border-2 border-gray-200 min-h-[600px] relative overflow-auto">
                    <svg width="100%" height="600" viewBox="-320 -50 850 520" className="w-full h-full">
                      {/* Define arrow markers for different link types */}
                      <defs>
                        <marker id="arrowhead-uses" markerWidth="10" markerHeight="7" 
                         refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
                        </marker>
                        <marker id="arrowhead-inherits" markerWidth="10" markerHeight="7" 
                         refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="#dc2626" />
                        </marker>
                        <marker id="arrowhead-extends" markerWidth="10" markerHeight="7" 
                         refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="#7c3aed" />
                        </marker>
                      </defs>
                      
                      {/* Render links first */}
                      {guiDependencyData.links.map((link, index) => {
                        const sourceNode = guiDependencyData.nodes.find(n => n.id === link.source);
                        const targetNode = guiDependencyData.nodes.find(n => n.id === link.target);
                        if (!sourceNode || !targetNode) return null;
                        
                        const linkColor = link.type === 'uses' ? '#6b7280' : 
                                         link.type === 'inherits' ? '#dc2626' : '#7c3aed';
                        const markerEnd = `url(#arrowhead-${link.type})`;
                        const strokeWidth = link.type === 'uses' ? '1' : '2';
                        
                        return (
                          <line
                            key={index}
                            x1={sourceNode.x}
                            y1={sourceNode.y}
                            x2={targetNode.x}
                            y2={targetNode.y}
                            stroke={linkColor}
                            strokeWidth={strokeWidth}
                            markerEnd={markerEnd}
                            opacity="0.7"
                            strokeDasharray={link.type === 'inherits' ? '5,5' : 'none'}
                          />
                        );
                      })}
                      
                      {/* Render nodes */}
                      {guiDependencyData.nodes.map((node, index) => {
                        const nodeWidth = node.type === 'main' ? 140 : 
                                         node.type === 'control' ? 120 : 100;
                        const nodeHeight = 35;
                        let nodeColor;
                        if (node.id === 'LiveBoom.ui') {
                          nodeColor = '#2563eb';
                        } else if (node.id === 'ReviewBoom.ui') {
                          nodeColor = '#1d4ed8';
                        } else if (node.type === 'control') {
                          nodeColor = '#6b7280';
                        } else if (node.type === 'specialized') {
                          nodeColor = '#111827';
                        } else {
                          nodeColor = '#374151';
                        }
                        
                        return (
                          <g key={index}>
                            <rect
                              x={node.x - nodeWidth/2}
                              y={node.y - nodeHeight/2}
                              width={nodeWidth}
                              height={nodeHeight}
                              rx="8"
                              fill={nodeColor}
                              stroke="#ffffff"
                              strokeWidth="2"
                              className="drop-shadow-md"
                            />
                            <text
                              x={node.x}
                              y={node.y + 4}
                              textAnchor="middle"
                              fontSize="10"
                              fill="#ffffff"
                              fontWeight="600"
                            >
                              {node.label.length > 16 ? node.label.substring(0, 13) + '...' : node.label}
                            </text>
                          </g>
                        );
                      })}
                      
                      {/* Legend */}
                      <g transform="translate(-300, 200)">
                        <rect x="0" y="0" width="220" height="150" fill="white" stroke="#d1d5db" strokeWidth="1" rx="6" />
                        <text x="10" y="20" fontSize="12" fontWeight="bold" fill="#1f2937">Component Types</text>
                        
                        <rect x="10" y="30" width="15" height="15" fill="#2563eb" />
                        <text x="30" y="42" fontSize="10" fill="#1f2937">Live UI Components</text>
                        
                        <rect x="10" y="50" width="15" height="15" fill="#1d4ed8" />
                        <text x="30" y="62" fontSize="10" fill="#1f2937">Review UI Components</text>
                        
                        <rect x="10" y="70" width="15" height="15" fill="#6b7280" />
                        <text x="30" y="82" fontSize="10" fill="#1f2937">Common Controls</text>
                        
                        <rect x="10" y="90" width="15" height="15" fill="#111827" />
                        <text x="30" y="102" fontSize="10" fill="#1f2937">Specialized Controls</text>
                        
                        <rect x="10" y="110" width="15" height="15" fill="#374151" />
                        <text x="30" y="122" fontSize="10" fill="#1f2937">Base Components</text>
                      </g>
                    </svg>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-gray-700 leading-relaxed">
                    The motivation for the dependency diagram dependency spider diagram is so that developers can understand 
                    the class dependencies of IVUS. This specific diagram showcases a subset of the relationships of within the IVUS 
                    GUI architecture. 
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

export default TeamContributions;
