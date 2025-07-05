import React from 'react';

export default function Partnerships() {
  const partners = [
    {
      name: "Disney",
      logo: "🏰",
      description: "Entertainment & Media"
    },
    {
      name: "Microsoft",
      logo: "🖥️",
      description: "Technology Solutions"
    },
    {
      name: "Samsung",
      logo: "📱",
      description: "Consumer Electronics"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Let's Make Magic Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join the growing community of organizations that trust Upwise to develop their most valuable asset - their people.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow border">
              <div className="text-6xl mb-4">{partner.logo}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{partner.name}</h3>
              <p className="text-gray-600">{partner.description}</p>
              <div className="mt-4 flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#FDB813] text-xl">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Transform Your Team?
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Join thousands of organizations that have already experienced the Upwise difference.
          </p>
          <button className="bg-[#FDB813] text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-[#E5A50A] transition-colors shadow-lg">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}