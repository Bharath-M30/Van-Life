import Rating from "/rating.png"
import StarRateIcon from '@mui/icons-material/StarRate';

export default function Reviews() {

    const reviewsData = [
        {
            rating: 5,
            name: "Elliot",
            date: "January 3, 2023",
            text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
            id: "1",
        },
        {
            rating: 5,
            name: "Sandy",
            date: "December 12, 2022",
            text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
            id: "2",
        },
    ]
    const starIcon = <StarRateIcon style={{color:"#FF8C38"}} />
    function starRating(n){
        let stars = [];
        for(let i=1; i<=n; i++){
            stars.push(starIcon)
        }
        return stars
    }


    return (
        <div className="p-6 flex flex-col gap-8">
            <section>
                <div className="flex items-baseline mt-4">
                    <h1 className="text-4xl font-bold">Your reviews</h1>
                    <p className="text-[#4D4D4D] font-[500] ml-4 ">last <span className="underline font-bold">30 days</span></p>
                </div>
                <img src={Rating} alt="Ratings" className="w-full mt-8"/>
            </section>
            <section>
                <h2 className="text-xl font-bold">Reviews ({reviewsData.length})</h2>

                {reviewsData.map(review => (
                    <div className="my-6 flex flex-col gap-4">
                        <div>{starRating(review.rating)}</div>
                        <p className="font-semibold">{review.name}<span className="text-[#8C8C8C] ml-2">{review.date}</span></p>
                        <p className="font-medium">{review.text}</p>
                        <hr className="h-[1px] my-4 bg-[#747373] w-full"/>
                    </div>
                ))}
            </section>
        </div>
    )
}