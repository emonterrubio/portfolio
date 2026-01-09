"use client";

import { ArrowUp } from "lucide-react";

export const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="text-base/5 font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-2 transition-colors"
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5" />
      Back to top
    </button>
  );
};

