"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const logos = [
  "/astrumLogo.png",
  "/aidgearsLogo.png",
  "/afridermLogo.png",
  "/norahsLogo.jpg",
  "/silkLogo.jpg",
  "/siscoLogo.jpg",
];

export default function OurClients() {
  const headingRef = useRef(null);
  const splitRef = useRef(null);
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!headingRef.current) return;

      splitRef.current = new SplitText(headingRef.current, {
        type: "words",
        aria: "hidden",
      });

      gsap.set(headingRef.current.parentElement, { opacity: 1 });

      gsap.fromTo(
        splitRef.current.words,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          ease: "power3.out",
          duration: 1.2,
          stagger: 0.08,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        }
      );
    });

    return () => {
      splitRef.current?.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  useEffect(() => {
    if (!trackRef.current) return;

    const images = trackRef.current.querySelectorAll("img");
    let loaded = 0;

    images.forEach((img) => {
      if (img.complete) {
        loaded++;
      } else {
        img.onload = img.onerror = () => {
          loaded++;
          if (loaded === images.length) setImagesLoaded(true);
        };
      }
    });

    if (loaded === images.length) setImagesLoaded(true);
  }, []);

  useEffect(() => {
    if (!imagesLoaded || !trackRef.current) return;

    const logoSet = trackRef.current.querySelector(".logo-set");
    const logoSetWidth = logoSet.offsetWidth;

    const tween = gsap.to(trackRef.current, {
      x: `-=${logoSetWidth}`,
      duration: 25,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % logoSetWidth),
      },
    });

    return () => tween.kill();
  }, [imagesLoaded]);

  return (
    <section className="py-20 px-4 font-serif bg-gray-50 -mt-10">
      <div className="max-w-5xl mx-auto text-center opacity-0">
        <h2
          ref={headingRef}
          aria-hidden="true"
          className="text-4xl font-bold text-gray-900 mb-6"
        >
          OUR LOVELY CLIENTS
        </h2>

        {/* Description */}
        <p className="text-base text-gray-700 max-w-3xl mx-auto">
          We’re the creative digital marketing agency, the innovators, the ones
          who know exactly what your brand needs to be above the rest. We’re
          your perfect partner, with our quality services and result-driven
          strategies, we’ve got everything you’ve been missing. From minimalist
          to quirky and funky, we have worked with various brands to meet their
          visions out to the world. We have developed a unique relationship with
          each of these brands, and continue to maintain that relationship. We
          believe in sustainable relationships and connections to provide the
          results you are looking for.
        </p>
      </div>

      <div className="overflow-hidden w-full mt-10" ref={wrapperRef}>
        <div ref={trackRef} className="flex w-max gap-12 sm:gap-16">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="logo-set flex gap-12 sm:gap-16 px-2">
              {logos.map((logo, index) => (
                <div
                  key={`${i}-${index}`}
                  className="relative h-12 w-[100px] sm:h-16 sm:w-[120px] grayscale hover:grayscale-0 transition duration-300"
                >
                  <Image
                    src={logo}
                    alt={`Client logo ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100px, 120px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
