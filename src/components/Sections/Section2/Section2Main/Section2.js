import React from 'react'
import partnersMob from '../../../../assets/svgs/partnersMobile.svg'
import GradientBox from '../GradientBox/GradientBox'
import productShot2 from '../../../../assets/svgs/productShot2.svg'
import productShot3 from '../../../../assets/svgs/productShot3.svg'
import productShot5 from '../../../../assets/svgs/productShot5.svg'
import allLogos from '../../../../assets/svgs/all-logos.svg'

const Section2 = () => {
    return (
        <div className="px-5 font-body">
            <p className="mt-16 mb-20 text-2xl text-center p-2.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis ut cursus morbi est.</p>
            <div className="xs:px-2 lg:px-44">
            <img className="xs:flex sm:px-20 md:hidden" src={partnersMob} alt="partnersMobile"/>
            <img className="xs:hidden md:flex" src={allLogos} alt="partnersDesktop"/>
            </div>
            <p className="pt-20 text-center underlineBlue m-auto">Aenean volutpat.</p>
            <div className="midSection pt-16 lg:pt-40 pb-12 lg:w-6/12 lg:mx-24">
                <p className="font-semibold text-3xl mb-5 lg:text-5xl">Sem enim cursus orci at.</p>
                <p className="font-normal mb-5 lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis auctor sociis dolor, arcu vitae porta leo. Venenatis, donec purus pellentesque sodales urna, facilisis lorem. Nulla cursus velit feugiat mattis porttitor.</p>
                <p className="font-bold underlineBlue">Learn more</p>
            </div>
            <div className="lg:mb-32">
                <img className="xs:block xs:w-full xs:pb-12 sm:hidden" src={productShot2} alt="productShot2"/>
                <img className="xs:hidden md:flex lg:pl-72" src={productShot5} alt="productShot5"/>
            </div>
            <div className="gradientBox">
                <GradientBox/>
            </div>
            <div className="text-center lg:mt-36">
                <p className="font-semibold xs:text-3xl lg:text-5xl xs:pb-5">Dui tellus quis magna id ultricies eu sed.</p>
                <p className="xs:pb-8 lg:px-80 lg:text-lg lg:pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet vestibulum molestie amet, maecenas id amet. Ipsum accumsan arcu, aenean viverra penatibus quis. Laoreet.</p>
                <img className="w-screen lg:pt-6 xs:px-0" src={productShot3} alt="productShot3"/>
            </div>
        </div>
    )
}

export default Section2
