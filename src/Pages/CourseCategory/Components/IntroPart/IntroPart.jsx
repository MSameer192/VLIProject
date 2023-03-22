import React from 'react'
import ForNoSubcategory from './Components/ForNoSubcategory'
import ForSubcategories from './Components/ForSubcategories'


const IntroPart = ({ Courses }) => {
  
  return (
    Courses?.SubLicenseTypes?.length > 0
      ? <ForSubcategories Type={Courses} />
      : <ForNoSubcategory Type={Courses} />

  )
}

export default IntroPart

