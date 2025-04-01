import React from 'react';
import { Link } from 'react-router-dom';

export const BlogResources = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Latest Drone Technology Trends",
      snippet:
        "Stay updated on the newest advancements in drone technology and how they can benefit your business.",
      image: "/blog1.jpg",
      link: "/blog/latest-drone-tech",
    },
    {
      id: 2,
      title: "Drone Safety and Regulations",
      snippet:
        "Learn about the latest drone regulations and best practices to ensure safe and compliant operations.",
      image: "/blog2.jpg",
      link: "/blog/drone-safety",
    },
    {
      id: 3,
      title: "Maximizing ROI with Drone Services",
      snippet:
        "Discover how drone services can help boost your business efficiency and return on investment.",
      image: "/blog3.jpg",
      link: "/blog/drone-roi",
    },
  ];

  return (
    <section className="py-16  relative overflow-hidden">
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
        <h2 className="text-4xl md:text-5xl font-bold mb-8  animate-fade-in">
          Blog & <span className="text-[#027bff]" >Resources</span> 
        </h2>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Image with Overlay */}
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-60 object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-20"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.snippet}</p>
                <Link
                  to={post.link}
                  className="inline-block px-6 py-2 bg-gradient-to-r from-[#103c65] to-[#328dcc] text-white font-semibold rounded-lg hover:from-[#328dcc] hover:to-[#103c65] transition-all duration-300"
                >
                  Read Our Blog
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};