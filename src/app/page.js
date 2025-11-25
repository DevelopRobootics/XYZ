import Image from "next/image";
import CardImage from "@/components/cards/CardImage";
import CardServiceList from "@/components/cards/CardServiceList";
import QandA from "@/components/QandA";
import tarifas from "@/data/tarifas";
import PricingCard from "@/components/cards/PricingCard";
import DotPatternBackground from '@/components/pattern/DotPatternBackground';
import Carousel from "@/components/carousel/carousel3D";
const servicios = [
    {
        iconSrc: "/Icons/Cloud.png",
        title: "Diseño Web",
        message:
            "Creamos sitios web atractivos y funcionales que representan tu marca en línea de manera efectiva y profesional.",

    },
    {
        iconSrc: "/Icons/Pipe.png",
        title: "Marketing Digital",
        message:
            "Impulsa tu presencia en línea con estrategias efectivas. Desde SEO hasta campañas en redes sociales, te ayudamos a alcanzar y atraer a tu audiencia ideal.",

    },
    {
        iconSrc: "/Icons/Setting.png",
        title: "Consultoría Técnica",
        message:
            "Asesoramos a tu empresa en la implementación de soluciones tecnológicas que optimizan procesos y mejoran la eficiencia operativa.",
        linkText: "Saber más",
        linkUrl: "/servicios",
    },
    {
        iconSrc: "/Icons/Gamepad.png",
        title: "Desarrollo de Aplicaciones",
        message:
            "Desarrollamos aplicaciones móviles y de escritorio personalizadas que satisfacen las necesidades específicas de tu negocio, mejorando la productividad y la experiencia del usuario.",

    },
    {
        iconSrc: "/Icons/Chat.png",
        title: "Soporte Técnico",
        message:
            "Brindamos soporte técnico confiable y eficiente para garantizar que tus sistemas y tecnologías funcionen sin problemas, minimizando el tiempo de inactividad y maximizando la productividad.",
        linkText: "Saber más",
        linkUrl: "/servicios",
    },
    {
        iconSrc: "/Icons/Folder.png",
        title: "Formación Digital",
        message:
            "Ofrecemos programas de formación digital adaptados a las necesidades de tu equipo, desde habilidades básicas hasta avanzadas, para potenciar su competencia tecnológica y mejorar el rendimiento laboral.",

    },
];




export default function Home() {
    return (
        <div className="font-sans bg-white text-black min-h-screen ">
            <main className="grid items-center text-center">

                {/* Encabezado con degradado */}
                <section className="relative bg-gradient-to-b from-white to-gray-50 text-center">
                    <DotPatternBackground />
                </section>

                {/* Galería de imágenes */}
                <section className="px-4 md:py-8 md:space-y-8">
                    <Carousel />

                </section>

                {/* Sección Kit Digital */}
                <section className="relative bg-[#1D1D1F] px-4 py-12 sm:py-16">
                    {/* Contenido principal */}
                    <div className="relative max-w-7xl mx-auto text-center space-y-6 sm:space-y-8 py-12 md:space-y-10 px-2 sm:px-6 z-10">
                        {/* Títulos */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white drop-shadow-lg sm:leading-snug md:leading-snug">
                            A través del Kit Digital, ofrecemos servicios <br />de alta calidad sin barreras económicas
                        </h1>

                        <div className="flex justify-center mt-8">
                            <img src="/Home/laptop.png"></img>
                        </div>
                    </div>
                </section>
                <section className="relative bg-cover bg-center bg-no-repeat bg-[url('/TestOpacidad/test_opacidad1.svg')] px-4 py-44">
                    {/* Tarjetas de servicios */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-6 max-w-7xl mx-auto md:mb-20">
                        {servicios.map((item, i) => (
                            <CardServiceList
                                key={i}
                                iconSrc={item.iconSrc}
                                title={item.title}
                                message={item.message}
                                linkText={item.linkText}
                                linkUrl={item.linkUrl}
                            />
                        ))}

                    </div>
                </section>
                <section className="relative bg-cover bg-center bg-no-repeat bg-[url('/TestOpacidad/test_opacidad2.svg')] px-4 py-12 sm:py-16 md:py-32">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* Título en col-span-2 */}
                        <div className="col-span-1 sm:col-span-2 space-y-6">
                            <div className="text-center px-4 md:px-0 py-12 space-y-6">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#1D1D1F] drop-shadow-lg">
                                    Nos involucramos con cada <span className="text-[#ED711F]">cliente</span>
                                </h1>
                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#1D1D1F] drop-shadow-lg">
                                    como si fuera parte de nuestro <span className="text-[#00B1CE]">equipo</span>
                                </h1>
                            </div>
                        </div>

                        {/* Paquete Básico */}
                        <div className="min-h-[320px] bg-gradient-to-r from-orange-500 to-orange-700 rounded-tl-[2rem] rounded-br-[2rem] p-6 shadow-lg text-white flex flex-col justify-between transform transition duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl">
                            <div>
                                <h3 className="text-xl font-bold mb-2">Paquete Básico</h3>
                                <p className="text-sm mb-4">
                                    Procesos Digitales Locales. Habilitación y entrenamiento para automatización de procesos.
                                </p>
                                <ul className="text-xs list-disc list-inside space-y-1">
                                    <li>Herramientas de automatización</li>
                                    <li>Certificación ISO 27001</li>
                                    <li>Certificación ISO 9001</li>
                                </ul>
                            </div>
                        </div>

                        {/* Paquete Pro */}
                        <div className="min-h-[320px] bg-orange-400 rounded-tr-[3rem] rounded-bl-[3rem] p-6 shadow-lg text-gray-900 flex flex-col justify-between transform transition duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl">
                            <div>
                                <h3 className="text-xl font-bold mb-2">Paquete Pro</h3>
                                <p className="text-sm mb-4">
                                    Productividad RPA. Automatización web y escritorio con robots y soporte continuo.
                                </p>
                                <ul className="text-xs list-disc list-inside space-y-1">
                                    <li>OCR + Automatización</li>
                                    <li>Entrenamiento y soporte</li>
                                    <li>Certificación ISO 27001</li>
                                    <li>Certificación ISO 9001</li>
                                </ul>
                            </div>
                        </div>

                        {/* Paquete Especializado */}
                        <div className="min-h-[320px] bg-gradient-to-b from-blue-600 to-blue-800 rounded-bl-[2rem] rounded-tl-[2rem] p-6 shadow-lg text-white flex flex-col justify-between transform transition duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl">
                            <div>
                                <h3 className="text-xl font-bold mb-2">Paquete Especializado</h3>
                                <p className="text-sm mb-4">
                                    Complejidad RPA Integrada. Curación semántica y automatización avanzada.
                                </p>
                                <ul className="text-xs list-disc list-inside space-y-1 text-blue-100">
                                    <li>Curación semántica</li>
                                    <li>Herramientas de automatización</li>
                                    <li>Certificación ISO 27001</li>
                                    <li>Certificación ISO 9001</li>
                                </ul>
                            </div>
                        </div>

                        {/* Paquete Superior */}
                        <div className="min-h-[320px] bg-purple-700 rounded-br-[2rem] rounded-tr-[2rem] p-6 shadow-lg text-white flex flex-col justify-between transform transition duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl">
                            <div>
                                <h3 className="text-xl font-bold mb-2">Paquete Superior</h3>
                                <p className="text-sm mb-4">
                                    Integración de procesos + IA. Automatización con robots, Machine Learning y minería inteligente.
                                </p>
                                <ul className="text-xs list-disc list-inside space-y-1 text-purple-200">
                                    <li>IA + NLP + Visión computacional</li>
                                    <li>Minería de procesos, tareas y documentos</li>
                                    <li>Certificación ISO 27001</li>
                                    <li>Certificación ISO 9001</li>
                                </ul>
                            </div>
                        </div>

                        {/* Imagen larga al final */}
                        <div className="col-span-1 sm:col-span-2 lg:col-span-2">
                            <img
                                src="/Home/design.png"
                                alt="Imagen ilustrativa de servicios"
                                className="w-full h-auto rounded-xl shadow-lg"
                            />
                        </div>

                    </div>
                </section>

                <QandA />

            </main>
        </div>
    );
}
