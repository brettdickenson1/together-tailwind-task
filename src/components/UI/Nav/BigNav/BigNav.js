import React from 'react'
import mainLogo from '../../../../assets/svgs/logo.svg'
import burgerNav from '../../../../assets/svgs/burgerNav.svg'
import Section1 from '../../../Sections/Section1/Section1'

const BigNav = () => {
    return (
        <div>
        <div className="h-full bg-primaryDarkBlue xs:px-5 xl:px-14 pt-7 w-full">
            <div className="flex xs:justify-between items-center">
            <div className="mobileView xs:w-full lg:w-auto">
            <div className="flex xs:justify-between lg:justify-start">
            <img src={mainLogo} alt="mainLogo"/>
            <img className="lg:hidden cursor-pointer" src={burgerNav} alt="burgerNav"/>
            <div className="xs:hidden font-normal lg:flex lg:pl-14 lg:justify-start text-white">
            <p className="cursor-pointer">Cras.</p>
            <p className="pl-14 cursor-pointer">Cras.</p>
            <p className="pl-14 cursor-pointer">Fringilla.</p>
            <p className="pl-14 cursor-pointer">Enim dolor.</p>
            </div>
            </div>
            </div>
            <div className="lg:w-1/3 xs:hidden lg:flex text-white lg:justify-end items-center"
            >
            <p className="pr-8 font-semibold cursor-pointer">Log In</p>
            <button className="w-full h-11 lg:ml-1.5 lg:w-32 font-bold text-base bg-primaryLightBlue font-semibold animate-pulse">Request demo</button>
            </div>
            </div>
            <div>
            <Section1/>
            </div>
        </div>
        </div>
    )
}

export default BigNav
