import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Gallery from "./pages/Gallery"
import Random from "./pages/Random"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/galeria" element={<Gallery />} />
      <Route path="/losowy" element={<Random />} />
    </Routes>
  )
}
