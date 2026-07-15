export type DifficultyLevel = "basico" | "intermedio" | "avanzado"

export interface TutorialStep {
  number: number
  title: string
  content: string
  warning?: string
  tip?: string
  image?: string
}

export interface Download {
  title: string
  description: string
  url: string
  type: "pdf" | "doc" | "template"
}

export interface Tutorial {
  id: string
  title: string
  slug: string
  countryId: string
  categoryId: string
  description: string
  difficulty: DifficultyLevel
  estimatedTime: string
  lastUpdated: Date
  introduction: string
  requirements: string[]
  documents: string[]
  where: string
  how: string
  costs: string
  commonMistakes: string[]
  steps: TutorialStep[]
  downloads?: Download[]
  relatedTutorials?: string[]
  tags: string[]
  legalDisclaimer: string
}
