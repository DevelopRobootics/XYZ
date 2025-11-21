"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

const slides = [
    "/Home/design.png",
    "/Home/develop.png",
    "/Home/meeting.jpg",
    "/Home/plan.jpg",
    "/Home/super.jpg",
    "/Home/designer.jpg",
];

export default function Carousel() {
    const containerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        const el = containerRef.current;
        if (!el || !isPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isPlaying]);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const scrollTo = currentIndex * el.clientWidth;
        el.scrollTo({ left: scrollTo, behavior: "smooth" });
    }, [currentIndex]);

    return (
        <div className="relative w-full overflow-hidden h-[500px] ">
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
                        className="flex-shrink-0 w-full h-[400px] relative transition-all duration-500"
                    >
                        <Image
                            src={src}
                            alt={`Slide ${i + 1}`}
                            fill
                            className="object-cover"
                            priority={i === 0}
                        />
                    </div>
                ))}
            </div>

            {/* Puntitos */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`w-3 h-3 rounded-full ${i === currentIndex ? "bg-white" : "bg-gray-400"
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
