import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { X, Building2, Cloud, GitBranch, Play, Shield, Search, Package, FileText, Users } from 'lucide-react';

const CICDSection: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<any>(null);

  const pipelineStages = [
    {
      id: 'requirements',
      title: 'Requirements',
      tool: 'IBM Rational',
      location: 'On-Prem',
      emoji: '🏢',
      icon: FileText,
      color: 'bg-blue-500',
      locationColor: 'bg-gray-600',
      description: 'Requirements gathering and management using IBM Rational DOORS for comprehensive requirement tracking and traceability.',
      details: [
        'Requirement definition and documentation',
        'Stakeholder requirement analysis',
        'Traceability matrix maintenance',
        'Change impact assessment',
        'Requirement validation and verification'
      ]
    },
    {
      id: 'backlog',
      title: 'Sprint Backlog',
      tool: 'Azure DevOps',
      location: 'On-Prem',
      emoji: '🏢',
      icon: Users,
      color: 'bg-blue-600',
      locationColor: 'bg-gray-600',
      description: 'Sprint planning and backlog management through Azure DevOps for agile project management and team collaboration.',
      details: [
        'User story creation and prioritization',
        'Sprint planning and estimation',
        'Team capacity planning',
        'Backlog refinement sessions',
        'Progress tracking and reporting'
      ]
    },
    {
      id: 'source',
      title: 'Source Code',
      tool: 'GitHub',
      location: 'AWS Cloud',
      emoji: '☁️',
      icon: GitBranch,
      color: 'bg-gray-700',
      locationColor: 'bg-blue-500',
      description: 'Source code management and version control using GitHub hosted on AWS infrastructure for secure and scalable development.',
      details: [
        'Git-based version control',
        'Branch protection rules',
        'Code review workflows',
        'Merge request management',
        'Repository security scanning'
      ]
    },
    {
      id: 'build',
      title: 'Build',
      tool: 'Self-hosted Runner',
      location: 'Mixed',
      emoji: '🏢 + ☁️',
      icon: Play,
      color: 'bg-green-600',
      locationColor: 'bg-gradient-to-r from-gray-600 to-blue-500',
      description: 'Automated build process using self-hosted GitHub runners deployed across on-premises and cloud infrastructure.',
      details: [
        'Automated compilation and packaging',
        'Multi-environment build support',
        'Dependency management',
        'Build artifact generation',
        'Build status notifications'
      ]
    },
    {
      id: 'analysis',
      title: 'Code Analysis',
      tool: 'Coverity + SonarQube',
      location: 'Mixed',
      emoji: '🏢 + ☁️',
      icon: Search,
      color: 'bg-purple-600',
      locationColor: 'bg-gradient-to-r from-gray-600 to-blue-500',
      description: 'Comprehensive code quality analysis using Coverity for static analysis and SonarQube for code quality metrics.',
      details: [
        'Static code analysis with Coverity',
        'Code quality metrics with SonarQube',
        'Security vulnerability detection',
        'Code coverage analysis',
        'Technical debt assessment'
      ]
    },
    {
      id: 'security',
      title: 'Security Scan',
      tool: 'BlackDuck',
      location: 'AWS Cloud',
      emoji: '☁️',
      icon: Shield,
      color: 'bg-red-600',
      locationColor: 'bg-blue-500',
      description: 'Open source security and license compliance scanning using BlackDuck to identify vulnerabilities and licensing issues.',
      details: [
        'Open source vulnerability scanning',
        'License compliance checking',
        'Dependency risk assessment',
        'Security policy enforcement',
        'Automated remediation suggestions'
      ]
    },
    {
      id: 'artifacts',
      title: 'Build Artifacts',
      tool: 'JFrog Artifactory',
      location: 'AWS Cloud',
      emoji: '☁️',
      icon: Package,
      color: 'bg-orange-600',
      locationColor: 'bg-blue-500',
      description: 'Artifact repository management using JFrog Artifactory for secure storage and distribution of build artifacts.',
      details: [
        'Binary artifact storage',
        'Version management and tagging',
        'Access control and permissions',
        'Artifact promotion pipelines',
        'Repository federation and caching'
      ]
    }
  ];

  const getLocationIcon = (location: string) => {
    if (location === 'On-Prem') return <Building2 className="w-4 h-4" />;
    if (location === 'AWS Cloud') return <Cloud className="w-4 h-4" />;
    return (
      <div className="flex items-center space-x-1">
        <Building2 className="w-3 h-3" />
        <Cloud className="w-3 h-3" />
      </div>
    );
  };
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

          {/* CI/CD Pipeline Stages */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">CI/CD Pipeline Stage Details</CardTitle>
              <p className="text-gray-600">Click on any stage to see detailed information</p>
            </CardHeader>
            <CardContent>
              <div className="relative">
                {/* Pipeline Flow */}
                <div className="flex items-center justify-between overflow-x-auto pb-4">
                  {pipelineStages.map((stage, index) => (
                    <div key={stage.id} className="flex items-center">
                      {/* Stage Card */}
                      <div 
                        className="flex-shrink-0 cursor-pointer transform hover:scale-105 transition-all duration-200"
                        onClick={() => setSelectedStage(stage)}
                      >
                        <div className="bg-white border-2 border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg min-w-[140px] max-w-[140px]">
                          {/* Stage Icon */}
                          <div className={`w-12 h-12 ${stage.color} rounded-full flex items-center justify-center mx-auto mb-2`}>
                            <stage.icon className="w-6 h-6 text-white" />
                          </div>
                          
                          {/* Stage Title */}
                          <h4 className="font-semibold text-center text-sm text-gray-900 mb-1">
                            {stage.title}
                          </h4>
                          
                          {/* Tool */}
                          <p className="text-xs text-center text-gray-600 mb-2">
                            {stage.tool}
                          </p>
                          
                          {/* Location Badge */}
                          <div className={`${stage.locationColor} text-white rounded-full px-2 py-1 flex items-center justify-center space-x-1`}>
                            {getLocationIcon(stage.location)}
                            <span className="text-xs font-medium">{stage.emoji}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Arrow */}
                      {index < pipelineStages.length - 1 && (
                        <div className="flex-shrink-0 mx-2">
                          <div className="text-primary text-2xl">→</div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stage Detail Modal */}
          {selectedStage && (
            <div 
              className="fixed bg-black bg-opacity-50 flex items-center justify-center p-4"
              style={{ 
                zIndex: 9999,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                margin: 0
              }}
              onClick={() => setSelectedStage(null)}
            >
              <div 
                className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 ${selectedStage.color} rounded-full flex items-center justify-center`}>
                        <selectedStage.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{selectedStage.title}</h3>
                        <p className="text-gray-600">{selectedStage.tool}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedStage(null)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  
                  {/* Location Badge */}
                  <div className="mb-4">
                    <div className={`${selectedStage.locationColor} text-white rounded-full px-3 py-1 inline-flex items-center space-x-2 text-sm`}>
                      {getLocationIcon(selectedStage.location)}
                      <span>{selectedStage.location} {selectedStage.emoji}</span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-2">Description</h4>
                    <p className="text-gray-700">{selectedStage.description}</p>
                  </div>
                  
                  {/* Details */}
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Key Activities</h4>
                    <ul className="space-y-2">
                      {selectedStage.details.map((detail: string, index: number) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

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
