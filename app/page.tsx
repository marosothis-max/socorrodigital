import { CountryCard } from "@/components/country/CountryCard"
import { countries } from "@/config/countries"
import { siteConfig } from "@/config/site"
import { Logo } from "@/components/ui/Logo"

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section - Razorpay Exact Colors */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1515FF]">
        {/* Elementos decorativos con los colores correctos */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Formas geométricas azul y negro */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#151515] rounded-full opacity-20 blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-black rounded-full opacity-30 blur-3xl animate-floatSlow"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl animate-float" style={{animationDelay: '2s'}}></div>

          {/* Iconos flotantes */}
          <div className="floating-icon top-1/4 left-1/4 opacity-20 animate-float">
            <Logo className="w-24 h-24 opacity-50" animated={false} />
          </div>
          <div className="floating-icon top-1/3 right-1/4 text-5xl text-white/20 animate-floatSlow">🌍</div>
          <div className="floating-icon bottom-1/3 left-1/3 text-4xl text-white/20 animate-float" style={{animationDelay: '1s'}}>📋</div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Logo grande en el hero */}
          <div className="mb-8 animate-bounceIn flex justify-center">
            <Logo className="w-32 h-32" />
          </div>

          {/* Badge */}
          <div className="mb-8 animate-bounceIn" style={{animationDelay: '0.3s'}}>
            <span className="inline-block px-8 py-3 bg-white text-[#1515FF] rounded-full font-bold text-sm shadow-xl">
              🚀 Tu viaje migratorio comienza aquí
            </span>
          </div>

          {/* Título principal */}
          <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black mb-6 animate-slideInUp text-white">
            SocorroDigital
          </h1>

          <p className="text-2xl sm:text-3xl lg:text-4xl text-white mb-8 font-bold max-w-4xl mx-auto animate-slideInUp" style={{animationDelay: '0.2s'}}>
            Tutoriales gratuitos para tus<br />
            trámites migratorios
          </p>

          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-12 animate-slideInUp" style={{animationDelay: '0.4s'}}>
            Información clara, paso a paso y sin costos. Hecho por migrantes, para migrantes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slideInUp" style={{animationDelay: '0.6s'}}>
            <a
              href="#paises"
              className="px-10 py-5 bg-white text-[#1515FF] font-black rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
            >
              Explorar países →
            </a>
            <a
              href="/acerca-de"
              className="px-10 py-5 bg-[#151515] text-white font-black rounded-full border-2 border-white/20 hover:border-white/40 hover:shadow-lg transition-all duration-300 text-lg"
            >
              Conocer más
            </a>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto animate-slideInUp" style={{animationDelay: '0.8s'}}>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover-lift">
              <div className="text-5xl font-black text-white mb-2">3</div>
              <div className="text-white/70 font-semibold">Países disponibles</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover-lift">
              <div className="text-5xl font-black text-white mb-2">5+</div>
              <div className="text-white/70 font-semibold">Tutoriales activos</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover-lift">
              <div className="text-5xl font-black text-white mb-2">100%</div>
              <div className="text-white/70 font-semibold">Gratuito siempre</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Why Section - Azul y Negro */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-[#1515FF] text-white rounded-full font-bold text-sm mb-4">
              ¿Por qué nosotros?
            </span>
            <h2 className="text-5xl sm:text-6xl font-black text-[#151515] mb-6">
              La plataforma que<br />
              estabas buscando
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group">
              <div className="bg-gradient-to-br from-[#1515FF]/10 to-[#1515FF]/5 rounded-3xl p-8 hover-lift h-full border-2 border-[#1515FF]/20">
                <div className="w-16 h-16 bg-[#1515FF] rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg">
                  💯
                </div>
                <h3 className="text-2xl font-black text-[#151515] mb-4">100% Gratuito</h3>
                <p className="text-gray-700 leading-relaxed">
                  Sin suscripciones, sin pagos ocultos. Toda nuestra información es completamente gratuita y accesible para todos.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group">
              <div className="bg-gradient-to-br from-[#151515]/10 to-[#151515]/5 rounded-3xl p-8 hover-lift h-full border-2 border-[#151515]/20">
                <div className="w-16 h-16 bg-[#151515] rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg">
                  📝
                </div>
                <h3 className="text-2xl font-black text-[#151515] mb-4">Paso a paso</h3>
                <p className="text-gray-700 leading-relaxed">
                  Tutoriales detallados que te guían en cada etapa. Sin tecnicismos, con lenguaje claro y ejemplos reales.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group">
              <div className="bg-gradient-to-br from-[#1515FF]/10 to-[#1515FF]/5 rounded-3xl p-8 hover-lift h-full border-2 border-[#1515FF]/20">
                <div className="w-16 h-16 bg-[#1515FF] rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg">
                  🤝
                </div>
                <h3 className="text-2xl font-black text-[#151515] mb-4">Hecho por migrantes</h3>
                <p className="text-gray-700 leading-relaxed">
                  Creado por personas que vivieron el proceso. Entendemos tus desafíos porque los vivimos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Section - Fondo azul */}
      <section id="paises" className="py-24 px-4 bg-gradient-to-br from-[#1515FF] to-[#0000CC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-white text-[#1515FF] rounded-full font-bold text-sm mb-4">
              Destinos disponibles
            </span>
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
              Elige tu destino
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Guías actualizadas y verificadas para cada país
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {countries.sort((a, b) => a.priority - b.priority).map((country, index) => (
              <div
                key={country.id}
                className="animate-slideInUp"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`bg-white/10 backdrop-blur-lg border-2 border-white/20 rounded-3xl p-8 hover-lift h-full ${
                  country.active ? '' : 'opacity-75'
                }`}>
                  <div className="text-7xl mb-6 animate-float">{country.flag}</div>
                  <h3 className="text-3xl font-black text-white mb-3">{country.name}</h3>
                  <p className="text-white/70 mb-6">{country.description}</p>

                  {country.active ? (
                    <a
                      href={`/${country.slug}`}
                      className="inline-block px-6 py-3 bg-white text-[#1515FF] font-bold rounded-full hover:shadow-lg transition-all duration-300"
                    >
                      Ver guías →
                    </a>
                  ) : (
                    <div className="inline-block px-6 py-3 bg-[#151515] text-white font-bold rounded-full">
                      Próximamente 🚀
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works - Azul y Negro */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-6 py-2 bg-[#151515] text-white rounded-full font-bold text-sm mb-4">
              Cómo funciona
            </span>
            <h2 className="text-5xl sm:text-6xl font-black text-[#151515] mb-6">
              Tu camino en 3 pasos
            </h2>
          </div>

          <div className="space-y-32">
            {/* Step 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative h-[400px] bg-gradient-to-br from-[#1515FF] to-[#0000CC] rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-9xl animate-float text-white/80">📋</div>
                  </div>
                  <div className="absolute top-4 right-4 w-24 h-24 bg-white rounded-full opacity-20 blur-xl"></div>
                  <div className="absolute bottom-4 left-4 w-32 h-32 bg-[#151515] rounded-full opacity-30 blur-xl"></div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-block px-6 py-3 bg-[#1515FF] text-white rounded-full font-black text-2xl mb-6">
                  01
                </div>
                <h3 className="text-4xl font-black text-[#151515] mb-6">
                  Encuentra tu trámite
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Explora nuestra biblioteca organizada por países y categorías. Desde residencias hasta nacionalidades.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#1515FF] rounded-full flex items-center justify-center text-white text-xs">✓</span>
                    Búsqueda fácil e intuitiva
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#1515FF] rounded-full flex items-center justify-center text-white text-xs">✓</span>
                    Información actualizada
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#1515FF] rounded-full flex items-center justify-center text-white text-xs">✓</span>
                    Sin registro requerido
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-6 py-3 bg-[#151515] text-white rounded-full font-black text-2xl mb-6">
                  02
                </div>
                <h3 className="text-4xl font-black text-[#151515] mb-6">
                  Sigue los pasos
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Cada tutorial está desglosado en pasos claros y sencillos de seguir.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#151515] rounded-full flex items-center justify-center text-white text-xs">✓</span>
                    Requisitos detallados
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#151515] rounded-full flex items-center justify-center text-white text-xs">✓</span>
                    Documentos necesarios
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#151515] rounded-full flex items-center justify-center text-white text-xs">✓</span>
                    Costos oficiales
                  </li>
                </ul>
              </div>
              <div>
                <div className="relative h-[400px] bg-gradient-to-br from-[#151515] to-black rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-9xl animate-floatSlow text-white/80">✅</div>
                  </div>
                  <div className="absolute top-4 left-4 w-24 h-24 bg-[#1515FF] rounded-full opacity-30 blur-xl"></div>
                  <div className="absolute bottom-4 right-4 w-32 h-32 bg-white rounded-full opacity-10 blur-xl"></div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative h-[400px] bg-gradient-to-br from-[#1515FF] to-[#0000CC] rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-9xl animate-float text-white/80">🎯</div>
                  </div>
                  <div className="absolute top-4 right-4 w-24 h-24 bg-white rounded-full opacity-20 blur-xl"></div>
                  <div className="absolute bottom-4 left-4 w-32 h-32 bg-[#151515] rounded-full opacity-30 blur-xl"></div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-block px-6 py-3 bg-[#1515FF] text-white rounded-full font-black text-2xl mb-6">
                  03
                </div>
                <h3 className="text-4xl font-black text-[#151515] mb-6">
                  Completa tu trámite
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Ahorra tiempo y dinero haciendo el trámite tú mismo con nuestra guía.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#1515FF] rounded-full flex items-center justify-center text-white text-xs">✓</span>
                    Sin intermediarios
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#1515FF] rounded-full flex items-center justify-center text-white text-xs">✓</span>
                    Ahorra dinero
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#1515FF] rounded-full flex items-center justify-center text-white text-xs">✓</span>
                    Controla tu proceso
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final - Azul */}
      <section className="py-32 px-4 bg-[#1515FF] text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#151515]/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8">
            Comienza tu viaje hoy
          </h2>
          <p className="text-2xl mb-12 opacity-90">
            Únete a miles de migrantes que ya tomaron control de sus trámites
          </p>
          <a
            href="#paises"
            className="inline-block px-12 py-6 bg-white text-[#1515FF] font-black rounded-full text-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            Explorar tutoriales →
          </a>
        </div>
      </section>
    </div>
  )
}
