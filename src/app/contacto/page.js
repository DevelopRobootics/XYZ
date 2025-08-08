import Image from "next/image";
import { FaUsers, FaBullseye, FaHeart } from "react-icons/fa";

export default function Contactanos() {
    return (
        <main className=" text-gray-200 min-h-screen px-6 py-10">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto text-center mb-10">
                <h1 className="text-4xl font-semibold mb-4">Contacto</h1>
                <p className="text-gray-400 text-lg">
                    Conoce Nuestros Proyectos.
                </p>
                <div className="mt-6">
                    <Image
                        src="/equipo.jpg"
                        alt="Foto del equipo XYZ"
                        width={800}
                        height={400}
                        className="rounded-lg mx-auto"
                    />
                </div>
            </section>


        </main>
    );
}
