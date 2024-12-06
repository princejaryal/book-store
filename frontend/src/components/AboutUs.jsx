import React, { useEffect } from 'react';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(100, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">About Us</h1>
        <p className="text-gray-600 text-lg mb-6">
          Welcome to our bookstore! Our passion is connecting readers with stories that inspire, inform, and entertain. Since our inception, we have been dedicated to curating a diverse collection of books for all ages and interests. Whether you're a fan of thrilling mysteries, heartwarming romances, or thought-provoking non-fiction, you'll find something special here.
        </p>
        <p className="text-gray-600 text-lg mb-6">
          Our mission is to foster a love for reading and support a community of book enthusiasts. We take pride in creating a welcoming space for everyone, whether you visit us online or in person. Through regular events, author signings, and community outreach, we aim to make reading a shared experience for all.
        </p>
        <p className="text-gray-600 text-lg mb-6">
          Thank you for choosing us as your go-to destination for books. We look forward to helping you discover your next favorite story!
        </p>
        <div className="text-center mt-8">
          <img src="https://images.pexels.com/photos/990432/pexels-photo-990432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Books and Library" className="rounded-lg shadow-md mx-auto h-[200px] w-[100%]"
          />
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-600 text-lg">
            <li>Passion for storytelling and knowledge.</li>
            <li>Commitment to diversity and inclusivity.</li>
            <li>Creating a community of book lovers.</li>
            <li>Providing exceptional service to our readers.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
