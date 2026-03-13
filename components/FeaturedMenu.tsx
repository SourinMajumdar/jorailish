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
    <section className="bg-white py-20 md:py-20 px-6" id="menu">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-heading text-gray-800 mb-4">
            Featured <span className="text-red-600">Dishes</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Handpicked dishes that represent the soul of Bengali cuisine
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {menuItems.map((dish) => (
            <motion.div
              key={dish.id}
              variants={item}
              className="relative flex h-[280px] overflow-hidden bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100"
            >
              
              <div className="relative p-6 flex flex-col justify-between w-[60%] z-10 bg-white">
                <div>
                  {/* {dish.isSignature && (
                    <div className="mb-2">
                      <span className="bg-red-50 text-red-600 text-[10px] tracking-widest font-bold px-2 py-1 rounded">
                        SIGNATURE
                      </span>
                    </div>
                  )} */}

                  <h3 className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors">
                    {dish.name}
                  </h3>

                  <p className="text-gray-500 text-2xs leading-relaxed line-clamp-3">
                    {dish.description}
                  </p>
                </div>

                <p className="text-2xl font-bold text-red-600">
                  {dish.price}
                </p>
              </div>

              <div className="absolute top-0 left-1/2 w-1/2 h-full">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover scale-110"
                />

              <div className="absolute inset-0 bg-gradient-to-r from-white from-10% via-white/70 via-40% to-transparent"></div>
              </div>

            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <Link href="/menu">
            <button className="relative overflow-hidden px-12 py-4 border-2 border-red-600 text-red-600 font-semibold rounded-full group transition-colors duration-300">
              
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