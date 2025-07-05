import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

/* ───────── LOGOS (remote URLs) ───────── */
interface CompanyLogo {
  name: string;
  src: string;
  fortune500: boolean;
}

const COMPANY_LOGOS: CompanyLogo[] = [
  {
    name: 'Microsoft',
    src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    fortune500: true,
  },
  {
    name: 'Amazon',
    src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    fortune500: true,
  },
  {
    name: 'Spotify',
    src: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
    fortune500: false,
  },
  {
    name: 'Accenture',
    src: 'https://logos-world.net/wp-content/uploads/2020/07/Accenture-Logo.png',
    fortune500: true,
  },
  {
    name: 'HubSpot',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/HubSpot_Logo.svg/1920px-HubSpot_Logo.svg.png',
    fortune500: false,
  },
  {
    name: 'Cisco',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1920px-Cisco_logo_blue_2016.svg.png',
    fortune500: true,
  },
];

/* ───────── Animated Number ───────── */
interface AnimatedNumberProps {
  value: string | number;
  duration?: number;
  play?: boolean;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 2,
  play = false,
}) => {
  const target = Number(String(value).replace(/[^\d]/g, ''));
  const suffix = String(value).replace(/\d+/g, '');
  const mv = useMotionValue(0);
  const formatted = useTransform(mv, v => Math.floor(v).toLocaleString());
  const [txt, setTxt] = useState<string>('0'); // Explicitly type useState

  useEffect(() => {
    if (!play) return;
    const controls = animate(mv, target, { duration, ease: 'easeOut' });
    const unsub = formatted.on('change', v => setTxt(v));
    return () => {
      controls.stop();
      unsub();
    };
  }, [play, target, duration, mv, formatted]); // Added mv and formatted to dependency array

  return (
    <span>
      {txt}
      {suffix}
    </span>
  );
};

/* ───────── Main Component ───────── */
const ClientTrust: React.FC = () => { // Corrected component name
  const sectionRef = useRef<HTMLElement>(null); // Specify type for useRef
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const logosLoop = [...COMPANY_LOGOS, ...COMPANY_LOGOS];

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 bg-gradient-to-r from-soft-grey-50 to-light-peach-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[#4A4A4A] mb-4">
            Trusted by L&amp;D teams in leading enterprises
          </h2>
          <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
            Join thousands of professionals from{' '}
            <span className="text-terracotta-600 font-semibold">
              Fortune&nbsp;500 companies
            </span>{' '}
            who have transformed their skills with Upwise.
          </p>
        </motion.div>

        {/* Logo Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
            className="flex gap-12 lg:gap-16 items-center"
          >
            {logosLoop.map((logo, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.08 }}
                className="flex-shrink-0 w-40 flex flex-col items-center"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  referrerPolicy="no-referrer"
                  className="max-h-12 object-contain mb-2"
                />
                <span className="text-xs font-medium text-deep-navy-700">
                  {logo.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          {[
            { value: '25+', label: 'Years Experience' },
            { value: '500+', label: 'Companies Trained' },
            { value: '700,000+', label: 'Professionals Upskilled' },
            { value: '99%', label: 'Client Satisfaction' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#4A4A4A] mb-2">
                <AnimatedNumber value={stat.value} play={isInView} />
              </div>
              <div className="text-[#4A4A4A] text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Recognition Badge */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-warm-coral-100 to-light-peach-100 rounded-full">
            <div className="w-6 h-6 bg-gradient-to-r from-terracotta-500 to-warm-coral-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-xs font-bold">★</span>
            </div>
            <span className="text-deep-navy-700 font-semibold">
              Recognized as Top Corporate Trainer&nbsp;2024
            </span>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default ClientTrust; // Corrected export name