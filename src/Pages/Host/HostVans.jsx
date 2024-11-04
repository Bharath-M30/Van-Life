import HostVan from "../../components/HostVan"
import { useEffect,useState } from "react"
import { Link } from "react-router-dom"
import { getHostVans } from "../../api"

export default function HostVans() {

    const [hostVans,setHostVans] = useState(null)
    const [error,setError] = useState(null)

    useEffect(() => {
        async function loadVans() {
            try{
                const data = await getHostVans()
                setHostVans(data)
            }catch(err){
                setError(err)
            }
        }
        loadVans()
    }, [])

    if(error){
        return <h1 className="flex-1 mt-32 text-4xl font-extrabold">There was an error! {error.message}</h1>
    }

    return (
        <section className="p-6 flex flex-col gap-8 mt-4 rounded-md">
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
                <p className='text-center mt-32'>In a sec...</p>
            }
        </section>
    )
}