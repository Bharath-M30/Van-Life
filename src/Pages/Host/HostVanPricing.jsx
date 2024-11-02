import { useOutletContext } from "react-router-dom"

export default function HostVanPricing() {

    const {van} = useOutletContext();

    return (
        <p className="mt-8"><span className="text-2xl font-[700]">${van.price.toFixed(2)}</span>/day</p>
    )
}