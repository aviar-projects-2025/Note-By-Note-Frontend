import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import FadeUp from '@/components/FadeUp'

const photos = [
  'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&q=80',
  'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=500&q=80',
  'https://images.unsplash.com/photo-1619983081563-430f63602796?w=500&q=80',
  'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=500&q=80',
  'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=500&q=80',
  'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=500&q=80',
]

const connects = [
  { icon: 'bi-instagram', color: '#E1306C', bg: 'bg-pink-50', title: 'Instagram', handle: '@notebynoteaz', desc: 'Follow us for updates and behind-the-scenes moments!', btnLabel: 'VIEW INSTAGRAM', href: 'https://instagram.com/notebynoteaz', btnColor: 'bg-[#E1306C] hover:bg-[#c1255a]' },
  { icon: 'bi-heart-fill', color: '#00b964', bg: 'bg-green-50', title: 'GoFundMe', handle: 'GoFundMe', desc: 'Support our mission and help us reach more students.', btnLabel: 'VIEW CAMPAIGN', href: 'https://gofundme.com', btnColor: 'bg-[#00b964] hover:bg-[#009e54]' },
  { icon: 'bi-envelope-fill', color: '#C0392B', bg: 'bg-red-50', title: 'Contact Us', handle: 'notebynoteaz@gmail.com', desc: "We'd love to hear from you!", btnLabel: 'EMAIL US', href: 'mailto:notebynoteaz@gmail.com', btnColor: 'bg-[#C0392B] hover:bg-[#a93226]' },
]

export const metadata = { title: 'Media – Note By Note AZ' }

export default function MediaPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero title="Media" variant="media" />

        {/* Photos Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp>
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-2">Photos &amp; Videos</h2>
                <p className="text-gray-500">Check out photos and videos from our classes, events, and recitals.</p>
              </div>
            </FadeUp>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {photos.map((src, i) => (
                <FadeUp key={i} delay={i * 60}>
                  <div className="overflow-hidden rounded-xl group cursor-pointer">
                    <img
                      src={src}
                      alt={`Media ${i + 1}`}
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      style={{ height: 190 }}
                    />
                  </div>
                </FadeUp>
              ))}
            </div>
            <FadeUp>
              <div className="text-center mt-10">
                <a
                  href="https://drive.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[red]  hover:bg-[#2B2B2B] hover:text-white text-[#2B2B2B] font-bold px-7 py-3 rounded-lg text-sm no-underline transition-all"
                >
                  <i className="bi bi-google text-[#4285F4]"></i>
                 <p style={{color:"white"}}> VIEW MORE IN GOOGLE DRIVE</p>
                </a>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* Connect */}
        <section className="py-16 bg-[#FAFAF8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp>
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-2">Connect With Us</h2>
                <p className="text-gray-500">Stay connected with Note By Note AZ across platforms.</p>
              </div>
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {connects.map((c, i) => (
                <FadeUp key={i} delay={i * 100}>
                  <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm hover:shadow-lg transition-shadow h-full flex flex-col">
                    <div className={`w-16 h-16 rounded-full ${c.bg} flex items-center justify-center mx-auto mb-4`}>
                      <i className={`bi ${c.icon} text-3xl`} style={{ color: c.color }}></i>
                    </div>
                    <h5 className="font-bold text-lg mb-1">{c.title}</h5>
                    <p className="text-sm font-semibold text-gray-400 mb-2">{c.handle}</p>
                    <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">{c.desc}</p>
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-block ${c.btnColor} text-white font-bold text-xs px-5 py-2.5 rounded no-underline transition-colors`}
                    >
                      {c.btnLabel}
                    </a>
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
