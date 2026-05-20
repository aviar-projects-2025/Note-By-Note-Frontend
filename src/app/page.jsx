import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HomeClient from '@/components/HomeClient'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HomeClient />
      </main>
      <Footer />
    </>
  )
}
