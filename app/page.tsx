import { CountryCard } from "@/components/country/CountryCard"
import { countries } from "@/config/countries"
import { siteConfig } from "@/config/site"

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section - Premium Design */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-sky-300 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-200 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 animate-fadeInUp">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-sky-400 blur-2xl opacity-50 animate-pulse"></div>
                <span className="relative text-8xl sm:text-9xl animate-float inline-block">✈️</span>
              </div>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {siteConfig.name}
            </span>
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl mb-6 max-w-4xl mx-auto font-light text-slate-700 animate-fadeInUp leading-relaxed" style={{animationDelay: '0.4s'}}>
            Tu guía gratuita para realizar trámites migratorios<br className="hidden sm:block" />
            y legales de forma autónoma
          </p>

          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-12 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
            Tutoriales paso a paso creados por y para migrantes.<br />
            Sin costos ocultos, sin gestores innecesarios.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp" style={{animationDelay: '0.8s'}}>
            <a
              href="#paises"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:shadow-sky-300/50 transition-all duration-300 hover:scale-105"
            >
              <span>Explorar países</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/acerca-de"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-700 font-medium rounded-full border-2 border-sky-200 hover:border-sky-400 hover:bg-white transition-all duration-300"
            >
              <span>Conocer más</span>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Countries Section - Modern Grid */}
      <section id="paises" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider mb-4 block">Destinos disponibles</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
              Selecciona tu país
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Encuentra guías específicas adaptadas al país donde te encuentras o planeas emigrar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries
              .sort((a, b) => a.priority - b.priority)
              .map((country, index) => (
                <div
                  key={country.id}
                  className="animate-fadeInUp"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <CountryCard country={country} />
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Features Section - Premium Cards */}
      <section className="py-24 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider mb-4 block">¿Por qué elegirnos?</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
              La plataforma que necesitas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400/10 to-blue-500/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative p-8 glass rounded-2xl h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg">
                  💯
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">100% Gratuito</h3>
                <p className="text-slate-600 leading-relaxed">
                  Toda nuestra información es completamente gratuita. Creemos que el conocimiento no debe ser un privilegio.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-indigo-500/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative p-8 glass rounded-2xl h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg">
                  📝
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">Paso a paso</h3>
                <p className="text-slate-600 leading-relaxed">
                  Tutoriales claros y detallados que te guían en cada etapa, sin tecnicismos innecesarios.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/10 to-purple-500/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative p-8 glass rounded-2xl h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg">
                  🤝
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">Hecho por migrantes</h3>
                <p className="text-slate-600 leading-relaxed">
                  Creado por personas que han pasado por lo mismo. Entendemos tus dificultades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Elegant */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 opacity-50"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-dark rounded-3xl p-12 text-center shadow-2xl">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Nuestra Misión</h2>
            <p className="text-xl text-slate-700 leading-relaxed mb-6">
              Empoderar a migrantes venezolanos y de otras nacionalidades para que puedan realizar
              sus trámites migratorios y legales de forma autónoma, ahorrando tiempo y dinero,
              evitando abusos de gestores, y construyendo una vida digna en el país que los acoge.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Nacemos de la experiencia de haber huido de situaciones difíciles y queremos ser una
              mano amiga para que otros migrantes puedan regularizar su situación y aportar
              positivamente a sus nuevos países.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
