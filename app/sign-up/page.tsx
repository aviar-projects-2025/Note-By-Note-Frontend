import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import FadeUp from '@/components/FadeUp'

const options = [
  {
    icon: 'bi-person-fill', iconBg: 'bg-red-50', iconColor: 'text-[#C0392B]',
    title: 'New Student Sign-Up', titleColor: 'text-[#C0392B]',
    desc: 'Students in grades 5–8 can sign up for free one-on-one music lessons.',
    btnLabel: 'FILL OUT FORM', href: 'https://forms.google.com', coming: false,
  },
  {
    icon: 'bi-mortarboard-fill', iconBg: 'bg-red-50', iconColor: 'text-[#C0392B]',
    title: 'Tutor Sign-Up', titleColor: 'text-[#C0392B]',
    desc: 'High school students can apply to become a volunteer tutor.',
    btnLabel: 'FILL OUT FORM', href: 'https://forms.google.com', coming: false,
  },
  {
    icon: 'bi-calendar-x-fill', iconBg: 'bg-red-50', iconColor: 'text-[#C0392B]',
    title: 'Tutor Absence Form', titleColor: 'text-[#C0392B]',
    desc: 'Tutors, please let us know if you will be unavailable for a lesson.',
    btnLabel: 'FILL OUT FORM', href: 'https://forms.google.com', coming: false,
  },
  {
    icon: 'bi-laptop-fill', iconBg: 'bg-yellow-50', iconColor: 'text-[#B8962E]',
    title: 'Online Lesson Portal (Coming Soon)', titleColor: 'text-[#B8962E]',
    desc: 'We are working on an online portal for scheduling and lesson management. More details coming soon!',
    btnLabel: null, href: null, coming: true,
  },
]

export const metadata = { title: 'Sign Up – Note By Note AZ' }

export default function SignUpPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero title="Sign Up" variant="signup" />

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <FadeUp>
              <p className="text-center text-gray-600 mb-8">Choose an option below to get started.</p>
            </FadeUp>
            <div className="space-y-4">
              {options.map((opt, i) => (
                <FadeUp key={i} delay={i * 80}>
                  <div className={`flex gap-5 items-start p-7 rounded-2xl border transition-all hover:shadow-lg ${opt.coming ? 'bg-yellow-50 border-yellow-200 hover:border-yellow-300' : 'bg-white border-gray-200 hover:border-[#C0392B]'}`}>
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${opt.iconBg}`}>
                      <i className={`bi ${opt.icon} text-2xl ${opt.iconColor}`}></i>
                    </div>
                    <div className="flex-1">
                      <h5 className={`font-bold text-base mb-1.5 ${opt.titleColor}`}>{opt.title}</h5>
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">{opt.desc}</p>
                      {opt.btnLabel ? (
                        <a
                          href={opt.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-block bg-[#C0392B] hover:bg-[#a93226] text-white font-bold text-xs px-5 py-2 rounded no-underline transition-colors"
                        >
                     <p style={{color:"white"}}>{opt.btnLabel}</p>
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
