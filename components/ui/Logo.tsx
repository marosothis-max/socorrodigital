interface LogoProps {
  className?: string
  animated?: boolean
}

export function Logo({ className = "", animated = true }: LogoProps) {
  return (
    <div className={`${animated ? 'animate-float' : ''} ${className}`}>
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Círculo de fondo con gradiente de Venezuela */}
        <defs>
          <linearGradient id="venezuelaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor: '#003DA5', stopOpacity: 1}} />
            <stop offset="50%" style={{stopColor: '#FFD700', stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: '#CF142B', stopOpacity: 1}} />
          </linearGradient>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#1515FF', stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: '#0000CC', stopOpacity: 1}} />
          </linearGradient>
        </defs>

        {/* Círculo exterior */}
        <circle cx="100" cy="100" r="95" fill="url(#venezuelaGradient)" opacity="0.2"/>
        <circle cx="100" cy="100" r="90" fill="white"/>
        <circle cx="100" cy="100" r="85" stroke="url(#blueGradient)" strokeWidth="3" fill="none"/>

        {/* Manos entrelazadas (superior) */}
        <path d="M 70 50 Q 80 40 90 45 Q 95 50 100 48 Q 105 50 110 45 Q 120 40 130 50"
              stroke="#FFD700" strokeWidth="4" fill="none" strokeLinecap="round"/>
        <path d="M 75 55 Q 85 48 95 52 Q 100 55 105 52 Q 115 48 125 55"
              stroke="#FFD700" strokeWidth="3" fill="none" strokeLinecap="round"/>

        {/* Estrella (centro-superior) */}
        <path d="M 100 35 L 103 43 L 111 43 L 105 48 L 107 56 L 100 51 L 93 56 L 95 48 L 89 43 L 97 43 Z"
              fill="#FFD700" stroke="#003DA5" strokeWidth="1"/>

        {/* Personas caminando (siluetas) */}
        {/* Persona 1 */}
        <ellipse cx="60" cy="85" rx="6" ry="6" fill="#003DA5"/>
        <path d="M 60 91 L 60 110 M 60 95 L 52 100 M 60 95 L 68 100 M 60 110 L 54 125 M 60 110 L 66 125"
              stroke="#003DA5" strokeWidth="3" strokeLinecap="round"/>

        {/* Persona 2 */}
        <ellipse cx="80" cy="90" rx="6" ry="6" fill="#003DA5"/>
        <path d="M 80 96 L 80 115 M 80 100 L 72 105 M 80 100 L 88 105 M 80 115 L 74 130 M 80 115 L 86 130"
              stroke="#003DA5" strokeWidth="3" strokeLinecap="round"/>

        {/* Persona 3 (centro) */}
        <ellipse cx="100" cy="95" rx="7" ry="7" fill="#1515FF"/>
        <path d="M 100 102 L 100 122 M 100 107 L 91 112 M 100 107 L 109 112 M 100 122 L 93 138 M 100 122 L 107 138"
              stroke="#1515FF" strokeWidth="3.5" strokeLinecap="round"/>

        {/* Persona 4 */}
        <ellipse cx="120" cy="90" rx="6" ry="6" fill="#003DA5"/>
        <path d="M 120 96 L 120 115 M 120 100 L 112 105 M 120 100 L 128 105 M 120 115 L 114 130 M 120 115 L 126 130"
              stroke="#003DA5" strokeWidth="3" strokeLinecap="round"/>

        {/* Persona 5 */}
        <ellipse cx="140" cy="85" rx="6" ry="6" fill="#003DA5"/>
        <path d="M 140 91 L 140 110 M 140 95 L 132 100 M 140 95 L 148 100 M 140 110 L 134 125 M 140 110 L 146 125"
              stroke="#003DA5" strokeWidth="3" strokeLinecap="round"/>

        {/* Camino/sendero */}
        <path d="M 40 140 Q 100 135 160 140"
              stroke="#FFD700" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.6"/>
        <path d="M 45 145 Q 100 140 155 145"
              stroke="#CF142B" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.4"/>

        {/* Texto "SD" en el centro inferior */}
        <text x="100" y="170" fontSize="32" fontWeight="bold" fill="url(#blueGradient)" textAnchor="middle" fontFamily="Arial, sans-serif">
          SD
        </text>
      </svg>
    </div>
  )
}
