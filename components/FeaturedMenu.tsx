"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const menuItems = [
  {
    id: 1,
    name: "Ilish Shorshe",
    description: "Hilsa cooked in traditional Bengali mustard gravy.",
    price: "₹499",
    image: "/featured/ilish.jpg",
    isSignature: true,
  },
  {
    id: 2,
    name: "Mutton Kosha",
    description: "Slow-cooked Bengali mutton curry rich with spices.",
    price: "₹480",
    image: "/featured/mutton.jpeg",
    isSignature: true,
  },
  {
    id: 3,
    name: "Chingri Malai Curry",
    description: "Juicy prawns simmered in creamy coconut gravy.",
    price: "₹350",
    image: "/featured/malaicurry.jpg",
    isSignature: true,
  },
  {
    id: 4,
    name: "Aloo Posto",
    description: "Potatoes cooked with poppy seed paste, a Bengali comfort classic.",
    price: "₹170",
    image: "/featured/alooposto.jpg",
  },
  {
    id: 5,
    name: "Cholar Dal",
    description: "Sweet Bengal-style chana dal traditionally paired with luchi.",
    price: "₹90",
    image: "/featured/cholardal.jpg",
  },
  {
    id: 6,
    name: "Shukto",
    description: "Traditional Bengali vegetable medley with subtle bitter notes.",
    price: "₹165",
    image: "/featured/shukto.webp",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function FeaturedMenu() {
  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6" id="menu">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-gray-800 mb-3 md:mb-4">
            Featured <span className="text-red-600">Dishes</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Handpicked dishes that represent the soul of Bengali cuisine
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {menuItems.map((dish) => (
            <motion.div
              key={dish.id}
              variants={item}
              className="relative flex flex-col sm:flex-row h-auto sm:h-[280px] overflow-hidden bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100"
            >
              
              {/* IMAGE CONTAINER: Static, no zoom */}
              <div className="relative w-full h-48 sm:h-full sm:absolute sm:top-0 sm:right-0 sm:w-1/2">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover" // Removed scale and hover scale classes
                />
                {/* adaptive gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent sm:bg-gradient-to-r sm:from-white sm:via-white/60 sm:to-transparent"></div>
              </div>

              {/* CONTENT AREA */}
              <div className="relative p-6 flex flex-col justify-between w-full sm:w-[60%] z-10 bg-white sm:bg-transparent">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                    {dish.name}
                  </h3>

                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed line-clamp-3">
                    {dish.description}
                  </p>
                </div>

                <p className="text-2xl font-bold text-red-600 mt-4 sm:mt-0">
                  {dish.price}
                </p>
              </div>

            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12 md:mt-16">
          <Link href="/menu">
            <button className="relative overflow-hidden px-10 py-4 border-2 border-red-600 text-red-600 font-bold text-base rounded-full group transition-colors duration-300">
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                View Full Menu
              </span>
              <span className="absolute inset-0 bg-red-600 scale-x-0 origin-center transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
            </button>
          </Link>
        </div>

      </div>
    </section>
  )
}