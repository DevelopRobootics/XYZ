"use client";
import { useState } from "react";
import Image from "next/image";
import { FaBolt, FaCubes, FaPalette, FaPaperPlane, FaDollarSign, FaLayerGroup, FaRocket, FaEye, FaLaptopCode } from "react-icons/fa"

import serviciosData from "../../data/servicios";

export default function Servicios() {

    const [activeIndex, setActiveIndex] = useState(0);
    const steps = [
        {
            icon: <FaCubes className="w-8 h-8 text-indigo-500" />,
            title: "Digitalización completa",
            description:
                "Todo lo que tu empresa necesita para dar el salto digital: páginas web, ecommerce, apps y APIs.",
        },
        {
            icon: <FaPalette className="w-8 h-8 text-pink-500" />,
            title: "Diseño profesional y consistente",
            description:
                "Creamos soluciones digitales con identidad visual coherente, adaptadas a tu marca y a tus clientes.",
        },
        {
            icon: (
                <Image
                    src="/Services/kit-digital-logo.webp"
                    alt="Kit Digital"
                    width={40}
                    height={40}
                    className="rounded-full"
                />
            ), title: "Transformación rápida con Kit Digital",
            description:
                "Aprovecha las ayudas del Kit Digital y acelera tu proceso de digitalización sin fricciones.",
        },
    ];

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
                        <div className="flex flex-wrap gap-4 pt-4">
                            <a
                                href="/contacto"
                                className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-900 transition flex items-center gap-2"
                            >
                                <FaRocket className="w-4 h-4" />
                                Empezar ahora
                            </a>

                            <a
                                href="/servicios"
                                className="bg-gray-100 text-gray-800 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-200 transition flex items-center gap-2"
                            >
                                <FaEye className="w-4 h-4" />
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

                            <span>232 empresas han colaborado con nosotros</span>
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="flex flex-col items-center space-y-4">
                            <FaBolt className="text-yellow-500 w-8 h-8 bg-yellow-100 rounded-full p-2" />
                            <h3 className="text-xl font-semibold text-gray-900">Digitaliza tu negocio más rápido</h3>
                            <p className="text-gray-600 text-sm">
                                Aprovecha las ayudas del Kit Digital y acelera tu transformación con soluciones web sin fricción.
                            </p>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <FaPalette className="text-pink-500 w-8 h-8 bg-pink-100 rounded-full p-2" />
                            <h3 className="text-xl font-semibold text-gray-900">Diseño consistente y profesional</h3>
                            <p className="text-gray-600 text-sm">
                                Creamos páginas y tiendas online con identidad visual coherente y adaptada a tu marca.
                            </p>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <FaCubes className="text-indigo-500 w-8 h-8 bg-indigo-100 rounded-full p-2" />
                            <h3 className="text-xl font-semibold text-gray-900">Soluciones completas</h3>
                            <p className="text-gray-600 text-sm">
                                Desde webs corporativas hasta apps móviles, todo lo que tu empresa necesita para crecer digitalmente.
                            </p>
                        </div>
                    </div>

                    {/* Mensaje central + CTA */}
                    <div className="text-center max-w-3xl mx-auto space-y-6">
                        <h4 className="text-lg text-gray-500">Transforma tu empresa con Kit Digital</h4>
                        <h2 className="text-4xl font-bold text-gray-900">
                            Soluciones web y apps para tu negocio
                        </h2>
                        <p className="text-gray-600 text-base">
                            Te acompañamos en cada etapa del proceso de digitalización: diseño web, ecommerce, apps y APIs.
                            Todo con soporte continuo y gestión de ayudas.
                        </p>

                        <div className="flex justify-center gap-4 pt-4">
                            <a
                                href="/contacto"
                                className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-900 transition flex items-center gap-2"
                            >
                                <FaRocket className="w-4 h-4" />
                                Solicita tu Kit Digital
                            </a>
                            <a
                                href="/servicios"
                                className="bg-gray-100 text-gray-800 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-200 transition flex items-center gap-2"
                            >
                                <FaLaptopCode className="w-4 h-4" />
                                Ver soluciones
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
                                Digitaliza procesos y gana tiempo para lo que realmente importa: hacer crecer tu negocio.
                            </p>
                        </div>
                        {/* ROI */}
                        <div className="flex flex-col items-center space-y-4">
                            <FaDollarSign className="w-14 h-12 text-green-500 bg-green-100 rounded-full p-2" />
                            <h3 className="text-4xl font-bold text-gray-900">900%</h3>
                            <h4 className="text-lg font-semibold text-gray-800">Retorno de inversión</h4>
                            <p className="text-sm text-gray-600 max-w-xs">
                                Aprovecha las subvenciones del Kit Digital y multiplica el valor de tu inversión tecnológica.
                            </p>
                        </div>

                        {/* Componentes */}
                        <div className="flex flex-col items-center space-y-4">
                            <FaLayerGroup className="w-14 h-12 text-purple-500 bg-purple-100 rounded-full p-2" />
                            <h3 className="text-4xl font-bold text-gray-900">3k+</h3>
                            <h4 className="text-lg font-semibold text-gray-800">Soluciones digitales</h4>
                            <p className="text-sm text-gray-600 max-w-xs">
                                Todo lo que necesitas para digitalizar tu empresa: webs, ecommerce, apps y APIs.
                            </p>
                        </div>
                    </div>

                </div>

            </section>

            <section className="bg-gradient-to-b from-white to-gray-50 py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto space-y-20">

                    {/* Pestañas estilizadas */}
                    <div className="flex justify-center gap-6 flex-wrap">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`cursor-pointer px-6 py-4 rounded-xl border transition-all duration-300 flex items-center gap-3 ${activeIndex === index
                                        ? "bg-black text-white border-black shadow-lg"
                                        : "bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
                                    }`}
                            >
                                {step.icon}
                                <span className="text-base font-semibold">{step.title}</span>
                            </div>
                        ))}
                    </div>

                    {/* Tarjeta activa con animación */}
                    <div className="relative h-auto overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                        >
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className="min-w-full px-8 py-16 flex flex-col items-center space-y-6 text-center bg-white rounded-2xl shadow-md border border-gray-200"
                                >
                                    <div className="bg-gray-100 p-5 rounded-full">{step.icon}</div>
                                    <h3 className="text-3xl font-bold text-gray-900">{step.title}</h3>

                                    {/* Subtítulo extra con ícono decorativo */}
                                    <div className="flex items-center gap-2 text-indigo-600 font-medium text-lg">
                                        <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full"></span>
                                        {index === 0 && "Soluciones integrales para tu empresa"}
                                        {index === 1 && "Identidad visual coherente y profesional"}
                                        {index === 2 && "Impulso directo con ayudas públicas"}
                                    </div>

                                    <p className="text-base text-gray-600 max-w-2xl">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>


            <section className="bg-gradient-to-t from-white to-gray-50 py-24 px-4 sm:px-6 lg:px-8">
                {/* Bloque superior: mensaje central */}
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h2 className="text-4xl font-bold text-gray-900">
                        Diseña landing pages en minutos, no en semanas
                    </h2>
                    <p className="text-lg text-gray-600">
                        Crea variaciones infinitas de páginas de alta calidad en solo unos minutos. Di adiós a perder horas rehaciendo los mismos componentes.
                    </p>
                </div>                {serviciosData.map((servicio, i) => (
                    <div
                        key={i}
                        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto"
                    >
                        {/* Imagen */}
                        <div
                            className={`flex justify-center ${i % 2 === 1 ? "md:order-2" : "md:order-1"
                                }`}
                        >
                            <Image
                                src={servicio.image}
                                alt={servicio.title}
                                width={500}
                                height={400}
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Texto */}
                        <div
                            className={`space-y-4 ${i % 2 === 1 ? "md:order-1" : "md:order-2"
                                }`}
                        >
                            <h3 className="text-2xl font-bold text-gray-900">{servicio.title}</h3>
                            <p className="text-gray-600">{servicio.description}</p>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                {servicio.features.map((f, idx) => (
                                    <li key={idx}>{f}</li>
                                ))}
                            </ul>
                            <a
                                href={servicio.link}
                                className="inline-block text-blue-600 hover:text-blue-800 text-sm font-medium pt-2"
                            >
                                Más información →
                            </a>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
}
