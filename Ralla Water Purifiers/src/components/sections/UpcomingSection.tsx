import React from 'react';
import { Smartphone, Wrench, Droplets, Gauge, Bell, BookOpen } from 'lucide-react';

const UpcomingSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        {/* DIY Products Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 rounded-full px-4 py-2 mb-6">
                <Wrench className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-blue-700 font-medium">DIY Revolution</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Revolutionizing Water Purification
              </h2>
              
              <div className="space-y-6 mb-8">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Say goodbye to dependency on skilled technicians. Our upcoming range of water purifiers 
                  features revolutionary designs that put you in control.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start bg-white rounded-lg p-4 shadow-sm">
                    <Wrench className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium text-blue-900">Easy Installation</h3>
                      <p className="text-gray-600">DIY-friendly setup process</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white rounded-lg p-4 shadow-sm">
                    <Droplets className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium text-blue-900">Water Efficient</h3>
                      <p className="text-gray-600">90% water conservation</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <a 
                href="#contact" 
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300"
              >
                Stay Updated
                <span className="ml-2">→</span>
              </a>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4482037/pexels-photo-4482037.jpeg"
                alt="Advanced water purifier"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-lg">
                <p className="text-blue-900 font-semibold">Launch in</p>
                <p className="text-3xl font-bold text-blue-600">2 Months</p>
              </div>
            </div>
          </div>
        </div>

        {/* App Teaser Section */}
        <div className="bg-gradient-to-br from-blue-100 to-white rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-600 rounded-full px-4 py-2 mb-6">
                <Smartphone className="w-5 h-5 text-white mr-2" />
                <span className="text-white font-medium">Coming Soon</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                The Ralla App
              </h2>
              
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Take control of your water purification experience with our upcoming mobile app. 
                Monitor quality, receive alerts, and manage settings from anywhere.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                  <Gauge className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Real-time monitoring</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                  <Bell className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Smart alerts</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                  <Droplets className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Usage statistics</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                  <BookOpen className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">DIY guides</span>
                </div>
              </div>
              
              <a 
                href="#" 
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300"
              >
                Join Waitlist
                <span className="ml-2">→</span>
              </a>
            </div>
            
            <div className="relative h-[300px] lg:h-[600px] overflow-visible">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[240px] lg:w-[420px]">
                  {/* Front Image */}
                  <img
                    src="https://help.apple.com/assets/67EAFA00341984D9AE00EC98/67EAFA0586243791BA0154F5/en_US/e5486dcf4a91009eb02814bd2abc9c42.png"
                    alt="Ralla mobile app interface"
                    className="w-32 lg:w-56 rounded-3xl shadow-2xl transform -rotate-6 z-10 relative"
                  />
                  {/* Back Image */}
                  <img
                    src="https://help.apple.com/assets/67EAFA00341984D9AE00EC98/67EAFA0586243791BA0154F5/en_US/59a01b68f0b454cc2b91bb44246fdc9c.jpg"
                    alt="Water quality monitoring screen"
                    className="w-32 lg:w-56 rounded-3xl shadow-2xl transform rotate-6 absolute top-12 left-24 lg:left-32 z-0"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingSection;