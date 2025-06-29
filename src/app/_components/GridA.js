"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function GridA({
  projects,
  setHoveredIndex,
  hoveredIndex,
  offset,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8 mb-10">
      {projects.map((project, index) => {
        const globalIndex = offset + index;
        const isHovered = hoveredIndex === globalIndex;

        return (
          <motion.div
            key={index}
            layout
            onMouseEnter={() => setHoveredIndex(globalIndex)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ scale: 1, opacity: 1 }}
            animate={{
              scale: hoveredIndex === null ? 1 : isHovered ? 1.1 : 0.9,
              opacity: hoveredIndex === null ? 1 : isHovered ? 1 : 0.6,
            }}
            transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
            className={`group relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 cursor-pointer
              ${
                index % 3 === 0 || index === 4
                  ? "md:col-span-2 aspect-[4/2]"
                  : "aspect-square"
              }`}
          >
            <Image
              src={project.cover}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-gray-900/70 to-slate-800/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-2xl" />
              <div className="relative z-20 text-white text-center space-y-4 opacity-0 group-hover:opacity-100 transition-all duration-700 px-4 sm:px-6">
                <div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 bg-red-500 rounded-full flex items-center justify-center shadow-md">
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold">
                  {project.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-300">
                  {project.tags.join(" | ")}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
