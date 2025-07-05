



// import React, { useState, useEffect } from "react";
// import { Plus, ArrowRight, ArrowLeft } from "lucide-react";

// interface Testimonial {
//   id: number;
//   quote: string;
//   author: string;
//   title: string;
//   companyLogo: string;
//   companyName: string;
// }

// export default function Statistics(): JSX.Element {
//   const testimonials: Testimonial[] = [
//     {
//       id: 0,
//       quote: "Significant increase in proficiency on key skills",
//       author: "VIVEK PATIL",
//       title: "Deputy Manager, Proposal Estimation, Sales & Services",
//       companyLogo: "https://logos-world.net/wp-content/uploads/2020/07/Accenture-Logo.png",
//       companyName: "Accenture",
//     },
//     {
//       id: 1,
//       quote:
//         "More than 20% of the cohort promoted within 3 months of program completion",
//       author: "KAUMUDI MAHAJAN",
//       title: "VP, Marketing, Disney India",
//       companyLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
//       companyName: "Amazon",
//     },
//     {
//       id: 2,
//       quote:
//         "The program truly transformed our team's productivity and collaboration.",
//       author: "ANNA SMITH",
//       title: "HR Director, Tech Solutions",
//       companyLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
//       companyName: "Microsoft",
//     },
//     {
//       id: 3,
//       quote:
//         "Excellent content and delivery. Our employees are more engaged than ever.",
//       author: "JOHN DOE",
//       title: "Head of L&D, Global Corp",
//       companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1920px-Cisco_logo_blue_2016.svg.png",
//       companyName: "Cisco",
//     },
//     {
//       id: 4,
//       quote:
//         "A measurable impact on leadership skills across all levels of management.",
//       author: "SARAH CONNOR",
//       title: "Training Manager, Finance Group",
//       companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/HubSpot_Logo.svg/1920px-HubSpot_Logo.svg.png",
//       companyName: "HubSpot",
//     },
//     {
//       id: 5,
//       quote:
//         "The blended learning approach was highly effective and well‑received by all participants.",
//       author: "MICHAEL BROWN",
//       title: "Operations Lead, Retail Chain",
//       companyLogo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
//       companyName: "Spotify",
//     },
//   ];

//   const [startIndex, setStartIndex] = useState(0);

//   const goToNext = () =>
//     setStartIndex((prev) => (prev + 2) % testimonials.length);
//   const goToPrev = () =>
//     setStartIndex((prev) =>
//       prev - 2 < 0 ? (testimonials.length + (prev - 2)) % testimonials.length : prev - 2
//     );

//   // Auto‑scroll every 5 s
//   useEffect(() => {
//     const t = setInterval(goToNext, 5000);
//     return () => clearInterval(t);
//   }, []);

//   // Two cards that should be on screen
//   const visible = [
//     testimonials[startIndex],
//     testimonials[(startIndex + 1) % testimonials.length],
//   ];

//   return (
//     <section className="py-10 bg-[#fdb813] text-white relative overflow-hidden" style={{background: "linear-gradient(to bottom, white 0%, white 15%, #fdb813 15%, #fdb813 100%)"}}>
//       {/* decorative dots / circles */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-48 -translate-y-48" />
//       <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-32 translate-y-32" />
//       <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white opacity-5 rounded-full -translate-x-16 -translate-y-16" />

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* ---------- Testimonials ---------- */}
//         <div className="relative pt-12 md:pt-16 mb-8 md:mb-16">
//           <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
//             {visible.map((t) => (
//               <div
//                 key={t.id}
//                 className="relative flex flex-col bg-white text-gray-800 p-8 rounded-lg shadow-lg border border-gray-300 w-full md:max-w-md"
//               >
//                 {/* optional plus icon */}
//                 <button className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center border shadow-sm">
//                   <Plus className="w-6 h-6 text-[#FDB813]" />
//                 </button>

//                 <p className="italic text-lg font-medium mb-6 leading-relaxed">
//                   “{t.quote}”
//                 </p>

//                 <div className="mt-auto pt-4 border-t border-gray-200 flex items-center">
//                   <img
//                     src={t.companyLogo}
//                     alt={t.companyName}
//                     className="h-8 w-auto object-contain mr-3"
//                     referrerPolicy="no-referrer"
//                   />
//                   <div>
//                     <p className="font-bold text-sm">{t.author}</p>
//                     <p className="text-xs text-gray-600">{t.title}</p>
//                   </div>
//                 </div>

//                 <button className="mt-4 text-[#FDB813] text-sm font-semibold inline-flex items-center">
//                   Tap to Read More
//                   <ArrowRight className="w-4 h-4 ml-1" />
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* arrows */}
//           <button
//             onClick={goToPrev}
//             className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-3 rounded-full transition-colors"
//           >
//             <ArrowLeft className="w-6 h-6 text-white" />
//           </button>
//           <button
//             onClick={goToNext}
//             className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-3 rounded-full transition-colors"
//           >
//             <ArrowRight className="w-6 h-6 text-white" />
//           </button>
//         </div>

//         {/* ---------- Why You Can Count On Us ---------- */}
//         <div className="text-center mb-16 pt-0 md:pt-8">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Why You Can Count On Us
//           </h2>
//           <p className="text-xl opacity-90 max-w-3xl mx-auto">
//             Our track record speaks for itself. See the impact we've made across
//             organizations worldwide.
//           </p>
//         </div>

//         {/* ---------- Statistics Grid ---------- */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//           <Stat number="99" suffix="%" label="Learner NPS" />
//           <Stat number="96" suffix="%" label="Highest Program Completion" />
//           <Stat
//             number="4.5"
//             suffix="/5"
//             label="Course Feedback Rating from"
//             subLabel="30,000+ course completions"
//           />
//           {/* <Stat number="700,000" label="Global Learners From 25+ Countries…" /> */}
//           {/* <br></br> */}
         
//         </div>
//         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//            <Stat number="700,000" label="Global Learners From 25+ Countries" />
//         </div>
//       </div>
//     </section>
//   );
// }

// /* --- small helper for stats --- */
// interface StatProps {
//   number: string;
//   suffix?: string;
//   label: string;
//   subLabel?: string;
// }
// function Stat({ number, suffix, label, subLabel }: StatProps) {
//   return (
//     <div className="text-center">
//       <div className="text-7xl md:text-10xl font-bold mb-4">
//         {number}
//         {suffix && <span className="text-5xl">{suffix}</span>}
//       </div>
//       <p className="text-xl opacity-90">
//         {label}
//         {subLabel && <br />}
//         {subLabel}
//       </p>
//     </div>
//   );
// }







import React, { useState, useEffect } from "react";
import { Plus, ArrowRight, ArrowLeft } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  title: string;
  companyLogo: string;
  companyName: string;
}

export default function Statistics(): JSX.Element {
  const testimonials: Testimonial[] = [
    {
      id: 0,
      quote: "Significant increase in proficiency on key skills",
      author: "VIVEK PATIL",
      title: "Deputy Manager, Proposal Estimation, Sales & Services",
      companyLogo: "https://logos-world.net/wp-content/uploads/2020/07/Accenture-Logo.png",
      companyName: "Accenture",
    },
    {
      id: 1,
      quote: "More than 20% of the cohort promoted within 3 months of program completion",
      author: "KAUMUDI MAHAJAN",
      title: "VP, Marketing, Disney India",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      companyName: "Amazon",
    },
    {
      id: 2,
      quote: "The program truly transformed our team's productivity and collaboration.",
      author: "ANNA SMITH",
      title: "HR Director, Tech Solutions",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      companyName: "Microsoft",
    },
    {
      id: 3,
      quote: "Excellent content and delivery. Our employees are more engaged than ever.",
      author: "JOHN DOE",
      title: "Head of L&D, Global Corp",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1920px-Cisco_logo_blue_2016.svg.png",
      companyName: "Cisco",
    },
    {
      id: 4,
      quote: "A measurable impact on leadership skills across all levels of management.",
      author: "SARAH CONNOR",
      title: "Training Manager, Finance Group",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/HubSpot_Logo.svg/1920px-HubSpot_Logo.svg.png",
      companyName: "HubSpot",
    },
    {
      id: 5,
      quote: "The blended learning approach was highly effective and well-received by all participants.",
      author: "MICHAEL BROWN",
      title: "Operations Lead, Retail Chain",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
      companyName: "Spotify",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const goToNext = () =>
    setStartIndex((prev) => (prev + 2) % testimonials.length);
  const goToPrev = () =>
    setStartIndex((prev) =>
      prev - 2 < 0 ? (testimonials.length + (prev - 2)) % testimonials.length : prev - 2
    );

  useEffect(() => {
    const t = setInterval(goToNext, 5000);
    return () => clearInterval(t);
  }, []);

  const visible = [
    testimonials[startIndex],
    testimonials[(startIndex + 1) % testimonials.length],
  ];

  return (
    <section
      className="py-10 bg-[#fdb813] text-white relative overflow-hidden"
      style={{ background: "linear-gradient(to bottom, white 0%, white 15%, #fdb813 15%, #fdb813 100%)" }}
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-48 -translate-y-48" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-32 translate-y-32" />
      <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white opacity-5 rounded-full -translate-x-16 -translate-y-16" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative pt-12 md:pt-16 mb-8 md:mb-16">
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
            {visible.map((t) => (
              <div
                key={t.id}
                className="relative flex flex-col bg-white text-gray-800 p-8 rounded-lg shadow-lg border border-gray-300 w-full md:max-w-md"
              >
                <button className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center border shadow-sm">
                  <Plus className="w-6 h-6 text-[#FDB813]" />
                </button>
                <p className="italic text-lg font-medium mb-6 leading-relaxed">
                  “{t.quote}”
                </p>
                <div className="mt-auto pt-4 border-t border-gray-200 flex items-center">
                  <img
                    src={t.companyLogo}
                    alt={t.companyName}
                    className="h-8 w-auto object-contain mr-3"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p className="font-bold text-sm">{t.author}</p>
                    <p className="text-xs text-gray-600">{t.title}</p>
                  </div>
                </div>
                <button className="mt-4 text-[#FDB813] text-sm font-semibold inline-flex items-center">
                  Tap to Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={goToPrev}
            className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-3 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-3 rounded-full transition-colors"
          >
            <ArrowRight className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="text-center mb-16 pt-0 md:pt-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4A4A4A] mb-4">
            Why You Can Count On Us
          </h2>
          {/* <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Our track record speaks for itself. See the impact we've made across
            organizations worldwide.
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Stat number="99" suffix="%" label="Learner NPS" subLabel="from 15,004 learners" />
          <Stat number="96" suffix="%" label="Highest Program Completion" />
          <Stat
            number="4.5"
            // suffix="/5"
            label="Course Feedback Rating from"
            subLabel="30,000+ course completions"
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Stat number="700,000+" label="Global Learners From 25+ Countries…" />
        </div>
      </div>
    </section>
  );
}

interface StatProps {
  number: string;
  suffix?: string;
  label: string;
  subLabel?: string;
}

function Stat({ number, suffix, label, subLabel }: StatProps) {
  return (
    <div className="text-center">
      <div
        className="font-bold mb-4"
        style={{
          fontSize: '120px',
          lineHeight: '120px',
          color: '#fff',
        }}
      >
        {number}
        {suffix && (
          <span
            style={{
              fontSize: '60px',
              lineHeight: '60px',
              color: '#fff',
            }}
          >
            {suffix}
          </span>
        )}
      </div>
      <p
        className="text-xl opacity-90"
        style={{ color: '#1a2b49' }}
      >
        {label}
        {subLabel && <br />}
        {subLabel}
      </p>
    </div>
  );
}