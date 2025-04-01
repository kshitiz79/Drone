import React from 'react';

import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaCameraRetro, FaCogs, FaLeaf } from 'react-icons/fa';

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
    icon: <FaMapMarkerAlt color="#328dcc" />, // Map marker icon for Surveying & Mapping
  },
  {
    title: 'Aerial Photography & Videography',
    description: 'Stunning drone photography for real estate, events, and media.',
    icon: <FaCameraRetro color="#00b140" />, // Green Camera icon for Aerial Photography
  },
  {
    title: 'Inspection & Surveillance',
    description: 'Remote monitoring and infrastructure inspections for various industries.',
    icon: <FaCogs color="#328dcc" />, // Gear icon for Inspection & Surveillance
  },
  {
    title: 'Agriculture & Farm Solutions',
    description: 'Precision spraying, crop health monitoring, and yield optimization.',
    icon: <FaLeaf color="#328dcc" />, // Leaf icon for Agriculture & Farm Solutions
  },
];


const DroneService = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">




      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <DroneBackgroundSVG className="absolute top-10 left-10 opacity-20" />
        <DroneBackgroundSVG className="absolute bottom-10 right-10 opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">

        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 b animate-fade-in">
          Drone as a  <span className='text-[#027bff]'> Service (DaaS)</span> 
        </h2>
      
 
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