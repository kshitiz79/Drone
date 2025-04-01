import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { UserIcon, PhoneIcon, MapPinIcon, GlobeAltIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

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

const Hero = () => {
  const sliderImages = ["/banner.gif", "/banner1.png", "/banner2.png"];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    state: "",
    email: "",
    interest: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Submitted data:", formData);
      setMessage('Thank you for your submission! We will get back to you soon.');
      setFormData({ name: "", phone: "", city: "", state: "", email: "", interest: "" });
    } catch (error) {
      setMessage('Failed to submit. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-[#103c65] to-[#328dcc] h-[100vh] md:h-auto">
      <Slider {...settings} className="h-full">
        {sliderImages.map((image, index) => (
          <div key={index} className="h-full">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full lg:h-[86vh] h-[100vh] object-cover"
            />
          </div>
        ))}
      </Slider>

      {/* Overlay for Text & Form */}
      <div className="bg-black bg-opacity-10 absolute inset-0 flex items-center lg:h-[86vh] ">
        {/* Drone-Themed Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <DroneBackgroundSVG className="absolute top-10 left-10 opacity-20" />
          <DroneBackgroundSVG className="absolute bottom-10 right-10 opacity-20" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-14 w-full flex flex-col lg:flex-row justify-between relative z-10">
          {/* Left Side - Text and CTA (Position Unchanged) */}
          <div className="w-full lg:w-1/2 text-white">
            <h1 className="lg:text-6xl md:text-4xl text-2xl mb-4 font-sans font-thin bg-gradient-to-r from-black to-blue-600 bg-clip-text text-transparent animate-fade-in">
              romne Spaces, <br /> Inspiring rone            </h1>
            <h2 className="text-sm md:text-xl mb-6 font-sans font-thin leading-relaxed text-gray-200 animate-fade-in">
           bmfnfw ewklew lewklmkew ndelekdlwlew ewklmewm
            </h2>
            <button className="bg-gradient-to-r from-[#103c65] to-[#328dcc] text-white lg:px-6 lg:py-3 px-4 py-2 rounded-md hover:from-[#328dcc] hover:to-[#103c65] hover:scale-105 font-sans font-thin transition-all duration-300">
              Explore Our Services
            </button>
          </div>

          {/* Right Side - Smaller Contact Form */}
          <div className="w-full lg:w-2/5 mt-8 lg:mt-0">
            <form
              onSubmit={handleSubmit}
              className="bg-white bg-opacity-95 p-4 rounded-xl shadow-lg space-y-3 max-w-md mx-auto lg:mx-0"
            >
              <h3 className="text-lg font-bold text-center uppercase text-gray-800 animate-fade-in">
                Contact Us
              </h3>

              {/* Name */}
              <div className="relative">
                <label className="block text-gray-700 text-xs font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 pl-8 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#328dcc] focus:border-[#328dcc] transition-all duration-200"
                  required
                />
                <UserIcon className="absolute left-2 top-7 h-4 w-4 text-gray-400" />
              </div>

              {/* Phone */}
              <div className="relative">
                <label className="block text-gray-700 text-xs font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 pl-8 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#328dcc] focus:border-[#328dcc] transition-all duration-200"
                  required
                />
                <PhoneIcon className="absolute left-2 top-7 h-4 w-4 text-gray-400" />
              </div>

              {/* City */}
              <div className="relative">
                <label className="block text-gray-700 text-xs font-medium mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full p-2 pl-8 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#328dcc] focus:border-[#328dcc] transition-all duration-200"
                  required
                />
                <MapPinIcon className="absolute left-2 top-7 h-4 w-4 text-gray-400" />
              </div>

              {/* State */}
              <div className="relative">
                <label className="block text-gray-700 text-xs font-medium mb-1">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full p-2 pl-8 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#328dcc] focus:border-[#328dcc] transition-all duration-200"
                  required
                />
                <GlobeAltIcon className="absolute left-2 top-7 h-4 w-4 text-gray-400" />
              </div>

              {/* Email */}
              <div className="relative">
                <label className="block text-gray-700 text-xs font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 pl-8 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#328dcc] focus:border-[#328dcc] transition-all duration-200"
                  required
                />
                <div className="absolute left-2 top-7 h-4 w-4 text-gray-400" />
              </div>

              {/* Interest */}
              <div className="relative">
                <label className="block text-gray-700 text-xs font-medium mb-1">
                  Field of Interest
                </label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full p-2 pl-8 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#328dcc] focus:border-[#328dcc] transition-all duration-200 appearance-none"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="Drone Vendorship">Drone Vendorship</option>
                  <option value="Drones">Drones</option>
                  <option value="Drone Parts">Drone Parts</option>
                  <option value="Drone Jobs">Drone Jobs</option>
                  <option value="Drone Courses">Drone Courses</option>
                  <option value="RPTO's">RPTO's</option>
                  <option value="Drone As a Service">Drone As a Service</option>
                </select>
                <ChevronDownIcon className="absolute right-2 top-7 h-4 w-4 text-gray-400 pointer-events-none" />
                <svg className="absolute left-2 top-7 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-gradient-to-r from-[#103c65] to-[#328dcc] text-white px-4 py-2 w-full rounded-lg text-sm hover:from-[#328dcc] hover:to-[#103c65] hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <svg className="animate-spin h-4 w-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    'Submit'
                  )}
                </button>
              </div>

              {/* Success/Error Message */}
              {message && (
                <div className={`mt-2 p-2 rounded-lg text-center text-xs transition-all duration-300 ${message.includes('Failed') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;