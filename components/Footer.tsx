"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Twitter } from "lucide-react"

const footerLinks = {
  restaurant: [
    { label: "About Us", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Reservations", href: "#booking" },
    { label: "Events", href: "#events" },
  ],
  info: [
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms & Conditions", href: "#terms" },
    { label: "Careers", href: "#careers" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-heading text-bengal-600 mb-4">Jora Ilish</h3>
            <p className="text-gray-400 mb-6">
              Experience authentic Bengali cuisine in the heart of Guwahati, where tradition meets taste.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2 }}
                  className="bg-bengal-600 p-2 rounded-full hover:bg-bengal-700 transition"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Restaurant</h4>
            <ul className="space-y-3">
              {footerLinks.restaurant.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-bengal-600 transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Info Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Information</h4>
            <ul className="space-y-3">
              {footerLinks.info.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-bengal-600 transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-bengal-600 mt-1 flex-shrink-0" />
                <p className="text-gray-400">
                  Pan Bazaar, Guwahati<br />
                  Assam, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-bengal-600 flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-gray-400 hover:text-bengal-600 transition"
                >
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-bengal-600 flex-shrink-0" />
                <a
                  href="mailto:hello@jorailish.com"
                  className="text-gray-400 hover:text-bengal-600 transition"
                >
                  hello@jorailish.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={20} className="text-bengal-600 flex-shrink-0" />
                <p className="text-gray-400">
                  12:00 PM - 11:00 PM<br />
                  (Closed on Mondays)
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>&copy; 2026 Jora Ilish. All rights reserved by Aami Bangali.</p>
            <p>Crafted with ❤️ by Aami Bangali Group</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
