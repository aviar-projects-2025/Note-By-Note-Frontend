'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Variants } from 'framer-motion'
import students from './assets/students.png'
import banner from './assets/banner.png'
import studentimg from './assets/studentimg.png'

// ─── Types ────────────────────────────────────────────────────────────────────
interface Testimonial {
  name: string
  role: string
  quote: string
}

interface ProgramItem {
  title: string
  desc: string
  icon: string
}

interface NotePosition {
  left: string
  top: string
  delay: number
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const testimonials: Testimonial[] = [
  {
    name: 'Peter S.',
    role: 'Parent',
    quote:
      "The instructors are patient, inspiring, and deeply committed to every student's growth.",
  },
  {
    name: 'David K.',
    role: 'Student',
    quote:
      'I gained confidence performing on stage and improved my technique dramatically.',
  },
  {
    name: 'John R.',
    role: 'Parent',
    quote:
      'An excellent music program with a warm and supportive learning environment.',
  },
]

const studentImages: string[] = [
  'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200',
  'https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=1200',
  'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200',
]

const studentHighlights: string[] = [
  'Over 200 students have completed our program since founding, spanning ages 6–18.',
  'Students perform at bi-annual recitals, community events, and regional competitions.',
  'Every learner receives a personalized curriculum crafted around their unique goals.',
  'Many graduates have gone on to pursue music at the collegiate level or as a career.',
]

const musicalNotePositions: NotePosition[] = [
  { left: '15%', top: '20%', delay: 0 },
  { left: '75%', top: '35%', delay: 1 },
  { left: '25%', top: '70%', delay: 2 },
  { left: '85%', top: '10%', delay: 0.5 },
  { left: '45%', top: '50%', delay: 1.5 },
  { left: '65%', top: '85%', delay: 2.5 },
  { left: '10%', top: '90%', delay: 0.8 },
  { left: '55%', top: '15%', delay: 1.8 },
  { left: '35%', top: '60%', delay: 0.3 },
  { left: '95%', top: '75%', delay: 2.2 },
  { left: '5%',  top: '45%', delay: 1.2 },
  { left: '50%', top: '95%', delay: 0.6 },
]

const musicSymbolPositions: NotePosition[] = [
  { left: '20%', top: '30%', delay: 0 },
  { left: '60%', top: '80%', delay: 1.5 },
  { left: '80%', top: '20%', delay: 0.8 },
  { left: '40%', top: '65%', delay: 2 },
  { left: '70%', top: '50%', delay: 1.2 },
  { left: '30%', top: '15%', delay: 0.5 },
  { left: '90%', top: '70%', delay: 1.8 },
  { left: '10%', top: '55%', delay: 2.5 },
]

// ─── Animation Variants ───────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98]

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

// ─── Sub-components ───────────────────────────────────────────────────────────
interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
}

function AnimatedSection({ children, className = '' }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function AnimatedBackground() {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.15 }}
      transition={{ duration: 1.5 }}
    >
      {musicalNotePositions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute text-[#C0392B] text-4xl"
          style={{ left: pos.left, top: pos.top, opacity: 0.3 }}
          animate={{
            y: [0, -30, 0],
            x: [0, i % 2 === 0 ? 15 : -15, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 8 + (i % 5),
            repeat: Infinity,
            ease: 'easeInOut',
            delay: pos.delay,
          }}
        >
          ♪
        </motion.div>
      ))}
    </motion.div>
  )
}

function TestimonialBackground() {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.1 }}
      transition={{ duration: 1 }}
    >
      {musicSymbolPositions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute text-[#C0392B] text-3xl"
          style={{ left: pos.left, top: pos.top }}
          animate={{ y: [0, -20, 0], rotate: [0, 15, -15, 0] }}
          transition={{
            duration: 6 + (i % 4),
            repeat: Infinity,
            delay: pos.delay,
          }}
        >
          ♫
        </motion.div>
      ))}
    </motion.div>
  )
}

// ─── Page Component ───────────────────────────────────────────────────────────
export default function MusicProgramPage() {
  return (
    <main className="bg-[#FFFDF8] text-gray-900 overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FDEBD0] via-white to-[#F9E79F]" />
        <AnimatedBackground />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="flex-1"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-4 inline-flex rounded-full bg-[#C0392B]/10 px-4 py-1 text-sm font-medium text-[#C0392B]"
            >
              Inspiring Young Musicians
            </motion.span>

            <motion.h1
              className="text-5xl font-bold leading-tight tracking-tight lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Building Creativity Through
              <motion.span
                className="block text-[#C0392B]"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Music Education
              </motion.span>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-2xl text-lg leading-8 text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Our music program nurtures confidence, discipline, creativity, and
              performance skills through expert-led lessons and engaging student
              experiences.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/apply"
                  className="rounded-full bg-[#C0392B] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#A93226] inline-block"
                >
                  <p style={{color:"white"}}>Apply Now</p>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/donate"
                  className="rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition hover:border-[#C0392B] hover:text-[#C0392B] inline-block"
                >
                  Support Our Vision
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.34, 1.2, 0.64, 1] as [number, number, number, number] }}
            className="relative mt-16 flex-1 lg:mt-0"
          >
            <motion.div
              className="relative h-[500px] overflow-hidden rounded-3xl shadow-2xl"
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <Image
                src={banner}
                alt="Student practicing violin"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Mission Statement ── */}
      <AnimatedSection className="mx-auto max-w-5xl px-6 py-20 text-center">
        <motion.h2
          variants={fadeInUp}
          className="text-4xl font-bold bg-gradient-to-r from-[#C0392B] to-[#E67E22] bg-clip-text text-transparent"
        >
          Mission Statement
        </motion.h2>

        <motion.p variants={fadeInUp} className="mt-6 text-lg leading-8 text-gray-600">
          Our mission is to provide accessible, high-quality music education that
          empowers students to discover their artistic voice, develop lifelong
          confidence, and contribute positively to their communities through the
          power of music.
        </motion.p>
      </AnimatedSection>

      {/* ── Program Overview ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            className="mb-14 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold">Program Overview</h2>
            <p className="mt-4 text-gray-600">
              Comprehensive music education designed for all skill levels.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {(
              [
                {
                  title: 'Private Lessons',
                  desc: "One-on-one instruction tailored to each student's goals and experience.",
                  icon: '🎵',
                },
                {
                  title: 'Performance Training',
                  desc: 'Students gain stage confidence through recitals and live performances.',
                  icon: '🎶',
                },
                {
                  title: 'Music Theory',
                  desc: 'Strong theoretical foundations to support musicianship and creativity.',
                  icon: '🎼',
                },
              ] as ProgramItem[]
            ).map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -12, transition: { duration: 0.2 } }}
                className="rounded-3xl border border-gray-100 bg-[#FFFDF8] p-8 shadow-sm hover:shadow-xl cursor-pointer group"
              >
                <motion.div
                  className="text-5xl mb-4 inline-block"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold group-hover:text-[#C0392B] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Students ── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold">Our Students</h2>
          <p className="mt-4 text-gray-600">
            Moments from classes, rehearsals, and performances.
          </p>

          <motion.p
            className="mt-6 mx-auto max-w-2xl text-base leading-7 text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Note By Note is a student-run nonprofit in Arizona creating music
            education through free, one-on-one instruction.
          </motion.p>
        </motion.div>

        {/* ── Local student images ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-16 w-full">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: EASE }}
            whileHover={{ scale: 1.03, transition: { duration: 0.25 } }}
            className="relative overflow-hidden rounded-3xl shadow-xl cursor-pointer group"
          >
            <Image
              src={students}
              alt="Group of students"
              className="w-full h-[300px] sm:h-[420px] md:h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15, ease: EASE }}
            whileHover={{ scale: 1.03, transition: { duration: 0.25 } }}
            className="relative overflow-hidden rounded-3xl shadow-xl cursor-pointer group"
          >
            <Image
              src={studentimg}
              alt="Student in session"
              className="w-full h-[300px] sm:h-[420px] md:h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>

        {/* Student highlight cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {studentHighlights.map((text, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.12, ease: EASE }}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 40px -12px rgba(192,57,43,0.18)',
                transition: { duration: 0.22 },
              }}
              className="relative rounded-2xl bg-gradient-to-br from-[#FEF5E7] to-white border border-[#F5CBA7] p-6 shadow-sm cursor-pointer overflow-hidden"
            >
              <motion.span
                className="absolute -top-2 -right-2 text-5xl text-[#C0392B] opacity-10 select-none"
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: idx * 0.5 }}
              >
                ♪
              </motion.span>

              <motion.div
                className="w-8 h-8 rounded-full bg-[#C0392B] text-white text-sm font-bold flex items-center justify-center mb-4"
                whileHover={{ scale: 1.15, rotate: 5 }}
              >
                {idx + 1}
              </motion.div>

              <p className="text-sm leading-6 text-gray-700 font-medium">{text}</p>
            </motion.div>
          ))}
        </div>

        {/* Photo grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {studentImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative h-[380px] overflow-hidden rounded-3xl shadow-lg cursor-pointer"
            >
              <Image
                src={src}
                alt={`Student ${index + 1}`}
                fill
                className="object-cover transition-all duration-700 hover:scale-110"
              />
              <motion.div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-[#FDF2E9] py-20 relative overflow-hidden">
        <TestimonialBackground />

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <motion.div
            className="mb-14 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold">Testimonials</h2>
            <p className="mt-4 text-gray-600">
              What families and students say about our program.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 25px -12px rgba(192, 57, 43, 0.2)',
                }}
                className="rounded-3xl bg-white p-8 shadow-md cursor-pointer"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: idx * 0.1 + 0.3, type: 'spring' }}
                  className="text-6xl mb-4 text-[#C0392B]"
                >
                  &ldquo;
                </motion.div>
                <p className="text-lg leading-8 text-gray-700">{testimonial.quote}</p>

                <div className="mt-6">
                  <h4 className="font-semibold text-[#C0392B]">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Federal Tax ID ── */}
      <AnimatedSection className="mx-auto max-w-4xl px-6 py-20">
        <motion.div
          variants={fadeInUp}
          whileHover={{ scale: 1.02 }}
          className="rounded-3xl border border-[#F5CBA7] bg-[#FEF5E7] p-10 text-center shadow-sm"
        >
          <h2 className="text-3xl font-bold">
            Federal Tax ID Information
          </h2>

          <p className="mt-4 text-lg text-gray-700">Registered Nonprofit Organization</p>

          <motion.div
            className="mt-6 inline-flex rounded-2xl bg-white px-6 py-4 text-2xl font-bold tracking-widest text-[#C0392B] shadow"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 25px -5px rgba(192, 57, 43, 0.3)',
            }}
          >
            12-3456789
          </motion.div>
        </motion.div>
      </AnimatedSection>

      {/* ── Syllabus CTA ── */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="rounded-3xl bg-[#C0392B] px-10 py-16 text-center text-white shadow-2xl cursor-pointer relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.8 }}
            />

            <motion.h2
              className="text-4xl font-bold"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <p style={{color:"white"}}>Download Program Syllabus</p>
            </motion.h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Explore course structure, lesson plans, performance expectations, and
              curriculum details.
            </p>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/syllabus.pdf"
                className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#C0392B] transition hover:bg-[#FDEBD0]"
              >
                <p style={{color:"black"}}>View Syllabus</p>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
