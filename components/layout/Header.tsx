"use client"

import Link from "next/link"
import { useState } from "react"
import { siteConfig } from "@/config/site"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-black/80 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="font-display text-2xl font-light tracking-tight">{siteConfig.name}</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/acerca-de"
              className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider"
            >
              Acerca de
            </Link>
            <Link href="/faq" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider">
              FAQ
            </Link>
            <Link
              href="/contacto"
              className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider"
            >
              Contacto
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-white"
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
                  strokeWidth={1}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-white/10 pt-4">
            <Link
              href="/acerca-de"
              className="block py-3 text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider"
              onClick={() => setMobileMenuOpen(false)}
            >
              Acerca de
            </Link>
            <Link
              href="/faq"
              className="block py-3 text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/contacto"
              className="block py-3 text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider"
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
