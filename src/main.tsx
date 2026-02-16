import React from "react"
import ReactDOM from "react-dom/client"
import { HashRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Gallery from "./pages/Gallery"
import Random from "./pages/Random"

import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/losowy" element={<Random />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
