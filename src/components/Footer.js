import { FaUsers, FaBriefcase, FaBlog, FaEnvelope, FaHandsHelping, FaDiscord, FaShareAlt, FaLock, FaFileContract, FaApple, FaAndroid, FaWindows, FaLaptop } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="mx-auto w-full max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 justify-items-center">
                    <div>
                        <h2 className="mb-6 text-sm font-bold text-[#3F3F3F] uppercase dark:text-white">Empresa</h2>
                        <ul className="text-gray-500 dark:text-gray-400 text-sm font-medium space-y-2">
                            <li><a href="#" className="flex items-center gap-2 hover:text-[#ED711F]"><FaUsers />Sobre nosotros</a></li>
                            <li><a href="#" className="flex items-center gap-2 hover:text-[#ED711F]"><FaBriefcase />Carreras</a></li>
                            <li><a href="#" className="flex items-center gap-2 hover:text-[#ED711F]"><FaBlog />Blog</a></li>
                            <li><a href="#" className="flex items-center gap-2 hover:text-[#ED711F]"><FaEnvelope />Contacto</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-bold text-[#3F3F3F] uppercase dark:text-white">Soporte</h2>
                        <ul className="text-gray-500 dark:text-gray-400 text-sm font-medium space-y-2">
                            <li><a href="#" className="flex items-center gap-2 hover:text-[#00B1CE]"><FaHandsHelping />Centro de ayuda</a></li>
                            <li><a href="#" className="flex items-center gap-2 hover:text-[#00B1CE]"><FaShareAlt />Redes Sociales</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-bold text-[#3F3F3F] uppercase dark:text-white">Legal</h2>
                        <ul className="text-gray-500 dark:text-gray-400 text-sm font-medium space-y-2">
                            <li><a href="#" className="flex items-center gap-2 hover:text-[#8B5CF6]"><FaLock />Privacidad</a></li>
                            <li><a href="#" className="flex items-center gap-2 hover:text-[#8B5CF6]"><FaFileContract />Términos</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-bold text-[#3F3F3F] uppercase dark:text-white">Plataformas</h2>
                        <ul className="text-gray-500 dark:text-gray-400 text-sm font-medium space-y-2">
                            <li><a href="#" className="flex items-center gap-2 hover:text-[#3f3f3f] dark:hover:text-white"><FaApple />iOS</a></li>
                            <li><a href="#" className="flex items-center gap-2 hover:text-[#3f3f3f] dark:hover:text-white"><FaAndroid />Android</a></li>
                            <li><a href="#" className="flex items-center gap-2 hover:text-[#3f3f3f] dark:hover:text-white"><FaWindows />Windows</a></li>
                            <li><a href="#" className="flex items-center gap-2 hover:text-[#3f3f3f] dark:hover:text-white"><FaLaptop />MacOS</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500 dark:text-gray-300 text-center md:text-left">
                    <p>© {new Date().getFullYear()}  XYZ Digital.Todos los derechos reservados.</p>
                    <p className="text-[#00B1CE] font-medium mt-2 sm:mt-0">Impulsamos tu negocio, sin importar su tamaño</p>
                </div>
            </div>
        </footer>
    )
}
