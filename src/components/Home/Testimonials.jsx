import React from 'react';
import Marquee from 'react-fast-marquee'; // Import the marquee component
import { UserCircleIcon } from '@heroicons/react/24/outline'; // For user avatars

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Aerial Photographer",
      message: "Drone Planet transformed my business with exceptional service.",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Drone Pilot",
      message: "I found the best drone training and job opportunities through Drone Planet.",
    },
    {
      id: 3,
      name: "Sam Lee",
      role: "Agriculture Specialist",
      message: "The precision and efficiency of the drones I purchased have been outstanding.",
    },
    {
      id: 4,
      name: "Emily Carter",
      role: "Real Estate Agent",
      message: "The aerial imagery from Drone Planet’s services has elevated my listings!",
    },
    {
      id: 5,
      name: "Michael Brown",
      role: "Construction Manager",
      message: "Their drones provided unparalleled site monitoring and data accuracy.",
    },
    {
      id: 6,
      name: "Lisa Patel",
      role: "Environmental Researcher",
      message: "Drone Planet’s technology helped me track wildlife patterns effortlessly.",
    },
    {
      id: 7,
      name: "David Kim",
      role: "Film Director",
      message: "The cinematic shots I got with their drones are absolutely stunning!",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#103c65]  to-[#328dcc] relative overflow-hidden">
      {/* Background Overlay */}


      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <svg className="absolute top-10 left-10 opacity-20" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <svg className="absolute bottom-10 right-10 opacity-20" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
      </div>

      <div className="text-center relative z-10">
        {/* Heading with Gradient Text */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-[#328dcc] to-white bg-clip-text text-transparent animate-fade-in">
          Testimonials & Success Stories
        </h2>

        {/* Marquee for Testimonials */}
        <Marquee
          speed={50} // Adjusted speed for smoother scrolling
          gradient={true} // Adds a fade effect on edges
          gradientColor={[16, 60, 101]} // Matches #103c65 in RGB
          direction="left" // Moves right to left
          pauseOnHover={true} // Pauses when hovering
          className="py-4"
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="mx-4">
              <div
                className="bg-white rounded-xl shadow-lg p-6 w-[300px] flex-shrink-0 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                {/* User Avatar and Quote */}
                <div className="flex items-center mb-4">
                  <UserCircleIcon className="h-10 w-10 text-[#328dcc] mr-3" />
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic text-sm mb-4">"{testimonial.message}"</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};