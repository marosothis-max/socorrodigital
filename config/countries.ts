export interface Country {
  id: string
  name: string
  slug: string
  flag: string
  description: string
  active: boolean
  comingSoon?: boolean
  priority: number
}

export const countries: Country[] = [
  {
    id: "espana",
    name: "España",
    slug: "espana",
    flag: "🇪🇸",
    description: "Guías completas para regularizar tu situación migratoria en España",
    active: true,
    priority: 1,
  },
  {
    id: "francia",
    name: "Francia",
    slug: "francia",
    flag: "🇫🇷",
    description: "Próximamente: tutoriales para migrantes en Francia",
    active: false,
    comingSoon: true,
    priority: 2,
  },
  {
    id: "estados-unidos",
    name: "Estados Unidos",
    slug: "estados-unidos",
    flag: "🇺🇸",
    description: "Próximamente: guías migratorias para Estados Unidos",
    active: false,
    comingSoon: true,
    priority: 3,
  },
]

export function getCountryBySlug(slug: string): Country | undefined {
  return countries.find((country) => country.slug === slug)
}

export function getActiveCountries(): Country[] {
  return countries.filter((country) => country.active)
}
