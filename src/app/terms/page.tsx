'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import FloatingScrollToTop from '@/components/FloatingScrollToTop';

export default function TermsOfServicePage() {
  const lastUpdated = 'August 15, 2025';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Please read these terms carefully before using HiTech Plumbing&apos;s services. By using our services, you agree to be bound by these terms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Last Updated */}
            <div className="mb-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Last Updated:</strong> {lastUpdated}
              </p>
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you and HiTech Plumbing (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By accessing our website, using our services, or engaging our team, you agree to comply with and be bound by these Terms.
              </p>
            </div>

            {/* Services */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                HiTech Plumbing provides professional plumbing services including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Emergency plumbing repairs and maintenance</li>
                <li>Residential and commercial plumbing installations</li>
                <li>Water heater installation, repair, and maintenance</li>
                <li>Gas line services and repairs</li>
                <li>Heating system installation and repair</li>
                <li>Drain cleaning and sewer services</li>
                <li>Fixture installation and replacement</li>
              </ul>
            </div>

            {/* Appointments and Scheduling */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Appointments and Scheduling</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Requests</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Service appointments are subject to availability and technician schedules</li>
                <li>Emergency services are available 24/7 with additional fees</li>
                <li>We will provide estimated arrival times but cannot guarantee exact timing</li>
                <li>Weather conditions or unforeseen circumstances may affect scheduling</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cancellation Policy</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Cancellations must be made at least 2 hours before scheduled appointment</li>
                <li>Same-day cancellations may incur a cancellation fee</li>
                <li>No-shows will be charged a service call fee</li>
                <li>We reserve the right to reschedule due to emergency calls</li>
              </ul>
            </div>

            {/* Pricing and Payment */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pricing and Payment</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Fees</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>All services include a service call fee of $169 (waived if work is performed)</li>
                <li>Emergency and after-hours services incur additional charges</li>
                <li>Quotes are estimates and final costs may vary based on actual work required</li>
                <li>Additional materials or unexpected issues may result in additional charges</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Payment Terms</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Payment is due upon completion of services unless other arrangements are made</li>
                <li>We accept cash, check, and major credit cards</li>
                <li>A 1.5% monthly service charge applies to overdue accounts</li>
                <li>All prices are in Canadian dollars and include applicable taxes</li>
              </ul>
            </div>

            {/* Warranties and Guarantees */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Warranties and Guarantees</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Warranty</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                HiTech Plumbing provides a 2-year warranty on all installations and major repairs, subject to the following conditions:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Warranty covers defects in workmanship, not normal wear and tear</li>
                <li>Customer must maintain systems according to manufacturer recommendations</li>
                <li>Warranty void if unauthorized modifications or repairs are made</li>
                <li>Parts warranty varies by manufacturer (typically 1-10 years)</li>
                <li>Warranty does not cover damage from misuse, neglect, or acts of nature</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Limitation of Warranty</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our warranty is limited to repair or replacement of defective work. We are not liable for consequential damages, including but not limited to water damage, loss of use, or indirect damages.
              </p>
            </div>

            {/* Customer Responsibilities */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Responsibilities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By using our services, you agree to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Provide accurate information about plumbing issues and property details</li>
                <li>Ensure safe access to work areas for our technicians</li>
                <li>Clear work areas of personal belongings and obstacles</li>
                <li>Disclose any known hazards or safety concerns</li>
                <li>Be present or designate an authorized representative during service</li>
                <li>Follow all maintenance recommendations provided</li>
                <li>Pay for services according to agreed terms</li>
              </ul>
            </div>

            {/* Safety and Liability */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Safety and Liability</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety Protocols</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>All technicians are licensed, insured, and follow safety protocols</li>
                <li>We may refuse service if conditions are deemed unsafe</li>
                <li>Customers must inform us of any pets, security systems, or special requirements</li>
                <li>Work areas must be accessible and free from hazardous conditions</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Limitation of Liability</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our liability is limited to the cost of services provided. We are not liable for indirect, incidental, or consequential damages. Our total liability shall not exceed the amount paid for the specific service in question.
              </p>
            </div>

            {/* Emergency Services */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Emergency Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Emergency services are available 24/7 for urgent plumbing issues including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Burst pipes or major leaks</li>
                <li>Gas leaks or gas-related emergencies</li>
                <li>Sewer backups</li>
                <li>No hot water in winter months</li>
                <li>Blocked drains causing flooding</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                Emergency rates apply for after-hours, weekend, and holiday services. Response times may vary based on weather conditions and call volume.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                All content on our website, including text, graphics, logos, and images, is the property of HiTech Plumbing and is protected by copyright laws. You may not reproduce, distribute, or use our content without written permission.
              </p>
            </div>

            {/* Privacy */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Your privacy is important to us. Please review our Privacy Policy, which governs how we collect, use, and protect your personal information. By using our services, you consent to our privacy practices.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Dispute Resolution</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We strive to resolve all disputes amicably. In case of disagreements:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Contact our customer service team first to discuss the issue</li>
                <li>Disputes will be governed by the laws of British Columbia, Canada</li>
                <li>Any legal proceedings must be conducted in Vancouver, BC courts</li>
                <li>Arbitration may be required for certain disputes</li>
              </ul>
            </div>

            {/* Termination */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We reserve the right to refuse service or terminate our relationship with customers who violate these terms, engage in abusive behavior, or fail to pay for services. Termination does not affect existing warranties or payment obligations.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We may update these Terms of Service periodically. Changes will be posted on our website with an updated effective date. Continued use of our services after changes are posted constitutes acceptance of the revised terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>HiTech Plumbing</strong></p>
                <p className="text-gray-700 mb-2">Email: info@hitechplumbing.ca</p>
                <p className="text-gray-700 mb-2">Phone: (604)-HI-TECH</p>
                <p className="text-gray-700 mb-2">Emergency: (604)-HI-TECH</p>
                <p className="text-gray-700 mb-2">Address: Vancouver, BC, Canada</p>
              </div>
            </div>

            {/* Acceptance */}
            <div className="prose prose-lg max-w-none mb-12">
              <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Acceptance of Terms</h3>
                <p className="text-gray-700 leading-relaxed">
                  By using HiTech Plumbing&apos;s services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="border-t pt-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                <Link
                  href="/privacy"
                  className="text-primary hover:text-accent transition-colors font-semibold"
                >
                  ← View Privacy Policy
                </Link>
                <Link
                  href="/contact"
                  className="text-primary hover:text-accent transition-colors font-semibold"
                >
                  Contact Us →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FloatingScrollToTop />
    </div>
  );
}
