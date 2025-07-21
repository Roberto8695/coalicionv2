"use client";

import React from "react";
import { motion } from "motion/react";
import { IconEye, IconTarget, IconUsers, IconShield } from "@tabler/icons-react";

const features = [
  {
    icon: <IconEye className="h-6 w-6" />,
    title: "Nuestra Visión",
    description: "Una Bolivia con elecciones transparentes, donde la información veraz fortalezca la democracia y la participación ciudadana informada sea la base de nuestro sistema electoral."
  },
  {
    icon: <IconTarget className="h-6 w-6" />,
    title: "Nuestra Misión",
    description: "Combatir la desinformación electoral mediante el trabajo colaborativo de organizaciones comprometidas con la integridad de los procesos democráticos en Bolivia."
  },
  {
    icon: <IconUsers className="h-6 w-6" />,
    title: "Trabajo Colaborativo",
    description: "Unimos esfuerzos de 17 organizaciones especializadas para crear una red sólida de verificación y educación electoral que trasciende fronteras institucionales."
  },
  {
    icon: <IconShield className="h-6 w-6" />,
    title: "Compromiso Ético",
    description: "Nos guiamos por principios de transparencia, imparcialidad y rigor técnico para garantizar información electoral confiable y verificable para todos los ciudadanos."
  }
];

const stats = [
  { number: "17", label: "Organizaciones Aliadas" },
  { number: "+10", label: "Años de Experiencia" },
  { number: "100%", label: "Compromiso Democrático" },
  { number: "2025", label: "Elecciones Generales" }
];

export function AboutSection() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20"></div>
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            ¿Quiénes Somos?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Somos una <span className="font-semibold text-green-700">Coalición Nacional</span> formada por organizaciones 
            de la sociedad civil, medios de comunicación, instituciones académicas y organismos internacionales, 
            unidos en la lucha contra la desinformación electoral en Bolivia.
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="ml-4 text-xl sm:text-2xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 sm:mt-20"
        >
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 sm:p-12 text-white shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Juntos Por una Democracia Transparente
            </h3>
            <p className="text-lg sm:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Nuestro compromiso es garantizar que cada ciudadano boliviano tenga acceso a información 
              electoral veraz, verificada y oportuna para las elecciones generales 2025.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Conoce Más
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105">
                Únete a Nosotros
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
