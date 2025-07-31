import Image from "next/image";
import CardImage from "@/components/cards/CardImage";
import CardServiceList from "@/components/cards/CardServiceList";
import QandA from "@/components/QandA";
import servicios from "@/data/servicios";
import tarifas from "@/data/tarifas";
import PricingCard from "@/components/cards/PricingCard";
import DotPatternBackground from '@/components/pattern/DotPatternBackground';

export default function Home() {
    return (
        <div className="font-sans bg-white text-black min-h-screen  pb-20">
            <main className="grid  items-center text-center">

                <section className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 text-center">
                    {/* Logo */}
                    <DotPatternBackground />

                </section>

                {/* Galerías de imágenes */}
                <section className="px-4 md:py-8 md:space-y-8">
                    {/* Primera fila */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        <CardImage src="/designer.jpg" />
                        <CardImage src="/designer2.jpg" />
                        <CardImage src="/plan.jpg" />
                        <CardImage src="/meeting.jpg" />
                    </div>

                    {/* Segunda fila */}
                    <div className="hidden sm:grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        <CardImage src="/super.jpg" />
                        <CardImage src="/worker.jpg" />
                        <CardImage src="/worker2.jpg" />
                        <CardImage src="/worker3.jpg" />
                    </div>
                </section>


                {/* Kit Digital sección */}
                <section className="relative bg-cover bg-center bg-no-repeat bg-[url('/test_opacidad1.svg')] px-4 py-12 sm:py-16 md:py-20">
                    <div className="max-w-7xl mx-auto text-center space-y-6 sm:space-y-8 md:space-y-10 px-2 sm:px-6">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-black drop-shadow-lg">
                            A través del <span className="text-[#8B5CF6]">Kit Digital</span>, ofrecemos servicios
                        </h1>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-black drop-shadow-lg">
                            de <span className="text-[#3B82F6]">alta calidad</span> sin <span className="text-[#F87171]">barreras económicas</span>.
                        </h1>

                    </div>

                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-6 max-w-7xl mx-auto">
                        {servicios.map((item, index) => (
                            <CardServiceList
                                key={index}
                                icon={item.icon()}
                                title={item.title}
                                message={item.message}
                                linkText={item.linkText}
                                linkUrl={item.linkUrl}
                            />
                        ))}
                    </div>

                    {/* Overlay opcional para contraste */}
                    <div className="absolute inset-0 bg-black/40 z-[-1]" />
                </section>


                {/* Cards de servicios: oculto en móviles */}
                <section className="relative bg-cover bg-center bg-no-repeat bg-[url('/test_opacidad2.svg')] px-4 py-12">
                    {/* Mensaje adicional */}
                    <div className="max-w-6xl mx-auto text-center px-4 md:px-0 py-12 space-y-6 md:space-y-8">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-black drop-shadow-lg">
                            Nos <span className="text-[#8B5CF6]">involucramos</span> con cada <span className="text-[#F87171]">cliente</span>
                        </h1>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-black drop-shadow-lg">
                            como si fuera parte de nuestro <span className="text-[#3B82F6]">equipo</span>
                        </h1>

                    </div>

                    {/* Tarjetas de tarifas */}
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-6 max-w-7xl mx-auto">
                        {tarifas.map((plan, index) => (
                            <PricingCard
                                key={index}
                                title={plan.title}
                                price={plan.price}
                                savings={plan.savings}
                                features={plan.features}
                            />
                        ))}
                    </div>
                </section>


                <section className="bg-black py-16 min-h-auto px-4">
                    <h1 className="text-3xl sm:text-6xl text-center mb-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-300 to-rose-400">
                        Preguntas y Respuestas
                    </h1>

                    <QandA />
                </section>


            </main>

        </div>
    );
}
