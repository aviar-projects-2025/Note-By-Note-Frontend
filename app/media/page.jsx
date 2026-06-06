'use client'

import { useEffect, useState } from 'react'
import { client } from '@/sanity/client'
import Image from 'next/image'
import { mediaPageQuery } from '@/lib/queries'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import { motion } from 'framer-motion'
import Image from 'next/image'
import banner from "./assets/banner.png"
import 'bootstrap-icons/font/bootstrap-icons.css'
import VideoSlider from '../media/VideoSlider'

const photos = [
  'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&q=80',
  'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=500&q=80',
  'https://images.unsplash.com/photo-1619983081563-430f63602796?w=500&q=80',
  'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=500&q=80',
  'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=500&q=80',
  'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=500&q=80',
]

const connects = [
  {
    icon: 'bi-instagram',
    color: '#E1306C',
    bg: 'bg-pink-50',
    title: 'Instagram',
    handle: '@notebynoteaz',
    desc: 'Follow us for updates and behind-the-scenes moments!',
    btnLabel: 'VIEW INSTAGRAM',
    href: 'https://instagram.com/notebynoteaz',
    btnColor: 'bg-[#E1306C] hover:bg-[#c1255a]',
  },
  {
    icon: 'bi-cash-coin',
    color: '#00b964',
    bg: 'bg-green-50',
    title: 'GoFundMe',
    handle: 'GoFundMe',
    desc: 'Support our mission and help us reach more students.',
    btnLabel: 'VIEW CAMPAIGN',
    href: 'https://gofundme.com',
    btnColor: 'bg-[#00b964] hover:bg-[#009e54]',
  },
  {
    icon: 'bi-envelope-at-fill',
    color: '#C0392B',
    bg: 'bg-red-50',
    title: 'Contact Us',
    handle: 'notebynoteaz@gmail.com',
    desc: "We'd love to hear from you!",
    btnLabel: 'EMAIL US',
    href: 'mailto:notebynoteaz@gmail.com',
    btnColor: 'bg-[#C0392B] hover:bg-[#a93226]',
  },
]

export default function MediaPage() {


  const [hero, setHero] = useState(null);
  const [connect, setConnect] = useState([]);
  const [photoVideo, setPhotoVideo] = useState(null);
  // const [head, setHead] = useState(null);


  useEffect(() => {
    const getData = async () => {
      try {
        const data = await client.fetch(mediaPageQuery);

        console.log('MediaPageSection ===>', data);


        if (data?.hero?._type === "mediaHeroSection") {
          setHero(data?.hero);

        }
        if (data?.connectSection?._type === "connectSection") {
          setConnect(data?.connectSection);

        }
        if (data?.photosVideosSection?._type === "photosVideosSection") {
          setPhotoVideo(data?.photosVideosSection);

        }

        // setHead(data?.title);

        // if (Array.isArray(data?.options)) {
        //   setOptions(data.options);
        // }

      } catch (error) {
        console.error('Error fetching blog data:', error)
      }
    }

    getData()
  }, []);

  console.log("HeroSection      ==> ", hero);
  console.log("ConnectSection   ==> ", connect);
  console.log("PhotoVideoSection==> ", photoVideo);
  // console.log("Title ===> ", head);



  return (
    <>
      <Navbar />

      <main>
        <div className="relative w-full h-64 sm:h-80 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=1400&q=80"
            width={1400}
            height={500}
            alt="Student with headphones learning online"
            className="w-full h-full object-cover object-top"
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
              <p style={{ color: "white" }}>{hero?.title}</p>
            </h1>
          </motion.div>
        </div>

        {/* Photos Section */}
        <section className="py-16">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-2">
                {photoVideo?.title}
              </h2>

              <p className="text-gray-500">
                {photoVideo?.description}
              </p>
            </motion.div>

            {/* Photo Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {photoVideo?.photos.map((src , i) => (
                <motion.div
                  key={indexedDB}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                  }}
                  whileHover={{ y: -8 }}
                  className="overflow-hidden rounded-xl cursor-pointer shadow-sm hover:shadow-xl"
                >
                  <motion.img
                    src={src?.asset?._ref}
                    alt={`Media ${i + 1}`}
                    className="w-full object-cover"
                    style={{ height: 275 }}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              ))}
            </div>

            <VideoSlider video={photoVideo} />

            {/* Google Drive Button */}
            <motion.div
              className="text-center mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="https://drive.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-[#2B2B2B] text-white font-bold px-7 py-3 rounded-lg text-sm no-underline"
                whileHover={{
                  scale: 1.08,
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* <i className="bi bi-google text-xl"></i> */}
                <p style={{ color: "white" }}>{photoVideo?.googleDriveLabel}</p>
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Connect With Us */}
        <section className="py-16 bg-[#FAFAF8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-2">
                {connect?.title}
              </h2>

              <p className="text-gray-500">
                {connect?.description}
              </p>
            </motion.div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {connect?.cards?.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.15,
                  }}
                  whileHover={{
                    y: -12,
                    scale: 1.03,
                    boxShadow:
                      '0px 20px 40px rgba(0,0,0,0.12)',
                  }}
                  className="bg-white rounded-2xl p-8 text-center border border-gray-100 h-full flex flex-col"
                >
                  {/* Animated Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-full ${c?.bg} flex items-center justify-center mx-auto mb-4`}
                    whileHover={{
                      rotate: 10,
                      scale: 1.2,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 250,
                    }}
                  >
                    <i
                      className={`bi ${c?.icon} text-3xl`}
                      style={{ color: c?.color }}
                    ></i>
                  </motion.div>

                  {/* Animated Text */}
                  <motion.h5
                    className="font-bold text-lg mb-1"
                    whileHover={{
                      scale: 1.05,
                    }}
                  >
                    {c?.title}
                  </motion.h5>

                  <p className="text-sm font-semibold text-gray-400 mb-2">
                    {c?.handle}
                  </p>

                  <motion.p
                    className="text-sm text-gray-500 leading-relaxed mb-5 flex-1"
                    initial={{ opacity: 0.7 }}
                    whileHover={{
                      opacity: 1,
                    }}
                  >
                    {c?.description}
                  </motion.p>

                  {/* Animated Button */}
                  <motion.a
                    href={c?.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-block ${c?.buttonColor} text-white font-bold text-xs px-5 py-2.5 rounded no-underline`}
                    whileHover={{
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                  >
                    <p style={{ color: "white" }}>{c?.buttonLabel}</p>
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}