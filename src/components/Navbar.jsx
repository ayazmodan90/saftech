"use client";
 import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";


const navLinks = [
    { name: "Home", href: "#home"},
    { name: "About", href: "#about"},
    { name: "Portfolio", href: "#portfolio"},
    { name: "Technologies", href: "#technologies"},
    { name: "Erp", href: "#erp"},
    { name: "Careers", href: "#careers"},
    { name: "Reviews", href: "#reviews"},
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

        {/* Logo */}
        <Link
          href="#home"
          className="text-3xl font-extrabold tracking-tight text-blue-700"
        >
          SAF<span className="text-gray-900">TECH</span>
          <span className="text-blue-600">.</span>
        </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link)=>(
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-gray-700 hover:text-blue-600"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Link
                        href="#contact"
                        className="rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                    >
                        Get Started
                    </Link>
                </div>

                {/*mobile Menu Button */}
                <button
                    onclick={()=> setIsOpen(!isOpen)}
                    className="text-gray-800 md:hidden"
                    areal-label="Toggle navigation"
                >
                    {isOpen ? <X size={27} /> : <Menu size={27} />}
                </button>
            </nav>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="border-t border-gray-100 bg-white px-5 py-4 md:hidden">
                    <div className="flex-col gap-5">
                        {navLinks.map((link)=>(
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="font-medium text-gray-700 hover:text-blue-600"
                            >
                                {link.name}
                            </Link>
                        ))}

                    </div>
                </div>
            )}
        </header>
    )
}