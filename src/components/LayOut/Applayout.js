import React from 'react'
import Logo from '../../assest/Logo.png'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import Sidbar from './Sidbar'
import BodyLayout from './BodyLayout'


const Applayout = (props) => {
  return (
    <div className='position-relative w-100' style={{ display: "flex", flexDirection: "row", height: "100%", width: "100%" }}>
      <div>
        <Navbar />
        <Sidbar style={{ flex: "1 0 200px" }} />
      </div>
      <div style={{ marginTop: "300px"}}>
        <BodyLayout children={props.children} />
      </div>
    </div>
  )
}

export default Applayout