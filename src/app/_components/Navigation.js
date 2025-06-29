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
    <nav className="relative text-[14px] z-50" role="navigation">
      <ul className="hidden md:flex gap-10 items-center">
        <li>
          <Link
            href="/portfolio"
            className="hover:text-rose-500 transition-colors"
          >
            SHOWCASE
          </Link>
        </li>
        <li>
          <Link
            href="/strength"
            className="hover:text-rose-500 transition-colors"
          >
            STRENGTH
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="hover:text-rose-500 transition-colors"
          >
            SAY HELLO
          </Link>
        </li>
        <li>
          <Link
            href="/company"
            className="hover:text-rose-500 transition-colors"
          >
            COMPANY
          </Link>
        </li>
      </ul>

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

      {isOpen && (
        <ul className="fixed top-[80px] right-4 rounded-lg bg-white shadow-lg w-[90vw] max-w-[240px] py-4 px-6 flex flex-col gap-4 z-50 transition-all">
          <li>
            <Link
              href="/portfolio"
              className="block hover:text-rose-500"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/strength"
              className="block hover:text-rose-500"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block hover:text-rose-500"
              onClick={() => setIsOpen(false)}
            >
              Let&apos;s Talk
            </Link>
          </li>
          <li>
            <Link
              href="/company"
              className="block hover:text-rose-500"
              onClick={() => setIsOpen(false)}
            >
              Company
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
