import React, { useState } from 'react';

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

const PhotographyGallery = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="photography" className="py-20 bg-[#001D3D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Photography <span className="text-[#CCA000]">Portfolio</span>
          </h2>
          <p className="text-gray-400">A showcase of my favorite moments captured.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl aspect-square cursor-pointer shadow-lg hover:shadow-2xl transition-shadow"
              onClick={() => setSelected(photo)}
            >
              <img
                src={photo}
                alt={`Photography work ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#CCA000]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-lg font-semibold drop-shadow">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Lightbox Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected}
            alt="Enlarged"
            className="max-w-[90vw] max-h-[80vh] rounded-lg shadow-2xl border-4 border-[#CCA000] object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default PhotographyGallery;