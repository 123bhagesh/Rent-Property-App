import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Styles from './Style/Home.module.css'
import estateryicon from './estatery-icon.PNG'
import styles from './Style/AddProperty.module.css'
import { Navbar } from './Navbar'
import axios from 'axios'

export const AddProperty = () => {
  const [proptype, setProType] = useState('')
  const [name, setName] = useState('')
  const [image,setImage] = useState('')
  const [beds,setBeds] = useState('')
  const [bedroom, setBedroom] = useState('')
  const [city, setCity] = useState('')
  const [date, setDate] = useState('')
  const [area, setArea] = useState('')
  const [address, setAddress] = useState('')

  // console.log(proptype,name,beds,bedroom,city,date,area,address)

  const handelAdd =(e)=>{
    e.preventDefault()
    console.log(proptype,name,beds,bedroom,city,date,area,address)
    // console.log("I am Bhagesh")
    let payload={
      "propertyType":proptype,
      "houseName": name,
      "image":image,
      "noBeds":beds,
      "noBedroom":bedroom,
      "city":city,
      "date":date,
      "areaOfHouse":area,
      "address":"address"
    }
    axios.post(`https://jsonserver-her-mock5.herokuapp.com/rent_property`,payload)

  }


  return (
    <div >
      {/* <h1 className={Styles.Home}>Add Property Page</h1> */}
      <Navbar/>
      <div className={styles.mainDiv}>
        <div>
          <h1>Rent Your Property on Estatery</h1>
          <img style={{width:"60%"}} src="https://static.99acres.com/universalapp/img/ppfTabImg.png" alt="rentpropertyimg"/>

        </div>
        
        <div className={styles.formDiv}>
           <h2 style={{marginTop:"-10px",marginBottom:"-5px"}}>Begin Posting your Property</h2>
           <form onSubmit={handelAdd}>
              <div>
                <select className={styles.ProType}  onChange={(e)=>setProType(e.target.value)} required>
                  <option >Property Type </option>
                  <option value="House">House/Villa</option>
                  <option value="Flat">Flat/Apparment</option>
                  <option value="Builder Floor">Independent/Builder Floor</option>
                </select>
                <input style={{width:"52%"}} type="text" placeholder='House or Apartment name...' onChange={(e)=>setName(e.target.value)} required/>
              </div>
              <input style={{width:"97%"}} type="text" placeholder='Add image of property...' onChange={(e)=>setImage(e.target.value)} required/>
              <select onChange={(e)=> setBeds(e.target.value)} required>
                <option value="">Number of Beds</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <select onChange={(e)=> setBedroom(e.target.value)} required>
                <option value="">Number of Bedrooms</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <select  placeholder='Select State' onChange={(e)=> setCity(e.target.value)} required>
                  <option value={null}>Select City</option>
                  <option value='Pune'>Pune</option>
                  <option value='Delhi'>Delhi</option>
                  <option value='Mumbai'>Mumbai</option>
                  <option value='Nagpur'>Nagpur</option>
              </select>
              <div className={styles.dateMain}>
                  <div className={styles.date}>
                    {
                      date.length <= 0 ? "Availability Date" : date
                    } 
                    <input type="date" onChange={(e)=> setDate(e.target.value)} required/>
                  </div>
                  <input  type="number" placeholder="Bult up Area in square feet... " onChange={(e)=> setArea(e.target.value)} required/>
                  <input style={{width:"120px",marginRight:"7px"}} type="number" placeholder='Rent Of Property...' />
              </div>
              <input style={{width:"97%"}} type="text" placeholder='Address...' onChange={(e)=> setAddress(e.target.value)} required />
              <button type='submit' className={styles.postButton}>Post your Property</button>

           </form>
        </div>

      </div>
    </div>
  )
}

