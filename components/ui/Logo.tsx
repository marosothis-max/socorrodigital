import Image from "next/image"

interface LogoProps {
  className?: string
  animated?: boolean
}

export function Logo({ className = "", animated = true }: LogoProps) {
  return (
    <div className={`${animated ? 'animate-float' : ''} ${className}`}>
      <Image
        src="/images/logo/socorro-digital-logo.png"
        alt="SocorroDigital Logo"
        width={50}
        height={50}
        className="w-auto h-auto"
        priority
      />
    </div>
  )
}
