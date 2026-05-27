'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { motion } from 'framer-motion'

const VideoIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" aria-hidden="true">
    <rect x="2" y="10" width="30" height="28" rx="4" stroke="#C0392B" strokeWidth="3" fill="none"/>
    <path d="M32 19l12-7v24l-12-7V19z" fill="#C0392B"/>
  </svg>
)

const CalendarIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" aria-hidden="true">
    <rect x="4" y="8" width="40" height="36" rx="4" stroke="#C0392B" strokeWidth="3" fill="none"/>
    <line x1="4" y1="18" x2="44" y2="18" stroke="#C0392B" strokeWidth="3"/>
    <line x1="14" y1="2" x2="14" y2="12" stroke="#C0392B" strokeWidth="3" strokeLinecap="round"/>
    <line x1="34" y1="2" x2="34" y2="12" stroke="#C0392B" strokeWidth="3" strokeLinecap="round"/>
    <polyline points="14,28 20,34 34,26" stroke="#C0392B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
)

const MusicNoteIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" aria-hidden="true">
    <path d="M18 36V12l24-4v24" stroke="#C0392B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <circle cx="12" cy="36" r="6" stroke="#C0392B" strokeWidth="3" fill="none"/>
    <circle cx="36" cy="32" r="6" stroke="#C0392B" strokeWidth="3" fill="none"/>
  </svg>
)

const PeopleIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" aria-hidden="true">
    <circle cx="16" cy="16" r="7" stroke="#C0392B" strokeWidth="3" fill="none"/>
    <path d="M2 40c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="#C0392B" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <circle cx="36" cy="14" r="5" stroke="#C0392B" strokeWidth="2.5" fill="none"/>
    <path d="M36 24c5.523 0 10 4.477 10 10" stroke="#C0392B" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
  </svg>
)

const ClockIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline-block mr-2" aria-hidden="true">
    <circle cx="24" cy="24" r="20" stroke="#C0392B" strokeWidth="3" fill="none"/>
    <line x1="24" y1="24" x2="24" y2="12" stroke="#C0392B" strokeWidth="3" strokeLinecap="round"/>
    <line x1="24" y1="24" x2="33" y2="30" stroke="#C0392B" strokeWidth="3" strokeLinecap="round"/>
  </svg>
)

const features = [
  { Icon: VideoIcon, title: 'Live, One-on-One Lessons', desc: 'Real-time instruction from our dedicated tutors.' },
  { Icon: CalendarIcon, title: 'Flexible & Accessible', desc: 'Learn from home with a schedule that works for you.' },
  { Icon: MusicNoteIcon, title: 'All Instruments Welcome', desc: 'Piano, strings, winds, woodwinds, and more.' },
  { Icon: PeopleIcon, title: 'For Middle School Students', desc: 'Designed for students in grades 5–8.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function OnlineLessonsPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Banner */}
   <div className="relative w-full h-64 sm:h-80 overflow-hidden">
  <motion.img
    src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1400&q=80&auto=format&fit=crop&crop=top"
    alt="Student with headphones learning online"
    className="w-full h-full object-cover object-top"
    initial={{ scale: 1.15 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1.2, ease: 'easeOut' }}
  />

  <div className="absolute inset-0 bg-black/55" />

  <motion.div
    className="absolute inset-0 flex items-center justify-center text-center px-6"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h1 className="text-white text-3xl sm:text-5xl font-bold drop-shadow-lg" >
     <p style={{color:"white"}}> Online Lessons</p> 
    </h1>
  </motion.div>
</div>

        {/* Intro / Features */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12 max-w-2xl mx-auto"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-3">Music Education Anywhere</h2>
              <p className="text-gray-500">
                Our online lessons initiative brings the power of music education to students no matter where they are.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {features.map(({ Icon, title, desc }, i) => (
                <motion.div
                  key={i}
                  className="text-center p-6 rounded-2xl bg-white shadow-sm cursor-pointer"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  whileHover={{
                    y: -10,
                    scale: 1.04,
                    boxShadow: '0px 18px 35px rgba(0,0,0,0.12)',
                  }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 8, scale: 1.15 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Icon />
                  </motion.div>

                  <motion.h5
                    className="font-bold text-sm mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.15 + 0.2 }}
                  >
                    {title}
                  </motion.h5>

                  <motion.p
                    className="text-gray-500 text-sm leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.15 + 0.3 }}
                  >
                    {desc}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-16 bg-[#FAFAF8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.img
                src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=700&q=80&auto=format&fit=crop"
                alt="Student in online video lesson"
                className="rounded-2xl shadow-xl w-full object-cover"
                style={{ height: 340 }}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                whileHover={{ scale: 1.03 }}
              />

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h3 className="text-2xl font-bold mb-4">Interested in online lessons?</h3>

                <p className="text-gray-600 leading-relaxed mb-4">
                  We are actively building our online lesson portal to make music education even more accessible.
                  Sign up today and we'll be in touch with next steps as the program launches.
                </p>

                <p className="text-gray-600 leading-relaxed mb-6">
                  This initiative will offer live, one-on-one video lessons with our dedicated volunteer tutors —
                  completely free for middle school students in grades 5–8.
                </p>

                {/* <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}> */}
                  <Link
                    href="/sign-up"
                    className="inline-block bg-[#C0392B] hover:bg-[#a93226] text-white font-bold px-8 py-3 rounded text-sm no-underline transition-colors"
                  >
                    <p style={{color:"white"}}>SIGN UP NOW</p>
                  </Link>
                {/* </motion.div> */}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Coming soon bar */}
        <motion.section
          className="py-4 bg-[#2B2B2B]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.p
              className="text-white text-sm m-0"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              The full online portal is coming soon.{' '}
              <strong className="text-white">Stay tuned for updates!</strong>
            </motion.p>
          </div>
        </motion.section>
      </main>

      <Footer />
    </>
  )
}