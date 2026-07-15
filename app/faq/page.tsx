"use client"

import { useState } from "react"
import type { Metadata } from "next"

const faqs = [
  {
    question: "¿Es realmente gratis usar SocorroDigital?",
    answer:
      "Sí, completamente gratis. Nunca cobraremos por acceder a nuestros tutoriales ni venderemos tus datos. Nuestro objetivo es ayudar, no lucrar.",
  },
  {
    question: "¿Quién crea los tutoriales?",
    answer:
      "Los tutoriales son creados por migrantes que han pasado por los mismos procesos. Investigamos a fondo cada trámite, consultamos fuentes oficiales y documentamos nuestra experiencia directa.",
  },
  {
    question: "¿Puedo confiar en la información que encuentro aquí?",
    answer:
      "Hacemos todo lo posible por mantener la información actualizada y precisa, consultando fuentes oficiales. Sin embargo, las leyes y procedimientos pueden cambiar. Siempre verifica la información con las autoridades competentes y considera consultar con un abogado para casos complejos.",
  },
  {
    question: "¿SocorroDigital reemplaza a un abogado?",
    answer:
      "No. Somos una fuente de información orientativa que te ayuda a entender los procesos y, en muchos casos, realizarlos tú mismo. Para situaciones complejas, con antecedentes legales o que requieran defensa especializada, siempre recomendamos consultar con un abogado de extranjería.",
  },
  {
    question: "¿Por qué algunos países o tutoriales dicen 'próximamente'?",
    answer:
      "Estamos expandiendo constantemente nuestro contenido. Empezamos con España porque es donde tenemos más experiencia directa. Iremos agregando más países y categorías de trámites progresivamente.",
  },
  {
    question: "¿Puedo sugerir un tutorial que no está en la plataforma?",
    answer:
      "¡Por supuesto! Nos encantaría saber qué tutoriales te serían útiles. Contáctanos a través de nuestra página de contacto y cuéntanos qué trámite necesitas.",
  },
  {
    question: "¿Cómo sé si la información está actualizada?",
    answer:
      "Cada tutorial tiene una fecha de última actualización en la parte superior. Nos esforzamos por revisar y actualizar el contenido regularmente, pero si encuentras información desactualizada, por favor avísanos.",
  },
  {
    question: "¿Ofrecen asesoría personalizada?",
    answer:
      "No. SocorroDigital es una plataforma de información y tutoriales autoguiados. No ofrecemos asesoría legal personalizada ni gestionamos trámites por terceros. Si necesitas ayuda específica, te recomendamos consultar con un abogado de extranjería.",
  },
  {
    question: "¿Qué hago si mi caso es diferente a lo descrito en el tutorial?",
    answer:
      "Los tutoriales cubren los casos más comunes. Si tu situación es diferente o más compleja, te recomendamos consultar directamente con la oficina de extranjería correspondiente o con un abogado especializado.",
  },
  {
    question: "¿Puedo compartir estos tutoriales con otras personas?",
    answer:
      "¡Sí, por favor! Comparte libremente nuestros tutoriales con quien lo necesite. Cuantas más personas tengan acceso a información gratuita y confiable, mejor.",
  },
  {
    question: "¿Cómo puedo apoyar este proyecto?",
    answer:
      "La mejor forma de apoyarnos es compartiendo nuestra plataforma con otras personas que puedan necesitarla. También puedes sugerir nuevos tutoriales, reportar información desactualizada o contribuir con tu experiencia.",
  },
  {
    question: "¿Por qué se llama SocorroDigital?",
    answer:
      "'Socorro' porque queremos ser una ayuda, un rescate para quienes están perdidos en el laberinto migratorio. 'Digital' porque usamos internet como herramienta para llegar a más personas. Juntos, somos una mano amiga en formato digital.",
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-lg">
      <button
        className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        <span className="text-blue-600 text-xl flex-shrink-0">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <div>
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Preguntas Frecuentes</h1>
          <p className="text-xl text-blue-100">
            Encuentra respuestas a las preguntas más comunes sobre SocorroDigital
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">¿No encuentras tu respuesta?</h2>
          <p className="text-gray-700 mb-6">
            Si tienes una pregunta que no está en esta lista, no dudes en contactarnos.
          </p>
          <a
            href="/contacto"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Ir a contacto
          </a>
        </div>
      </div>
    </div>
  )
}
