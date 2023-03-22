import React, { useEffect } from 'react'
import "./Footer.css";
import { Link } from 'react-router-dom'
const Footer = ({ FooterBgColor, Z_Index }) => {

    if (!Z_Index)
        Z_Index = "-z-10"
    return (
        <footer className={`pt-[130px] md:pt-[100px] mt-32 md:mt-0 w-full  md:max-h-[auto] relative md:h-fit flex flex-col items-center gap-3 md:gap-10 lg:gap-40 rounded-t-[50px] md:rounded-t-[0px] md:bg-[${FooterBgColor}] FooterLinearGradient md:overflow-hidden ${Z_Index}`}>


            <ContactPortionFooter />
            <MobileScreenFooter />
            <div className='flex flex-col w-full gap-7'>
                <MidFooter />
                <LowerFooter />
            </div>
            <img src={require('./Assets/Footer BG.svg').default}
                className='2xl:w-full absolute bottom-0 w-[150%] lg:w-[145%] -z-[10]  hidden md:inline-block'

                alt="" />

        </footer>
    )
}
function MobileScreenFooter() {
    return <div className='flex w-full md:hidden flex-col items-center gap-4'>
        <div className='w-[90%] flex flex-wrap list-none gap-3 justify-center text-6xs Regularfont'>

            <Link className='text-white'>Help  </Link> <hr />


            <Link className='text-white'>Search Courses By License Types</Link> <hr />


            <Link className='text-white'> View Special Courses</Link>

        </div>
        <p className='text-6xs text-white Regularfont w-4/5 text-center'>© 2022The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymp</p>
        <p className='text-6xs text-white Regularfont w-4/5 text-center'>Vehicle Learning Innovation | Block 23 , Street 24 , Lake View Canada </p>
    </div>
}
function ContactPortionFooter() {
    return <div className=' absolute -top-24 md:static max-w-[525px] w-4/5 px-7 pt-4 pb-14 flex flex-col items-center bg-[#A1A3EF] rounded-[20px] text-white gap-4  min-h-[180px] '>
        <h3 className='text-3xs md:text-lg font-normal Regularfont'>
            Contact Us!
        </h3>

        <p className='text-[12px] md:text-xs Regularfont'>
            There are many variations of passages of Lorem Ipsum There are many variations of passages of Lorem Ipsum.
        </p>

        <button className='text-6xs px-8 py-2 m-2 bg-[#333697] Regularfont text-white md:text-base rounded-[50px] border-none cursor-pointer ContactBtn_DropShadow'>
            Contact
        </button>
    </div>
}
function MidFooter() {
    let LinkStyle = "text-white Regularfont no-underline text-[21px]";
    let ulStyle = "list-none md:flex flex-col justify-start gap-5"
    return <div className='flex items-center justify-around w-full '>
        <ul className={`hidden ${ulStyle}`}>
            <li><Link className={`${LinkStyle}`}>Download</Link></li>
            <li><Link className={`${LinkStyle}`}>About</Link></li>
            <li><Link className={`${LinkStyle}`}>Service</Link></li>

        </ul>

        <ul className='list-none flex gap-5  flex-col-reverse items-center w-1/2 md:w-auto my-4'>
            <li>
                <img
                    className='w-full'
                    src={require("./Assets/Footer Logo.svg").default} alt="" />
            </li>
            <li className='flex gap-6 items-center w-full'>
                <Link className='w-[20%] md:w-auto' >
                    <img className='w-full' src={require("./Assets/Instagram Icon.svg").default} alt="" />
                </Link>
                <Link className='w-[20%] md:w-auto' >
                    <img className='w-full' src={require("./Assets/Facebook Icon.svg").default} alt="" />
                </Link>
                <Link className='w-[20%] md:w-auto' >
                    <img className='w-full' src={require("./Assets/Twitter Icon.svg").default} alt="" />
                </Link>
                <Link className='w-[20%] md:w-auto' >
                    <img className='w-full' src={require("./Assets/Linkedin Icon.svg").default} alt="" />
                </Link>
                <Link className='w-[20%] md:w-auto' >
                    <img className='w-full' src={require("./Assets/Pinterest Icon.svg").default} alt="" />
                </Link>
            </li>
        </ul>

        <ul className={`${ulStyle} hidden`}>
            <li><Link className={`${LinkStyle} relative`}>
                <span className='absolute -left-7'><LocationIcon /></span> City Office location</Link>
            </li>
            <li><Link className={`${LinkStyle}`}>Features</Link></li>
            <li><Link className={`${LinkStyle}`}>Reporting</Link></li>
        </ul>
    </div>
}
function LowerFooter() {
    return <div className='md:flex w-full flex-col gap-4 mb-5 hidden'>
        <hr />
        <div className='flex justify-around w-full'>
            <Link className='text-white text-4xs Regularfont font-thin  list-none no-underline'>Copyright & Terms And Conditions</Link>
            <p className='text-white text-4xs Regularfont font-thin'>© 2022 Vehicle learning Innovation All rights reserved. Vehicle learning Innovation is a Canadian trademark.</p>
            <span className='flex gap-4 lg:gap-16'>
                <Link className='text-white text-4xs Regularfont font-thin list-none no-underline'>
                    Terms of use
                </Link>
                <hr />
                <Link className='text-white text-4xs Regularfont font-thin list-none no-underline'>
                    Privacy  Policy
                </Link>
            </span>
        </div>
    </div>
}

function LocationIcon({ Classes }) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="21" height="30" viewBox="0 0 21 30">
        <path id="Icon_material-location-on" data-name="Icon material-location-on" className={Classes} d="M18,3A10.492,10.492,0,0,0,7.5,13.5C7.5,21.375,18,33,18,33S28.5,21.375,28.5,13.5A10.492,10.492,0,0,0,18,3Zm0,14.25a3.75,3.75,0,1,1,3.75-3.75A3.751,3.751,0,0,1,18,17.25Z" transform="translate(-7.5 -3)" fill="#fff" />
    </svg>

}
export default Footer