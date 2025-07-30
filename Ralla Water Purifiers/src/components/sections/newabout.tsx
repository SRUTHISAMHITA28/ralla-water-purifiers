import React from 'react';
import { Lightbulb, Leaf, Shield } from 'lucide-react';
import { coreValues } from '../../data';

const iconMap: Record<string, JSX.Element> = {
  lightbulb: <Lightbulb className="w-12 h-12 text-blue-600 group-hover:text-blue-800 transition duration-300" />,
  leaf: <Leaf className="w-12 h-12 text-green-600 group-hover:text-green-800 transition duration-300" />,
  shield: <Shield className="w-12 h-12 text-indigo-600 group-hover:text-indigo-800 transition duration-300" />,
};

const NewAbout: React.FC = () => {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 pt-6">About Ralla</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transforming water purification for modern India with sustainable innovation and purpose-driven leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Mission, Vision, Community */}
          <div className="space-y-10">
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">Our Mission</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                To provide clean, safe drinking water for every Indian household through innovative, 
                affordable, and user-friendly systems that reduce waste and environmental impact.
              </p>
            </div>
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">Our Vision</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                A future where water purification is a basic right — affordable, accessible, and sustainable for all.
              </p>
            </div>
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">Community Outreach</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                We partner with NGOs and local organizations to deliver clean water education and infrastructure where it's needed most.
              </p>
            </div>
          </div>

          {/* Founder Highlight + Core Values */}
          <div className="space-y-12">
            {/* Founder Card */}
            <div className="relative bg-gradient-to-br from-blue-100 to-white rounded-3xl p-8 shadow-xl flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-md ring-4 ring-white">
                <img
                  src="/manoj.jpg"
                  alt="Manoj Reddy Ralla"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-900">Manoj Reddy Ralla</h3>
                <p className="text-blue-700 font-medium mb-3">Founder & CEO</p>
                <p className="text-gray-700 leading-relaxed">
                  A mechanical engineer with deep R&D experience, Manoj leads Ralla with a vision to reimagine water purification for Indian homes.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-6 text-center lg:text-left">Our Core Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {coreValues.map((value, index) => (
                  <div
                    key={index}
                    className="group bg-white border border-blue-100 rounded-2xl shadow-sm p-6 text-center hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex justify-center mb-4">
                      {iconMap[value.icon]}
                    </div>
                    <h4 className="text-lg font-semibold text-blue-900 mb-2">{value.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewAbout;
