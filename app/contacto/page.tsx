import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contáctanos para sugerencias, dudas o reportar información desactualizada",
}

export default function ContactoPage() {
  return (
    <div>
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Contacto</h1>
          <p className="text-xl text-blue-100">
            Estamos aquí para ayudarte. Envíanos tus dudas, sugerencias o reporta información
            desactualizada.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="text-4xl mb-4">💬</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Sugerencias</h2>
            <p className="text-gray-700">
              ¿Hay algún trámite que te gustaría ver en la plataforma? ¿Tienes ideas para
              mejorarla? Nos encantaría escucharte.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="text-4xl mb-4">🔄</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Información desactualizada</h2>
            <p className="text-gray-700">
              Si encuentras información que ya no es correcta o ha cambiado, por favor
              repórtanoslo para mantener nuestros tutoriales al día.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="text-4xl mb-4">❓</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Dudas generales</h2>
            <p className="text-gray-700">
              Si tienes preguntas sobre cómo usar la plataforma o sobre SocorroDigital en
              general, estamos para ayudarte.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="text-4xl mb-4">🤝</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Colaborar</h2>
            <p className="text-gray-700">
              ¿Has pasado por un trámite y quieres ayudar a otros compartiendo tu experiencia?
              Contáctanos para colaborar.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Formas de contactarnos</h2>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📧</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <p className="text-gray-700">
                  Envíanos un correo a:{" "}
                  <a
                    href="mailto:contacto@socorrodigital.com"
                    className="text-blue-600 hover:underline"
                  >
                    contacto@socorrodigital.com
                  </a>
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  (Actualmente en configuración - próximamente activo)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-2xl">💬</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">WhatsApp / Telegram</h3>
                <p className="text-gray-700">Próximamente disponibles</p>
                <p className="text-sm text-gray-600 mt-1">
                  Estamos configurando estos canales para atenderte mejor
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-2">⚠️ Importante</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>
              • <strong>No ofrecemos asesoría legal personalizada.</strong> Para casos específicos,
              consulta con un abogado de extranjería.
            </li>
            <li>
              • <strong>No gestionamos trámites por terceros.</strong> SocorroDigital es una
              plataforma de información y tutoriales autoguiados.
            </li>
            <li>
              • <strong>Tiempo de respuesta:</strong> Hacemos nuestro mejor esfuerzo por responder
              en 48-72 horas, pero somos un proyecto pequeño manejado por voluntarios.
            </li>
          </ul>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Gracias por ser parte de la comunidad SocorroDigital 🤝
          </p>
        </div>
      </div>
    </div>
  )
}
