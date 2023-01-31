import React from 'react'

const Inbox = ({ PageName, IconName }) => {
  const Color = PageName === IconName ? "#a3a0fb" : "#a5a4bf"
  return (
    <svg id="Inbox" xmlns="http://www.w3.org/2000/svg" width="25.276" height="22.116" viewBox="0 0 25.276 22.116">
      <g id="email-84">
        <g id="icon_inbox">
          <path id="Path_358" data-name="Path 358" d="M23.7,1H1.58A1.579,1.579,0,0,0,0,2.58V21.537a1.579,1.579,0,0,0,1.58,1.58H23.7a1.579,1.579,0,0,0,1.58-1.58V2.58A1.579,1.579,0,0,0,23.7,1Zm-1.58,18.957H3.159V10.041l8.695,4.968a1.576,1.576,0,0,0,1.567,0l8.695-4.968Zm0-13.554L12.638,11.82,3.159,6.4V4.159H22.116Z" transform="translate(0 -1)" fill={Color} />
        </g>
      </g>
    </svg>

  )
}

export default Inbox