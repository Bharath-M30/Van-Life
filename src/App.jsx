import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import About from "./Pages/About"
import Home from "./Pages/Home"
import VanDetail from "./Pages/Vans/VanDetail"
import Vans from "./Pages/Vans/Vans"
import Dashboard from "./Pages/Host/Dashboard"
import Income from "./Pages/Host/Income"
import HostVans from "./Pages/Host/HostVans"
import HostVanDetail from "./Pages/Host/HostVanDetail"
import Reviews from "./Pages/Host/Reviews"
import HostLayout from "./components/HostLayout"

import "./server"

export default function App() {
  return (

      <BrowserRouter>
      <div className="min-h-screen flex flex-col">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="vans" element={<Vans />} />
              <Route path="vans/:id" element={<VanDetail />} />

              <Route path="host" element={<HostLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="income" element={<Income />} />
                <Route path="vans" element={<HostVans />} />
                <Route path="vans/:id" element={<HostVanDetail />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
            </Route>
          </Routes>
      </div>
      </BrowserRouter>
  )
}