"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Eye,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Technologies", href: "#technologies" },
  { name: "Erp", href: "#erp" },
  { name: "Career", href: "#career" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (name) => {
    setActiveLink(name);
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="absolute top-0 left-0 z-50 w-full"
    >
      <nav className="mx-auto flex min-h-[100px] max-w-[1800px] items-center justify-between gap-5 px-5 py-4 md:px-8 xl:px-12">

        {/* Logo and Visitors */}
        <div className="flex shrink-0 items-center gap-4 lg:gap-5">

          <a href="#home" onClick={() => handleNavigation("Home")}>
            <div className="flex flex-col items-center leading-none">
              <span className="text-[34px] font-black tracking-[-3px] text-[#075a9e] sm:text-[39px]">
                SAF
              </span>
              <span className="mt-1 text-[11px] font-medium tracking-[8px] text-[#075a9e]">
                TECH
              </span>
            </div>
          </a>

          <div className="hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 px-4 py-2 text-sm font-semibold text-white shadow-lg sm:flex">
            <Eye size={15} />
            <span>4,225 Visitors</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-9">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleNavigation(link.name)}
              className={`relative py-3 text-[17px] font-medium transition-colors duration-300 xl:text-[19px] ${
                activeLink === link.name
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-blue-600"
              }`}
            >
              {link.name}

              {activeLink === link.name && (
                <motion.span
                  layoutId="navbar-underline"
                  className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-blue-600"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-3.5 text-[17px] font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:flex"
        >
          Get in Touch
          <ArrowUpRight size={19} />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="rounded-xl border border-blue-200 bg-white/80 p-3 text-blue-700 shadow-sm lg:hidden"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="absolute left-4 right-4 top-[85px] overflow-hidden rounded-2xl border border-blue-100 bg-white/95 p-5 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="font-bold text-blue-700">SAF TECH</div>
              <span className="flex items-center gap-1 text-xs font-semibold text-slate-500">
                <Eye size={14} />
                4,225 Visitors
              </span>
            </div>

            <div className="flex flex-col">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                  onClick={() => handleNavigation(link.name)}
                  className={`rounded-lg px-4 py-3 font-medium transition-colors ${
                    activeLink === link.name
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <a
              href="#contact"
              onClick={() => handleNavigation("Contact")}
              className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 px-5 py-3.5 font-semibold text-white shadow-lg"
            >
              Get in Touch
              <ArrowUpRight size={18} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}