"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(89);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    
    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Work", matches: (path: string) => path === "/" || path.startsWith("/projects/") },
    { href: "/about", label: "About", matches: (path: string) => path === "/about" },
    { href: "/experience", label: "Experience", matches: (path: string) => path === "/experience" },
    { href: "/contact", label: "Contact", matches: (path: string) => path === "/contact" },
  ];

  return (
    <header ref={headerRef} className="sticky top-0 left-0 right-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto py-6 px-6">
        {/* Logo - visible on all screens */}
        <Link href="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
          <Image 
            src="/images/logos/e-logo.svg" 
            alt="Ed Monterrubio Logo" 
            width={68}
            height={68}
            className="object-contain"
          />
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold text-black leading-tight font-heading">Ed Monterrubio</h1>
            <p className="text-base md:text-lg font-normal leading-tight text-gray-600">Product Design</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-black hover:text-blue-600 transition-colors ${
                link.matches(pathname)
                  ? "underline decoration-2 decoration-blue-600 underline-offset-8" 
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
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

        {/* Mobile Navigation - LinkedIn + Hamburger */}
        <div className="flex md:hidden items-center gap-4">
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
          <button
            onClick={toggleMobileMenu}
            className="text-black hover:text-blue-600 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-[45]"
            onClick={closeMobileMenu}
          />
          {/* Menu Panel */}
          <div 
            className="md:hidden fixed left-0 right-0 bg-white z-[60] border-t border-gray-200 shadow-lg overflow-y-auto"
            style={{ top: `${headerHeight}px`, bottom: '0' }}
          >
            <div className="max-w-6xl mx-auto px-6 py-8">
              <nav className="flex flex-col space-y-6">
                {navLinks && navLinks.length > 0 ? (
                  navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className={`text-3xl text-black hover:text-blue-600 transition-colors block w-full ${
                        link.matches(pathname)
                          ? "underline decoration-3 decoration-blue-600 underline-offset-8 font-regular" 
                          : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))
                ) : (
                  <div className="text-black">No menu items</div>
                )}
              </nav>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

