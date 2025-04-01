import React from 'react';
import { Link } from 'react-router-dom';

// Custom Drone SVG for Background Decoration
const DroneBackgroundSVG = ({ className }) => (
  <svg
    className={className}
    width="100"
    height="100"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 4v2m0 12v2m8-8h-2m-12 0H4m15.071-4.071l-1.414 1.414M6.343 15.657l-1.414 1.414m0-8.728l1.414 1.414m12.728 8.728l-1.414-1.414" />
    <circle cx="12" cy="12" r="2" />
    <path d="M12 10a2 2 0 0 0-2 2m2-2a2 2 0 0 1 2 2m-2-2v4m2-2H10" />
  </svg>
);

const VendorOnboarding = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">



      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <DroneBackgroundSVG className="absolute top-10 left-10 opacity-20" />
        <DroneBackgroundSVG className="absolute bottom-10 right-10 opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Heading with Gradient Text */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6  to-white text-black animate-fade-in">
          Become a <span className='text-[#027bff]'>Vendor</span> 
        </h2>
        <p className="text-lg text-gray-900 mb-12 max-w-2xl mx-auto animate-fade-in">
          Expand your business with Drone Planet by reaching targeted customers, enjoying hassle-free selling, and receiving dedicated support.
        </p>

  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Reach Targeted Customers</h3>
            <p className="text-gray-600">
              Connect with a wide network of drone enthusiasts and professionals.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Hassle-Free Selling</h3>
            <p className="text-gray-600">
              List your products easily with our streamlined onboarding process.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Dedicated Support</h3>
            <p className="text-gray-600">
              Benefit from personalized assistance and marketing support.
            </p>
          </div>
        </div>


        <Link
          to="/vendor-onboard"
          className="inline-block px-8 py-3 bg-[#027bff] text-white border-white border-2 font-semibold rounded-lg shadow-md hover:from-[#328dcc] hover:to-[#103c65] hover:scale-105 transition-all duration-300"
        >
          Become a Vendor
        </Link>
      </div>
    </section>
  );
};

export default VendorOnboarding;