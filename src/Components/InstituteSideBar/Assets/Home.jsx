import React from 'react'
import { GetColor } from '../Helpers/GetColor'

const Home = ({ IconName, PageName }) => {
    const Color = GetColor(IconName, PageName) ? "#a3a0fb" : "#a5a4bf"

    return (
        <svg id="Home" xmlns="http://www.w3.org/2000/svg" width="25.276" height="25.276" viewBox="0 0 25.276 25.276">
            <g id="icon_home">
                <path id="Path_357" data-name="Path 357" d="M24.614,8.193,13.556.294a1.58,1.58,0,0,0-1.836,0L.662,8.193A1.58,1.58,0,0,0,2.5,10.764l.662-.473V23.7a1.579,1.579,0,0,0,1.58,1.58h15.8a1.579,1.579,0,0,0,1.58-1.58v-13.4a2.692,2.692,0,0,0,1.578.767,1.58,1.58,0,0,0,.919-2.866ZM18.957,22.116H15.8V17.377a3.159,3.159,0,1,0-6.319,0v4.739H6.319V8.035l6.319-4.514,6.319,4.514Z" transform="translate(0 0)"
                    fill={Color} />
            </g>
        </svg>

    )
}

export default Home