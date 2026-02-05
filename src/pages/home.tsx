import { Link } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Efekt do zamykania modala klawiszem Esc
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null)
      }
    }

    window.addEventListener("keydown", handleEsc)
    return () => {
      window.removeEventListener("keydown", handleEsc)
    }
  }, [])

  // Animacja pojawiania strony przy mount
  useEffect(() => {
    if (!containerRef.current) return

    gsap.from(containerRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power1.out",
    })
  }, [])

  return (
    <>
      <div ref={containerRef} className="min-h-screen bg-gray-300">

        {/* Nagłówek */}
        <div className="p-3 min-h-20 items-center justify-left flex text-xl">
          <Link
            to="/"
            className="text-[clamp(0.75rem,2vw,1.6rem)] hover:text-white hover:cursor-pointer"
          >
            Paweł Ziółkowski
          </Link>
        </div>

        {/* Sekcja główna */}
        <div className="grid grid-cols-2 bg-blue-300 gap-4">

          {/* Duże zdjęcie */}
          <div className="bg-gray-300 m-7 rounded-md overflow-hidden">
            <img
              src="img/1.png"
              onClick={() => setSelectedImage("/img/1.png")}
              className="hover:cursor-pointer w-full h-full object-cover hover:opacity-80 transition-opacity"
            />
          </div>

          {/* Linki */}
          <div className="grid grid-cols-2 gap-4 m-4">
            <Link
              to="/"
              className="font-script font-bold hover:cursor-pointer rounded text-white bg-green-300 m-3 flex items-center justify-center hover:opacity-80 transition-opacity p-6 text-[clamp(1.1rem,3vw,2.4rem)] aspect-square"
            >
              Pablo's Art
            </Link>

            <Link
              to="/galeria"
              className="font-script hover:cursor-pointer rounded bg-gray-100 m-3 flex items-center justify-center hover:opacity-80 transition-opacity p-6 text-[clamp(1.1rem,3vw,2.4rem)] aspect-square"
            >
              Znajdź swój obraz
            </Link>

            <Link
              to="/galeria"
              className="font-script hover:cursor-pointer rounded bg-gray-100 m-3 flex items-center justify-center hover:opacity-80 transition-opacity p-6 text-[clamp(1.1rem,3vw,2.4rem)] aspect-square"
            >
              Galeria
            </Link>

            <Link
              to="/losowy"
              className="font-script text-green-500 hover:cursor-pointer rounded bg-gray-200 m-3 flex items-center justify-center hover:opacity-80 transition-opacity p-6 text-[clamp(1.1rem,3vw,2.4rem)] aspect-square"
            >
              O mnie
            </Link>
          </div>
        </div>

        {/* Tekst */}
        <div className="italic text-[clamp(1.1rem,3vw,2.4rem)] p-5 flex justify-center">
          Jakościowe obrazy tworzone z sercem i pasją.
        </div>

        <div className="p-5 flex justify-center">
          Paweł Ziółkowski © 2026
        </div>
      </div>

      {/* Modal powiększonego zdjęcia */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-w-[90%] max-h-[90%] rounded shadow-lg"
          />
        </div>
      )}
    </>
  )
}
