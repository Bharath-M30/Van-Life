export default function Home() {
    return (
            <main 
                className="h-full hero-background bg-no-repeat bg-cover p-4 flex flex-col gap-4 items-center justify-center">

                <h2 
                    className="text-white text-4xl font-extrabold">
                        You got the travel plans, we got the travel vans.
                </h2>

                <p 
                    className="text-white text-xl">
                        Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
                </p>

                <button 
                    className="w-full py-4 text-center bg-[#FF8C38] text-white rounded-md">
                        Explore Vans
                </button>
            </main>
    )
}