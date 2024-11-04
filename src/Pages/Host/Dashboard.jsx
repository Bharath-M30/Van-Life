import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { getHostVans } from "../../api"
import StarRateIcon from '@mui/icons-material/StarRate';

export default function Dashboard() {

    const [vans, setVans] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        getHostVans()
            .then(data => setVans(data))
            .catch(err => setError(err))
    }, [])

    if(error){
        return <h1 className="flex-1 mt-32 text-4xl font-extrabold">There was an error! {error.message}</h1>
    }

    return (
        <div>
            <section className="bg-[#FFEAD0] mt-8 p-6 flex flex-col gap-6">
                <h1 className="text-4xl font-extrabold">Welcome!</h1>
                <div className="flex justify-between"><p className="text-[#4D4D4D] font-[500]">Income last <span className="underline font-bold">30 days</span></p><Link to="income">Details</Link></div>
                <p className="text-5xl font-extrabold">$2,260</p>
            </section>
            <section className="px-6 py-8 bg-[#FFDDB2]">
                <div className="flex justify-between items-center">
                    <p className="font-bold text-lg">Review score <StarRateIcon style={{color:"#FF8C38"}} />5.0<span className="text-[#4D4D4D] font-[500]">/5</span></p><Link to="reviews">Details</Link>
                </div>
            </section>
            <section className="p-6 mt-4">
                <div className="flex justify-between">
                    <h3 className="font-bold text-2xl">Your listed vans</h3><Link to="vans">Details</Link>
                </div>
                <div className="flex flex-col mt-4 gap-6">
                    { vans ? vans.map( van => (
                        <div className="flex p-4 w-full bg-white justify-between items-center gap-4">
                            <div className="flex gap-4">
                                <img src={van.imageUrl} alt="The_cruiser" className="size-16 rounded-md object-cover"/>
                                <div>
                                    <h3 className="text-2xl font-[600] text-[#161616]">{van.name}</h3>
                                    <p className="text-[#4D4D4D]">${van.price}/day</p>
                                </div>
                            </div>
                            <Link to={`vans/${van.id}`}>View</Link>
                        </div>
                    )) : <p className="text-center">In a sec...</p>
                    }   
                </div>
            </section>
        </div>
    )
}