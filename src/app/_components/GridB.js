"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function GridB({
  projects,
  setHoveredIndex,
  hoveredIndex,
  offset,
}) {
  const isSingle = projects.length === 1;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
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
              ${isSingle ? "md:col-span-3 aspect-[16/5]" : ""}
              ${
                !isSingle
                  ? index === 0
                    ? "row-span-3 aspect-auto"
                    : index === 4
                    ? "row-span-2 aspect-auto"
                    : "aspect-[4/3]"
                  : ""
              }`}
          >
            <Image
              src={project.cover}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-gray-900/70 to-slate-800/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-2xl" />
              <div className="relative z-20 text-white text-center space-y-4 opacity-0 group-hover:opacity-100 transition-all duration-700">
                <div className="mx-auto w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-md">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold">{project.title}</h2>
                <p className="text-sm text-gray-300">
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
