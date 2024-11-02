import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos() {

    const {van} = useOutletContext();

    return (
        <div className="mt-8">
            <img src={van.imageUrl} alt={van.name} className="size-20 object-cover rounded" />
        </div>
    )
}