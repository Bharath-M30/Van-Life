import BackButton from '@mui/icons-material/ArrowBackIosNewSharp';
import { useParams, Link, NavLink, Outlet } from 'react-router-dom';
import { useState,useEffect } from 'react';

export default function HostVanDetail() {

    const params = useParams()
    const [van, setVan] = useState(null)

    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setVan(data.vans[0]))
    }, [params.id])

    console.log(van)

    const activeStyle = "text-[#151515] underline underline-offset-4";

    let typeColor;

    if(van){
        if(van.type == "simple"){
            typeColor = "bg-[#E17654]";
        }else if(van.type == "luxury"){
            typeColor = "bg-[#161616]";
        }else if(van.type == "rugged"){
            typeColor = "bg-[#115E59]"
        }
    }

    return (
        <div className='flex-1 p-8 mt-4'>
            <Link to=".." relative='path'><BackButton /> Back to all vans</Link>
            { van ? (
                <div className='mt-8 bg-white p-6'>
                    <div className='flex gap-4 items-center'>
                        <img src={van.imageUrl} alt={van.name} className="size-44 rounded object-cover" />
                        <div className='flex flex-col gap-2'>
                            <p className={`text-[0.75rem] py-2 px-4 ${typeColor} rounded-md text-center text-white w-20`}>{van.type}</p>
                            <h3 className='font-[600] text-2xl'>{van.name}</h3>
                            <p><span className='font-[700] text-lg'>${van.price}</span>/day</p>
                        </div>
                    </div>
                    <nav className="flex gap-4 text-[#4D4D4D] font-[700] mt-8">
                        <NavLink
                            to="."
                            end
                            className={({ isActive }) => isActive ? `${activeStyle}` : "hover:text-[#151515] hover:underline hover:underline-offset-4"}
                        >
                            Details
                        </NavLink>
                        <NavLink
                            to="pricing"
                            className={({ isActive }) => isActive ? `${activeStyle}` : "hover:text-[#151515] hover:underline hover:underline-offset-4"}
                        >
                            Pricing
                        </NavLink>
                        <NavLink
                            to="photos"
                            className={({ isActive }) => isActive ? `${activeStyle}` : "hover:text-[#151515] hover:underline hover:underline-offset-4"}
                        >
                            Photos
                        </NavLink>
                    </nav>
                    
                    <Outlet context={{van}} />
                </div>
                 )
             : <p className='text-center mt-32'>In a sec...</p>
            }
        </div>
    )
}