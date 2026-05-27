'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import banner from "./assets/banner.png"
import students from './assets/students.png'
import studentimg from './assets/studentimg.png'

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────
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

// ─────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────
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
]

const musicSymbolPositions: NotePosition[] = [
  { left: '20%', top: '30%', delay: 0 },
  { left: '60%', top: '80%', delay: 1.5 },
  { left: '80%', top: '20%', delay: 0.8 },
  { left: '40%', top: '65%', delay: 2 },
]

// ─────────────────────────────────────────────────────────────
// Animations
// ─────────────────────────────────────────────────────────────
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98] as number[],
    },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

// ─────────────────────────────────────────────────────────────
// Animated Section
// ─────────────────────────────────────────────────────────────
function AnimatedSection({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })

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

// ─────────────────────────────────────────────────────────────
// Animated Hero Background
// ─────────────────────────────────────────────────────────────
function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)

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
          className="absolute text-[#C0392B] text-2xl sm:text-4xl"
          style={{
            left: pos.left,
            top: pos.top,
            opacity: 0.3,
          }}
          animate={{
            y: [0, -25, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 8 + i,
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

// ─────────────────────────────────────────────────────────────
// Testimonial Background
// ─────────────────────────────────────────────────────────────
function TestimonialBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.08 }}
      transition={{ duration: 1 }}
    >
      {musicSymbolPositions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute text-[#C0392B] text-2xl sm:text-3xl"
          style={{
            left: pos.left,
            top: pos.top,
          }}
          animate={{
            y: [0, -18, 0],
            rotate: [0, 12, -12, 0],
          }}
          transition={{
            duration: 6 + i,
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

// ─────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────
export default function MusicProgramPage() {
  return (
    <main className="overflow-x-hidden bg-[#FFFDF8] text-gray-900">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FDEBD0] via-white to-[#F9E79F]" />

        <AnimatedBackground />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 lg:py-24 lg:flex lg:items-center lg:gap-16">

          {/* LEFT */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4 inline-flex rounded-full bg-[#C0392B]/10 px-4 py-1 text-sm font-medium text-[#C0392B]"
            >
              Inspiring Young Musicians
            </motion.span>

            <motion.h1
              className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Building Creativity Through
              <span className="block text-[#C0392B]">
                Music Education
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Our music program nurtures confidence, discipline,
              creativity, and performance skills through expert-led
              lessons and engaging student experiences.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="/apply"
                  className="inline-block rounded-full bg-[#C0392B] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#A93226]"
                >
                  <p style={{ color: 'white' }}>Apply Now</p>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="/contact"
                  className="inline-block rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition hover:border-[#C0392B] hover:text-[#C0392B]"
                >
                  Support Our Vision
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

<motion.div
  className="relative mt-12 lg:mt-0 flex-1"
  initial={{ opacity: 0, scale: 0.92 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
>
  <div className="relative w-full h-[260px] sm:h-[420px] md:h-[520px] lg:h-[620px]">
    <Image
                   src={banner}
      alt="Musical instruments"
      fill
      className="object-cover rounded-2xl"
      priority
    />
  </div>
</motion.div>
        </div>
      </section>

      {/* MISSION */}
      <AnimatedSection className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20 text-center">
        <motion.h2
          variants={fadeInUp}
          className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#C0392B] to-[#E67E22] bg-clip-text text-transparent"
        >
          Mission Statement
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600"
        >
          Our mission is to provide accessible, high-quality music education that empowers students to discover their artistic voice and develop lifelong confidence.
        </motion.p>
      </AnimatedSection>

      {/* PROGRAM OVERVIEW */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          <motion.div
            className="mb-14 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Program Overview
            </h2>

            <p className="mt-4 text-gray-600">
              Comprehensive music education designed for all skill levels.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

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
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="
                  rounded-3xl border border-gray-100
                  bg-[#FFFDF8]
                  p-5 sm:p-8
                  shadow-sm hover:shadow-xl
                  transition-all duration-300
                "
              >
                <motion.div
                  className="mb-4 inline-block text-5xl"
                  whileHover={{ scale: 1.2, rotate: 8 }}
                >
                  {item.icon}
                </motion.div>

                <h3 className="text-xl sm:text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENTS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">

        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            Our Students
          </h2>

          <p className="mt-4 text-gray-600">
            Moments from classes, rehearsals, and performances.
          </p>
        </motion.div>

        {/* RESPONSIVE IMAGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-16">

          {/* IMAGE 1 */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            // className="relative overflow-hidden rounded-3xl shadow-xl bg-white"
          >
            {/* object-contain prevents crop */}
            <div className="relative w-full h-[260px] sm:h-[380px] md:h-[500px] lg:h-[620px]">
              <Image
                src={students}
                alt="Students"
                fill
                className="object-contain transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* IMAGE 2 */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            // className="relative overflow-hidden rounded-3xl shadow-xl bg-white"
          >
            <div className="relative w-full h-[260px] sm:h-[380px] md:h-[500px] lg:h-[620px]">
              <Image
                src={studentimg}
                alt="Student"
                fill
                className="object-contain transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>

        {/* HIGHLIGHT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

          {studentHighlights.map((text, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 40px -12px rgba(192,57,43,0.18)',
              }}
              className="
                rounded-2xl border border-[#F5CBA7]
                bg-gradient-to-br from-[#FEF5E7] to-white
                p-5 sm:p-6 shadow-sm
              "
            >
              <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#C0392B] text-sm font-bold text-white">
                {idx + 1}
              </div>

              <p className="text-sm leading-6 text-gray-700 font-medium">
                {text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* PHOTO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {studentImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-3xl shadow-lg bg-white"
            >
              {/* object-contain to avoid crop */}
              <div className="relative w-full h-[240px] sm:h-[320px] md:h-[380px]">
                <Image
                  src={src}
                  alt={`Student ${index + 1}`}
                  fill
                  className="object-contain transition-transform duration-700 hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative overflow-hidden bg-[#FDF2E9] py-16 sm:py-20">

        <TestimonialBackground />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">

          <motion.div
            className="mb-14 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Testimonials
            </h2>

            <p className="mt-4 text-gray-600">
              What families and students say about our program.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 25px -12px rgba(192,57,43,0.2)',
                }}
                className="
                  rounded-3xl bg-white
                  p-5 sm:p-8
                  shadow-md
                "
              >
                <div className="mb-4 text-5xl sm:text-6xl text-[#C0392B]">
                  &ldquo;
                </div>

                <p className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-700">
                  {testimonial.quote}
                </p>

                <div className="mt-6">
                  <h4 className="font-semibold text-[#C0392B]">
                    {testimonial.name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TAX ID */}
      <AnimatedSection className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-20">

        <motion.div
          variants={fadeInUp}
          whileHover={{ scale: 1.02 }}
          className="
            rounded-3xl border border-[#F5CBA7]
            bg-[#FEF5E7]
            p-6 sm:p-10
            text-center shadow-sm
          "
        >
          <h2 className="text-2xl sm:text-3xl font-bold">
            Federal Tax ID Information
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-700">
            Registered Nonprofit Organization
          </p>

          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 25px -5px rgba(192,57,43,0.3)',
            }}
            className="
              mt-6 inline-flex
              rounded-2xl bg-white
              px-5 sm:px-6 py-4
              text-xl sm:text-2xl
              font-bold tracking-widest
              text-[#C0392B] shadow
            "
          >
            12-3456789
          </motion.div>
        </motion.div>
      </AnimatedSection>

      {/* CTA */}
      <section className="pb-20 sm:pb-24">

        <div className="mx-auto max-w-5xl px-4 sm:px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="
              relative overflow-hidden
              rounded-3xl bg-[#C0392B]
              px-5 sm:px-10
              py-10 sm:py-16
              text-center text-white
              shadow-2xl
            "
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.8 }}
            />

            <h2 className="text-2xl sm:text-4xl font-bold">
              Download Program Syllabus
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-lg text-white/80 leading-7">
              Explore course structure, lesson plans, performance expectations, and curriculum details.
            </p>

            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
            >
              <Link
                href="/syllabus.pdf"
                className="
                  mt-8 inline-flex rounded-full
                  bg-white px-6 sm:px-8
                  py-3 sm:py-4
                  text-sm font-semibold text-[#C0392B]
                  transition hover:bg-[#FDEBD0]
                "
              >
                <p style={{ color: 'black' }}>
                  View Syllabus
                </p>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}