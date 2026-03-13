"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/navbar";
import { menu } from "@/data/menu";
import ScrollToTop from "@/components/ScrollToTop";
import { ChevronLeft, Search } from "lucide-react";

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

  // Simulated loading
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

      <main className="relative bg-white pt-36 pb-24 px-6 overflow-hidden">
        {/* Watermark */}
        <div className="pointer-events-none fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 z-0">
          <Image
            src="/jorailish2.png"
            alt="Jora Ilish watermark"
            width={600}
            height={600}
            className="w-[600px] max-w-[80vw] h-auto"
          />
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="flex items-center justify-between mb-12"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="w-[180px] flex justify-start">
              <Link href="/#menu">
                <button className="flex items-center gap-2 px-3 py-2 rounded-full border border-gray-500 text-gray-700 text-sm hover:border-red-500 hover:text-red-600 transition-colors">
                  <ChevronLeft size={20} />
                </button>
              </Link>
            </div>

            <h1 className="text-5xl font-heading text-center flex-1">
              Our <span className="text-red-700">Menu</span>
            </h1>

            <div className="relative w-[180px]">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-400 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-200"
              />
            </div>
          </motion.div>

          {/* Categories */}
          {!searchQuery && (
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {menu.map((section) => (
                <button
                  key={section.category}
                  onClick={() => setActiveCategory(section.category)}
                  className={`px-6 py-3 rounded-full border transition ${
                    activeCategory === section.category
                      ? "bg-red-600 text-white border-red-600"
                      : "border-gray-300 hover:border-red-500"
                  }`}
                >
                  {section.category}
                </button>
              ))}
            </div>
          )}

          {/* Menu List */}
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div
                  key="skeleton"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-start border-b pb-3 animate-pulse"
                    >
                      <div className="space-y-2">
                        <div className="h-4 w-40 bg-gray-200 rounded" />
                        <div className="h-3 w-24 bg-gray-100 rounded" />
                      </div>

                      <div className="h-4 w-16 bg-gray-200 rounded" />
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="list"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="space-y-6"
                >
                  {(searchQuery ? filteredItems : activeMenu?.items)?.map(
                    (item, i) => (
                      <motion.div
                        key={`${item.name}-${i}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, delay: i * 0.02 }}
                        className="flex justify-between items-start border-b pb-3"
                      >
                        <div>
                          <h3 className="text-lg font-medium">
                            {highlightMatch(item.name)}

                            {item.unit &&
                              item.unit.toLowerCase().includes("pc") && (
                                <span className="ml-2 text-sm text-gray-500">
                                  ({item.unit})
                                </span>
                              )}
                          </h3>

                          {searchQuery && (
                            <p className="text-xs text-gray-400 mt-1">
                              {item.category}
                            </p>
                          )}
                        </div>

                        <div className="text-right">
                          {item.unit === "Full / Half" && (
                            <p className="text-xs text-gray-500 mb-1">
                              {item.unit}
                            </p>
                          )}

                          {item.altPrice ? (
                            <p className="text-red-600 font-semibold">
                              {item.price}
                              <span className="text-gray-600 text-sm ml-2">
                                / {item.altPrice}
                              </span>
                            </p>
                          ) : (
                            <p className="text-red-600 font-semibold">
                              {item.price}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    )
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
