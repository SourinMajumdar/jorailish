"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useRouter, usePathname } from "next/navigation"
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react"
import MainLogo from "@/public/jorailish2.png"
import secondLogo from "@/public/jorailish.png"

const footerLinks = {
  restaurant: [
    { label: "About Us", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Booking", href: "#booking" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#testimonials" },
  ],
}

export default function Footer() {
  const router = useRouter()
  const pathname = usePathname()
  const isHome = pathname === "/"

  const handleLogoClick = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      router.push("/")
    }
  }

  return (
    <footer className="bg-gray-900 text-white pt-16 md:pt-24 pb-8 md:pb-12 px-4 sm:px-6" id="footer">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          
          {/* COLUMN 1: BIG LOGO (Clickable) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center sm:justify-start sm:col-span-2 lg:col-span-1"
          >
            <button 
              onClick={handleLogoClick}
              className="bg-transparent border-0 p-0 cursor-pointer"
            >
              <Image 
                src={MainLogo} 
                alt="Jora Ilish" 
                className="w-32 sm:w-40 h-auto object-contain hover:opacity-80 transition-opacity"
                priority
              />
            </button>
          </motion.div>

          {/* COLUMN 2: BRAND & SOCIALS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-1"
          >
            {/* Small Logo (Clickable) */}
            <button 
              onClick={handleLogoClick}
              className="bg-transparent border-0 p-0 cursor-pointer mb-3 sm:mb-4"
            >
              <Image 
                src={secondLogo} 
                alt="Jora Ilish Logo" 
                className="h-8 sm:h-10 w-auto object-contain hover:opacity-80 transition-opacity"
              />
            </button>
            <p className="text-gray-400 mb-4 sm:mb-6 max-w-sm text-xs sm:text-sm md:text-base">
              Experience authentic Bengali cuisine in the heart of Guwahati, where tradition meets taste.
            </p>
            
            <div className="flex gap-3 sm:gap-4">
              <motion.a
                href="https://www.facebook.com/joraillish" 
                target="_blank"
                whileHover={{ scale: 1.2 }}
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition"
              >
                <Facebook size={18} className="text-white" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/jora.ilish" 
                target="_blank"
                whileHover={{ scale: 1.2 }}
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition"
              >
                <Instagram size={18} className="text-white" />
              </motion.a>
            </div>
          </motion.div>

          {/* COLUMN 3: QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-1 lg:pl-0"
          >
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Restaurant</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.restaurant.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition text-xs sm:text-sm md:text-base">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* COLUMN 4: CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contact Us</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-white mt-1 flex-shrink-0" />
                <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                  Pandu port road, Adabari Tiniali,<br />
                  Guwahati, Assam, India - 781012
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-white flex-shrink-0" />
                <a href="tel:+918876767574" className="text-gray-400 hover:text-white transition text-xs sm:text-sm md:text-base">
                  +91 88767 67574
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-white flex-shrink-0" />
                <a href="mailto:jorailish@gmail.com" className="text-gray-400 hover:text-white transition text-xs sm:text-sm md:text-base">
                  jorailish@gmail.com 
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="mt-10 md:mt-13 flex flex-col items-center gap-4 md:gap-6">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent max-w-4xl" />
        <p className="text-gray-500 text-[9px] sm:text-[10px] md:text-xs tracking-widest uppercase text-center px-2">
          &copy; 2026 Jora Ilish <span className="mx-2 md:mx-3 text-gray-700">|</span> All rights reserved by Aami Bangali.
        </p>
      </div>
    </footer>
  )
}