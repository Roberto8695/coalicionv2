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
        
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
        </MobileNavHeader>
        
        <MobileNavMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu}>
          {navigationItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="block w-full px-4 py-2 text-left text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
              onClick={closeMobileMenu}
            >
              {item.name}
            </a>
          ))}
          <div className="mt-4 flex w-full flex-col gap-2">
            <NavbarButton href="/login" variant="secondary" className="w-full">
              Iniciar Sesión
            </NavbarButton>
            <NavbarButton href="/signup" variant="primary" className="w-full">
              Registrarse
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
