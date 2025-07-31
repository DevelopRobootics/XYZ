import Image from "next/image";
import CardImage from "@/components/cards/CardImage";
import CardServiceList from "@/components/cards/CardServiceList";
import QandA from "@/components/QandA";
import { FaHandsHelping } from 'react-icons/fa';
import servicios from "@/data/servicios";
import tarifas from "@/data/tarifas";
import PricingCard from "@/components/cards/PricingCard";
export default function Home() {
    return (
        <div className="font-sans bg-white text-black min-h-screen  pb-20">
            <main className="grid gap-8 items-center text-center">

                {/* Logo */}
                <section className="py-8">
                    <Image
                        className="dark:invert mx-auto w-[200px] sm:w-[300px]"
                        src="/XYZ.svg"
                        alt="XYZ logo"
                        width={300}
                        height={300}
                        priority
                    />
                </section>

                {/* Títulos principales */}
                <section className="space-y-2 px-4">
                    <h1 className="text-3xl sm:text-5xl font-bold leading-snug px-2 drop-shadow-md">
                        Impulsamos tu negocio,
                    </h1>
                    <h1 className="text-3xl sm:text-5xl font-bold leading-snug px-2 drop-shadow-md">
                        sin importar el tamaño de tu empresa
                    </h1>
                </section>

                {/* Descripción y Botón */}
                <section className="flex flex-col max-w-5xl mx-auto text-center py-8 items-center px-4">
                    <p className="text-sm sm:text-base leading-relaxed text-gray-700 sm:px-4">
                        XYZ Digital nace con la misión de ayudar a empresas a crecer en el mundo digital.<br />
                        En una era donde la visibilidad online lo es todo, trabajamos para que negocios —desde emprendedores locales hasta grandes corporaciones—<br />
                        logren destacar en los motores de búsqueda y conectar con sus clientes ideales.
                    </p>
                    <button className="mt-8 bg-black text-white px-4 py-3 rounded-full w-full sm:w-64 text-sm sm:text-base hover:bg-gray-800 transition duration-300 ease-in-out flex gap-2 items-center justify-center">
                        <FaHandsHelping className="w-4 h-4 transition-transform duration-200" />
                        Nuestros servicios
                    </button>
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
                <section className="relative bg-cover bg-center bg-no-repeat bg-[url('/test1.svg')] px-4 py-12 sm:py-16 md:py-20">
                    <div className="max-w-7xl mx-auto text-center space-y-6 sm:space-y-8 md:space-y-10 px-2 sm:px-6">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-black drop-shadow-lg">
                            A través del <span className="text-[#E63946]">Kit Digital</span>, ofrecemos servicios
                        </h1>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-black drop-shadow-lg">
                            de alta calidad sin barreras económicas.
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
                <section className="relative bg-cover bg-center bg-no-repeat bg-[url('/test1.svg')] px-4 py-12 sm:py-16 md:py-20">
                    {/* Mensaje adicional */}
                    <div className="max-w-6xl mx-auto text-center px-4 md:px-0 py-12 space-y-6 md:space-y-8">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-black drop-shadow-lg">
                            Nos <span className="text-blue-600">involucramos</span> con cada <span className="text-red-600">cliente</span>
                        </h1>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-black drop-shadow-lg">
                            como si fuera parte de nuestro <span className="text-green-600">equipo</span>
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


                {/* Sección de preguntas */}
                <section className="bg-black p-6 min-h-screen px-4">
                    <h1 className="text-white text-3xl sm:text-6xl text-center mb-6">
                        Preguntas y Respuestas
                    </h1>
                    <QandA />
                </section>

            </main>

        </div>
    );
}
