import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import NavBar from "./Pages/NavBar"
import Footer from "./Pages/Footer"
import Home from "./Pages/Home"
import About from "./Pages/About"

export default function App() {
  return (
    <>
      <BrowserRouter>
      <div className="h-screen flex flex-col">
          <NavBar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
      </div>
      </BrowserRouter>
    </>
  )
}