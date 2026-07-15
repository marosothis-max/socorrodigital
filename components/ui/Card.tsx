import React from "react"

interface CardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  hover?: boolean
}

export function Card({ children, className = "", onClick, hover = false }: CardProps) {
  const hoverStyles = hover ? "hover:shadow-xl hover:shadow-sky-200/50 hover:-translate-y-1 cursor-pointer border-sky-300" : "border-sky-200"

  return (
    <div
      className={`bg-white/80 backdrop-blur-sm rounded-xl shadow-md border-2 p-6 transition-all ${hoverStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}

export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return <div className={`mb-4 ${className}`}>{children}</div>
}

interface CardTitleProps {
  children: React.ReactNode
  className?: string
}

export function CardTitle({ children, className = "" }: CardTitleProps) {
  return <h3 className={`text-xl font-bold text-slate-800 ${className}`}>{children}</h3>
}

interface CardContentProps {
  children: React.ReactNode
  className?: string
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={`text-slate-600 ${className}`}>{children}</div>
}
