import {NavLink, Outlet} from "react-router-dom"

export default function HostLayout() {

    const activeStyle = "text-[#151515] underline underline-offset-4";
    return (
        <>
            <nav role="menu" className="flex px-4 pl-8 gap-8 text-[#4D4D4D] font-[500]">
                <NavLink to="/host" end className={({ isActive }) => isActive ? `${activeStyle}` : "hover:text-[#151515] hover:underline hover:underline-offset-4"}>Dashboard</NavLink>
                <NavLink to="/host/income" className={({ isActive }) => isActive ? `${activeStyle}` : "hover:text-[#151515] hover:underline hover:underline-offset-4"}>Income</NavLink>
                <NavLink to="/host/vans" className={({ isActive }) => isActive ? `${activeStyle}` : "hover:text-[#151515] hover:underline hover:underline-offset-4"}>Vans</NavLink>
                <NavLink to="/host/reviews" className={({ isActive }) => isActive ? `${activeStyle}` : "hover:text-[#151515] hover:underline hover:underline-offset-4"}>Reviews</NavLink>
            </nav>
            <Outlet />
        </>
    )
}