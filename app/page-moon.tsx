import { CountryCard } from "@/components/country/CountryCard"
import { countries } from "@/config/countries"
import { siteConfig } from "@/config/site"
import Image from "next/image"

export default function Home() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section - Earth Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 hero-gradient"></div>

        {/* Rotating Earth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] animate-rotate opacity-20">
          <div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 shadow-2xl">
            {/* Continentes simulados */}
            <div className="absolute top-1/4 left-1/3 w-32 h-24 bg-green-900/30 rounded-full blur-sm"></div>
            <div className="absolute top-1/2 right-1/4 w-40 h-32 bg-green-800/40 rounded-full blur-sm"></div>
            <div className="absolute bottom-1/3 left-1/4 w-36 h-28 bg-green-900/30 rounded-full blur-sm"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
          <h1 className="font-display text-7xl sm:text-8xl lg:text-9xl mb-8 reveal-text">
            SocorroDigital
          </h1>

          <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 reveal-text font-light" style={{animationDelay: '0.5s'}}>
            Una plataforma de ayuda humanitaria para migrantes.<br />
            Información gratuita, clara y accesible.
          </p>

          <div className="reveal-text flex justify-center gap-8 mb-16" style={{animationDelay: '0.8s'}}>
            <a
              href="#explore"
              className="px-8 py-4 border border-white/20 hover:border-white/40 transition-all duration-300 text-sm uppercase tracking-wider hover:bg-white/5"
            >
              Explorar
            </a>
            <a
              href="/acerca-de"
              className="px-8 py-4 bg-white text-black hover:bg-gray-200 transition-all duration-300 text-sm uppercase tracking-wider"
            >
              Nuestra Misión
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto reveal-text" style={{animationDelay: '1s'}}>
            <div className="text-center border-t border-white/10 pt-6">
              <div className="text-4xl font-display mb-2">3</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Países</div>
            </div>
            <div className="text-center border-t border-white/10 pt-6">
              <div className="text-4xl font-display mb-2">5</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Tutoriales</div>
            </div>
            <div className="text-center border-t border-white/10 pt-6">
              <div className="text-4xl font-display mb-2">100%</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Gratuito</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-600">
          <div className="text-xs uppercase tracking-wider mb-2">Scroll</div>
          <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent mx-auto"></div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider"></div>

      {/* Introduction Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm uppercase tracking-wider text-gray-500 mb-6 block">Introducción</span>
              <h2 className="font-display text-5xl lg:text-6xl mb-8 leading-tight">
                Migrar es un<br />derecho humano
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Miles de personas se ven forzadas a dejar sus países cada día. El proceso migratorio
                es complejo, costoso y está lleno de obstáculos. Muchos caen víctimas de gestores
                que cobran cantidades exorbitantes por trámites que pueden hacer ellos mismos.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                SocorroDigital nace para cambiar eso. Creamos tutoriales gratuitos, paso a paso,
                para que cualquier persona pueda regularizar su situación migratoria de forma autónoma.
              </p>
            </div>
            <div className="relative h-[600px] image-overlay">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-transparent rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center text-9xl opacity-20">
                🌍
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider"></div>

      {/* Countries Section */}
      <section id="explore" className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-sm uppercase tracking-wider text-gray-500 mb-6 block">Destinos</span>
            <h2 className="font-display text-5xl lg:text-6xl mb-8">
              Selecciona tu país
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl">
              Encuentra guías detalladas y actualizadas para el país donde te encuentras
              o al que planeas emigrar.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {countries.sort((a, b) => a.priority - b.priority).map((country, index) => (
              <div
                key={country.id}
                className="group relative border border-white/10 hover:border-white/20 transition-all duration-500 p-8"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="text-6xl mb-6">{country.flag}</div>
                <h3 className="font-display text-3xl mb-4">{country.name}</h3>
                <p className="text-gray-500 mb-6">{country.description}</p>

                {country.active ? (
                  <a
                    href={`/${country.slug}`}
                    className="inline-block text-sm uppercase tracking-wider border-b border-white/20 pb-1 hover:border-white transition-colors"
                  >
                    Ver guías →
                  </a>
                ) : (
                  <span className="inline-block text-sm uppercase tracking-wider text-gray-600">
                    Próximamente
                  </span>
                )}

                {/* Número decorativo */}
                <div className="absolute top-4 right-4 text-6xl font-display text-white/5">
                  0{index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider"></div>

      {/* Features Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-sm uppercase tracking-wider text-gray-500 mb-6 block">Características</span>
            <h2 className="font-display text-5xl lg:text-6xl">
              ¿Por qué SocorroDigital?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/10">
            <div className="bg-black p-12 relative group hover:bg-white/5 transition-all duration-500">
              <div className="big-number mb-8">01</div>
              <h3 className="text-2xl font-display mb-4">100% Gratuito</h3>
              <p className="text-gray-500">
                Toda nuestra información es completamente gratuita.
                El conocimiento no debe ser un privilegio.
              </p>
            </div>

            <div className="bg-black p-12 relative group hover:bg-white/5 transition-all duration-500">
              <div className="big-number mb-8">02</div>
              <h3 className="text-2xl font-display mb-4">Paso a paso</h3>
              <p className="text-gray-500">
                Tutoriales claros y detallados que te guían en cada etapa,
                sin tecnicismos innecesarios.
              </p>
            </div>

            <div className="bg-black p-12 relative group hover:bg-white/5 transition-all duration-500">
              <div className="big-number mb-8">03</div>
              <h3 className="text-2xl font-display mb-4">Por migrantes</h3>
              <p className="text-gray-500">
                Creado por personas que han vivido la migración.
                Entendemos tus dificultades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider"></div>

      {/* Journey Section with Images */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-sm uppercase tracking-wider text-gray-500 mb-6 block">El viaje</span>
            <h2 className="font-display text-5xl lg:text-6xl mb-8">
              Tu camino hacia<br />una vida digna
            </h2>
          </div>

          <div className="space-y-32">
            {/* Step 1 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-[500px] image-overlay order-2 lg:order-1">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-9xl opacity-30">📋</div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="big-number mb-8">01</div>
                <h3 className="font-display text-4xl mb-6">Encuentra tu trámite</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Explora nuestra biblioteca de tutoriales organizados por país y categoría.
                  Desde residencias hasta nacionalidades, todo explicado de forma clara.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="big-number mb-8">02</div>
                <h3 className="font-display text-4xl mb-6">Sigue los pasos</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Cada tutorial desglosa el proceso en pasos claros y sencillos.
                  Requisitos, documentos, costos oficiales y errores comunes a evitar.
                </p>
              </div>
              <div className="relative h-[500px] image-overlay">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-9xl opacity-30">✅</div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-[500px] image-overlay order-2 lg:order-1">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-9xl opacity-30">🌟</div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="big-number mb-8">03</div>
                <h3 className="font-display text-4xl mb-6">Logra tu objetivo</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Completa tu trámite de forma autónoma, ahorra dinero y tiempo.
                  Regulariza tu situación y construye una vida digna en tu nuevo país.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider"></div>

      {/* Final CTA Section */}
      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-6xl lg:text-7xl mb-8">
            Comienza tu viaje
          </h2>
          <p className="text-gray-400 text-xl mb-12">
            Únete a miles de migrantes que han tomado control de sus trámites migratorios.
          </p>
          <a
            href="#explore"
            className="inline-block px-12 py-5 bg-white text-black hover:bg-gray-200 transition-all duration-300 text-sm uppercase tracking-wider"
          >
            Explorar tutoriales
          </a>
        </div>
      </section>

      {/* Spacing */}
      <div className="h-32"></div>
    </div>
  )
}
