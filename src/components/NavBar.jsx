import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
    const activeStyle = "text-[#151515] underline underline-offset-4";

    return (
        <header className="flex justify-between py-8 px-8 items-center bg-[#FFF7ED] w-full sticky top-0 z-10">
            <Link to="/" className="text-3xl font-[900] ">#VANLIFE</Link>
            <nav className="flex gap-4 text-[#4D4D4D] text-lg font-[700]">
                <NavLink
                    to="/host"
                    className={({ isActive }) => isActive ? `${activeStyle}` : "hover:text-[#151515] hover:underline hover:underline-offset-4"}
                >
                    Host
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => isActive ? `${activeStyle}` : "hover:text-[#151515] hover:underline hover:underline-offset-4"}
                >
                    About
                </NavLink>
                <NavLink
                    to="/vans"
                    className={({ isActive }) => isActive ? `${activeStyle}` : "hover:text-[#151515] hover:underline hover:underline-offset-4"}
                >
                    Vans
                </NavLink>
            </nav>
        </header>
    );
}