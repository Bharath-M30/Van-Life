import NavBar from "./NavBar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

export default function Layout() {
    return (
        <>
            <NavBar />
            <div className="flex-1 flex flex-col">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}