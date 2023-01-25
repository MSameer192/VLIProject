import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const CircularProgress = ({ Percentage, Index,Color }) => {

    if (!Color) {
        Color="#A3A1FB"
    }
    const [Circular, setCircular] = useState(document.getElementById("circular" + Index));
    useEffect(() => {
        if (!Circular)
            setCircular(document.getElementById("circular" + Index))


    }, [Circular, Index])
    useEffect(() => {
        let percentage = 0
        if (Circular && Percentage) {
            setInterval(() => {
                if (percentage === Percentage) {
                    clearInterval()
                } else {

                    Circular.childNodes[0].childNodes[0].childNodes[0].innerText = (++percentage) + "%";
                    Circular.childNodes[0].style.background = `conic-gradient(${Color} ${percentage*3.6}deg, #110f7800 0deg)`;
                }
            }, 5)
        }
    }, [Circular, Color,Percentage])
    return (
        <div className='w-52 h-52 md:h-32 md:w-32 lg:h-[150px] lg:w-[150px] xl:w-44 xl:h-44 2xl:w-52 2xl:h-52 circular'
            id={'circular' + Index}
        >
            <div className='progress-circle a flex justify-center items-center'>
                <div className='h-3/4 w-3/4 flex justify-center flex-col items-center rounded-full bg-white'>
                    <span className='text-xl md:text-base lg:text-lg    xl:text-xl 2xl:text-[40px] percentage'>{Percentage}%</span>
                    <span className='text-xs md:text-4xs                xl:text-2xs 2xl:text-xs'>Completed</span>
                </div>
            </div>
        </div>
    )
}

export default CircularProgress