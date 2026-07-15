import Link from "next/link"
import { siteConfig } from "@/config/site"

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="font-display text-2xl mb-4">{siteConfig.name}</div>
            <p className="text-gray-500 text-sm leading-relaxed">{siteConfig.description}</p>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-6">Enlaces</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/acerca-de" className="text-gray-400 hover:text-white transition-colors">
                  Acerca de
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  Preguntas frecuentes
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-6">Legal</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              La información es orientativa y no sustituye asesoramiento legal profesional.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()} {siteConfig.name}
            </p>
            <p>
              Creado con dedicación por <span className="text-white">{siteConfig.creator.name}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
