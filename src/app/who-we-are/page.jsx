import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import FadeUp from '@/components/FadeUp'
import Link from 'next/link'

const leaders = [
  {
    name: 'Ava Chen', role: 'President',
    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80',
    bio: 'Ava is a high school junior who is passionate about music, mentoring, and community service.',
  },
  {
    name: 'Noah Patel', role: 'Vice President',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    bio: 'Noah is a dedicated student who cares deeply about music education and helping students grow.',
  },
]

const stats = [
  { number: '250+', label: 'Students Served' },
  { number: '40+', label: 'Volunteer Tutors' },
  { number: '10+', label: 'Instruments' },
  { number: '20+', label: 'Schools Reached' },
]

export const metadata = { title: 'Who We Are – Note By Note AZ' }

export default function WhoWeAre() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero title="Who We Are" variant="who" />

        {/* Story */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeUp>
                <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Note By Note AZ was founded by students who believe every child deserves the chance to experience the joy of making music. We connect dedicated student tutors with middle schoolers for free, one-on-one instruction.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  What started as a small idea among passionate student musicians has grown into a vibrant nonprofit serving hundreds of students across Arizona. We believe music builds confidence, discipline, and a lifelong love of learning.
                </p>
              </FadeUp>
              <FadeUp delay={150}>
                <img
                  src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=700&q=80"
                  alt="Students playing music"
                  className="rounded-2xl shadow-xl w-full object-cover"
                  style={{ height: 340 }}
                />
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-16 bg-[#FAFAF8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp>
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-2">Our Leadership</h2>
                <p className="text-gray-500">Meet the student leaders driving our mission forward.</p>
              </div>
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {leaders.map((l, i) => (
                <FadeUp key={i} delay={i * 120}>
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">
                    <img src={l.img} alt={l.name} className="w-full object-cover" style={{ height: 240 }} />
                    <div className="p-6">
                      <span className="bg-[#C0392B] text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">{l.role}</span>
                      <h5 className="font-bold text-lg mb-2">{l.name}</h5>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">{l.bio}</p>
                      <a href="#" className="text-[#E1306C] text-sm font-semibold no-underline hover:opacity-80">
                        <i className="bi bi-instagram mr-1"></i>Instagram
                      </a>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-14 bg-[#2B2B2B]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp>
              <h2 className="text-3xl font-bold text-white text-center mb-10">By The Numbers</h2>
            </FadeUp>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((s, i) => (
                <FadeUp key={i} delay={i * 80}>
                  <div className="text-4xl font-extrabold text-[#C0392B] font-poppins mb-1">{s.number}</div>
                  <div className="text-sm text-white/50">{s.label}</div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14">
          <div className="max-w-4xl mx-auto px-4">
            <FadeUp>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-red-50 border border-red-100">
                <div className="flex items-center gap-4">
                  <i className="bi bi-music-note-beamed text-[#C0392B] text-4xl"></i>
                  <div>
                    <h5 className="font-bold text-lg mb-1">Interested in getting involved?</h5>
                    <p className="text-gray-600 text-sm m-0">Become a tutor or sign up to learn with us!</p>
                  </div>
                </div>
                <Link href="/sign-up" className="bg-[#C0392B] hover:bg-[#a93226] text-white font-bold px-7 py-3 rounded text-sm no-underline transition-colors whitespace-nowrap">
                  GET STARTED
                </Link>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
