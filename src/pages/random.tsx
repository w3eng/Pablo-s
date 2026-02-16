import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import ZoomableImage from "../components/ZoomableImage"
import { gsap } from "gsap"

// Import obrazów z assets
import img1 from "../assets/1.png"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.png"

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
      <div className="p-3 min-h-20 flex items-center justify-start text-xl">
        <Link
          to="/"
          className="text-[clamp(0.75rem,2vw,1.6rem)] hover:text-white hover:cursor-pointer"
        >
          Paweł Ziółkowski
        </Link>
      </div>

      {/* Sekcja główna */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-blue-300">

        {/* O mnie */}
        <div className="bg-gray-200 rounded-md p-6 md:m-7 text-center">
          <div className="bg-gray-200 rounded p-6 md:p-10 text-[clamp(1.2rem,2vw,2rem)] leading-relaxed italic mb-4">
            O mnie
          </div>
          <div className="text-2xl">
            Jestem artystą specjalizującym się w malarstwie,<br />
            wykonuję też grafiki komputerowe, ilustracje, logo.<br />
            Swoje prace wykonuję z pasją i sercem.<br /><br />
            Zapraszam do kontaktu!
            <br /><br />
            Zapisz się na newsletter! <form method="post">

              <input type="email" placeholder="twój@email.pl" id="useremail"/>

              <button type="submit">Wyślij</button>

            </form>
            <div className="mt-5 text-lg">
              <p className="mb-1">
                Email: <a href="mailto:pawlok250@wp.pl" className="text-green-500 hover:underline">pawlok250@wp.pl</a>
              </p>
              <p>
                Telefon: <a href="tel:+48724930687" className="text-green-500 hover:underline">+48 724 930 687</a>
              </p>
            </div>
          </div>
        </div>

        {/* Miniaturki i linki */}
        <div className="grid grid-cols-2 gap-4">

          <Link
            to="/"
            className="font-script font-bold rounded text-white bg-green-300 m-3 flex items-center justify-center hover:opacity-80 transition-opacity p-6 text-[clamp(1.1rem,3vw,2.4rem)] aspect-square"
          >
            Powrót
          </Link>

          {/* Obrazki z hover tylko dla zdjęć */}
          {[img1, img3, img4].map((img, idx) => (
            <div
              key={idx}
              className="rounded bg-gray-100 m-3 flex items-center justify-center p-6 aspect-square"
            >
              <ZoomableImage
                src={img}
                className="w-full h-full object-cover rounded-md hover:opacity-80 transition-opacity"
                isThumbnail
              />
            </div>
          ))}

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
