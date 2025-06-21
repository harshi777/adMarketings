"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import {
  ChartBarIcon,
  CursorArrowRaysIcon,
  DesktopComputerIcon,
  LightBulbIcon,
  SparklesIcon,
} from "@heroicons/react/outline";

gsap.registerPlugin(SplitText, ScrollTrigger);

const services = [
  {
    title: "BRAND CREATION",
    description:
      "Your company needs a personality, and that’s where we come in. A brand communicates a specific product or service to a niche audience. We use specialized resources in order to find that voice and make your company more 3 dimensional.",
    icon: (
      <LightBulbIcon className="h-8 w-8 text-black ml-[100px] group-hover:text-rose-600 transition-colors duration-300" />
    ),
  },
  {
    title: "CREATIVE",
    description:
      "We are currently in the digital revolution, everything is online! Through research, SEO, E-Commerce, and strategic planning we communicate your brand online, making it viral.",
    icon: (
      <SparklesIcon className="h-8 w-8 text-black ml-[100px]  group-hover:text-rose-600 transition-colors duration-300" />
    ),
  },
  {
    title: "DIGITAL MARKETING",
    description:
      "Marketing is experimenting with illusions, taking risks, breaking rules, making mistakes & having fun. Having a smart idea is just not adequate but marketing those smart ideas in a unique way is. We separate you from the rest, find your audience and communicate it diligently.",
    icon: (
      <ChartBarIcon className="h-8 w-8 text-black ml-[100px]  group-hover:text-rose-600 transition-colors duration-300" />
    ),
  },
  {
    title: "UI AND UX DEVELOPMENT",
    description:
      "Your website is the face of your brand. We have developers with a keen eye for the details in order to assure that face is flawless.",
    icon: (
      <DesktopComputerIcon className="h-8 w-8 text-black ml-[100px] group-hover:text-rose-600 transition-colors duration-300" />
    ),
  },
];

export default function Services() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const splitInstance = useRef(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      gsap.set(headingRef.current.parentElement, { opacity: 1 });

      splitInstance.current = new SplitText(headingRef.current, {
        type: "words",
        aria: "hidden",
      });

      gsap.fromTo(
        splitInstance.current.words,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "sine.out",
          stagger: 0.05,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play reset play reset",
            onLeaveBack: () =>
              gsap.set(splitInstance.current.words, { opacity: 0, y: 30 }),
            markers: false,
          },
        }
      );

      const boxes = gsap.utils.toArray(".service-box");

      boxes.forEach((box) => {
        gsap.fromTo(
          box,
          {
            opacity: 0,
            rotateY: -90,
          },
          {
            scrollTrigger: {
              trigger: box,
              start: "top 90%",
              toggleActions: "restart none none reverse",
            },
            opacity: 1,
            rotateY: 0,
            duration: 1.2,
            ease: "back.out(1.7)",
          }
        );
      });
    });

    return () => {
      splitInstance.current?.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen px-4 mt-20 py-20 text-center font-serif"
    >
      <h2 ref={headingRef} className="text-4xl font-bold mb-12">
        OUR SERVICES
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-box opacity-0 translate-y-10 group bg-white rounded-3xl p-6 shadow-md transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer perspective-1000"
          >
            <div className="relative transform-style-3d">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-rose-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
