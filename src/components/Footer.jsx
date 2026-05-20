import Link from 'next/link'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/who-we-are', label: 'Who We Are' },
  { href: '/blog', label: 'Blog' },
  { href: '/sign-up', label: 'Sign-Up' },
  { href: '/media', label: 'Media' },
  { href: '/online-lessons', label: 'Online Lessons' },
  { href: '/donate', label: 'Donate' },
]

export default function Footer() {
  return (
    <footer className="bg-[#2B2B2B] text-white/80 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <i className="bi bi-music-note-beamed text-[#C0392B] text-2xl"></i>
              <div className="font-poppins font-extrabold text-white text-lg leading-tight">
                NOTE BY NOTE
                <span className="block text-[#C0392B]">AZ</span>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              Building brighter futures through music education for middle school students across Arizona.
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://instagram.com/notebynoteaz"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 bg-[#E1306C] text-white text-xs font-semibold px-3 py-2 rounded no-underline hover:bg-[#c1255a] transition-colors"
              >
                <i className="bi bi-instagram"></i> @notebynoteaz
              </a>
              <a
                href="https://gofundme.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 bg-[#00b964] text-white text-xs font-semibold px-3 py-2 rounded no-underline hover:bg-[#009e54] transition-colors"
              >
                <i className="bi bi-heart-fill"></i> GoFundMe
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="text-white font-bold text-sm mb-4 tracking-wide uppercase">Quick Links</h6>
            {quickLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block text-white/70 hover:text-white text-sm mb-2 no-underline transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Connect */}
          <div>
            <h6 className="text-white font-bold text-sm mb-4 tracking-wide uppercase">Connect With Us</h6>
            <a href="mailto:notebynoteaz@gmail.com" className="flex items-center gap-2 text-white/70 hover:text-white text-sm mb-3 no-underline transition-colors">
              <i className="bi bi-envelope"></i> notebynoteaz@gmail.com
            </a>
            <a href="https://instagram.com/notebynoteaz" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white/70 hover:text-white text-sm mb-3 no-underline transition-colors">
              <i className="bi bi-instagram"></i> @notebynoteaz
            </a>
            <a href="https://gofundme.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white/70 hover:text-white text-sm mb-3 no-underline transition-colors">
              <i className="bi bi-heart"></i> GoFundMe Campaign
            </a>
          </div>

          {/* Org Info */}
          <div>
            <h6 className="text-white font-bold text-sm mb-4 tracking-wide uppercase">Organization</h6>
            <p className="text-sm text-white/60 leading-relaxed mb-3">
              Note By Note AZ is a 501(c)(3) nonprofit organization. All donations are tax-deductible to the fullest extent allowed by law.
            </p>
            <p className="text-sm text-white/60">
              Federal Tax ID:{' '}
              <span className="text-[#C0392B] font-bold">93-4567891</span>
            </p>
          </div>
        </div>

        <hr className="border-white/10 my-8" />
        <div className="flex flex-wrap justify-between items-center gap-2">
          <p className="text-xs text-white/40">© 2024 Note By Note AZ. All rights reserved.</p>
          <p className="text-xs text-white/40">Free music education for grades 5–8.</p>
        </div>
      </div>
    </footer>
  )
}
