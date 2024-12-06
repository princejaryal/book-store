import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ContactUsForm = () => {
  useEffect(() => {
    window.scrollTo(100, 0);
  }, []);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Contact Us</h2>
        <p className="text-center text-gray-600 mb-8">
          We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible!
        </p>

        <form action="#" method="POST">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              placeholder="Your name" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              placeholder="Your email" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              placeholder="Your phone number" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Which Type of Book you like most</label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              required 
              placeholder="Write any Book name" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea id="message" name="message" required placeholder="Your message here..." className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"></textarea>
          </div>
         <Link to="/"> 
         <button type="submit" className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Send Message</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default ContactUsForm;
