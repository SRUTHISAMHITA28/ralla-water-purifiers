import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../../data';

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerPage = 3; // Number of items to show in desktop view

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      (prevIndex + 1) % (testimonials.length - (window.innerWidth >= 768 ? itemsPerPage - 1 : 0))
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      (prevIndex - 1 + testimonials.length - (window.innerWidth >= 768 ? itemsPerPage - 1 : 0)) % 
      (testimonials.length - (window.innerWidth >= 768 ? itemsPerPage - 1 : 0))
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 pt-6">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from households across India who have transformed their water consumption with Ralla.
          </p>
        </div>

        {/* Desktop and Mobile Testimonials */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100 / (window.innerWidth >= 768 ? itemsPerPage : 1)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full md:w-1/3 flex-shrink-0 px-4"
                >
                  <div className="bg-blue-50 rounded-xl overflow-hidden shadow-sm h-full">
                    {/* Installation Image */}
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={testimonial.installationImage} 
                        alt={`Installation by ${testimonial.name}`}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-6">
                      <div className="mb-4 flex-grow">
                        <p className="text-gray-700 italic">"{testimonial.text}"</p>
                      </div>
                      <div className="flex items-center mt-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-900">{testimonial.name}</h4>
                          <p className="text-sm text-gray-600">Ralla Customer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-blue-900 focus:outline-none z-10 -ml-2 md:ml-2"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-blue-900 focus:outline-none z-10 -mr-2 md:mr-2"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {[...Array(testimonials.length - (window.innerWidth >= 768 ? itemsPerPage - 1 : 0))].map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  index === activeIndex ? 'bg-blue-600' : 'bg-blue-200'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;