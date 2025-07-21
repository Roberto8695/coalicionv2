"use client";

import { useState, useEffect } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const navigationItems = [
  { name: "Inicio", link: "/" },
  { name: "Acerca de", link: "#" },
  { name: "Servicios", link: "#" },
  { name: "Contacto", link: "#" },
];

export default function SimpleNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && !(event.target as Element)?.closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

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
          ? "bg-[#063740]/80 backdrop-blur-md shadow-lg border-b border-white/10"
          : "bg-[#063740]/60 backdrop-blur-sm border-b border-white/5"
      }`}
      style={{ 
        WebkitTapHighlightColor: 'transparent',
        outline: 'none',
        border: 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-28 py-1 sm:py-2">
          {/* Logo izquierdo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center transform hover:scale-105 transition-transform duration-200">
              <Image
                src="/logo.webp"
                alt="Coalición Logo"
                width={80}
                height={48}
                className="h-8 sm:h-15 lg:h-20 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Espaciador flexible */}
          <div className="flex-1"></div>

          {/* Menú desktop en el lado derecho */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="text-sm lg:text-sm font-medium lg:font-bold transition-all duration-200 px-2 lg:px-3 py-2 rounded-lg relative text-white hover:text-blue-200 hover:bg-white/20 backdrop-blur-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Botón hamburguesa para móvil */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-1.5 sm:p-2 rounded-lg transition-all duration-200 text-white hover:bg-white/10 transform hover:scale-110 active:scale-95 ml-2 sm:ml-4"
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <div className="relative">
              {isMobileMenuOpen ? (
                <IconX className="h-5 w-5 sm:h-6 sm:w-6 transition-all duration-300 rotate-180" />
              ) : (
                <IconMenu2 className="h-5 w-5 sm:h-6 sm:w-6 transition-all duration-300 rotate-0" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`lg:hidden relative transition-all duration-500 ease-in-out overflow-hidden ${
          isMobileMenuOpen
            ? "max-h-80 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        {/* Fondo blur inmediato */}
        <div 
          className={`absolute inset-0 backdrop-blur-lg transition-opacity duration-200 ${
            isMobileMenuOpen ? "opacity-100 bg-[#063740]" : "opacity-0 bg-transparent"
          }`}
        />
        
        {/* Contenido del menú */}
        <div className="relative px-4 pt-4 pb-6 space-y-2 shadow-lg z-10">
          {navigationItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              onClick={closeMobileMenu}
              className={`flex items-center justify-center w-full px-4 py-3 text-base font-medium text-white hover:text-blue-200 hover:bg-white/10 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                isMobileMenuOpen 
                  ? `animate-slideIn animation-delay-${index * 100}` 
                  : ''
              }`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
