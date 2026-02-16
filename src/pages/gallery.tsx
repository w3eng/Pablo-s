import { Link } from "react-router-dom"
import ZoomableImage from "../components/ZoomableImage"

import img1 from "../assets/1.png"
import img2 from "../assets/2.png"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.png"

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gray-300">
      {/* Nagłówek */}
      <div className="p-3 min-h-20 flex items-center justify-left text-xl">
        <Link to="/" className="text-[clamp(0.75rem,2vw,1.6rem)] hover:text-white">
          Paweł Ziółkowski
        </Link>
      </div>

      {/* Sekcja główna */}
      <div className="grid grid-cols-1 md:grid-cols-2 bg-blue-300 gap-4">
        {/* Duże zdjęcie */}
        <div className="bg-gray-300 m-7 rounded-md overflow-hidden">
          <ZoomableImage
            src={img2}
            className="w-full h-full object-cover rounded-md"
            isThumbnail={true}
          />
        </div>

        {/* Mniejsze zdjęcia i link */}
        <div className="grid grid-cols-2 gap-4 m-4">
          <Link
            to="/"
            className="font-script font-bold rounded text-white bg-green-300 flex items-center justify-center hover:opacity-80 transition-opacity p-6 text-[clamp(1.1rem,3vw,2.4rem)] aspect-square"
          >
            Powrót
          </Link>

          <div className="aspect-square">
            <ZoomableImage
              src={img1}
              className="w-full h-full object-cover rounded-md"
              isThumbnail={true}
            />
          </div>

          <div className="aspect-square">
            <ZoomableImage
              src={img3}
              className="w-full h-full object-cover rounded-md"
              isThumbnail={true}
            />
          </div>

          <div className="aspect-square">
            <ZoomableImage
              src={img4}
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
