import Image from "next/image";
import CardImage from "@/components/CardImage";
import CardInfo from "@/components/CardInfo";
import QandA from "@/components/QandA";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-white text-black">
      <main className="grid gap-10 row-start-2 items-center text-center ">
        <div>
          {/* Logo */}
          <Image
            className="dark:invert mx-auto"
            src="/XYZ.svg"
            alt="XYZ logo"
            width={300}
            height={300}
            priority
          />
        </div>
        {/* Títulos principales */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight drop-shadow-md">
            Impulsamos tu negocio,
          </h1>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight drop-shadow-md">
            sin importar el tamaño de tu empresa
          </h1>
        </div>
        <div>
          {/* Descripción */}
          <p className="text-base sm:text-lg leading-relaxed text-gray-700 px-4">
            XYZ Digital nace con la misión de ayudar a empresas a crecer en el mundo digital.<br />
            En una era donde la visibilidad online lo es todo, trabajamos para que negocios —desde emprendedores locales hasta grandes corporaciones—<br />
            logren destacar en los motores de búsqueda y conectar con sus clientes ideales.
          </p>

          {/* Botón */}
          <button className="mt-4 bg-black text-white px-6 py-3 rounded-full text-sm sm:text-base hover:bg-gray-800 transition">
            Nuestros servicios <span className="ml-2">★</span>
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4">
          <CardImage src={"/designer.jpg"} />
          <CardImage src={"/designer2.jpg"}/>
          <CardImage src={"/plan.jpg"} />
          <CardImage src={"/meeting.jpg"} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4">
          <CardImage src={"/super.jpg"} />
          <CardImage src={"/worker.jpg"}/>
          <CardImage src={"/worker2.jpg"} />
          <CardImage src={"/worker3.jpg"} />
        </div>
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight drop-shadow-md">
            A través del Kit Digital, ofrecemos servicios
          </h1>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight drop-shadow-md">
            de alta calidad sin barreras económicas.
          </h1>
        </div>
        <div className="bg-[url(/test1.svg)] bg-auto">
          <div className="grid grid-cols-3 gap-y-4 ml-15 mr-15">
            <CardInfo />
            <CardInfo />
            <CardInfo />
            <CardInfo />
            <CardInfo />
            <CardInfo />
          </div>
          <div className="mt-5">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight drop-shadow-md">
              Nos involucramos con cada cliente
            </h1>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight drop-shadow-md">
              como si fuera parte de nuestro equipo.
            </h1>
          </div>
          <div className="grid grid-cols-3 mt-5 ml-15 mr-15">
            <CardInfo />
            <CardInfo />
            <CardInfo />
          </div>
        </div>
        <div className="bg-black p-6 min-h-screen">
          <h1 className="text-gray-50 text-9xl ">Preguntas y Respuestas</h1>
          <QandA />
        </div>
      </main>
    </div>
  );
}

