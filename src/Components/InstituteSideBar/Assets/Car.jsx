import React from 'react'

const Car = ({ PageName, IconName }) => {
    const Color = PageName === IconName ? "#a3a0fb" : "#a5a4bf"

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="26.371" height="18.46" viewBox="0 0 26.371 18.46">
            <path id="Icon_awesome-car-side" data-name="Icon awesome-car-side" d="M22.416,8.843h-.659l-4.482-5.6a2.638,2.638,0,0,0-2.059-.99H6.4A2.637,2.637,0,0,0,3.952,3.908L1.978,8.936A2.631,2.631,0,0,0,0,11.48v4.615a.659.659,0,0,0,.659.659H2.637a3.956,3.956,0,0,0,7.911,0h5.274a3.956,3.956,0,0,0,7.911,0h1.978a.659.659,0,0,0,.659-.659V12.8A3.956,3.956,0,0,0,22.416,8.843ZM6.593,18.732a1.978,1.978,0,1,1,1.978-1.978A1.98,1.98,0,0,1,6.593,18.732ZM9.56,8.843H4.818L6.4,4.887H9.56Zm1.978,0V4.887h3.677l3.165,3.956Zm8.241,9.889a1.978,1.978,0,1,1,1.978-1.978A1.98,1.98,0,0,1,19.779,18.732Z" transform="translate(0 -2.25)" fill={Color} />
        </svg>

    )
}

export default Car