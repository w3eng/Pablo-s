import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { gsap } from "gsap"
import ZoomableImage from "../components/ZoomableImage"

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Animacja wejścia strony
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power1.out",
    })
  }, [])

  return (
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
          <ZoomableImage
            src="img/2.png"
            className="w-full h-full object-cover rounded-md"
            isThumbnail={true}
          />
        </div>

        {/* Mniejsze zdjęcia */}
        <div className="grid grid-cols-2 gap-4 m-4">

          <Link
            to="/"
            className="font-script font-bold hover:cursor-pointer rounded text-white bg-green-300 m-3 flex items-center justify-center hover:opacity-80 transition-opacity p-6 text-[clamp(1.1rem,3vw,2.4rem)] aspect-square"
          >
            Powrót
          </Link>

          <div className="font-script hover:cursor-pointer rounded bg-gray-100 m-3 flex items-center justify-center hover:opacity-80 transition-opacity p-6 text-[clamp(1.1rem,3vw,2.4rem)] aspect-square">
            <ZoomableImage
              src="img/1.png"
              className="w-full h-full object-cover rounded-md"
              isThumbnail={true}
            />
          </div>

          <div className="font-script hover:cursor-pointer rounded bg-gray-100 m-3 flex items-center justify-center hover:opacity-80 transition-opacity p-6 text-[clamp(1.1rem,3vw,2.4rem)] aspect-square">
            <ZoomableImage
              src="img/3.jpg"
              className="w-full h-full object-cover rounded-md"
              isThumbnail={true}
            />
          </div>

          <div className="font-script text-green-500 hover:cursor-pointer rounded bg-gray-200 m-3 flex items-center justify-center hover:opacity-80 transition-opacity p-6 text-[clamp(1.1rem,3vw,2.4rem)] aspect-square">
            <ZoomableImage
              src="img/4.png"
              className="w-full h-full object-cover rounded-md"
              isThumbnail={true}
            />
          </div>

        </div>
      </div>

      {/* Tekst na dole */}
      <div className="italic text-[clamp(1.1rem,3vw,2.4rem)] p-5 flex justify-center">
        Jakościowe obrazy tworzone z sercem i pasją.
      </div>

      <div className="p-5 flex justify-center">
        Paweł Ziółkowski © 2026
      </div>
    </div>
  )
}
