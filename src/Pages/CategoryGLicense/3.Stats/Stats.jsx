import React from 'react'

const Stats = () => {
    return (
        <div className='hidden sm:block my-7 relative overflow-hidden borderStyle'>
            <img className='absolute -z-10 top-[50%] -translate-y-[50%] w-full' src={require('./Assets/Stats BG.jpg')} alt="" />
            <div className='flex justify-center items-center gap-14 px-5 py-12 bg-[#acadf143] w-full'>
                <img className='' src={require('./Assets/No.of Studnets.png')} alt="" />
                <img className='' src={require('./Assets/No.of Studnets.png')} alt="" />
                <img className='' src={require('./Assets/No.of Studnets.png')} alt="" />
                <img className='' src={require('./Assets/No.of Studnets.png')} alt="" />

            </div>
        </div>
    )
}

export default Stats