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

const DroneJobs = () => {
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
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 animate-fade-in">
          Drone Jobs & <span className='text-[#027bff]'>  Career Opportunities</span>
        </h2>

        {/* Job Seekers and Employers Sections */}
        <div className="flex flex-col md:flex-row justify-center gap-8 px-4">
          {/* Job Seekers Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex-1 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">For Job Seekers</h3>
            <p className="text-gray-600 mb-6">
              Discover featured drone industry jobs with easy applications, nationwide opportunities, and career growth support.
            </p>
           
          </div>

          {/* Employers Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex-1 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">For Employers</h3>
            <p className="text-gray-600 mb-6">
              Post your openings with ease, access a specialized talent pool, and recruit efficiently in the drone industry.
            </p>
            {/* <Link
              to="/post-job"
              className="inline-block px-6 py-3 bg-gradient-to-r from-[#103c65] to-[#328dcc] text-white font-semibold rounded-lg shadow-md hover:from-[#328dcc] hover:to-[#103c65] hover:scale-105 transition-all duration-300"
            >
              Post a Job
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DroneJobs;