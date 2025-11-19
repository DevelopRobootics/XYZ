"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaHandsHelping, FaTimes } from "react-icons/fa";

const DotPatternBackground = () => {
    const [showBanner, setShowBanner] = useState(true);

    return (
        <div className="relative w-full h-auto overflow-hidden bg-white">
            {/* Banner superior */}
            {showBanner && (
                <div className="fixed top-16 left-0 w-full z-50 flex items-center justify-between gap-3 px-6 py-3 bg-blue-100 text-sm sm:text-base text-gray-800 shadow-md">
                    <div className="flex items-center gap-3">
                        <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                        <p className="font-medium">
                            🚧 El sitio sigue en construcción, pronto añadiremos más secciones.
                        </p>
                    </div>
                    <button
                        onClick={() => setShowBanner(false)}
                        className="text-gray-600 hover:text-black transition"
                    >
                        <FaTimes />
                    </button>
                </div>
            )}

            {/* Fondo con patrón + imagen de fondo */}
            <div className="absolute inset-0">
                <svg className="absolute top-0 left-0 w-full h-full" width="100%" height="100%">
                    <defs>
                        <pattern
                            id="dot-pattern"
                            x="0"
                            y="0"
                            width="30"
                            height="30"
                            patternUnits="userSpaceOnUse"
                        >
                            <circle cx="2" cy="2" r="2" className="fill-gray-200" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dot-pattern)" />
                </svg>
                {/* Imagen de fondo */}
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/TestOpacidad/hero_opacidad.png')] h-12 md:h-18 lg:h-72" />
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/TestOpacidad/test_opacidad4.png')] opacity-10" />
            </div>

            {/* Contenido principal */}
            <div className="relative z-10 p-10 md:pt-32 md:mt-20">
                {/* Imagen arriba */}
                <div className="mb-2 mt-10">
                    <Image
                        className="mx-auto w-[180px] sm:w-[260px] md:w-[300px]"
                        src="/XYZ.svg"
                        alt="XYZ logo"
                        width={300}
                        height={300}
                        priority
                    />
                </div>

                {/* Títulos principales */}
                <div className="space-y-4 mb-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-[#1D1D1F]">
                        Impulsamos tu <span className="text-[#ED711F]">negocio</span>,
                    </h1>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-[#1D1D1F]">
                        sin importar el <span className="text-[#00ff15]">tamaño</span> de tu empresa
                    </h1>
                </div>

                {/* Descripción */}
                <div className="max-w-4xl mx-auto mb-8">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        <span className="font-medium text-gray-900">XYZ Digital</span> nace con la misión de ayudar a empresas a crecer en el mundo digital.<br />
                        En una era donde la visibilidad online lo es todo, trabajamos para que negocios —desde emprendedores locales hasta grandes corporaciones—<br />
                        logren destacar en los motores de búsqueda y conectar con sus clientes ideales.
                    </p>
                </div>

                {/* Botón de acción */}
                <div className="flex flex-col items-center gap-4">
                    <button className="bg-black text-white px-6 py-3 rounded-full text-sm sm:text-base font-medium hover:opacity-90 transition-all flex items-center gap-2 mx-auto">
                        <FaHandsHelping className="w-5 h-5" />
                        Nuestros servicios
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DotPatternBackground;
