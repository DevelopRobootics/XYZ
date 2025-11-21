import Image from "next/image";
import { FaShoppingCart, FaLock, FaExchangeAlt, FaMobileAlt, FaEdit,FaRocket ,FaLightbulb ,FaSearch } from "react-icons/fa";
export default function Servicios() {
    return (
        <main className="text-gray-200 min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-cover bg-center bg-no-repeat bg-[url('/TestOpacidad/test_opacidad3.png')] px-4 py-12 sm:py-16 md:py-24">

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
                            <circle cx="2" cy="2" r="2" className="fill-gray-200" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dot-pattern)" />
                </svg>

                {/* Contenido principal */}
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
                    {/* Layout de dos columnas */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Columna izquierda: Título */}
                        <div className="text-left space-y-6 md:space-y-10">
                            <h1 className="text-8xl font-bold tracking-tight text-[#1D1D1F] drop-shadow-lg">
                                Servicios
                            </h1>
                            <p className="text-lg text-gray-600 max-w-lg">
                                Conoce los servicios que ofrecemos para acompañarte en cada etapa del proceso.
                            </p>

                            {/* Botones de acción */}
                            <div className="flex flex-wrap gap-4 pt-4">
                                <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-all flex items-center gap-2">
                                    <FaRocket className="w-5 h-5" />
                                    Planes de negocio
                                </button>
                                <button className="bg-gray-800 text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-all flex items-center gap-2">
                                    <FaLightbulb className="w-5 h-5" />
                                    Ideas personalizadas
                                </button>
                            </div>

                        </div>

                        {/* Columna derecha: Imagen decorativa */}
                        <div className="flex justify-center">
                            <div className="w-full">
                                <Image
                                    src="/Services/GroupCards.png"
                                    alt="Foto de las tarjetas de servicios"
                                    width={500}
                                    height={500}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
                <div className="text-center text-black font-bold">
                    <h3 className="text-2xl ">Encuentra los mejores servicios adaptados a ti</h3>

                    {/* Buscador */}
                    <div className="mt-6 max-w-md mx-auto">
                        <label htmlFor="busqueda" className="sr-only">Buscar servicio</label>
                        <div className="relative">
                            <input
                                type="text"
                                id="busqueda"
                                placeholder="Buscar servicio..."
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <FaSearch className="absolute right-4 top-3 text-gray-500" />
                        </div>
                    </div>
                </div>
            </section>
           
            <section className="bg-white py-16 px-6 sm:px-12 md:px-20">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Columna izquierda: texto */}
                    <div className="space-y-6">
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
                            Desarrollo de Tiendas Online Personalizadas
                        </h2>
                        <p className="text-gray-700 text-lg">
                            Para hacer que tu negocio sea más seguro y fácil de usar, ofrecemos servicios de desarrollo y diseño de sitios web de comercio electrónico personalizados, utilizando tecnologías de vanguardia e incorporando las últimas funciones, tales como:
                        </p>

                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-center gap-3">
                                <FaShoppingCart className="text-red-500 w-5 h-5" />
                                Configuración e instalación de software de carrito de compras
                            </li>
                            <li className="flex items-center gap-3">
                                <FaLock className="text-red-500 w-5 h-5" />
                                Integración de pasarela de pago segura
                            </li>
                            <li className="flex items-center gap-3">
                                <FaExchangeAlt className="text-red-500 w-5 h-5" />
                                Soluciones de comercio electrónico B2B y B2C
                            </li>
                            <li className="flex items-center gap-3">
                                <FaMobileAlt className="text-red-500 w-5 h-5" />
                                Desarrollo de aplicaciones
                            </li>
                            <li className="flex items-center gap-3">
                                <FaEdit className="text-red-500 w-5 h-5" />
                                Modificación de tiendas online existentes
                            </li>
                        </ul>

                        <div className="pt-6">
                            <a
                                href="/servicios/tienda-online"
                                className="inline-flex items-center bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-all"
                            >
                                Más información
                            </a>
                        </div>
                    </div>

                    {/* Columna derecha: ilustración */}
                    <div className="flex justify-center">
                        <img
                            src="/Services/tienda_online.png"
                            alt="Ilustración tienda online"
                            className="w-full max-w-md rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
