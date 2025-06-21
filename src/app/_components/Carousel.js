"use client";

import gsap from "gsap";
import { Observer } from "gsap/Observer";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(Observer);

const images = [
  "/img1.jpg",
  "/img2.jpeg",
  "/img3.jpeg",
  "/img4.jpeg",
  "/img5.jpeg",
  "/img6.jpg",
  "/img7.jpg",
];

function Carousel() {
  const carouselRef = useRef(null);
  const imageRefs = useRef([]);
  const progress = useRef({ value: 0 });
  const [_, forceUpdate] = useState(false);
  const [radius, setRadius] = useState(480);

  useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth;
      if (width < 400) setRadius(140);
      else if (width < 640) setRadius(200);
      else if (width < 768) setRadius(280);
      else if (width < 1024) setRadius(360);
      else setRadius(480);
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

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
      progress.current.value += 0.0013;

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
  }, [radius]);

  return (
    <div className="relative flex flex-row justify-around items-center h-[500px] sm:h-[550px] md:h-[600px] overflow-visible z-10 mt-[-60px] mb-16">
      <div
        ref={carouselRef}
        className="relative flex flex-row justify-evenly right-28 w-full max-w-[1000px] h-full m:bg-fuchsia-400"
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
              forceUpdate((s) => !s);
            }}
            className="absolute top-52 left-1/2 w-[120px] h-[80px] sm:w-[150px] sm:h-[100px] md:w-[180px] md:h-[120px] lg:w-[200px] lg:h-[130px] rounded-xl overflow-hidden bg-red-600"
            style={{
              transform: "translate(-50%, -50%)",
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
  );
}

export default Carousel;
