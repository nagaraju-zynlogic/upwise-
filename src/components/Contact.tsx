// import React, { useState } from 'react';
// import { Mail, Phone, MapPin, Send } from 'lucide-react';

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     company: '',
//     message: ''
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <section id="contact" className="py-20 bg-[#FDB813] text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Talk To Us
//           </h2>
//           <p className="text-xl opacity-90 max-w-3xl mx-auto">
//             Ready to transform your organization? Let's discuss how Upwise can help you achieve your training goals.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           <div>
//             <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
//             <div className="space-y-6">
//               <div className="flex items-center space-x-4">
//                 <Mail className="h-6 w-6 opacity-80" />
//                 <span className="text-lg">hello@upwise.com</span>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <Phone className="h-6 w-6 opacity-80" />
//                 <span className="text-lg">+1 (555) 123-4567</span>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <MapPin className="h-6 w-6 opacity-80" />
//                 <span className="text-lg">New York, NY | London, UK | Singapore</span>
//               </div>
//             </div>

//             <div className="mt-12">
//               <h4 className="text-xl font-semibold mb-4">Why Choose Upwise?</h4>
//               <ul className="space-y-3">
//                 <li className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-white rounded-full"></div>
//                   <span>Proven track record with Fortune 500 companies</span>
//                 </li>
//                 <li className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-white rounded-full"></div>
//                   <span>Customized training solutions for your industry</span>
//                 </li>
//                 <li className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-white rounded-full"></div>
//                   <span>Expert trainers with real-world experience</span>
//                 </li>
//                 <li className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-white rounded-full"></div>
//                   <span>Measurable ROI and business impact</span>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="bg-white rounded-lg p-8">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Your Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-gray-900"
//                 />
//               </div>
//               <div>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Your Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-gray-900"
//                 />
//               </div>
//               <div>
//                 <input
//                   type="text"
//                   name="company"
//                   placeholder="Company Name"
//                   value={formData.company}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-gray-900"
//                 />
//               </div>
//               <div>
//                 <textarea
//                   name="message"
//                   placeholder="Tell us about your training needs..."
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows={4}
//                   className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-gray-900 resize-none"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-[#FDB813] text-white px-6 py-3 rounded-md font-bold text-lg hover:bg-[#E5A50A] transition-colors flex items-center justify-center space-x-2 shadow-lg"
//               >
//                 <Send className="h-5 w-5" />
//                 <span>Send Message</span>
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




import React, { useState } from 'react';
// Removed unused icons as they are not present in the target UI image
// import { Mail, Phone, MapPin, Send } from 'lucide-react'; 

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '' // Changed from 'company' to 'mobile' based on image
  });

  // State for the checkbox
  const [authorizeContact, setAuthorizeContact] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthorizeContact(e.target.checked);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, authorizeContact });
    // Add your form submission logic here (e.g., API call)
  };

  return (
    <section id="contact" className="py-20 bg-[#FDB813] flex items-center justify-center min-h-screen"> {/* Adjusted styling for full yellow background */}
      <div className="max-w-md w-full mx-auto px-4 sm:px-6 lg:px-8"> {/* Adjusted max-width for the form */}
        <div className="text-center mb-10"> {/* Adjusted margin-bottom */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"> {/* Text color from image */}
            Talk To Us
          </h2>
        </div>

        {/* Removed the left column (Get in Touch, Why Choose Upwise) */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"> */}
        
          <div className="bg-white rounded-lg p-8 shadow-lg"> {/* Added shadow for depth */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name*" // Added asterisk
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-gray-900"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Work Email*" // Added asterisk
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-gray-900"
                />
              </div>
              <div>
                <input
                  type="tel" // Changed type to tel for mobile number
                  name="mobile" // Changed name to mobile
                  placeholder="Mobile*" // Changed placeholder and added asterisk
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-gray-900"
                />
              </div>
              {/* Removed the textarea for message as it's not in the image */}
              {/* <div>
                <textarea
                  name="message"
                  placeholder="Tell us about your training needs..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-gray-900 resize-none"
                />
              </div> */}
              
              {/* Checkbox */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="authorizeContact"
                  name="authorizeContact"
                  checked={authorizeContact}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-[#FDB813] rounded focus:ring-[#FDB813] border-gray-300"
                />
                <label htmlFor="authorizeContact" className="ml-2 text-gray-700 text-sm">
                  I authorize Harappa to contact me?
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-700 text-white px-6 py-3 rounded-md font-bold text-lg hover:bg-blue-800 transition-colors flex items-center justify-center space-x-2" // Changed button color and text
              >
                {/* Removed Send icon as it's not in the image */}
                {/* <Send className="h-5 w-5" /> */}
                <span>Schedule A Meeting</span>
              </button>
            </form>
            {/* Added the small text below the button as seen in the image */}
            <p className="text-center text-xs text-pink-500 mt-4">
                <span className="flex items-center justify-center">
                    <span className="text-base mr-1 transform rotate-90">&lt;</span>
                    Create your own free form
                    <span className="text-base ml-1 transform -rotate-90">&gt;</span>
                </span>
                to generate leads from your website.
            </p>
          </div>
        {/* </div> */}
      </div>
    </section>
  );
}