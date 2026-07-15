import { notFound } from "next/navigation"
import Link from "next/link"
import { getCountryBySlug } from "@/config/countries"
import { getCategoryBySlug } from "@/config/categories"
import { espanaMigracionTutorials } from "@/content/espana-migracion"
import type { Metadata } from "next"

interface TutorialPageProps {
  params: Promise<{
    pais: string
    categoria: string
    tutorial: string
  }>
}

export async function generateMetadata({ params }: TutorialPageProps): Promise<Metadata> {
  const { pais, tutorial: tutorialSlug } = await params
  const country = getCountryBySlug(pais)
  const tutorial = espanaMigracionTutorials.find((t) => t.slug === tutorialSlug)

  if (!tutorial) {
    return {
      title: "Tutorial no encontrado",
    }
  }

  return {
    title: tutorial.title,
    description: tutorial.description,
    keywords: tutorial.tags,
  }
}

export default async function TutorialPage({ params }: TutorialPageProps) {
  const { pais, categoria, tutorial: tutorialSlug } = await params
  const country = getCountryBySlug(pais)

  if (!country) {
    notFound()
  }

  const category = getCategoryBySlug(country.id, categoria)

  if (!category) {
    notFound()
  }

  const tutorial = espanaMigracionTutorials.find((t) => t.slug === tutorialSlug)

  if (!tutorial) {
    notFound()
  }

  const difficultyColors = {
    basico: "bg-green-100 text-green-800",
    intermedio: "bg-yellow-100 text-yellow-800",
    avanzado: "bg-red-100 text-red-800",
  }

  const difficultyLabels = {
    basico: "Básico",
    intermedio: "Intermedio",
    avanzado: "Avanzado",
  }

  return (
    <div>
      <section className="bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-blue-600">
              Inicio
            </Link>
            <span className="mx-2">/</span>
            <Link href={`/${country.slug}`} className="hover:text-blue-600">
              {country.name}
            </Link>
            <span className="mx-2">/</span>
            <Link href={`/${country.slug}/${category.slug}`} className="hover:text-blue-600">
              {category.name}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Tutorial</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {tutorial.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-4">
            <span
              className={`inline-block px-3 py-1 text-sm rounded-full ${
                difficultyColors[tutorial.difficulty]
              }`}
            >
              {difficultyLabels[tutorial.difficulty]}
            </span>
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
              ⏱️ {tutorial.estimatedTime}
            </span>
            <span className="inline-block px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full">
              Actualizado: {tutorial.lastUpdated.toLocaleDateString("es-ES")}
            </span>
          </div>

          <p className="text-lg text-gray-700">{tutorial.description}</p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Introducción</h2>
          <p className="text-gray-700">{tutorial.introduction}</p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📋 Requisitos</h2>
          <ul className="space-y-2">
            {tutorial.requirements.map((req, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span className="text-gray-700">{req}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📄 Documentos necesarios</h2>
          <ul className="space-y-2">
            {tutorial.documents.map((doc, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">📎</span>
                <span className="text-gray-700">{doc}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📍 ¿Dónde se realiza?</h2>
          <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">{tutorial.where}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🔧 ¿Cómo se hace?</h2>
          <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">{tutorial.how}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">💰 Costos</h2>
          <p className="text-gray-700 bg-green-50 p-4 rounded-lg border border-green-200">
            {tutorial.costs}
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📝 Paso a paso</h2>
          <div className="space-y-6">
            {tutorial.steps.map((step) => (
              <div key={step.number} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-700 mb-4">{step.content}</p>

                    {step.tip && (
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-2">
                        <p className="text-sm">
                          <span className="font-semibold text-blue-800">💡 Consejo:</span>{" "}
                          <span className="text-blue-900">{step.tip}</span>
                        </p>
                      </div>
                    )}

                    {step.warning && (
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                        <p className="text-sm">
                          <span className="font-semibold text-yellow-800">⚠️ Importante:</span>{" "}
                          <span className="text-yellow-900">{step.warning}</span>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">❌ Errores comunes a evitar</h2>
          <ul className="space-y-2">
            {tutorial.commonMistakes.map((mistake, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-red-600 mt-1">✗</span>
                <span className="text-gray-700">{mistake}</span>
              </li>
            ))}
          </ul>
        </section>

        {tutorial.downloads && tutorial.downloads.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">📥 Descargas útiles</h2>
            <div className="space-y-3">
              {tutorial.downloads.map((download, index) => (
                <a
                  key={index}
                  href={download.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📄</span>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{download.title}</h3>
                      <p className="text-sm text-gray-600">{download.description}</p>
                    </div>
                    <span className="text-blue-600">↓</span>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-gray-900 mb-2">⚖️ Aviso Legal</h3>
          <p className="text-sm text-gray-700">{tutorial.legalDisclaimer}</p>
        </div>

        <div className="border-t pt-8">
          <Link
            href={`/${country.slug}/${category.slug}`}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Volver a {category.name}
          </Link>
        </div>
      </article>
    </div>
  )
}
