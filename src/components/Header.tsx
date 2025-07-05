// // import React, { useState } from 'react';
// // import { Menu, X, ArrowUp } from 'lucide-react';

// // export default function Header() {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// //   return (
// //     <header className="bg-white shadow-sm sticky top-0 z-50">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex justify-between items-center h-16">
// //           <div className="flex items-center">
// //             <div className="flex-shrink-0 flex items-center">
// //               <ArrowUp className="h-8 w-8 text-[#FDB813]" />
// //               <span className="ml-2 text-2xl font-bold text-gray-800">UPWISE</span>
// //             </div>
// //           </div>
          
// //           <nav className="hidden md:flex space-x-8">
// //             <a href="#programs" className="text-gray-700 hover:text-[#FDB813] transition-colors font-medium">Programs</a>
// //             <a href="#methodology" className="text-gray-700 hover:text-[#FDB813] transition-colors font-medium">Methodology</a>
// //             <a href="#success" className="text-gray-700 hover:text-[#FDB813] transition-colors font-medium">Success</a>
// //             <a href="#about" className="text-gray-700 hover:text-[#FDB813] transition-colors font-medium">About</a>
// //             <a href="#contact" className="text-gray-700 hover:text-[#FDB813] transition-colors font-medium">Contact</a>
// //           </nav>

// //           <div className="hidden md:flex items-center space-x-4">
// //             <button className="bg-[#FDB813] text-white px-6 py-2 rounded-md hover:bg-[#E5A50A] transition-colors font-semibold">
// //               Get Started
// //             </button>
// //           </div>

// //           <div className="md:hidden">
// //             <button
// //               onClick={() => setIsMenuOpen(!isMenuOpen)}
// //               className="text-gray-700 hover:text-[#FDB813]"
// //             >
// //               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
// //             </button>
// //           </div>
// //         </div>

// //         {isMenuOpen && (
// //           <div className="md:hidden">
// //             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
// //               <a href="#programs" className="block px-3 py-2 text-gray-700 hover:text-[#FDB813] font-medium">Programs</a>
// //               <a href="#methodology" className="block px-3 py-2 text-gray-700 hover:text-[#FDB813] font-medium">Methodology</a>
// //               <a href="#success" className="block px-3 py-2 text-gray-700 hover:text-[#FDB813] font-medium">Success</a>
// //               <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-[#FDB813] font-medium">About</a>
// //               <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-[#FDB813] font-medium">Contact</a>
// //               <button className="w-full mt-3 bg-[#FDB813] text-white px-6 py-2 rounded-md hover:bg-[#E5A50A] transition-colors font-semibold">
// //                 Get Started
// //               </button>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </header>
// //   );
// // }

// import React, { useState } from 'react';
// import { Menu, X, ChevronDown } from 'lucide-react'; // Import ChevronDown for dropdown indicators

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-sm sticky top-0 z-50">
//       <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8"> {/* Changed max-w-7xl to max-w-full to allow content closer to edges if needed, adjust if specific max-width is desired */}
//         <div className="flex justify-between items-center h-16">
//           {/* Logo Section */}
//           <div className="flex items-center">
//             <div className="flex-shrink-0 flex items-center">
//               {/* Harappa Logo - assuming an SVG or image, for now using text with specific styling */}
//               {/* If you have an SVG or image file for the Harappa logo, replace the span below */}
//               <span className="text-gray-800 text-3xl font-bold tracking-tight"> {/* Adjust font size and weight to match image */}
//                 <span className="inline-block" style={{ transform: 'scale(1.2, 1)' }}>{/* Adjust scale for letter spacing/width if needed for HARAPPA visual */}
//                     <span style={{ color: '#000', fontSize: '1.8rem' }}>H</span>
//                     <span style={{ color: '#000', fontSize: '1.8rem' }}>ARAPPA</span>
//                 </span>
//               </span>
//             </div>
//           </div>
          
//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-8 items-center"> {/* Added items-center for vertical alignment with button */}
//             <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center"> {/* Changed hover color to blue */}
//               About Us <ChevronDown className="ml-1 h-4 w-4 text-gray-500" /> {/* Added dropdown icon */}
//             </a>
//             <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center"> {/* Changed hover color to blue */}
//               Our Offerings <ChevronDown className="ml-1 h-4 w-4 text-gray-500" /> {/* Added dropdown icon */}
//             </a>
//             <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center"> {/* Changed hover color to blue */}
//               Thrive Skills <ChevronDown className="ml-1 h-4 w-4 text-gray-500" /> {/* Added dropdown icon */}
//             </a>
//             <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center"> {/* Changed hover color to blue */}
//               Resources <ChevronDown className="ml-1 h-4 w-4 text-gray-500" /> {/* Added dropdown icon */}
//             </a>
//           </nav>

//           {/* Desktop Button */}
//           <div className="hidden md:flex items-center space-x-4">
//             <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors font-semibold shadow-md"> {/* Changed background to blue-500, hover to blue-600, added shadow */}
//               Schedule A Meeting
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-gray-700 hover:text-blue-600" // Changed hover color
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu Content */}
//         {isMenuOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
//               <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">About Us</a>
//               <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Our Offerings</a>
//               <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Thrive Skills</a>
//               <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Resources</a>
//               <button className="w-full mt-3 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors font-semibold">
//                 Schedule A Meeting
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }




import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Keeping max-w-7xl for better content alignment, as seen in image */}
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              {/* Harappa Logo - using text for now, but ideally an SVG or image */}
              {/* The image shows a small square graphic to the left of "HARAPPA" */}
              {/* For precise logo, you'd embed an SVG or image here. */}
              {/* Using a placeholder div for the graphic. */}
              
              <span className="text-gray-800 text-2xl font-bold tracking-tight">
              
                <img src='upwise-logo.jpg' alt="Harappa Logo" width="120" height="70" />
               
              </span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            {/* Reduced space-x-8 to space-x-6 for less gap */}
            <ul className="flex space-x-6"> 
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors font-medium flex items-center">
                  About Us <ChevronDown className="ml-1 h-4 w-4 text-[#FDB813]" /> {/* Changed icon color to yellow */}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors font-medium flex items-center">
                  Our Offerings <ChevronDown className="ml-1 h-4 w-4 text-[#FDB813]" /> {/* Changed icon color to yellow */}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors font-medium flex items-center">
                  Thrive Skills <ChevronDown className="ml-1 h-4 w-4 text-[#FDB813]" /> {/* Changed icon color to yellow */}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors font-medium flex items-center">
                  Resources <ChevronDown className="ml-1 h-4 w-4 text-[#FDB813]" /> {/* Changed icon color to yellow */}
                </a>
              </li>
            </ul>
          </nav>

          {/* Desktop Button - Reduced padding/margin for less gap */}
          <div className="hidden md:flex items-center ml-8"> {/* Adjusted margin-left for spacing */}
            <button className="bg-blue-500 text-white px-5 py-2.5 rounded-md hover:bg-blue-600 transition-colors font-semibold shadow-md text-base"> {/* Adjusted px and py for size, font size for matching */}
              Schedule A Meeting
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Content */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">About Us</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Our Offerings</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Thrive Skills</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Resources</a>
              <button className="w-full mt-3 bg-[#009bea] text-white px-6 py-2 rounded-md hover:bg-[#0088d1] transition-colors font-semibold rounded-lg">
                Schedule A Meeting
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}