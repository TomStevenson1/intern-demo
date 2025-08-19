import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const Timeline: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const timelineData = [
    {
      week: "April 21 - May 2",
      title: "Workbench Unboxing & Setup",
      description: "Unboxing and setting up the workbench to be used for the software lab.",
      highlights: ["Workbenches received", "Workbenches assembled", "Infrastructure completed"],
      image: `${process.env.PUBLIC_URL}/images/timeline/PLY_SW_Team_Layout.png`
    },
    {
      week: "May 5 - May 9",
      title: "Software Lab Setup",
      description: "Completing setup of the software lab environment for testing and demos.",
      highlights: ["IntraSight systems setup", "Software installed on test systems", "Manual testing ready"],
      image: `${process.env.PUBLIC_URL}/images/timeline/lab_demo.png`
    },
    {
      week: "May 19 - May 30",
      title: "Test Automation Framework Setup",
      description: "Configuring the test automation framework (TAF) for use on our systems.",
      highlights: ["Automation framework setup", "Ready to execute TAF tests"],
      image: `${process.env.PUBLIC_URL}/images/timeline/TAF.gif`
    },
    {
      week: "June 2 - June 6",
      title: "Integration Build Deployment Investigation",
      description: "Investigating deployment strategies for software integration builds on the IntraSight platform.",
      highlights: ["Investigated available deployment tools", "Evaluated deployment processes", "Documented processes"],
      image: `${process.env.PUBLIC_URL}/images/timeline/DeploymentInvestigation.png`
    },
    {
      week: "June 9 - June 13",
      title: "TAF Testing Investigation",
      description: "Testing the automation framework post deployment investigation.",
      highlights: ["Identified test cases", "Bug identification", "Performance metrics"],
      image: `${process.env.PUBLIC_URL}/images/timeline/TafInvestigation.png`
    },
    {
      week: "June 16 - June 20",
      title: "GitHub Runner Software Investigation",
      description: "Exploring GitHub runner software for CI/CD pipelines.",
      highlights: ["Received runner computers", "Obtained software set", "Developed use cases"],
      csvData: [
        { vendorName: "7-Zip", softwareName: "7-Zip", softwareVersionName: "19.00 (x64)", optional: "" },
        { vendorName: "Adobe Systems Incorporated", softwareName: "Adobe Reader", softwareVersionName: "11.0.23", optional: "" },
        { vendorName: "Bullseye Testing Technology", softwareName: "Bullseye Coverage", softwareVersionName: "8.17.1", optional: "" },
        { vendorName: "CMake", softwareName: "CMake", softwareVersionName: "3.10.0 (x64)", optional: "" },
        { vendorName: "CollabNet", softwareName: "TortoiseSVN", softwareVersionName: "1.9.7.27907 (x64)", optional: "" },
        { vendorName: "Coverity Incorporated", softwareName: "Coverity Desktop Analysis", softwareVersionName: "2021.9.0", optional: "" },
        { vendorName: "Coverity Incorporated", softwareName: "Coverity Desktop for Visual Studio 2012-2019", softwareVersionName: "2021.9.0", optional: "" },
        { vendorName: "Doxygen", softwareName: "DoxyGen", softwareVersionName: "1.5.4", optional: "" },
        { vendorName: "Github Inc", softwareName: "Git", softwareVersionName: "2.26.2", optional: "" },
        { vendorName: "Gnoso Incorporated", softwareName: "NCover", softwareVersionName: "3.4.16.6924 (X64)", optional: "" },
        { vendorName: "Microsoft Corporation", softwareName: "Azure Pipelines Agent [IGTD - IGT-CI]", softwareVersionName: "2.153.1", optional: "" },
        { vendorName: "Microsoft Corporation", softwareName: "Servicepacks .NET Framework 1.1", softwareVersionName: "SP1", optional: "" },
        { vendorName: "Microsoft Corporation", softwareName: "Debugging Tools for Windows (x86)", softwareVersionName: "6.12.2.633", optional: "" },
        { vendorName: "Microsoft Corporation", softwareName: "Visual Studio Professional 2022 LTSC 17.0", softwareVersionName: "17.0.32126.317 (17.0.6)", optional: "yes" },
        { vendorName: "Microsoft Corporation", softwareName: "Debugging Tools for Windows (x64)", softwareVersionName: "6.12.2.633", optional: "" },
        { vendorName: "Microsoft Corporation", softwareName: "NET Framework Redistributable package", softwareVersionName: "4.8.1 Developer Pack (x86 / x64)", optional: "" },
        { vendorName: "Microsoft Corporation", softwareName: "Visual Studio Professional 2015 With Update 3", softwareVersionName: "14.0.25420.1", optional: "" },
        { vendorName: "Microsoft Corporation", softwareName: "Hotfix for Microsoft Visual Studio 2015", softwareVersionName: "KB3165756", optional: "" },
        { vendorName: "Microsoft Corporation", softwareName: "NET Framework Redistributable package", softwareVersionName: "4.6.2 Developer Pack (x86 / X64)", optional: "" },
        { vendorName: "Microsoft Corporation", softwareName: "Platform/Windows SDK", softwareVersionName: "Windows 10 (10.1.15063.400)", optional: "" },
        { vendorName: "Microsoft Corporation", softwareName: "NET Framework Redistributable package", softwareVersionName: "4.7 Developer Pack (x86 / x64)", optional: "" },
        { vendorName: "Microsoft Corporation", softwareName: "Platform/Windows SDK", softwareVersionName: "Windows 10 (10.1.17763.132)", optional: "" },
        { vendorName: "Microsoft Corporation", softwareName: "Visual Studio 2017 Professional With Update 9", softwareVersionName: "15.9.28307.905 (15.9.17)", optional: "" },
        { vendorName: "Notepad PP", softwareName: "Notepad PP", softwareVersionName: "7.6.4 (x64)", optional: "" },
        { vendorName: "NuGet", softwareName: "NuGet CLI", softwareVersionName: "4.9.4", optional: "" },
        { vendorName: "Nvidia Corporation", softwareName: "CUDA Toolkit", softwareVersionName: "10.2.89 (x64)", optional: "" },
        { vendorName: "Nvidia Corporation", softwareName: "Graphics Driver", softwareVersionName: "451.48", optional: "" },
      ]
    },
    {
      week: "June 23 - July 2",
      title: "GitHub Runner Software Installation",
      description: "Installing GitHub runner software for enhanced CI/CD capabilities.",
      highlights: ["Installed software set on runners", "Configured runners for projects"],
      image: `${process.env.PUBLIC_URL}/images/timeline/RunnerSoftwareInstallation.png`
    },
    {
      week: "July 10 - July 21",
      title: "GitHub Runner Configuration",
      description: "Configuring GitHub runners for optimized CI/CD workflows.",
      highlights: ["Linked runners to GitHub", "Setup artifact servers"],
      image: `${process.env.PUBLIC_URL}/images/timeline/RunnerConfiguration.png`
    },
    {
      week: "June 30 - July 21",
      title: "GitHub Runner Testing",
      description: "Testing GitHub runners to ensure reliability and efficiency.",
      highlights: ["Test GitHub Workflows", "Resolved Bugs", "Performance validated"],
      image: `${process.env.PUBLIC_URL}/images/timeline/RunnerTesting.png`
    },
    {
      week: "July 21 - August 6",
      title: "Integration Build Remote Deployment",
      description: "Deploying integration builds remotely for test systems in our software lab.",
      highlights: ["Implemented selected deployment strategies", "Linked with GitHub", "Increased team efficiency"],
      image: `${process.env.PUBLIC_URL}/images/timeline/Runner_Workflow.png`
    },
    {
      week: "August 6 - August 15",
      title: "TAF Integration with GitHub",
      description: "Integrating the test automation framework with GitHub workflows.",
      highlights: ["Implemented TAF integration with GitHub", "Created automation workflows"],
      image: `${process.env.PUBLIC_URL}/images/timeline/TAFWorkflow.png`
    }
  ];

  return (
    <section id="timeline" className="section-padding bg-gray-50">
      <div className="container-desktop">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Internship Timeline</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            What we worked on
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary h-full"></div>
          
          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <Card className={`w-5/12 shadow-lg hover:shadow-xl transition-shadow ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <div>
                        <CardTitle className="text-lg text-primary">{item.week}</CardTitle>
                        <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                      </div>
                    </div>
                    {/* Show image if present, otherwise show CSV table for GitHub Runner Software Investigation */}
                    {item.image && (
                      <div className="mt-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full rounded-lg shadow-md cursor-pointer"
                          style={{ objectFit: 'contain' }}
                          onClick={() => setSelectedImage(item.image)}
                        />
                      </div>
                    )}
                    {item.csvData && (
                      <div className="mt-4">
                        <div className="max-h-64 overflow-y-auto border border-gray-200 rounded-lg shadow-inner bg-white">
                          <table className="min-w-full text-xs text-left">
                            <thead>
                              <tr className="bg-primary text-white">
                                <th className="px-2 py-1 border">Vendor</th>
                                <th className="px-2 py-1 border">Software</th>
                                <th className="px-2 py-1 border">Version</th>
                                <th className="px-2 py-1 border">Optional</th>
                              </tr>
                            </thead>
                            <tbody>
                              {item.csvData.map((row, i) => (
                                <tr key={i} className="even:bg-gray-100">
                                  <td className="px-2 py-1 border">{row.vendorName}</td>
                                  <td className="px-2 py-1 border">{row.softwareName}</td>
                                  <td className="px-2 py-1 border">{row.softwareVersionName}</td>
                                  <td className="px-2 py-1 border">{row.optional}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{item.description}</p>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Key Highlights:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {item.highlights.map((highlight, idx) => (
                          <li key={idx}>• {highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative">
              <img
                src={selectedImage}
                alt="Enlarged"
                className="max-w-full max-h-full rounded-lg shadow-lg"
              />
              <button
                className="fixed top-4 right-4 bg-white rounded-full p-2 shadow-md z-50"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Timeline;
