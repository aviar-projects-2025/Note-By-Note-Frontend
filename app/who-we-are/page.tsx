'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion, useInView } from 'framer-motion'
import {
  Heart,
  Users,
  Award,
  ArrowRight,
} from 'lucide-react'

/* ─── Images ───────────────────────────────────────── */
import founder1 from './assets/founder1.png'
import founder2 from './assets/founder2.png'
import founder3 from './assets/founder3.png'

import team from './assets/team.png'
import banner from './assets/banner.png'

/* ─── Animation Helpers ───────────────────────────── */
const ease = [0.22, 1, 0.36, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 44 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
}

const fadeLeft = {
  hidden: { opacity: 0, x: -44 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease },
  },
}

const fadeRight = {
  hidden: { opacity: 0, x: 44 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease },
  },
}

/* ─── Reveal ───────────────────────────────────────── */
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

/* ─── Team Image ───────────────────────────────────── */
const teamImages = [team]

/* ─── Team Data ────────────────────────────────────── */
const teamMembers = [
  { name: 'Dione Pahilan', role: 'Co-Founder', img: founder1, fallbackBg: 'bg-[#b8c9c6]' },
  { name: 'Santiago Paul', role: 'Co-Founder', img: founder2, fallbackBg: 'bg-[#4a7fa8]' },
  { name: 'Mahima Sanghera', role: 'Co-Founder', img: founder3, fallbackBg: 'bg-[#c8b8a2]' },
]

/* ─── Stats ───────────────────────────────────────── */
const stats = [
  { number: '250+', label: 'Students Served' },
  { number: '40+', label: 'Volunteer Tutors' },
  { number: '10+', label: 'Instruments' },
  { number: '20+', label: 'Schools Reached' },
]

/* ─── Values ──────────────────────────────────────── */
const values = [
  { icon: Heart, title: 'Compassion', desc: 'We serve with empathy.' },
  { icon: Users, title: 'Community', desc: 'We build relationships.' },
  { icon: Award, title: 'Excellence', desc: 'We maintain high standards.' },
]

/* ─── Team Image Section ─────────────────────────── */
function TeamImagesSection() {
  return (
  
    <motion.div
      variants={fadeLeft}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex justify-center w-full"
    >
      {teamImages.map((img, index) => (
        <motion.div
          key={index}
          variants={fadeUp}
          whileHover={{
            scale: 1.05,
            rotate: index % 2 === 0 ? 2 : -2,
          }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden rounded-2xl shadow-2xl group w-full max-w-[500px] h-[350px] md:h-[420px] mx-auto"
        >
          <Image
            src={img}
            alt={`Team Image ${index + 1}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <motion.div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
        </motion.div>
      ))}
    </motion.div>
  )
}

/* ─── Team Card ───────────────────────────────────── */
function TeamCard({ member }: { member: typeof teamMembers[0] }) {
  const [imgError, setImgError] = useState(false)

  return (
    
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8 }}
      className="flex flex-col items-center"
    >
      <div className="relative w-full overflow-hidden rounded-2xl shadow-sm bg-gray-100 aspect-[3/4]">
        {!imgError ? (
          <Image
            src={member.img}
            alt={member.name}
            fill
            className="object-cover object-top"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={`w-full h-full ${member.fallbackBg} flex items-center justify-center`}>
            <span className="text-white font-bold text-5xl opacity-60">
              {member.name.split(' ').map(w => w[0]).join('')}
            </span>
          </div>
        )}
      </div>

      <p className="mt-4 font-semibold">{member.name}</p>
      <p className="text-gray-500 text-sm">{member.role}</p>
    </motion.div>
  )
}

/* ─── MAIN PAGE ───────────────────────────────────── */
export default function WhoWeArePage() {
  return (
    <main className="bg-white text-[#2B2B2B]">
  <Navbar/>
      {/* HERO WITH BANNER */}
      <section className="relative h-[90vh] w-full overflow-hidden">

        <Image
          src={banner}
          alt="banner"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex items-center justify-center h-full text-center px-6">

          <div>

            <Reveal>
              <p className="text-[#C0392B] tracking-[0.3em] text-sm uppercase">
                {/* About Us */}
              </p>
            </Reveal>

            <Reveal>
              <h1 className="text-white text-5xl md:text-7xl font-bold mt-4">
                Who We Are
              </h1>
            </Reveal>

            <Reveal>
              <p className="text-gray-200 mt-6 max-w-2xl mx-auto text-lg">
                Making music education free, accessible, and inspiring for every child.
              </p>
            </Reveal>

            <Reveal>
              <div className="mt-8 flex gap-4 justify-center">
                <Link
                  href="/donate"
                  className="bg-[#C0392B] px-6 py-3 rounded-full text-white font-semibold"
                >
                  Support Us
                </Link>

                <Link
                  href="/team"
                  className="border border-white px-6 py-3 rounded-full text-white"
                >
                  Meet Team
                </Link>
              </div>
            </Reveal>

          </div>

        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          <Reveal variants={fadeLeft}>
            <TeamImagesSection />
          </Reveal>

          <Reveal variants={fadeRight}>
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
            Dione Pahilan, Santiago Paul, and Mahima Sanghera, juniors at Brophy College Preparatory and Xavier College Preparatory, realized the disparities in music education across Phoenix. Many kids aspire to play an instrument but cannot for financial reasons. In fact, the Arts Education Data Project reports that over a third of Arizona K-8 students do not have access to music instruction, with funding being the main issue.

Starting in mid-2023, Note by Note was created as an initiative to create financially equitable conditions in music education, specifically in elementary and middle schools. To do this, Note by Note provides one-on-one instruction free of charge.

Please consider contributing to our work by donating or volunteering today!
            </p>

            <Link
              href="/donate"
              className="inline-flex mt-6 items-center gap-2 bg-[#2B2B2B] text-white px-6 py-3 rounded-md"
            >
             <p style={{color:"white"}}>Support Us <ArrowRight size={16} /></p> 
            </Link>
          </Reveal>

        </div>
      </section>

      {/* TEAM */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center mb-10">
          <h2 className="text-4xl font-bold">Meet Our Team</h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {teamMembers.map(m => (
            <TeamCard key={m.name} member={m} />
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#2B2B2B] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(s => (
            <div key={s.label}>
              <p className="text-4xl font-bold text-[#C0392B]">{s.number}</p>
              <p className="text-sm text-gray-300 mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
<Footer/>
    </main>
  )
}