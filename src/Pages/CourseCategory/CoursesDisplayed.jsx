import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CategoryOne from './Components/CategoryOne/CategoryOne'
import Stats from './Components/Stats/Stats'
import CategoryTwo from './Components/CategoryTwo/CategoryTwo'
import OtherCategories from './Components/OtherCategories/OtherCategories'

const CoursesDisplayed = () => {
    const { LicenseTypeId, VehicleTypeId } = useParams()

    const { Courses } = useSelector((Store) => Store.CourseReducer)

    return (
        LicenseTypeId
            ? !Courses?.SubLicenseTypes?.length || Courses?.SubLicenseTypes?.length === 0
                ? <CategoryOne Types={Courses} />

                : Courses?.SubLicenseTypes?.map((SubLicenseType, index) => {

                    if (index === 0)
                        return <CategoryOne Types={SubLicenseType} />

                    if (index === 1) {
                        let NextSubLicenseType
                        if (Courses?.SubLicenseTypes?.length > 2) NextSubLicenseType = Courses?.SubLicenseTypes[index + 1]

                        else NextSubLicenseType = undefined


                        return <>
                            <Stats />
                            <CategoryTwo LicenseType={SubLicenseType} NextSubLicenseType={NextSubLicenseType} />
                        </>
                    }


                    if (index === 2)
                        return <OtherCategories LicenseType={SubLicenseType} />

                    return <CategoryOne Types={SubLicenseType} />
                })

            : VehicleTypeId
                ? <CategoryOne Types={Courses} />
                : null
    )
}

export default CoursesDisplayed