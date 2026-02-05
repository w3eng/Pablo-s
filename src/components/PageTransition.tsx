import { useEffect, useRef } from "react"
import { gsap } from "gsap"

type PageTransitionProps = {
  children: React.ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Animacja pojawiania strony
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: "power1.out",
    })
  }, [])

  return <div ref={containerRef}>{children}</div>
}
