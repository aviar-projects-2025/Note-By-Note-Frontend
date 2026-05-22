'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useRef, useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Heart, Users, Award, ArrowRight, Music, Star, BookOpen } from 'lucide-react'

import founder1 from './assets/founder1.png'
import founder2 from './assets/founder2.png'
import founder3 from './assets/founder3.png'
import team from './assets/team.png'
import banner from './assets/banner.png'

const ease = [0.22, 1, 0.36, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 44 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
}
const fadeLeft = {
  hidden: { opacity: 0, x: -44 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease } },
}
const fadeRight = {
  hidden: { opacity: 0, x: 44 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease } },
}
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
}
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.55, ease } },
}

/* ─── Reveal wrapper ─────────────────────────────────────────── */
function Reveal({
  children,
  variants = fadeUp,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  variants?: object
  className?: string
  delay?: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ─── Floating notes — client-only to avoid hydration mismatch ── */
const notePositions = [
  { left: '8%',  top: '18%', delay: 0,   symbol: '♪' },
  { left: '88%', top: '12%', delay: 1.2, symbol: '♫' },
  { left: '22%', top: '72%', delay: 0.6, symbol: '♩' },
  { left: '78%', top: '65%', delay: 2,   symbol: '♪' },
  { left: '50%', top: '30%', delay: 1.5, symbol: '♫' },
  { left: '5%',  top: '50%', delay: 0.3, symbol: '♩' },
  { left: '92%', top: '45%', delay: 1.8, symbol: '♪' },
]

function FloatingNotes() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return null

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {notePositions.map((n, i) => (
        <motion.span
          key={i}
          className="absolute text-white/20 text-3xl sm:text-4xl select-none"
          style={{ left: n.left, top: n.top }}
          animate={{ y: [0, -28, 0], rotate: [0, 12, -12, 0] }}
          transition={{ duration: 7 + (i % 4), repeat: Infinity, ease: 'easeInOut', delay: n.delay }}
        >
          {n.symbol}
        </motion.span>
      ))}
    </div>
  )
}

/* ─── Animated counter ───────────────────────────────────────── */
function Counter({ target }: { target: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const num = parseInt(target.replace(/\D/g, ''))
  const suffix = target.replace(/[0-9]/g, '')
  const [count, setCount] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    if (!inView || !mounted) return
    let start = 0
    const step = Math.ceil(num / 50)
    const timer = setInterval(() => {
      start += step
      if (start >= num) { setCount(num); clearInterval(timer) }
      else setCount(start)
    }, 30)
    return () => clearInterval(timer)
  }, [inView, num, mounted])

  // Render static value on server / before mount to avoid mismatch
  if (!mounted) return <span>{num}{suffix}</span>

  return <span ref={ref}>{count}{suffix}</span>
}

/* ─── Data ───────────────────────────────────────────────────── */
const teamMembers = [
  { name: 'Dione Pahilan',   role: 'Co-Founder', img: founder1, fallbackBg: 'bg-[#b8c9c6]', bio: 'Passionate about bridging the gap in music access across Phoenix schools.' },
  { name: 'Santiago Paul',   role: 'Co-Founder', img: founder2, fallbackBg: 'bg-[#4a7fa8]', bio: 'Believes every child deserves the joy and discipline that music brings.' },
  { name: 'Mahima Sanghera', role: 'Co-Founder', img: founder3, fallbackBg: 'bg-[#c8b8a2]', bio: 'Dedicated to creating equitable, community-driven music education.' },
]

const stats = [
  { number: '250+', label: 'Students Served' },
  { number: '40+',  label: 'Volunteer Tutors' },
  { number: '10+',  label: 'Instruments' },
  { number: '20+',  label: 'Schools Reached' },
]

const values = [
  { icon: Heart,    title: 'Compassion', desc: "We serve with empathy and genuine care for every student's journey, meeting them where they are." },
  { icon: Users,    title: 'Community',  desc: 'We build lasting relationships between tutors, students, families, and schools across Arizona.' },
  { icon: Award,    title: 'Excellence', desc: 'We hold ourselves to the highest standard so every lesson is meaningful and impactful.' },
  { icon: Music,    title: 'Creativity', desc: 'We encourage students to find their own musical voice, beyond notes on a page.' },
  { icon: BookOpen, title: 'Education',  desc: 'We believe learning an instrument builds confidence, focus, and discipline for life.' },
  { icon: Star,     title: 'Equity',     desc: 'Financial barriers should never stand between a child and their love of music.' },
]

const milestones = [
  { year: '2023', title: 'Founded',        desc: 'Note By Note launched in mid-2023 by three Brophy/Xavier juniors with a simple idea: free one-on-one music lessons.' },
  { year: '2023', title: '501(c)(3) Status', desc: 'Officially registered as a nonprofit, making all donations fully tax-deductible.' },
  { year: '2024', title: '250+ Students',  desc: 'Expanded to serve over 250 students across 20+ schools in the Phoenix metro area.' },
  { year: '2025', title: 'Growing Strong', desc: 'Recruiting our next cohort of volunteer tutors and expanding instrument access programs.' },
]

/* ─── Team Card ──────────────────────────────────────────────── */
function TeamCard({ member }: { member: typeof teamMembers[0] }) {
  const [imgError, setImgError] = useState(false)
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -10 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="flex flex-col items-center group"
    >
      <div className="relative w-full overflow-hidden rounded-2xl shadow-lg bg-gray-100 aspect-[3/4]">
        {!imgError ? (
          <Image
            src={member.img}
            alt={member.name}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={`w-full h-full ${member.fallbackBg} flex items-center justify-center`}>
            <span className="text-white font-bold text-5xl opacity-60">
              {member.name.split(' ').map(w => w[0]).join('')}
            </span>
          </div>
        )}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-white text-sm leading-relaxed">{member.bio}</p>
        </motion.div>
      </div>
      <motion.p
        className="mt-4 font-bold text-base sm:text-lg"
        animate={{ color: hovered ? '#C0392B' : '#2B2B2B' }}
        transition={{ duration: 0.2 }}
      >
        {member.name}
      </motion.p>
      <p className="text-gray-500 text-sm">{member.role}</p>
    </motion.div>
  )
}

/* ─── Hero (scroll-dependent — isolated to avoid SSR issues) ─── */
function HeroSection() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const bannerY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const bannerOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3])

  return (
    <section ref={heroRef} className="relative h-[85vh] sm:h-[90vh] w-full overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bannerY, opacity: bannerOpacity }}>
        <Image src={banner} alt="banner" fill priority className="object-cover" />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      <FloatingNotes />

      <div className="relative z-10 flex items-center justify-center h-full text-center px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {/* <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-[#C0392B]/20 border border-[#C0392B]/40 px-4 py-1.5 text-xs sm:text-sm text-[#E0674A] tracking-widest uppercase mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C0392B] animate-pulse" />
            About Us
          </motion.span> */}

          <motion.h1
            className="text-white text-4xl sm:text-5xl md:text-7xl font-bold mt-2 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease }}
          >
            <p style={{color:"white"}}>Who We Are</p>
          </motion.h1>

          <motion.p
            className="text-gray-200 mt-5 max-w-xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.6 }}
          >
            Making music education free, accessible, and inspiring for every child in Arizona.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 bg-[#C0392B] px-6 sm:px-8 py-3 rounded-full text-white font-semibold text-sm sm:text-base shadow-lg"
              >
                <p style={{ color: 'white' }}>Support Us</p>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/30" />
      </motion.div>
    </section>
  )
}

/* ─── MAIN PAGE ──────────────────────────────────────────────── */
export default function WhoWeArePage() {
  // ✅ Key fix: gate ALL rendering behind mount to prevent blank-on-back-nav
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  if (!mounted) {
    return (
      <main className="bg-white text-[#2B2B2B] overflow-x-hidden">
        <Navbar />
        {/* Minimal skeleton so the page isn't completely empty during hydration */}
        <div className="h-screen w-full bg-gray-900" />
        <Footer />
      </main>
    )
  }

  return (
  <>
    <Navbar />
    <main className="bg-white text-[#2B2B2B] overflow-x-hidden">
    

      {/* ── HERO ── */}
      <HeroSection />

      {/* ── OUR STORY ── */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal variants={fadeLeft}>
            <motion.div
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-3xl shadow-2xl group w-full h-[280px] sm:h-[380px] md:h-[440px] lg:h-[480px]"
            >
              <Image src={team} alt="Note By Note team" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <motion.div
                className="absolute bottom-4 left-5 sm:bottom-6 sm:left-7"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <span className="text-white font-bold text-sm sm:text-base bg-[#C0392B]/80 px-3 py-1 rounded-full">
                  The Note By Note Team 🎵
                </span>
              </motion.div>
            </motion.div>
          </Reveal>

          <Reveal variants={fadeRight}>
            <motion.span className="inline-block text-xs sm:text-sm text-[#C0392B] font-semibold tracking-widest uppercase mb-3" variants={fadeUp}>
              Our Story
            </motion.span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-5 leading-tight">
              Born from a Belief That<br className="hidden sm:block" />
              <span className="text-[#C0392B]">Music Is for Everyone</span>
            </h2>
            <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              <p>Dione Pahilan, Santiago Paul, and Mahima Sanghera — juniors at Brophy College Preparatory and Xavier College Preparatory — recognized the deep disparities in music education across Phoenix. Many kids aspire to play an instrument but cannot for financial reasons.</p>
              <p>The Arts Education Data Project reports that over a third of Arizona K-8 students do not have access to music instruction, with funding being the primary barrier.</p>
              <p>Starting in mid-2023, Note By Note was created to establish financially equitable conditions in music education — specifically in elementary and middle schools — through free one-on-one instruction.</p>
            </div>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                <Link href="/donate" className="inline-flex items-center gap-2 bg-[#2B2B2B] text-white px-6 py-3 rounded-full text-sm font-semibold">
                  <p style={{ color: 'white' }}>Support Our Work</p>
                </Link>
              </motion.div>
           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
  <Link 
    href="/volunteer" 
    className="inline-flex items-center gap-2 border border-[#C0392B] text-[#C0392B] px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#C0392B] hover:text-white transition-colors duration-300"
  >
    Volunteer With Us
  </Link>
</motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── MILESTONES ── */}
      <section className="bg-[#FFFDF8] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">Our Journey</h2>
            <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-xl mx-auto">From a small idea to a growing movement for music equity in Arizona.</p>
          </Reveal>
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />
            <div className="space-y-8 lg:space-y-0">
{milestones.map((m, idx) => (
  <Reveal key={idx} delay={idx * 0.1}>
    <div className={`lg:grid lg:grid-cols-2 lg:gap-12 items-center ${idx % 2 === 0 ? '' : 'lg:dir-rtl'}`}>
      <motion.div
        className={`${idx % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:col-start-2 lg:pl-12'} mb-4 lg:mb-0`}
        whileHover={{ x: idx % 2 === 0 ? -4 : 4 }}
        transition={{ duration: 0.2 }}
      >
        <span className="inline-block text-xs font-bold text-[#C0392B] bg-[#C0392B]/10 px-3 py-1 rounded-full mb-2">{m.year}</span>
        <h3 className="text-lg sm:text-xl font-bold mb-1">{m.title}</h3>
        <p className="text-gray-500 text-sm sm:text-base leading-relaxed">{m.desc}</p>
      </motion.div>
      {idx !== milestones.length - 1 && (
        <div className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 ${idx === 0 ? 'top-0' : ''}`}>
          <motion.div
            className="w-4 h-4 rounded-full bg-[#C0392B] border-4 border-white shadow"
            whileInView={{ scale: [0, 1.3, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            style={{ marginTop: `${idx * 140 + 8}px` }}
          />
        </div>
      )}
    </div>
  </Reveal>
))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10 sm:mb-14">
            <span className="text-xs sm:text-sm text-[#C0392B] font-semibold tracking-widest uppercase">The People Behind the Mission</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">Meet Our Founders</h2>
            <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-lg mx-auto">Three high-schoolers who turned a shared frustration into a statewide movement.</p>
          </Reveal>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {teamMembers.map(m => <TeamCard key={m.name} member={m} />)}
          </motion.div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="bg-[#FFFDF8] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold">What We Stand For</h2>
            <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-lg mx-auto">Six principles that guide every lesson, every decision, every interaction.</p>
          </Reveal>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {values.map(v => {
              const Icon = v.icon
              return (
                <motion.div
                  key={v.title}
                  variants={scaleIn}
                  whileHover={{ y: -8, boxShadow: '0 20px 40px -12px rgba(192,57,43,0.18)', transition: { duration: 0.22 } }}
                  className="group bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 shadow-sm cursor-default relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C0392B]/5 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.div
                    className="w-11 h-11 rounded-xl bg-[#C0392B]/10 flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.15, rotate: 6 }}
                    transition={{ type: 'spring', stiffness: 350 }}
                  >
                    <Icon size={20} className="text-[#C0392B]" />
                  </motion.div>
                  <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-[#C0392B] transition-colors duration-200">{v.title}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-[#2B2B2B] text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Our Impact by the Numbers</h2>
            <p className="text-gray-400 mt-2 text-sm">Growing every semester.</p>
          </Reveal>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {stats.map(s => (
              <motion.div
                key={s.label}
                variants={scaleIn}
                whileHover={{ scale: 1.07 }}
                className="bg-white/5 rounded-2xl py-6 px-3 sm:px-4 cursor-default"
              >
                <p className="text-3xl sm:text-4xl font-bold text-[#C0392B]">
                  <Counter target={s.number} />
                </p>
                <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-tight">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <Reveal>
            <motion.div
              whileHover={{ scale: 1.015 }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#C0392B] to-[#E67E22] px-8 sm:px-12 py-14 sm:py-16 text-center text-white shadow-2xl"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.85 }}
              />
              {['♪', '♫', '♩'].map((sym, i) => (
                <motion.span
                  key={i}
                  className="absolute text-white/20 text-4xl select-none"
                  style={{ left: `${15 + i * 35}%`, top: '20%' }}
                  animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.8 }}
                >
                  {sym}
                </motion.span>
              ))}
              <h2 className="text-3xl sm:text-4xl font-bold relative z-10">Ready to Make a Difference?</h2>
              <p className="mt-3 text-white/80 max-w-xl mx-auto text-sm sm:text-base relative z-10">
                Whether you donate, volunteer, or simply spread the word — every action helps us put an instrument in a child's hands.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center relative z-10">
                <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}>
                  <Link href="/donate" className="inline-flex items-center gap-2 bg-white text-[#C0392B] font-bold px-7 py-3.5 rounded-full text-sm shadow-md hover:bg-[#FDEBD0] transition">
                    <p style={{ color: 'black' }}>Donate Now</p>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}>
                  <Link href="/volunteer" className="inline-flex items-center gap-2 border border-white/60 text-white font-semibold px-7 py-3.5 rounded-full text-sm hover:bg-white/10 transition">
                    Volunteer
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
    </>
  )
}