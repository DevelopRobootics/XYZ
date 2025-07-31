"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const images = [
    "/designer.jpg",
    "/designer.jpg",
    "/designer.jpg",
    "/designer.jpg",
    "/designer.jpg",
    "/designer.jpg",
    "/designer.jpg",
    "/designer.jpg",
];

export default function Carrusel3D() {
const carouselRef = useRef(null);

    useEffect(() => {
        let angle = 0;
        const interval = setInterval(() => {
            angle += 0.5;
            if (carouselRef.current) {
                carouselRef.current.style.transform = `rotateY(${angle}deg)`;
            }
        }, 30);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-screen h-[400px] perspective bg-[#111] overflow-hidden flex items-center justify-center">
            <div
                ref={carouselRef}
                className="w-[100vw] h-full flex justify-center items-center relative"
                style={{ transformStyle: "preserve-3d", transition: "transform 1s" }}
            >
                {images.map((src, i) => {
                    const theta = (360 / images.length) * i;
                    return (
                        <div
                            key={i}
                            className="absolute w-[20vw] h-64 rounded-lg overflow-hidden shadow-lg"
                            style={{
                                transform: `rotateY(${theta}deg) translateZ(500px)`,
                                transformOrigin: "50% 50%",
                            }}
                        >
                            <Image
                                src={src}
                                alt={`Imagen ${i + 1}`}
                                width={500}
                                height={400}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
