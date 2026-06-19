// 'use client'
// import { useEffect, useState } from 'react'
// import Navbar from '@/components/Navbar'
// import Footer from '@/components/Footer'
// import PageHero from '@/components/PageHero'
// import FadeUp from '@/components/FadeUp'
// import { motion } from 'framer-motion'
// import { client } from '@/sanity/client'
// import Image from 'next/image'
// import blog1 from './assets/blog1.png'
// import blog2 from './assets/blog2.png'
// import blog3 from './assets/blog3.png'
// import blog4 from './assets/blog4.png'
// import blog5 from './assets/blog5.png'
// import blog6 from './assets/blog6.png'
// import { blogPageQuery } from '@/lib/queries'
// import 'bootstrap-icons/font/bootstrap-icons.css'
// import Blogbanner from "./assets/blogbanner.png"
// // const posts = [
// //   { id: 1, date: 'April 20, 2024', category: 'Events', title: 'Spring Recital Highlights', excerpt: 'Our amazing students performed beautifully at our spring recital. See photos and moments from the day!', img: blog1 },
// //   { id: 2, date: 'April 13, 2024', category: 'Student Stories', title: 'Tutor Spotlight: Meet Emma', excerpt: 'Emma shares her experience as a tutor and why music education matters to her.', img: blog2 },
// //   { id: 3, date: 'April 6, 2024', category: 'Instruments', title: 'New Instrument Highlight: Viola', excerpt: 'The viola might be similar to the violin, but it has its own unique voice. Learn more about this wonderful instrument.', img: blog3 },
// //   { id: 4, date: 'March 28, 2024', category: 'News', title: 'We Reached 250 Students!', excerpt: 'A huge milestone for Note By Note AZ. We are so proud of our students, tutors, and supporters.', img: blog4 },
// //   { id: 5, date: 'March 15, 2024', category: 'Events', title: 'Workshop at Lincoln Middle School', excerpt: 'We hosted an exciting music workshop bringing students together to explore rhythm and harmony.', img: blog5 },
// //   { id: 6, date: 'March 5, 2024', category: 'Student Stories', title: 'Student Spotlight: Carlos Learns Guitar', excerpt: 'Carlos had never touched a guitar before joining our program. Now he\'s playing his favorite songs.', img: blog6 },
// // ]

// // const categories = ['All Posts', 'Events', 'Student Stories', 'Instruments', 'News']

// const posts = [];

// export default function BlogPage() {
//   const [post, setPost] = useState([]);
//   const [category, setCategory] = useState([]);
//   const [hero, setHero] = useState(null);
//   const [active, setActive] = useState(category[0]);
//   const filtered = active === category[0] ? posts : category.find(f === active);

//   useEffect(() => {
//     const getData = async () => {
//       const data = await client.fetch(blogPageQuery);

//       console.log("Blog Page Data", data);

//       if (Array.isArray(data?.categories)) {
//         setCategory(data.categories);
//       }

//       if (data?.hero?._type === "blogHeroSection") {
//         setHero(data.hero);
//       }

//       if (Array.isArray(data?.posts)) {
//         setPost(data.posts);
//       }
//     };

//     getData();
//   }, []);

//   console.log("Category", category);
//   console.log("Hero", hero);
//   console.log("Post", post);



//   const MotionImage = motion(Image)
//   return (
//     <>

//       <Navbar />

//       <main>
//         <div className="relative w-full h-64 sm:h-80 overflow-hidden">
//           <MotionImage
//             // src={hero?.image?.asset?.url}
//             alt="Student with headphones learning online"
//             className="w-full h-full object-cover object-center"
//             initial={{ scale: 1.15 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 1.2, ease: 'easeOut' }}
//           />
//           <div className="absolute inset-0 bg-black/55" />

//           <motion.div
//             className="absolute inset-0 flex items-center justify-center text-center px-6"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h1 className="text-white text-3xl sm:text-5xl font-bold drop-shadow-lg" >
//               <p style={{ color: "white" }}>{hero?.title}</p>
//             </h1>
//           </motion.div>
//         </div>

//         <section className="py-14">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             {/* Filter tabs */}
//             <FadeUp>
//               <div className="flex flex-wrap gap-2 mb-10">
//                 {category.map(cat => (
//                   <button
//                     key={cat}
//                     onClick={() => setActive(cat)}
//                     className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors border ${active === cat
//                       ? 'bg-[#2B2B2B] text-white border-[#2B2B2B]'
//                       : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
//                       }`}
//                   >
//                     {cat}
//                   </button>
//                 ))}
//               </div>
//             </FadeUp>

//             {/* Cards grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
//               {filtered.map((pos, i) => (
//                 <FadeUp key={pos?._key} delay={i * 60}>
//                   <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
//                     {/*
//                       Performance: added loading="lazy", decoding="async", width/height
//                       to prevent layout shift (CLS) and defer off-screen images.
//                       First card uses loading="eager" since it's above the fold.
//                     */}
//                     <Image
//                       src={pos?.image?.asset?.url}
//                       alt={pos.title}
//                       className="w-full object-cover"
//                       style={{ height: 200 }}
//                       loading={i === 0 ? 'eager' : 'lazy'}
//                       decoding="async"
//                       width={600}
//                       height={200}
//                     />
//                     <div className="p-5 flex flex-col flex-1">
//                       <span className="text-xs text-gray-400 mb-2">{pos?.date}</span>
//                       <h5 className="font-bold text-base mb-2 flex-1">{pos?.title}</h5>
//                       <p className="text-gray-500 text-sm leading-relaxed mb-4">{pos?.excerpt}</p>
//                       <a href="#" className="text-[#C0392B] font-semibold text-sm no-underline hover:text-[#a93226]">
//                         Read More →
//                       </a>
//                     </div>
//                   </div>
//                 </FadeUp>
//               ))}
//             </div>

//             {/* Load more */}
//             <FadeUp>
//               <div className="text-center mt-12">
//                 <button className="border-2 border-gray-300 hover:border-gray-500 text-gray-700 font-semibold px-10 py-3 rounded-lg text-sm transition-colors">
//                   LOAD MORE POSTS
//                 </button>
//               </div>
//             </FadeUp>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </>
//   )
// }


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
import Blogbanner from './assets/blogbanner.png'

export default function BlogPage() {
  const [post, setPost] = useState([])
  const [category, setCategory] = useState([])
  const [hero, setHero] = useState(null)
  const [active, setActive] = useState('All Posts')
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    setSelectedBlog(item);
    setIsModalOpen(true);
  };

  // const MotionImage = motion(Image)

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
          />

          <div className="absolute inset-0 bg-black/55" />

          <motion.div
            className="absolute inset-0 flex items-center justify-center text-center px-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-5xl font-bold drop-shadow-lg"
              style={{ color: "#ffff" }}>
              {hero?.title}
            </h1>
          </motion.div>
        </div>

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

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtered.map((item, i) => (
                <FadeUp key={item._key} delay={i * 60}>
                  <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <Image
                      src={item?.image?.asset?.url}
                      alt={item?.title}
                      width={600}
                      height={450}
                      className="w-full h-[250px] object-fill"
                      loading={i === 0 ? 'eager' : 'lazy'}
                    />

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

                      <h3 className="font-bold text-lg mb-3">
                        {item?.title}
                      </h3>

                      <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
                        {item?.excerpt}
                      </p>

                      <button
                        onClick={() => handleReadMore(item)}
                        className="text-[#C0392B] font-semibold text-sm text-left hover:text-[#a93226]"
                        style={{ cursor: "pointer" }}
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
                  {/* Close Button */}
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-4 right-4 text-2xl font-bold text-white hover:text-white"
                  >
                    ×
                  </button>

                  {/* Image */}
                  <Image
                    src={selectedBlog?.image?.asset?.url}
                    alt={selectedBlog?.title}
                    width={1000}
                    height={500}
                    className="w-full h-[400px] object-fill"
                  />

                  <div className="p-6">
                    {/* Date */}
                    <p className="text-sm text-gray-500 mb-2">
                      {new Date(selectedBlog?.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>

                    {/* Category */}
                    <p className="text-[#C0392B] font-medium mb-2">
                      {selectedBlog?.category}
                    </p>

                    {/* Title */}
                    <h2 className="text-3xl font-bold mb-4">
                      {selectedBlog?.title}
                    </h2>

                    {/* Description */}
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

            {/* No Posts */}
            {filtered.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No posts found.</p>
              </div>
            )}

            {/* Load More */}
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