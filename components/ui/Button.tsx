import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-sm"

  const variants = {
    primary: "bg-sky-500 text-white hover:bg-sky-600 hover:shadow-md focus:ring-sky-400",
    secondary: "bg-slate-600 text-white hover:bg-slate-700 hover:shadow-md focus:ring-slate-500",
    outline:
      "border-2 border-sky-500 text-sky-600 hover:bg-sky-50 hover:border-sky-600 focus:ring-sky-400",
  }

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
