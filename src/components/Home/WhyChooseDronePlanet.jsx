import React from 'react';
import { motion } from 'framer-motion';

// Importing an icon for visual enhancement
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export const WhyChooseDronePlanet = () => {
  const differentiators = [
    "All-in-One Drone Platform",
    "Trusted by Industry Professionals",
    "Cutting-edge Technology & Expertise",
    "Nationwide Coverage & Support",
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 bg-gradient-to-b from-[#328dcc]  to-[#103c65]  relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Heading with Gradient Text */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-[#5697c3] to-white bg-clip-text text-transparent animate-fade-in"
        >
          Why Choose Drone Planet?
        </motion.h2>

        {/* Differentiators Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4"
        >
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
              }}
              style={{
                transform: `rotate(${index % 2 === 0 ? '-2deg' : '2deg'})`,
              }}
            >
              {/* Number Badge with Gradient */}
              <div className="relative mb-4">
                <span className="inline-block w-10 h-10 bg-gradient-to-r from-[#103c65] to-[#328dcc] text-white rounded-full text-center leading-10 font-semibold text-lg">
                  {index + 1}
                </span>
                <CheckCircleIcon className="absolute -top-2 -right-2 h-6 w-6 text-green-500" />
              </div>

              {/* Differentiator Text */}
              <p className="text-lg font-medium text-gray-800">{item}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};