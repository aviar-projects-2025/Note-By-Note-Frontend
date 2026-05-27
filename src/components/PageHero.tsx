import Link from 'next/link'

type BgVariant = 'who' | 'blog' | 'signup' | 'media' | 'initiative' | 'donate'

const bgImages: Record<BgVariant, string> = {
  who: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=1400&q=80',
  blog: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=1400&q=80',
  signup: 'https://images.unsplash.com/photo-1619983081563-430f63602796?w=1400&q=80',
  media: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=1400&q=80',
  initiative: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1400&q=80',
  donate: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1400&q=80',
}

interface PageHeroProps {
  title: string
  breadcrumb?: string
  variant?: BgVariant
}

export default function PageHero({ title, breadcrumb, variant = 'who' }: PageHeroProps) {
  return (
    <div
      className="relative py-20 text-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.65),rgba(27, 26, 26, 0.65)), url(${bgImages[variant]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold font-poppins mb-4">
          <p style={{ color: 'white' }}>{title}</p>
        </h1>
      </div>
    </div>
  )
}