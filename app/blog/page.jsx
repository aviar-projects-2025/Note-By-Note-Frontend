'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FadeUp from '@/components/FadeUp'
import { motion } from 'framer-motion'
import { client } from '@/sanity/client'
import Image from 'next/image'
import { blogPageQuery } from '@/lib/queries'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function BlogPage() {
  const [post, setPost] = useState([])
  const [category, setCategory] = useState([])
  const [hero, setHero] = useState(null)
  const [active, setActive] = useState('All Posts')
  const [selectedBlog, setSelectedBlog] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // State for test images
  const [testImgLoaded, setTestImgLoaded] = useState(false)
  const [testImgError, setTestImgError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await client.fetch(blogPageQuery)
        console.log('Blog Page Data', data)

        if (Array.isArray(data?.categories)) {
          setCategory(data.categories)
          setActive(data.categories[0] || 'All Posts')
        }

        if (data?.hero?._type === 'blogHeroSection') {
          setHero(data.hero)
        }

        if (Array.isArray(data?.posts)) {
          setPost(data.posts)
        }
      } catch (error) {
        console.error('Error fetching blog data:', error)
      }
    }

    getData()
  }, [])

  const filtered =
    active === 'All Posts'
      ? post
      : post.filter((item) => item.category === active)

  const handleReadMore = (item) => {
    setSelectedBlog(item)
    setIsModalOpen(true)
  }

  // Test image URLs (public, always available)
  const testImages = [
    'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&h=300&fit=crop',
  ]

  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <div className="relative w-full h-64 sm:h-80 overflow-hidden">
          <motion.img
            src={hero?.image?.asset?.url}
            alt={hero?.title || 'Blog Banner'}
            className="w-full h-full object-cover object-top"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            onError={() => console.error('Hero image failed to load')}
          />

          <div className="absolute inset-0 bg-black/55" />

          <motion.div
            className="absolute inset-0 flex items-center justify-center text-center px-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-5xl font-bold drop-shadow-lg" style={{ color: '#ffff' }}>
              {hero?.title}
            </h1>
          </motion.div>
        </div>

        {/* 🔍 Image Test Section - ADDED */}
        <section className="py-6 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h2 className="text-lg font-bold text-gray-700 mb-3 flex items-center gap-2">
                🖼️ Image Test (External Images)
                <span className="text-sm font-normal text-gray-500">
                  - If you see these, WebView loads external URLs correctly.
                </span>
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {testImages.map((url, idx) => (
                  <div key={idx} className="relative">
                    {/* Plain img tag */}
                    <img
                      src={url}
                      alt={`Test ${idx+1}`}
                      className="w-full h-32 object-cover rounded-lg border border-gray-200"
                      onLoad={() => {
                        console.log(`✅ Test image ${idx+1} loaded:`, url)
                        setTestImgLoaded(true)
                      }}
                      onError={(e) => {
                        console.error(`❌ Test image ${idx+1} failed:`, url)
                        setTestImgError(true)
                        e.target.style.display = 'none'
                      }}
                    />
                    {/* Unoptimized next/image (optional) */}
                    <div className="hidden"> {/* remove hidden to enable if you want to compare */}
                      <Image
                        src={url}
                        alt={`Test ${idx+1}`}
                        width={400}
                        height={300}
                        className="w-full h-32 object-cover rounded-lg border border-gray-200"
                        unoptimized
                        onError={() => console.error('Next Image failed:', url)}
                      />
                    </div>
                    {/* Small indicator */}
                    <span className="absolute bottom-1 right-1 text-xs bg-black/60 text-white px-1 rounded">
                      {idx+1}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-2 text-sm">
                {testImgLoaded && !testImgError && (
                  <span className="text-green-600">✅ All test images loaded successfully.</span>
                )}
                {testImgError && (
                  <span className="text-red-600">❌ Some test images failed. Check console/Network tab.</span>
                )}
                {!testImgLoaded && !testImgError && (
                  <span className="text-gray-400">Waiting for images...</span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Categories */}
            <FadeUp>
              <div className="flex flex-wrap gap-2 mb-10">
                {category.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors border ${
                      active === cat
                        ? 'bg-[#2B2B2B] text-white border-[#2B2B2B]'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </FadeUp>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtered.map((item, i) => (
                <FadeUp key={item._key} delay={i * 60}>
                  <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    {/* Display Sanity image with error handling */}
                    <div className="relative w-full h-[250px]">
                      {item?.image?.asset?.url ? (
                        <Image
                          src={item.image.asset.url}
                          alt={item?.title}
                          fill
                          className="object-fill"
                          loading={i === 0 ? 'eager' : 'lazy'}
                          unoptimized // ensures external URLs work in static export
                          onError={(e) => {
                            console.error('Sanity image failed to load:', item.image.asset.url)
                            // Optionally show fallback
                          }}
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                          No image
                        </div>
                      )}
                    </div>

                    <div className="p-5 flex flex-col flex-1">
                      <span className="text-xs text-gray-400 mb-2">
                        {new Date(item?.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>

                      <span className="text-xs font-medium text-[#C0392B] mb-2">
                        {item?.category}
                      </span>

                      <h3 className="font-bold text-lg mb-3">{item?.title}</h3>

                      <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
                        {item?.excerpt}
                      </p>

                      <button
                        onClick={() => handleReadMore(item)}
                        className="text-[#C0392B] font-semibold text-sm text-left hover:text-[#a93226]"
                        style={{ cursor: 'pointer' }}
                      >
                        Read More →
                      </button>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            {isModalOpen && selectedBlog && (
              <div
                className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
                onClick={() => setIsModalOpen(false)}
              >
                <div
                  className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-4 right-4 text-2xl font-bold text-white hover:text-white z-10"
                  >
                    ×
                  </button>

                  {/* Modal Image */}
                  <div className="relative w-full h-[400px]">
                    {selectedBlog?.image?.asset?.url && (
                      <Image
                        src={selectedBlog.image.asset.url}
                        alt={selectedBlog?.title}
                        fill
                        className="object-fill"
                        unoptimized
                      />
                    )}
                  </div>

                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-2">
                      {new Date(selectedBlog?.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>

                    <p className="text-[#C0392B] font-medium mb-2">
                      {selectedBlog?.category}
                    </p>

                    <h2 className="text-3xl font-bold mb-4">{selectedBlog?.title}</h2>

                    <div className="text-gray-700 leading-relaxed">
                      {selectedBlog?.description}
                    </div>

                    <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                      {selectedBlog?.excerpt}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {filtered.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No posts found.</p>
              </div>
            )}

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