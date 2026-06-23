import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "../utils/cn";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all duration-300 z-50",
        "focus:outline-none hover:-translate-y-1 active:translate-y-0",
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95 pointer-events-none"
      )}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
};
export default ScrollToTop;
