import Navbar from "@/components/navbar"
import ScrollToTop from "@/components/ScrollToTop"
import Hero from "@/components/hero"
import About from "@/components/About"
import FeaturedMenu from "@/components/FeaturedMenu"
import Testimonials from "@/components/Testimonials"
import Gallery from "@/components/GalleryPreview"
import Footer from "@/components/Footer"
import Booking from "@/components/BookingSection"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <FeaturedMenu />
      <Booking />
      <Gallery />
      <Testimonials />
      <Footer />
      <ScrollToTop />
    </>
  );
}