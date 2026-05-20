'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import FadeUp from '@/components/FadeUp'

const trustItems = [
  { icon: 'bi-shield-check-fill', title: '100% Secure & Tax-Deductible', desc: 'Note By Note AZ is a 501(c)(3) nonprofit. All donations are tax-deductible to the fullest extent allowed by law.' },
  { icon: 'bi-receipt-cutoff', title: 'Federal Tax ID', desc: <span>Tax ID: <strong className="text-[#C0392B]">93-4567891</strong></span> },
  { icon: 'bi-heart-fill', title: 'Your Impact', desc: 'Your donation directly funds free music lessons for underserved middle school students across Arizona.' },
]

const miniStats = [['250+', 'Students Served'], ['40+', 'Volunteer Tutors'], ['100%', 'Free to Students']]

export default function DonatePage() {
  const [tab, setTab] = useState('online')

  return (
    <>
      <Navbar />
      <main>
        <PageHero title="Support Our Mission" breadcrumb="Donate" variant="donate" />

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-12">

              {/* Left — Donation options */}
              <div className="lg:col-span-4">
                <FadeUp>
                  <h2 className="text-2xl font-bold mb-2">Your gift helps us provide free music education to middle school students across Arizona.</h2>
                  <p className="text-gray-500 mb-8">Every dollar goes directly toward supporting students, instruments, and resources.</p>

                  {/* Tabs */}
                  <div className="flex border-b border-gray-200 mb-0">
                    {[['online', 'Donate Online'], ['other', 'Other Ways to Give']].map(([key, label]) => (
                      <button
                        key={key}
                        onClick={() => setTab(key)}
                        className={`px-6 py-3 text-sm font-semibold border-b-2 transition-colors ${
                          tab === key
                            ? 'border-[#C0392B] text-[#C0392B]'
                            : 'border-transparent text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>

                  <div className="border border-t-0 border-gray-200 rounded-b-xl p-8">
                    {tab === 'online' ? (
                      <div>
                        <div className="flex items-center gap-4 mb-5">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" style={{ height: 28 }} />
                          <p className="text-gray-500 text-sm m-0">Make a secure donation through PayPal. All donations are tax-deductible.</p>
                        </div>
                        <a
                          href="https://paypal.com"
                          target="_blank"
                          rel="noreferrer"
                          className="w-full block text-center bg-[#0070ba] hover:bg-[#005ea6] text-white font-bold py-3.5 rounded-lg text-sm no-underline transition-colors mb-4"
                        >
                          <i className="bi bi-paypal mr-2"></i>DONATE WITH PAYPAL
                        </a>
                        <hr className="my-5" />
                        <a
                          href="https://gofundme.com"
                          target="_blank"
                          rel="noreferrer"
                          className="w-full block text-center bg-[#00b964] hover:bg-[#009e54] text-white font-bold py-3.5 rounded-lg text-sm no-underline transition-colors"
                        >
                          <i className="bi bi-heart-fill mr-2"></i>VIEW GOFUNDME
                        </a>
                      </div>
                    ) : (
                      <div>
                        <h6 className="font-bold mb-3">Other Options</h6>
                        <p className="text-sm text-gray-500 mb-3">You can also support us through:</p>
                        <ul className="text-sm text-gray-600 space-y-3">
                          <li><strong>GoFundMe Campaign</strong> – <a href="https://gofundme.com" target="_blank" rel="noreferrer" className="text-[#C0392B] no-underline hover:underline">gofundme.com</a></li>
                          <li><strong>Zelle</strong> – contact us for details: <a href="mailto:notebynoteaz@gmail.com" className="text-[#C0392B] no-underline hover:underline">notebynoteaz@gmail.com</a></li>
                          <li><strong>Check</strong> – mail to our organization address (contact us for details)</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </FadeUp>
              </div>

              {/* Right — Trust & Stats */}
              <div className="lg:col-span-3 space-y-4">
                {trustItems.map((t, i) => (
                  <FadeUp key={i} delay={i * 100}>
                    <div className="flex gap-4 bg-gray-50 rounded-xl p-5">
                      <i className={`bi ${t.icon} text-[#C0392B] text-3xl flex-shrink-0 mt-0.5`}></i>
                      <div>
                        <h6 className="font-bold mb-1 text-sm">{t.title}</h6>
                        <p className="text-sm text-gray-600 m-0">{t.desc}</p>
                      </div>
                    </div>
                  </FadeUp>
                ))}

                <FadeUp delay={300}>
                  <div className="bg-[#2B2B2B] rounded-xl p-6">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      {miniStats.map(([n, l], i) => (
                        <div key={i}>
                          <div className="text-2xl font-extrabold text-[#C0392B] font-poppins">{n}</div>
                          <div className="text-xs text-white/50 mt-0.5">{l}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
