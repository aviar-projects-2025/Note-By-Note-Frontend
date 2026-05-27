import type { Metadata } from 'next'
import { LazyMotion, domAnimation } from 'framer-motion'
import BootstrapIcons from './BootstrapIcons'
import './globals.css'

export const metadata: Metadata = {
  title: 'Note By Note AZ – Free Music Education for Middle Schoolers',
  description: 'Note By Note AZ is a student-run nonprofit providing free one-on-one music instruction to middle school students in Arizona.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to font origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Load fonts non-blocking — display=swap in the URL prevents render blocking */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Poppins:wght@400;500;600;700;800&family=Roboto:wght@300;400;500&display=swap"
          rel="stylesheet"
        />

        {/* Preconnect to Unsplash for faster remote image loads */}
        <link rel="preconnect" href="https://images.unsplash.com" />

        {/* Bootstrap Icons — loaded non-blocking via client component */}
        <BootstrapIcons />
      </head>
      <body className="antialiased">
        {/*
          LazyMotion loads only the animation features actually used (~15 KB)
          instead of the full framer-motion bundle (~95 KB).
          All motion.* components in child pages still work unchanged.
        */}
        <LazyMotion features={domAnimation}>
          {children}
        </LazyMotion>
      </body>
    </html>
  )
}
