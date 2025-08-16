'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PricingSection() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left Side - Text Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-6 w-fit">
                New for 2025
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                <span className="text-primary">New Pricing</span> for 2025
              </h2>

              <p className="text-lg text-gray-700 mb-4">
                For <span className="text-2xl font-bold text-accent">$169</span> get a fully stocked van and a top technician to your door. Then your technician will give you options for repairs or replacement with fixed pricing for your plumbing or gas boiler or furnace work.
              </p>
              
              <div className="bg-primary/5 p-4 rounded-lg border-l-3 border-primary mb-4">
                <p className="font-medium text-gray-800">
                  All with our <span className="text-primary font-bold">2 year HiTech Plumbing promise</span> full guarantee.
                </p>
              </div>

              <p className="text-gray-700 mb-2">
                Building relationships that last with plumbing you can count on!
              </p>

              <p className="text-sm text-gray-500 mb-8">
                *Vancouver, North Shore or Burnaby.
              </p>

              <Link
                href="/pricing-warranty"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 w-fit"
              >
                Check out our Pricing
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Right Side - Van Image */}
            <div className="relative h-[400px] lg:h-auto">
              <img
                src="https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="HiTech Plumbing Service Van"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}