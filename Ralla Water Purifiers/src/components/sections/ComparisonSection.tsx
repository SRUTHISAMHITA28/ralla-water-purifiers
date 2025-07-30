import React from 'react';
import { comparisonData } from '../../data';

const ComparisonSection: React.FC = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 pt-6">Why Choose Ralla?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how Ralla water purifiers compare to other options in the market.
          </p>
        </div>

        {/* Comparison Table - Desktop */}
        <div className="hidden md:block overflow-hidden rounded-xl shadow-lg mb-8">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="py-4 px-6 font-semibold">Feature</th>
                  <th className="py-4 px-6 font-semibold">Ralla Water Purifiers</th>
                  <th className="py-4 px-6 font-semibold">Regular Water Cans</th>
                  <th className="py-4 px-6 font-semibold">Other Water Purifiers</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr 
                    key={index} 
                    className={index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}
                  >
                    <td className="py-4 px-6 font-medium text-blue-900">{item.feature}</td>
                    <td className="py-4 px-6 text-green-600 font-medium">{item.ralla}</td>
                    <td className="py-4 px-6 text-gray-600">{item.regularCans}</td>
                    <td className="py-4 px-6 text-gray-600">{item.otherPurifiers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Comparison Cards - Mobile */}
        <div className="md:hidden space-y-6">
          {comparisonData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-900 text-white py-3 px-4 font-medium">
                {item.feature}
              </div>
              <div className="p-4 space-y-3">
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Ralla:</span>
                  <span className="text-green-600 font-medium">{item.ralla}</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Water Cans:</span>
                  <span>{item.regularCans}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Others:</span>
                  <span>{item.otherPurifiers}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-lg text-blue-900 font-medium mb-6">
            Ralla Water Purifiers provide the best value with lower long-term costs, easy maintenance, and maximum water conservation.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-300"
          >
            Contact Us for More Details
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;