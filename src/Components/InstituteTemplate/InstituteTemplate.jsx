import React from 'react'

const InstituteTemplate = ({ Element, m_top, bg }) => {
    if (!m_top)
        m_top = "mt-20"
    if (!bg)
        bg = "bg-white"

    return (
        <div className={`flex ${bg} relative flex-col ml-0 ${m_top}  sm:ml-24 w-full sm:w-[calc(100%-96px)]`} >
            <Element />
        </div>
    )
}

export default InstituteTemplate