import React from 'react'
import { NavLink } from 'react-router-dom'
import Styles from './Style/Home.module.css'
import estateryicon from './estatery-icon.PNG'
import { Navbar } from './Navbar'

export const FavouriteProperty = () => {
  return (
    <div>
        <h1 className={Styles.Home}>Favourite Page</h1>
        <Navbar/>
    </div>
  )
}
