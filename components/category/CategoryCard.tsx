import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card"
import { Category } from "@/config/categories"

interface CategoryCardProps {
  category: Category
  countrySlug: string
}

export function CategoryCard({ category, countrySlug }: CategoryCardProps) {
  if (category.comingSoon) {
    return (
      <Card className="opacity-75">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{category.icon}</span>
            <CardTitle className="text-lg">{category.name}</CardTitle>
          </div>
          <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
            Próximamente
          </span>
        </CardHeader>
        <CardContent>
          <p className="text-sm">{category.description}</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Link href={`/${countrySlug}/${category.slug}`}>
      <Card hover>
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{category.icon}</span>
            <CardTitle className="text-lg">{category.name}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm">{category.description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
