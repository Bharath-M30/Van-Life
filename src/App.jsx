import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import About from "./Pages/About"
import Home from "./Pages/Home"
import VanDetail from "./Pages/Vans/VanDetail"
import Vans from "./Pages/Vans/Vans"
import Dashboard from "./Pages/Host/Dashboard"
import Income from "./Pages/Host/Income"
import Reviews from "./Pages/Host/Reviews"

import "./server"

export default function App() {
  return (

      <BrowserRouter>
      <div className="min-h-screen flex flex-col">
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/vans" element={<Vans />} />
              <Route path="/vans/:id" element={<VanDetail />} />
              <Route path="/host" element={<Dashboard />} />
              <Route path="/host/income" element={<Income />} />
              <Route path="/host/reviews" element={<Reviews />} />
            </Route>
          </Routes>
      </div>
      </BrowserRouter>
  )
}