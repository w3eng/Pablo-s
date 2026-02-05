import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import ZoomableImage from "../components/ZoomableImage"
import { gsap } from "gsap"

export default function Random() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Animacja pojawiania strony
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

        {/* O mnie */}
        <div className="bg-gray-200 m-7 rounded-md overflow-hidden justify-center items-center text-center">
          <div className="m-3 bg-gray-200 rounded p-10
                          text-[clamp(1.2rem,2vw,2rem)]
                          leading-relaxed
                          italic">
            O mnie
          </div>
          <div className="text-2xl">
            Jestem artystą specjalizującym się w malarstwie,<br />
            wykonuję też grafiki komputerowe, ilustracje, logo.<br />
            Swoje prace wykonuję z pasją i sercem.<br /><br />
            Zapraszam do kontaktu!
<br></br><br></br>
<div className="mt-5 text-lg">
  <p>Email: <a href="mailto:pawlok250@wp.pl" className="text-green-500 hover:underline">pawlok250@wp.pl</a></p>
  <p>Telefon: <a href="tel:+48724930687" className="text-green-500 hover:underline">+48 724 930 687</a></p>
</div>


          </div>
        </div>

        {/* Miniaturki i linki */}
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
