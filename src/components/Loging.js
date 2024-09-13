
import { Link } from 'react-router-dom'

import React, { Component, useState } from 'react';
import apiRequest from '../service/ApiService';

const Login = () => {
    const [formData, setFormData] = useState({

        EnterName:"",
        EnterPassword:"",
    }
)
const [responseMessage, setResponseMessage] = useState('')

const handleChange = (e) => {
  const { name, value } = e.target
  setFormData({
    ...formData,
    [name]: value
  })
}

const handleCreate = async () => {

  try {
    const response = await apiRequest("AP", '', "POST", formData)

    if (response && response.status === 200) {

      setResponseMessage("Success")
    } else {
      setResponseMessage("Error")
    }

  } catch (error) {
    console.log("error", error)
  }
}

   
        return (
            <div>
                
                <div className="container text-center rounded-3 align- btn ">
                    <div class="position-absolute top-50 start-50 translate-middle p-3 mb-2 bg-primary-subtle text-primary-emphasis  mt-5 mx-auto p-2  rounded w-50 p-3">
                        <div class=" mxd-grid gap-2 col-6-auto mx-auto p-2  ">
                        <h2> Login </h2>
                        <p>  Veuillez entrer vos identifiants pour avoir accès à votre compte </p>
                            <form class="row g-3" >
                                <div class="mb-3">
                                    {/* <label for="inputEmail4" class="form-label">Name</label> */}
                                    <input type="emai" class="form-control" id="inputEmail4" placeholder="  Enter Name " />
                                </div>
                                <div class="mb-3 ">
                                    {/* <label for="inputPassword4" class="form-label">Password</label> */}
                                    <input type="password" class="form-control" id="inputPassword4" placeholder="Enter password" />
                                    
                                    
                                </div>

                                <div class="col">
                                <a href="/Home" className="btn btn-primary">Sign in</a>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    
}
export default Login