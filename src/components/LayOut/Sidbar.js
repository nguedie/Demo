import React from 'react'
import Logo from '../../assest/Logo.png'
import { NavLink } from 'react-router-dom'

const Sidbar = () => {
  return (
    <div>
      <div className=" position-fixed h-100 p-5 w-50 ">
        <nav className="navbar sidebar  bg-body-tertiary p-3 mb-2 h-100 d-inline-block border border-primary rounded  position-absolute top-0 start-0 
        p-3 mb-2 bg-success-subtle text-success-emphasis" style={{ width: "230px" }}>

          {/* <span className="navbar-brand  ">Sidebar</span> */}
          <div className="mb-8 " >
            <img src={Logo} alt="Logo " width={80} height={80} className="logo rounded-5 border-4" />
          </div>
          <span className="navbar-brand  ">Administrateur</span>

          <ul className="nav flex-column ">
            <li className="nav-item  pt-2 pb-2">
               <NavLink className="nav-link" to="/home">
               <i class="bi bi-house-fill fs-5"></i> Home</NavLink>
              {/* <a className="nav-link" href="#"> LireEmployer</a> */}
            </li>
            <li className="nav-item pb-2 pt-1 ">

           
              < NavLink className="nav-link" to="/simpleform">
              <i class="bi bi-person fs-5 "> </i> Creer Employes</NavLink> 
               
              {/* <a className="nav-link mb-50" href="/simpleform">CreerEmployer</a> */}
            </li>
            <li className="nav-item  pt-2 pb-2">
              <NavLink className="nav-link" to="/TableEmployer">
              <i class="bi bi-card-list fs-5 "> </i> List Employes</NavLink>
              {/* <a className="nav-link" href="#"> LireEmployer</a> */}
            </li>
          </ul>
        </nav>
      </div>

    </div>
  )
}

export default Sidbar