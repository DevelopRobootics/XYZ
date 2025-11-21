"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

const slides = [
    "/Home/design.png",
    "/Home/develop.png",
    "/Home/academy.png",
    "/Home/education.png",
    "/Home/fll.png",
    "/Home/ricorico.png",
    "/Home/roboopeques.png",
    "/Home/tienda.png",
];

export default function Carousel() {
    const containerRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    // Número de imágenes por página
    const itemsPerPage = 3;
    const totalPages = Math.ceil(slides.length / itemsPerPage);

    useEffect(() => {
        if (!isPlaying) return;

        const interval = setInterval(() => {
            setCurrentPage((prev) => (prev + 1) % totalPages);
        }, 4000);

        return () => clearInterval(interval);
    }, [isPlaying, totalPages]);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const scrollTo = currentPage * el.clientWidth;
        el.scrollTo({ left: scrollTo, behavior: "smooth" });
    }, [currentPage]);

    return (
        <div className="relative w-full overflow-hidden h-[400px] px-4">
            {/* Carrusel */}
            <div
                ref={containerRef}
                className="flex overflow-x-hidden scroll-smooth"
                style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                }}
            >
                <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

                {slides.map((src, i) => (
                    <div
                        key={i}
                        className="flex-shrink-0 w-1/3 h-[400px] relative transition-all duration-500 px-4 gap-4"
                    >
                        <Image
                            src={src}
                            alt={`Slide ${i + 1}`}
                            fill
                            className="object-cover "
                            priority={i === 0}
                        />
                    </div>
                ))}
            </div>

            {/* Puntitos por página */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 px-4">
                {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i)}
                        className={`w-3 h-3 rounded-full ${i === currentPage ? "bg-white" : "bg-gray-400"
                            } transition-all`}
                    />
                ))}
            </div>

            {/* Botón de pausa/play */}
            <button
                onClick={() => setIsPlaying((prev) => !prev)}
                className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm"
            >
                {isPlaying ? "⏸ Pausar" : "▶ Reproducir"}
            </button>
        </div>
    );
}
