"use client";
import { useState } from "react";
import Image from "next/image";
import {
    FaRocket,
    FaLightbulb,
    FaSearch,
    FaInfoCircle,
} from "react-icons/fa";

import serviciosData from "../../data/servicios";

export default function Servicios() {
    const [query, setQuery] = useState("");

    const filtered = serviciosData.filter(
        (s) =>
            s.title.toLowerCase().includes(query.toLowerCase()) ||
            s.description.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <main className="text-gray-200 min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-cover bg-center bg-no-repeat bg-[url('/TestOpacidad/test_opacidad3.png')] px-4 py-12 sm:py-16 md:py-24">
                <svg className="absolute top-0 left-0 w-full h-full" width="100%" height="100%">
                    <defs>
                        <pattern id="dot-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="2" className="fill-gray-200" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dot-pattern)" />
                </svg>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="text-left space-y-6 md:space-y-10">
                            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-[#1D1D1F] drop-shadow-lg">
                                Servicios
                            </h1>
                            <p className="text-lg text-gray-600 max-w-lg">
                                Conoce los servicios que ofrecemos para acompañarte en cada etapa del proceso.
                            </p>
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

            {/* Buscador */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
                <div className="text-center text-black font-bold">
                    <h3 className="text-2xl">Encuentra los mejores servicios adaptados a ti</h3>
                    <div className="mt-6 max-w-md mx-auto">
                        <label htmlFor="busqueda" className="sr-only">Buscar servicio</label>
                        <div className="relative">
                            <input
                                type="text"
                                id="busqueda"
                                placeholder="Buscar servicio..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <FaSearch className="absolute right-4 top-4 text-gray-500" />
                        </div>
                    </div>
                </div>
                <div className="mt-12 space-y-12">
                    {filtered.length > 0 ? (
                        filtered.map((servicio, i) => (
                            <div
                                key={i}
                                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white"
                            >
                                {/* Imagen */}
                                <div
                                    className={`flex justify-center ${i % 2 === 1 ? "md:order-2" : "md:order-1"
                                        }`}
                                >
                                    <Image
                                        src={servicio.image}
                                        alt={servicio.title}
                                        width={400}
                                        height={300}
                                        className="rounded-lg w-full h-auto"
                                    />
                                </div>

                                {/* Texto */}
                                <div
                                    className={`space-y-4 text-left text-gray-800 ${i % 2 === 1 ? "md:order-1" : "md:order-2"
                                        }`}
                                >
                                    <h4 className="text-2xl font-bold">{servicio.title}</h4>
                                    <p className="text-gray-600">{servicio.description}</p>
                                    <ul className="space-y-2 text-gray-600">
                                        {servicio.features?.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <span className="text-blue-500">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <a
                                        href={servicio.link}
                                        className="inline-flex items-center text-sm text-blue-600 hover:underline gap-2"
                                    >
                                        <FaInfoCircle className="w-4 h-4" />
                                        Más información
                                    </a>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 text-center">
                            No se encontraron servicios para {`"${query}"`}
                        </p>
                    )}
                </div>

            </section>
        </main>
    );
}
