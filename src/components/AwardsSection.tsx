// import React from 'react';

// // Assuming you have these images in your public folder or directly accessible via URL
// // For local files, you might import them like:
// // import award1 from './assets/award1.png';
// // import award2 from './assets/award2.png';
// // import award3 from './assets/award3.png';

// export default function AwardsSection() {
//   const awards = [
//     { id: 1, src: 'https://cdn.harappa.education/wp-content/uploads/2022/10/17151417/award1.png', alt: 'Award 1' },
//     { id: 2, src: 'https://cdn.harappa.education/wp-content/uploads/2022/10/17151410/award2.png', alt: 'Award 2' },
//     { id: 3, src: 'https://cdn.harappa.education/wp-content/uploads/2022/10/17151405/award3.png', alt: 'Award 3' },
//   ];

//   return (
//     <section className="py-12 bg-white">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
//           Our Achievements
//         </h2>
//         <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
//           {awards.map(award => (
//             <div key={award.id} className="flex-shrink-0">
//               <img
//                 src={award.src}
//                 alt={award.alt}
//                 className="h-24 md:h-32 object-contain" // Adjust height as needed
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import React from 'react';

export default function AwardsSection() {
  const awards = [
    {
      id: 1,
      src: 'https://cdn.harappa.education/wp-content/uploads/2022/10/17151417/award1.png',
      alt: 'Disney+ Silver Excellence in Learning 2021 Award',
      title: 'Best Advance in Leadership for Women',
      category: 'Diversity & Inclusion'
    },
    {
      id: 2,
      src: 'https://cdn.harappa.education/wp-content/uploads/2022/10/17151410/award2.png',
      alt: 'PVR Cinemas Gold Excellence in Learning Award',
      title: 'Best Use of Blended Learning',
      category: 'Learning & Development'
    },
    {
      id: 3,
      src: 'https://cdn.harappa.education/wp-content/uploads/2022/10/17151405/award3.png',
      alt: 'STL Silver Excellence in Learning 2021 Award',
      title: 'Best Use of Blended Learning',
      category: 'Learning & Development'
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10"> {/* text-gray-800 for darker text */}
          Let's Make Magic together {/* Text from the image */}
        </h2>
        <div className="flex flex-wrap justify-center items-start gap-8 md:gap-12"> {/* items-start to align content to the top */}
          {awards.map(award => (
            <div key={award.id} className="flex-shrink-0 text-center max-w-[280px]"> {/* Added max-width for better control */}
              <img
                src={award.src}
                alt={award.alt}
                className="h-32 md:h-40 object-contain mx-auto mb-4" // Centered image, added margin-bottom
              />
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1"> {/* Title styling */}
                {award.title}
              </h3>
              <p className="text-sm text-gray-600"> {/* Category styling */}
                Category
              </p>
              <p className="text-md text-gray-700 font-medium">
                {award.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}