"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Food Blogger",
    text: "Jora Ilish serves the most authentic Bengali cuisine I've ever tasted outside of Kolkata. Every bite is a journey back to my grandmother's kitchen.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=priya",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Regular Customer",
    text: "The ambiance is as delightful as the food. Been visiting for 3 years now and they never disappoint. The Kosha Mangsho is absolutely divine.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=rajesh",
  },
  {
    id: 3,
    name: "Ananya Dutta",
    role: "Event Organizer",
    text: "We hosted our wedding reception here and it was perfect. The catering team was professional, and the food was the talk of the event!",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=ananya",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function Testimonials() {
  return (
    <section className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-bengal-600 font-semibold mb-2">TESTIMONIALS</p>
          <h2 className="text-4xl md:text-5xl font-heading text-gray-800 mb-4">
            What Our Guests <span className="text-bengal-600">Say</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real reviews from our beloved patrons
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={item}
              className="bg-warm-50 rounded-2xl p-8 relative hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <Quote className="text-bengal-100 absolute top-6 right-6" size={32} />

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-bengal-600 text-bengal-600"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 leading-relaxed mb-8 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-bengal-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
