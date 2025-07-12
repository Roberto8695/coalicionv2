"use client";

import React from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { LinkPreview } from "@/app/components/ui/link-preview";
import { IconChevronDown } from "@tabler/icons-react";

export function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("features");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // Si no hay sección específica, hacer scroll hacia abajo
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };
  const words = [
    {
      text: "Juntos",
    },
    {
      text: "Contra",
    },
    {
      text: "la",
    },
    
    
    {
      text: "Desinformación",
      className: "text-[#FFC44D] dark:text-[#FFC44D] ",
    },
    {
      text: "Electoral",
      className: "text-[#FFC44D] dark:text-[#FFC44D] ",
    },
  ];
  return (
    <div className="w-full overflow-hidden h-screen relative flex items-center justify-center">
      <BackgroundGradientAnimation containerClassName="h-full">
        <div className="absolute z-50 inset-0 flex items-center  justify-center w-full h-full px-4 pt-[150px] sm:pt-16 lg:pt-0">
          <div className="flex items-center justify-center max-w-4xl mx-auto w-full">
            <div className="backdrop-blur-md bg-black/40 p-6 sm:p-8 rounded-xl border border-white/10 text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 bg-clip-text drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
                <TypewriterEffectSmooth words={words} />
              </h1>
              <div className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-white mb-3 sm:mb-4">
                Coalición Nacional que reúne a {" "}
                <LinkPreview 
                  url="https://www.undp.org/"
                  className="font-bold text-amber-300 "
                > <span className="font-bold text-amber-300 ">17 organizaciones</span>
                </LinkPreview>{" "}
                comprometidas con la integridad de la información electoral en
                Bolivia
              </div>
              <div className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-white">
                Trabajamos juntos para fortalecer la confianza ciudadana en los
                procesos electorales, combatiendo la desinformación y
                promoviendo una participación democrática informada de cara a
                las{" "}
                <LinkPreview
                  url="https://chequeatuvoto.chequeabolivia.bo/"
                  className="font-bold text-[#FFC44D]"
                >
                  <span className="font-bold text-[#FFC44D] ">elecciones generales 2025.</span>
                  
                </LinkPreview>
              </div>
            </div>
          </div>

          {/* Ícono de scroll animado */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-60">
            <button
              onClick={scrollToNext}
              className="flex flex-col items-center animate-scrollBounce hover:scale-110 transition-transform duration-300 cursor-pointer group"
              aria-label="Hacer scroll hacia abajo"
            >
              <span className="text-white/70 text-sm mb-2 font-medium animate-scrollPulse group-hover:text-white transition-colors duration-300">
                Scroll
              </span>
              <IconChevronDown className="h-6 w-6 text-white/70 animate-scrollPulse group-hover:text-white transition-colors duration-300" />
            </button>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
}
