"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Music } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/who-we-are", label: "Who We Are" },
  { href: "/blog", label: "Blog" },
  { href: "/sign-up", label: "Sign Up" },
  { href: "/media-contact", label: "Media & Contact" },
  { href: "/new-initiative", label: "New Initiative" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md py-3"
            : "bg-white/95 backdrop-blur-sm py-4"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-crimson rounded-full flex items-center justify-center transition-transform group-hover:scale-105">
              <Music className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <span className="block font-heading font-bold text-charcoal text-base">
                Note By Note
              </span>
              <span className="block text-crimson text-xs font-semibold tracking-widest uppercase">
                Arizona
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? "text-crimson font-semibold"
                    : "text-charcoal hover:text-crimson"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/sign-up" className="btn-outline text-sm py-2 px-5">
              Sign Up
            </Link>
            <Link href="/donate" className="btn-primary text-sm py-2 px-5">
              Donate
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded text-charcoal hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 bottom-0 w-80 bg-white shadow-2xl flex flex-col transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-crimson rounded-full flex items-center justify-center">
                <Music className="w-4 h-4 text-white" />
              </div>
              <span className="font-heading font-bold text-charcoal">
                Note By Note AZ
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded hover:bg-gray-100"
            >
              <X className="w-5 h-5 text-charcoal" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto py-6 px-5">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    pathname === link.href
                      ? "bg-crimson/10 text-crimson font-semibold"
                      : "text-charcoal hover:bg-gray-50 hover:text-crimson"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="p-5 border-t border-gray-100 flex flex-col gap-3">
            <Link href="/sign-up" className="btn-outline text-center justify-center">
              Sign Up for Lessons
            </Link>
            <Link href="/donate" className="btn-primary text-center justify-center">
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
