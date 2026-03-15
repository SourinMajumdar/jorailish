"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const galleryImages = Array.from(
  { length: 6 },
  (_, i) => `/gallery/${i + 1}.jpg`
)

export default function GalleryPreview() {
  return (
    <section className="bg-white py-16 md:py-32 px-4 sm:px-6" id="gallery">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <p className="text-red-600 font-semibold text-sm mb-2">
            GALLERY
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-gray-800 mb-3 md:mb-4">
            Moments at <span className="text-red-600">Jora Ilish</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            A glimpse of our food, ambience and dining experience
          </p>
        </motion.div>


        {/* Image Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="relative h-48 sm:h-56 md:h-64 rounded-lg sm:rounded-xl overflow-hidden group shadow-md"
            >
              <Image
                src={img}
                alt={`Gallery image ${i + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </motion.div>


        {/* View Gallery Button */}
        <div className="text-center mt-10 md:mt-14">
          <Link href="/gallery" className="inline-block">
            <button className="relative overflow-hidden px-8 sm:px-12 py-3 sm:py-4 border-2 border-red-600 text-red-600 font-semibold text-sm sm:text-base rounded-full group transition-colors duration-300">
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                View Full Gallery
              </span>
              <span className="absolute inset-0 bg-red-600 scale-x-0 origin-center transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
            </button>
          </Link>
        </div>

      </div>
    </section>
  )
}