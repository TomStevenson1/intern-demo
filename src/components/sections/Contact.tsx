import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding philips-gradient text-white">
      <div className="container-desktop">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Interested in our work or have questions about our DevOps implementations? 
            We'd love to connect and share our experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Judson Contact */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">J</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Judson</h3>
              <p className="text-white/80 mb-4">DevOps Engineering Intern</p>
              <div className="space-y-2">
                <Button 
                  variant="outline" 
                  className="w-full bg-white/20 border-white/30 text-white hover:bg-white/30"
                >
                  GitHub Profile
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full bg-white/20 border-white/30 text-white hover:bg-white/30"
                >
                  LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Tom Contact */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">T</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Tom</h3>
              <p className="text-white/80 mb-4">DevOps Engineering Intern</p>
              <div className="space-y-2">
                <Button 
                  variant="outline" 
                  className="w-full bg-white/20 border-white/30 text-white hover:bg-white/30"
                >
                  GitHub Profile
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full bg-white/20 border-white/30 text-white hover:bg-white/30"
                >
                  LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Acknowledgments */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Acknowledgments</h3>
          <p className="text-white/90 max-w-3xl mx-auto mb-6">
            We would like to thank the Philips DevOps team for their mentorship and guidance 
            throughout this internship. Special thanks to our supervisors and colleagues who 
            provided invaluable insights and support in our learning journey.
          </p>
          <div className="flex justify-center space-x-6">
            <div className="text-center">
              <h4 className="font-semibold">Philips</h4>
              <p className="text-sm text-white/80">Innovation & Technology</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold">DevOps Team</h4>
              <p className="text-sm text-white/80">Mentorship & Guidance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-white/20">
        <div className="container-desktop">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-white/80">
                © 2025 Judson & Tom - Philips DevOps Internship Portfolio
              </p>
            </div>
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                size="sm"
                className="text-white/80 hover:text-white hover:bg-white/10"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Back to Top
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
