"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
   "/about/abt1.jpg",
    "/about/abt2.jpg",
    "/about/abt3.jpg",
    "/about/abt4.jpg",
]

export default function AboutCarousel() {
    const [index, setIndex] = useState(0)

    const next = () => {
        setIndex((prev) => (prev + 1) % images.length)
    }

    const prev = () => {
        setIndex((prev) => (prev - 1 + images.length) % images.length)
    }
    
    useEffect(() => {
        const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length)
        }, 5000)
    
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="relative w-full h-[280px] sm:h-[350px] md:h-[420px] lg:h-[500px] flex items-center justify-center overflow-visible">

        {images.map((img, i) => {
            const position = (i - index + images.length) % images.length

            let style = ""

            if (position === 0) {
            style = "translate-x-0 scale-100 z-30"
            } else if (position === 1) {
            style = "translate-x-[50%] sm:translate-x-[60%] md:translate-x-[70%] scale-75 sm:scale-80 md:scale-85 z-20 opacity-70"
            } else if (position === images.length - 1) {
            style = "-translate-x-[50%] sm:-translate-x-[60%] md:-translate-x-[70%] scale-75 sm:scale-80 md:scale-85 z-20 opacity-70"
            } else {
            style = "scale-70 opacity-0"
            }

            return (
            <motion.div
                key={i}
                className={`absolute w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] h-[260px] sm:h-[320px] md:h-[380px] lg:h-[450px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl transition-all duration-500 ${style}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <Image src={img} alt="about" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </motion.div>
            )
        })}

        {/* Left button */}
        <motion.button
            onClick={prev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute left-1 sm:left-2 md:left-0 p-2 sm:p-3 md:p-4 bg-bengal-600 text-white rounded-full shadow-lg hover:bg-bengal-700 transition z-50"
            aria-label="Previous image"
        >
            <ChevronLeft size={16} />
        </motion.button>

        {/* Right button */}
        <motion.button
            onClick={next}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-1 sm:right-2 md:right-0 p-2 sm:p-3 md:p-4 bg-bengal-600 text-white rounded-full shadow-lg hover:bg-bengal-700 transition z-50"
            aria-label="Next image"
        >
            <ChevronRight size={16} />
        </motion.button>

        {/* Indicators */}
        <div className="absolute -bottom-12 sm:-bottom-14 md:-bottom-16 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2 z-10">
            {images.map((_, i) => (
                <motion.button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 sm:h-2 rounded-full transition-all ${
                        i === index ? "bg-bengal-600 w-6 sm:w-8" : "bg-gray-300 w-1.5 sm:w-2 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                />
            ))}
        </div>

        </div>
    )
}