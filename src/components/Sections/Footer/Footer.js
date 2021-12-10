import React from 'react'
import Input from '../../UI/Input/Input'
import upArrow from '../../../assets/svgs/upArrow.svg'
import DropdownList from './DropdownList/DropdownList'
import DropdownItems from './DropdownItems/DropdownItems'
import miniArrow from '../../../assets/svgs/miniArrow.svg'

const Footer = () => {
    return (
        <div className="h-full text-white bg-primaryDarkBlue xs:mt-10 xs:px-5 lg:px-28 pt-14 font-body">
            <p className="font-semibold text-4xl">Quisque mi turpis enim consectetur.</p>
            <p className="pt-4 pb-8 font-normal">Congue luctus lacus varius lectus pretium.</p>
            <Input/>
            <div className="dropdown pt-40 flex justify-between">
                <p className="text-xl xs:block lg:hidden font-bold">Urna.</p>
                <img className="xs:flex lg:hidden" src={upArrow} alt="upArrow"></img>
            </div>
            <div className="itemsList xs:block lg:hidden pt-6 pb-11 text-base">
        
                <DropdownItems dropdownItem="Massa leo."></DropdownItems>
                <DropdownItems dropdownItem="Nec nullam."></DropdownItems>
                <DropdownItems dropdownItem="Nec nullam."></DropdownItems>
                <DropdownItems dropdownItem="Sit aliquam feugiat."></DropdownItems>
                <DropdownItems dropdownItem="Nunc vitae ornare."></DropdownItems>
                <DropdownItems dropdownItem="Et volutpat."></DropdownItems>
            </div>
            <div className="xs:hidden lg:flex">
            <div className="itemsList pt-6 pb-11 text-base">
            <p className="text-lg pb-9 font-bold">Est.</p>
                <DropdownItems dropdownItem="Vitae nec."></DropdownItems>
                <DropdownItems dropdownItem="Purus."></DropdownItems>
                <DropdownItems dropdownItem="Nibh."></DropdownItems>
                <DropdownItems dropdownItem="Proin semper jutso."></DropdownItems>
                <DropdownItems dropdownItem="Blandit."></DropdownItems>
                <DropdownItems dropdownItem="Malesuada."></DropdownItems>
            </div>
            <div className="itemsList pt-6 pb-11 text-base ml-24">
            <p className="text-lg pb-9 font-bold">Et.</p>
                <DropdownItems dropdownItem="Nunc elementum."></DropdownItems>
                <DropdownItems dropdownItem="Sit ac interdum."></DropdownItems>
                <DropdownItems dropdownItem="Ac ut cras."></DropdownItems>
                <DropdownItems dropdownItem="Sed ipsum lobortis."></DropdownItems>
                <DropdownItems dropdownItem="Nulla maecenas nunc."></DropdownItems>
                <DropdownItems dropdownItem="Purus."></DropdownItems>
            </div>
            <div className="itemsList pt-6 pb-11 text-base ml-24">
            <p className="text-lg pb-9 font-bold">Placerat.</p>
                <DropdownItems dropdownItem="Et cursus fringilla."></DropdownItems>
                <DropdownItems dropdownItem="In velit sagittis."></DropdownItems>
                <DropdownItems dropdownItem="Mattis."></DropdownItems>
                <DropdownItems dropdownItem="Est."></DropdownItems>
            </div>
            <div className="itemsList pt-6 pb-11 text-base ml-24 pr-36">
            <p className="text-lg pb-9 font-bold">Massa.</p>
                <DropdownItems dropdownItem="Id."></DropdownItems>
                <DropdownItems dropdownItem="Aliquam."></DropdownItems>
                <DropdownItems dropdownItem="Interdum."></DropdownItems>
                <DropdownItems dropdownItem="Risus."></DropdownItems>
            </div>
            <div className="footerBox h-20 mt-9 py-4 border-2 border-gray-400 w-72 h-24 relative">
            <p className="text-xs pl-5 pr-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu rhoncus, maecenas scelerisque. Tristique massa.</p>
            <img className="absolute lg:top-2 lg:right-2" src={miniArrow} alt="miniArrow"/>
            </div>
            </div>
            <div className="dropdownList xs:block lg:hidden">
                <DropdownList dropdownName="Leo."></DropdownList>
                <DropdownList dropdownName="Leo."></DropdownList>
                <DropdownList dropdownName="Mauris."></DropdownList>
                <DropdownList dropdownName="Duis."></DropdownList>
            </div>
            <div className="footerBox h-20 mt-9 py-5 border-2 border-gray-400 lg:hidden">
            <p className="text-center text-xs pl-5 pr-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu rhoncus, maecenas scelerisque. Tristique massa.</p>
            </div>

        <div className="block lg:flex lg:pb-24">
            <div className="footerEnd pt-9 pb-7 lg:w-2/3">
            <p className="pb-4">Pretium pellentesque massa.</p>
            <p className="text-opacity-40 text-white text-sm lg:w-3/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor proin tempor sed fermentum sit pretium pellentesque. Dictumst risus elementum dignissim risus, lobortis molestie. </p>
            </div>
            <div className="terms flex pb-24 lg:w-2/4 xs:w-100 xs:text-center xs:justify-between">
                <p className="lg:pr-12">Terms & Conditions</p>
                <p className="lg:pr-12">Privacy Policy</p>
                <p>Cookies Policy</p>
            </div>
        </div>
        </div>
    )
}

export default Footer
