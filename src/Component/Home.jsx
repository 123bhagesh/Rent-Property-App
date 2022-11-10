import React from 'react'
import { NavLink } from 'react-router-dom'
import Styles from './Home.module.css'
import estateryicon from './estatery-icon.PNG'

export const Home = () => {
  return (
    <div >
      <h1 className={Styles.Home}>Home Page</h1>
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
        <div>
            <NavLink to="">Login</NavLink>
            <NavLink to="" >Sign up</NavLink>

        </div>
      </div>
      <div className={Styles.SearchDiv}>
        <h1>Search Properties By rent</h1>
        <input type="text" placeholder="Search Property... "/>
      </div>
      <div>
        <select placeholder='' id="">

        </select>
      </div>
    </div>
  )
}

