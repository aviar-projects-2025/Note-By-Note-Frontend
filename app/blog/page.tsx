'use client'
import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import FadeUp from '@/components/FadeUp'
import { motion } from 'framer-motion'
import { client } from '@/sanity/client'
import { blogPageQuery } from '@/lib/queries'
import 'bootstrap-icons/font/bootstrap-icons.css'

const posts = [
  { id: 1, date: 'April 20, 2024', category: 'Events', title: 'Spring Recital Highlights', excerpt: 'Our amazing students performed beautifully at our spring recital. See photos and moments from the day!', img: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&q=80' },
  { id: 2, date: 'April 13, 2024', category: 'Student Stories', title: 'Tutor Spotlight: Meet Emma', excerpt: 'Emma shares her experience as a tutor and why music education matters to her.', img: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=600&q=80' },
  { id: 3, date: 'April 6, 2024', category: 'Instruments', title: 'New Instrument Highlight: Viola', excerpt: 'The viola might be similar to the violin, but it has its own unique voice. Learn more about this wonderful instrument.', img: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=600&q=80' },
  { id: 4, date: 'March 28, 2024', category: 'News', title: 'We Reached 250 Students!', excerpt: 'A huge milestone for Note By Note AZ. We are so proud of our students, tutors, and supporters.', img: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=600&q=80' },
  { id: 5, date: 'March 15, 2024', category: 'Events', title: 'Workshop at Lincoln Middle School', excerpt: 'We hosted an exciting music workshop bringing students together to explore rhythm and harmony.', img: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&q=80' },
  { id: 6, date: 'March 5, 2024', category: 'Student Stories', title: 'Student Spotlight: Carlos Learns Guitar', excerpt: 'Carlos had never touched a guitar before joining our program. Now he\'s playing his favorite songs.', img: 'https://images.unsplash.com/photo-1619983081563-430f63602796?w=600&q=80' },
]

const categories = ['All Posts', 'Events', 'Student Stories', 'Instruments', 'News']

export default function BlogPage() {
  const [active, setActive] = useState('All Posts')
  const filtered = active === 'All Posts' ? posts : posts.filter(p => p.category === active)

  useEffect(() => {
      const getData = async () => {
        const data = await client.fetch(blogPageQuery)
        if (!data?.sections) return

        console.log(data,'data')
  
      }
      getData()
    }, [])

  return (
    <>
      <Navbar />
      <main>
        <div className="relative w-full h-64 sm:h-80 overflow-hidden">
          <motion.img
            src="https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG11c2ljfGVufDB8fDB8fHww"
            alt="Student with headphones learning online"
            className="w-full h-full object-cover object-center"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
          <div className="absolute inset-0 bg-black/55" />

          <motion.div
            className="absolute inset-0 flex items-center justify-center text-center px-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white text-3xl sm:text-5xl font-bold drop-shadow-lg" >
              <p style={{ color: "white" }}>Progress Updates</p>
            </h1>
          </motion.div>
        </div>

        <section className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter tabs */}
            <FadeUp>
              <div className="flex flex-wrap gap-2 mb-10">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors border ${active === cat
                      ? 'bg-[#2B2B2B] text-white border-[#2B2B2B]'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </FadeUp>

            {/* Cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtered.map((post, i) => (
                <FadeUp key={post.id} delay={i * 60}>
                  <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    {/*
                      Performance: added loading="lazy", decoding="async", width/height
                      to prevent layout shift (CLS) and defer off-screen images.
                      First card uses loading="eager" since it's above the fold.
                    */}
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full object-cover"
                      style={{ height: 200 }}
                      loading={i === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                      width={600}
                      height={200}
                    />
                    <div className="p-5 flex flex-col flex-1">
                      <span className="text-xs text-gray-400 mb-2">{post.date}</span>
                      <h5 className="font-bold text-base mb-2 flex-1">{post.title}</h5>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                      <a href="#" className="text-[#C0392B] font-semibold text-sm no-underline hover:text-[#a93226]">
                        Read More →
                      </a>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            {/* Load more */}
            <FadeUp>
              <div className="text-center mt-12">
                <button className="border-2 border-gray-300 hover:border-gray-500 text-gray-700 font-semibold px-10 py-3 rounded-lg text-sm transition-colors">
                  LOAD MORE POSTS
                </button>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
