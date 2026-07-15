import type { Metadata } from "next"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "Quiénes somos",
  description: "Conoce la misión, visión y valores de SocorroDigital",
}

export default function AcercaDePage() {
  return (
    <div>
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Quiénes somos</h1>
          <p className="text-xl text-blue-100">
            Conoce la historia, misión y valores que impulsan {siteConfig.name}
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">🎯 Nuestra Misión</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Empoderar a migrantes venezolanos y de todas las nacionalidades para que puedan
            realizar sus trámites migratorios y legales de forma autónoma, sin necesidad de pagar a
            gestores o intermediarios. Queremos que cada persona tenga acceso a información clara,
            gratuita y paso a paso que le permita regularizar su situación migratoria, ahorrar
            tiempo y dinero, y construir una vida digna en el país que los acoge.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">🔭 Nuestra Visión</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Convertirnos en la plataforma de referencia en español para migrantes que buscan
            información confiable sobre trámites legales y migratorios. Aspiramos a:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">✓</span>
              <span className="text-gray-700">
                Expandirnos a todos los países con comunidades migrantes hispanohablantes
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">✓</span>
              <span className="text-gray-700">
                Ser la primera fuente de consulta antes de contratar cualquier gestor
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">✓</span>
              <span className="text-gray-700">
                Crear una comunidad de apoyo mutuo entre migrantes
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">✓</span>
              <span className="text-gray-700">
                Ayudar a miles de personas a regularizar su situación de forma legal y económica
              </span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">💎 Nuestros Valores</h2>
          <div className="grid gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">🤝 Solidaridad</h3>
              <p className="text-gray-700">
                Entendemos las dificultades del proceso migratorio porque lo hemos vivido. Queremos
                tender una mano a quienes están pasando por lo mismo.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">💯 Gratuidad</h3>
              <p className="text-gray-700">
                La información es un derecho, no un privilegio. Nunca cobraremos por nuestros
                tutoriales ni venderemos datos personales.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">👥 Comunidad</h3>
              <p className="text-gray-700">
                Creemos en el poder de compartir conocimiento entre personas que enfrentan los
                mismos desafíos. Juntos somos más fuertes.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">💪 Empoderamiento</h3>
              <p className="text-gray-700">
                No queremos que dependas de gestores. Queremos que seas autónomo y capaz de hacer
                tus propios trámites con confianza.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">🔍 Transparencia</h3>
              <p className="text-gray-700">
                Indicamos claramente nuestras fuentes, actualizamos la información constantemente y
                admitimos cuando algo está fuera de nuestro alcance.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">📚 Accesibilidad</h3>
              <p className="text-gray-700">
                Escribimos en lenguaje sencillo, sin tecnicismos innecesarios, para que cualquier
                persona pueda entender y actuar.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">📖 Nuestra Historia</h2>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              SocorroDigital nace de la experiencia personal de haber tenido que huir de situaciones
              de abuso y enfrentar la complejidad del sistema migratorio en un país extranjero. Como
              muchos migrantes, nos encontramos perdidos, sin saber a quién acudir, y siendo
              víctimas de gestores que cobraban cantidades exorbitantes por trámites que podíamos
              hacer nosotros mismos.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Después de aprender a navegar el sistema, regularizar nuestra situación y ayudar
              informalmente a decenas de personas con sus trámites, decidimos crear esta plataforma
              para que otros migrantes no tengan que pasar por las mismas dificultades.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Cada tutorial que escribimos es el resultado de investigación profunda, experiencia
              directa y el deseo genuino de ayudar. No somos abogados ni gestores, somos migrantes
              como tú que queremos compartir lo que hemos aprendido.
            </p>
          </div>
        </section>

        <section className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Quieres contribuir o sugerir un tutorial?
          </h2>
          <p className="text-gray-700 mb-6">
            Si has pasado por un trámite que no está en nuestra plataforma y quieres ayudar a otros,
            nos encantaría escucharte.
          </p>
          <a
            href="/contacto"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Contacta con nosotros
          </a>
        </section>
      </div>
    </div>
  )
}
