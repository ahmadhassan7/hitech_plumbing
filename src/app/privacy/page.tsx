'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import FloatingScrollToTop from '@/components/FloatingScrollToTop';

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how HiTech Plumbing collects, uses, and protects your personal information.
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                HiTech Plumbing (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Name and contact information (phone number, email address, mailing address)</li>
                <li>Service requests and appointment details</li>
                <li>Payment information (processed securely by third-party payment processors)</li>
                <li>Communication preferences</li>
                <li>Emergency contact information</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you visit our website, we may automatically collect:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>IP address and browser information</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website information</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            {/* How We Use Information */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Provide and improve our plumbing services</li>
                <li>Schedule appointments and communicate about services</li>
                <li>Process payments and billing</li>
                <li>Send service updates, maintenance reminders, and promotional materials</li>
                <li>Respond to your inquiries and customer service requests</li>
                <li>Comply with legal obligations and protect our rights</li>
                <li>Improve our website and user experience</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li><strong>Service Providers:</strong> With trusted contractors and vendors who assist in providing services</li>
                <li><strong>Payment Processing:</strong> With secure payment processors to handle transactions</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>Emergency Situations:</strong> To protect the safety of individuals or property</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Cookies and Tracking */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website uses cookies and similar technologies to enhance your browsing experience. Cookies are small files stored on your device that help us:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Improve website functionality and performance</li>
                <li>Provide personalized content and advertisements</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                You can control cookie settings through your browser preferences. Disabling cookies may affect website functionality.
              </p>
            </div>

            {/* Your Rights */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Privacy Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Access and receive a copy of your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Delete your personal information (subject to legal requirements)</li>
                <li>Restrict or object to certain processing activities</li>
                <li>Data portability (receive your data in a structured format)</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children&apos;s Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the &quot;Last Updated&quot; date. Your continued use of our services after any changes constitutes acceptance of the updated policy.
              </p>
            </div>

            {/* Contact Information */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>HiTech Plumbing</strong></p>
                <p className="text-gray-700 mb-2">Email: privacy@hitechplumbing.ca</p>
                <p className="text-gray-700 mb-2">Phone: (604)-HI-TECH</p>
                <p className="text-gray-700 mb-2">Address: Vancouver, BC, Canada</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="border-t pt-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                <Link
                  href="/"
                  className="text-primary hover:text-accent transition-colors font-semibold"
                >
                  ← Back to Home
                </Link>
                <Link
                  href="/terms"
                  className="text-primary hover:text-accent transition-colors font-semibold"
                >
                  View Terms of Service →
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
