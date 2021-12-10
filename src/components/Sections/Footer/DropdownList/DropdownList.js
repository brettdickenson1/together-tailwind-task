import React from 'react'
import downArrow from '../../../../assets/svgs/downArrow.svg'

const DropdownList = (props) => {
    return (
        <div className="dropdownList text-xl">
            <div className="flex justify-between">
            <p className="font-bold pb-5 pt-6">{props.dropdownName}</p>
            <img src={downArrow} alt="downArrow"/>
            </div>
            <hr/>
        </div>
    )
}

export default DropdownList
