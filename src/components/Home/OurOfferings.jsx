import React from 'react';
import { Link } from 'react-router-dom';

// Custom Drone SVG Icon for Offering Cards
const DroneIcon = ({ color }) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="transition-all duration-300"
  >
    <path d="M12 2v2m0 16v2m10-10h-2m-16 0H2m17.071-5.071l-1.414 1.414M6.343 17.657l-1.414 1.414m0-12.728l1.414 1.414m12.728 12.728l-1.414-1.414" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 9a3 3 0 0 0-3 3m3-3a3 3 0 0 1 3 3m-3-3v6m3-3H9" />
  </svg>
);

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

const offerings = [
  {
    title: "Buy Drones & Accessories",
    description: "Find the best drones, parts, and accessories at competitive prices.",
    icon: <DroneIcon color="#328dcc" />, // Lighter blue
    link: "/buy-drones",
  },
  {
    title: "Jobs & Career Opportunities",
    description: "Explore exciting drone-related job opportunities across India.",
    icon: <DroneIcon color="#10b981" />, // Green
    link: "/drone-jobs",
  },
  {
    title: "Drone Training & Certification",
    description: "Get certified with DGCA-approved drone pilot training programs.",
    icon: <DroneIcon color="#f59e0b" />, // Yellow
    link: "/drone-training",
  },
  {
    title: "Drone as a Service (DaaS)",
    description: "Hire professional drone pilots for mapping, surveillance, and more.",
    icon: <DroneIcon color="#ef4444" />, // Red
    link: "/drone-services",
  },
];

const OurOfferings = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background Overlay */}


      {/* Drone-Themed Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <DroneBackgroundSVG className="absolute top-10 left-10 opacity-20" />
        <DroneBackgroundSVG className="absolute bottom-10 right-10 opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Heading with Gradient Text */}
        <h2 className="text-3xl  md:text-5xl font-bold mb-4  animate-fade-in">
          Our <span className='text-[#027bff]'>  Offerings</span>
        </h2>
        <p className="text-lg text-gray-900 mb-12 max-w-2xl mx-auto animate-fade-in">
          Discover our comprehensive solutions in the drone industry.
        </p>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {offerings.map((offering, index) => (
            <Link
              to={offering.link}
              key={index}
              className="text-black border-[#027bff] border-2 p-6 rounded-xl shadow-lg text-white transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="bg-white p-3 rounded-full">{offering.icon}</div>
                <h3 className="text-xl font-semibold text-black">{offering.title}</h3>
                <p className="text-sm text-gray-900 opacity-90">{offering.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurOfferings;