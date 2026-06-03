import Link from 'next/link'
import Image from 'next/image'
import logo1 from '../components/assets/logo.jpg'

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
    <footer className="bg-[#171717] text-white/80 pt-10 pb-6 md:pt-14 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 xl:gap-8">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-10 mb-3">
              {/* <i className="bi bi-music-note-beamed text-[#C0392B] text-3xl sm:text-2xl"></i> */}
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#C0392B]/10 text-[#C0392B] transition duration-300 hover:bg-[#C0392B]/20">
                {/* <Music2 className="h-5 w-5" /> */}
                <Image src={logo1} alt="Logo"
                  style={{ minWidth: "6rem", height: "4rem" }} />
              </div>
              <div className="font-poppins font-extrabold text-white text-2xl sm:text-lg leading-tight">
                NOTE BY NOTE
                <span className="block text-[#B10000]">AZ</span>
              </div>
            </div>
            <p className="text-base sm:text-sm text-white/60 leading-relaxed mb-4 mt-5 max-w-xs mx-auto sm:mx-0">
              Building brighter futures through music education for middle school students across Arizona.
            </p>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              <a
                href="https://instagram.com/notebynoteaz"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#E1306C] text-white text-sm sm:text-xs font-semibold px-3 py-2.5 md:py-2 rounded-lg no-underline hover:bg-[#c1255a] transition-colors active:scale-95"
              >
                <i className="bi bi-instagram text-base sm:text-sm mt-1"></i>
                <span className="hidden xs:inline">@notebynoteaz</span>
                <span className="xs:hidden">Instagram</span>
              </a>
              <a
                href="https://gofundme.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#00b964] text-white text-sm sm:text-xs font-semibold px-4 py-2.5 md:py-2 rounded-lg no-underline hover:bg-[#009e54] transition-colors active:scale-95"
              >
                <i className="bi bi-heart-fill text-base sm:text-sm mt-1"></i>
                <span className="hidden xs:inline">GoFundMe</span>
                <span className="xs:hidden">Donate</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h6 className="text-white font-bold text-base sm:text-sm mb-4 tracking-wide uppercase"
            style={{ color: 'white' }}>Quick Links</h6>
            <div className="flex flex-col items-center sm:items-start sm:pl-4 md:pl-6">
              {quickLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="block text-white/70 hover:text-white text-base sm:text-sm py-2 sm:py-1.5 mb-1 no-underline transition-colors active:text-white"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="text-center sm:text-left">
            <h6 className="text-white font-bold text-base sm:text-sm mb-4 tracking-wide uppercase"
            style={{ color: 'white' }}>Connect With Us</h6>
            <div className="flex flex-col items-center sm:items-start">
              <a
                href="mailto:notebynoteaz@gmail.com"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white text-base sm:text-sm py-2.5 sm:py-2 mb-2 no-underline transition-colors active:text-white"
              >
                <i className="bi bi-envelope text-lg sm:text-base"></i>
                <span className="break-all">notebynoteaz@gmail.com</span>
              </a>
              <a
                href="https://instagram.com/notebynoteaz"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white text-base sm:text-sm py-2.5 sm:py-2 mb-2 no-underline transition-colors active:text-white"
              >
                <i className="bi bi-instagram text-lg sm:text-base"></i>
                @notebynoteaz
              </a>
              <a
                href="https://gofundme.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white text-base sm:text-sm py-2.5 sm:py-2 mb-2 no-underline transition-colors active:text-white"
              >
                <i className="bi bi-heart text-lg sm:text-base"></i>
                GoFundMe Campaign
              </a>
              <a
                href="/privacy-policy"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white text-base sm:text-sm py-2.5 sm:py-2 mb-2 no-underline transition-colors active:text-white"
              >
                <i className="bi bi-shield-check text-lg sm:text-base"></i>
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white text-base sm:text-sm py-2.5 sm:py-2 mb-2 no-underline transition-colors active:text-white"
              >
                <i className="bi bi-file-text text-lg sm:text-base"></i>
                Terms of Service
              </a>
            </div>
          </div>

          {/* Org Info */}
          <div className="text-center sm:text-left">
            <h6 className="text-white font-bold text-base sm:text-sm mb-4 tracking-wide uppercase"
            style={{ color: 'white' }}>Organization</h6>
            <p className="text-base sm:text-sm text-white/60 leading-relaxed mb-3 max-w-xs mx-auto sm:mx-0">
              Note By Note AZ is a 501(c)(3) nonprofit organization. All donations are tax-deductible to the fullest extent allowed by law.
            </p>
            <p className="text-base sm:text-sm text-white/60">
              Federal Tax ID:{' '}
              <span className="text-[#C0392B] font-bold">93-4567891</span>
            </p>
          </div>
        </div>

        <hr className="border-white/10 my-6 md:my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
          <p className="text-sm sm:text-xs text-white/40">© 2024 Note By Note AZ. All rights reserved.</p>
          <p className="text-sm sm:text-xs text-white/40">Free music education for grades 5–8.</p>
        </div>
      </div>
    </footer>
  )
}
