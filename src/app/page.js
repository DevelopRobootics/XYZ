import Image from "next/image";
import CardImage from "@/components/cards/CardImage";
import CardServiceList from "@/components/cards/CardServiceList";
import tarifas from "@/data/tarifas";
import PricingCard from "@/components/cards/PricingCard";
import DotPatternBackground from "@/components/pattern/DotPatternBackground";
import Carousel from "@/components/carousel/carousel3D";
import PackageShowcaseCard from "@/components/cards/PackageShowcaseCard";

import {
    FaCloud,
    FaBullhorn,
    FaCogs,
    FaGamepad,
    FaComments,
    FaGraduationCap,
} from "react-icons/fa";

const servicios = [
    {
        icon: <FaCloud className="w-6 h-6 text-[#742b85]" />,
        title: "Diseño Web",
        message:
            "Creamos sitios web atractivos y funcionales que representan tu marca en línea de manera efectiva y profesional.",
    },
    {
        icon: <FaBullhorn className="w-6 h-6 text-[#e7462a]" />,
        title: "Marketing Digital",
        message:
            "Impulsa tu presencia en línea con estrategias efectivas. Desde SEO hasta campañas en redes sociales, te ayudamos a alcanzar y atraer a tu audiencia ideal.",
    },
    {
        icon: <FaCogs className="w-6 h-6 text-[#03a1c4]" />,
        title: "Consultoría Técnica",
        message:
            "Asesoramos a tu empresa en la implementación de soluciones tecnológicas que optimizan procesos y mejoran la eficiencia operativa.",
        linkText: "Saber más",
        linkUrl: "/servicios",
    },
    {
        icon: <FaGamepad className="w-6 h-6 text-[#e7462a]" />,
        title: "Desarrollo de Aplicaciones",
        message:
            "Desarrollamos aplicaciones móviles y de escritorio personalizadas que satisfacen las necesidades específicas de tu negocio, mejorando la productividad y la experiencia del usuario.",
    },
    {
        icon: <FaComments className="w-6 h-6 text-[#03a1c4]" />,
        title: "Soporte Técnico",
        message:
            "Brindamos soporte técnico confiable y eficiente para garantizar que tus sistemas y tecnologías funcionen sin problemas, minimizando el tiempo de inactividad y maximizando la productividad.",
        linkText: "Saber más",
        linkUrl: "/servicios",
    },
    {
        icon: <FaGraduationCap className="w-6 h-6 text-[#742b85]" />,
        title: "Formación Digital",
        message:
            "Ofrecemos programas de formación digital adaptados a las necesidades de tu equipo, desde habilidades básicas hasta avanzadas, para potenciar su competencia tecnológica y mejorar el rendimiento laboral.",
    },
];

const SHOW_AFTER_SERVICIOS = true; // mostrar contenido después del botón de servicios

export default function Home() {
    return (
        <div className="font-sans bg-white text-black min-h-screen ">
            <main className="grid items-center text-center">

                {/* Encabezado con degradado */}
                <section className="relative bg-gradient-to-b from-white to-gray-50 text-center">
                    <DotPatternBackground />
                </section>

                {SHOW_AFTER_SERVICIOS && (
                    <>
                        {/* Galería de imágenes */}
                        <section className="px-4 md:py-8 md:space-y-8">
                            <Carousel />

                        </section>

                        <section className="relative bg-cover bg-center bg-no-repeat bg-[url('/TestOpacidad/test_opacidad1.svg')] px-4 py-16 sm:py-20 md:py-24">
                            {/* Tarjetas de servicios */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-6 max-w-7xl mx-auto md:mb-20">
                                {servicios.map((item, i) => (
                                    <CardServiceList
                                        key={i}
                                        icon={item.icon}
                                        title={item.title}
                                        message={item.message}
                                        linkText={item.linkText}
                                        linkUrl={item.linkUrl}
                                        animationDirection={i % 2 === 0 ? "left" : "right"}
                                        animationDelay={i * 120}
                                    />
                                ))}
                            </div>
                        </section>
                        {false && (
                        <section className="relative bg-cover bg-center bg-no-repeat bg-[url('/TestOpacidad/test_opacidad2.svg')] px-4 py-16 sm:py-20 md:py-24">
                            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                                {/* Texto + imagen izquierda */}
                                <div className="space-y-10">
                                    <div className="space-y-4">
                                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#1D1D1F] drop-shadow-lg">
                                            Nos involucramos con cada <span className="text-[#ED711F]">cliente</span>
                                        </h1>
                                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#1D1D1F] drop-shadow-lg">
                                            como si fuera parte de nuestro <span className="text-[#00B1CE]">equipo</span>
                                        </h1>
                                    </div>
                                    <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/40 backdrop-blur">
                                        <Image
                                            src="/Home/design.png"
                                            alt="Dashboard de proyectos"
                                            width={900}
                                            height={520}
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </div>

                                {/* Paquetes derecha estilo animado */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {[
                                        {
                                            title: "Paquete Básico",
                                            desc: "Procesos Digitales Locales. Habilitación y entrenamiento para automatización de procesos.",
                                            items: [
                                                "Herramientas de automatización",
                                                "Certificación ISO 27001",
                                                "Certificación ISO 9001",
                                            ],
                                            accent: "from-[#e7462a] via-[#742b85] to-[#03a1c4]",
                                        },
                                        {
                                            title: "Paquete Pro",
                                            desc: "Productividad RPA. Automatización web y escritorio con robots y soporte continuo.",
                                            items: [
                                                "OCR + Automatización",
                                                "Entrenamiento y soporte",
                                                "Certificación ISO 27001",
                                                "Certificación ISO 9001",
                                            ],
                                            accent: "from-[#03a1c4] via-[#742b85] to-[#e7462a]",
                                        },
                                        {
                                            title: "Paquete Especializado",
                                            desc: "Complejidad RPA Integrada. Curación semántica y automatización avanzada.",
                                            items: [
                                                "Curación semántica",
                                                "Herramientas de automatización",
                                                "Certificación ISO 27001",
                                                "Certificación ISO 9001",
                                            ],
                                            accent: "from-[#742b85] via-[#03a1c4] to-[#e7462a]",
                                        },
                                        {
                                            title: "Paquete Superior",
                                            desc: "Integración de procesos + IA. Automatización con robots, Machine Learning y minería inteligente.",
                                            items: [
                                                "IA + NLP + Visión computacional",
                                                "Minería de procesos, tareas y documentos",
                                                "Certificación ISO 27001",
                                                "Certificación ISO 9001",
                                            ],
                                            accent: "from-[#03a1c4] via-[#e7462a] to-[#742b85]",
                                        },
                                    ].map((card, idx) => (
                                        <PackageShowcaseCard key={idx} card={card} delay={idx * 120} />
                                    ))}
                                </div>
                            </div>
                        </section>
                        )}

                    </>
                )}

            </main>
        </div>
    );
}
