// 'use client'

// import Link from 'next/link'
// import Image from 'next/image'
// import React, { useRef, useState, useEffect } from 'react'
// import Navbar from '@/components/Navbar'
// import Footer from '@/components/Footer'
// import { motion, useInView, useScroll, useTransform } from 'framer-motion'
// import { Heart, Users, Award, ArrowRight, Music, Star, BookOpen, Quote } from 'lucide-react'

// import founder1 from './assets/founder1.png'
// import founder2 from './assets/founder2.png'
// import founder3 from './assets/founder3.png'
// import team from './assets/team.png'
// import banner from './assets/banner.png'
// import { client } from '@/sanity/client'
// import { whoWeArePageQuery } from '@/lib/queries'
// import 'bootstrap-icons/font/bootstrap-icons.css'

// const ease = [0.22, 1, 0.36, 1]

// const fadeUp = {
//   hidden: { opacity: 0, y: 44 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
// }
// const fadeLeft = {
//   hidden: { opacity: 0, x: -44 },
//   show: { opacity: 1, x: 0, transition: { duration: 0.65, ease } },
// }
// const fadeRight = {
//   hidden: { opacity: 0, x: 44 },
//   show: { opacity: 1, x: 0, transition: { duration: 0.65, ease } },
// }
// const stagger = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
// }
// const scaleIn = {
//   hidden: { opacity: 0, scale: 0.85 },
//   show: { opacity: 1, scale: 1, transition: { duration: 0.55, ease } },
// }

// /* ─── Reveal wrapper ─────────────────────────────────────────── */
// function Reveal({ children, variants = fadeUp, className = '', delay = 0 }) {
//   const ref = useRef(null)
//   const inView = useInView(ref, { once: true, margin: '-80px' })

//   return (
//     <motion.div
//       ref={ref}
//       variants={variants}
//       initial="hidden"
//       animate={inView ? 'show' : 'hidden'}
//       transition={{ delay }}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   )
// }

// /* ─── Floating notes — client-only to avoid hydration mismatch ── */
// const notePositions = [
//   { left: '8%', top: '18%', delay: 0, symbol: '♪' },
//   { left: '88%', top: '12%', delay: 1.2, symbol: '♫' },
//   { left: '22%', top: '72%', delay: 0.6, symbol: '♩' },
//   { left: '78%', top: '65%', delay: 2, symbol: '♪' },
//   { left: '50%', top: '30%', delay: 1.5, symbol: '♫' },
//   { left: '5%', top: '50%', delay: 0.3, symbol: '♩' },
//   { left: '92%', top: '45%', delay: 1.8, symbol: '♪' },
// ]

// function FloatingNotes() {
//   const [mounted, setMounted] = useState(false)
//   useEffect(() => { setMounted(true) }, [])
//   if (!mounted) return null

//   return (
//     <div className="absolute inset-0 pointer-events-none overflow-hidden">
//       {notePositions.map((n, i) => (
//         <motion.span
//           key={i}
//           className="absolute text-white/20 text-3xl sm:text-4xl select-none"
//           style={{ left: n.left, top: n.top }}
//           animate={{ y: [0, -28, 0], rotate: [0, 12, -12, 0] }}
//           transition={{ duration: 7 + (i % 4), repeat: Infinity, ease: 'easeInOut', delay: n.delay }}
//         >
//           {n.symbol}
//         </motion.span>
//       ))}
//     </div>
//   )
// }

// /* ─── Animated counter ───────────────────────────────────────── */
// function Counter({ target }) {
//   const ref = useRef(null)
//   const inView = useInView(ref, { once: true })
//   const num = parseInt(target.replace(/\D/g, ''))
//   const suffix = target.replace(/[0-9]/g, '')
//   const [count, setCount] = useState(0)
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => { setMounted(true) }, [])

//   useEffect(() => {
//     if (!inView || !mounted) return
//     let start = 0
//     const step = Math.ceil(num / 50)
//     const timer = setInterval(() => {
//       start += step
//       if (start >= num) { setCount(num); clearInterval(timer) }
//       else setCount(start)
//     }, 30)
//     return () => clearInterval(timer)
//   }, [inView, num, mounted])

//   if (!mounted) return <span>{num}{suffix}</span>

//   return <span ref={ref}>{count}{suffix}</span>
// }

// /* ─── Data ───────────────────────────────────────────────────── */
// const teamMembers = [
//   { name: 'Dione Pahilan', role: 'Co-Founder', img: founder1, fallbackBg: 'bg-[#b8c9c6]', bio: 'Passionate about bridging the gap in music access across Phoenix schools.', quote: "Music education opens minds, inspires creativity, and builds confidence." },
//   { name: 'Santiago Paul', role: 'Co-Founder', img: founder2, fallbackBg: 'bg-[#4a7fa8]', bio: 'Believes every child deserves the joy and discipline that music brings.', quote: "Music is the language of the soul, and education teaches us how to speak it." },
//   { name: 'Mahima Sanghera', role: 'Co-Founder', img: founder3, fallbackBg: 'bg-[#c8b8a2]', bio: 'Dedicated to creating equitable, community-driven music education.', quote: "Every child deserves the opportunity to learn, create, and grow through music." },
// ]

// const stats = [
//   { number: '250+', label: 'Students Served' },
//   { number: '40+', label: 'Volunteer Tutors' },
//   { number: '10+', label: 'Instruments' },
//   { number: '20+', label: 'Schools Reached' },
// ]

// const values = [
//   { icon: Heart, title: 'Compassion', desc: "We serve with empathy and genuine care for every student's journey, meeting them where they are." },
//   { icon: Users, title: 'Community', desc: 'We build lasting relationships between tutors, students, families, and schools across Arizona.' },
//   { icon: Award, title: 'Excellence', desc: 'We hold ourselves to the highest standard so every lesson is meaningful and impactful.' },
//   { icon: Music, title: 'Creativity', desc: 'We encourage students to find their own musical voice, beyond notes on a page.' },
//   { icon: BookOpen, title: 'Education', desc: 'We believe learning an instrument builds confidence, focus, and discipline for life.' },
//   { icon: Star, title: 'Equity', desc: 'Financial barriers should never stand between a child and their love of music.' },
// ]

// const milestones = [
//   { year: '2023', title: 'Founded', desc: 'Note By Note launched in mid-2023 by three Brophy/Xavier juniors with a simple idea: free one-on-one music lessons.' },
//   { year: '2023', title: '501(c)(3) Status', desc: 'Officially registered as a nonprofit, making all donations fully tax-deductible.' },
//   { year: '2024', title: '250+ Students', desc: 'Expanded to serve over 250 students across 20+ schools in the Phoenix metro area.' },
//   { year: '2025', title: 'Growing Strong', desc: 'Recruiting our next cohort of volunteer tutors and expanding instrument access programs.' },
// ]

// /* ─── Team Card ──────────────────────────────────────────────── */
// function TeamCard({ member }) {
//   const [imgError, setImgError] = useState(false)
//   const [hovered, setHovered] = useState(false)

//   return (
//     <motion.div
//       variants={fadeUp}
//       whileHover={{ y: -10 }}
//       onHoverStart={() => setHovered(true)}
//       onHoverEnd={() => setHovered(false)}
//       className="flex flex-col items-center group"
//     >
//       {/* <div className="mb-7 px-4 border-l-4 border-pink-500 text-gray-700 italic text-lg leading-relaxed">
//         “{member?.quote}”
//       </div> */}

//       <div className="relative w-full overflow-hidden rounded-2xl shadow-lg bg-gray-100 aspect-[3/4]">

//         {!imgError ? (
//           // <Image
//           //   src={member?.image?.asset?._ref}
//           //   alt={member?.name}
//           //   fill
//           //   className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
//           //   onError={() => setImgError(true)}
//           // />

//           <></>
//         ) : (
//           // <div className={`w-full h-full ${member.fallbackBg} flex items-center justify-center`}>
//           <div className={`w-full h-full flex items-center justify-center`}>
//             <span className="text-white font-bold text-5xl opacity-60">
//               {member?.name.split(' ').map(w => w[0]).join('')}
//             </span>
//           </div>
//         )}
//         <motion.div
//           className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-5"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: hovered ? 1 : 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           <p className="text-white text-sm leading-relaxed">{member.bio}</p>
//         </motion.div>
//       </div>
//       <motion.p
//         className="mt-4 font-bold text-base sm:text-lg"
//         animate={{ color: hovered ? '#C0392B' : '#2B2B2B' }}
//         transition={{ duration: 0.2 }}
//       >
//         {member?.name}
//       </motion.p>
//       <p className="text-gray-500 text-sm">{member?.role}</p>
//     </motion.div>
//   )
// }

// /* ─── Hero ───────────────────────────────────────────────────── */
// function HeroSection({ who }) {
//   const heroRef = useRef(null)
//   const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
//   const bannerY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
//   const bannerOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3])

//   return (
//     <section ref={heroRef} className="relative h-[85vh] sm:h-[90vh] w-full overflow-hidden">
//       <motion.div className="absolute inset-0" style={{ y: bannerY, opacity: bannerOpacity }}>
//         <Image src={banner} alt="banner" fill priority className="object-cover" />
//         {/* <Image src={who?.bannerImage?.asset?._ref} alt="banner" fill priority className="object-cover" /> */}
//       </motion.div>

//       <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
//       <FloatingNotes />

//       <div className="relative z-10 flex items-center justify-center h-full text-center px-4 sm:px-6">
//         <div className="max-w-3xl mx-auto">
//           <motion.h1
//             className="text-white text-4xl sm:text-5xl md:text-7xl font-bold mt-2 leading-tight"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.35, duration: 0.7, ease }}
//           >
//             <p style={{ color: 'white' }}>{who?.title}</p>
//           </motion.h1>

//           <motion.p
//             className="text-gray-200 mt-5 max-w-xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.55, duration: 0.6 }}
//           >
//             {who?.description}
//           </motion.p>

//           <motion.div
//             className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.75, duration: 0.5 }}
//           >
//             <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}>
//               <Link
//                 href="/donate"
//                 className="inline-flex items-center justify-center gap-2 bg-[#C0392B] px-6 sm:px-8 py-3 rounded-full text-white font-semibold text-sm sm:text-base shadow-lg"
//               >
//                 <p style={{ color: 'white' }}>{who?.buttonText}</p>
//               </Link>
//             </motion.div>
//           </motion.div>``
//         </div>
//       </div>

//       <motion.div
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
//         animate={{ y: [0, 8, 0] }}
//         transition={{ duration: 1.8, repeat: Infinity }}
//       >
//         <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
//         <div className="w-px h-8 bg-white/30" />
//       </motion.div>
//     </section>
//   )
// }

// /* ─── MAIN PAGE ──────────────────────────────────────────────── */
// export default function WhoWeArePage() {
//   const [mounted, setMounted] = useState(false)
//   const [who, setWho] = useState(null);
//   const [story, setStory] = useState(null);
//   const [journey, setJourney] = useState(null);
//   const [founders, setFounders] = useState(null);
//   const [val, setVal] = useState(null);
//   const [status, setStatus] = useState(null);
//   const [cta, setCta] = useState(null);


//   useEffect(() => { setMounted(true) }, [])

//   useEffect(() => {
//     const getData = async () => {
//       const data = await client.fetch(whoWeArePageQuery);
//       console.log('Sanity data:', data);

//       if (!data?.sections) return

//       data.sections.forEach((section) => {

//         if (section._type === "whoHeroSection") {
//           console.log("whoHeroSection", section);
//           setWho(section)
//         } else if (section._type === "ourStorySection") {
//           console.log("ourStorySection", section);
//           setStory(section)
//         }
//         else if (section._type === "journeySection") {
//           console.log("journeySection", section);
//           setJourney(section)
//         }
//         else if (section._type === "foundersSection") {
//           console.log("foundersSection", section);
//           setFounders(section)
//         }
//         else if (section._type === "valuesSection") {
//           console.log("valuesSection", section);
//           setVal(section)
//         } else if (section._type === "statsSection") {
//           console.log("statsSection", section);
//           setStatus(section)
//         }
//         else if (section._type === "ctaSection") {
//           console.log("ctaSection", section);
//           setCta(section)
//         }

//       })
//     }
//     getData()
//   }, [])

//   if (!mounted) {
//     return (
//       <main className="bg-white text-[#2B2B2B] overflow-x-hidden">
//         <Navbar />
//         <div className="h-screen w-full bg-gray-900" />
//         <Footer />
//       </main>
//     )
//   }

//   return (
//     <>
//       <Navbar />
//       <main className="bg-white text-[#2B2B2B] overflow-x-hidden">

//         {/* ── HERO ── */}
//         <HeroSection who={who} />

//         {/* ── OUR STORY ── */}
//         <section className="py-16 sm:py-20 lg:py-28">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
//             <Reveal variants={fadeLeft}>
//               <motion.div
//                 whileHover={{ scale: 1.02, rotate: 1 }}
//                 transition={{ duration: 0.3 }}
//                 className="relative overflow-hidden rounded-3xl shadow-2xl group w-full h-[280px] sm:h-[380px] md:h-[440px] lg:h-[480px]"
//               >
//                 {/* <Image src={story?.image?.asset?.url} alt="Note By Note team" fill className="object-cover transition-transform duration-700 group-hover:scale-105" /> */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
//                 <motion.div
//                   className="absolute bottom-4 left-5 sm:bottom-6 sm:left-7"
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.4 }}
//                 >
//                   <span className="text-white font-bold text-sm sm:text-base bg-[#C0392B]/80 px-3 py-1 rounded-full">
//                     {story?.imageLabel}
//                   </span>
//                 </motion.div>
//               </motion.div>
//             </Reveal>

//             <Reveal variants={fadeRight}>
//               <motion.span className="inline-block text-xs sm:text-sm text-[#C0392B] font-semibold tracking-widest uppercase mb-3" variants={fadeUp}>
//                 {story?.badge}
//               </motion.span>
//               <h2 className="text-3xl sm:text-4xl font-bold mb-5 leading-tight">
//                 {story?.title}<br className="hidden sm:block" />
//                 <span className="text-[#C0392B]"> {story?.highlight}</span>
//               </h2>
//               <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
//                 <p>{story?.paragraphs}</p>
//               </div>
//               <div className="mt-7 flex flex-col sm:flex-row gap-3">
//                 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
//                   <Link href="/donate" className="inline-flex items-center gap-2 bg-[#2B2B2B] text-white px-6 py-3 rounded-full text-sm font-semibold">
//                     <p style={{ color: 'white' }}>{story?.buttonOneText}</p>
//                   </Link>
//                 </motion.div>
//                 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
//                   <Link
//                     href="/volunteer"
//                     className="inline-flex items-center gap-2 border border-[#C0392B] text-[#C0392B] px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#C0392B] hover:text-white transition-colors duration-300"
//                   >
//                     {story?.buttonTwoText}
//                   </Link>
//                 </motion.div>
//               </div>
//             </Reveal>
//           </div>
//         </section>

//         {/* ── MILESTONES ── */}
//         <section className="bg-[#FFFDF8] py-16 sm:py-20">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <Reveal className="text-center mb-12">
//               <h2 className="text-3xl sm:text-4xl font-bold">{journey?.title}</h2>
//               <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-xl mx-auto">{journey?.sub}</p>
//             </Reveal>
//             <div className="relative">
//               <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />
//               <div className="space-y-8 lg:space-y-0">
//                 {journey?.milestones.map((m, idx) => (
//                   <Reveal key={idx} delay={idx * 0.1}>
//                     <div className={`lg:grid lg:grid-cols-2 lg:gap-12 items-center ${idx % 2 === 0 ? '' : 'lg:dir-rtl'}`}>
//                       <motion.div
//                         className={`${idx % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:col-start-2 lg:pl-12'} mb-4 lg:mb-0`}
//                         whileHover={{ x: idx % 2 === 0 ? -4 : 4 }}
//                         transition={{ duration: 0.2 }}
//                       >
//                         <span className="inline-block text-xs font-bold text-[#C0392B] bg-[#C0392B]/10 px-3 py-1 rounded-full mb-2">{m.year}</span>
//                         <h3 className="text-lg sm:text-xl font-bold mb-1">{m.title}</h3>
//                         <p className="text-gray-500 text-sm sm:text-base leading-relaxed">{m.description}</p>
//                       </motion.div>
//                       {idx !== journey?.milestones.length - 1 && (
//                         <div className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 ${idx === 0 ? 'top-0' : ''}`}>
//                           <motion.div
//                             className="w-4 h-4 rounded-full bg-[#C0392B] border-4 border-white shadow"
//                             whileInView={{ scale: [0, 1.3, 1] }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.5, delay: idx * 0.1 }}
//                             style={{ marginTop: `${idx * 140 + 8}px` }}
//                           />
//                         </div>
//                       )}
//                     </div>
//                   </Reveal>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ── TEAM ── */}
//         <section className="py-16 sm:py-20 lg:py-28">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <Reveal className="text-center mb-10 sm:mb-14">
//               <span className="text-xs sm:text-sm text-[#C0392B] font-semibold tracking-widest uppercase">{founders?.badge}</span>
//               <h2 className="text-3xl sm:text-4xl font-bold mt-2">{founders?.title}</h2>
//               <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-lg mx-auto">{founders?.sub}</p>
//             </Reveal>
//             <motion.div
//               className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
//               variants={stagger}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true }}
//             >
//               {founders?.founders.map(m => <TeamCard key={m.name} member={m} />)}
//             </motion.div>
//           </div>
//         </section>

//         {/* ── VALUES ── */}
//         <section className="bg-[#FFFDF8] py-16 sm:py-20">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <Reveal className="text-center mb-10 sm:mb-14">
//               <h2 className="text-3xl sm:text-4xl font-bold">{val?.title}</h2>
//               <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-lg mx-auto">{val?.sub}</p>
//             </Reveal>
//             <motion.div
//               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
//               variants={stagger}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true }}
//             >
//               {val?.values.map(v => {
//                 const Icon = v.icon
//                 return (
//                   <motion.div
//                     key={v.title}
//                     variants={scaleIn}
//                     whileHover={{ y: -8, boxShadow: '0 20px 40px -12px rgba(192,57,43,0.18)', transition: { duration: 0.22 } }}
//                     className="group bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 shadow-sm cursor-default relative overflow-hidden"
//                   >
//                     <motion.div
//                       className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C0392B]/5 to-transparent"
//                       initial={{ x: '-100%' }}
//                       whileHover={{ x: '100%' }}
//                       transition={{ duration: 0.6 }}
//                     />
//                     <motion.div
//                       className="w-11 h-11 rounded-xl bg-[#C0392B]/10 flex items-center justify-center mb-4"
//                       whileHover={{ scale: 1.15, rotate: 6 }}
//                       transition={{ type: 'spring', stiffness: 350 }}
//                     >
//                       {/* <Icon size={20} className="text-[#C0392B]" /> */}
//                     </motion.div>
//                     <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-[#C0392B] transition-colors duration-200">{v?.title}</h3>
//                     <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{v?.description}</p>
//                   </motion.div>
//                 )
//               })}
//             </motion.div>
//           </div>
//         </section>

//         {/* ── STATS ── */}
//         <section className="bg-[#2B2B2B] text-white py-14 sm:py-16">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <motion.div
//               className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center"
//               variants={stagger}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true }}
//             >
//               {status?.stats.map(s => (
//                 <motion.div
//                   key={s?._key}
//                   variants={scaleIn}
//                   whileHover={{ scale: 1.07 }}
//                   className="bg-white/5 rounded-2xl py-6 px-3 sm:px-4 cursor-default"
//                 >
//                   <p className="text-3xl sm:text-4xl font-bold text-[#C0392B]">
//                     {/* <Counter target={s?.number} /> */}
//                     {s?.number}
//                   </p>
//                   <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-tight">{s?.label}</p>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </section>

//         {/* ── CTA BANNER ── */}
//         <section className="py-16 sm:py-20">
//           <div className="max-w-5xl mx-auto px-4 sm:px-6">
//             <Reveal>
//               <motion.div
//                 whileHover={{ scale: 1.015 }}
//                 className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#C0392B] to-[#E67E22] px-8 sm:px-12 py-14 sm:py-16 text-center text-white shadow-2xl"
//               >
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0"
//                   initial={{ x: '-100%' }}
//                   whileHover={{ x: '100%' }}
//                   transition={{ duration: 0.85 }}
//                 />
//                 {['♪', '♫', '♩'].map((sym, i) => (
//                   <motion.span
//                     key={i}
//                     className="absolute text-white/20 text-4xl select-none"
//                     style={{ left: `${15 + i * 35}%`, top: '20%' }}
//                     animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
//                     transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.8 }}
//                   >
//                     {sym}
//                   </motion.span>
//                 ))}
//                 <h2 className="text-3xl sm:text-4xl font-bold relative z-10">{cta?.title}</h2>
//                 <p className="mt-3 text-white/80 max-w-xl mx-auto text-sm sm:text-base relative z-10">
//                   {cta?.description}
//                 </p>
//                 <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center relative z-10">
//                   <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}>
//                     <Link href="/donate" className="inline-flex items-center gap-2 bg-white text-[#C0392B] font-bold px-7 py-3.5 rounded-full text-sm shadow-md hover:bg-[#FDEBD0] transition">
//                       <p style={{ color: 'black' }}>{cta?.buttonOneText}</p>
//                     </Link>
//                   </motion.div>
//                   <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}>
//                     <Link href="/volunteer" className="inline-flex items-center gap-2 border border-white/60 text-white font-semibold px-7 py-3.5 rounded-full text-sm hover:bg-white/10 transition">
//                       {cta?.buttonTwoText}
//                     </Link>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             </Reveal>
//           </div>
//         </section>

//         <Footer />
//       </main>
//     </>
//   )
// }

'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useRef, useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Heart, Users, Award, ArrowRight, Music, Star, BookOpen, Quote } from 'lucide-react'

import founder1 from './assets/founder1.png'
import founder2 from './assets/founder2.png'
import founder3 from './assets/founder3.png'
import team from './assets/team.png'
import banner from './assets/banner.png'
import { client } from '@/sanity/client'
import { whoWeArePageQuery } from '@/lib/queries'
import 'bootstrap-icons/font/bootstrap-icons.css'

const ease = [0.22, 1, 0.36, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 44 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
}
const fadeLeft = {
  hidden: { opacity: 0, x: -44 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease } },
}
const fadeRight = {
  hidden: { opacity: 0, x: 44 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease } },
}
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
}
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.55, ease } },
}

/* ─── Reveal wrapper ─────────────────────────────────────────── */
function Reveal({ children, variants = fadeUp, className = '', delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ─── Floating notes — client-only to avoid hydration mismatch ── */
const notePositions = [
  { left: '8%', top: '18%', delay: 0, symbol: '♪' },
  { left: '88%', top: '12%', delay: 1.2, symbol: '♫' },
  { left: '22%', top: '72%', delay: 0.6, symbol: '♩' },
  { left: '78%', top: '65%', delay: 2, symbol: '♪' },
  { left: '50%', top: '30%', delay: 1.5, symbol: '♫' },
  { left: '5%', top: '50%', delay: 0.3, symbol: '♩' },
  { left: '92%', top: '45%', delay: 1.8, symbol: '♪' },
]

function FloatingNotes() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return null

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {notePositions.map((n, i) => (
        <motion.span
          key={i}
          className="absolute text-white/20 text-3xl sm:text-4xl select-none"
          style={{ left: n.left, top: n.top }}
          animate={{ y: [0, -28, 0], rotate: [0, 12, -12, 0] }}
          transition={{ duration: 7 + (i % 4), repeat: Infinity, ease: 'easeInOut', delay: n.delay }}
        >
          {n.symbol}
        </motion.span>
      ))}
    </div>
  )
}

/* ─── Animated counter ───────────────────────────────────────── */
function Counter({ target }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const num = parseInt(target.replace(/\D/g, ''))
  const suffix = target.replace(/[0-9]/g, '')
  const [count, setCount] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    if (!inView || !mounted) return
    let start = 0
    const step = Math.ceil(num / 50)
    const timer = setInterval(() => {
      start += step
      if (start >= num) { setCount(num); clearInterval(timer) }
      else setCount(start)
    }, 30)
    return () => clearInterval(timer)
  }, [inView, num, mounted])

  if (!mounted) return <span>{num}{suffix}</span>

  return <span ref={ref}>{count}{suffix}</span>
}

/* ─── Team Card ──────────────────────────────────────────────── */
function TeamCard({ member }) {

  const [imgError, setImgError] = useState(false)
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -10 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="flex flex-col items-center group"
    >
      <div className="relative w-full overflow-hidden rounded-2xl shadow-lg bg-gray-100 aspect-[3/4]">
        {/* FIX: Render the image when available and not errored; fallback to initials */}
        {member?.image?.asset?.url && !imgError ? (
          <Image
            src={member?.image?.asset?.url}
            alt={member?.name}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-[#b8c9c6] flex items-center justify-center">
            <span className="text-white font-bold text-5xl opacity-60">
              {member?.name?.split(' ').map(w => w[0]).join('')}
            </span>
          </div>
        )}

        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-white text-sm leading-relaxed">{member?.bio}</p>
        </motion.div>
      </div>

      <motion.p
        className="mt-4 font-bold text-base sm:text-lg"
        animate={{ color: hovered ? '#C0392B' : '#2B2B2B' }}
        transition={{ duration: 0.2 }}
      >
        {member?.name}
      </motion.p>
      <p className="text-gray-500 text-sm">{member?.role}</p>
    </motion.div>
  )
}

/* ─── Hero ───────────────────────────────────────────────────── */
function HeroSection({ who }) {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const bannerY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const bannerOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3])

  return (
    <section ref={heroRef} className="relative h-[85vh] sm:h-[90vh] w-full overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bannerY, opacity: bannerOpacity }}>
        <Image src={banner} alt="banner" fill priority className="object-cover" />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      <FloatingNotes />

      <div className="relative z-10 flex items-center justify-center h-full text-center px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.h1
            className="text-white text-4xl sm:text-5xl md:text-7xl font-bold mt-2 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease }}
            style={{ color: "#ffff" }}
          >
            {/* FIX: Removed redundant inner <p> tag; h1 already carries text-white */}
            {who?.title}
          </motion.h1>

          <motion.p
            className="text-gray-200 mt-5 max-w-xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.6 }}
          >
            {who?.description}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 bg-[#C0392B] px-6 sm:px-8 py-3 rounded-full text-white font-semibold text-sm sm:text-base shadow-lg"
                style={{ color: "#ffff" }}
              >
                {/* FIX: Removed inner <p style={{ color: 'white' }}> wrapper; Link already sets text-white */}
                {who?.buttonText}
              </Link>
            </motion.div>
          </motion.div>
          {/* FIX: Removed stray backtick `` that was here */}
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/30" />
      </motion.div>
    </section>
  )
}

/* ─── MAIN PAGE ──────────────────────────────────────────────── */
export default function WhoWeArePage() {
  const [mounted, setMounted] = useState(false)
  const [who, setWho] = useState(null)
  const [story, setStory] = useState(null)
  const [journey, setJourney] = useState(null)
  const [founders, setFounders] = useState(null)
  const [val, setVal] = useState(null)
  const [status, setStatus] = useState(null)
  const [cta, setCta] = useState(null)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const getData = async () => {
      const data = await client.fetch(whoWeArePageQuery)
      console.log('Sanity data:', data)

      if (!data?.sections) return

      data.sections.forEach((section) => {
        if (section._type === 'whoHeroSection') {
          setWho(section)
        } else if (section._type === 'ourStorySection') {
          setStory(section)
        } else if (section._type === 'journeySection') {
          setJourney(section)
        } else if (section._type === 'foundersSection') {
          setFounders(section)
        } else if (section._type === 'valuesSection') {
          setVal(section)
        } else if (section._type === 'statsSection') {
          setStatus(section)
        } else if (section._type === 'ctaSection') {
          setCta(section)
        }
      })
    }
    getData()
  }, [])

  console.log('who:', who)
  console.log('story:', story)
  console.log('journey:', journey)
  console.log('founders:', founders)
  console.log('val:', val)
  console.log('status:', status)
  console.log('cta:', cta)

  if (!mounted) {
    return (
      <main className="bg-white text-[#2B2B2B] overflow-x-hidden">
        <Navbar />
        <div className="h-screen w-full bg-gray-900" />
        <Footer />
      </main>
    )
  }

  return (
    <>
      <Navbar />
      <main className="bg-white text-[#2B2B2B] overflow-x-hidden">

        {/* ── HERO ── */}
        <HeroSection who={who} />

        {/* ── OUR STORY ── */}
        <section className="py-16 sm:py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <Reveal variants={fadeLeft}>
              <motion.div
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-3xl shadow-2xl group w-full h-[280px] sm:h-[380px] md:h-[440px] lg:h-[480px]"
              >
                {/* FIX: Render story image when URL is available; show a branded placeholder otherwise */}
                {story?.image?.asset?.url ? (
                  <Image
                    src={story.image.asset.url}
                    alt="Note By Note team"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-[#2B2B2B]/10 flex items-center justify-center">
                    <Music size={48} className="text-[#C0392B]/40" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <motion.div
                  className="absolute bottom-4 left-5 sm:bottom-6 sm:left-7"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="text-white font-bold text-sm sm:text-base bg-[#C0392B]/80 px-3 py-1 rounded-full">
                    {story?.imageLabel}
                  </span>
                </motion.div>
              </motion.div>
            </Reveal>

            <Reveal variants={fadeRight}>
              <motion.span className="inline-block text-xs sm:text-sm text-[#C0392B] font-semibold tracking-widest uppercase mb-3" variants={fadeUp}>
                {story?.badge}
              </motion.span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-5 leading-tight">
                {story?.title}<br className="hidden sm:block" />
                <span className="text-[#C0392B]"> {story?.highlight}</span>
              </h2>
              <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>{story?.paragraphs}</p>
              </div>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                  <Link href="/donate" className="inline-flex items-center gap-2 bg-[#C0392B] px-6 py-3 rounded-full text-sm font-semibold"
                    style={{ color: "#ffff" }}>
                    {/* FIX: Removed inner <p style={{ color: 'white' }}> wrapper */}
                    {story?.buttonOneText}
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                  <Link
                    href="/volunteer"
                    className="inline-flex items-center gap-2 border border-[#C0392B] text-[#C0392B] px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#C0392B] hover:text-white transition-colors duration-300"
                  >
                    {story?.buttonTwoText}
                  </Link>
                </motion.div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── MILESTONES ── */}
        <section className="bg-[#FFFDF8] py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold">{journey?.title}</h2>
              <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-xl mx-auto">{journey?.sub}</p>
            </Reveal>
            <div className="relative">
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />
              <div className="space-y-8 lg:space-y-0">
                {journey?.milestones.map((m, idx) => (
                  <Reveal key={idx} delay={idx * 0.1}>
                    <div className={`lg:grid lg:grid-cols-2 lg:gap-12 items-center ${idx % 2 === 0 ? '' : 'lg:dir-rtl'}`}>
                      <motion.div
                        className={`${idx % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:col-start-2 lg:pl-12'} mb-4 lg:mb-0`}
                        whileHover={{ x: idx % 2 === 0 ? -4 : 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="inline-block text-xs font-bold text-[#C0392B] bg-[#C0392B]/10 px-3 py-1 rounded-full mb-2">{m.year}</span>
                        <h3 className="text-lg sm:text-xl font-bold mb-1">{m.title}</h3>
                        <p className="text-gray-500 text-sm sm:text-base leading-relaxed">{m.description}</p>
                      </motion.div>
                      {idx !== journey?.milestones.length - 1 && (
                        <div className={`hidden lg:flex absolute left-1/2 -translate-x-1/2`}>
                          <motion.div
                            className="w-4 h-4 rounded-full bg-[#C0392B] border-4 border-white shadow"
                            whileInView={{ scale: [0, 1.3, 1] }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            style={{ marginTop: `${idx * 140 + 8}px` }}
                          />
                        </div>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TEAM ── */}
        <section className="py-16 sm:py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center mb-10 sm:mb-14">
              <span className="text-xs sm:text-sm text-[#C0392B] font-semibold tracking-widest uppercase">{founders?.badge}</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2">{founders?.title}</h2>
              <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-lg mx-auto">{founders?.sub}</p>
            </Reveal>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {founders?.founders.map(m => <TeamCard key={m.name} member={m} />)}
            </motion.div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section className="bg-[#FFFDF8] py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center mb-10 sm:mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold">{val?.title}</h2>
              <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-lg mx-auto">{val?.sub}</p>
            </Reveal>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {val?.values.map((v) => {
                /* FIX: Map string icon names from Sanity to actual Lucide components */
                const iconMap = {
                  Heart, Users, Award, Music, Star, BookOpen,
                }
                const Icon = iconMap[v.icon] ?? Heart

                return (
                  <motion.div
                    key={v.title}
                    variants={scaleIn}
                    whileHover={{ y: -8, boxShadow: '0 20px 40px -12px rgba(192,57,43,0.18)', transition: { duration: 0.22 } }}
                    className="group bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 shadow-sm cursor-default relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C0392B]/5 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    <motion.div
                      className="w-11 h-11 rounded-xl bg-[#C0392B]/10 flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.15, rotate: 6 }}
                      transition={{ type: 'spring', stiffness: 350 }}
                    >
                      {/* FIX: Icon is now rendered from the resolved component */}
                      <Icon size={20} className="text-[#C0392B]" />
                    </motion.div>
                    <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-[#C0392B] transition-colors duration-200">{v?.title}</h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{v?.description}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="bg-[#2B2B2B] text-white py-14 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {status?.stats.map(s => (
                <motion.div
                  key={s?._key}
                  variants={scaleIn}
                  whileHover={{ scale: 1.07 }}
                  className="bg-white/5 rounded-2xl py-6 px-3 sm:px-4 cursor-default"
                >
                  <p className="text-3xl sm:text-4xl font-bold text-[#C0392B]">
                    {s?.number}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-tight">{s?.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section className="py-16 sm:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <Reveal>
              <motion.div
                whileHover={{ scale: 1.015 }}
                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#C0392B] to-[#E67E22] px-8 sm:px-12 py-14 sm:py-16 text-center text-white shadow-2xl"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.85 }}
                />
                {['♪', '♫', '♩'].map((sym, i) => (
                  <motion.span
                    key={i}
                    className="absolute text-white/20 text-4xl select-none"
                    style={{ left: `${15 + i * 35}%`, top: '20%' }}
                    animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.8 }}
                  >
                    {sym}
                  </motion.span>
                ))}
                <h2 className="text-3xl sm:text-4xl font-bold relative z-10">{cta?.title}</h2>
                <p className="mt-3 text-white/80 max-w-xl mx-auto text-sm sm:text-base relative z-10">
                  {cta?.description}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center relative z-10">
                  <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}>
                    <Link href="/donate" className="inline-flex items-center gap-2 bg-black text-[#fffff] font-bold px-7 py-3.5 rounded-full text-sm shadow-md transition">
                      {/* FIX: Removed inner <p style={{ color: 'black' }}> wrapper; text-[#C0392B] on Link handles color */}
                      {cta?.buttonOneText}
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}>
                    <Link href="/volunteer" className="inline-flex items-center gap-2 border border-white/60 text-white font-semibold px-7 py-3.5 rounded-full text-sm hover:bg-white/10 transition">
                      {cta?.buttonTwoText}
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

