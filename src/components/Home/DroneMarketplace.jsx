import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

const DroneMarketplace = () => {
  const featuredProducts = [
    { id: 1, image: "/1.png", title: "Drone Model A" },
    { id: 2, image: "/2.png", title: "Drone Model B" },
    { id: 3, image: "/3.png", title: "Drone Model C" },
    // Add more products as needed
  ];

  const settings = {
  
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

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
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#328dcc] to-white bg-clip-text text-transparent animate-fade-in">
          Drone Marketplace
        </h2>
        <p className="text-lg text-gray-200 mb-12 max-w-2xl mx-auto animate-fade-in">
          Discover a wide selection of drones and accessories from verified vendors at competitive prices.
        </p>

        {/* Slider for Featured Products */}
        <Slider {...settings} className="px-4">
          {featuredProducts.map((product) => (
            <div key={product.id} className="px-4">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900">{product.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Call to Action Button */}
       
      </div>

      {/* Custom Slider Styles */}
      <style jsx global>{`
     
      
        
      
      `}</style>
    </section>
  );
};

export default DroneMarketplace;