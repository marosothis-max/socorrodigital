import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card"
import { Tutorial } from "@/types/tutorial"

interface TutorialCardProps {
  tutorial: Tutorial
  countrySlug: string
  categorySlug: string
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

export function TutorialCard({ tutorial, countrySlug, categorySlug }: TutorialCardProps) {
  return (
    <Link href={`/${countrySlug}/${categorySlug}/${tutorial.slug}`}>
      <Card hover>
        <CardHeader>
          <CardTitle className="text-lg mb-2">{tutorial.title}</CardTitle>
          <div className="flex gap-2 flex-wrap">
            <span
              className={`inline-block px-2 py-1 text-xs rounded-full ${
                difficultyColors[tutorial.difficulty]
              }`}
            >
              {difficultyLabels[tutorial.difficulty]}
            </span>
            <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
              ⏱️ {tutorial.estimatedTime}
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm">{tutorial.description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
