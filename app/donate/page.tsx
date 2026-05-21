'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import FadeUp from '@/components/FadeUp'
import foundme from './assets/foundme.png'

// ─── Types ────────────────────────────────────────────────────────────────────
interface TrustItem {
  icon: string
  title: string
  desc: React.ReactNode
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const trustItems: TrustItem[] = [
  {
    icon: 'bi-shield-check-fill',
    title: '100% Secure & Tax-Deductible',
    desc: 'Note By Note AZ is a 501(c)(3) nonprofit. All donations are tax-deductible to the fullest extent allowed by law.',
  },
  {
    icon: 'bi-receipt-cutoff',
    title: 'Federal Tax ID',
    desc: (
      <span>
        Tax ID: <strong className="text-[#C0392B]">93-4567891</strong>
      </span>
    ),
  },
  {
    icon: 'bi-heart-fill',
    title: 'Your Impact',
    desc: 'Your donation directly funds free music lessons for underserved middle school students across Arizona.',
  },
]

const miniStats: [string, string][] = [
  ['250+', 'Students Served'],
  ['40+', 'Volunteer Tutors'],
  ['100%', 'Free to Students'],
]

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98], delay },
  }),
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
}

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

// ─── Scroll-triggered wrapper ─────────────────────────────────────────────────
function InView({
  children,
  variants = fadeInUp,
  custom,
  className = '',
}: {
  children: React.ReactNode
  variants?: typeof fadeInUp | typeof fadeInLeft | typeof fadeInRight | typeof stagger
  custom?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      custom={custom}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function DonatePage() {
  const [tab, setTab] = useState<'online' | 'other'>('online')

  return (
    <>
      <Navbar />
      <main className="bg-[#FFFDF8] overflow-x-hidden">
        <PageHero title="Support Our Mission" breadcrumb="Donate" variant="donate" />

        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 lg:gap-12">

              {/* ── Left — Donation options ── */}
              <InView variants={fadeInLeft} className="lg:col-span-4">
                {/* Heading */}
                <motion.h2
                  className="text-2xl sm:text-3xl font-bold mb-3"
                  variants={fadeInUp}
                  custom={0}
                >
                  Volunteer With Us
                </motion.h2>

                <motion.p
                  className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed"
                  variants={fadeInUp}
                  custom={0.05}
                >
                  We are so grateful that you&apos;re here to help us on our journey. Please fill
                  out this Google Form so we can learn more about you and get in contact!
                </motion.p>

                {/* Thank you + Volunteer button */}
                <motion.div
                  className="mb-6 rounded-2xl bg-gradient-to-br from-[#FEF5E7] to-[#FFFDF8] border border-[#F5CBA7] p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
                  variants={fadeInUp}
                  custom={0.08}
                  whileHover={{ scale: 1.01, boxShadow: '0 8px 24px -8px rgba(192,57,43,0.15)', transition: { duration: 0.2 } }}
                >
                  <div className="flex-1">
                    <motion.p
                      className="text-base sm:text-lg font-bold text-gray-800 mb-0.5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      Thank you for considering{' '}
                      <span className="text-[#C0392B]">Note By Note!</span>
                    </motion.p>
                    <p className="text-xs sm:text-sm text-gray-500 m-0">
                      Fill out our tutor interest form and we&apos;ll be in touch soon.
                    </p>
                  </div>

                  <motion.a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeJgSnWdU7GqQMPs69i4TRjlvuKgb2w4BBr2oCaxQPhlYHrEg/viewform"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-shrink-0 inline-flex items-center gap-2 rounded-full bg-[#C0392B] px-5 py-2.5 text-xs sm:text-sm font-bold text-white no-underline shadow-md"
                    whileHover={{ scale: 1.06, backgroundColor: '#A93226', boxShadow: '0 8px 20px -4px rgba(192,57,43,0.4)' }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: 'spring', stiffness: 350 }}
                  >
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      🎵
                    </motion.span>
                   <p style={{color:"white"}}>Volunteer Now</p> 
                  </motion.a>
                </motion.div>

                <motion.p
                  className="text-gray-500 mb-6 text-sm sm:text-base leading-relaxed"
                  variants={fadeInUp}
                  custom={0.1}
                >
                  <span className="block font-semibold text-gray-700 mb-1">Donate To Us</span>
                  Are you unable to volunteer? No worries at all. If you would still like to
                  support us, we would much appreciate monetary donations!
                  <br /><br />
                  With increasing costs of instruments and guide books, many of our pupils are
                  unable to practice their newly loved craft at home, so 100% of these proceeds
                  will go into purchasing materials for them! We will happily add your name to
                  our sponsor board as well.
                </motion.p>

                {/* GoFundMe image */}
                <motion.div
                  className="mb-8 overflow-hidden rounded-2xl shadow-md"
                  variants={fadeInUp}
                  custom={0.15}
                  whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
                >
                  <Image
                    src={foundme}
                    alt="GoFundMe campaign"
                    className="w-full h-auto object-cover"
                  />
                </motion.div>

                {/* Tab bar */}
                <motion.div
                  className="flex border-b border-gray-200 mb-0"
                  variants={fadeInUp}
                  custom={0.2}
                >
                  {(
                    [
                      ['online', 'Donate Online'],
                      ['other', 'Other Ways to Give'],
                    ] as [string, string][]
                  ).map(([key, label]) => (
                    <motion.button
                      key={key}
                      onClick={() => setTab(key as 'online' | 'other')}
                      className={`px-4 sm:px-6 py-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors ${
                        tab === key
                          ? 'border-[#C0392B] text-[#C0392B]'
                          : 'border-transparent text-gray-600 hover:text-gray-900'
                      }`}
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {label}
                    </motion.button>
                  ))}
                </motion.div>

                {/* Tab panel */}
                <motion.div
                  className="border border-t-0 border-gray-200 rounded-b-xl p-5 sm:p-8"
                  variants={fadeInUp}
                  custom={0.25}
                >
                  {tab === 'online' ? (
                    <motion.div
                      key="online"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-5">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                          alt="PayPal"
                          style={{ height: 28 }}
                          className="flex-shrink-0"
                        />
                        <p className="text-gray-500 text-sm m-0">
                          Make a secure donation through PayPal. All donations are tax-deductible.
                        </p>
                      </div>

                      <motion.a
                        href="https://paypal.com"
                        target="_blank"
                        rel="noreferrer"
                        className="w-full block text-center bg-[#0070ba] text-white font-bold py-3.5 rounded-lg text-sm no-underline transition-colors mb-4"
                        whileHover={{ backgroundColor: '#005ea6', scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <i className="bi bi-paypal mr-2" />
                        DONATE WITH PAYPAL
                      </motion.a>

                      <hr className="my-5 border-gray-100" />

                      <motion.a
                        href="https://gofundme.com"
                        target="_blank"
                        rel="noreferrer"
                        className="w-full block text-center bg-[#00b964] text-white font-bold py-3.5 rounded-lg text-sm no-underline transition-colors"
                        whileHover={{ backgroundColor: '#009e54', scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <i className="bi bi-heart-fill mr-2" />
                        VIEW GOFUNDME
                      </motion.a>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="other"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                    >
                      <h6 className="font-bold mb-3 text-sm sm:text-base">Other Options</h6>
                      <p className="text-sm text-gray-500 mb-4">
                        You can also support us through:
                      </p>
                      <ul className="text-sm text-gray-600 space-y-4">
                        {[
                          {
                            label: 'GoFundMe Campaign',
                            content: (
                              <>
                                –{' '}
                                <a
                                  href="https://gofundme.com"
                                  target="_blank"
                                  rel="noreferrer"
                                  className="text-[#C0392B] no-underline hover:underline"
                                >
                                  gofundme.com
                                </a>
                              </>
                            ),
                          },
                          {
                            label: 'Zelle',
                            content: (
                              <>
                                – contact us for details:{' '}
                                <a
                                  href="mailto:notebynoteaz@gmail.com"
                                  className="text-[#C0392B] no-underline hover:underline"
                                >
                                  notebynoteaz@gmail.com
                                </a>
                              </>
                            ),
                          },
                          {
                            label: 'Check',
                            content: '– mail to our organization address (contact us for details)',
                          },
                        ].map((item, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.08, duration: 0.35 }}
                            className="flex items-start gap-2"
                          >
                            <span className="mt-0.5 w-2 h-2 rounded-full bg-[#C0392B] flex-shrink-0" />
                            <span>
                              <strong>{item.label}</strong> {item.content}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </motion.div>
              </InView>

              {/* ── Right — Trust & Stats ── */}
              <InView variants={fadeInRight} className="lg:col-span-3">
                <motion.div className="space-y-4" variants={stagger}>

                  {/* Trust cards */}
                  {trustItems.map((t, i) => (
                    <motion.div
                      key={i}
                      variants={fadeInUp}
                      custom={i * 0.08}
                      whileHover={{
                        y: -4,
                        boxShadow: '0 12px 28px -8px rgba(192,57,43,0.15)',
                        transition: { duration: 0.2 },
                      }}
                      className="flex gap-4 bg-gray-50 rounded-xl p-4 sm:p-5 cursor-default"
                    >
                      <motion.i
                        className={`bi ${t.icon} text-[#C0392B] text-2xl sm:text-3xl flex-shrink-0 mt-0.5`}
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      />
                      <div>
                        <h6 className="font-bold mb-1 text-xs sm:text-sm">{t.title}</h6>
                        <p className="text-xs sm:text-sm text-gray-600 m-0">{t.desc}</p>
                      </div>
                    </motion.div>
                  ))}

                  {/* Stats card */}
                  <motion.div
                    variants={fadeInUp}
                    custom={0.3}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    className="bg-[#2B2B2B] rounded-xl p-5 sm:p-6"
                  >
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                      {miniStats.map(([n, l], i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1, type: 'spring', stiffness: 200 }}
                        >
                          <div className="text-xl sm:text-2xl font-extrabold text-[#C0392B]">
                            {n}
                          </div>
                          <div className="text-[10px] sm:text-xs text-white/50 mt-0.5 leading-tight">
                            {l}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Decorative CTA card */}
                  <motion.div
                    variants={fadeInUp}
                    custom={0.4}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#C0392B] to-[#E67E22] p-5 sm:p-6 text-white"
                  >
                    {/* shimmer */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.75 }}
                    />
                    <p className="text-xs sm:text-sm font-medium text-white/80 mb-1 relative z-10">
                      Every dollar counts
                    </p>
                    <p className="text-base sm:text-lg font-bold relative z-10">
                      Help us keep music free for every student in Arizona. 🎵
                    </p>
                  </motion.div>

                </motion.div>
              </InView>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
