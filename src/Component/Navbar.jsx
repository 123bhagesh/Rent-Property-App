import React from 'react'
import Styles from './Style/Home.module.css'
import estateryicon from './estatery-icon.PNG'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
       <div className={Styles.Navbar}>
        <div className={Styles.div1}>
            <div  to="/"> <img style={{width:"140px",height:"37px",marginTop:"-5px",marginRight:"20px"}} src={estateryicon} alt="logoimage"/></div>

            <NavLink className={Styles.navlink} to="/"> Home</NavLink>
            <NavLink className={Styles.navlink} to="/favourite" >Favourite Property</NavLink>
            <NavLink className={Styles.navlink} to="/addproperty" >Add Property</NavLink>
            {/* <NavLink className={Styles.navlink} to="" >Manage Property</NavLink>
            <NavLink className={Styles.navlink} to="" >Resourse</NavLink>
            <NavLink className={Styles.navlink} to="" >Favourite Property</NavLink> */}
        
        </div>

      </div>
    </div>
  )
}

