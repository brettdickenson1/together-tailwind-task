import React from 'react'
import image1 from '../../../../assets/svgs/image.svg'
import blueBox from '../../../../assets/svgs/blueBox.svg'
import greyBox from '../../../../assets/svgs/greyBox.svg'

const Section4 = () => {
    return (
        <div className="font-body h-full text-black px-5 lg:flex lg:py-36">
        <img className="pt-10 xs:w-full lg:w-2/4 lg:pl-24" src={image1}/>
        <div className="lg:w-2/4 lg:pl-36 lg:pt-16">
        <p className="pt-10 font-normal">Vulputate vel vitae id ornare.</p>
        <p className="font-bold">Amet quis.</p>
        <p className="pt-10 text-2xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget enim vel.</p>
        <p className="pt-12 xs:hidden lg:block underlineBlue">Ut convallis massa.</p>
        <div className="row1 flex pt-11 lg:pt-36">
            <img className="lg:w-40 lg:mr-2 animate-bounce" src={blueBox} alt="blueBox"></img>
            <img className="lg:w-40 lg:mr-2" src={greyBox} alt="greyBox"></img>
            <img className="lg:w-40" src={greyBox} alt="greyBox"></img>
        </div>
        <div className="row2 flex pb-11 pt-1">
            <img className="lg:w-40 lg:mr-2" src={greyBox} alt="greyBox"></img>
            <img className="lg:w-40 lg:mr-2" src={greyBox} alt="greyBox"></img>
            <img className="lg:w-40" src={greyBox} alt="greyBox"></img>
        </div>
        <p className="pb-12 text-center xs:m-auto xs:mb-30 xs:block lg:hidden underlineBlue">Read Customer Story.</p>
        </div>
        </div>
    )
}

export default Section4
