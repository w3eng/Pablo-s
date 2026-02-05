import { useState } from "react"
import ImageModal from "./ImageModal"

type ZoomableImageProps = {
  src: string
  className?: string
  isThumbnail?: boolean // miniaturka czy nie
}

export default function ZoomableImage({ src, className, isThumbnail = true }: ZoomableImageProps) {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <>
      <img
        src={src}
        onClick={() => setSelected(src)}
        className={`${isThumbnail ? "hover:opacity-80 transition-opacity cursor-pointer" : ""} ${className || ""}`}
      />
      <ImageModal src={selected} onClose={() => setSelected(null)} />
    </>
  )
}
