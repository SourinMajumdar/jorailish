"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/navbar";
import { menu } from "@/data/menu";
import ScrollToTop from "@/components/ScrollToTop";
import { ChevronLeft, Search, X } from "lucide-react"; // Added X icon

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(menu[0].category);
  const [loading, setLoading] = useState(true);

  const activeMenu = menu.find(
    (section) => section.category === activeCategory
  );

  const allItems = menu.flatMap((section) =>
    section.items.map((item) => ({
      ...item,
      category: section.category,
    }))
  );

  const filteredItems = allItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const highlightMatch = (text: string) => {
    if (!searchQuery) return text;
    const parts = text.split(new RegExp(`(${searchQuery})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === searchQuery.toLowerCase() ? (
        <span key={i} className="text-red-600 font-semibold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [activeCategory, searchQuery]);

  return (
    <>
      <Navbar />

      <main className="relative bg-white pt-28 md:pt-36 pb-24 px-4 md:px-6 overflow-hidden">
        {/* Watermark */}
        <div className="pointer-events-none fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 z-0">
          <Image
            src="/jorailish2.png"
            alt="Jora Ilish watermark"
            width={600}
            height={600}
            className="w-[600px] max-w-[80vw] h-auto"
          />
        </div>

        <div className="relative max-w-6xl mx-auto z-10">
          
          {/* Header Section */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10 md:mb-16"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between w-full md:w-auto md:flex-1">
              <div className="md:w-[120px] lg:w-[180px] flex justify-start">
                <Link href="/#menu">
                  <button className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 text-gray-700 hover:border-red-500 hover:text-red-600 transition-colors bg-white">
                    <ChevronLeft size={20} />
                  </button>
                </Link>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading text-center flex-1">
                Our <span className="text-red-700">Menu</span>
              </h1>

              <div className="w-10 md:hidden" />
            </div>

            {/* FIXED SEARCH BAR */}
            <div className="relative w-full md:w-[240px] lg:w-[300px]">
              {/* Magnifying Glass Icon */}
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 z-20 pointer-events-none"
              />
              
              <input
                type="text"
                placeholder="Search for a dish..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3 md:py-2.5 rounded-full border border-gray-300 text-base md:text-sm focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all bg-white z-10 relative"
              />

              {/* Clear Icon (Cross) */}
              <AnimatePresence>
                {searchQuery && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-red-600 transition-colors z-20"
                  >
                    <X size={18} />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Categories */}
          {!searchQuery && (
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16">
              {menu.map((section) => (
                <button
                  key={section.category}
                  onClick={() => setActiveCategory(section.category)}
                  className={`px-5 py-2.5 md:px-6 md:py-3 rounded-full border text-sm md:text-base transition-all duration-300 ${
                    activeCategory === section.category
                      ? "bg-red-600 text-white border-red-600 shadow-lg shadow-red-200"
                      : "border-gray-300 hover:border-red-400 bg-white"
                  }`}
                >
                  {section.category}
                </button>
              ))}
            </div>
          )}

          {/* Menu Items List */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div
                  key="skeleton"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-8"
                >
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="flex justify-between items-start border-b border-gray-100 pb-4 animate-pulse">
                      <div className="space-y-3">
                        <div className="h-5 w-48 bg-gray-200 rounded" />
                        <div className="h-3 w-32 bg-gray-100 rounded" />
                      </div>
                      <div className="h-5 w-16 bg-gray-200 rounded" />
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="list"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  {(searchQuery ? filteredItems : activeMenu?.items)?.map((item, i) => (
                    <motion.div
                      key={`${item.name}-${i}`}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.03 }}
                      className="flex justify-between items-start border-b border-gray-100 pb-4 group"
                    >
                      <div className="flex-1 pr-4">
                        <h3 className="text-lg md:text-xl font-medium text-gray-800 group-hover:text-red-700 transition-colors">
                          {highlightMatch(item.name)}
                          {item.unit && item.unit.toLowerCase().includes("pc") && (
                            <span className="ml-2 text-sm text-gray-400 font-normal">
                              ({item.unit})
                            </span>
                          )}
                        </h3>
                        {searchQuery && (
                          <p className="text-xs text-red-500 mt-1 uppercase tracking-wider font-semibold">
                            {(item as any).category}
                          </p>
                        )}
                      </div>

                      <div className="text-right shrink-0">
                        {item.unit === "Full / Half" && (
                          <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-tighter mb-1">
                            {item.unit}
                          </p>
                        )}
                        <div className="text-lg md:text-xl font-bold text-red-600">
                          {item.price}
                          {item.altPrice && (
                            <span className="text-gray-400 text-sm md:text-base font-normal ml-2">
                              / {item.altPrice}
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {searchQuery && filteredItems.length === 0 && (
                    <div className="text-center py-20">
                      <p className="text-gray-400 text-lg">No dishes found matching "{searchQuery}"</p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      <ScrollToTop />
    </>
  );
}