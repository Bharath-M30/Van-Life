import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import { loginUser } from "../api"

export default function Login(){

    const [loginFormData, setLoginFormData] = useState({email: "",password: ""})
    const location = useLocation()

    function handleSubmit(e) {
        e.preventDefault()
        loginUser(loginFormData)
        .then(data => console.log(data))
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
            {loginMessage && <h3 className="text-xl text-center text-red-600 absolute transform translate-x-44">{loginMessage}</h3>}
            <div className="flex-1 p-8 items-center mt-16">
                <h1 className="text-3xl font-bold text-center mb-4">Sign in to your account</h1>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <input 
                        name="email"
                        onChange={handleChange} 
                        type="email"
                        placeholder="Email address"
                        className="w-full py-4 pl-4 border-2 border-solid rounded-ss-lg rounded-se-lg focus:outline-none"
                        value={loginFormData.email}
                    />
                    <input 
                        name="password"
                        onChange={handleChange} 
                        type="password"
                        placeholder="Password"
                        className="w-full py-4 pl-4 border-2 border-solid rounded-es-lg rounded-ee-lg focus:outline-none"
                        value={loginFormData.password}
                    />
                    <button 
                        className="mt-4 w-full p-4 text-center text-white rounded-md bg-[#FF8C38]"
                    >
                        Log in
                    </button>
                </form>
                <p className="text-center mt-4">Don't have an account? <Link className="text-[#FF8C38]">create one now</Link></p>
            </div>
        </>
    )
}