"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

const images = [
  "/img1.jpg",
  "/img2.jpeg",
  "/img3.jpeg",
  "/img4.jpeg",
  "/img5.jpeg",
  "/img6.jpg",
  "/img7.png",
];

export default function AnimatedHero() {
  const carouselRef = useRef(null);
  const imageRefs = useRef([]);
  const progress = useRef({ value: 0 });
  const [_, forceUpdate] = useState(false); // re-render to register refs
  const radius = 480;

  useEffect(() => {
    const carousel = carouselRef.current;

    Observer.create({
      target: carousel,
      type: "wheel,touch,pointer",
      onPress: () => (carousel.style.cursor = "grabbing"),
      onRelease: () => (carousel.style.cursor = "grab"),
      onChange: (self) => {
        gsap.killTweensOf(progress.current);
        const delta =
          self.event.type === "wheel"
            ? self.deltaY * -0.001
            : self.deltaX * 0.01;

        gsap.to(progress.current, {
          duration: 1.2,
          ease: "power4.out",
          value: progress.current.value + delta,
        });
      },
    });

    const animate = () => {
      progress.current.value += 0.0013; // auto-rotate

      imageRefs.current.forEach((img, i) => {
        const theta =
          (i / images.length - progress.current.value) * Math.PI * 2;
        const x = Math.sin(theta) * radius;
        const z = Math.cos(theta) * radius;

        const scale = gsap.utils.mapRange(-radius, radius, 0.8, 1.4, z);
        const blur = gsap.utils.mapRange(-radius, radius, 4, 0, z);

        const isFront = Math.abs(z - radius) < 50;

        img.style.transform = `
          translate3d(${x}px, 0px, ${z}px)
          scale(${scale})
          rotateY(${(-theta * 180) / Math.PI}deg)
        `;

        img.style.zIndex = `${Math.floor(z)}`;
        img.style.opacity = scale < 0.95 ? 0.4 : 1;
        img.style.filter = `blur(${blur}px)`;
        img.style.boxShadow = isFront ? "0 10px 40px rgba(0,0,0,0.4)" : "none";
      });
    };

    gsap.ticker.add(animate);

    return () => {
      gsap.ticker.remove(animate);
      Observer.getAll().forEach((o) => o.kill());
    };
  }, []);

  const scrollBy = (steps = 1) => {
    gsap.to(progress.current, {
      duration: 1,
      ease: "power2.out",
      value: progress.current.value + steps / images.length,
    });
  };

  return (
    <>
      <section className="text-center max-w-5xl mx-auto mt-20 font-serif">
        <h2 className="text-[30px] md:text-[48px] font-semibold leading-snug uppercase">
          WE ARE A{" "}
          <span className="text-rose-600 font-bold">
            CREATIVE DIGITAL AGENCY
          </span>
        </h2>
        <p className="mt-2 text-lg tracking-wide text-[25px]">
          FOCUSING ON THE BEST SOLUTION FOR YOU
        </p>
      </section>

      <div className="h-screen w-full flex justify-center overflow-hidden">
        {/* Navigation Arrows
        <button
          onClick={() => scrollBy(-1)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 text-white text-4xl bg-black/50 p-2 rounded-full hover:bg-white/10"
        >
          &#8592;
        </button>
        <button
          onClick={() => scrollBy(1)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 text-white text-4xl bg-black/50 p-2 rounded-full hover:bg-white/10"
        >
          &#8594;
        </button> */}
        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="relative w-[1000px] h-[400px] mr-60 -mt-16"
          style={{
            perspective: "1400px",
            transformStyle: "preserve-3d",
          }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              ref={(el) => {
                imageRefs.current[i] = el;
                forceUpdate((s) => !s); // ensure ref works after initial render
              }}
              className="absolute top-1/2 left-1/2 w-[200px] h-[130px] rounded-xl overflow-hidden transition-transform duration-300"
              style={{
                transform: "translate3d(0px, 0px, 0px)",
                transformOrigin: "center",
                willChange: "transform, filter, opacity",
                transition:
                  "transform 0.3s ease, filter 0.3s ease, opacity 0.3s ease",
              }}
            >
              <Image
                src={src}
                alt={`carousel-${i}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
