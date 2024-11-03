import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import Van from "../../components/Van"
import { getVans } from "../../api"

export default function Vans() {

    const [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVans] = useState([])
    const [error, setError] = useState(null)

    const typeFilter = searchParams.get("type")
    
    useEffect(() => {
        async function loadVans() {
            try{
                const data = await getVans()
                setVans(data)
            } catch(err){
                setError(err)
            }
        }
        loadVans()
    }, [])

    const displayedVans = typeFilter ? vans.filter(van => van.type.toLowerCase() == typeFilter) : vans

    function handleFilterChange(key,value) {
        setSearchParams(prevParams => {
            if(value === null){
                prevParams.delete(key)
            }else{
                prevParams.set(key,value)
            }
            return prevParams
        })
    }

    if(error){
        return <h1 className="flex-1 mt-32 text-4xl font-extrabold">There was an error! {error.message}</h1>
    }

    return (
        <div className="flex-1 p-8">
            <section className="min-[510px]:p-0">
                <h2 className="text-[#161616] font-[700] text-[2rem]">Explore our Van options</h2>
                <div className="flex gap-4 justify-start mt-4">
                    <button 
                        className={`filter-btn filter-simple ${typeFilter == "simple" ? "bg-[#E17654] text-[#FFEAD0]" : ""}`}
                        onClick={() => handleFilterChange("type","simple")}
                    >
                        Simple
                    </button>
                    <button 
                        className={`filter-btn filter-luxury ${typeFilter == "luxury" ? "bg-[#161616] text-[#FFEAD0]" : ""}`}
                        onClick={() => handleFilterChange("type","luxury")}
                    >
                        Luxury
                    </button>
                    <button 
                        className={`filter-btn filter-rugged ${typeFilter == "rugged" ? "bg-[#115E59] text-[#FFEAD0]" : ""}`}
                        onClick={() => handleFilterChange("type","rugged")}
                    >
                        Rugged
                    </button>
                    { 
                        typeFilter &&
                        <button 
                            className="text-[#4D4D4D] underline underline-offset-4"
                            onClick={() => handleFilterChange("type", null)}
                        >
                            Clear filters
                        </button> 
                    }
                </div>
            </section>

            {
                vans.length > 0 ?
                        <section className="grid grid-cols-1 min-[510px]:grid-cols-2 gap-x-16 gap-y-16 py-8 px-4 place-content-center place-items-center h-full">
                            {displayedVans.map(van => (
                                <Link to={`/vans/${van.id}`} key={van.id} state={{search: `?${searchParams.toString()}`,type: typeFilter}}>
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
                        : <p className="text-center mt-32">In a sec...</p>
            }
        </div>
    )
}