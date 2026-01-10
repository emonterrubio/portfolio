"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 left-0 right-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto py-8 px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/images/logos/e-logo.svg" 
            alt="Ed Monterrubio Logo" 
            width={68}
            height={68}
            className="object-contain"
          />
            <div className="hidden md:flex flex-col">
              <h1 className="text-2xl font-bold text-black leading-tight font-heading">Ed Monterrubio</h1>
              <p className="text-lg font-normal text-gray-600">Product Design</p>
            </div>
        </Link>
        <nav className="flex gap-8">
          <Link
            href="/"
            className={`text-black hover:text-blue-600 transition-colors ${
              pathname === "/" || pathname.startsWith("/projects/")
                ? "underline decoration-2 decoration-blue-600 underline-offset-8" 
                : ""
            }`}
          >
            Work
          </Link>
          <Link
            href="/about"
            className={`text-black hover:text-blue-600 transition-colors ${
              pathname === "/about" 
                ? "underline decoration-2 decoration-blue-600 underline-offset-8" 
                : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/experience"
            className={`text-black hover:text-blue-600 transition-colors ${
              pathname === "/experience" 
                ? "underline decoration-2 decoration-blue-600 underline-offset-8" 
                : ""
            }`}
          >
            Experience
          </Link>
          <Link
            href="/contact"
            className={`text-black hover:text-blue-600 transition-colors ${
              pathname === "/contact" 
                ? "underline decoration-2 decoration-blue-600 underline-offset-8" 
                : ""
            }`}
          >
            Contact
          </Link>
          <Link
            href="https://www.linkedin.com/in/edmonterrubio/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 transition-colors"
            aria-label="LinkedIn"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </nav>
      </div>
    </header>
  );
};

