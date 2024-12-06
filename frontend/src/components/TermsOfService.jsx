import React, { useEffect } from 'react';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(100, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto px-6 py-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Terms of Service</h1>
        
        <div className="border-l-4 border-primary pl-6">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mt-2">
              By using My Book Store website or services, you agree to comply with and be bound by these Terms of Service. If you do not agree, you must discontinue use immediately.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">2. Account Responsibilities</h2>
            <p className="text-gray-600 mt-2">
              You are responsible for maintaining the confidentiality of your account and password. Any activity under your account is your responsibility.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">3. Purchase Policies</h2>
            <p className="text-gray-600 mt-2">
              All purchases made on our platform are final unless stated otherwise. We reserve the right to modify prices or refuse service at our discretion.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">4. Prohibited Activities</h2>
            <ul className="list-disc pl-6 text-gray-600 mt-2">
              <li>Using our website for illegal purposes.</li>
              <li>Attempting to hack, disrupt, or damage the website.</li>
              <li>Violating any intellectual property rights.</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">5. Intellectual Property</h2>
            <p className="text-gray-600 mt-2">
              All content on this site, including images, text, and logos, belongs to [Your Bookstore Name]. Unauthorized use is prohibited.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">6. Limitation of Liability</h2>
            <p className="text-gray-600 mt-2">
              [Your Bookstore Name] is not liable for any indirect or direct damages resulting from your use of our services, to the fullest extent permitted by law.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">7. Termination</h2>
            <p className="text-gray-600 mt-2">
              We may terminate or suspend your access to our website without prior notice if you violate these terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">8. Contact Information</h2>
            <p className="text-gray-600 mt-2">
              For any questions or concerns regarding these Terms of Service, contact us at:
            </p>
            <p className="text-gray-600 mt-2">
              <strong>Email:</strong> 
              <a href="mailto:princejaryal999@gmail.com" className=" hover:underline"> princejaryal999@gmail.com</a>
            </p>
            <p className="text-gray-600">
              <strong>Phone:</strong> +91 8629037644
            </p>
            <p className="text-gray-600">
              <strong>Address:</strong> 657 Bookstore Street, Chamba, India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
