import { Link } from "react-router-dom";
import { BaseUrl } from "../../../Actions/Base";

function VehicleTiles({ VehicleTypesSate, setref }) {
    let HoverStyle = "hover:origin-top-left hover:gap-10 hover:md:gap-6 hover:scale-100 md:hover:scale-[1.04]"
    let TransitionDuration = "duration-[400ms]";

    return <>
        {VehicleTypesSate?.map((value) =>
            <Link
                to={`/vehicle/category/${value?.VehicleTypeId}`}
                key={value.VehicleTypeId}
                ref={(e) => { setref(e) }}
                className={`bg-white rounded-2xl ${TransitionDuration} cursor-pointer flex flex-col items-center no-underline text-black
                        gap-3 xl:gap-7  origin-top-left
                        max-w-[320px] min-w-[220px] w-[60%]  lg:w-[60%]
                        h-[324px] md:h-[340px] lg:h-[370px] 2xl:h-[480px] 
                        ${HoverStyle} hover-on-child 
                        VehicleType_DropShadow 
                        `}>
                <img loading='lazy'
                    id="VehicleTypeImage"
                    className={`w-4/5 ${TransitionDuration}`}
                    src={`${BaseUrl}/api/vehicletype/image/?url=${value.VehicleTypeImage}`}
                    alt="Vehicle Type" />
                <span id="VehicleTypeInfo" className={`w-[70%] flex gap-2 md:gap-5 flex-col items-center  ${TransitionDuration}`}>
                    <h2 className={`w-full font-normal text-3xs md:text-2xs Regularfont`}>
                    Category {value.VehicleTypeName} vehicles
                    </h2>

                    <p className={`w-full text-[12px] md:text-5xs  Regularfont`}>{value.VehicleTypeDescription}</p>

                </span>
            </Link>
        )}
    </>
}
export default VehicleTiles