import {NavLink, Outlet} from "react-router-dom"

export default function HostLayout() {

    const activeStyle = "text-[#151515] underline underline-offset-4";
    return (
        <>
            <nav role="menu" className="flex px-6 mt-4 gap-8 text-[#4D4D4D] font-[500]">
                <NavLink to="." end className={({ isActive }) => isActive ? `${activeStyle}` : "hover:text-[#151515] hover:underline hover:underline-offset-4"}>Dashboard</NavLink>
                <NavLink to="income" className={({ isActive }) => isActive ? `${activeStyle}` : "hover:text-[#151515] hover:underline hover:underline-offset-4"}>Income</NavLink>
                <NavLink to="vans" className={({ isActive }) => isActive ? `${activeStyle}` : "hover:text-[#151515] hover:underline hover:underline-offset-4"}>Vans</NavLink>
                <NavLink to="reviews" className={({ isActive }) => isActive ? `${activeStyle}` : "hover:text-[#151515] hover:underline hover:underline-offset-4"}>Reviews</NavLink>
            </nav>
            <div className="text-[#151515]">
                <Outlet />
            </div>
        </>
    )
}