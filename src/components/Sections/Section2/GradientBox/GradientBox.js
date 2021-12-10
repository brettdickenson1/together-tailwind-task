import React from 'react'
import gradientBox from '../../../../assets/svgs/gradient-bg.svg'
import gradientBox2 from '../../../../assets/svgs/gradient-bg2.svg'
import sideImage from '../../../../assets/svgs/productShot6.svg'

const GradientBox = () => {
    return (
        <div className="h-full relative flex lg:ml-8">
         <img className="xs:hidden lg:flex" src={gradientBox}></img>
         <img className="xs:block xs:w-full xs:relative lg:hidden xs:pb-12" src={gradientBox2}></img>
         <div className="xs:absolute xs:px-7 lg:hidden">
         <p className="xs:text-3xl font-semibold xs:pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et id.</p>
         <p className="xs:text-1xl xs:pt-5 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus augue ut diam viverra. Velit donec ultrices sed id dui quis nunc tempor.</p>
         </div></div>
    )
}

export default GradientBox
