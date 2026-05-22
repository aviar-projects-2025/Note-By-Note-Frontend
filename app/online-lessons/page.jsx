import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FadeUp from '@/components/FadeUp'
import Link from 'next/link'

// ── Custom SVG Icons ──────────────────────────────────────────

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

// ── Feature data ──────────────────────────────────────────────

const features = [
  { Icon: VideoIcon,     title: 'Live, One-on-One Lessons',   desc: 'Real-time instruction from our dedicated tutors.' },
  { Icon: CalendarIcon,  title: 'Flexible & Accessible',      desc: 'Learn from home with a schedule that works for you.' },
  { Icon: MusicNoteIcon, title: 'All Instruments Welcome',    desc: 'Piano, strings, winds, woodwinds, and more.' },
  { Icon: PeopleIcon,    title: 'For Middle School Students', desc: 'Designed for students in grades 5–8.' },
]

export const metadata = { title: 'Online Lessons – Note By Note AZ' }

export default function OnlineLessonsPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Banner ── */}
        <div className="relative w-full h-64 sm:h-80 overflow-hidden">
          {/*
            Performance: priority image (above fold) gets loading="eager" + fetchpriority="high".
            Explicit width/height prevent layout shift (CLS).
          */}
          <img
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1400&q=80&auto=format&fit=crop&crop=top"
            alt="Student with headphones learning online"
            className="w-full h-full object-cover object-top"
            loading="eager"
            // @ts-ignore
           fetchPriority="high"
            decoding="sync"
            width={1400}
            height={320}
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 flex flex-col justify-end px-6 pb-8 sm:px-12">
            <h1 className="text-white text-3xl sm:text-4xl font-bold drop-shadow">
              <p style={{color:"white"}}>Online Lessons</p>
            </h1>
          </div>
        </div>

        {/* ── Intro / Features ── */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp>
              <div className="text-center mb-12 max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold mb-3">Music Education Anywhere</h2>
                <p className="text-gray-500">
                  Our online lessons initiative brings the power of music education to students no matter where they are.
                </p>
              </div>
            </FadeUp>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {features.map(({ Icon, title, desc }, i) => (
                <FadeUp key={i} delay={i * 80}>
                  <div className="text-center p-6">
                    <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
                      <Icon />
                    </div>
                    <h5 className="font-bold text-sm mb-2">{title}</h5>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA section ── */}
        <section className="py-16 bg-[#FAFAF8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeUp>
                {/* Performance: lazy-load below-fold image */}
                <img
                  src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=700&q=80&auto=format&fit=crop"
                  alt="Student in online video lesson"
                  className="rounded-2xl shadow-xl w-full object-cover"
                  style={{ height: 340 }}
                  loading="lazy"
                  decoding="async"
                  width={700}
                  height={340}
                />
              </FadeUp>
              <FadeUp delay={150}>
                <h3 className="text-2xl font-bold mb-4">Interested in online lessons?</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We are actively building our online lesson portal to make music education even more accessible.
                  Sign up today and we'll be in touch with next steps as the program launches.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  This initiative will offer live, one-on-one video lessons with our dedicated volunteer tutors —
                  completely free for middle school students in grades 5–8.
                </p>
                <Link
                  href="/sign-up"
                  className="inline-block bg-[#C0392B] hover:bg-[#a93226] text-white font-bold px-8 py-3 rounded text-sm no-underline transition-colors"
                >
                  <p style={{ color: 'white' }}>SIGN UP NOW</p>
                </Link>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ── Coming soon bar ── */}
        <section className="py-4 bg-[#2B2B2B]">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-white text-sm m-0">
           
              The full online portal is coming soon.{' '}
              <strong className="text-white">Stay tuned for updates!</strong>
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
