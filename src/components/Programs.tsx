


// // // // import React from "react";
// // // // import { ArrowUpRight, ArrowRight } from "lucide-react";

// // // // interface Program {
// // // //   title: string;
// // // //   subtitle: string;
// // // //   branding: string;
// // // //   brandingIcon: string;
// // // //   image: string;
// // // //   bottomBgColor: string; // band colour (#DD792C or #2E6A56)
// // // // }

// // // // export default function Programs() {
// // // //   const programs: Program[] = [
// // // //     {
// // // //       title: "LEAP",
// // // //       subtitle: "For Aspiring Women Managers",
// // // //       branding: "HARAPPA",
// // // //       brandingIcon: "H",
// // // //       image: "girl2.png",
// // // //       bottomBgColor: "bg-[#DD792C]",
// // // //     },
// // // //     {
// // // //       title: "RISE",
// // // //       subtitle: "For High‑Performing Managers",
// // // //       branding: "HARAPPA",
// // // //       brandingIcon: "H",
// // // //       image:
// // // //         "https://images.pexels.com/photos/3762804/pexels-photo-3762804.jpeg?auto=compress&cs=tinysrgb&w=400",
// // // //       bottomBgColor: "bg-[#2E6A56]",
// // // //     },
// // // //     {
// // // //       title: "GROW",
// // // //       subtitle: "For First‑Time Managers",
// // // //       branding: "HARAPPA",
// // // //       brandingIcon: "H",
// // // //       image:
// // // //         "https://images.pexels.com/photos/7176317/pexels-photo-7176317.jpeg?auto=compress&cs=tinysrgb&w=400",
// // // //       bottomBgColor: "bg-[#DD792C]",
// // // //     },
// // // //     {
// // // //       title: "SOAR",
// // // //       subtitle: "For Mid‑Level Managers",
// // // //       branding: "HARAPPA",
// // // //       brandingIcon: "H",
// // // //       image:
// // // //         "https://images.pexels.com/photos/5668853/pexels-photo-5668853.jpeg?auto=compress&cs=tinysrgb&w=400",
// // // //       bottomBgColor: "bg-[#2E6A56]",
// // // //     },
// // // //   ];

// // // //   return (
// // // //     <section id="programs" className="py-20 bg-white">
// // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // //         {/* ---- Section header ---- */}
// // // //         <div className="text-center mb-16">
// // // //           <h2 className="text-4xl font-bold text-gray-800 mb-4">Thrive Programs</h2>
// // // //           <p className="text-lg text-gray-600 max-w-xl mx-auto">
// // // //             Rich blended journeys that your people will love for making them more
// // // //             productive, effective and happier
// // // //           </p>
// // // //         </div>

// // // //         {/* ---- Cards grid ---- */}
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// // // //           {programs.map((p, i) => (
// // // //             <div
// // // //               key={i}
// // // //               className="flex flex-col rounded-lg overflow-hidden shadow-lg group"
// // // //             >
// // // //               {/* ------- Top (photo + yellow tint + arrow) ------- */}
// // // //               <div className="relative h-[380px] bg-[#FDB813]">
// // // //                 {/* Photo */}
// // // //                 <img
// // // //                   src={p.image}
// // // //                   alt={p.title}
// // // //                   className="absolute inset-0 w-full h-full object-cover grayscale"
// // // //                   referrerPolicy="no-referrer"
// // // //                 />
// // // //                 {/* Yellow tint */}
// // // //                 {/* mix-blend-multiply keeps highlights visible like the mock‑up */}
// // // //                 <div className="absolute inset-0 bg-[#FDB813] opacity-60 mix-blend-multiply" />

// // // //                 {/* Big faded arrow */}
// // // //                 <ArrowUpRight className="absolute top-3 right-3 w-20 h-20 text-white opacity-25 pointer-events-none" />

// // // //                 {/* ------- Bottom translucent band ------- */}
// // // //                 <div
// // // //                   className={`absolute bottom-0 w-full ${p.bottomBgColor} bg-opacity-90 px-5 py-6 text-white`}
// // // //                 >
// // // //                   {/* <p className="text-xs uppercase font-semibold tracking-wider flex items-center mb-1">
// // // //                     <span className="mr-1">{p.brandingIcon}</span> {p.branding}
// // // //                   </p> */}
// // // //                   <h3 className="text-4xl font-bold leading-none">{p.title}</h3>
// // // //                   <p className="text-base font-medium">{p.subtitle}</p>
// // // //                 </div>
// // // //               </div>

// // // //               {/* ------- Learn More strip ------- */}
// // // //               <a
// // // //                 href="#"
// // // //                 className="bg-white py-4 px-5 text-sm font-semibold flex items-center hover:text-[#FDB813] transition-colors"
// // // //               >
// // // //                 Learn More
// // // //                 <ArrowRight className="w-4 h-4 ml-1" />
// // // //               </a>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }




// // // import React from "react";
// // // // Removed ArrowUpRight as it's not used in the new HTML structure for the large arrow
// // // import { ArrowRight } from "lucide-react";

// // // interface Program {
// // //   title: string;
// // //   subtitle: string;
// // //   image: string;
// // //   logoImage: string; // URL for the small Harappa logo image
// // //   bottomBandColorClass: string; // Class for the bottom band background
// // //   link: string; // URL for the Learn More link
// // // }

// // // export default function Programs() {
// // //   const programs: Program[] = [
// // //     {
// // //       title: "LEAP",
// // //       subtitle: "For Aspiring Women Managers",
// // //       image: "https://cdn.harappa.education/wp-content/uploads/2022/10/20122924/program1-1.png", // Image from HTML
// // //       logoImage: "https://us.harappa.education/wp-content/themes/harappaeducation/src/images/us-pages/program-logo.png", // Logo from HTML
// // //       bottomBandColorClass: "bg-[#DD792C]", // Corresponds to --orange in HTML, using a specific orange
// // //       link: "https://us.harappa.education/program/leap/",
// // //     },
// // //     {
// // //       title: "RISE",
// // //       subtitle: "For High-Performing Women Managers",
// // //       image: "https://cdn.harappa.education/wp-content/uploads/2022/10/14165130/program2.png", // Image from HTML
// // //       logoImage: "https://us.harappa.education/wp-content/themes/harappaeducation/src/images/us-pages/program-logo.png", // Logo from HTML
// // //       bottomBandColorClass: "bg-[#2E6A56]", // Corresponds to --green in HTML, using a specific green
// // //       link: "https://us.harappa.education/program/rise/",
// // //     },
// // //     {
// // //       title: "GROW",
// // //       subtitle: "For First-Time Managers",
// // //       image: "https://cdn.harappa.education/wp-content/uploads/2022/10/14165136/program3.png", // Image from HTML
// // //       logoImage: "https://us.harappa.education/wp-content/themes/harappaeducation/src/images/us-pages/program-logo.png", // Logo from HTML
// // //       bottomBandColorClass: "bg-[#DD792C]", // Corresponds to --orange in HTML
// // //       link: "https://us.harappa.education/program/grow/",
// // //     },
// // //     {
// // //       title: "SOAR",
// // //       subtitle: "For Mid-Level Managers",
// // //       image: "https://cdn.harappa.education/wp-content/uploads/2022/10/14165145/program4.png", // Image from HTML
// // //       logoImage: "https://us.harappa.education/wp-content/themes/harappaeducation/src/images/us-pages/program-logo.png", // Logo from HTML
// // //       bottomBandColorClass: "bg-[#2E6A56]", // Corresponds to --green in HTML
// // //       link: "https://us.harappa.education/program/soar/",
// // //     },
// // //   ];

// // //   return (
// // //     <section id="programs" className="py-20 bg-yellow-400">
      
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

// // //         {/* ---- Section header ---- */}
// // //         <div className="text-center mb-16">
// // //           <h2 className="text-4xl font-bold text-gray-800 mb-4">Thrive Programs</h2>
// // //           <p className="text-lg text-gray-600 max-w-xl mx-auto">
// // //             Rich blended journeys that your people will love for making them more
// // //             productive, effective and happier
// // //           </p>
// // //         </div>

// // //         {/* ---- Cards grid ---- */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// // //           {programs.map((p, i) => (
// // //             <div
// // //               key={i}
// // //               className="flex flex-col rounded-lg overflow-hidden shadow-lg group"
// // //             >
// // //               {/* ------- Top (photo + yellow tint) ------- */}
// // //               <div className="relative h-[380px] bg-[#FDB813]"> {/* Base yellow background */}
// // //                 {/* Photo */}
// // //                 <img
// // //                   src={p.image}
// // //                   alt={p.title}
// // //                   className="absolute inset-0 w-full h-full object-cover grayscale"
// // //                   referrerPolicy="no-referrer"
// // //                 />
// // //                 {/* Yellow tint overlay */}
// // //                 <div className="absolute inset-0 bg-[#FDB813] opacity-60 mix-blend-multiply" />

// // //                 {/* ------- Bottom translucent band with content ------- */}
// // //                 <div
// // //                   className={`absolute bottom-0 w-full ${p.bottomBandColorClass} bg-opacity-90 px-5 py-6 text-white`}
// // //                 >
// // //                   <div className="flex flex-col items-start"> {/* Align content to start */}
// // //                     <img src={p.logoImage} alt="Harappa Logo" className="h-6 mb-2" /> {/* Harappa Logo Image */}
// // //                     <h3 className="text-4xl font-bold leading-none">{p.title}</h3>
// // //                     <p className="text-base font-medium">{p.subtitle}</p>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* ------- Learn More strip ------- */}
              
// // //               <a
// // //                 href={p.link}
// // //                 className="bg-white py-4 px-5 text-sm font-semibold flex items-center hover:text-[#FDB813] transition-colors text-gray-800"
// // //                 target="_blank" // Open link in new tab
// // //                 rel="noopener noreferrer" // Security best practice for target="_blank"
// // //               >
// // //                 Learn More
// // //                 {/* No arrow icon as per the provided HTML structure */}
// // //               </a>
// // //             </div>
// // //           ))}
// // //         </div>
        
// // //         {/* ---- Bottom Yellow Section: We’ve Got Your Back ---- */}
// // //         <div className="bg-white h-auto mt-16 py-12 rounded-md flex items-center justify-center text-center px-4">
// // //             <div className="max-w-3xl mx-auto text-black">
// // //                 <h1 className="text-4xl md:text-5xl font-bold mb-4">We’ve Got Your Back</h1>
// // //                 <p className="text-lg md:text-xl mb-8">
// // //                     What drives us: like-hearted, like-minded partnerships, programs that address your most urgent business problems such as attrition, retention and high-performance, with scalable and efficient solutions that work.
// // //                 </p>
// // //                 <a 
// // //                     href="mailto:global.contact@harappa.education" 
// // //                     className="inline-block bg-white text-[#FDB813] px-8 py-3 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
// // //                 >
// // //                     Write To Us
// // //                 </a>
// // //             </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }



// // import React from "react";
// // import { ArrowUpRight, ArrowRight } from "lucide-react"; // Re-import ArrowUpRight for angled arrows

// // interface Program {
// //   title: string;
// //   subtitle: string;
// //   image: string;
// //   logoImage: string; // URL for the small Harappa logo image
// //   bottomBandColorClass: string; // Class for the bottom band background
// //   link: string; // URL for the Learn More link
// //   arrowDirection: 'right' | 'up-right'; // Added back for arrow control
// // }

// // export default function Programs() {
// //   const programs: Program[] = [
// //     {
// //       title: "LEAP",
// //       subtitle: "For Aspiring Women Managers",
// //       image: "https://cdn.harappa.education/wp-content/uploads/2022/10/20122924/program1-1.png",
// //       logoImage: "https://us.harappa.education/wp-content/themes/harappaeducation/src/images/us-pages/program-logo.png",
// //       bottomBandColorClass: "bg-[#DD792C]", // Orange band
// //       link: "https://us.harappa.education/program/leap/",
// //       arrowDirection: 'up-right', // Changed to up-right as per image [cite: image_f85020.jpg]
// //     },
// //     {
// //       title: "RISE",
// //       subtitle: "For High-Performing Women Managers",
// //       image: "https://cdn.harappa.education/wp-content/uploads/2022/10/14165130/program2.png",
// //       logoImage: "https://us.harappa.education/wp-content/themes/harappaeducation/src/images/us-pages/program-logo.png",
// //       bottomBandColorClass: "bg-[#2E6A56]", // Green band
// //       link: "https://us.harappa.education/program/rise/",
// //       arrowDirection: 'up-right', // Changed to up-right as per image [cite: image_f85020.jpg]
// //     },
// //     {
// //       title: "GROW",
// //       subtitle: "For First-Time Managers",
// //       image: "https://cdn.harappa.education/wp-content/uploads/2022/10/14165136/program3.png",
// //       logoImage: "https://us.harappa.education/wp-content/themes/harappaeducation/src/images/us-pages/program-logo.png",
// //       bottomBandColorClass: "bg-[#DD792C]", // Orange band
// //       link: "https://us.harappa.education/program/grow/",
// //       arrowDirection: 'up-right', // Changed to up-right as per image [cite: image_f85020.jpg]
// //     },
// //     {
// //       title: "SOAR",
// //       subtitle: "For Mid-Level Managers",
// //       image: "https://cdn.harappa.education/wp-content/uploads/2022/10/14165145/program4.png",
// //       logoImage: "https://us.harappa.education/wp-content/themes/harappaeducation/src/images/us-pages/program-logo.png",
// //       bottomBandColorClass: "bg-[#2E6A56]", // Green band
// //       link: "https://us.harappa.education/program/soar/",
// //       arrowDirection: 'up-right', // Changed to up-right as per image [cite: image_f85020.jpg]
// //     },
// //   ];

// //   return (
// //     <section id="programs" className="relative"> {/* Make section relative for absolute positioning of yellow background */}
// //       {/* White background section for header and cards */}
// //       <div className="py-20 bg-white">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           {/* ---- Section header ---- */}
// //           <div className="text-center mb-16">
// //             <h2 className="text-4xl font-bold text-gray-800 mb-4">Thrive Programs</h2>
// //             <p className="text-lg text-gray-600 max-w-xl mx-auto">
// //               Rich blended journeys that your people will love for making them more
// //               productive, effective and happier
// //             </p>
// //           </div>

// //           {/* ---- Cards grid ---- */}
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// //             {programs.map((p, i) => (
// //               <div
// //                 key={i}
// //                 className="flex flex-col rounded-lg overflow-hidden shadow-lg group"
// //               >
// //                 {/* ------- Top (photo + yellow tint + arrow) ------- */}
// //                 <div className="relative h-[380px]"> {/* Removed bg-[#FDB813] from here */}
// //                   {/* Photo */}
// //                   <img
// //                     src={p.image}
// //                     alt={p.title}
// //                     className="absolute inset-0 w-full h-full object-cover grayscale"
// //                     referrerPolicy="no-referrer"
// //                   />
// //                   {/* Yellow tint overlay */}
// //                   <div className="absolute inset-0 bg-[#FDB813] opacity-60 mix-blend-multiply" />

// //                   {/* Big faded arrow - now conditional based on arrowDirection */}
// //                   {p.arrowDirection === 'up-right' ? (
// //                     <ArrowUpRight className="absolute top-3 right-3 w-20 h-20 text-white opacity-25 pointer-events-none" />
// //                   ) : (
// //                     <ArrowRight className="absolute top-3 right-3 w-20 h-20 text-white opacity-25 pointer-events-none" />
// //                   )}

// //                   {/* ------- Bottom translucent band with content ------- */}
// //                   <div
// //                     className={`absolute bottom-0 w-full ${p.bottomBandColorClass} bg-opacity-90 px-5 py-6 text-white`}
// //                   >
// //                     <div className="flex flex-col items-start">
// //                       <img src={p.logoImage} alt="Harappa Logo" className="h-6 mb-2" />
// //                       <h3 className="text-4xl font-bold leading-none">{p.title}</h3>
// //                       <p className="text-base font-medium">{p.subtitle}</p>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* ------- Learn More strip ------- */}
// //                 <a
// //                   href={p.link}
// //                   className="bg-white py-4 px-5 text-sm font-semibold flex items-center hover:text-[#FDB813] transition-colors text-gray-800"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                 >
// //                   Learn More
// //                 </a>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       {/* Yellow background for the bottom section */}
// //       {/* This div will start directly below the cards and extend downwards */}
// //       <div className="bg-[#FDB813] pt-16 pb-20"> {/* Added padding top/bottom */}
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
// //           {/* ---- We’ve Got Your Back content ---- */}
// //           <div className="max-w-3xl mx-auto text-gray-800"> {/* Changed text-white to text-gray-800 for contrast on yellow */}
// //               <h1 className="text-4xl md:text-5xl font-bold mb-4">We’ve Got Your Back</h1>
// //               <p className="text-lg md:text-xl mb-8">
// //                   What drives us: like-hearted, like-minded partnerships, programs that address your most urgent business problems such as attrition, retention and high-performance, with scalable and efficient solutions that work.
// //               </p>
// //               <a 
// //                   href="mailto:global.contact@harappa.education" 
// //                   className="inline-block bg-white text-[#FDB813] px-8 py-3 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
// //               >
// //                   Write To Us
// //               </a>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }






import React from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react"; // Re-import ArrowUpRight for angled arrows

interface Program {
  title: string;
  subtitle: string;
  image: string;
  logoImage: string; // URL for the small Harappa logo image
  bottomBandColorClass: string; // Class for the bottom band background
  link: string; // URL for the Learn More link
  arrowDirection: 'right' | 'up-right'; // Added back for arrow control
}

export default function Programs() {
  const programs: Program[] = [
    {
      title: "LEAP",
      subtitle: "For Aspiring Women Managers",
      image: "https://cdn.harappa.education/wp-content/uploads/2022/10/20122924/program1-1.png",
      logoImage: "https://us.harappa.education/wp-content/themes/harappaeducation/src/images/us-pages/program-logo.png",
      bottomBandColorClass: "bg-[#DD792C]", // Orange band
      link: "https://us.harappa.education/program/leap/",
      arrowDirection: 'up-right', // Changed to up-right as per image [cite: image_f85020.jpg]
    },
    {
      title: "RISE",
      subtitle: "For High-Performing Women Managers",
      image: "https://cdn.harappa.education/wp-content/uploads/2022/10/14165130/program2.png",
      logoImage: "https://us.harappa.education/wp-content/themes/harappaeducation/src/images/us-pages/program-logo.png",
      bottomBandColorClass: "bg-[#2E6A56]", // Green band
      link: "https://us.harappa.education/program/rise/",
      arrowDirection: 'up-right', // Changed to up-right as per image [cite: image_f85020.jpg]
    },
    {
      title: "GROW",
      subtitle: "For First-Time Managers",
      image: "https://cdn.harappa.education/wp-content/uploads/2022/10/14165136/program3.png",
      logoImage: "https://us.harappa.education/wp-content/themes/harappaeducation/src/images/us-pages/program-logo.png",
      bottomBandColorClass: "bg-[#DD792C]", // Orange band
      link: "https://us.harappa.education/program/grow/",
      arrowDirection: 'up-right', // Changed to up-right as per image [cite: image_f85020.jpg]
    },
    {
      title: "SOAR",
      subtitle: "For Mid-Level Managers",
      image: "https://cdn.harappa.education/wp-content/uploads/2022/10/14165145/program4.png",
      logoImage: "https://us.harappa.education/wp-content/themes/harappaeducation/src/images/us-pages/program-logo.png",
      bottomBandColorClass: "bg-[#2E6A56]", // Green band
      link: "https://us.harappa.education/program/soar/",
      arrowDirection: 'up-right', // Changed to up-right as per image [cite: image_f85020.jpg]
    },
  ];

  return (
    <section id="programs" className="relative"> {/* Make section relative for absolute positioning of yellow background */}
      {/* White background section for header and cards */}
      <br/>
      <div className="h-full">
        <div className="h-[90%] bg-white"></div>
        <div className="h-[10%] bg-yellow-500"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ---- Section header ---- */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#4a4a4a] mb-4" style={{ fontSize: '50px' }}>Thrive Programs</h2>
            <p className="text-lg text-[#4a4a4a] max-w-xl mx-auto">
              Rich blended journeys that your people will love for making them more
              productive, effective and happier
            </p>
          </div>

          {/* ---- Cards grid ---- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-20"> {/* Added relative z-20 */}
            {programs.map((p, i) => (
              <div
                key={i}
                className="flex flex-col rounded-lg overflow-hidden shadow-lg group"
              >
                {/* ------- Top (photo + yellow tint + arrow) ------- */}
                <div className="relative h-[380px] bg-[#FDB813]"> {/* Removed bg-[#FDB813] from here */}
                  {/* Photo */}
                  <img
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover grayscale"
                    referrerPolicy="no-referrer"
                  />
                  {/* Yellow tint overlay */}
                  <div className="absolute inset-0 bg-[#FDB813] opacity-60 mix-blend-multiply" />

                  {/* Big faded arrow - now conditional based on arrowDirection */}
                  {p.arrowDirection === 'up-right' ? (
                    <ArrowUpRight className="absolute top-3 right-3 w-20 h-20 text-white opacity-25 pointer-events-none" />
                  ) : (
                    <ArrowRight className="absolute top-3 right-3 w-20 h-20 text-white opacity-25 pointer-events-none" />
                  )}

                  {/* ------- Bottom translucent band with content ------- */}
                  <div
                    className={`absolute bottom-0 w-full ${p.bottomBandColorClass} bg-opacity-90 px-5 py-6 text-white`}
                  >
                    <div className="flex flex-col items-start">
                      <img src={p.logoImage} alt="Harappa Logo" className="h-6 mb-2" />
                      <h3 className="text-4xl font-bold leading-none">{p.title}</h3>
                      <p className="text-base font-medium">{p.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* ------- Learn More strip ------- */}
                <a
                  href={p.link}
                  className="bg-white py-4 px-5 text-sm font-semibold flex items-center hover:text-[#FDB813] transition-colors text-gray-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Yellow background for the bottom section */}
      {/* This div will start directly below the cards and extend downwards */}
      <div className="bg-[#FDB813] pt-20 pb-20 -mt-20 relative z-10"> {/* Added -mt-11 and relative z-10 */}
        <br/>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* ---- We’ve Got Your Back content ---- */}
          <div className="max-w-3xl mx-auto text-[#4a4a4a]"> {/* Changed text-white to text-[#4a4a4a] for contrast on yellow */}
              <br/>
              <h1 className="text-4xl md:text-5xl font-bold text-[40px] mb-4">We’ve Got Your Back</h1>
              <p className="text-[16px] mb-8">
                  What drives us: like-hearted, like-minded partnerships, programs that address your most urgent business problems such as attrition, retention and high-performance, with scalable and efficient solutions that work.
              </p>
              <a 
                  href="mailto:global.contact@harappa.education" 
                  className="inline-flex items-center bg-white text-[#4a4a4a] px-8 py-2 rounded-full font-bold text-base hover:bg-gray-100 transition-colors shadow-lg border-2 border-[#FDB813]"
              >
                  Write To Us
                  <ArrowRight className="ml-2 h-5 w-5" />
              </a>
          </div>
        </div>
      </div>
    </section>
  );
}




// import React from "react";
// import { ArrowUpRight, ArrowRight } from "lucide-react";

// interface Program {
//   title: string;
//   subtitle: string;
//   image: string;
//   logoImage: string; // URL for the small Harappa logo image
//   bottomBandColorClass: string; // Class for the bottom band background
//   link: string; // URL for the Learn More link
//   arrowDirection: 'right' | 'up-right'; // Added back for arrow control
// }

// export default function Programs() {
//   const programs: Program[] = [
//     {
//       title: "LEAP",
//       subtitle: "For Aspiring Women Managers",
//       image: "https://cdn.harappa.education/wp-content/uploads/2022/10/20122924/program1-1.png",
//       logoImage: "https://us.harappa.education/wp-content/themes/harappaeducation/src/images/us-pages/program-logo.png",
//       bottomBandColorClass: "bg-[#DD792C]", // Orange band
//       link: "https://us.harappa.education/program/leap/",
//       arrowDirection: 'up-right',
//     },
//     {
//       title: "RISE",
//       subtitle: "For High-Performing Women Managers",
//       image: "https://cdn.harappa.education/wp-content/uploads/2022/10/14165130/program2.png",
//       logoImage: "https://us.harappa.education/wp-content/themes/harappaeducation/src/images/us-pages/program-logo.png",
//       bottomBandColorClass: "bg-[#2E6A56]", // Green band
//       link: "https://us.harappa.education/program/rise/",
//       arrowDirection: 'up-right',
//     },
//     {
//       title: "GROW",
//       subtitle: "For First-Time Managers",
//       image: "https://cdn.harappa.education/wp-content/uploads/2022/10/14165136/program3.png",
//       logoImage: "https://us.harappa.education/wp-content/themes/harappaeducation/src/images/us-pages/program-logo.png",
//       bottomBandColorClass: "bg-[#DD792C]", // Orange band
//       link: "https://us.harappa.education/program/grow/",
//       arrowDirection: 'up-right',
//     },
//     {
//       title: "SOAR",
//       subtitle: "For Mid-Level Managers",
//       image: "https://cdn.harappa.education/wp-content/uploads/2022/10/14165145/program4.png",
//       logoImage: "https://us.harappa.education/wp-content/themes/harappaeducation/src/images/us-pages/program-logo.png",
//       bottomBandColorClass: "bg-[#2E6A56]", // Green band
//       link: "https://us.harappa.education/program/soar/",
//       arrowDirection: 'up-right',
//     },
//   ];

//   return (
//     <section id="programs" className="relative">
//       {/* White background section for header and cards */}
//       <div className="py-20 bg-white relative z-10"> {/* Ensure white section is below cards but above yellow bg */}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* ---- Section header ---- */}
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">Thrive Programs</h2>
//             <p className="text-lg text-gray-600 max-w-xl mx-auto">
//               Rich blended journeys that your people will love for making them more
//               productive, effective and happier
//             </p>
//           </div>

//           {/* ---- Cards grid ---- */}
//           {/* The grid itself needs to be relative and z-indexed for absolute positioning of Learn More links */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-30"> {/* Increased z-index for cards */}
//             {programs.map((p, i) => (
//               <div
//                 key={i}
//                 className="flex flex-col rounded-lg overflow-hidden shadow-lg group bg-white" /* Ensure card background is white */
//               >
//                 {/* ------- Top (photo + color tint + arrow) ------- */}
//                 <div className="relative h-[380px]">
//                   {/* Photo */}
//                   <img
//                     src={p.image}
//                     alt={p.title}
//                     className="absolute inset-0 w-full h-full object-cover grayscale"
//                     referrerPolicy="no-referrer"
//                   />
//                   {/* Color tint overlay */}
//                   <div className="absolute inset-0 bg-[#FDB813] opacity-60 mix-blend-multiply" />

//                   {/* Big faded arrow */}
//                   {p.arrowDirection === 'up-right' ? (
//                     <ArrowUpRight className="absolute top-3 right-3 w-20 h-20 text-white opacity-25 pointer-events-none" />
//                   ) : (
//                     <ArrowRight className="absolute top-3 right-3 w-20 h-20 text-white opacity-25 pointer-events-none" />
//                   )}

//                   {/* ------- Bottom translucent band with content ------- */}
//                   <div
//                     className={`absolute bottom-0 w-full ${p.bottomBandColorClass} bg-opacity-90 px-5 py-6 text-white`}
//                   >
//                     <div className="flex flex-col items-start">
//                       <img src={p.logoImage} alt="Harappa Logo" className="h-6 mb-2" />
//                       <h3 className="text-4xl font-bold leading-none">{p.title}</h3>
//                       <p className="text-base font-medium">{p.subtitle}</p>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Removed Learn More from here */}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Yellow background for the bottom section */}
//       {/* This div now overlaps the bottom of the cards and contains the Learn More links */}
//       <div className="bg-[#FDB813] pt-16 pb-20 -mt-20 relative z-20"> {/* Adjusted -mt-20 for more overlap, z-20 to be above white bg */}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           {/* Learn More links, positioned to align with cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-24 mb-12 relative z-30"> {/* Negative margin to pull up, z-index to be above yellow bg */}
//             {programs.map((p, i) => (
//               <a
//                 key={`learn-more-${i}`}
//                 href={p.link}
//                 className="bg-white py-4 px-5 text-sm font-semibold flex items-center justify-center hover:text-[#FDB813] transition-colors text-gray-800 rounded-b-lg shadow-lg" /* Added rounded-b-lg and shadow */
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Learn More
//               </a>
//             ))}
//           </div>

//           {/* ---- We’ve Got Your Back content ---- */}
//           <div className="max-w-3xl mx-auto text-gray-800">
//               <h1 className="text-4xl md:text-5xl font-bold mb-4">We’ve Got Your Back</h1>
//               <p className="text-lg md:text-xl mb-8">
//                   What drives us: like-hearted, like-minded partnerships, programs that address your most urgent business problems such as attrition, retention and high-performance, with scalable and efficient solutions that work.
//               </p>
//               <a 
//                   href="mailto:global.contact@harappa.education" 
//                   className="inline-block bg-white text-[#FDB813] px-8 py-3 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
//               >
//                   Write To Us
//               </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
