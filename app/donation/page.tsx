'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
// ── Donation page campaigns ────────────────────────────────────
const campaigns = [
  {
    id: 1,
    title: "Help Karla's Family Recover After Fire",
    image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&q=80&auto=format&fit=crop",
    raised: 78190, goal: 80000, funded: 98, featured: true,
  },
  {
    id: 2,
    title: "Help Patriotic Kenny Receive the Care He Deserves",
    image: "https://images.unsplash.com/photo-1576765608622-067973a79f53?w=600&q=80&auto=format&fit=crop",
    raised: 334683, goal: 345000, funded: 97, featured: false,
  },
  {
    id: 3,
    title: "Help Miranda Recover From a Shooting",
    image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=600&q=80&auto=format&fit=crop",
    raised: 209328, goal: 220000, funded: 95, featured: false,
  },
  {
    id: 4,
    title: "Honoring Ashley by Supporting Her Family",
    image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=600&q=80&auto=format&fit=crop",
    raised: 489645, goal: 500000, funded: 98, featured: false,
  },
  {
    id: 5,
    title: "Support Keith Fox and His Recovery Journey",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80&auto=format&fit=crop",
    raised: 114910, goal: 120000, funded: 96, featured: false,
  },
]

const categories = [
  'Animals','Business','Community','Competitions','Creative',
  'Education','Emergencies','Environment','Events','Faith','Family',
  'Funerals & Memorials','Medical','Monthly Bills','Newlyweds','Other',
  'Sports','Travel','Ukraine Relief','Volunteer','Wishes',
]

const countries = ['United States','United Kingdom','Canada','Australia','India','Germany','France','Other']

// ── Sub-components ─────────────────────────────────────────────
function FundedBadge({ pct }: { pct: number }) {
  return (
    <span className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
      {pct}% funded
    </span>
  )
}

function ProgressBar({ pct }: { pct: number }) {
  return (
    <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden mt-3 mb-1">
      <div className="h-full bg-green-500 rounded-full" style={{ width: `${Math.min(pct, 100)}%` }} />
    </div>
  )
}

function SmallCard({ campaign }: { campaign: typeof campaigns[0] }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
      <div className="relative overflow-hidden" style={{ height: 180 }}>
        <img src={campaign.image} alt={campaign.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <FundedBadge pct={campaign.funded} />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-900 text-sm leading-snug mb-1 line-clamp-2">{campaign.title}</h3>
        <ProgressBar pct={campaign.funded} />
        <p className="text-sm font-semibold text-gray-800 mt-2">
          ${campaign.raised.toLocaleString()} <span className="text-gray-400 font-normal">raised</span>
        </p>
      </div>
    </div>
  )
}

// ── Start Campaign Modal ────────────────────────────────────────
function StartCampaignModal({ onClose }: { onClose: () => void }) {
  const [selected, setSelected] = useState<string | null>(null)
  const [country, setCountry] = useState('United States')
  const [zip, setZip] = useState('')

  const toggle = (cat: string) => setSelected(prev => prev === cat ? null : cat)

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
  
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />

      {/* Modal panel */}
      <div className="relative z-10 flex w-full h-full bg-white overflow-hidden">

        {/* Left sidebar */}
        <div className="w-[38%] bg-[#F3F3F1] flex flex-col justify-between px-12 py-10 hidden md:flex">
          <div>
            {/* Logo */}
            <div className="flex gap-1 mb-24">
              <span className="text-green-600 text-2xl">☀</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-5">
              Let's begin your<br />fundraising journey
            </h1>
            <p className="text-gray-500 text-base">We're here to guide you every step of the way.</p>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 overflow-y-auto px-8 md:px-16 py-10 relative">

          {/* Sign in top-right */}
          <div className="absolute top-6 right-8 text-sm text-gray-600">
            <button className="hover:underline font-medium" onClick={onClose}>Sign in</button>
          </div>

          <div className="max-w-2xl mx-auto pt-12">

            {/* Where will funds go */}
            <div className="mb-10">
              <h2 className="text-lg font-bold text-gray-900 mb-1">Where will the funds go?</h2>
              <p className="text-sm text-gray-500 mb-5">
                Choose the location where you plan to withdraw your funds.{' '}
                <span className="underline cursor-pointer text-gray-700">Countries we support fundraisers in.</span>
              </p>
              <div className="flex gap-4">
                <div className="flex-1 relative border border-gray-300 rounded-xl px-4 py-3 bg-white hover:border-gray-400 transition-colors">
                  <label className="block text-xs text-gray-400 mb-0.5">Country</label>
                  <select
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                    className="w-full bg-transparent text-gray-900 font-medium text-sm outline-none appearance-none cursor-pointer"
                  >
                    {countries.map(c => <option key={c}>{c}</option>)}
                  </select>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">▾</span>
                </div>
                <div className="flex-1 border border-gray-300 rounded-xl px-4 py-3 bg-white hover:border-gray-400 transition-colors">
                  <label className="block text-xs text-gray-400 mb-0.5">Zip code</label>
                  <input
                    type="text"
                    value={zip}
                    onChange={e => setZip(e.target.value)}
                    placeholder="e.g. 90210"
                    className="w-full bg-transparent text-gray-900 font-medium text-sm outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Category selection */}
            <div className="mb-16">
              <h2 className="text-lg font-bold text-gray-900 mb-5">What best describes why you're fundraising?</h2>
              <div className="flex flex-wrap gap-3">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => toggle(cat)}
                    className={`px-5 py-2.5 rounded-full border text-sm font-semibold transition-all ${
                      selected === cat
                        ? 'bg-green-500 border-green-500 text-white shadow-md'
                        : 'bg-white border-gray-300 text-gray-800 hover:border-gray-500'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Continue button — bottom right */}
          <div className="fixed bottom-6 right-8">
            <button
              disabled={!selected || !zip}
              className={`px-10 py-3.5 rounded-full text-sm font-bold transition-all ${
                selected && zip
                  ? 'bg-green-600 hover:bg-green-700 text-white shadow-lg'
                  : 'bg-gray-300 text-gray-400 cursor-not-allowed'
              }`}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Main Page ──────────────────────────────────────────────────
export default function DonationPage() {
  const [showModal, setShowModal] = useState(false)
  const featured = campaigns[0]
  const rest = campaigns.slice(1)

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
    <Navbar/>
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-extrabold text-gray-900 tracking-tight no-underline">
            GiveHope
          </Link>
<a
  href="https://www.gofundme.com/"
  target="_blank"
  rel="noreferrer"
  className="bg-green-500 hover:bg-green-600 text-white text-sm font-bold px-5 py-2 rounded-full transition-colors inline-block"
>
  Start a GoFundMe
</a>
        </div>
      </header>

      {/* Campaign grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-1">Fundraisers near you</h1>
          <p className="text-gray-500 text-sm">Real people, real stories — every donation makes a difference.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Featured large card */}
          <div className="lg:col-span-1 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
            <div className="relative overflow-hidden" style={{ height: 360 }}>
              <img src={featured.image} alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <FundedBadge pct={featured.funded} />
            </div>
            <div className="p-5">
              <h2 className="font-bold text-gray-900 text-base leading-snug mb-1">{featured.title}</h2>
              <ProgressBar pct={featured.funded} />
              <p className="text-sm font-semibold text-gray-800 mt-2">
                ${featured.raised.toLocaleString()} <span className="text-gray-400 font-normal">raised</span>
              </p>
              {/* <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-bold text-sm py-2.5 rounded-xl transition-colors">
                Donate Now
              </button> */}
            </div>
          </div>

          {/* 2×2 small cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {rest.map(c => <SmallCard key={c.id} campaign={c} />)}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-gray-300 hover:border-green-500 hover:text-green-600 text-gray-600 font-bold text-sm px-10 py-3 rounded-full transition-all">
            See more fundraisers
          </button>
        </div>
      </main>

      {/* Start Campaign Modal */}
      {showModal && <StartCampaignModal onClose={() => setShowModal(false)} />}
        <Footer/>
    </div>
  )
}