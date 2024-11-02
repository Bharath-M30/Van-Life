import { useOutletContext } from "react-router-dom"

export default function HostVanInfo() {

    const {van} = useOutletContext();

    return (
        <div className='text-[0.875rem] flex flex-col gap-4 mt-8'>
            <p><span className='font-[700]'>Name: </span>{van.name}</p>
            <p><span className='font-[700]'>Category: </span>{van.type}</p>
            <p><span className='font-[700]'>Description: </span>{van.description}</p>
            <p><span className='font-[700]'>Visibility: </span>Public</p>
        </div>
    )
}