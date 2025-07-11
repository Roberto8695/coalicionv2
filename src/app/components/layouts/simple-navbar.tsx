"use client";

import { useState, useEffect } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Image from "next/image";

const navigationItems = [
  { name: "Inicio", link: "/" },
  { name: "Acerca de", link: "/about" },
  { name: "Servicios", link: "/services" },
  { name: "Contacto", link: "/contact" },
];

export default function SimpleNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-500 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-transparent backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-28 py-2">
          {/* Logo izquierdo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center transform hover:scale-105 transition-transform duration-200">
              <Image
                src="/logo.webp"
                alt="Coalición Logo"
                width={80}
                height={48}
                className="h-12 lg:h-20 w-auto object-contain"
              />
            </a>
          </div>

          {/* Menú desktop */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-sm font-medium transition-all duration-200 px-3 py-2 rounded-lg relative text-white hover:text-blue-200 hover:bg-white/10"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Logo derecho */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.undp.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:opacity-80 transform hover:scale-105 transition-all duration-200"
              title="Programa de las Naciones Unidas para el Desarrollo"
            >
              <Image
                src="/pnud.png"
                alt="PNUD Logo"
                width={45}
                height={60}
                className="h-12 lg:h-20 w-auto object-contain"
              />
            </a>

            {/* Botón hamburguesa para móvil */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg transition-all duration-200 text-white hover:bg-white/10"
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMobileMenuOpen ? (
                <IconX className="h-6 w-6" />
              ) : (
                <IconMenu2 className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 bg-black/80 backdrop-blur-lg border-t border-white/20">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              onClick={closeMobileMenu}
              className="block px-4 py-3 text-base font-medium text-white hover:text-blue-200 hover:bg-white/10 rounded-lg transition-all duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
