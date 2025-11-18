import React from "react";
import Image from "next/image";
import { FaHandsHelping } from "react-icons/fa";

const DotPatternBackground = () => {
    return (
        <div className="relative w-full h-auto overflow-hidden bg-white dark:bg-gray-900">
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
                        <circle
                            cx="2"
                            cy="2"
                            r="2"
                            className="fill-gray-200 dark:fill-gray-700"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dot-pattern)" />
            </svg>

            {/* Contenido encima del fondo de puntos */}
            <div className="relative z-10 p-10">
                <div className="mb-10">
                    <Image
                        className=" mx-auto w-[180px] sm:w-[260px] md:w-[300px]"
                        src="/XYZ.svg"
                        alt="XYZ logo"
                        width={300}
                        height={300}
                        priority
                    />
                </div>

                {/* Títulos principales */}
                <div className="space-y-4 mb-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-[#3F3F3F] dark:text-white">
                        Impulsamos tu <span className="text-[#ED711F]">negocio</span>,
                    </h1>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-[#3F3F3F] dark:text-white">
                        sin importar el <span className="text-[#00B1CE]">tamaño</span> de tu empresa
                    </h1>
                </div>

                {/* Descripción */}
                <div className="max-w-4xl mx-auto mb-8">
                    <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        <span className="font-medium text-gray-900 dark:text-white">XYZ Digital</span> nace con la misión de ayudar a empresas a crecer en el mundo digital.<br />
                        En una era donde la visibilidad online lo es todo, trabajamos para que negocios —desde emprendedores locales hasta grandes corporaciones—<br />
                        logren destacar en los motores de búsqueda y conectar con sus clientes ideales.
                    </p>
                </div>

                {/* Botón de acción */}
                <div className="flex flex-col items-center gap-4">
                    <button className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full text-sm sm:text-base font-medium hover:opacity-90 transition-all flex items-center gap-2 mx-auto">
                        <FaHandsHelping className="w-5 h-5" />
                        Nuestros servicios
                    </button>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-900/70 text-xs sm:text-sm text-gray-600 dark:text-gray-300 shadow-sm backdrop-blur">
                        <span className="w-2 h-2 rounded-full bg-[#17e351]" />
                        <span className="text-6xl">El sitio sigue en construcción, pronto añadiremos más secciones.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DotPatternBackground;
