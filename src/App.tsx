import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Gallery from "./pages/gallery"
import Random from "./pages/random"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/galeria" element={<Gallery />} />
      <Route path="/losowy" element={<Random />} />
    </Routes>
  )
}
