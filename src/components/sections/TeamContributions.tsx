import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { CheckCircle, Users, Code, FileCheck } from 'lucide-react';

const TeamContributions: React.FC = () => {
  const contributions = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Scrum Team Collaboration",
      description: "Active participation in daily standups, sprint planning, and retrospectives",
      items: [
        "Facilitated knowledge sharing sessions with team members",
        "Contributed to backlog grooming and story estimation",
        "Mentored junior developers on best practices",
        "Led cross-functional collaboration between QA and development teams"
      ]
    },
    {
      icon: <FileCheck className="h-8 w-8 text-primary" />,
      title: "Manual Testing Support",
      description: "Comprehensive manual testing to ensure product quality",
      items: [
        "Executed exploratory testing scenarios for critical user journeys",
        "Created and maintained test cases for regression testing",
        "Identified and documented edge cases not covered by automation",
        "Performed user acceptance testing from end-user perspective"
      ]
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Code Quality & Reviews",
      description: "Maintaining high code standards through peer reviews and collaboration",
      items: [
        "Conducted thorough code reviews for team members",
        "Implemented coding standards and best practice guidelines",
        "Contributed to technical documentation and knowledge base",
        "Participated in architecture discussions and design decisions"
      ]
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Process Improvements",
      description: "Identifying and implementing workflow optimizations",
      items: [
        "Streamlined team communication through improved documentation",
        "Introduced new tools and practices to enhance productivity",
        "Organized team knowledge sharing sessions",
        "Contributed to continuous improvement initiatives"
      ]
    }
  ];

  return (
    <section id="team-contributions" className="section-padding bg-gray-50 pt-20 pb-20 md:pt-32 md:pb-32 relative overflow-hidden">
      <div className="container-desktop relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Team Contributions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Beyond individual projects, contributing to team success through collaboration, quality assurance, and process improvement
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
        <div className="mt-16">
          <Card className="shadow-lg bg-white">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">Team Impact Metrics</CardTitle>
              <p className="text-gray-600">Quantifiable contributions to team productivity and quality</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">25+</div>
                  <div className="text-lg font-semibold text-gray-900">Code Reviews</div>
                  <div className="text-sm text-gray-600">Completed for team members</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">15+</div>
                  <div className="text-lg font-semibold text-gray-900">Test Cases</div>
                  <div className="text-sm text-gray-600">Created and executed manually</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">8</div>
                  <div className="text-lg font-semibold text-gray-900">Process Improvements</div>
                  <div className="text-sm text-gray-600">Implemented with team</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">95%</div>
                  <div className="text-lg font-semibold text-gray-900">Sprint Participation</div>
                  <div className="text-sm text-gray-600">Active in all team ceremonies</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeamContributions;
