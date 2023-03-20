import React from 'react'

const Top = () => {
    return (
        <>
            <div className='w-full bg-[rgba(112,112,112,0.9)] flex flex-col gap-1 justify-center items-center pt-12 pb-6 mt-20'>
                <h3 className='Boldfont text-lg'>Vehicle Learning Innovation</h3>
                <div className='flex gap-2'>
                    <img src={require('../Assets/Books.svg').default} alt="" />
                    <h3 className='Boldfont text-lg'>E-Books</h3>
                </div>
            </div>
            <p className='text-center text-base font-normal text-[#A1A3EF]'>
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Curabitur dapibus vehicula elit vel egestas.
            </p>
        </>
    )
}

export default Top