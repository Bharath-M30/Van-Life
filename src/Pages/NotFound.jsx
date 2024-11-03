import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div className="flex flex-col p-4 mt-32">
            <h1 className="text-4xl font-extrabold">Sorry, the page you were looking for was not found</h1>
            <Link to="/" className="bg-black w-full p-4 text-white rounded text-center mt-4">Return to home</Link>
        </div>
    )
}