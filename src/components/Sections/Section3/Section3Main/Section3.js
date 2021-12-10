import React from 'react'
import productShot4 from '../../../../assets/svgs/productShot4.svg'

const Section3 = () => {
    return (
        <div className="blueSection bg-primaryLightBlue font-body xs:h-full lg:h-screen text-white pt-7 lg:mx-12">
            <div className="xs:px-5 lg:px-48 lg:py-24 h-42">
                <div className="lg:block lg:relative lg:w-2/3">
            <p className="text-3xl pb-5 font-semibold lg:text-5xl">Ultrices euismod curabitur sapien nunc.</p>
            <p className="font-normal pb-5 lg:w-11/12 lg:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat neque dignissim morbi lacinia volutpat est. Pulvinar scelerisque at urna elit quisque pellentesque. Quam cursus.</p>
            <p className="underline pb-3">Learn more.</p>
            <img className="pb-16 pt-14 lg:absolute top-6 left-96" src={productShot4} alt="productShot4"></img>
            </div>
            </div>
        </div>
    )
}

export default Section3
