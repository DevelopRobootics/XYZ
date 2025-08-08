import { FaLaptopCode, FaBullhorn, FaLightbulb, FaMobileAlt, FaHeadset, FaGraduationCap } from "react-icons/fa";

const servicios = [
    {
        icon: () => <FaLaptopCode />,
        title: "Diseño Web",
        message: "Creamos sitios visuales y optimizados.",
        linkText: "Ver servicio",
        linkUrl: "/servicios/web",
    },
    {
        icon: () => <FaBullhorn />,
        title: "Marketing Digital",
        message: "Impulsa tu marca con estrategia digital.",
        linkText: "Descubrir",
        linkUrl: "/servicios/marketing",
    },
    {
        icon: () => <FaLightbulb />,
        title: "Consultoría Técnica",
        message: "Te asesoramos en tu transformación digital.",
        linkText: "Saber más",
        linkUrl: "/servicios/consultoria",
    },
    {
        icon: () => <FaMobileAlt />,
        title: "Desarrollo de Aplicaciones",
        message: "Creamos aplicaciones a medida para tu negocio.",
        linkText: "Ver más",
        linkUrl: "/servicios/aplicaciones",
    },
    {
        icon: () => <FaHeadset />,
        title: "Soporte Técnico",
        message: "Brindamos asistencia técnica especializada.",
        linkText: "Contactar",
        linkUrl: "/servicios/soporte",
    },
    {
        icon: () => <FaGraduationCap />,
        title: "Formación Digital",
        message: "Capacitación en herramientas digitales.",
        linkText: "Inscribirse",
        linkUrl: "/servicios/formacion",
    },
];

export default servicios;
