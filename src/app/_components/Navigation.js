// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { MenuIcon, XIcon } from "@heroicons/react/outline";

// export default function Navigation() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="z-50 absolute right-4 top-5 font-serif text-lg">
//       {/* Mobile Menu Button */}
//       <div className="md:hidden flex justify-end">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="text-black focus:outline-none"
//           aria-label="Toggle Menu"
//         >
//           {isOpen ? (
//             <XIcon className="w-6 h-6" />
//           ) : (
//             <MenuIcon className="w-6 h-6" />
//           )}
//         </button>
//       </div>

//       {/* Navigation Links */}
//       <ul
//         className={`${
//           isOpen ? "block" : "hidden"
//         } md:flex md:gap-16 md:items-center absolute md:static bg-white md:bg-transparent right-0 top-14 md:top-0 px-4 py-3 md:px-6 md:py-0 shadow-md md:shadow-none rounded-md md:rounded-none w-56 md:w-auto -mt-3`}
//       >
//         <li className="mb-2 md:mb-0">
//           <Link
//             href="/Home"
//             className="hover:text-rose-500 transition-colors block"
//             onClick={() => setIsOpen(false)}
//           >
//             Portfolio
//           </Link>
//         </li>
//         <li className="mb-2 md:mb-0">
//           <Link
//             href="/Portfolio"
//             className="hover:text-rose-500 transition-colors block"
//             onClick={() => setIsOpen(false)}
//           >
//             About Us
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/account"
//             className="hover:text-rose-500 transition-colors flex items-center gap-2"
//             onClick={() => setIsOpen(false)}
//           >
//             Let&apos;s talk
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  return (
    <nav className="relative font-serif text-[30px">
      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-10 items-center">
        <li>
          <Link href="/Home" className="hover:text-rose-500 transition-colors">
            SHOWCASE
          </Link>
        </li>
        <li>
          <Link
            href="/Portfolio"
            className="hover:text-rose-500 transition-colors"
          >
            STRENGTH
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="hover:text-rose-500 transition-colors"
          >
            SAY HELLO
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="hover:text-rose-500 transition-colors"
          >
            COMPANY
          </Link>
        </li>
      </ul>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <XIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg w-[90vw] max-w-[240px] py-4 px-6 flex flex-col gap-4 z-50">
          <li>
            <Link
              href="/Home"
              className="block hover:text-rose-500"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/Portfolio"
              className="block hover:text-rose-500"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/account"
              className="block hover:text-rose-500"
              onClick={() => setIsOpen(false)}
            >
              Let&apos;s Talk
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
