"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { reviews } from "@/data/reviews"

const REVIEWS_PER_PAGE = 3

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 relative transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
      <Quote
        className="text-red-100 absolute top-4 sm:top-6 right-4 sm:right-6"
        size={24}
      />

      {/* Stars */}
      <div className="flex gap-1 mb-4 sm:mb-5">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className="fill-amber-400 text-amber-400"
          />
        ))}
      </div>

      {/* Review */}
      <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 italic flex-1 text-justify text-xs sm:text-sm md:text-base">
        "{review.review}"
      </p>

      {/* Sub ratings */}
      <div className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
        Food {review.food}/5 · Service {review.service}/5 · Atmosphere {review.atmosphere}/5
      </div>

      {/* Author */}
      <p className="font-semibold text-gray-800 text-sm md:text-base">{review.name}</p>
      <p className="text-red-600 text-xs sm:text-sm">Google Maps Review</p>
    </div>
  )
}

export default function Testimonials() {
  const totalPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE)
  const [page, setPage] = useState(0)

  const goNext = useCallback(() => {
    setPage((p) => (p + 1) % totalPages)
  }, [totalPages])

  const goPrev = useCallback(() => {
    setPage((p) => (p - 1 + totalPages) % totalPages)
  }, [totalPages])

  useEffect(() => {
    const interval = setInterval(goNext, 5000)
    return () => clearInterval(interval)
  }, [goNext])

  const slideReviews = reviews.slice(
    page * REVIEWS_PER_PAGE,
    page * REVIEWS_PER_PAGE + REVIEWS_PER_PAGE
  )

  return (
    <section className="bg-orange-100 py-16 md:py-32 px-4 sm:px-6" id="testimonials">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <p className="text-red-600 font-semibold text-sm mb-2">TESTIMONIALS</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-gray-800 mb-3 md:mb-4">
            What Our Guests <span className="text-red-600">Say</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Real reviews from our beloved patrons
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative px-0 md:px-12">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={page}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
              >
                {slideReviews.map((review, index) => (
                  <ReviewCard
                    key={`${page}-${review.name}-${index}`}
                    review={review}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrow Buttons */}
           {totalPages > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous reviews"
                className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 md:-translate-x-12 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:border-red-200 hover:text-red-600 transition-colors z-10"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next reviews"
                className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 md:translate-x-12 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:border-red-200 hover:text-red-600 transition-colors z-10"
              >
                <ChevronRight size={20}/>
              </button>
            </>
          )}

          {/* Pagination dots */}
           {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8 md:mt-10">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setPage(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-colors ${
                    i === page
                      ? "bg-red-600 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Google Reviews Button */}
        <div className="text-center mt-10 md:mt-14">
          <a
            href="https://maps.app.goo.gl/Ks6hLjug1yUET5pe8"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden px-12 py-4 border-2 border-red-600 text-red-600 font-semibold rounded-full group transition-colors duration-300 inline-block"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              View All Reviews on Google Maps
            </span>
            <span className="absolute inset-0 bg-red-600 scale-x-0 origin-center transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
          </a>
        </div>
      </div>
    </section>
  )
}