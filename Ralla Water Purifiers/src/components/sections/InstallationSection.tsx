import React from 'react';
import { Play } from 'lucide-react';

const InstallationSection: React.FC = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 pt-6">
            See How Easy It Is to Install a Ralla Purifier
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our purifiers are designed for quick and easy DIY installation, no technician required.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* YouTube Video Embed */}
          <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/kDg-0DbVsxQ"
              title="Water Purifier Installation Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="mt-10 text-center">
            <p className="text-lg text-gray-700 mb-6">
              Our installation process takes less than 30 minutes with no special tools required. 
              Each purifier comes with a comprehensive step-by-step guide.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-300"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationSection;