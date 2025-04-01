import React, { useState } from 'react';
import { FaMapMarkedAlt, FaCamera, FaSearchPlus, FaLeaf } from 'react-icons/fa';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Subscribed email:', email);
      setMessage('Thank you for subscribing! Check your inbox for updates.');
      setEmail('');
    } catch (error) {
      setMessage('Failed to subscribe. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-[#328dcc] to-[#103c65]   relative overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <svg className="absolute top-10 left-10 opacity-20" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <svg className="absolute bottom-10 right-10 opacity-20" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">

        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent animate-fade-in">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-lg text-gray-200 mb-8 max-w-xl mx-auto">
          Get the latest updates, exclusive offers, and drone industry news delivered straight to your inbox.
        </p>


        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <div className="relative w-full sm:w-96">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-white text-gray-800 placeholder-gray-400 transition-all duration-300"
            />
            < FaSearchPlus className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="relative px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <svg className="animate-spin h-5 w-5 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              'Subscribe'
            )}
          </button>
        </form>

        {/* Success/Error Message */}
        {message && (
          <div className={`mt-6 p-4 rounded-lg text-center transition-all duration-300 ${message.includes('Failed') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
            {message}
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsletterSubscription;