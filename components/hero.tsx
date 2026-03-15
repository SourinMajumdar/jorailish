"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  "/hero/hero1.jpg",
  "/hero/hero2.jpg",
  "/hero/hero3.jpg",
  "/hero/hero4.jpg",
  "/hero/hero5.jpg",
  "/hero/hero6.jpg",
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  const ref = useRef(null)
  
  const { scrollYProgress } = useScroll({ 
    target: ref, 
    offset: ["start 0.9", "end 0.4"] 
  })

  const scaleX = useTransform(scrollYProgress, [0, 0.8], [0, 0.6])
  const underlineOpacity = useTransform(scrollYProgress, [0.02, 0.15], [0, 1])

  return (
    <section className="relative bg-white pt-20">

      {/* HERO IMAGE SLIDER */}
      {/* Mobile: aspect-[4/3] prevents the image from being too tall/cropped.
          Desktop: md:h-[65vh] maintains the cinematic feel.
      */}
      <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-[65vh] overflow-hidden group">
        {images.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt="Hero dish"
            fill
            priority={i === 0}
            className={`object-cover object-center transition-opacity duration-1000 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-black/20 z-5"></div>

        {/* Navigation Buttons - Scaled for Mobile/Desktop */}
        <motion.button
          onClick={prevSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-md p-2 md:p-4 rounded-full shadow-lg hover:bg-white transition group-hover:opacity-100 opacity-60"
        >
          <ChevronLeft size={20} className="text-red-600 md:hidden" />
          <ChevronLeft size={24} className="text-red-600 hidden md:block" />
        </motion.button>

        <motion.button
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-md p-2 md:p-4 rounded-full shadow-lg hover:bg-white transition group-hover:opacity-100 opacity-60"
        >
          <ChevronRight size={20} className="text-red-600 md:hidden" />
          <ChevronRight size={24} className="text-red-600 hidden md:block" />
        </motion.button>

        {/* Indicators/Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
          {images.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "bg-white w-6" : "bg-white/50 w-1.5 hover:bg-white/75"
              }`}
            />
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="pointer-events-none absolute top-0 left-0 w-full h-16 md:h-24 bg-gradient-to-b from-white/95 via-white/30 to-transparent z-5"></div>
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-12 md:h-20 bg-gradient-to-t from-white/90 via-white/20 to-transparent z-5"></div>
      </div>

      {/* TAGLINE SECTION */}
      <div ref={ref} className="max-w-5xl mx-auto text-center mt-8 md:mt-12 px-6 pb-12"> 
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading tracking-wide leading-tight text-slate-900"
        >
          Taste of <span className="font-bold" style={{ color: '#c41e3a' }}>Bengal</span> 
          <br className="md:block" /> 
          in the Heart of <span className="font-bold" style={{ color: '#c41e3a' }}>Guwahati</span> 
        </motion.h2>

        <motion.div 
          style={{ 
            scaleX, 
            opacity: underlineOpacity 
          }} 
          className="h-[3px] bg-gradient-to-r from-transparent via-red-600 to-transparent mt-6 md:mt-8 mx-auto origin-center w-full" 
        /> 
      </div>
    </section>
  )
}