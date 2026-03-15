"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import jorailish from "@/public/jorailish.png"
import aamibangali from "@/public/aami bangali.png"

export default function Navbar() {
  const router = useRouter()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isHome = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isHome && window.location.hash) {
      setTimeout(() => {
        const element = document.querySelector(window.location.hash)
        if (element) element.scrollIntoView({ behavior: "smooth" })
      }, 100)
    }
  }, [isHome])

  const handleNavLink = (hash: string) => {
    if (isHome) {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      } else if (hash === "#top") {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    } else {
      router.push(`/${hash}`)
    }
  }

  const navLinkClass = `relative transition-colors duration-300 ease-out hover:text-red-700 text-xs md:text-sm lg:text-base cursor-pointer bg-transparent border-0 p-0 tracking-widest 
    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-red-700 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100`;

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-out ${
        scrolled
          ? "bg-white/40 backdrop-blur-xl py-2 md:py-3 border-b border-white/20 shadow-sm"
          : "bg-transparent py-3 md:pt-6 md:pb-0 border-b border-transparent"
      }`}
    >
      <div
        className={`absolute bottom-0 left-0 w-full h-16 pointer-events-none bg-gradient-to-b from-white/90 to-transparent transition-opacity duration-500 -z-10 ${
          scrolled ? "opacity-0" : "opacity-100"
        }`}
      />

      <div className="w-full md:max-w-[98%] 2xl:max-w-[95%] mx-auto px-4 md:px-10 relative z-10">
        <div className="flex items-center justify-between">
          
          <motion.button
            onClick={() => handleNavLink("#top")}
            className="relative z-30 flex items-center gap-1 md:gap-2 shrink-0 group cursor-pointer bg-transparent border-0 p-0 outline-none"
            whileHover={{ scale: 1.02 }}
            style={{ isolation: 'isolate' }}
          >
            <Image
              src={jorailish}
              alt="Jora Ilish Logo"
              priority
              className={`transition-all duration-300 ease-out pointer-events-none ${
                scrolled ? "h-12 md:h-12" : "h-12 md:h-24"
              } w-auto object-contain`}
            />
            <Image
              src={aamibangali}
              alt="Aami Bangali Logo"
              priority
              className={`transition-all duration-300 ease-out hidden sm:block pointer-events-none ${
                scrolled ? "h-12 md:h-12" : "h-12 md:h-24"
              } w-auto object-contain`}
            />
          </motion.button>

          <div className="hidden md:block relative z-20">
            <nav
              className={`flex items-center gap-4 lg:gap-8 transition-all duration-300 ease-out ${
                scrolled ? "mt-0" : "-mt-10 pb-3"
              }`}
            >
              <button onClick={() => handleNavLink("#about")} className={navLinkClass}>About</button>
              <button onClick={() => handleNavLink("#menu")} className={navLinkClass}>Menu</button>
              <button onClick={() => handleNavLink("#booking")} className={navLinkClass}>Booking</button>
              <button onClick={() => handleNavLink("#gallery")} className={navLinkClass}>Gallery</button>
              <button onClick={() => handleNavLink("#testimonials")} className={navLinkClass}>Reviews</button>
              <button onClick={() => handleNavLink("#footer")} className={navLinkClass}>Contact</button>
            </nav>

            <div
              className={`absolute bottom-0 left-0 w-full h-[1px] bg-gray-300/40 transition-opacity duration-300 ${
                scrolled ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>

          <div className="md:hidden flex items-center z-30">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-black hover:text-red-700 transition-colors bg-transparent border-0 outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden absolute top-full left-0 w-full bg-white/90 backdrop-blur-2xl shadow-2xl border-t border-white/20 px-6 py-8 flex flex-col gap-5 z-50"
            >
              <button onClick={() => {handleNavLink("#about"); setMenuOpen(false)}} className="text-left text-lg font-normal text-gray-900 border-b border-black/5 pb-2 bg-transparent border-0 tracking-wider">About</button>
              <button onClick={() => {handleNavLink("#menu"); setMenuOpen(false)}} className="text-left text-lg font-normal text-gray-900 border-b border-black/5 pb-2 bg-transparent border-0 tracking-wider">Menu</button>
              <button onClick={() => {handleNavLink("#booking"); setMenuOpen(false)}} className="text-left text-lg font-normal text-gray-900 border-b border-black/5 pb-2 bg-transparent border-0 tracking-wider">Booking</button>
              <button onClick={() => {handleNavLink("#gallery"); setMenuOpen(false)}} className="text-left text-lg font-normal text-gray-900 border-b border-black/5 pb-2 bg-transparent border-0 tracking-wider">Gallery</button>
              <button onClick={() => {handleNavLink("#testimonials"); setMenuOpen(false)}} className="text-left text-lg font-normal text-gray-900 border-b border-black/5 pb-2 bg-transparent border-0 tracking-wider">Reviews</button>
              <button onClick={() => {handleNavLink("#footer"); setMenuOpen(false)}} className="text-left text-lg font-normal text-gray-900 bg-transparent border-0 tracking-wider">Contact</button>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}