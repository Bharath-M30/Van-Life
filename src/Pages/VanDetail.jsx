import BackButton from '@mui/icons-material/ArrowBackIosNewSharp';
import { useParams, Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

export default function VanDetail() {

    const params = useParams()
    const [van, setVan] = useState(null)

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setVan(data.vans))
    }, [params.id])

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
        <div className='flex-1 p-8'>
            <Link to="/vans"><BackButton /> Back to vans page</Link>
            { van ? (
                <div className='my-8'>
                    <img src={van.imageUrl} alt={van.name} className='size-full rounded'/>
                    <span className={`inline-block px-4 py-2 mb-4 ${typeColor} rounded-md text-center text-white mt-4`}>{van.type}</span>

                    <h3 className="font-[700] text-3xl mb-4">{van.name}</h3>

                    <p className='mb-4'><span className="font-[600] text-xl">${van.price}</span>/day</p>
                    <p className='font-[500] mb-8'>{van.description}</p>
                    <button 
                    className="w-full py-4 text-center bg-[#FF8C38] text-white rounded-md">
                        Rent this van
                    </button>
                </div> )
             : <p className='text-center my-32'>Loading...</p>
            }
        </div>
    )
}