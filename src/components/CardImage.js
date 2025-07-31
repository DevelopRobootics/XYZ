import Image from "next/image";

export default function CardImage({src}){
    return(
        <div className=" border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <Image 
                className="rounded-lg object-cover" 
                src={src} 
                width={500}
                height={500}
                alt="Placeholder image" 
            />    
        </div>

    );
}