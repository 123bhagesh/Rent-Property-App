import React from 'react'
import { NavLink } from 'react-router-dom'
import Styles from './Style/Home.module.css'
import estateryicon from './estatery-icon.PNG'
import { Navbar } from './Navbar'

export const Home = () => {
  return (
    <div >
      <h1 className={Styles.Home}>Home Page</h1>
      <Navbar/>

      <div className={Styles.SearchDiv}>
        <h1>Search Properties By rent</h1>
        <input type="text" placeholder="Search Property... "/>
      </div>
      <div className={Styles.filterDiv}>
        <select className={Styles.selectTag} placeholder='Select State' id="">
            <option value={null}>Select City</option>
            <option value='Pune'>Pune</option>
            <option value='Delhi'>Delhi</option>
            <option value='Mumbai'>Mumbai</option>
            <option value='Nagpur'>Bangulure</option>
        </select>
        <input type="date" className={Styles.selectTag} placeholder='Select Move-in-Date' />
        <select className={Styles.selectTag} placeholder='Select State' id="">
            <option value={null}>Price</option>
            <option value="5000">5000-10000</option>
            <option value='10000'>10000-15000</option>
            <option value='15000'>15000-20000</option>
            <option value='20000'>20000-25000</option>
        </select>
        <select className={Styles.selectTag} placeholder='Select State' id="">
            <option value={null}>Property Type</option>
            <option value='house'>House</option>
            <option value='hostel'>Hostel</option>
            <option value='flat'>Flates </option>

        </select>
        
      </div>
    </div>
  )
}

