'use client'

import { useState } from 'react'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'

const programs = [
  {
    icon: 'bi-people-fill',
    title: 'One-on-One Instruction',
    desc: 'Personalized lessons tailored to each student’s goals and pace.',
  },
  {
    icon: 'bi-music-note-list',
    title: 'All Instruments',
    desc: 'We teach a wide range of instruments and musical skills.',
  },
  {
    icon: 'bi-mortarboard-fill',
    title: 'Middle School Focused',
    desc: 'Empowering students in grades 5–8 through music.',
  },
  {
    icon: 'bi-heart-fill',
    title: '100% Free',
    desc: 'No cost to students or families — ever.',
  },
]

const stats = [
  { number: '250+', label: 'Students Served' },
  { number: '40+', label: 'Volunteer Tutors' },
  { number: '10+', label: 'Instruments' },
  { number: '20+', label: 'Schools Reached' },
]

const testimonials = [
  {
    quote:
      'Note By Note has made such a difference in my daughter’s confidence and love for music.',
    author: 'Parent of NBN Student',
  },
  {
    quote:
      'Volunteering as a tutor has been one of the most rewarding experiences of my high school career.',
    author: 'NBN Volunteer Tutor',
  },
  {
    quote:
      'The program gave my son access to music education he never would have had otherwise.',
    author: 'Parent of NBN Student',
  },
]

export default function HomeClient() {
  const [tIdx, setTIdx] = useState(0)

  const prev = () =>
    setTIdx((i) => (i - 1 + testimonials.length) % testimonials.length)

  const next = () =>
    setTIdx((i) => (i + 1) % testimonials.length)

  return (
    <main className="overflow-hidden bg-[#FAFAF8] text-[#1E1E1E]">
      {/* HERO */}
      <section
        className="relative"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.68),rgba(0,0,0,0.68)), url(https://images.unsplash.com/photo-1619983081563-430f63602796?w=1400&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto flex min-h-[88vh] max-w-7xl items-center px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <FadeUp>
              <span className="mb-6 inline-flex rounded-full bg-[#C0392B]/20 px-4 py-2 text-sm font-semibold tracking-wide text-[#F8C9C4]">
                Inspiring Young Musicians
              </span>
            </FadeUp>

            <FadeUp delay={100}>
              <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
                Building brighter futures through music education.
              </h1>
            </FadeUp>

            <FadeUp delay={200}>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
                We provide free, one-on-one music instruction to
                middle school students across Arizona.
              </p>
            </FadeUp>

            <FadeUp delay={300}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/sign-up"
                  className="rounded-xl bg-[#C0392B] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#a93226] hover:shadow-2xl"
                >
                  Sign Up Today
                </Link>

                <Link
                  href="/who-we-are"
                  className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm transition hover:bg-white hover:text-black"
                >
                  Support Our Mission
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-4xl font-bold md:text-5xl">
                Our Program
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                We pair dedicated tutors with students to inspire
                growth, confidence, and a lifelong love of music.
              </p>
            </div>
          </FadeUp>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((p, i) => (
              <FadeUp key={i} delay={i * 100}>
                <div className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 transition group-hover:bg-[#C0392B]">
                    <i
                      className={`bi ${p.icon} text-2xl text-[#C0392B] group-hover:text-white`}
                    ></i>
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {p.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {p.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s, i) => (
              <FadeUp key={i} delay={i * 80}>
                <div className="rounded-3xl bg-[#FAFAF8] p-10 text-center">
                  <div className="text-5xl font-extrabold text-[#C0392B]">
                    {s.number}
                  </div>

                  <div className="mt-3 text-sm font-medium uppercase tracking-wide text-gray-500">
                    {s.label}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#1F1F1F] py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <FadeUp>
            <h2 className="text-4xl font-bold md:text-5xl">
              Testimonials
            </h2>

            <p className="mt-5 text-lg text-white/60">
              What families and tutors say about our program.
            </p>
          </FadeUp>

          <div className="mt-16 rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur">
            <p className="text-2xl leading-relaxed text-white/90 md:text-3xl">
              “{testimonials[tIdx].quote}”
            </p>

            <p className="mt-8 text-sm uppercase tracking-[0.2em] text-[#F4B6AE]">
              {testimonials[tIdx].author}
            </p>

            <div className="mt-10 flex justify-center gap-4">
              <button
                onClick={prev}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition hover:bg-white hover:text-black"
              >
                <i className="bi bi-chevron-left"></i>
              </button>

              <button
                onClick={next}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition hover:bg-white hover:text-black"
              >
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SYLLABUS + TAX */}
      <section className="bg-[#F3EFE7] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* syllabus */}
            <div className="rounded-[32px] bg-white p-10 shadow-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-50">
                <i className="bi bi-file-earmark-text-fill text-2xl text-[#B8962E]"></i>
              </div>

              <h3 className="mt-6 text-3xl font-bold">
                Student Syllabus
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Download our syllabus to explore lesson structure,
                curriculum expectations, and student guidelines.
              </p>

              <a
                href="#"
                className="mt-8 inline-flex rounded-xl bg-[#2B2B2B] px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
              >
                View Syllabus
              </a>
            </div>

            {/* tax */}
            <div className="rounded-[32px] bg-[#C0392B] p-10 text-white shadow-sm">
              <h3 className="text-3xl font-bold">
                501(c)(3) Nonprofit
              </h3>

              <p className="mt-5 leading-7 text-white/80">
                All donations are tax-deductible to the fullest extent
                allowed by law.
              </p>

              <div className="mt-10 rounded-2xl bg-white/10 p-6 backdrop-blur">
                <p className="text-sm uppercase tracking-widest text-white/70">
                  Federal Tax ID
                </p>

                <p className="mt-2 text-4xl font-extrabold tracking-wider">
                  93-4567891
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#111111] py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <FadeUp>
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Ready to make a difference?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Join our mission by signing up as a student,
              volunteering as a tutor, or supporting through a donation.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/sign-up"
                className="rounded-xl bg-[#C0392B] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#a93226]"
              >
                Sign Up
              </Link>

              <Link
                href="/donate"
                className="rounded-xl border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-black"
              >
                Donate
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}