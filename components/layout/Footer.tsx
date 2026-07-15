import Link from "next/link"
import { siteConfig } from "@/config/site"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-sky-900 to-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">✈️</span>
              <span className="text-xl font-bold">{siteConfig.name}</span>
            </div>
            <p className="text-sky-200 text-sm">{siteConfig.description}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sky-100">Enlaces útiles</h3>
            <ul className="space-y-2 text-sky-200 text-sm">
              <li>
                <Link href="/acerca-de" className="hover:text-white transition-colors inline-flex items-center gap-1">
                  <span>→</span> Quiénes somos
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors inline-flex items-center gap-1">
                  <span>→</span> Preguntas frecuentes
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-white transition-colors inline-flex items-center gap-1">
                  <span>→</span> Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sky-100">Aviso Legal</h3>
            <p className="text-sky-200 text-sm">
              La información en este sitio es orientativa y no sustituye asesoramiento legal
              profesional. Siempre verifica la información con fuentes oficiales.
            </p>
          </div>
        </div>

        <div className="border-t border-sky-800 mt-8 pt-8 text-center text-sky-200 text-sm">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Creado con ❤️ por{" "}
            <span className="font-semibold text-white">{siteConfig.creator.name}</span>
          </p>
          <p className="mt-2">
            Ayudando a migrantes a construir una vida digna a través de la información gratuita y
            accesible.
          </p>
        </div>
      </div>
    </footer>
  )
}
