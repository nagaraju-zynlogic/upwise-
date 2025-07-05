



// // import React from 'react';
// // import { ArrowRight } from 'lucide-react';

// // export default function Hero() {
// //   return (
// //     <section className="relative bg-[#FDB813] min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden py-16">
// //       {/* Absolute positioned images for the people, assuming they are separate assets or part of a larger design */}
// //       {/* For demonstration, these are placeholders. In a real scenario, you'd use <img> tags with actual paths. */}
// //       {/* Left person */}
// //       <div
// //         className="absolute bottom-0 left-0 w-1/2 h-full bg-cover bg-left-bottom bg-no-repeat z-10"
// //         style={{ backgroundImage: 'url("path/to/left-person.png")', backgroundSize: 'contain' }} // Replace with actual image path
// //       >
// //         {/* If the image is precisely like the provided one, you might not need this div,
// //             and instead use a single background image for the entire section.
// //             However, separating them allows for more responsive control.
// //             For now, let's represent them as if they are part of the visual design.
// //         */}
// //         {/* Placeholder for the left person's smile, if not part of a single image */}
// //         <div className="absolute bottom-0 left-0 w-full h-full bg-no-repeat bg-left-bottom" style={{ backgroundImage: `url('/api/placeholder/400/400')`}}></div>
// //       </div>
// //       {/* Right person */}
// //       <div
// //         className="absolute bottom-0 right-0 w-1/2 h-full bg-cover bg-right-bottom bg-no-repeat z-10"
// //         style={{ backgroundImage: 'url("path/to/right-person.png")', backgroundSize: 'contain' }} // Replace with actual image path
// //       >
// //         {/* Placeholder for the right person's smile, if not part of a single image */}
// //         <div className="absolute bottom-0 right-0 w-full h-full bg-no-repeat bg-right-bottom" style={{ backgroundImage: `url('/api/placeholder/400/400')`}}></div>
// //       </div>


// //       <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
// //         <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6 tracking-tight uppercase">
// //           DEVELOP PEOPLE YOU <br className="hidden sm:inline" />DEPEND ON THE MOST
// //         </h1>
// //         <p className="text-xl sm:text-2xl font-semibold mb-10">
// //           High-Impact Blended Learning Programs <br className="hidden sm:inline" />For All Your Managers To Thrive
// //         </p>
// //         <button className="inline-flex items-center bg-white text-[#FDB813] px-8 py-3 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg">
// //           Find Our How <ArrowRight className="ml-2 w-5 h-5" />
// //         </button>
// //       </div>
// //     </section>
// //   );
// // }


// import React from 'react';
// import { ArrowRight } from 'lucide-react';

// export default function Hero() {
//   return (
//     <section className="relative bg-[#FDB813] min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden py-16">
//       {/* Left person image */}
//       <img
//         src="hero-girl.png" // Assuming hero-girl.png is in your public folder or correctly aliased
//         alt="Smiling woman"
//         className="absolute bottom-0 left-0 h-full object-contain object-left z-10" // object-contain to fit, object-left to align
//         style={{ width: 'auto', maxHeight: '100%' }} // Ensure image scales correctly
//       />

//       {/* Right person image */}
//       <img
//         src="hero-boy.png" // Assuming hero-boy.png is in your public folder or correctly aliased
//         alt="Smiling man"
//         className="absolute bottom-0 right-0 h-full object-contain object-right z-10" // object-contain to fit, object-right to align
//         style={{ width: 'auto', maxHeight: '100%' }} // Ensure image scales correctly
//       />

//       <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
//         <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6 tracking-tight uppercase">
//           DEVELOP PEOPLE YOU <br className="hidden sm:inline" />DEPEND ON THE MOST
//         </h1>
//         <p className="text-xl sm:text-2xl font-semibold mb-10">
//           High-Impact Blended Learning Programs <br className="hidden sm:inline" />For All Your Managers To Thrive
//         </p>
//         <button className="inline-flex items-center bg-white text-[#FDB813] px-8 py-3 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg">
//           Find Out How <ArrowRight className="ml-2 w-5 h-5" />
//         </button>
//       </div>
//     </section>
//   );
// }



import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-[#FDB813] min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden py-16">
      {/* Left person image */}
      <img
        src="hero-girl.png" // Assuming hero-girl.png is in your public folder or correctly aliased
        alt="Smiling woman"
        className="absolute bottom-0 left-0 object-contain object-left z-10"
        style={{ maxHeight: '70vh', width: 'auto' }} // Reduced max-height
      />

      {/* Right person image */}
      <img
        src="hero-boy.png" // Assuming hero-boy.png is in your public folder or correctly aliased
        alt="Smiling man"
        className="absolute bottom-0 right-0 object-contain object-right z-10"
        style={{ maxHeight: '80vh', width: 'auto',}} // Reduced max-height and added opacity
      />

      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6 tracking-tight uppercase">
          DEVELOP PEOPLE YOU <br className="hidden sm:inline" />DEPEND ON THE MOST
        </h1>
        <p style={{ color: '#4a4a4a' }} className="text-xl sm:text-2xl font-semibold mb-10">
          High-Impact Blended Learning Programs <br className="hidden sm:inline" />For All Your Managers To Thrive
        </p>
        <button style={{ backgroundColor: 'white', color: '#4a4a4a' }} className="inline-flex items-center px-8 py-3 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg">
          Find Out How <ArrowRight className="ml-2 w-5 h-5 text-[#FDB813]" />
        </button>
      </div>
    </section>
  );
}