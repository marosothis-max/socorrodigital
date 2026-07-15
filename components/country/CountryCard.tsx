import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card"
import { Country } from "@/config/countries"

interface CountryCardProps {
  country: Country
}

export function CountryCard({ country }: CountryCardProps) {
  if (country.comingSoon) {
    return (
      <Card className="opacity-75">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-5xl">{country.flag}</span>
            <CardTitle>{country.name}</CardTitle>
          </div>
          <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-sm rounded-full font-medium">
            ⏳ Próximamente
          </span>
        </CardHeader>
        <CardContent>
          <p>{country.description}</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Link href={`/${country.slug}`}>
      <Card hover>
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-5xl">{country.flag}</span>
            <CardTitle>{country.name}</CardTitle>
          </div>
          <span className="inline-block px-3 py-1 bg-sky-100 text-sky-700 text-sm rounded-full font-medium shadow-sm">
            ✓ Disponible
          </span>
        </CardHeader>
        <CardContent>
          <p>{country.description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
