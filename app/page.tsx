import Navbar from "@/components/navbar"
import ScrollToTop from "@/components/ScrollToTop"
import Hero from "@/components/hero"
import About from "@/components/About"
import FeaturedMenu from "@/components/FeaturedMenu"
import Testimonials from "@/components/Testimonials"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <FeaturedMenu />
      <Testimonials />
      <Footer />
      <ScrollToTop />
    </>
  );
}