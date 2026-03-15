"use client"

import { useState, useEffect } from "react" // Added useState & useEffect
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, X } from "lucide-react" // Added X icon
import { motion, AnimatePresence } from "framer-motion"
import ScrollToTop from "@/components/ScrollToTop"
import Navbar from "@/components/navbar"

const images = Array.from(
  { length: 24 },
  (_, i) => `/gallery/${i + 1}.jpg`
)

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null)
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen py-28 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Page Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between mb-16 mt-16"
          >
            <div className="w-[180px] flex justify-start">
              <Link href="/#gallery">
                <button className="flex items-center gap-2 px-3 py-2 rounded-full border border-gray-500 text-gray-700 text-sm hover:border-red-500 hover:text-red-600 transition-colors">
                  <ChevronLeft size={20} />
                </button>
              </Link>
            </div>

            <div className="flex-1 text-center">
              <h1 className="text-4xl md:text-5xl font-heading text-gray-800 mb-2">
                Our <span className="text-red-600">Gallery</span>
              </h1>
              <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto">
                A glimpse into our food, ambience, and dining experience
              </p>
            </div>

            <div className="w-[180px] hidden md:block" />
          </motion.div>

          {/* Masonry Gallery */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-6">
            {images.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.02 }}
                className="mb-6 break-inside-avoid overflow-hidden rounded-xl cursor-zoom-in"
                onClick={() => setSelectedImage(src)} // Open image
              >
                <Image
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* LIGHTBOX OVERLAY */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)} // Close on clicking outside
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-10 cursor-zoom-out"
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 text-white hover:text-red-500 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            >
              <Image
                src={selectedImage}
                alt="Selected gallery image"
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ScrollToTop />
    </>
  )
}