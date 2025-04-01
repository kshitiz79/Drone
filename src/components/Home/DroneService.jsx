import React from 'react';
import { FaAddressBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Custom Drone SVG Icon for Service Cards

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

const services = [
  {
    title: 'Surveying & Mapping',
    description: 'High-precision GIS mapping, land surveys, and 3D modeling.',
    icon: <FaAddressBook color="#328dcc" />, // Lighter blue
  },
  {
    title: 'Aerial Photography & Videography',
    description: 'Stunning drone photography for real estate, events, and media.',
    icon: <FaAddressBook color="#328dcc" />, // Green
  },
  {
    title: 'Inspection & Surveillance',
    description: 'Remote monitoring and infrastructure inspections for various industries.',
    icon: <FaAddressBook color="#328dcc" />,
  },
  {
    title: 'Agriculture & Farm Solutions',
    description: 'Precision spraying, crop health monitoring, and yield optimization.',
    icon: <FaAddressBook color="#328dcc" />,
  },
];

const DroneService = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#328dcc] to-[#103c65] relative overflow-hidden">
      {/* Background Overlay */}


      {/* Drone-Themed Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <DroneBackgroundSVG className="absolute top-10 left-10 opacity-20" />
        <DroneBackgroundSVG className="absolute bottom-10 right-10 opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Heading with Gradient Text */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-[#addaff] to-white bg-clip-text text-transparent animate-fade-in">
          Drone as a Service (DaaS)
        </h2>
        <p className="text-lg text-gray-200 mb-12 max-w-2xl mx-auto">
          Access professional drone services tailored for your business needs.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        {/* <div className="mt-12">
          <Link
            to="/drone-services"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#103c65] to-[#328dcc] text-white font-semibold rounded-lg shadow-md hover:from-[#328dcc] hover:to-[#103c65] hover:scale-105 transition-all duration-300"
          >
            Hire Drone Professionals
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default DroneService;