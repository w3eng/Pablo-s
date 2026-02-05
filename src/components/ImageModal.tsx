import { useEffect } from "react"
import { createPortal } from "react-dom"

type ImageModalProps = {
  src: string | null
  onClose: () => void
}

export default function ImageModal({ src, onClose }: ImageModalProps) {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }

    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  if (!src) return null

  // Render modal do <body>, niezależnie od miniaturki
  return createPortal(
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <img
        src={src}
        className="max-w-[90%] max-h-[90%] rounded shadow-lg"
        onClick={(e) => e.stopPropagation()}
      />
    </div>,
    document.body
  )
}
