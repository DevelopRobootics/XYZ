"use client";
import { useState } from "react";

const data = [
    {
        question: " ¿Qué incluye el servicio de Presencia Digital Local?",
        answer:
            "Incluye una web corporativa basada en nuestra librería I+D, hosting de alto rendimiento, mantenimiento técnico 24/7, dominio, certificado SSL y soporte. Todo diseñado para que tu negocio tenga presencia segura y estable en internet.",
    },
    {
        question: "¿El servicio de Productividad PRO (CRM) funciona con cualquier tipo de negocio?",
        answer:
            "Sí. Está pensado para nichos como inmobiliarias, clínicas, agencias y servicios profesionales. Configuramos el CRM según tu funnel real de ventas y damos formación inicial para que lo uses desde el primer día.",
    },
    {
        question: "¿Puedo integrar mi sistema de reservas si soy un restaurante o hotel?",
        answer:
            "Sí. El Pack HORECA 360 incluye sistema de reservas con baja o nula comisión, menú QR inteligente y la integración con CRM para seguimiento y fidelización de clientes.",
    },
    {
        question: "¿Qué es VeriFactu y por qué lo necesito?",
        answer:
            "VeriFactu es el sistema oficial de la Agencia Tributaria para garantizar facturas verificadas y evitar sanciones. Nuestro servicio incluye la implementación completa, certificación, formación y soporte legal-técnico continuo.",
    },
    {
        question: "¿Ofrecen mantenimiento mensual?",
        answer:
            "Sí. Todos nuestros productos incluyen planes mensuales opcionales o integrados para mantenimiento técnico, actualizaciones, soporte y mejoras continuas.",
    },
];

export default function QandA() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-2xl mt-10 mx-auto divide-y divide-gray-700">
            {data.map((item, index) => (
                <div key={index}>
                    <button
                        onClick={() => toggle(index)}
                        className="flex justify-between items-center w-full p-4 text-left font-semibold text-blue-200 bg-gray-900 text-[#8B5CF6] hover:bg-gray-800 transition duration-300 ease-in-out"
                    >
                        <span>{item.question}</span>
                        <svg
                            className={`w-5 h-5 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {openIndex === index && (
                        <div className="p-4 text-white bg-gray-900 text-justify">
                            {item.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}