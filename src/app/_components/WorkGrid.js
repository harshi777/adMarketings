"use client";

import { projects } from "@/data/projects";

import { useState } from "react";
import GridA from "./GridA";
import GridB from "./GridB";

export default function WorkGrid({ filter }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const chunks = [];
  if (filter === "all") {
    for (let i = 0; i < projects.length; i += 6) {
      chunks.push(projects.slice(i, i + 6));
    }
  }

  if (filter === "brand") {
    const filtered = projects.filter((project) =>
      project.tags.includes("Brand Creation")
    );
    for (let i = 0; i < filtered.length; i += 6) {
      chunks.push(filtered.slice(i, i + 6));
    }
  }

  if (filter === "development") {
    const filtered = projects.filter((project) =>
      project.tags.includes("Development")
    );
    for (let i = 0; i < filtered.length; i += 6) {
      chunks.push(filtered.slice(i, i + 6));
    }
  }

  if (filter === "digital") {
    const filtered = projects.filter((project) =>
      project.tags.includes("Digital Marketing")
    );
    for (let i = 0; i < filtered.length; i += 6) {
      chunks.push(filtered.slice(i, i + 6));
    }
  }

  if (filter === "videos") {
    const filtered = projects.filter((project) =>
      project.tags.includes("Videos")
    );
    for (let i = 0; i < filtered.length; i += 6) {
      chunks.push(filtered.slice(i, i + 6));
    }
  }

  console.log(chunks);
  return (
    <div className="px-6 py-12">
      {chunks.map((chunk, i) => {
        const offset = i * 6;
        return (
          <div key={i}>
            {i % 2 === 0 ? (
              <GridA
                projects={chunk}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
                offset={offset}
              />
            ) : (
              <GridB
                projects={chunk}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
                offset={offset}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
