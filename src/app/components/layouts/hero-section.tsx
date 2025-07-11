import React from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="w-full overflow-hidden h-screen relative flex items-center justify-center">
      <BackgroundGradientAnimation containerClassName="h-full">
      <div className="absolute z-50 inset-0 flex items-center justify-center w-full h-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto w-full items-center">
        {/* Left column: Title and description */}
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#B0CFD6] mb-6 bg-clip-text drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          Juntos Contra la <span className="text-[#FFC44D]">Desinformación Electoral</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl font-normal text-white/80 mb-4">
          Coalición Nacional que reúne a <span className="text-[#FFC44D]">17 organizaciones</span> comprometidas con la integridad de la información electoral en Bolivia
          </p>
          <p className="text-base md:text-lg lg:text-xl font-normal text-[#B0CFD6]">
          Trabajamos juntos para fortalecer la confianza ciudadana en los procesos electorales, combatiendo la desinformación y promoviendo una participación democrática informada de cara a las <span className="text-[#FFC44D]">elecciones generales 2025.</span> 
          </p>
        </div>
        {/* Right column: Image */}
        <div className="flex items-center justify-center">
          <Image
            src="/img-1.webp"
            alt="Coalición Nacional"
            width={500}
            height={400}
            className="rounded-xl w-full max-w-md object-cover"
            priority
          />
        </div>
        </div>
      </div>
      </BackgroundGradientAnimation>
    </div>
  );
}
