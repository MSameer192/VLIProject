import React from 'react'
import { NavLink } from 'react-router-dom'
import Dashboard from './Assets/Dashboard'
import Invoices from './Assets/Invoices'
import Customers from './Assets/Customers'
import Car from './Assets/Car'
import Inbox from './Assets/Inbox'
import Home from './Assets/Home'
import Settings from './Assets/Settings'
import './SideBar.css'
import { useState } from 'react';
import { CheckHomePage, FindValue } from './Helpers/CheckPage'
let BtnsNames = ["/", "inbox", "vehicle", "invoice", "customer", "settings"];

const SideBar = () => {
  const [PageName, setPageName] = useState(FindValue(BtnsNames));
  // console.log(PageName)
  let LinkStyle = "flex justify-center items-center py-6 w-full duration-300 SideBarBtns";




  const Classes = (isActive, PageName) => {

    if (window.location.href?.toString().split('/')?.includes(PageName) || isActive) {
      return LinkStyle + " SideBarSvgSelected";
    }
    else if ((PageName === "/" || PageName === "AddCourse") && CheckHomePage(BtnsNames)) {
      return LinkStyle + " SideBarSvgSelected";
    }
    else
      return LinkStyle + " SideBarSvgUnSelected";
  }

  const OnClick = Name => setPageName(Name)

  return (
    <div className='flex-col gap-10 h-[calc(100vh_-_80px)] w-24 mt-20 items-center fixed py-8 hidden sm:flex bg-white'>

      <NavLink className={({ isActive }) => Classes(isActive, "/")} to="/"
        onClick={() => OnClick("/")}
      >
        <Home IconName={["/", "AddCourse"]} PageName={PageName} />
      </NavLink>

      <NavLink className={({ isActive }) => Classes(isActive, "/")} to="/"
        onClick={() => OnClick("/")}
      >
        <Dashboard IconName={["/", "AddCourse"]} PageName={PageName} />
      </NavLink>

      <NavLink className={({ isActive }) => Classes(isActive, "inbox")} to="/inbox"
        onClick={() => OnClick("inbox")}
      >
        <Inbox IconName="inbox" PageName={PageName} />
      </NavLink>

      <NavLink className={({ isActive }) => Classes(isActive, "vehicle")} to="/vehicle/inventory"
        onClick={() => OnClick("vehicle")}>
        <Car IconName="vehicle" PageName={PageName} />
      </NavLink>

      <NavLink className={({ isActive }) => Classes(isActive, "invoice")} to="/invoice"
        onClick={() => OnClick("invoice")}>
        <Invoices IconName="invoice" PageName={PageName} />
      </NavLink>

      <NavLink className={({ isActive }) => Classes(isActive, "customer")} to="/customer"
        onClick={() => OnClick("customer")}>
        <Customers IconName="customer" PageName={PageName} />
      </NavLink>

      <NavLink className={({ isActive }) => Classes(isActive, "settings")} to="/settings"
        onClick={() => OnClick("settings")}>
        <Settings IconName="settings" PageName={PageName} />
      </NavLink>

    </div>
  )
}

export default SideBar