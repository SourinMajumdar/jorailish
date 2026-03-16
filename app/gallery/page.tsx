"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/navbar";

const images = Array.from(
  { length: 25 },
  (_, i) => `/gallery/${i + 1}.jpg`
);

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Prevent background scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedImage]);

  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen pt-20 md:pt-28 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between mb-10 md:mb-16 mt-4 md:mt-16"
          >
            <div className="w-[60px] md:w-[180px] flex justify-start">
              <Link href="/#gallery">
                <button className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 text-gray-700 hover:border-red-500 hover:text-red-600 transition-colors bg-white">
                  <ChevronLeft size={20} />
                </button>
              </Link>
            </div>

            <div className="flex-1 text-right md:text-center">
              <h1 className="text-3xl md:text-5xl font-heading text-gray-800 mb-2">
                Our <span className="text-red-600">Gallery</span>
              </h1>
              <p className="text-gray-600 text-xs md:text-lg max-w-2xl ml-auto md:mx-auto px-2">
                A glimpse into our food, ambience, and dining experience
              </p>
            </div>

            <div className="w-[60px] md:w-[180px] hidden md:block" />
          </motion.div>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6">
            {images.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.02 }}
                className="mb-4 md:mb-6 break-inside-avoid overflow-hidden rounded-xl cursor-zoom-in"
                onClick={() => setSelectedImage(src)}
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 transition-colors duration-300"
          >
            {/* Clickable Area Background */}
            <div 
              className="absolute inset-0 z-0 cursor-zoom-out" 
              onClick={() => setSelectedImage(null)}
            />

            {/* Close Button - Larger touch target for mobile */}
            <button 
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors z-[110] p-2"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={32} className="md:w-10 md:h-10" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative z-10 max-w-full max-h-[90vh] p-4 flex items-center justify-center pointer-events-none"
            >
              <Image
                src={selectedImage}
                alt="Selected gallery image"
                width={1200}
                height={800}
                className="max-w-full max-h-[85vh] object-contain rounded-sm shadow-2xl pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ScrollToTop />
    </>
  );
}