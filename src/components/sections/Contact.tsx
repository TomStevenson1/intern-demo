import React from 'react';
import { Card, CardContent } from '../ui/card';
import { QrCode } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-transparent text-white">
      <div className="container-desktop">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl max-w-2xl mx-auto text-white/90">
             From maroon and gold to Philips blue, we're rowing faster together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Judson Contact */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-philips-blue to-blue-700 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                <span className="text-3xl font-bold text-white">J</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-white">Judson</h3>
              <p className="text-white/80 mb-6">Software Engineering Intern</p>
              
              {/* QR Code Section */}
              <div className="mb-6">
                <div className="flex items-center justify-center mb-3">
                  <QrCode className="w-5 h-5 mr-2 text-white/70" />
                  <span className="text-sm text-white/70">Scan to connect on LinkedIn</span>
                </div>
                <div className="bg-white p-3 rounded-lg inline-block shadow-lg">
                  <QRCodeSVG 
                    value="https://www.linkedin.com/in/judsonh/"
                    size={120}
                    level="M"
                    includeMargin={true}
                    bgColor="#FFFFFF"
                    fgColor="#000000"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tom Contact */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-philips-blue to-blue-700 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                <span className="text-3xl font-bold text-white">T</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-white">Tom</h3>
              <p className="text-white/80 mb-6">Software Engineering Intern</p>
              
              {/* QR Code Section */}
              <div className="mb-6">
                <div className="flex items-center justify-center mb-3">
                  <QrCode className="w-5 h-5 mr-2 text-white/70" />
                  <span className="text-sm text-white/70">Scan to connect on LinkedIn</span>
                </div>
                <div className="bg-white p-3 rounded-lg inline-block shadow-lg">
                  <QRCodeSVG 
                    value="https://www.linkedin.com/in/tomstevenson2/"
                    size={120}
                    level="M"
                    includeMargin={true}
                    bgColor="#FFFFFF"
                    fgColor="#000000"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Acknowledgments */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Acknowledgments</h3>
          <div className="text-white/90 max-w-3xl mx-auto mb-6 space-y-4">
            <p className="mb-4">
              We would like to express our sincere gratitude to the entire Plymouth Software team for their unwavering commitment to our growth and success. Throughout our co-op, we've been fortunate to learn and absorb an incredible amount of knowledge—an achievement made possible by the team's continuous guidance and support.
            </p>
            <p className="mb-4">
              A special thank you goes to Eby Peters and Kyle Peters for their exceptional and inspiring leadership. Their mentorship has significantly enriched our experience. By extension, we would also like to recognize Michael Golm for leading a remarkable software organization—we're eager to see how this team continues to drive innovation and create lasting memories.
            </p>
            <p>
              Finally, our gratitude extends to the broader Philips community, whose efforts have enabled an extraordinary experience, allowing us to grow both professionally and personally. We're truly excited to see what the future holds.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-white/20">
        <div className="container-desktop">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4">
              <button 
                className="text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 px-3 py-2 rounded-md text-sm"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
