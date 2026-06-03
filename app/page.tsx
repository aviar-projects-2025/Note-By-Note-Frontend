import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HomeClient from '@/components/HomeClient'
import 'bootstrap-icons/font/bootstrap-icons.css'

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
