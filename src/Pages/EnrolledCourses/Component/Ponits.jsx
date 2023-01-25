import React from 'react'

const Ponits = () => {
    let PointFeatures = [
        {
            Point: 'Up-to-date traffic rules.',
            Img: require('../Assets/GreenBulb.svg').default
        },
        {
            Point: "Learn the traffic signs.",
            Img: require('../Assets/GreenBulb.svg').default
        },
        {
            Point: "Preparation theory exam.",
            Img: require('../Assets/OrangeBulb.svg').default
        },
        {
            Point: "Road safety videos.",
            Img: require('../Assets/OrangeBulb.svg').default
        },
        {
            Point: "Take the practice tests.",
            Img: require('../Assets/PurpleBulb.svg').default
        },
        {
            Point: "Get your driving License.",
            Img: require('../Assets/PurpleBulb.svg').default
        },
        {
            Point: "Open-Source development",
            Img: require('../Assets/GreenBulb.svg').default
        },
        {
            Point: "Multiple Countries",
            Img: require('../Assets/GreenBulb.svg').default
        },
        {
            Point: "Learn the traffic signs.",
            Img: require('../Assets/GreenBulb.svg').default
        },
        {
            Point: "Preparation theory exam.",
            Img: require('../Assets/OrangeBulb.svg').default
        },
        {
            Point: "Road safety videos.",
            Img: require('../Assets/OrangeBulb.svg').default
        },
    ]
    return (
        <div className={`flex py-20 w-11/12 2xl:w-4/5 shadow-[4px_4px_6px_#00000016] border-[1px] border-solid border-[#D6D6D6]
                                sm:max-h-[650px] 
                        px-11 md:px-14 lg:gap-16 xl:gap-[72px] 2xl:px-20
                       flex-col md:flex-row
                        `}
        >
            <div className='flex flex-wrap flex-col gap-7 sm:w-1/2 sm:max-h-[500px] justify-center sm:items-start'>
                {PointFeatures.map((value, index) =>
                    <span key={index} className='flex items-center gap-5'>
                        <img src={`${value.Img}`} alt="" />
                        <p className='text-3xs md:text-2xs xl:text-xs'>{value.Point}</p>
                    </span>
                )}
            </div>
        </div>
    )
}

export default Ponits