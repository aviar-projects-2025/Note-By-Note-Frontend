import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FadeUp from '@/components/FadeUp'

const StudentIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" aria-hidden="true">
    <circle cx="24" cy="16" r="9" fill="#C0392B" />
    <path d="M6 42c0-9.941 8.059-18 18-18s18 8.059 18 18" stroke="#C0392B" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
  </svg>
)

const TutorIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" aria-hidden="true">
    <path d="M24 8L4 18l20 10 20-10L24 8z" fill="#C0392B" />
    <path d="M10 23v10c0 5 6.268 9 14 9s14-4 14-9V23" stroke="#C0392B" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <line x1="44" y1="18" x2="44" y2="30" stroke="#C0392B" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="44" cy="32" r="2" fill="#C0392B"/>
  </svg>
)

const AbsenceIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" aria-hidden="true">
    <rect x="4" y="10" width="40" height="34" rx="4" stroke="#C0392B" strokeWidth="3" fill="none"/>
    <line x1="4" y1="20" x2="44" y2="20" stroke="#C0392B" strokeWidth="3"/>
    <line x1="14" y1="4" x2="14" y2="14" stroke="#C0392B" strokeWidth="3" strokeLinecap="round"/>
    <line x1="34" y1="4" x2="34" y2="14" stroke="#C0392B" strokeWidth="3" strokeLinecap="round"/>
    <line x1="17" y1="30" x2="31" y2="38" stroke="#C0392B" strokeWidth="3" strokeLinecap="round"/>
    <line x1="31" y1="30" x2="17" y2="38" stroke="#C0392B" strokeWidth="3" strokeLinecap="round"/>
  </svg>
)

const LaptopIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" aria-hidden="true">
    <rect x="6" y="8" width="36" height="24" rx="3" stroke="#B8962E" strokeWidth="3" fill="none"/>
    <line x1="20" y1="14" x2="28" y2="14" stroke="#B8962E" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="2" y1="38" x2="46" y2="38" stroke="#B8962E" strokeWidth="3" strokeLinecap="round"/>
    <path d="M18 38l2-6h8l2 6" stroke="#B8962E" strokeWidth="2.5" strokeLinejoin="round" fill="none"/>
  </svg>
)

const options = [
  {
    Icon: StudentIcon,
    iconBg: 'bg-red-50',
    title: 'New Student Sign-Up',
    titleColor: 'text-[#C0392B]',
    desc: 'Students in grades 5–8 can sign up for free one-on-one music lessons.',
    btnLabel: 'FILL OUT FORM',
    href: 'https://forms.google.com',
    coming: false,
  },
  {
    Icon: TutorIcon,
    iconBg: 'bg-red-50',
    title: 'Tutor Sign-Up',
    titleColor: 'text-[#C0392B]',
    desc: 'High school students can apply to become a volunteer tutor.',
    btnLabel: 'FILL OUT FORM',
    href: 'https://forms.google.com',
    coming: false,
  },
  {
    Icon: AbsenceIcon,
    iconBg: 'bg-red-50',
    title: 'Tutor Absence Form',
    titleColor: 'text-[#C0392B]',
    desc: 'Tutors, please let us know if you will be unavailable for a lesson.',
    btnLabel: 'FILL OUT FORM',
    href: 'https://forms.google.com',
    coming: false,
  },
  {
    Icon: LaptopIcon,
    iconBg: 'bg-yellow-50',
    title: 'Online Lesson Portal (Coming Soon)',
    titleColor: 'text-[#B8962E]',
    desc: 'We are working on an online portal for scheduling and lesson management. More details coming soon!',
    btnLabel: null,
    href: null,
    coming: true,
  },
]

export const metadata = { title: 'Sign Up – Note By Note AZ' }

export default function SignUpPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Banner ── */}
        <div className="relative w-full h-64 sm:h-80 overflow-hidden">
          {/*
            Performance: hero image is above the fold — eager + fetchpriority high.
            Explicit width/height eliminates layout shift (CLS).
          */}
          <img
            src="https://images.unsplash.com/photo-1514119412350-e174d90d280e?w=1400&q=80&auto=format&fit=crop"
            alt="Student playing a musical instrument"
            className="w-full h-full object-cover object-center"
            loading="eager"
            // @ts-ignore
            fetchPriority="high"
            decoding="sync"
            width={1400}
            height={320}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col justify-end px-6 pb-8 sm:px-12">
            <h1 className="text-white text-3xl sm:text-4xl font-bold drop-shadow">
              <p style={{color:"white"}}>Sign Up</p>
            </h1>
          </div>
        </div>

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <FadeUp>
              <p className="text-center text-gray-600 mb-8">Choose an option below to get started.</p>
            </FadeUp>
            <div className="space-y-4">
              {options.map((opt, i) => (
                <FadeUp key={i} delay={i * 80}>
                  <div
                    className={`flex gap-5 items-start p-7 rounded-2xl border transition-all hover:shadow-lg ${
                      opt.coming
                        ? 'bg-yellow-50 border-yellow-200 hover:border-yellow-300'
                        : 'bg-white border-gray-200 hover:border-[#C0392B]'
                    }`}
                  >
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${opt.iconBg}`}>
                      <opt.Icon />
                    </div>
                    <div className="flex-1">
                      <h5 className={`font-bold text-base mb-1.5 ${opt.titleColor}`}>{opt.title}</h5>
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">{opt.desc}</p>
                      {opt.btnLabel ? (
                        <a
                          href={opt.href!}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-block bg-[#C0392B] hover:bg-[#a93226] text-white font-bold text-xs px-5 py-2 rounded no-underline transition-colors"
                        >
                          <p style={{ color: 'white' }}>{opt.btnLabel}</p>
                        </a>
                      ) : (
                        <span className="text-[#B8962E] text-xs font-semibold">
                          <i className="bi bi-clock mr-1"></i>Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
