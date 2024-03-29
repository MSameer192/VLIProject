import React from 'react'
import { GetColor } from '../Helpers/GetColor'

const Dashboard = ({ PageName,IconName }) => {
    const Color = GetColor(IconName, PageName) ? "#a3a0fb" : "#a5a4bf"
 
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
            <g id="Dashboard" transform="translate(0.41 -0.2)">
                <g id="icon_dashboard" transform="translate(-0.41 0.2)">
                    <path id="Union_8" data-name="Union 8" d="M20.313,25a1.477,1.477,0,0,1-1.564-1.562V9.375a1.477,1.477,0,0,1,1.564-1.562h3.125A1.476,1.476,0,0,1,25,9.375V23.438A1.476,1.476,0,0,1,23.438,25Zm-9.375,0a1.475,1.475,0,0,1-1.562-1.562V1.562A1.476,1.476,0,0,1,10.938,0h3.125a1.476,1.476,0,0,1,1.562,1.562V23.438A1.475,1.475,0,0,1,14.062,25ZM1.562,25A1.476,1.476,0,0,1,0,23.438V17.188a1.477,1.477,0,0,1,1.562-1.564H4.687a1.478,1.478,0,0,1,1.564,1.564v6.249A1.477,1.477,0,0,1,4.687,25Z" fill={Color} />
                </g>
            </g>
        </svg>

    )
}

export default Dashboard