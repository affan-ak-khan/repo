// src/components/WorkShowcase.jsx
import React from 'react';
import './WorkShowcase.css'; // Import the custom CSS for styling

const workImages = [
  // Using placeholder images that visually resemble the ones in your screenshot.
  // Adjust dimensions to create the staggered effect.
  { id: 1, src: 'src/assets/images/7.webp', alt: 'Person working at a desk' },
  { id: 2, src: 'src/assets/images/8.webp', alt: 'Person shopping online with a laptop' },
  { id: 3, src: 'src/assets/images/9.webp', alt: 'Hand holding a Coca-Cola can' }, // Taller image
  { id: 4, src: 'src/assets/images/10.webp', alt: 'Person using a mobile phone' }, // Taller image
  { id: 5, src: 'src/assets/images/7.webp', alt: 'Creative work process' },
  { id: 6, src: 'src/assets/images/8.webp', alt: 'Design mockup on a screen' },
];

const WorkShowcase = () => {
  // Split images into two columns for the staggered effect
  const column1Images = workImages.filter((_, i) => i % 2 === 0); // Images for the first column (0, 2, 4, ...)
  const column2Images = workImages.filter((_, i) => i % 2 !== 0); // Images for the second column (1, 3, 5, ...)

  return (
    <section className="bg-black py-20 text-white font-inter">
      {/* "WORK" heading - now a regular block element above the images */}
      {/* It will scroll normally with the page content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold uppercase text-white">
          Work
        </h1>
      </div>

      {/* Images Grid - positioned below the heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex container for the two image columns */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
          {/* Column 1 for images */}
          <div className="flex flex-col gap-4 sm:gap-6 w-full md:w-1/2">
            {column1Images.map((image) => (
              <div key={image.id} className="relative rounded-lg overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>

          {/* Column 2 for images - with top margin for staggering */}
          {/* The mt-32 (or md:mt-32 for responsiveness) creates the "starting from half of that picture" effect */}
          <div className="flex flex-col gap-4 sm:gap-6 w-full md:w-1/2 mt-8 md:mt-32">
            {column2Images.map((image) => (
              <div key={image.id} className="relative rounded-lg overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;
