"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { testimonials } from "../../../public/testimonials";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, SplitText);

function Testimonials() {
  const cardsRef = useRef([]);
  const headingRef = useRef(null);
  const splitInstance = useRef(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!headingRef.current) return;

      splitInstance.current = new SplitText(headingRef.current, {
        type: "words",
        aria: "hidden",
      });

      gsap.set(headingRef.current.parentElement, { opacity: 1 });

      gsap.fromTo(
        splitInstance.current.words,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          ease: "power3.out",
          duration: 1,
          stagger: 0.12,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          scale: 0.8,
          y: 50,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      splitInstance.current?.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="p-10 text-center font-serif mt-10">
      <h1
        ref={headingRef}
        className="text-4xl font-bold mb-4 mt-10"
        aria-hidden="true"
      >
        TESTIMONIALS
      </h1>

      <p className="text-black mb-8">
        Google rating score: <span className="font-bold"> 4.9 </span> of 5
      </p>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-10 lg:px-20 mb-20">
        {testimonials.map((test, index) => (
          <div
            key={test.title}
            ref={(el) => (cardsRef.current[index] = el)}
            className="bg-white rounded-xl shadow-lg p-6 text-left opacity-0 transform scale-90"
          >
            <div className="mb-4">
              <Image
                src={test.logo}
                alt={test.title}
                width={80}
                height={80}
                className="object-contain mx-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              {test.title}
            </h3>
            <p className="text-gray-700 text-sm text-center">
              {test.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
