import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import FadeUp from '@/components/FadeUp'
import Link from 'next/link'

const features = [
  { icon: 'bi-camera-video-fill', title: 'Live, One-on-One Lessons', desc: 'Real-time instruction from our dedicated tutors.' },
  { icon: 'bi-calendar-check-fill', title: 'Flexible & Accessible', desc: 'Learn from home with a schedule that works for you.' },
  { icon: 'bi-music-note-list', title: 'All Instruments Welcome', desc: 'Piano, strings, winds, woodwinds, and more.' },
  { icon: 'bi-people-fill', title: 'For Middle School Students', desc: 'Designed for students in grades 5–8.' },
]

export const metadata = { title: 'Online Lessons – Note By Note AZ' }

export default function OnlineLessonsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero title="Online Lessons" variant="initiative" />

        {/* Intro */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp>
              <div className="text-center mb-12 max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold mb-3">Music Education Anywhere</h2>
                <p className="text-gray-500">Our online lessons initiative brings the power of music education to students no matter where they are.</p>
              </div>
            </FadeUp>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {features.map((f, i) => (
                <FadeUp key={i} delay={i * 80}>
                  <div className="text-center p-6">
                    <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
                      <i className={`bi ${f.icon} text-[#C0392B] text-2xl`}></i>
                    </div>
                    <h5 className="font-bold text-sm mb-2">{f.title}</h5>
                    <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-16 bg-[#FAFAF8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeUp>
                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=700&q=80"
                  alt="Online lessons"
                  className="rounded-2xl shadow-xl w-full object-cover"
                  style={{ height: 340 }}
                />
              </FadeUp>
              <FadeUp delay={150}>
                <h3 className="text-2xl font-bold mb-4">Interested in online lessons?</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We are actively building our online lesson portal to make music education even more accessible. Sign up today and we'll be in touch with next steps as the program launches.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  This initiative will offer live, one-on-one video lessons with our dedicated volunteer tutors — completely free for middle school students in grades 5–8.
                </p>
                <Link
                  href="/sign-up"
                  className="inline-block bg-[#C0392B] hover:bg-[#a93226] text-white font-bold px-8 py-3 rounded text-sm no-underline transition-colors"
                >
                  SIGN UP NOW
                </Link>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Coming soon bar */}
        <section className="py-4 bg-[#2B2B2B]">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-white text-sm m-0">
              <i className="bi bi-clock mr-2 text-[#C0392B]"></i>
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
