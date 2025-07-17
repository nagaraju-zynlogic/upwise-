import React from 'react';
import Header from './components/Header';
// import Hero from './components/Hero';
import Programs from './components/Programs';
// import Guarantee from './components/Guarantee';
import TheoryOfChange from './components/TheoryOfChange';
import DNASuccess from './components/DNASuccess';
import Statistics from './components/Statistics';
import Partnerships from './components/Partnerships';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ClientTrust from './components/ClientTrust';
import ContactForm from './components/ContactForm';
import AwardsSection from './components/AwardsSection';
import HeroAnimated from './components/HeroAnimated';


function App() {
  return (
    <div className="min-h-screen bg-white">

      <Header />
      <HeroAnimated/>
      {/* <Hero /> */}
      <Programs />
      {/* <Guarantee /> */}
      <TheoryOfChange />
      <DNASuccess />
      <ClientTrust />
      <Statistics />
      {/* <Partnerships /> */}
      <AwardsSection/>
      <ContactForm/>
      {/* <Contact /> */}
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;



// "use client"; // Keep this if you are using Next.js App Router. Otherwise, you can remove it.

// import React, { useRef } from "react"; // Only useRef is needed now

// // --- ScrollVelocity Component Definition ---
// // Make sure you have 'framer-motion' installed: npm install framer-motion
// // And a utility for `cn` (class name concatenation), e.g., 'clsx' or 'tailwind-merge'.
// // If you don't have `cn`, you can replace it with a simple template literal for basic cases.

// import {
//   motion,
//   useScroll,
//   useSpring,
//   useTransform,
//   useMotionValue,
//   useVelocity,
//   useAnimationFrame,
//   wrap,
// } from "framer-motion";

// // Simple `cn` utility if you don't have one set up.
// // For production, consider using a library like `clsx` or `tailwind-merge`.
// const cn = (...classes) => classes.filter(Boolean).join(' ');

// interface ScrollVelocityProps extends React.HTMLAttributes<HTMLDivElement> {
//   children: React.ReactNode[] | string;
//   velocity: number;
//   movable?: boolean;
//   clamp?: boolean;
// }

// const ScrollVelocity = React.forwardRef<HTMLDivElement, ScrollVelocityProps>(
//   ({ children, velocity = 5, movable = true, clamp = false, className, ...props }, ref) => {
//     const baseX = useMotionValue(0);
//     const { scrollY } = useScroll();
//     const scrollVelocity = useVelocity(scrollY);
//     const smoothVelocity = useSpring(scrollVelocity, {
//       damping: 50,
//       stiffness: 100,
//     });
//     const velocityFactor = useTransform(smoothVelocity, [0, 10000], [0, 5], {
//       clamp,
//     });

//     const x = useTransform(baseX, (v) => `${wrap(0, -50, v)}%`);

//     const directionFactor = useRef<number>(1);
//     const scrollThreshold = useRef<number>(5);

//     useAnimationFrame((t, delta) => {
//       if (movable) {
//         move(delta);
//       } else {
//         if (Math.abs(scrollVelocity.get()) >= scrollThreshold.current) {
//           move(delta);
//         }
//       }
//     });

//     function move(delta: number) {
//       let moveBy = directionFactor.current * velocity * (delta / 1000);
//       if (velocityFactor.get() < 0) {
//         directionFactor.current = -1;
//       } else if (velocityFactor.get() > 0) {
//         directionFactor.current = 1;
//       }
//       moveBy += directionFactor.current * moveBy * velocityFactor.get();
//       baseX.set(baseX.get() + moveBy);
//     }

//     return (
//       <div
//         ref={ref}
//         className={cn("relative m-0 flex flex-nowrap overflow-hidden whitespace-nowrap leading-[0.8] tracking-[-2px]", className)}
//         {...props}
//       >
//         <motion.div
//           className="flex flex-row flex-nowrap whitespace-nowrap text-xl font-semibold uppercase *:mr-6 *:block md:text-2xl xl:text-4xl"
//           style={{ x }}
//         >
//           {typeof children === "string" ? (
//             <>
//               {Array.from({ length: 5 }).map((_, idx) => (
//                 <span key={idx}>{children}</span>
//               ))}
//             </>
//           ) : (
//             children
//           )}
//         </motion.div>
//       </div>
//     );
//   },
// );
// ScrollVelocity.displayName = "ScrollVelocity";
// // --- End ScrollVelocity Component Definition ---

// export default function TheoryOfChange() {
//   // activePhaseId state and its usage are removed as the large details section is gone.

//   const phases = [
//     {
//       id: 0,
//       title: "LEARNING",
//       description: "To get familiar with key concepts and frameworks",
//       color: "bg-[#FDB813]", // Yellow
//       contentImage: "/images/learn.png", // Ensure this path is correct relative to your public/assets folder
//     },
//     {
//       id: 1,
//       title: "APPLICATION",
//       description: "To apply concepts in real-world scenarios",
//       color: "bg-[#33A46A]", // Green
//       contentImage: "/images/application.png", // Ensure this path is correct
//     },
//     {
//       id: 2,
//       title: "EXPERIENCE",
//       description: "To deeply engage through memorable tools and immersions",
//       color: "bg-[#009EE0]", // Blue
//       contentImage: "/images/experience.png", // Ensure this path is correct
//     },
//     {
//       id: 3,
//       title: "COACHING",
//       description: "To receive personalized guidance and feedback",
//       color: "bg-[#EE2A7B]", // Pink
//       contentImage: "/images/coaching.png", // Ensure this path is correct
//     },
//     {
//       id: 4,
//       title: "REINFORCEMENT",
//       description: "To solidify learning and drive sustained behavioral change",
//       color: "bg-[#4D4D4D]", // Dark Gray
//       contentImage: "/images/reinforcement.png", // Ensure this path is correct
//     },
//     {
//       id: 5,
//       title: "NUDGING",
//       description: "To deploy behavior science techniques for high consumption",
//       color: "bg-[#F77E3C]", // Orange
//       contentImage: "/images/nudging.png", // Ensure this path is correct
//     },
//   ];

//   const scrollVelocities = [3, -3]; // Define velocities for the ScrollVelocity component

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-[40px] font-bold text-[#4a4a4a] mb-4">
//             Our Theory Of Change
//           </h2>
//           <p className="text-[16px] text-[#4a4a4a] max-w-3xl mx-auto">
//             Creative pedagogical approach with benchmark consumption, unmatched learner love and genuine real-world
//             impact for today's constantly-shifting workplaces
//           </p>
//         </div>

//         {/* Dynamic Phases (ScrollVelocity Integration) */}
//         <div className="w-full"> {/* Removed mb-16 as no section below */}
//           <div className="flex flex-col space-y-5 py-10">
//             {scrollVelocities.map((v, index) => (
//               <ScrollVelocity key={index} velocity={v}>
//                 {phases.map((phase) => (
//                   <div
//                     key={phase.id}
//                     className={cn(
//                       "relative h-[8rem] w-[14rem] md:h-[10rem] md:w-[18rem] xl:h-[14rem] xl:w-[22rem]", // Increased size to better fit content
//                       "flex flex-col items-center justify-center p-3 text-white text-center rounded-lg shadow-md overflow-hidden", // Added overflow-hidden
//                       phase.color
//                     )}
//                     // Removed onMouseEnter/onMouseLeave as there's no active state to manage here
//                   >
//                     {/* Image at the top of the card */}
//                     {phase.contentImage && (
//                         <img
//                           src={phase.contentImage}
//                           alt={phase.title}
//                           width={64} // Smaller size for the icon/image within the card
//                           height={64} // Consistent height
//                           className="object-contain mb-2 flex-shrink-0" // mb-2 for spacing, flex-shrink-0 to prevent shrinking
//                         />
//                     )}
//                     <h3 className="font-bold text-lg md:text-xl xl:text-2xl leading-tight mb-1"> {/* Adjusted leading-tight */}
//                         {phase.title}
//                     </h3>
//                     <p className="text-sm opacity-90 leading-snug"> {/* Adjusted leading-snug */}
//                         {phase.description}
//                     </p>
//                   </div>
//                 ))}
//               </ScrollVelocity>
//             ))}
//           </div>
//         </div>

//         {/* The large details section has been entirely removed from here */}

//       </div>
//     </section>
//   );
// }