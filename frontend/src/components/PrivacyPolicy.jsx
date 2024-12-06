import React, { useEffect } from 'react';

const PrivacyPolicy = () => {

  useEffect(() => {
    window.scrollTo(100, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto px-6 bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Privacy Policy</h1>
        
        <p className="text-gray-600 mb-4">
          Welcome to My Book Store ! Your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website or interact with our services.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">1. Information We Collect</h2>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li><strong>Personal Information:</strong> Your name, email address, shipping address, and payment details when you place an order.</li>
          <li><strong>Account Information:</strong> Login credentials, preferences, and purchase history for registered users.</li>
          <li><strong>Website Usage:</strong> Data such as IP address, browser type, and browsing history collected through cookies and similar technologies.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">2. How We Use Your Information</h2>
        <p className="text-gray-600 mb-4">
          The information we collect is used to:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Process your orders and deliver your books.</li>
          <li>Provide customer support and respond to your inquiries.</li>
          <li>Improve our website, products, and services.</li>
          <li>Send you promotional offers and updates (only if you’ve opted in).</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">3. Sharing Your Information</h2>
        <p className="text-gray-600 mb-4">
          We do not sell or rent your personal information to third parties. However, we may share your information with:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Trusted partners for payment processing and order fulfillment.</li>
          <li>Legal authorities, if required by law or to protect our rights.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">4. Cookies and Tracking</h2>
        <p className="text-gray-600 mb-4">
          We use cookies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie settings through your browser.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">5. Your Rights</h2>
        <p className="text-gray-600 mb-4">
          You have the right to access, update, or delete your personal information at any time. Please contact us if you wish to exercise these rights.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">6. Data Security</h2>
        <p className="text-gray-600 mb-4">
          We use industry-standard security measures to protect your data. However, no online platform is completely secure, so we encourage you to safeguard your login credentials.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">7. Changes to This Policy</h2>
        <p className="text-gray-600 mb-4">
          We may update this Privacy Policy from time to time. Any changes will be reflected on this page, and we encourage you to review it regularly.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">8. Contact Us</h2>
        <p className="text-gray-600">
          If you have any questions or concerns about our Privacy Policy, please contact us at:
        </p>
        <p className="text-gray-600 mt-2"><strong>Email:</strong><a href="mailto:princejaryal999@gmail.com"> princejaryal999@gmail.com</a></p>
        <p className="text-gray-600"><strong>Phone:</strong> +91 8629037644</p>
        <p className="text-gray-600"><strong>Address:</strong> 657 Bookstore Street, Chamba, India</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
