import Van from "../components/Van"
import {useState, useEffect} from "react"

export default function Vans() {

    const [vans, setVans] = useState([])
    
    useEffect(() => {
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
    }, [])

    return (
        <div>
            <section className="p-8">
                <h2 className="text-[#161616] font-[700] text-[2rem]">Explore our Van options</h2>
                <div className="flex justify-between mt-4">
                    <button className="filter-btn">Simple</button>
                    <button className="filter-btn">Luxury</button>
                    <button className="filter-btn">Rugged</button>
                    <button className="text-[#4D4D4D] underline underline-offset-4">Clear filters</button>
                </div>
            </section>
            <section className="grid grid-cols-2 gap-x-4 gap-y-8 py-8 px-4 place-content-center place-items-center h-full">
                {vans.map(van => (
                    <Van 
                        key={van.id}
                        imageUrl={van.imageUrl}
                        name={van.name}
                        price={van.price}
                        type={van.type}
                    />
                ))}
             </section>
        </div>
    )
}