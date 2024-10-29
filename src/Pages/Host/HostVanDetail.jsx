import BackButton from '@mui/icons-material/ArrowBackIosNewSharp';
import { useParams, Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

export default function VanDetail() {

    const params = useParams()
    const [van, setVan] = useState(null)

    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
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
        <div className='flex-1 p-8 mt-4'>
            <Link to="/host/vans"><BackButton /> Back to all vans</Link>
            { van ? (
                <section>

                </section>
                 )
             : <p className='text-center my-32'>Loading...</p>
            }
        </div>
    )
}