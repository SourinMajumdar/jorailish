"use client"

import { motion } from "framer-motion"
import { CalendarDays, Clock, Users, Phone, User } from "lucide-react"

export default function BookingSection() {
return ( 

  <section className="bg-orange-100 py-16 md:py-24 px-4 sm:px-6" id="booking"> <div className="max-w-5xl mx-auto">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-12 md:mb-16"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-gray-800 mb-3 md:mb-4">
        Reserve a <span className="text-red-600">Table</span>
      </h2>

      <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
        Planning a visit? Reserve your table in advance and enjoy an
        authentic Bengali dining experience.
      </p>
    </motion.div>


    {/* Booking Card */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 md:p-10"
    >

      <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

        {/* Name */}
        <div className="relative">
          <User className="absolute left-3 top-3 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Your Name"
            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:border-red-500"
          />
        </div>

        {/* Phone */}
        <div className="relative">
          <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:border-red-500"
          />
        </div>

        {/* Guests */}
        <div className="relative">
          <Users className="absolute left-3 top-3 text-gray-400" size={18} />
          <input
            type="number"
            placeholder="Number of Guests"
            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:border-red-500"
          />
        </div>

        {/* Date */}
        <div className="relative">
          <CalendarDays className="absolute left-3 top-3 text-gray-400" size={18} />
          <input
            type="date"
            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:border-red-500"
          />
        </div>

        {/* Time */}
        <div className="relative sm:col-span-2">
          <Clock className="absolute left-3 top-3 text-gray-400" size={18} />
          <input
            type="time"
            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:border-red-500 text-sm"
          />
        </div>

        {/* Message */}
        <textarea
          placeholder="Special requests (optional)"
          className="sm:col-span-2 border rounded-lg p-3 h-24 sm:h-28 focus:outline-none focus:border-red-500 text-sm"
        />

        {/* Submit */}
        <div className="sm:col-span-2 flex justify-center mt-2 sm:mt-4">
          <button
            type="button"
            className="relative overflow-hidden px-8 sm:px-12 py-3 sm:py-4 border-2 border-red-600 text-red-600 font-semibold text-sm sm:text-base rounded-full group"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Request Booking
            </span>

            <span className="absolute inset-0 bg-red-600 scale-x-0 origin-center transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
          </button>
        </div>

      </form>

      {/* Demo Notice
      <p className="text-center text-sm text-gray-500 mt-6">
        *Online reservations are currently a demo feature. Please call the
        restaurant for confirmed bookings.
      </p> */}

    </motion.div>

  </div>
</section>


)
}
