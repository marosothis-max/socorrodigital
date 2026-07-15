import Image from "next/image"

interface LogoProps {
  className?: string
  animated?: boolean
}

export function Logo({ className = "", animated = true }: LogoProps) {
  return (
    <div className={`${animated ? 'animate-float' : ''} ${className} flex items-center justify-center`}>
      <Image
        src="/logo.png"
        alt="SocorroDigital - Esperanza en la Unión"
        width={200}
        height={200}
        className="w-full h-full object-contain"
        priority
      />
    </div>
  )
}
