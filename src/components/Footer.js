import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900 border-t border-gray-200">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="space-y-3 max-w-md">
            <h2 className="text-xl font-semibold text-black">XYZ Digital</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Soluciones digitales a medida para crecer con estrategia, datos y tecnología. Creamos experiencias claras y medibles para tu marca.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-black">
                Contacto
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <FaEnvelope className="text-[#03a1c4]" />
                  <a href="mailto:info@xyzdigital.com" className="hover:text-black">
                    info@xyzdigital.es
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FaPhoneAlt className="text-[#e7462a]" />
                  <a href="tel:+34123456789" className="hover:text-black">
                    +34 621 094 435
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-black">
                Legal
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li><span className="cursor-not-allowed select-none text-gray-500">Aviso legal</span></li>
                <li><span className="cursor-not-allowed select-none text-gray-500">Política de privacidad</span></li>
                <li><span className="cursor-not-allowed select-none text-gray-500">Términos y condiciones</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-gray-600">
          <span>© {new Date().getFullYear()} XYZ Digital. Todos los derechos reservados.</span>
          <div className="flex items-center gap-4 mt-3 sm:mt-0">
            <span className="flex items-center gap-2 text-gray-700 text-sm">
              <FaLinkedinIn className="text-[#03a1c4]" /> LinkedIn
            </span>
            <span className="flex items-center gap-2 text-gray-700 text-sm">
              <FaInstagram className="text-[#742b85]" /> Instagram
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
