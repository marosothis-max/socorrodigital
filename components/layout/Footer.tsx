import Link from "next/link"
import { siteConfig } from "@/config/site"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">✈️</span>
              <span className="text-3xl font-black">{siteConfig.name}</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              {siteConfig.description}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300">
                <span>📱</span>
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300">
                <span>📧</span>
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300">
                <span>🌐</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Enlaces rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/acerca-de" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <span>→</span> Acerca de
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <span>→</span> FAQ
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <span>→</span> Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Legal</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              La información es orientativa y no sustituye asesoramiento legal profesional.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
            </p>
            <p className="text-gray-400">
              Creado con ❤️ por <span className="text-gradient font-bold">{siteConfig.creator.name}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
