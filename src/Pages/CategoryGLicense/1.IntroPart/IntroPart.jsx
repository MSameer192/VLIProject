import React from 'react'
import ForNoSubcategory from './Components/ForNoSubcategory'
import ForSubcategories from './Components/ForSubcategories'


const IntroPart = ({ Courses }) => {
  return (
    Courses?.LicenseType?.SubLicenseTypes
      ? <ForSubcategories Courses={Courses} />
      : <ForNoSubcategory Courses={Courses} />

  )
}

export default IntroPart

