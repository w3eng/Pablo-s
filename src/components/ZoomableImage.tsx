// src/components/ZoomableImage.tsx
import { useState, useEffect } from "react"

export type ZoomableImageProps = {
  src: string
  className?: string
  isThumbnail?: boolean
  onClick?: () => void // <-- dodajemy obsługę kliknięcia
}

export default function ZoomableImage({ src, className = "", isThumbnail = false, onClick }: ZoomableImageProps) {
  const [isZoomed, setIsZoomed] = useState(false)

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsZoomed(false)
    }

    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  const handleClick = () => {
    if (isThumbnail) {
      setIsZoomed(true)
    }
    if (onClick) onClick()
  }

  return (
    <>
      <img
        src={src}
        className={className + (isThumbnail ? " hover:cursor-pointer" : "")}
        onClick={handleClick}
      />

      {isZoomed && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setIsZoomed(false)}
        >
          <img
            src={src}
            className="max-w-[90%] max-h-[90%] rounded shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
