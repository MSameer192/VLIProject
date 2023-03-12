import React from 'react'
import "./LatestNews.css";
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
const LatestNews = () => {

  
    
    return (
        <div className='mt-9 md:bg-[#F1FAFF] flex justify-center items-center flex-col gap-4 md:pb-32 md:px-3 lg:px-10 xl:px-20 w-full'>
            <div className='flex justify-center items-center flex-col gap-2'>
                <h2 className='PrintBoldfont text-xl'>Latest News</h2>
                <p className='hidden md:inline-block text-center md:text-left md:text-xs lg:text-base  text-[#A1A3EF] max-w-[575px] Regularfont'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus vehicula elit vel egestas.
                </p>

            </div>


            <div className='w-full overflow-hidden flex justify-between items-center flex-col lg:flex-row  border-black border-solid'>
                <SideNewsPanels Title={"Sponsored"} />

                <div
                    id="NewsImagePElement"
                    className='flex flex-col justify-center items-center w-[90%] max-w-[376px] md:max-w-[850px] md:w-[800px] overflow-hidden mt-4'
                    >
                 
                        <img
                            className='w-full md:min-w-[800px] h-full md:relative md:top-12'
                            src={require("./Assets/Big News Image.png")} alt="" />
                        <h2
                            className='px-3 text-white text-[12px] relative -top-6 md:-top-12  md:text-base xl:text-lg Regularfont'
                            >
                            Rupee's downward spiral continues, inter-bank rate at Rs242
                        </h2>
                </div>




                <SideNewsPanels Title={"Ministry of Transportation"} />
            </div>

        </div>
    )
}
function SideNewsPanels({ Title }) {
    return <div className='flex flex-col items-center bg-white  p-4 h-fit gap-5 max-w-[376px] w-[90%] '>
        <span className=' flex flex-col items-center w-[90%] gap-4'>
            <h3 className='text-[#6A6A6A] Blackfont '>{Title}</h3>
            <hr className='w-full' />
        </span>
        <div className='flex flex-col gap-6'>
            <div className='flex gap-4 justify-center'>
                <img src={require("./Assets/small-left-image-1.png")} alt="" />
                <span className='flex flex-col gap-4'>
                    <h4 className='text-7xs font-normal Regularfont'>28th Jul</h4>
                    <p className='max-w-[194px] Boldfont'>By the numbers: The Trump orbit's contacts with Russians
                    </p>
                </span>
            </div>
            <div className='flex gap-4 justify-center'>
                <img src={require("./Assets/small-left-image-2.png")} alt="" />
                <span className='flex flex-col  gap-4'>
                    <h4 className='text-7xs font-normal Regularfont'>28th Jul</h4>
                    <p className='text-7xs max-w-[200px] Boldfont'>
                        Ratko Mladic guilty of genocide, sentenced to life in prison
                    </p>
                </span>
            </div>
            <div className='flex gap-4 justify-center '>
                <img src={require("./Assets/small-left-image-3.png")} alt="" />
                <span className='flex flex-col gap-4'>
                    <h4 className='text-7xs font-normal Regularfont'>28th Jul</h4>
                    <p className='text-7xs max-w-[200px] Boldfont'>Zimbabwe's Mnangagwa returns to lead nation into 'new democracy'
                    </p>
                </span>
            </div>
        </div>
        <span className='flex flex-col items-center w-[90%] gap-4'>
            <hr className='w-full' />
            <Link className=' text-[#6A6A6A]  no-underline Blackfont'>Read More News</Link>

        </span>
    </div>
}
export default LatestNews