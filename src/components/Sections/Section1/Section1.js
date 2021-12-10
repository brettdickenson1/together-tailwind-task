import React from 'react'
import Input from '../../UI/Input/Input'
import productShot1 from '../../../assets/svgs/productShot1.png'
import productShot7 from '../../../assets/svgs/productShot7.png'

const Section1 = () => {
    return (
        <div className="text-white lg:mx-14 lg:mb-40 xs:block xs:py-12 lg:flex">
            <div className="lg:w-2/4">
            <p className="font-body text-4xl leading-9 mb-5 lg:text-7xl pt-11 lg:pt-24 lg:font-semibold">Vel quis feugiat pharetra diam viverra quis.</p>
            <p className="lg:text-xl lg:pb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna risus hendrerit dignissim duis fringilla sit. Lacus porttitor neque ipsum.</p>
            <div className="form mt-5 lg:pb-48">
                <Input/>
            </div>
            </div>
            <div className="xs:hidden lg:flex pt-24">
            <img className="pl-14 h-96" src={productShot1} alt="productShot1"/>
            </div>
            <div className="xs:block lg:hidden">
            <img className="pb-12 xs:pt-12 xs:m-auto" src={productShot7} alt="productShot7"/>
            </div>
        </div>
    )
}

export default Section1
