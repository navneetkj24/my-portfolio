"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import "../styles/navbar.css";
import "../styles/sections.css";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed w-full top-0 z-50 bg-gray-900 shadow-md border-b border-gray-700 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-center">
        <ul className="flex gap-12 font-medium text-white">
          <li className="px-3 py-2 hover:text-blue-400 transition-colors duration-200">
            <Link href="#hero">Hero</Link>
          </li>
          <li className="px-3 py-2 hover:text-blue-400 transition-colors duration-200">
            <Link href="#about">About</Link>
          </li>
          <li className="px-3 py-2 hover:text-blue-400 transition-colors duration-200">
            <Link href="#skills">Skills</Link>
          </li>
          <li className="px-3 py-2 hover:text-blue-400 transition-colors duration-200">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="px-3 py-2 hover:text-blue-400 transition-colors duration-200">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
