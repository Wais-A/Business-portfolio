"use client";

import { motion } from "framer-motion";
import { useCallback } from "react";

const menuItems = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  // Example with optional 80px offset for a fixed header
  const handleClick = useCallback((href: string) => {
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const offset = 80; // Adjust as needed
    const element = document.querySelector(href);
    if (element) {
      // position of the element in the page
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      // subtract the header offset
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-lg border-b border-gray-100"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={() => handleClick("#home")}
          className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sarah
        </motion.button>

        {/* Inline Nav (no dropdown) */}
        <div className="flex items-center space-x-8">
          {menuItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => handleClick(item.href)}
              className="text-gray-600 hover:text-purple-500 transition-colors font-medium"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}