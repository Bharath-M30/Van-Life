import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import NavBar from "./Pages/NavBar"
import Footer from "./Pages/Footer"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Vans from "./Pages/Vans"
import "./server"

export default function App() {
  return (
    <>
      <BrowserRouter>
      <div className="min-h-screen flex flex-col">
          <NavBar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/vans" element={<Vans />} />
          </Routes>
          <Footer />
      </div>
      </BrowserRouter>
    </>
  )
}