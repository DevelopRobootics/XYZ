import Image from "next/image";
import { FaUsers, FaBullseye, FaHeart } from "react-icons/fa";

export default function Servicios() {
    return (
        <main className="text-gray-200 min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-cover bg-center bg-no-repeat bg-[url('/TestOpacidad/test_opacidad3.png')] px-4 py-12 sm:py-16 md:py-24 dark:bg-gray-900">

                {/* Fondo decorativo con patrón de puntos */}
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

                {/* Contenido principal */}
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
                    {/* Layout de dos columnas */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Columna izquierda: Título */}
                        <div className="text-left space-y-6">
                            <h1 className="text-8xl font-extrabold tracking-tight text-[#1D1D1F] dark:text-white drop-shadow-lg">
                                Servicios
                            </h1>
                            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg">
                                Conoce los servicios que ofrecemos para acompañarte en cada etapa del proceso.
                            </p>
                        </div>

                        {/* Columna derecha: Imagen decorativa */}
                        <div className="flex justify-center">
                            <div className="w-full ">
                                <Image
                                    src="/Services/GroupCards.png"
                                    alt="Foto del tarjetas de servicios"
                                    width={500}
                                    height={500}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>


                    {/* Tarjetas de servicios */}
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Aquí irán tus tarjetas */}
                    </div>
                </div>
            </section>
        </main>
    );
}
