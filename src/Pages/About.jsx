import { Link } from "react-router-dom"

export default function About() {
    return (
        <article>
                <img src="/About-background.png" alt="Van Background" className="w-full h-44 object-cover"/>
            <section className="flex flex-col px-6 py-8">
                <h2 className="text-3xl font-bold leading-9">Don’t squeeze in a sedan when you could relax in a van.</h2>
                <div className="leading-5 mt-8 font-[500]">
                    <p className="mb-4">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)</p>
                    <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                </div>

                <section className="my-12 p-8 bg-[#FFCC8D] text-left rounded">
                    <h3 className="font-bold text-3xl">Your destination is waiting.
                    Your van is ready.</h3>
                    <Link to="/vans" className="bg-black inline-block text-white rounded-xl py-3 px-8 mt-4 hover:transform hover:translate-x-1 hover:translate-y-1 transition duration-500">Explore our vans</Link>
                </section>
            </section>
        </article>
    )
}