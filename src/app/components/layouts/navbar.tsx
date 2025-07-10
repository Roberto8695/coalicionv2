"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarPNUDLogo,
  NavbarButton,
} from "../ui/resizable-navbar";
import { useState } from "react";

const navigationItems = [
  { name: "Inicio", link: "/" },
  { name: "Acerca de", link: "/about" },
  { name: "Servicios", link: "/services" },
  { name: "Contacto", link: "/contact" },
];

export default function NavigationBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <Navbar className="fixed inset-x-0 top-0 z-50">
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navigationItems} />
        <div className="flex items-center space-x-4">
          
          <NavbarPNUDLogo />
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo mobile={true} />
          <div className="flex items-center space-x-1">
            <NavbarPNUDLogo mobile={true} />
            <MobileNavToggle isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
          </div>
        </MobileNavHeader>
        
        <MobileNavMenu isOpen={isMobileMenuOpen}>
          {navigationItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="block w-full px-4 py-3 text-left text-base font-medium text-neutral-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 dark:text-neutral-300 dark:hover:text-blue-400 dark:hover:bg-neutral-800"
              onClick={closeMobileMenu}
            >
              {item.name}
            </a>
          ))}
          <div className="mt-6 flex w-full flex-col gap-3">
            <NavbarButton href="/login" variant="secondary" className="w-full py-3 text-base">
              Iniciar Sesión
            </NavbarButton>
            <NavbarButton href="/signup" variant="primary" className="w-full py-3 text-base">
              Registrarse
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
