import { notFound } from "next/navigation"
import { getCountryBySlug } from "@/config/countries"
import { getCategoryBySlug } from "@/config/categories"
import { espanaMigracionTutorials } from "@/content/espana-migracion"
import { TutorialCard } from "@/components/tutorial/TutorialCard"
import Link from "next/link"
import type { Metadata } from "next"

interface CategoryPageProps {
  params: Promise<{
    pais: string
    categoria: string
  }>
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { pais, categoria } = await params
  const country = getCountryBySlug(pais)
  const category = country ? getCategoryBySlug(country.id, categoria) : null

  if (!category) {
    return {
      title: "Categoría no encontrada",
    }
  }

  return {
    title: `${category.name} - ${country!.name}`,
    description: category.description,
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { pais, categoria } = await params
  const country = getCountryBySlug(pais)

  if (!country) {
    notFound()
  }

  const category = getCategoryBySlug(country.id, categoria)

  if (!category || !category.active) {
    notFound()
  }

  const tutorials = espanaMigracionTutorials.filter(
    (t) => t.countryId === country.id && t.categoryId === category.id
  )

  return (
    <div>
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-blue-600">
              Inicio
            </Link>
            <span className="mx-2">/</span>
            <Link href={`/${country.slug}`} className="hover:text-blue-600">
              {country.name}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{category.name}</span>
          </nav>

          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{category.icon}</span>
            <h1 className="text-4xl font-bold text-gray-900">{category.name}</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl">{category.description}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Tutoriales disponibles ({tutorials.length})
          </h2>
          <p className="text-gray-600">
            Selecciona el tutorial que necesitas para comenzar con tu trámite
          </p>
        </div>

        {tutorials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tutorials.map((tutorial) => (
              <TutorialCard
                key={tutorial.id}
                tutorial={tutorial}
                countrySlug={country.slug}
                categorySlug={category.slug}
              />
            ))}
          </div>
        ) : (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 text-center">
            <p className="text-lg text-yellow-800">
              Los tutoriales para esta categoría están en desarrollo. ¡Vuelve pronto!
            </p>
          </div>
        )}
      </section>
    </div>
  )
}
