import Image from "next/image";
import CardImage from "@/components/cards/CardImage";
import CardServiceList from "@/components/cards/CardServiceList";
import QandA from "@/components/QandA";
import servicios from "@/data/servicios";
import tarifas from "@/data/tarifas";
import PricingCard from "@/components/cards/PricingCard";
import DotPatternBackground from '@/components/pattern/DotPatternBackground';
import Carrusel3D from "@/components/carousel/Carrusel3D";
export default function Home() {
    return (
        <div className="font-sans bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen pb-20">
            <main className="grid items-center text-center">

                {/* Encabezado con degradado */}
                <section className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 text-center">
                    <DotPatternBackground />
                </section>

                {/* Galería de imágenes */}
                <section className="px-4 md:py-8 md:space-y-8">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        <CardImage src="/designer.jpg" />
                        <CardImage src="/designer2.jpg" />
                        <CardImage src="/plan.jpg" />
                        <CardImage src="/meeting.jpg" />
                        <CardImage src="/super.jpg" />
                        <CardImage src="/worker.jpg" />
                        <CardImage src="/worker2.jpg" />
                        <CardImage src="/worker3.jpg" />
                    </div>
                </section>

                {/* Sección Kit Digital */}
                <section className="relative bg-cover bg-center bg-no-repeat bg-[url('/TestOpacidad/test_opacidad1.svg')] px-4 py-12 sm:py-16 md:py-24 dark:bg-gray-900">
                    {/* Contenido principal */}
                    <div className="relative max-w-7xl mx-auto text-center space-y-6 sm:space-y-8 py-12 md:space-y-10 px-2 sm:px-6 z-10">
                        {/* Títulos */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F] dark:text-white drop-shadow-lg">
                            A través del <span className="text-[#8B5CF6]">Kit Digital</span>, ofrecemos servicios
                        </h1>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F] dark:text-white drop-shadow-lg ">
                            de <span className="text-[#00B1CE]">alta calidad</span> sin <span className="text-[#1D1D1F]">barreras económicas</span>
                        </h1>

                        {/* Tarjetas de servicios */}
                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-6 pt-6">
                            {servicios.map((item, i) => (
                                <CardServiceList
                                    key={i}
                                    icon={item.icon()}
                                    title={item.title}
                                    message={item.message}
                                    linkText={item.linkText}
                                    linkUrl={item.linkUrl}
                                />
                            ))}
                        </div>
                    </div>

                </section>


                {/* Cards de tarifas */}
                <section className="relative bg-cover bg-center bg-no-repeat bg-[url('/TestOpacidad/test_opacidad2.svg')] px-4 py-12 sm:py-16 md:py-24 dark:bg-gray-900">
                    <div className="max-w-6xl mx-auto text-center px-4 md:px-0 py-12 space-y-6 md:space-y-8">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F] dark:text-white drop-shadow-lg">
                            Nos involucramos con cada <span className="text-[#ED711F]">cliente</span>
                        </h1>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F] dark:text-white drop-shadow-lg">
                            como si fuera parte de nuestro <span className="text-[#00B1CE]">equipo</span>
                        </h1>
                    </div>

                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-6 max-w-7xl mx-auto">
                        {tarifas.map((plan, i) => (
                            <PricingCard
                                key={i}
                                title={plan.title}
                                price={plan.price}
                                priceColor={plan.priceColor}
                                savings={plan.savings}
                                features={plan.features}
                            />
                        ))}
                    </div>
                </section>

                {/* Sección de FAQ */}
                <section className="bg-gray-900 py-16 px-4">
                    <h1 className="text-3xl sm:text-6xl text-center mb-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-300 to-rose-400">
                        Preguntas y Respuestas
                    </h1>
                    <QandA />
                </section>

                {/* <Carrusel3D /> */}
            </main>
        </div>
    );
}
