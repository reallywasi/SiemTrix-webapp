"use client"


import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
const testimonials = [
  {
    id: 1,
    name: 'Arvind Kumar',
    position: 'Software Developer',
    message: 'Wing Consultants helped me secure my dream job within weeks! The team was supportive throughout the process.',
    avatar: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Sharma',
    position: 'Marketing Executive',
    message: 'The platform made my job search so much easier. Highly professional and efficient service!',
    avatar: 'https://i.pravatar.cc/150?img=2',
    rating: 4,
  },
  {
    id: 3,
    name: 'Ravi Singh',
    position: 'Data Scientist',
    message: 'Wing Consultants provided exceptional support. They really understood my needs and helped me find the right job.',
    avatar: 'https://i.pravatar.cc/150?img=3',
    rating: 5,
  },
  {
    id: 4,
    name: 'Anjali Gupta',
    position: 'Product Manager',
    message: 'Amazing experience! The platform is user-friendly, and the customer service is top-notch.',
    avatar: 'https://i.pravatar.cc/150?img=4',
    rating: 4,
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-10 bg-gradient-to-r from-yellow-50 via-white to-yellow-50 rounded-3xl shadow-2xl space-y-8 lg:space-y-0">
      {/* Testimonial Slider */}
      <div className="relative flex w-full lg:w-2/3 items-center">
        <button
          className="absolute left-0 bg-yellow-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-700 hover:shadow-2xl transition-all duration-300 z-10"
          onClick={handlePrev}
        >
          &lt;
        </button>
        <div className="flex space-x-8 overflow-hidden mx-12">
          {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 w-1/2 h-full bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full border-2 border-yellow-500"
                />
                <div>
                  <h3 className="text-xl font-semibold text-yellow-600">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500 italic">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">"{testimonial.message}"</p>
              <div className="flex items-center space-x-1">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-yellow-400"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
                {[...Array(5 - testimonial.rating)].map((_, index) => (
                  <svg
                    key={index + testimonial.rating}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-gray-300"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute right-0 bg-yellow-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-700 hover:shadow-2xl transition-all duration-300 z-10"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>

      {/* Continue with Google (Dark Theme) */}
      <div className="w-full lg:w-1/3 flex flex-col items-center justify-center space-y-6">
      <button className="flex items-center space-x-4 px-8 py-5 bg-gray-800 text-white font-semibold rounded-full shadow-lg hover:bg-gray-700 hover:shadow-2xl transition-all duration-300">
          <FaGoogle className="w-10 h-10 text-white" />
          <span className="text-lg">Continue with Google</span>
        </button>
        <p className="text-sm text-gray-600">Connect with your Google account to explore job opportunities!</p>
      </div>
    </div>
  );
};

export default TestimonialSlider;
