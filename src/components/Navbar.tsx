'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Music2 } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/who-we-are', label: 'Who We Are' },
  { href: '/blog', label: 'Blog' },
  { href: '/sign-up', label: 'Sign Up' },
  { href: '/media', label: 'Media' },
  { href: '/online-lessons', label: 'Online Lessons' },
  {href:'/donate', label:'Donation'}
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1F1F1F]/95 backdrop-blur-xl">
      <nav className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-6 lg:px-8">
        
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-3 no-underline"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#C0392B]/10 text-[#C0392B] transition duration-300 hover:bg-[#C0392B]/20">
            <Music2 className="h-5 w-5" />
          </div>

          <div className="leading-tight">
            <p className="text-sm font-black tracking-[0.12em] text-white">
              NOTE BY NOTE
            </p>

            <p className="mt-0.5 text-[11px] font-bold tracking-[0.28em] text-[#C0392B]">
              ARIZONA
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
  <div className="hidden items-center gap-3 lg:flex">
  <div className="flex items-center gap-1">
    {navLinks.map(({ href, label }) => {
      const active = pathname === href;

      return (
        <Link
          key={href}
          href={href}
          className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 no-underline ${
            active
              ? 'bg-white/10 text-white'  // Increased background opacity for better contrast
              : 'text-white hover:bg-white/10 hover:text-white'  // Changed from gray-300 to white for visibility
          }`}
        >
          <p style={{color:'white'}}>  {label}</p>
         
        </Link>
      );
    })}
  </div>

  {/* DONATE BUTTON */}
  <Link
    href="/donate"
    className="ml-3 rounded-xl bg-[#C0392B] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#C0392B]/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#a93226] hover:shadow-[#C0392B]/40"
  >
   <p style={{color:"wh"}}>Donate</p> 
  </Link>
</div>
        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-xl text-white transition hover:bg-white/5 lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden border-t border-white/5 bg-[#181818] transition-all duration-300 lg:hidden ${
          open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="space-y-1 px-6 py-5">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href

            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-3 text-sm font-medium transition-all no-underline ${
                  active
                    ? 'bg-white/10 text-white'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
               <p style={{color:"white"}}>{label}</p> 
              </Link>
            )
          })}

          {/* MOBILE DONATE */}
          <div className="pt-3">
            <Link
              href="/donate"
              onClick={() => setOpen(false)}
              className="block rounded-xl bg-[#C0392B] px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-[#a93226]"
            >
           Donate Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}