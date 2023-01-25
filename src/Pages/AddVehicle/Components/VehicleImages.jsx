import React from 'react'
import { Drop, DragLeave, DragOver, OnImageChange } from './Helpers/EleEvents'


const VehicleImages = ({ VehicleImagesState, setVehicleImagesState }) => {
    return (
        <div className='mt-10 sm:bg-white w-11/12 py-6 px-0 sm:px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-[75px]'>
            <div className='flex flex-col w-full items-center'>
                <h2 className='text-sm text-[#707070] font-normal'>Vehicle Gallery</h2>
                <p className='text-5xs mt-2'>Select minimum 1 image</p>
            </div>
            <div className='flex w-full justify-evenly items-center flex-wrap gap-10 mt-12 flex-col sm:flex-row'>
                {
                    new Array(6).fill(0).map((value, index) =>
                        <ImageSelector key={index} Index={index} Name={"Image" + (++index)}
                            setVehicleImagesState={setVehicleImagesState} VehicleImagesState={VehicleImagesState} />
                    )
                }
            </div>
        </div>
    )
}
function Stop(e) {
    e.stopPropagation()
}


function ImageSelector({ Index, Name, setVehicleImagesState, VehicleImagesState }) {
    return <div className={`p-5 bg-[#ECECEC] flex flex-col gap-8 aspect-[8_/_7]
                            min-w-[260px]   max-w-[405px] 
                            w-11/12    xl:w-4/5
                            DragAndDrop`}
    >
        <p className='text-[#4D4F5C] text-3xs'>Upload</p>
        <div className='bg-[#F0F2F8] flex flex-col justify-center items-center gap-5 h-full overflow-hidden ChangeBg' onDragOver={DragOver} onDragLeave={DragLeave} onDragEnd={DragLeave}
            onDrop={(e) => Drop(e, VehicleImagesState, setVehicleImagesState)}>
            <input type="file" className='hidden' name={Name} id={`Img${Index}`}
                onChange={(e) => OnImageChange(e, VehicleImagesState, setVehicleImagesState)}
            />

            <label htmlFor={`Img${Index}`}>
                <img className='w-36 cursor-pointer HideOnDrag' src={require('../Assets/UploadIcon.svg').default} alt="" />
            </label>
            <span className='flex flex-col items-center HideOnDrag'>
                <p className='text-[#4D4F5C] text-base'>DRAG & DROP</p>
                <p className='text-[#4D4F5C] text-3xs'>your files to assets, or &nbsp;
                    <label htmlFor={`Img${Index}`} className='underline text-[#3B86FF] cursor-pointer text-3xs SemiBold'>
                        browse
                    </label>
                </p>
            </span>
        </div>
    </div>
}
export default VehicleImages