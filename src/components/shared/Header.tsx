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
        </nav>
      </div>
    </header>
  );
};

