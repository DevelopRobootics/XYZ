export default function CardImage({ src }) {
    return (
        <div className="">
            <Image
                className="rounded-lg object-cover w-[100%] h-[60%] hover:scale-105 transition-transform duration-300 ease-in-out"
                src={src}
                width={500}
                height={500}
                alt="Placeholder image"
            />
        </div>
    );
}
import Image from "next/image";