import { notFound } from "next/navigation"
import { getCountryBySlug } from "@/config/countries"
import { getCategoriesByCountry } from "@/config/categories"
import { CategoryCard } from "@/components/category/CategoryCard"
import type { Metadata } from "next"

interface CountryPageProps {
  params: Promise<{
    pais: string
  }>
}

export async function generateMetadata({ params }: CountryPageProps): Promise<Metadata> {
  const { pais } = await params
  const country = getCountryBySlug(pais)

  if (!country) {
    return {
      title: "País no encontrado",
    }
  }

  return {
    title: country.name,
    description: country.description,
  }
}

export default async function CountryPage({ params }: CountryPageProps) {
  const { pais } = await params
  const country = getCountryBySlug(pais)

  if (!country || !country.active) {
    notFound()
  }

  const categories = getCategoriesByCountry(country.id)

  return (
    <div>
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">{country.flag}</span>
            <h1 className="text-4xl sm:text-5xl font-bold">{country.name}</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl">{country.description}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Tipos de trámites</h2>
          <p className="text-lg text-gray-600">
            Selecciona la categoría de trámite que necesitas realizar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} countrySlug={country.slug} />
          ))}
        </div>
      </section>
    </div>
  )
}
