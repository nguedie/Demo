
import Logo from '../../assest/Logo.png'
import { NavLink } from 'react-router-dom'
import React, { Component, useState } from 'react';

const Navbar = ({ responseMessage })  => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  
  return (
    <div>
        <nav class="navbar bg-body-tertiary p-3 mb-2  position-absolute top-0 end-0 btn btn-success
      w-100 p-3 mb-2 bg-body-secondary">
        <div class="container-fluid  ">
          <a class="navbar-brand ms-auto" href="#">
            <img src={Logo} alt="Logo" width={80} height={80} class="logo rounded-5 border-4 me-2" />
            <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" onClick={handleDropdown}>
              <i class="fas fa-caret-down"></i>
            </button>
            <ul class={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
              <li>
                {responseMessage === "Success" ? (
                  <span class="text-success">Succès!</span>
                ) : responseMessage === "Error" ? (
                  <span class="text-danger">Erreur!</span>
                ) : null}
              </li>
            </ul>
          </div>
            
          </a>

          
          
        </div>
      </nav>
    </div>
  )
}

export default Navbar