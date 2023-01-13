export function ProductPrice({InstituteCourse}) {
    return <td className={`text-center whitespace-nowrap px-1 border-[1px] border-solid border-[#CFCFCF]
                           text-3xs lg:text-3xs xl:text-2xs 2xl:text-xs
                           SemiBold`}>
        PKR {InstituteCourse?.CoursePackages[0]?.TotalFee}
    </td>
}

export function TotalPrice() {
    return <td className={`text-[#A1A3EF] text-center whitespace-nowrap px-1 border-[1px] border-solid border-[#CFCFCF] 
                          text-3xs lg:text-3xs xl:text-2xs 2xl:text-xs
                          SemiBold`}>
        PKR 38,800
    </td>
}