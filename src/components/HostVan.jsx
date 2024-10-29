export default function HostVan({name,price,imageUrl}) {
    return (
        <>
            <div className="flex p-4 w-full bg-white justify-left items-center gap-4">
                <img src={imageUrl} alt="The_cruiser" className="size-16 rounded-md object-cover"/>
                <div>
                    <h3 className="text-2xl font-[600] text-[#161616]">{name}</h3>
                    <p className="text-[#4D4D4D]">${price}/day</p>
                </div>
            </div>
        </>
    )
}