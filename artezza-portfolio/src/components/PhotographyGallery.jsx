import React from 'react';

const PhotographyGallery = () => {
  // Correct paths for images in the public/photos/ folder
  const photos = [
    '/photos/photo1.jpg',
    '/photos/photo2.jpg',
    '/photos/photo3.jpg',
    '/photos/photo4.jpg',
    '/photos/photo5.jpg',
    '/photos/photo6.jpg',
    '/photos/photo7.jpg',
    '/photos/photo8.jpg',
    '/photos/photo9.jpg',
    '/photos/photo10.jpg',
    '/photos/photo11.jpg',
    '/photos/photo12.jpg'
  ];

  return (
    <section id="photography" className="py-20 bg-[#001D3D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Photography <span className="text-[#CCA000]">Portfolio</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg aspect-square">
              <img
                src={photo}
                alt={`Photography work ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#CCA000] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotographyGallery;