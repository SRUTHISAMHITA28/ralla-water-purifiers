import React, { useState, useEffect } from 'react';
import { stats } from '../../data';
import { useCountUp } from '../../hooks/useCountUp';

const StatItem: React.FC<{ value: string; label: string }> = ({ value, label }) => {
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const count = useCountUp(numericValue);
  const prefix = value.startsWith('₹') ? '₹' : '';
  const suffix = value.endsWith('+') ? '+' : '';

  return (
    <div className="bg-gradient-to-br from-white via-blue-50/50 to-blue-100/50 backdrop-blur-sm border border-slate-200 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg">
      <p className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">
        {prefix}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
          {count.toLocaleString()}
        </span>
        {suffix}
      </p>
      <p className="text-slate-600 text-sm">{label}</p>
    </div>
  );
};

const HeroSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    referralCode: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      referralCode: ''
    });
  };

  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e508_1px,transparent_1px)] bg-[size:5rem] bg-[-1px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#4f46e508_1px,transparent_1px)] bg-[size:5rem] bg-[-1px]"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Content and Form */}
        <div className="flex flex-col lg:flex-row items-start gap-16 pt-32 pb-8">
          {/* Left Side - Content */}
          <div className="w-full lg:w-7/12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center bg-blue-100/50 rounded-full px-4 py-2 mb-6 border border-blue-200/50">
                <span className="text-blue-900/80 text-sm">Trusted by 100+ Households</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-slate-900">Pure Water.</span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                  Trusted Innovation.
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Experience the next generation of water purification with our sustainable, 
                smart solutions designed for Indian households.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#products"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  Explore Products
                  <span className="ml-2">→</span>
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium px-8 py-4 rounded-lg transition-all duration-300 border border-slate-200"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full lg:w-5/12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 max-w-md mx-auto border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Get Started Today
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:border-blue-400 focus:ring-0 transition-colors peer text-slate-900 placeholder-transparent"
                      placeholder="Name"
                    />
                    <label 
                      htmlFor="name"
                      className="absolute text-sm text-slate-600 duration-300 transform -translate-y-6 scale-75 top-4 z-20 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600 peer-focus:bg-white px-2 rounded"
                    >
                      Name
                    </label>
                  </div>
                  
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:border-blue-400 focus:ring-0 transition-colors peer text-slate-900 placeholder-transparent"
                      placeholder="Email"
                    />
                    <label 
                      htmlFor="email"
                      className="absolute text-sm text-slate-600 duration-300 transform -translate-y-6 scale-75 top-4 z-20 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600 peer-focus:bg-white px-2 rounded"
                    >
                      Email
                    </label>
                  </div>
                  
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{10}"
                      className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:border-blue-400 focus:ring-0 transition-colors peer text-slate-900 placeholder-transparent"
                      placeholder="Phone"
                    />
                    <label 
                      htmlFor="phone"
                      className="absolute text-sm text-slate-600 duration-300 transform -translate-y-6 scale-75 top-4 z-20 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600 peer-focus:bg-white px-2 rounded"
                    >
                      Phone Number (10 digits)
                    </label>
                  </div>
                  
                  <div className="relative">
                    <input
                      type="text"
                      id="referralCode"
                      name="referralCode"
                      value={formData.referralCode}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:border-blue-400 focus:ring-0 transition-colors peer text-slate-900 placeholder-transparent"
                      placeholder="Referral"
                    />
                    <label 
                      htmlFor="referralCode"
                      className="absolute text-sm text-slate-600 duration-300 transform -translate-y-6 scale-75 top-4 z-20 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600 peer-focus:bg-white px-2 rounded"
                    >
                      Referral Code (optional)
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Stats Row - Moved inside main container with no extra spacing */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <StatItem key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-40 right-20 w-72 h-72 bg-blue-200 rounded-full filter blur-[128px] opacity-30"></div>
      <div className="absolute bottom-40 left-20 w-72 h-72 bg-emerald-200 rounded-full filter blur-[128px] opacity-30"></div>
    </section>
  );
};

export default HeroSection;