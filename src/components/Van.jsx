export default function Van({name,price,type,imageUrl}) {

    let typeColor;

    if(type == "simple"){
        typeColor = "bg-[#E17654]";
    }else if(type == "luxury"){
        typeColor = "bg-[#161616]";
    }else if(type == "rugged"){
        typeColor = "bg-[#115E59]"
    }

    return (
        <div className="flex flex-col w-full min-[510px]:w-[14.3125rem] rounded">
            <img src={imageUrl} alt={name} className="size-[26rem] min-[510px]:size-[14.3125rem] rounded object-cover"/>
            <div className="flex justify-between mt-4">
                <div>
                    <h3 className="font-[600] text-xl">{name}</h3>
                    {type && <p className={`px-4 py-2 ${typeColor} rounded-md text-center text-white mt-4`}>{type}</p>}
                </div>
                <div>
                    <p className="font-[600] text-xl">${price}</p>
                    <p className="text-right -mt-1 text-[0.75rem]">/day</p>
                </div>
            </div>
        </div>
    )
}