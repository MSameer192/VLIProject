import React from 'react'

const Invoices = ({PageName,IconName}) => {
  const Color = PageName === IconName ? "#a3a0fb" : "#a5a4bf"
  return (
    <svg id="Invoices" xmlns="http://www.w3.org/2000/svg" width="22.116" height="25.276" viewBox="0 0 22.116 25.276">
  <g id="icon_Invoices">
    <path id="Path_102" data-name="Path 102" d="M21.537,0H2.58A1.493,1.493,0,0,0,1,1.58v23.7l4.739-3.159L8.9,25.276l3.159-3.159,3.159,3.159,3.159-3.159,4.739,3.159V1.58A1.493,1.493,0,0,0,21.537,0ZM18.377,15.8H5.739V12.638H18.377Zm0-6.319H5.739V6.319H18.377Z" transform="translate(-1)" fill={Color}/>
  </g>
</svg>

  )
}

export default Invoices