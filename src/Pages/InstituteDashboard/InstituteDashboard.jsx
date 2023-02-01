import React from 'react'
import useCheckLogin from '../../Helpers/CustomHooks/CheckLogin'

const InstituteDashboard = () => {
  useCheckLogin(false, ["Institute"], ["Staff","Admin"])
  return (
    <div className='mt-20'>InstituteDashboard</div>
  )
}

export default InstituteDashboard