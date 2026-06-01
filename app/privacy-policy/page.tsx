// app/privacy-policy/page.tsx
'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FFFDF8] overflow-x-hidden">
   <PageHero title="Privacy Policy" breadcrumb="Privacy Policy" variant="who" />

        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10">
              
              {/* Last Updated */}
              <div className="mb-8 pb-4 border-b border-gray-200">
                <p className="text-sm text-gray-500">
                  <span className="font-semibold">Last Updated:</span> December 1, 2024
                </p>
              </div>

              {/* Introduction */}
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">Introduction</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Note By Note AZ ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                  information when you visit our website or interact with our organization.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Please read this Privacy Policy carefully. By using our website, you consent to 
                  the practices described in this policy.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[#C0392B] mb-2">Personal Information</h3>
                    <p className="text-gray-600 leading-relaxed mb-2">
                      We may collect personal information that you voluntarily provide to us, including:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                      <li>Name and contact information (email address, phone number, mailing address)</li>
                      <li>Donation history and payment information</li>
                      <li>Volunteer application details</li>
                      <li>Student registration information</li>
                      <li>Communications you send to us</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-[#C0392B] mb-2">Automatically Collected Information</h3>
                    <p className="text-gray-600 leading-relaxed mb-2">
                      When you visit our website, we may automatically collect:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                      <li>IP address and browser type</li>
                      <li>Device information</li>
                      <li>Pages visited and time spent on our site</li>
                      <li>Referral source (how you found our website)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">How We Use Your Information</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Process donations and provide tax receipts</li>
                  <li>Communicate with you about our programs and events</li>
                  <li>Manage volunteer applications and student registrations</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                  <li>Send newsletters and updates (you may opt out at any time)</li>
                </ul>
              </div>

              {/* Sharing Your Information */}
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">Sharing Your Information</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  We do not sell, trade, or rent your personal information to third parties. 
                  We may share your information in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>With service providers who assist our operations (payment processors, email services)</li>
                  <li>When required by law or to protect our rights</li>
                  <li>With your consent or at your direction</li>
                  <li>To comply with tax and legal reporting requirements</li>
                </ul>
              </div>

              {/* Donation Information */}
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">Donation Information</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  When you make a donation through our website, your payment information is processed 
                  securely by our payment partners (PayPal, GoFundMe, etc.). We do not store full 
                  credit card details on our servers.
                </p>
                <div className="bg-[#FEF5E7] rounded-lg p-4 border border-[#F5CBA7]">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-[#C0392B]">Tax-Deductible:</span> All donations 
                    to Note By Note AZ are tax-deductible as allowed by law. You will receive a receipt 
                    for your records.
                  </p>
                </div>
              </div>

              {/* Cookies */}
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">Cookies & Tracking</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  We use cookies and similar tracking technologies to enhance your experience on our website. 
                  Cookies are small files stored on your device that help us understand how you use our site.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  You can control cookies through your browser settings. However, disabling cookies may 
                  affect certain features of our website.
                </p>
              </div>

              {/* Children's Privacy */}
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">Children's Privacy</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our programs serve middle school students (grades 5-8). We collect information about 
                  students only with parental consent. Parents or guardians may review or request deletion 
                  of their child's information by contacting us directly.
                </p>
              </div>

              {/* Your Rights */}
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">Your Rights & Choices</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Access the personal information we hold about you</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt out of marketing communications</li>
                  <li>Withdraw consent for data processing</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-3">
                  To exercise these rights, please contact us at{' '}
                  <a href="mailto:notebynoteaz@gmail.com" className="text-[#C0392B] hover:underline">
                    notebynoteaz@gmail.com
                  </a>
                </p>
              </div>

              {/* Data Security */}
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">Data Security</h2>
                <p className="text-gray-600 leading-relaxed">
                  We implement reasonable security measures to protect your information from unauthorized 
                  access, disclosure, or alteration. However, no method of transmission over the internet 
                  is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              {/* Third-Party Links */}
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">Third-Party Links</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our website may contain links to third-party websites (GoFundMe, PayPal, etc.). We are 
                  not responsible for the privacy practices of these external sites. We encourage you to 
                  review their privacy policies before providing any information.
                </p>
              </div>

              {/* Changes to Policy */}
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">Changes to This Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes 
                  by posting the new policy on this page and updating the "Last Updated" date. We encourage 
                  you to review this policy periodically.
                </p>
              </div>

              {/* Contact Us */}
              <div className="pt-6 border-t border-gray-200">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  If you have questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <p className="flex items-center gap-2 text-gray-700">
                    <i className="bi bi-envelope text-[#C0392B]"></i>
                    <a href="mailto:notebynoteaz@gmail.com" className="hover:text-[#C0392B] transition">
                      notebynoteaz@gmail.com
                    </a>
                  </p>
                  <p className="flex items-center gap-2 text-gray-700">
                    <i className="bi bi-geo-alt text-[#C0392B]"></i>
                    Note By Note AZ
                    <br />
                    <span className="ml-6">Phoenix, Arizona</span>
                  </p>
                </div>
              </div>

              {/* Back to Home */}
              <div className="mt-8 text-center">
                <Link 
                  href="/" 
                  className="inline-flex items-center gap-2 text-[#C0392B] hover:text-[#A93226] transition-colors text-sm"
                >
                  <i className="bi bi-arrow-left"></i>
                  Back to Home
                </Link>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}