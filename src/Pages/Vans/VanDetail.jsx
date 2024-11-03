import BackButton from '@mui/icons-material/ArrowBackIosNewSharp';
import { useParams, Link, useLocation } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { getVans } from '../../api';

export default function VanDetail() {

    const {id} = useParams()
    const location = useLocation()
    const [van, setVan] = useState(null)
    const [error,setError] = useState(null)

    useEffect(() => {
        async function loadVan() {
            try{
                const data = await getVans(id)
                setVan(data)
            } catch(err){
                setError(err)
            }
        }
        loadVan()
    }, [id])

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

    const search = location.state?.search || ""
    const type = location.state?.type || null

    if(error) {
        return <h1 className="flex-1 mt-32 text-4xl font-extrabold">There was an error! {error.message}</h1>
    }
    return (
        <div className='flex-1 p-8'>
            <Link to={`..${search}`} relative='path'><BackButton /> Back to {type ? type : "all"} vans</Link>
            { van ? (
                <div className='my-8'>
                    <img src={van.imageUrl} alt={van.name} className='size-[25rem] min-[463px]:size-[36rem] rounded object-cover'/>
                    <span className={`inline-block px-4 py-2 mb-4 ${typeColor} rounded-md text-center text-white mt-4`}>{van.type}</span>

                    <h3 className="font-[700] text-3xl mb-4">{van.name}</h3>

                    <p className='mb-4'><span className="font-[600] text-xl">${van.price}</span>/day</p>
                    <p className='font-[500] mb-8'>{van.description}</p>
                    <button 
                    className="w-full py-4 text-center bg-[#FF8C38] text-white rounded-md">
                        Rent this van
                    </button>
                </div> )
             : <p className='text-center my-32'>In a sec...</p>
            }
        </div>
    )
}