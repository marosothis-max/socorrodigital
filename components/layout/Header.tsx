"use client"

import Link from "next/link"
import { useState } from "react"
import { siteConfig } from "@/config/site"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="text-3xl animate-float">✈️</span>
            <span className="text-2xl font-black text-[#1515FF]">{siteConfig.name}</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/acerca-de"
              className="text-[#151515] hover:text-[#1515FF] transition-colors font-semibold"
            >
              Acerca de
            </Link>
            <Link href="/faq" className="text-[#151515] hover:text-[#1515FF] transition-colors font-semibold">
              FAQ
            </Link>
            <Link
              href="/contacto"
              className="px-6 py-3 bg-[#1515FF] text-white font-bold rounded-full hover:shadow-lg hover:bg-[#0000CC] transition-all duration-300 hover:scale-105"
            >
              Contacto
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-[#151515]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menú"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 pt-4">
            <Link
              href="/acerca-de"
              className="block py-3 text-[#151515] hover:text-[#1515FF] transition-colors font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Acerca de
            </Link>
            <Link
              href="/faq"
              className="block py-3 text-[#151515] hover:text-[#1515FF] transition-colors font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/contacto"
              className="block py-3 text-[#151515] hover:text-[#1515FF] transition-colors font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
