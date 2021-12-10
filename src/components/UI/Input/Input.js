import React from 'react'

const Input = () => {
    return (
        <div>
            <form className="font-body lg:flex">
            <input className="w-full h-11 p-2 lg:w-80 lg:text-left text-black text-center" placeholder="Enter your email address"/>
            <button className="w-full h-11 lg:ml-1.5 lg:w-32 font-bold text-base bg-primaryLightBlue animate-pulse">Request demo</button>
            </form>
        </div>
    )
}

export default Input
