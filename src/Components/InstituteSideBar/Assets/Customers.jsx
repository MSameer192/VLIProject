import React from 'react'

const Customers = ({PageName,IconName}) => {
    const Color = PageName === IconName ? "#a3a0fb" : "#a5a4bf"
 
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="25" viewBox="0 0 22 25">
            <g id="Customers" transform="translate(-0.494 0.105)">
                <g id="icon_customers" transform="translate(0.494 -0.105)">
                    <path id="Union_10" data-name="Union 10" d="M0,25a9.43,9.43,0,0,1,9.428-9.375h3.143A9.43,9.43,0,0,1,22,25Zm4.085-3.126H18.071a6.344,6.344,0,0,0-5.5-3.125H9.585A6.348,6.348,0,0,0,4.085,21.874ZM4.714,7.812V6.249a6.286,6.286,0,0,1,12.572,0V7.812a6.286,6.286,0,0,1-12.572,0ZM7.857,6.249V7.812a3.143,3.143,0,0,0,6.287,0V6.249a3.143,3.143,0,0,0-6.287,0Z" fill={Color} />
                </g>
            </g>
        </svg>

    )
}

export default Customers