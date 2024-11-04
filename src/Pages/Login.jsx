import { Link, useLocation, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { loginUser } from "../api"

export default function Login(){

    const [loginFormData, setLoginFormData] = useState({email: "",password: ""})
    const [status, setStatus] = useState("idle")
    const [error, setError] = useState(null)
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const isLoggedIn = sessionStorage.getItem("loggedin")
        if(isLoggedIn){
            navigate("/host")
        }
    },[])

    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        loginUser(loginFormData)
        .then(data => {
            setError(null)
            sessionStorage.setItem("loggedin", true)
            navigate(`${location.state?.path || "/host"}`, {replace: true})
        })
        .catch(err => setError(err))
        .finally(() => {
            setStatus("idle")
        })
    }
    function handleChange(e){
        const {name,value} = e.target
        setLoginFormData(prevData => ({
            ...prevData,
            [name]:value
        }))
    }

    const loginMessage = location.state?.message || null

    return (
        <>
            {loginMessage && <h3 className="text-xl font-semibold text-center text-red-600">{loginMessage}</h3>}
            <div className="flex flex-col items-center justify-center p-8">
                <h1 className="text-3xl font-bold text-center mb-4">Sign in to your account</h1>
                {error?.message && <h3 className="text-lg text-center text-red-600 mb-4">{error.message}</h3>}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 min-w-80">
                    <input 
                        name="email"
                        onChange={handleChange} 
                        type="email"
                        placeholder="Email address"
                        className="w-full py-4 pl-4 border-2 border-solid focus:outline-none"
                        value={loginFormData.email}
                    />
                    <input 
                        name="password"
                        onChange={handleChange} 
                        type="password"
                        placeholder="Password"
                        className="w-full py-4 pl-4 border-2 border-solid focus:outline-none"
                        value={loginFormData.password}
                    />
                    <button 
                        disabled={status == "submitting"}
                        className="mt-4 w-full p-4 text-center text-white rounded-md bg-[#FF8C38]"
                    >
                        {status == "submitting" ? "Logging in..." : "Log in"}
                    </button>
                </form>
                <p className="text-center mt-4">Don't have an account? <Link className="text-[#FF8C38]">create one now</Link></p>
            </div>
        </>
    )
}