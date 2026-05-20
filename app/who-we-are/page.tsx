'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useRef, useState } from 'react'  // ← Add React import
import { motion, useInView } from 'framer-motion'
import { Heart, Users, Award, ArrowRight, Quote } from 'lucide-react'

// Import images correctly
import founder2 from "./assets/founder2.png"
import founder1 from "./assets/founder1.png"
import founder3 from "./assets/founder3.png"
import team from "./assets/team.png"
/* ─── Animation helpers ──────────────────────────────────────────────────── */
const ease = [0.22, 1, 0.36, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 44 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.65, ease } },
}
const fadeLeft = {
  hidden: { opacity: 0, x: -44 },
  show:   { opacity: 1, x: 0,  transition: { duration: 0.65, ease } },
}
const fadeRight = {
  hidden: { opacity: 0, x: 44 },
  show:   { opacity: 1, x: 0,  transition: { duration: 0.65, ease } },
}
const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
}

function Reveal({
  children,
  variants = fadeUp,
  className = '',
}: {
  children: React.ReactNode
  variants?: typeof fadeUp
  className?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ─── Data ───────────────────────────────────────────────────────────────── */

// Team data with imported images
const team = [
  {
    name: 'Dione Pahilan',
    role: 'Co-Founder',
    img: '/images/dione.jpg',
    fallbackBg: 'bg-[#b8c9c6]',
  },
  {
    name: 'Santiago Paul',
    role: 'Co-Founder',
    img: founder2,
    fallbackBg: 'bg-[#4a7fa8]',
  },
  {
    name: 'Mahima Sanghera',
    role: 'Co-Founder',
    img: '/images/mahima.jpg',
    fallbackBg: 'bg-[#c8b8a2]',
  },
]

// Mosaic photos
const mosaicPhotos = [
  { src: '/images/program-1.jpg', alt: 'Student and tutor at laptop' },
  { src: '/images/program-2.jpg', alt: 'Student practising cello' },
  { src: '/images/program-3.jpg', alt: 'Student at piano with sheet music' },
  { src: '/images/program-4.jpg', alt: 'Student with trumpet at piano' },
  { src: '/images/program-5.jpg', alt: 'Student cello lesson' },
  { src: '/images/program-6.jpg', alt: 'Drum lesson in red-lit room' },
  { src: '/images/program-7.jpg', alt: 'Student at piano cello practice' },
  { src: '/images/program-8.jpg', alt: 'Trumpet practice close-up' },
  { src: '/images/program-9.jpg', alt: 'Students working together' },
]

const stats = [
  { number: '250+', label: 'Students Served' },
  { number: '40+',  label: 'Volunteer Tutors' },
  { number: '10+',  label: 'Instruments' },
  { number: '20+',  label: 'Schools Reached' },
]

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    desc: 'We serve with empathy, meeting every student where they are in their musical journey.',
  },
  {
    icon: Users,
    title: 'Community',
    desc: 'Music is communal. We build lasting relationships between students, tutors, and families.',
  },
  {
    icon: Award,
    title: 'Excellence',
    desc: 'Free never means second-rate. We hold our tutors and curriculum to the highest standard.',
  },
]

/* ─── Fallback avatar ─────────────────────────────────────────────────── */
function AvatarFallback({ name, bg }: { name: string; bg: string }) {
  const initials = name.split(' ').map(w => w[0]).join('')
  return (
    <div className={`w-full h-full ${bg} flex items-center justify-center`}>
      <span className="text-white font-bold text-5xl opacity-60 select-none">
        {initials}
      </span>
    </div>
  )
}

/* ─── Photo Mosaic Cell ───────────────────────────────────────────────────  */
function MosaicCell({ photo, index }: { photo: { src: string; alt: string }; index: number }) {
  const [imgError, setImgError] = useState(false)  // ← Now useState is imported
  
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ scale: 1.04, zIndex: 10 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      className="relative overflow-hidden rounded-lg cursor-pointer"
      style={{ aspectRatio: '1 / 1' }}
    >
      {!imgError ? (
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 33vw, 220px"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
          <span className="text-gray-400 text-sm text-center px-4">
            Image {index + 1}
          </span>
        </div>
      )}
      <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300" />
    </motion.div>
  )
}

/* ─── Team Member Card ─────────────────────────────────────────────────── */
function TeamCard({ member }: { member: typeof team[0] }) {
  const [imgError, setImgError] = useState(false)
  
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      className="flex flex-col items-center"
    >
      <div 
        className="relative w-full overflow-hidden rounded-2xl shadow-sm bg-gray-100"
        style={{ aspectRatio: '3 / 4', maxHeight: '420px' }}
      >
        {!imgError && member.img ? (
          <Image
            src={member.img}
            alt={member.name}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 90vw, 33vw"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={`w-full h-full ${member.fallbackBg} flex items-center justify-center`}>
            <span className="text-white font-bold text-6xl opacity-60 select-none">
              {member.name.split(' ').map(w => w[0]).join('')}
            </span>
          </div>
        )}
      </div>

      <div className="mt-4 text-center">
        <p className="font-semibold text-[#2B2B2B] text-lg leading-tight">
          {member.name}
        </p>
        <p className="text-gray-500 text-sm mt-0.5">{member.role}</p>
      </div>
    </motion.div>
  )
}

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function WhoWeArePage() {
  return (
    <main className="overflow-x-hidden bg-white text-[#2B2B2B]">

      {/* Hero Section */}
      <section className="relative bg-[#2B2B2B] pt-36 pb-28 overflow-hidden">
        <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#C0392B]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg,#C0392B 0,#C0392B 1px,transparent 0,transparent 50%)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-16 text-center">
          <Reveal>
            <span className="inline-block text-[#C0392B] text-xs font-bold tracking-[0.22em] uppercase mb-4">
              About Us
            </span>
          </Reveal>
          <Reveal>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mt-2">
              Who We Are
            </h1>
          </Reveal>
          <Reveal>
            <p className="mt-5 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              A passionate team of student leaders committed to making music
              education free and accessible for every Arizona child.
            </p>
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 56L1440 56L1440 14C1200 50 960 0 720 28C480 56 240 6 0 28L0 56Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-center">
            {/* LEFT: Photo Mosaic */}
            <Reveal variants={fadeLeft}>
              <div className="grid grid-cols-3 gap-2">
                {mosaicPhotos.map((photo, i) => (
                  <MosaicCell key={i} photo={photo} index={i} />
                ))}
              </div>
            </Reveal>

            {/* RIGHT: Story Text */}
            <Reveal variants={fadeRight}>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#2B2B2B] mb-7">
                Our Story
              </h2>

              <div className="space-y-4 text-[#2B2B2B] text-[15px] leading-[1.8]">
                <p>
                  Dione Pahilan, Santiago Paul, and Mahima Sanghera, juniors at
                  Brophy College Preparatory and Xavier College Preparatory,
                  realized the disparities in music education across Phoenix.
                  Many kids aspire to play an instrument but cannot for financial
                  reasons. In fact, the Arts Education Data Project reports that
                  over a third of Arizona K-8 students do not have access to
                  music instruction, with funding being the main issue.
                </p>
                <p>
                  Starting in mid-2023, Note by Note was created as an
                  initiative to create financially equitable conditions in music
                  education, specifically in elementary and middle schools. To do
                  this, Note by Note provides one-on-one instruction free of
                  charge.
                </p>
                <p>
                  Please consider contributing to our work by donating or
                  volunteering today!
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/donate"
                  className="inline-flex items-center gap-2 bg-[#2B2B2B] hover:bg-[#C0392B] text-white font-semibold text-sm px-8 py-3.5 rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#C0392B]/30"
                >
                  Support Us Here <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <Reveal className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2B2B2B]">
              Meet Our Team
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#2B2B2B] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">
              By The Numbers
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((s) => (
              <Reveal key={s.label} className="text-center">
                <p className="text-5xl font-extrabold text-[#C0392B] leading-none">
                  {s.number}
                </p>
                <p className="mt-2 text-white/50 text-sm font-medium uppercase tracking-wider">
                  {s.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <Reveal className="text-center mb-14">
            <span className="inline-block text-[#C0392B] text-xs font-bold tracking-[0.2em] uppercase mb-3">
              What Drives Us
            </span>
            <div className="w-12 h-[3px] bg-[#C0392B] mx-auto mb-5" />
            <h2 className="text-4xl font-bold text-[#2B2B2B]">
              Our Values
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val) => (
              <Reveal key={val.title}>
                <div className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#C0392B]/20 transition-all duration-300 text-center">
                  <div className="w-14 h-14 bg-[#C0392B]/10 border border-[#C0392B]/20 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-[#C0392B] transition-colors duration-300">
                    <val.icon className="w-6 h-6 text-[#C0392B] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-[#2B2B2B] text-xl mb-3">{val.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <Reveal className="text-center mb-14">
            <span className="inline-block text-[#C0392B] text-xs font-bold tracking-[0.2em] uppercase mb-3">
              Community Voices
            </span>
            <div className="w-12 h-[3px] bg-[#C0392B] mx-auto mb-5" />
            <h2 className="text-4xl font-bold text-[#2B2B2B]">
              What People Are Saying
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: 'The instructors are patient, inspiring, and deeply committed to every student\'s growth.',
                name: 'Priya S.',
                role: 'Parent',
              },
              {
                quote: 'I gained confidence performing on stage and improved my technique dramatically.',
                name: 'Arjun K.',
                role: 'Student',
              },
              {
                quote: 'An excellent music program with a warm and supportive learning environment.',
                name: 'Meera R.',
                role: 'Parent',
              },
            ].map((t, i) => (
              <Reveal key={i}>
                <div className="bg-[#FAF8F5] rounded-2xl p-8 border border-gray-100 flex flex-col h-full">
                  <Quote className="w-7 h-7 text-[#C0392B] mb-4 opacity-50" />
                  <p className="text-gray-600 leading-relaxed italic flex-1 text-[15px]">
                    {t.quote}
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-gray-200 pt-5">
                    <div className="w-10 h-10 rounded-full bg-[#C0392B]/15 flex items-center justify-center shrink-0">
                      <span className="text-[#C0392B] font-bold text-sm">
                        {t.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-[#2B2B2B] text-sm">{t.name}</p>
                      <p className="text-gray-400 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="mx-auto max-w-4xl px-6 lg:px-16">
          <Reveal>
            <div className="relative bg-[#C0392B] rounded-3xl px-10 py-16 text-center overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: '-100%' }}
                whileInView={{ x: '200%' }}
                transition={{ duration: 1.4, ease: 'easeInOut', delay: 0.3 }}
                viewport={{ once: true }}
              />
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Interested in Getting Involved?
              </h2>
              <p className="text-white/75 text-lg mb-8 max-w-xl mx-auto">
                Become a tutor, sign your child up, or support us with a
                donation. Every role makes a difference.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/sign-up"
                  className="inline-flex items-center gap-2 bg-white text-[#C0392B] hover:bg-[#FAF8F5] font-bold text-sm px-8 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/donate"
                  className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#C0392B] font-bold text-sm px-8 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5"
                >
                  Donate Now
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  )
}