// import React, { useState } from 'react';
// import { ChevronDown, ChevronUp } from 'lucide-react';

// export default function FAQ() {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const faqs = [
//     {
//       question: "What makes Upwise different from other corporate training providers?",
//       answer: "Upwise combines deep industry expertise with a proven methodology that delivers measurable results. Our programs are customized for each organization and backed by our comprehensive satisfaction guarantee."
//     },
//     {
//       question: "How long does it take to see results from Upwise training programs?",
//       answer: "Most organizations see immediate improvements in participant engagement and skill application. Significant business impact typically becomes evident within 30-60 days of program completion."
//     },
//     {
//       question: "Can Upwise programs be delivered remotely or hybrid?",
//       answer: "Yes, our programs are designed for maximum flexibility. We offer in-person, virtual, and hybrid delivery options to meet your organization's needs and preferences."
//     },
//     {
//       question: "What kind of support do you provide after training completion?",
//       answer: "We provide comprehensive post-training support including resource libraries, follow-up coaching sessions, and ongoing access to our expert trainers for continued guidance."
//     },
//     {
//       question: "How do you measure the success of your training programs?",
//       answer: "We use a comprehensive evaluation framework that includes skill assessments, behavioral change metrics, and business impact measurements to ensure our programs deliver tangible results."
//     }
//   ];

//   const toggleFAQ = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//             Frequently Asked Questions
//           </h2>
//           <p className="text-xl text-gray-600">
//             Get answers to common questions about our training programs and methodology.
//           </p>
//         </div>

//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <div key={index} className="border border-gray-200 rounded-lg">
//               <button
//                 onClick={() => toggleFAQ(index)}
//                 className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
//               >
//                 <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
//                 {openIndex === index ? (
//                   <ChevronUp className="h-5 w-5 text-[#FDB813]" />
//                 ) : (
//                   <ChevronDown className="h-5 w-5 text-[#FDB813]" />
//                 )}
//               </button>
//               {openIndex === index && (
//                 <div className="px-6 pb-4">
//                   <p className="text-gray-600">{faq.answer}</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <p className="text-lg text-gray-600 mb-4">
//             Still have questions? We're here to help.
//           </p>
//           <button className="bg-[#FDB813] text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-[#E5A50A] transition-colors shadow-lg">
//             Contact Our Team
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }










import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Can Harappa tailor/customize a learning experience to fit the specific development needs of our employees?",
      answer: "Yes! We can fulfill your organization’s employee growth and development needs with tailor-made development programs. We also offer four flagship programs: LEAP, RISE, GROW and SOAR that can be customized to your specific business needs and desired learning outcomes."
    },
    {
      question: "Can Harappa's Thrive programs address specific competency development needs that our organization has identified?",
      answer: "Yes, Harappa's Thrive programs are designed to address specific competency development needs. Our curriculum can be aligned with your organization's existing competency framework to ensure relevant and impactful learning outcomes." // Example answer, as no answer is provided for this in the images
    },
    {
      question: "Can Harappa's Thrive programs integrate with my organization’s existing learning management system(s)?",
      answer: "Absolutely. Our Thrive programs are built with integration in mind. We can work with your IT team to ensure seamless integration with most standard Learning Management Systems (LMS) for easy deployment and tracking." // Example answer, as no answer is provided for this in the images
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          {/* Removed the descriptive paragraph below the heading */}
          {/* <p className="text-xl text-gray-600">
            Get answers to common questions about our training programs and methodology.
          </p> */}
        </div>

        <div className="space-y-0"> {/* Changed space-y-4 to space-y-0 or a very small value if desired */}
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 last:border-b-0 py-4"> {/* Removed rounded-lg and full border, added bottom border */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex items-start justify-between hover:bg-gray-50 transition-colors" // Align items to start for multi-line questions
              >
                <span className="text-lg font-normal text-gray-700 leading-relaxed pr-4">{faq.question}</span> {/* Adjusted font-weight and color, added padding-right */}
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" /> // Adjusted icon color
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" /> // Adjusted icon color
                )}
              </button>
              {openIndex === index && (
                <div className="pt-2 pb-0"> {/* Adjusted padding */}
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p> {/* Adjusted line-height */}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Removed the "Still have questions?" section */}
        {/* <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-4">
            Still have questions? We're here to help.
          </p>
          <button className="bg-[#FDB813] text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-[#E5A50A] transition-colors shadow-lg">
            Contact Our Team
          </button>
        </div> */}
      </div>
    </section>
  );
}