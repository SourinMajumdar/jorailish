"use client"

import { motion } from "framer-motion"
import AboutCarousel from "@/components/AboutCarousel"
import { MapPin, Clock, Utensils } from "lucide-react"

export default function About() {
return (
<motion.section
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, ease: "easeOut" }}
viewport={{ once: true }}
className="bg-white py-20 md:py-24 px-6"
id="about"
> <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-14 md:mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-heading text-gray-800 mb-4">
        About <span className="text-red-600">Us</span>
      </h2>

      <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
        Where tradition meets taste in the heart of Guwahati
      </p>
    </motion.div>


    {/* Two Column Layout */}
    <div className="grid md:grid-cols-2 gap-20 md:gap-30 items-start">

      {/* LEFT COLUMN */}
      <div className="space-y-8">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <AboutCarousel />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-6 py-6 border-y border-gray-200"
        >
          <div className="text-center">
            <p className="text-3xl md:text-5xl font-heading text-red-600">
              8+
            </p>
            <p className="text-gray-600 text-sm mt-2">
              Years of Excellence
            </p>
          </div>

          <div className="text-center">
            <p className="text-3xl md:text-5xl font-heading text-red-600">
              100+
            </p>
            <p className="text-gray-600 text-sm mt-2">
              Authentic Recipes
            </p>
          </div>

          <div className="text-center">
            <p className="text-3xl md:text-5xl font-heading text-red-600">
              10k+
            </p>
            <p className="text-gray-600 text-sm mt-2">
              Happy Guests
            </p>
          </div>
        </motion.div>

      </div>



      {/* RIGHT COLUMN */}
      <div className="space-y-6">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-700 leading-relaxed font-light text-justify"
        >
          Jora Ilish celebrates the rich culinary heritage of Bengal.
          Inspired by traditional kitchens and timeless recipes,
          our restaurant brings authentic Bengali flavours to Guwahati.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-700 leading-relaxed font-light text-justify"
        >
          From Shorshe Ilish to Kosha Mangsho and Chingri Malai Curry,
          every dish reflects the warmth of Bengali hospitality
          and the joy of sharing food with loved ones.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-700 leading-relaxed font-light text-justify"
        >
          Our space is perfect for family gatherings, celebrations,
          and small parties. Guests can enjoy a comfortable,
          family-friendly atmosphere with amenities such as
          free Wi-Fi, clean restrooms, and convenient free parking,
          making every visit relaxed and enjoyable.
        </motion.p>


        {/* Info Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-15 grid grid-cols-2 gap-x-10 gap-y-6 pt-4"
        >

          {/* Location */}
          <div className="flex items-start gap-3">
            <MapPin className="text-red-600 mt-1" size={20} />

            <div>
              <p className="font-semibold text-gray-800">
                Location
              </p>

              <p className="text-gray-600 text-sm">
                Pandu Port Rd, Adabari Tiniali <br />
                Pandu, Guwahati, Assam 781012
              </p>
            </div>
          </div>


          {/* Maps Button */}
          <div className="flex items-start">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Pandu+Port+Rd+Adabari+Tiniali+Pandu+Guwahati"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border-2 border-red-600 text-red-600 font-semibold rounded-full hover:bg-red-600 hover:text-white transition-colors"
            >
              Open in Google Maps
            </a>
          </div>


          {/* Opening Hours */}
          <div className="flex items-start gap-3">
            <Clock className="text-red-600 mt-1" size={20} />

            <div>
              <p className="font-semibold text-gray-800">
                Opening Hours
              </p>

              <p className="text-gray-600 text-sm">
                Monday – Sunday <br />
                11:30 AM – 10:30 PM
              </p>
            </div>
          </div>


          {/* Services */}
          <div className="flex items-start gap-3">
            <Utensils className="text-red-600 mt-1" size={20} />

            <div>
              <p className="font-semibold text-gray-800">
                Services
              </p>

              <p className="text-gray-600 text-sm">
                Dine-in · Takeaway <br />
                No-contact Delivery
              </p>
            </div>
          </div>

        </motion.div>

      </div>

    </div>

  </div>
</motion.section>

)
}
