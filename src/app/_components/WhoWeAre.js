"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function WhoWeAreAnimated() {
  const headingRef = useRef(null);
  const paragraphsRef = useRef(null);
  const buttonRef = useRef(null);
  const splitInstance = useRef(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      gsap.set(headingRef.current?.parentElement, { opacity: 1 });

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
            onLeaveBack: () => {
              gsap.set(splitInstance.current.words, { opacity: 0, y: 30 });
            },
          },
        }
      );

      gsap.fromTo(
        [paragraphsRef.current, buttonRef.current],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 2.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: paragraphsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      splitInstance.current?.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="px-4 py-20 -mt-60 font-serif bg-gray-100">
      <div className="w-full max-w-4xl mx-auto opacity-0">
        <p
          ref={headingRef}
          aria-hidden="true"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center"
        >
          WHO WE ARE
        </p>

        <div
          ref={paragraphsRef}
          className="text-base sm:text-lg leading-relaxed text-gray-800 space-y-6"
        >
          <p>
            We’re known for our data-driven results and head-turning creatives
            in digital marketing. We’re focused on your brand and look to build
            long-term relationships where you can trust us for everything from
            strategy to creatives — and even if you want a cup of coffee, we’ve
            got the best house blend just for you. Our creative digital
            marketing agency will help you at every step.
          </p>
          <p>
            We have a massive collection of skills and experience with our team
            in order to provide branding, marketing, advertising, and multimedia
            as well as websites. Our process consists of communication, more
            communication, and research to deliver expert results, catered to
            your vision.
          </p>
        </div>

        <button
          ref={buttonRef}
          className="bg-red-600 px-6 py-3 text-white rounded mt-10 transition duration-300 hover:bg-red-700 mx-auto block"
        >
          READ MORE
        </button>
      </div>
    </section>
  );
}
