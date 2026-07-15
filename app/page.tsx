import { CountryCard } from "@/components/country/CountryCard"
import { countries } from "@/config/countries"
import { siteConfig } from "@/config/site"

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-b from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            🤝 {siteConfig.name}
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
            Tu guía gratuita para realizar trámites migratorios y legales de forma autónoma
          </p>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
            Tutoriales paso a paso creados por y para migrantes. Sin costos ocultos, sin gestores
            innecesarios. Información clara y accesible para todos.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Selecciona tu país
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encuentra guías específicas para el país donde te encuentras o planeas emigrar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries
            .sort((a, b) => a.priority - b.priority)
            .map((country) => (
              <CountryCard key={country.id} country={country} />
            ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">¿Por qué SocorroDigital?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">💯</div>
              <h3 className="text-xl font-bold mb-2">100% Gratuito</h3>
              <p className="text-gray-600">
                Toda nuestra información es completamente gratuita. Creemos que la información no
                debe ser un privilegio.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">📝</div>
              <h3 className="text-xl font-bold mb-2">Paso a paso</h3>
              <p className="text-gray-600">
                Tutoriales claros y detallados que te guían en cada etapa de tus trámites, sin
                tecnicismos innecesarios.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-2">Hecho por migrantes</h3>
              <p className="text-gray-600">
                Creado por personas que han pasado por lo mismo que tú. Entendemos tus
                dificultades y necesidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Misión</h2>
          <p className="text-lg text-gray-700 mb-6">
            Empoderar a migrantes venezolanos y de otras nacionalidades para que puedan realizar
            sus trámites migratorios y legales de forma autónoma, ahorrando tiempo y dinero,
            evitando abusos de gestores, y construyendo una vida digna en el país que los acoge.
          </p>
          <p className="text-gray-600">
            Nacemos de la experiencia de haber huido de situaciones difíciles y queremos ser una
            mano amiga para que otros migrantes puedan regularizar su situación y aportar
            positivamente a sus nuevos países.
          </p>
        </div>
      </section>
    </div>
  )
}
