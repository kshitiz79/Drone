import React from 'react';
import { Link } from 'react-router-dom';


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

const courses = [
  {
    title: 'Drone Pilot Training',
    description: 'Master drone operation, safety protocols, and flight planning.',
    icon: <DroneIcon color="#328dcc" />, // Lighter blue
  },
  {
    title: 'Kisan Drone Operator',
    description: 'Learn precision agriculture techniques using drone technology.',
    icon: <DroneIcon color="#10b981" />, // Green
  },
  {
    title: 'Drone Manufacturing Technician',
    description: 'Gain expertise in building, repairing, and assembling drones.',
    icon: <DroneIcon color="#ef4444" />, // Red
  },
  {
    title: 'DGPS Surveying & GIS Mapping',
    description: 'Train in land mapping, surveys, and geospatial analysis with drones.',
    icon: <DroneIcon color="#8b5cf6" />, // Purple
  },
];

const DroneTraining = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">



     
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <DroneBackgroundSVG className="absolute top-10 left-10 opacity-20" />
        <DroneBackgroundSVG className="absolute bottom-10 right-10 opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">

        <h2 className="text-4xl md:text-5xl font-bold  mb-4  animate-fade-in">
          Drone Training & <span className='text-[#027bff]'> Certification</span> 
        </h2>
       

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="mb-4">{course.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
              <p className="text-gray-600 text-sm">{course.description}</p>
            </div>
          ))}
        </div>


        
      </div>
    </section>
  );
};

export default DroneTraining;