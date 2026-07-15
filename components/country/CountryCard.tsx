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
            <span className="text-4xl">{country.flag}</span>
            <CardTitle>{country.name}</CardTitle>
          </div>
          <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
            Próximamente
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
            <span className="text-4xl">{country.flag}</span>
            <CardTitle>{country.name}</CardTitle>
          </div>
          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
            Disponible
          </span>
        </CardHeader>
        <CardContent>
          <p>{country.description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
