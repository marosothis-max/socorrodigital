export interface Category {
  id: string
  name: string
  slug: string
  description: string
  icon: string
  countryId: string
  active: boolean
  comingSoon?: boolean
  priority: number
}

export const categories: Category[] = [
  // Categorías para España
  {
    id: "migracion-espana",
    name: "Migración",
    slug: "migracion",
    description: "Residencias, permisos de trabajo, nacionalidad y trámites migratorios",
    icon: "✈️",
    countryId: "espana",
    active: true,
    priority: 1,
  },
  {
    id: "vivienda-espana",
    name: "Vivienda",
    slug: "vivienda",
    description: "Alquiler, empadronamiento, ayudas de vivienda",
    icon: "🏠",
    countryId: "espana",
    active: false,
    comingSoon: true,
    priority: 2,
  },
  {
    id: "empleo-espana",
    name: "Empleo",
    slug: "empleo",
    description: "Búsqueda de trabajo, contratos, seguridad social",
    icon: "💼",
    countryId: "espana",
    active: false,
    comingSoon: true,
    priority: 3,
  },
  {
    id: "salud-espana",
    name: "Salud",
    slug: "salud",
    description: "Tarjeta sanitaria, sistema de salud, atención médica",
    icon: "🏥",
    countryId: "espana",
    active: false,
    comingSoon: true,
    priority: 4,
  },
  {
    id: "educacion-espana",
    name: "Educación",
    slug: "educacion",
    description: "Homologación de títulos, inscripción escolar, becas",
    icon: "📚",
    countryId: "espana",
    active: false,
    comingSoon: true,
    priority: 5,
  },
  {
    id: "tramites-bancarios-espana",
    name: "Trámites Bancarios",
    slug: "tramites-bancarios",
    description: "Apertura de cuentas, NIE, certificados bancarios",
    icon: "🏦",
    countryId: "espana",
    active: false,
    comingSoon: true,
    priority: 6,
  },
]

export function getCategoriesByCountry(countryId: string): Category[] {
  return categories
    .filter((category) => category.countryId === countryId)
    .sort((a, b) => a.priority - b.priority)
}

export function getCategoryBySlug(countryId: string, slug: string): Category | undefined {
  return categories.find(
    (category) => category.countryId === countryId && category.slug === slug
  )
}

export function getActiveCategories(countryId: string): Category[] {
  return categories.filter(
    (category) => category.countryId === countryId && category.active
  )
}
