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
import HostVanInfo from "./Pages/Host/HostVanInfo"
import HostVanPricing from "./Pages/Host/HostVanPricing"
import HostVanPhotos from "./Pages/Host/HostVanPhotos"
import NotFound from "./Pages/NotFound"
import Login from "./Pages/Login"
import AuthRequired from "./components/AuthRequired"

import "./server"

export default function App() {
  return (

      <BrowserRouter>
      <div className="min-h-screen flex flex-col">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="about" element={<About />} />
              <Route path="vans" element={<Vans />} />
              <Route path="vans/:id" element={<VanDetail />} />

              <Route element={<AuthRequired />}>
                <Route path="host" element={<HostLayout />}>
                  <Route index element={<Dashboard />} />
                  <Route path="income" element={<Income />} />
                  <Route path="vans" element={<HostVans />} />
                  <Route path="vans/:id" element={<HostVanDetail />} >
                    <Route index element={<HostVanInfo />} />
                    <Route path="pricing" element={<HostVanPricing />} />
                    <Route path="photos" element={<HostVanPhotos />} />
                  </Route>
                  <Route path="reviews" element={<Reviews />} />
                </Route>
              </Route>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
      </div>
      </BrowserRouter>
  )
}