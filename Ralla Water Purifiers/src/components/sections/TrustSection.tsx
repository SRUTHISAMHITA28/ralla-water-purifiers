import React from 'react';
import {
  Filter,
  PenTool as Tool,
  Droplets,
  BadgeCheck,
  Tag,
} from 'lucide-react';
import { trustFactors } from '../../data';

const iconMap: Record<string, JSX.Element> = {
  filter: <Filter className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition" />,
  tool: <Tool className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition" />,
  droplets: <Droplets className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition" />,
  'badge-check': <BadgeCheck className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition" />,
  tag: <Tag className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition" />,
};

const TrustSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 pt-6">
            Why Ralla Water Purifiers?
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            We're committed to providing the highest quality water purification
            solutions with transparency and integrity.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustFactors.map((factor, index) => (
            <div
              key={index}
              className="group bg-blue-50 rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start">
                <div className="mr-4 mt-1">{iconMap[factor.icon]}</div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-1">
                    {factor.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {factor.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="mt-16 text-center">
          <div className="inline-block border-2 border-blue-200 rounded-2xl px-8 py-6 bg-blue-50">
            <p className="text-blue-900 font-medium text-lg">
              All Ralla purifiers come with a 1-year warranty and free installation support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
