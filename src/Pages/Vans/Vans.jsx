import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Van from "../../components/Van"

export default function Vans() {

    const [vans, setVans] = useState([])
    
    useEffect(() => {
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
    }, [])

    return (
        <div className="flex-1 p-8">
            <section className="min-[510px]:p-0">
                <h2 className="text-[#161616] font-[700] text-[2rem]">Explore our Van options</h2>
                <div className="flex justify-between mt-4">
                    <button className="filter-btn">Simple</button>
                    <button className="filter-btn">Luxury</button>
                    <button className="filter-btn">Rugged</button>
                    <button className="text-[#4D4D4D] underline underline-offset-4">Clear filters</button>
                </div>
            </section>

            {
                vans.length != 0 ? <section className="grid grid-cols-1 min-[510px]:grid-cols-2 gap-x-16 gap-y-16 py-8 px-4 place-content-center place-items-center h-full">
                            {vans.map(van => (
                                <Link to={`/vans/${van.id}`} key={van.id}>
                                    <Van 
                                        key={van.id}
                                        imageUrl={van.imageUrl}
                                        name={van.name}
                                        price={van.price}
                                        type={van.type}
                                    />
                                </Link>
                            ))}
                        </section>
                    :   
                        <p className="text-center mt-32">Loading...</p>
            }
        </div>
    )
}