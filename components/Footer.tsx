import Link from "next/link";
import { Music, Mail, Heart, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-crimson rounded-full flex items-center justify-center">
                <Music className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="block font-heading font-bold text-white text-base">
                  Note By Note
                </span>
                <span className="block text-crimson text-xs font-semibold tracking-widest uppercase">
                  Arizona
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              A student-run nonprofit providing free one-on-one music instruction to middle school students across Arizona.
            </p>
            <p className="text-gray-500 text-xs">
              Federal Tax ID: <span className="text-gray-300 font-semibold">XX-XXXXXXX</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/who-we-are", label: "Who We Are" },
                { href: "/blog", label: "Blog" },
                { href: "/new-initiative", label: "New Initiative" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Get Involved</h4>
            <ul className="space-y-2">
              {[
                { href: "/sign-up", label: "Student Sign-Up" },
                { href: "/donate", label: "Make a Donation" },
                { href: "/media-contact", label: "Contact Us" },
                { href: "/media-contact", label: "Media & Press" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:contact@notebynoteaz.org"
                className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
              >
                <Mail className="w-4 h-4 text-crimson" />
                contact@notebynoteaz.org
              </a>
              <a
                href="https://instagram.com/notebynoteaz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-crimson" />
                @notebynoteaz
              </a>
              <a
                href="https://gofundme.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-crimson" />
                GoFundMe Campaign
              </a>
            </div>
            <div className="mt-6">
              <Link
                href="/donate"
                className="btn-primary text-sm py-2.5 px-5 inline-flex"
              >
                <Heart className="w-4 h-4" />
                Support Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Note By Note AZ. All rights reserved. 501(c)(3) Nonprofit Organization.
          </p>
          <p className="text-gray-600 text-xs">
            Donations are tax-deductible to the extent permitted by law.
          </p>
        </div>
      </div>
    </footer>
  );
}
