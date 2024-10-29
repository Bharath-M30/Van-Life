import HostVan from "../../components/HostVan"
import { useEffect,useState } from "react"
import { Link } from "react-router-dom"

export default function HostVans() {

    const [hostVans,setHostVans] = useState(null)

    useEffect(() => {
        fetch("/api/host/vans")
        .then(res => res.json())
        .then(data => setHostVans(data.vans));
    }, [])

    return (
        <section className="p-8 flex flex-col gap-8 mt-4 rounded-md">
            <h2 className="font-[700] text-4xl">Your Listed Vans</h2>
            {
                hostVans ? 
                (hostVans.map((van,index) => (
                    <Link to={`/host/vans/${van.id}`} key={index}>
                        <HostVan
                            key={index}
                            imageUrl={van.imageUrl}
                            name={van.name}
                            price={van.price}
                        />
                    </Link>
                ))) :
                <p>Loading...</p>
            }
        </section>
    )
}