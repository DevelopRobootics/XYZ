"use client";
import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const DotPatternBackground = () => {
  const showCTA = true; // mostrar CTA principal

  return (
    <div className="relative w-full h-auto overflow-hidden">
      {/* Fondo con patrón suave */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/TestOpacidad/test_opacidad4.png')] opacity-30" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 px-6 sm:px-8 md:px-10 pt-12 sm:pt-14 md:pt-16">
        <div className="mb-2 mt-4">
          <Image
            className="mx-auto max-w-full w-[18rem] sm:w-[22rem] md:w-[28rem] lg:w-[32rem]"
            src="/XYZ_Digital.svg"
            alt="XYZ logo"
            width={480}
            height={480}
            sizes="(min-width:1024px) 32rem, (min-width:768px) 28rem, (min-width:640px) 22rem, 18rem"
            priority
          />
        </div>

        <div className="mb-8 mt-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-[#1D1D1F]">
            Impulsamos tu <span className="text-[#e7462a]">negocio</span>, sin importar el{" "}
            <span className="text-[#03a1c4]">tamaño</span> de tu <span className="text-[#742b85]">empresa</span>
          </h1>
        </div>

        <div className="max-w-4xl mx-auto mb-8 mt-2">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            <span className="font-medium text-[#e7462a]">XYZ Digital</span> impulsa marcas con{" "}
            <span className="text-[#03a1c4] font-semibold">visibilidad</span> real. Conectamos negocios{" "}
            <span className="text-[#742b85] font-semibold">locales</span> y grandes empresas con sus clientes ideales,
            destacando en buscadores con resultados medibles y consistentes.
          </p>
        </div>

        {/* Botón de acción (deshabilitado) */}
        {showCTA && (
          <div className="flex flex-col items-center gap-3 pb-4">
            <div className="super-button pointer-events-none select-none opacity-80">
              <span>Ver servicios</span>
              <FaArrowRight className="w-5 h-5 arrow" />
            </div>
            <p className="text-sm text-gray-600">
              Servicios momentáneamente en construcción.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DotPatternBackground;
