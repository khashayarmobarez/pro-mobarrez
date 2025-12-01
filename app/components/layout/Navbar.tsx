"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Logo from "@/app/components/ui/Logo";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  // Toggle drawer
  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  // Navigation links
  const navLinks = [
    { name: "Team", href: "/team" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Join Pro", href: "/join" },
  ];

  // Scroll handler for hiding/showing navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowNavbar(false); // Scrolling down
      } else {
        setShowNavbar(true); // Scrolling up
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b transition-all duration-300 ${
          isDrawerOpen ? "border-transparent" : "border-foreground/10"
        } ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
        style={{ willChange: "transform" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <Logo className="w-12 h-12 transition-transform group-hover:scale-105" fill="var(--accent-color)" />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-foreground">
                  MOBARREZ
                </span>
                <span className="text-xs font-medium tracking-wider text-accent">
                  PRO
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-foreground/70 hover:text-foreground text-base font-medium transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <Link
                href="/hire"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-accent text-white font-medium rounded-lg hover:bg-accent/90 transition-all duration-200 shadow-lg shadow-accent/20"
              >
                Hire the Squad
              </Link>
            </div>

            {/* Mobile Menu Button - FIXED WITH VISIBLE BUTTON */}
            <button
              onClick={toggleDrawer}
              className="md:hidden flex flex-col items-center justify-center gap-1 p-3 rounded-lg bg-accent/10 hover:bg-accent/20 transition-all border border-accent/30"
              aria-label="Menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`h-0.5 w-full bg-accent transition-all duration-300 ${isDrawerOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`h-0.5 w-full bg-accent transition-all duration-300 ${isDrawerOpen ? "opacity-0" : ""}`} />
                <span className={`h-0.5 w-full bg-accent transition-all duration-300 ${isDrawerOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer - FIXED WITH SOLID BACKGROUND */}
      <div
        className={`fixed inset-y-0 right-0 w-full bg-background border-l border-foreground/10 shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col p-8 pt-28 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-foreground text-xl font-medium hover:text-accent transition-colors py-2"
              onClick={toggleDrawer}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile CTA */}
          <Link
            href="/hire"
            className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent/90 transition-all duration-200 shadow-lg shadow-accent/20"
            onClick={toggleDrawer}
          >
            Hire the Squad
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={toggleDrawer}
        />
      )}
    </>
  );
}