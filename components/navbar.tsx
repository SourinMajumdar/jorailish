"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import jorailish from "@/public/jorailish.png"
import aamibangali from "@/public/aami bangali.png"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinkClass = `relative text-sm md:text-base font-body font-medium transition-colors duration-200 group text-black hover:text-red-600`

  const navItems = [
    { label: "About", href: "/#about" },
    { label: "Menu", href: "/#menu" },
    { label: "Order Online", href: "#order" },
    { label: "Book a Table", href: "#booking" },
    { label: "Events", href: "#events" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-out ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent pt-6 pb-4"
      }`}
    >
      <div className="max-w-[90%] mx-auto flex items-center justify-between px-6 md:px-12">

        <motion.div 
          className="flex items-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={jorailish}
            alt="Jora Ilish Logo"
            className={`transition-all duration-300 ease-out object-contain ${
              scrolled ? "h-10 w-auto" : "h-16 md:h-20 w-auto"
            }`}
            priority
          />
          <Image
            src={aamibangali}
            alt="Aami Bangali Logo"
            className={`transition-all duration-300 ease-out object-contain ${
              scrolled ? "h-10 w-auto" : "h-16 md:h-20 w-auto"
            }`}
            priority
          />
        </motion.div>

        <nav 
          className={`hidden md:flex items-center gap-8 lg:gap-10 transition-transform duration-300 ease-out ${
            scrolled ? "translate-y-0" : "-translate-y-4" 
          }`}
        >
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className={navLinkClass}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -2 }}
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-600 group-hover:w-full transition-all duration-300 origin-left"></span>
            </motion.a>
          ))}
        </nav>

        <div className={`md:hidden transition-transform duration-300 ease-out ${scrolled ? "translate-y-0" : "-translate-y-4"}`}>
          <button className="p-2 rounded-full transition hover:bg-gray-100">
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </div>
    </header>
  )
}