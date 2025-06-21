"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function RotatingCTA() {
  const svgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(svgRef.current, {
        rotate: 360,
        duration: 10,
        ease: "linear",
        repeat: -1,
        transformOrigin: "center center",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 w-28 h-28">
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute w-full h-full rounded-full overflow-hidden bg-red-500 flex items-center justify-center">
          <svg
            ref={svgRef}
            viewBox="0 0 100 100"
            className="w-full h-full"
            style={{ transformOrigin: "50% 50%" }}
          >
            <defs>
              <path
                id="circlePath"
                d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                fill="none"
              />
            </defs>
            <text fill="white" fontSize="8" fontWeight="bold">
              <textPath
                href="#circlePath"
                startOffset="50%"
                textAnchor="middle"
              >
                LET&apos;S TALK • LET&apos;S TALK • LET&apos;S TALK • LET&apos;
                • LET&apos;S TALK •
              </textPath>
            </text>
          </svg>
        </div>

        <div className="w-2 h-2 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 z-10"></div>
      </div>
    </div>
  );
}
