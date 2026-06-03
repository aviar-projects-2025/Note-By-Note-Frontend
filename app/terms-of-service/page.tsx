// app/terms-of-service/page.tsx
'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FFFDF8] overflow-x-hidden">
   <PageHero title="Terms Of Services" breadcrumb="Terms Of Services" variant="who" />

        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10">
              
              <div className="mb-8 pb-4 border-b border-gray-200">
                <p className="text-sm text-gray-500">
                  <span className="font-semibold">Effective Date:</span> December 1, 2024
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">1. Acceptance of Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  By accessing and using the Note By Note AZ website, you agree to be bound by these 
                  Terms of Service. If you do not agree, please do not use our website or services.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">2. Use of Website</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  You agree to use our website only for lawful purposes and in a way that does not 
                  infringe upon the rights of others or restrict their use of the site.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Prohibited activities include:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4 mt-2">
                  <li>Attempting to gain unauthorized access to our systems</li>
                  <li>Uploading malicious code or viruses</li>
                  <li>Harassing or threatening others</li>
                  <li>Misrepresenting your identity</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">3. Donations & Payments</h2>
                <p className="text-gray-600 leading-relaxed">
                  All donations made to Note By Note AZ are voluntary and non-refundable. We reserve 
                  the right to refuse any donation. Donations are processed through third-party payment 
                  processors, and you agree to their terms as well.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">4. Intellectual Property</h2>
                <p className="text-gray-600 leading-relaxed">
                  All content on this website, including text, graphics, logos, and images, is the 
                  property of Note By Note AZ and protected by copyright laws. You may not reproduce, 
                  distribute, or modify our content without prior written consent.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">5. Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed">
                  Note By Note AZ shall not be liable for any indirect, incidental, or consequential 
                  damages arising from your use of our website or services.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">6. Changes to Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may modify these terms at any time. Continued use of our website constitutes 
                  acceptance of the updated terms.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">7. Contact Us</h2>
                <p className="text-gray-600 leading-relaxed">
                  Questions about these terms? Contact us at{' '}
                  <a href="mailto:notebynoteaz@gmail.com" className="text-[#C0392B] hover:underline">
                    notebynoteaz@gmail.com
                  </a>
                </p>
              </div>

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