'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    id: 1,
    title: 'For your',
    highlight: 'Plumbing',
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Install, repair, and maintain pipes, valves, fittings, drainage systems, and fixtures in residential and smaller commercial structures. We diagnose, and resolve plumbing emergencies.',
    link: '/plumbing'
  },
  {
    id: 2, 
    title: 'For your',
    highlight: 'Gas',
    image: 'https://images.unsplash.com/photo-1607324772107-8ad6740ca195?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Responsible for fixing leaks, damages, and any other problems homeowners might encounter with their gas lines, heating, and cooling system.',
    link: '/gas'
  },
  {
    id: 3,
    title: 'For your',
    highlight: 'Boilers & Hot Water',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Regardless of make or model, we can fix whatever problem you might be having! Our experienced technicians will make sure your system is in tip top condition!',
    link: '/hot-water'
  }
];

export default function ServicesSection() {
  return (
    <div className="relative">
      {/* Background Text Section */}
      <div className="bg-gray-50 py-24 relative overflow-hidden">
        {/* Large Background Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <div className="text-center">
            <div className="text-[20rem] font-black text-gray-900 leading-none tracking-tighter">
              HITECH
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Be confident in your plumbing with
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-8">
              HiTech Plumbing&apos;s 2 YEAR FULL GUARANTEE.
            </h3>
            <div className="text-2xl font-bold text-accent">
              (604)-HI-TECH
            </div>
          </motion.div>
        </div>
      </div>

      {/* Overlapping Service Cards */}
      <div className="relative -mt-32 z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Service Image */}
                <div className="relative z-10 w-full h-56 mx-auto mb-6 rounded-2xl overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.highlight}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>

                {/* Service Title */}
                <div className="relative z-10 text-center mb-4">
                  <h3 className="text-xl text-gray-700 mb-2">
                    {service.title}
                  </h3>
                  <motion.div
                    className="relative inline-block"
                    whileHover={{ scale: 1.05 }}
                  >
                    <h2 className="text-3xl font-black text-primary mb-2 relative z-10">
                      {service.highlight}
                    </h2>
                    {/* Hand-drawn Circle Animation */}
                    <motion.svg
                      className="absolute pointer-events-none"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: `${service.highlight.length * 15 + 60}px`,
                        height: '70px'
                      }}
                      viewBox={`0 0 ${service.highlight.length * 15 + 60} 70`}
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.7 }}
                      transition={{ 
                        duration: 1.5, 
                        delay: index * 0.3,
                        ease: "easeInOut"
                      }}
                    >
                      <motion.ellipse
                        cx={`${(service.highlight.length * 15 + 60) / 2}`}
                        cy="35"
                        rx={`${(service.highlight.length * 15 + 60) / 2 - 10}`}
                        ry="28"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeDasharray="2,1"
                        style={{
                          transform: 'rotate(-8deg)',
                          transformOrigin: 'center',
                          filter: "drop-shadow(0 0 4px rgba(239, 68, 68, 0.3))"
                        }}
                        animate={{
                          stroke: ["#ef4444", "#dc2626", "#ef4444"],
                          strokeWidth: [2.5, 3, 2.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.svg>
                  </motion.div>
                </div>

                {/* Service Description */}
                <p className="relative z-10 text-gray-600 leading-relaxed mb-8 text-center">
                  {service.description}
                </p>

                {/* CTA Button */}
                <div className="relative z-10 text-center">
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                  >
                    <span>Book Online</span>
                    <motion.svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="h-24"></div>
    </div>
  );
}