import React, { useEffect } from 'react';
import { FaBook, FaUserGraduate, FaShippingFast, FaRegLightbulb } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaBook size={40} className="text-primary" />,
      title: "Wide Book Selection",
      description: "Discover a curated collection of books across genres, catering to readers of all ages and interests.",
    },
    {
      icon: <FaUserGraduate size={40} className="text-primary" />,
      title: "Educational Resources",
      description: "We provide a range of academic and self-help books to support your learning journey.",
    },
    {
      icon: <FaShippingFast size={40} className="text-primary" />,
      title: "Fast Delivery",
      description: "Get your favorite books delivered to your doorstep with our reliable and quick shipping service.",
    },
    {
      icon: <FaRegLightbulb size={40} className="text-primary" />,
      title: "Book Recommendations",
      description: "Not sure what to read next? Our expert recommendations will help you find your next favorite book.",
    },
  ];
  useEffect(() => {
    window.scrollTo(100, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
