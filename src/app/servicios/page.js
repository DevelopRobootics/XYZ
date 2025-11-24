"use client";
import { useState } from "react";
import Image from "next/image";
import { FaBolt, FaCubes, FaPalette, FaPaperPlane, FaDollarSign, FaLayerGroup } from "react-icons/fa"

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
            <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Texto principal */}
                    <div className="space-y-6">
                        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
                            El kit de servicios más rápido y completo
                        </h1>
                        <p className="text-lg text-gray-600 max-w-xl">
                            Únete a cientos de empresas que transforman su presencia digital con nuestros servicios personalizados de diseño, desarrollo y consultoría.
                        </p>

                        {/* Botones de acción */}
                        <div className="flex flex-wrap gap-4 pt-2">
                            <a
                                href="/contacto"
                                className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-900 transition"
                            >
                                Empezar ahora
                            </a>
                            <a
                                href="/servicios"
                                className="bg-gray-100 text-gray-800 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-200 transition"
                            >
                                Ver servicios
                            </a>
                        </div>

                        {/* Indicador social opcional */}
                        <div className="pt-4 flex items-center gap-2 text-sm text-gray-500">
                            <div className="flex -space-x-2 overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="inline-block size-8 rounded-full ring-2 ring-white outline -outline-offset-1 outline-black/5" />
                                <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="inline-block size-8 rounded-full ring-2 ring-white outline -outline-offset-1 outline-black/5" />
                                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" className="inline-block size-8 rounded-full ring-2 ring-white outline -outline-offset-1 outline-black/5" />
                                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="inline-block size-8 rounded-full ring-2 ring-white outline -outline-offset-1 outline-black/5" />
                            </div>

                            <span>832 empresas se han unido recientemente</span>
                        </div>
                    </div>

                    {/* Imagen decorativa */}
                    <div className="flex justify-center">
                        <Image
                            src="/Services/GroupCards.png"
                            alt="Mockup de servicios"
                            width={500}
                            height={500}
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </section>
            <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto space-y-20">

                    {/* Beneficios destacados */}

                    {/* Beneficios destacados con íconos */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="flex flex-col items-center space-y-4">
                            <FaBolt className="text-yellow-500 w-8 h-8 bg-yellow-100 rounded-full p-2" />
                            <h3 className="text-xl font-semibold text-gray-900">Finaliza proyectos más rápido</h3>
                            <p className="text-gray-600 text-sm">
                                Acelera tu flujo de trabajo con herramientas que te permiten avanzar sin fricción.
                            </p>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <FaPalette className="text-pink-500 w-8 h-8 bg-pink-100 rounded-full p-2" />
                            <h3 className="text-xl font-semibold text-gray-900">Diseña con consistencia</h3>
                            <p className="text-gray-600 text-sm">
                                Usa componentes base para mantener coherencia visual en todos tus proyectos.
                            </p>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <FaCubes className="text-indigo-500 w-8 h-8 bg-indigo-100 rounded-full p-2" />
                            <h3 className="text-xl font-semibold text-gray-900">Más de 3k componentes</h3>
                            <p className="text-gray-600 text-sm">
                                Accede a una biblioteca completa para construir páginas de alta calidad en minutos.
                            </p>
                        </div>
                    </div>

                    {/* Mensaje central + CTA */}
                    <div className="text-center max-w-3xl mx-auto space-y-6">
                        <h4 className="text-lg text-gray-500">Diseña landing pages en minutos, no en días</h4>
                        <h2 className="text-4xl font-bold text-gray-900">
                            Variaciones infinitas, calidad constante
                        </h2>
                        <p className="text-gray-600 text-base">
                            Crea páginas impactantes sin repetir procesos. Di adiós a rehacer componentes desde cero y enfócate en lo que realmente importa: tu mensaje.
                        </p>

                        <div className="flex justify-center gap-4 pt-4">
                            <a
                                href="/contacto"
                                className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-900 transition"
                            >
                                Empezar ahora
                            </a>
                            <a
                                href="/demo"
                                className="bg-gray-100 text-gray-800 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-200 transition"
                            >
                                Ver demo
                            </a>
                        </div>
                    </div>

                    {/* Estadísticas finales */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-10">
                        {/* Productividad */}
                        <div className="flex flex-col items-center space-y-4">
                            <FaPaperPlane className="w-14 h-12 text-blue-500 bg-blue-100 rounded-full p-2" />
                            <h3 className="text-4xl font-bold text-gray-900">10×</h3>
                            <h4 className="text-lg font-semibold text-gray-800">Más productividad</h4>
                            <p className="text-sm text-gray-600 max-w-xs">
                                Trabaja en múltiples proyectos sin el estrés creativo. Optimiza tu tiempo y energía.
                            </p>
                        </div>
                        {/* ROI */}
                        <div className="flex flex-col items-center space-y-4">
                            <FaDollarSign className="w-14 h-12 text-green-500 bg-green-100 rounded-full p-2" />
                            <h3 className="text-4xl font-bold text-gray-900">900%</h3>
                            <h4 className="text-lg font-semibold text-gray-800">Retorno de inversión</h4>
                            <p className="text-sm text-gray-600 max-w-xs">
                                Diseña de forma más eficiente y consistente. Más resultados con menos esfuerzo.
                            </p>
                        </div>

                        {/* Componentes */}
                        <div className="flex flex-col items-center space-y-4">
                            <FaLayerGroup className="w-14 h-12 text-purple-500 bg-purple-100 rounded-full p-2" />
                            <h3 className="text-4xl font-bold text-gray-900">3k+</h3>
                            <h4 className="text-lg font-semibold text-gray-800">Componentes listos</h4>
                            <p className="text-sm text-gray-600 max-w-xs">
                                Todo lo que necesitas para diseñar sitios web de alta calidad en minutos.
                            </p>
                        </div>
                    </div>

                </div>
            </section>


        </main>
    );
}
