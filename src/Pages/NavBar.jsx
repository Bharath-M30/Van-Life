import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <header className="flex justify-between py-8 px-4 items-center bg-[#FFF7ED] w-full sticky top-0 z-10">
            <Link to="/" className="text-2xl font-[900]" >#VANLIFE</Link>
            <nav className="flex gap-4 text-[#4D4D4D] font-[500]">
                <Link className="hover:text-[#151515] hover:underline hover:underline-offset-4" to="/about">About</Link>
                <Link className="hover:text-[#151515] hover:underline hover:underline-offset-4" to="/vans">Vans</Link>
            </nav>
        </header>
    )
}