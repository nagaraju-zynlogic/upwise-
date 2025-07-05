// import React from 'react';

// export default function TheoryOfChange() {
//   const phases = [
//     {
//       title: "DISCOVER",
//       description: "Assessment & Analysis",
//       color: "bg-red-500",
//       textColor: "text-white"
//     },
//     {
//       title: "DESIGN",
//       description: "Custom Solutions",
//       color: "bg-green-500",
//       textColor: "text-white"
//     },
//     {
//       title: "DELIVER",
//       description: "Expert Training",
//       color: "bg-blue-500",
//       textColor: "text-white"
//     },
//     {
//       title: "DEPLOY",
//       description: "Implementation",
//       color: "bg-pink-500",
//       textColor: "text-white"
//     },
//     {
//       title: "DEVELOP",
//       description: "Continuous Growth",
//       color: "bg-gray-700",
//       textColor: "text-white"
//     }
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//             Our Theory Of Change
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Our proven 5-phase methodology ensures sustainable transformation and measurable business impact.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div className="flex flex-col md:flex-row">
//             {phases.map((phase, index) => (
//               <div key={index} className={`${phase.color} ${phase.textColor} p-6 flex-1 text-center`}>
//                 <div className="transform -rotate-90 md:rotate-0">
//                   <h3 className="text-lg font-bold mb-2">{phase.title}</h3>
//                   <p className="text-sm opacity-90">{phase.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="relative">
//             <div className="bg-[#FDB813] text-white p-8 rounded-lg">
//               <div className="mb-6">
//                 <div className="text-4xl font-bold mb-2">JUDGING</div>
//                 <p className="text-lg opacity-90">
//                   We evaluate current capabilities and identify growth opportunities to create targeted development plans.
//                 </p>
//               </div>
//               <div className="space-y-4">
//                 <div className="flex items-center space-x-2">
//                   <div className="w-3 h-3 bg-white rounded-full"></div>
//                   <span>Skills Assessment</span>
                  
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <div className="w-3 h-3 bg-white rounded-full"></div>
//                   <span>Gap Analysis</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <div className="w-3 h-3 bg-white rounded-full"></div>
//                   <span>Custom Roadmap</span>
//                 </div>
//               </div>
//             </div>
//             <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-300 rounded-full opacity-20"></div>
//             <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-yellow-400 rounded-full opacity-20"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }








import React, { useState } from 'react';
import { ArrowUp, ArrowRight } from 'lucide-react'; // Import ArrowUp and ArrowRight icons

export default function TheoryOfChange() {
  // State to manage the currently active (hovered/expanded) phase
  const [activePhase, setActivePhase] = useState(0); // Default to the first phase

  const phases = [
    {
      id: 0,
      title: "LEARNING",
      description: "To get familiar with key concepts and frameworks",
      color: "bg-[#FDB813]", // Yellow
      // color: "bg-[#F77E3C]", // Orange
      icon: "learn.png", // Replace with actual path or use an SVG/component
      // For demonstration, using placeholder image URLs. You'd use actual local paths.
      contentImage: "learn.png", // Example from image
      arrowRotation: "", // No specific rotation for the text inside (it's horizontal in expanded state)
    },
    {
      id: 1,
      title: "APPLICATION",
      description: "To apply concepts in real-world scenarios",
      color: "bg-[#33A46A]", // Green
      icon: "/path/to/application-icon.png",
      contentImage: "application.png", // Placeholder
      arrowRotation: "",
    },
    {
      id: 2,
      title: "EXPERIENCE",
      description: "To deeply engage through memorable tools and immersions",
      color: "bg-[#009EE0]", // Blue
      icon: "experience.png",
      contentImage: "experience.png", // Placeholder
      arrowRotation: "",
    },
    {
      id: 3,
      title: "COACHING",
      description: "To receive personalized guidance and feedback",
      color: "bg-[#EE2A7B]", // Pink
      icon: "/path/to/coaching-icon.png",
      contentImage: "coaching.png", // Placeholder
      arrowRotation: "",
    },
    {
      id: 4,
      title: "REINFORCEMENT",
      description: "To solidify learning and drive sustained behavioral change",
      color: "bg-[#4D4D4D]", // Dark Gray
      icon: "/path/to/reinforcement-icon.png",
      contentImage: "reinforcement.png", // Placeholder
      arrowRotation: "",
    },
    {
      id: 5,
      title: "NUDGING",
      description: "To deploy behavior science techniques for high consumption",
      // color: "bg-[#FDB813]", // Yellow
      color: "bg-[#F77E3C]", // Orange
      icon: "/path/to/nudging-icon.png",
      contentImage: "nudging.png", // Placeholder
      arrowRotation: "",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[40px] font-bold text-[#4a4a4a] mb-4">
            Our Theory Of Change
          </h2>
          <p className="text-[16px] text-[#4a4a4a] max-w-3xl mx-auto">
            Creative pedagogical approach with benchmark consumption, unmatched learner love and genuine real-world
            impact for today's constantly-shifting workplaces
          </p>
        </div>

        {/* Dynamic Phases Container */}
        <div className="flex justify-center items-stretch h-[500px] rounded-2xl overflow-hidden shadow-xl">
          {phases.map((phase, index) => (
            <div
              key={phase.id}
              className={`
                relative
                ${phase.color}
                text-white
                flex flex-col items-center justify-center
                cursor-pointer
                transition-all duration-500 ease-in-out transform
                ${activePhase === phase.id ? 'flex-grow-[3] w-[60%] z-20' : 'flex-grow-[1] w-[10%] z-10'}
                ${activePhase !== null && activePhase !== phase.id ? 'opacity-80' : ''}
              `}
              onMouseEnter={() => setActivePhase(phase.id)}
              onMouseLeave={() => setActivePhase(0)} // Reset to default (LEARNING) when mouse leaves any strip
            >
              {/* Vertical Text for collapsed state */}
              <div
                className={`
                  absolute
                  transform -rotate-90 origin-center
                  whitespace-nowrap
                  font-extrabold text-2xl
                  transition-opacity duration-300
                  ${activePhase === phase.id ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'}
                `}
              >
                {phase.title}
              </div>

              {/* Arrow for collapsed state */}
              <div
                className={`
                  absolute top-4 right-4
                  transition-opacity duration-300
                  ${activePhase === phase.id ? 'opacity-0' : 'opacity-100'}
                `}
              >
                <ArrowRight className="w-6 h-6" />
              </div>

              {/* Content for expanded state */}
              <div
                className={`
                  absolute
                  p-8
                  text-center
                  flex flex-col items-center justify-center
                  transition-all duration-500 ease-in-out
                  ${activePhase === phase.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}
                  ${activePhase === phase.id ? '' : 'pointer-events-none'} // Disable interaction when not active
                `}
              >
                {phase.contentImage && (
                  <img src={phase.contentImage} alt={phase.title} className="mb-4 h-48 object-contain" />
                )}
                <h3 className="font-extrabold text-5xl mb-2 flex items-center">
                  {phase.title}
                  <ArrowUp className="ml-2 w-8 h-8 transform rotate-0" /> {/* Arrow pointing up */}
                </h3>
                <p style={{ color: '#4a4a4a' }} className="text-xl max-w-sm">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
