'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/who-we-are', label: 'Who We Are' },
  { href: '/blog', label: 'Blog' },
  { href: '/sign-up', label: 'Sign-Up' },
  { href: '/media', label: 'Media' },
  { href: '/online-lessons', label: 'Online Lessons' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="bg-[#2B2B2B] sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 no-underline">
            <i className="bi bi-music-note-beamed text-[#C0392B] text-2xl"></i>
            <div className="font-poppins font-extrabold text-white leading-tight text-sm">
              NOTE BY NOTE
              <span className="block text-[#C0392B]">AZ</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-3 py-2 rounded text-sm font-medium transition-colors no-underline ${
                  pathname === href
                    ? 'text-white bg-white/10'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/donate"
              className="ml-3 bg-[#C0392B] hover:bg-[#a93226] text-white font-semibold px-5 py-2 rounded text-sm transition-colors no-underline"
            >
              Donate
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <i className={`bi ${open ? 'bi-x-lg' : 'bi-list'} text-xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#1e1e1e] px-4 pb-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-white/80 hover:text-white text-sm font-medium border-b border-white/10 no-underline"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/donate"
            onClick={() => setOpen(false)}
            className="block mt-3 bg-[#C0392B] text-white text-center font-semibold px-4 py-0.5 rounded text-sm no-underline"
          >
            Donate
          </Link>
        </div>
      )}
    </nav>
  )
}
