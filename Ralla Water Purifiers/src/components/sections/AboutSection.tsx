import React from 'react';
import { Lightbulb, Leaf, Shield, ArrowRight } from 'lucide-react';
import { coreValues } from '../../data';

const AboutSection: React.FC = () => {
  // Function to render the appropriate icon
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'lightbulb':
        return <Lightbulb className="w-10 h-10 text-blue-600" />;
      case 'leaf':
        return <Leaf className="w-10 h-10 text-green-600" />;
      case 'shield':
        return <Shield className="w-10 h-10 text-indigo-600" />;
      default:
        return null;
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header with decorative element */}
        <div className="text-center mb-16 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-20 h-1 bg-blue-600 rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 pt-6">Our Story</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Pioneering sustainable water purification solutions for a better tomorrow
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <ArrowRight className="w-4 h-4 text-blue-600" />
              </span>
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To provide clean, safe drinking water for every Indian household through innovative, 
              affordable, and user-friendly water purification systems that minimize waste and environmental impact.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <ArrowRight className="w-4 h-4 text-blue-600" />
              </span>
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              A world where everyone has access to safe, clean, and sustainable water solutions. 
              We envision a future where water purification is affordable, accessible, and environmentally responsible.
            </p>
          </div>
        </div>

        {/* Founder Section */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg">
                <img 
                  src="/manoj.jpg" 
                  alt="Manoj Reddy Ralla" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-600 font-medium mb-4">
                  Founder & CEO
                </div>
                <h3 className="text-3xl font-bold text-blue-900 mb-4">Manoj Reddy Ralla</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  A mechanical engineer with over 5 years of experience in water purifier development, 
                  Manoj is passionate about creating innovative solutions that address India's unique water challenges.
                </p>
                <div className="flex gap-4">
                  <a href="#contact" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700">
                    Connect with Manoj <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-3xl font-bold text-blue-900 text-center mb-10">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-6">
                  {renderIcon(value.icon)}
                </div>
                <h4 className="text-xl font-semibold text-blue-900 mb-3">{value.title}</h4>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;