import React from 'react';

const DroneCategories = () => {
  const categories = [
    {
      id: 1,
      title: 'Agriculture Drones',
      description:
        'Agriculture drones improve crop monitoring, irrigation, and spraying, helping farmers increase efficiency and yield.',
      image: '/11.png',
      buttonLabel: 'Buy Now',
    },
    {
      id: 2,
      title: 'Photography Drones',
      description:
        'Photography drones capture high-quality aerial images and videos, making them ideal for professionals and hobbyists alike.',
        image: '/12.png',
      buttonLabel: 'Buy Now',
    },
    {
      id: 3,
      title: 'Survey and Inspection Drones',
      description:
        'Survey drones map large areas with precision, while inspections help infrastructure, reducing risk and maintenance costs.',
        image: '/13.png',
      buttonLabel: 'Buy Now',
    },
    {
      id: 4,
      title: 'Nano Drones',
      description:
        'Nano drones are small, lightweight, and easy to use, making them perfect for indoor flying, training, and recreational use.',
        image: '/14.png',
      buttonLabel: 'Buy Now',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
          Drone  <span className='text-[#027bff]'>Categories</span>
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 flex flex-col items-center text-center"
            >
              {/* Category Image */}
              <img
                src={category.image}
                alt={category.title}
                className="w-32 h-32 object-contain mb-4"
              />

              {/* Category Title */}
              <h3 className="text-xl font-semibold mb-2">
                {category.title}
              </h3>

              {/* Category Description */}
              <p className="text-gray-600 mb-4">
                {category.description}
              </p>

              {/* Button */}
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                {category.buttonLabel}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default DroneCategories;