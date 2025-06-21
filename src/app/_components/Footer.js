"use client";

import Link from "next/link";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12 font-serif">
      <div className="max-w-7xl mx-auto flex flex-col justify-center ml-16 lg:flex-row lg:justify-between gap-10">
        <div className="flex flex-col items-start">
          <h3 className="text-2xl font-semibold">GET IN TOUCH</h3>
          <div className="flex flex-wrap gap-3 mt-4">
            <SocialIcon
              url="https://www.facebook.com/imadmarketings/"
              style={{ height: 40, width: 40 }}
            />
            <SocialIcon
              url="https://www.instagram.com/imadmarketings/"
              style={{ height: 40, width: 40 }}
            />
            <SocialIcon
              url="https://x.com/imadmarketings?t=jco9Yhi2CHfTfSEqEC4i2w&s=09"
              style={{ height: 40, width: 40 }}
            />
            <SocialIcon
              url="https://www.linkedin.com/company/imadmarketings/posts/?feedView=all"
              style={{ height: 40, width: 40 }}
            />
            <SocialIcon
              url="https://za.pinterest.com/ad_marketings/"
              style={{ height: 40, width: 40 }}
            />
            <SocialIcon
              url="https://www.youtube.com/channel/UCPdihUC3mbrEnBvTepiTOTA"
              style={{ height: 40, width: 40 }}
            />
          </div>
        </div>

        <div className="flex flex-col text-left lg:text-left">
          <h4 className="text-2xl font-semibold mb-2">QUICK LINKS</h4>
          <Link href="/" className="hover:text-rose-400">
            Home
          </Link>
          <Link href="/portfolio" className="hover:text-rose-400">
            Portfolio
          </Link>
          <Link href="/about" className="hover:text-rose-400">
            About
          </Link>
          <Link href="/contact" className="hover:text-rose-400">
            Contact
          </Link>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-2xl font-semibold">INDIA</h3>
            <p className="text-sm text-gray-300 mt-1">
              BTM Layout, 2nd Stage, Bangalore, India
              <br />
              <span className="block mt-1">india@admarketings.com</span>
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">SOUTH AFRICA</h3>
            <p className="text-sm text-gray-300 mt-1">
              64 Lechwe St, Old Pretoria Road, Midrand
              <br />
              South Africa
              <br />
              <span className="block mt-1">sa@admarketings.com</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <input
            type="email"
            placeholder="Your Email"
            className="h-10 w-64 text-black px-4 rounded"
          />
          <button className="bg-red-600 hover:bg-red-700 transition-colors mt-4 h-10 w-64 rounded">
            Subscribe
          </button>
        </div>
      </div>
      <div className="mt-10 text-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm text-white underline hover:text-rose-400 transition"
        >
          ↑ Back to Top
        </button>
      </div>
    </footer>
  );
}

export default Footer;
