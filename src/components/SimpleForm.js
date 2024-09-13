

import React, { Component, useState } from 'react';
import apiRequest from '../service/ApiService';


const SimpleForm = () => {
  const [formData, setFormData] = useState({
    id: '',
    departementId: '',
    congesId: '',
    postId: '',
    firstName: '',
    lastName: '',
    dateEmbauche: '',
    adresse: '',
    numeroTelephone: '',
    manager: '',
    statutEmploiyee: '',
    sexe: '',
    age: '',
    dateCreation: '',
    emailAddress: '',
    salaire: ''
  })
  const [responseMessage, setResponseMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    console.log("name", formData)
  }


  const handleCreate = async (e) => {
    e.preventDefault();
    console.log('formdata', formData);

    try {
      const response = await apiRequest("AP", 'employer/create', "POST", formData)

      if (response && response.status === 200) {
        console.log(response)

        setResponseMessage("Success")
      } else {
        setResponseMessage("Error")
      }

    } catch (error) {
      console.log("error", error)
      setResponseMessage("Error")
    }
  }

  return (
    <>
      <div className='' >
        <h3 class="text-center">CREER EMPLOYES</h3>
        <div className='position-relative mt-4' >
          <div class="card bg-primary-subtle">

            <form class="card-body  ">
              <h5 class="card-title mt-4">Formulaire de creation des employes</h5>

              <h6 class="card-subtitle mb-2 text-body-secondary mt-4">Veuillez remplir le Formulaire </h6>
              <div class="row g-3 mt-4">

                <div class="col-6">
                <label for="inputIdEmployes" class="form-label">id</label>
                <input type="number" class="form-control" id="integer"name='id' value={formData.id} onChange={handleChange}/>
                </div>

                <div class="col-6">
                <label for="inputIdDepartement" class="form-label">Id Departement</label>
                <input type="number" class="form-control" id="integer" name='departementId'value={formData.departementId} onChange={handleChange}/>
                </div>

                <div class="col-6">
                <label for="inputIdPost" class="form-label">Id Post</label>
                <input type="number" class="form-control" id="integer"name='postId'value={formData.postId} onChange={handleChange}/>
                </div>

                <div class="col-6">
                <label for="inputNomFamille" class="form-label">Nom Famille</label>
                <input type="text" class="form-control" id="inputNomFamille"name='firstName'value={formData.firstName} onChange={handleChange}/>
                </div>

                <div class="col-6">
                <label for="inputPrenom" class="form-label">Prenom</label>
                <input type="text" class="form-control" id="prenom" name='lastName'value={formData.lastName} onChange={handleChange}/>
                </div>

                <div class="col-6">
                  <label for="inputDateEmbauche" class="form-label">Date Embauche</label>
                  <input type="date" class="form-control" id="dateEnbauche"name='dateEmbauche'value={formData.dateEmbauche} onChange={handleChange}/>
                </div>

                <div class="col-6">
                <label for="inputAdresse" class="form-label">Adresse</label>
                <input type="number" class="form-control" id="Adresse"name='adresse'value={formData.adresse} onChange={handleChange}/>
                </div>

                <div class="col-6">
                  <label for="inputNumeroTelephone" class="form-label">Numero Telephone</label>
                  <input type="tel" class="form-control" id="phone"name='numeroTelephone'value={formData.numeroTelephone} onChange={handleChange}/>
                  </div>
                  <div class="col-6">
                  <label for="inputManager" class="form-label">Manager</label>
                  <input type="text" class="form-control" id="inputManager"name='manager'value={formData.manager} onChange={handleChange}/>

                  </div>

                {/* <div class="row g-1">
                  
                  
                </div> */}

                <div class="col-6">
                <label for="inputStatutEmployes" class="form-label">Statut Employer</label>
                <input type="text" class="form-control" id="inputStatutEmployes"name='statutEmploiyee'value={formData.statutEmploiyee} onChange={handleChange}/>
                </div>
                <div class="d-flex align-items-center col-6">
                  {/* <button class="btn btn-secondary" id="sexeButton"  disabled>Sexe</button>
                  <select class="form-select ms-2" id="sexeTypeSelect" name=' sexe'value={formData.sexe} onChange={handleChange}> */}
                   <label for="sexeTypeSelect " class="form-label btn btn-secondary">Sexe</label>
                   <select class="form-select ms-2 " id="sexeTypeSelect" name="sexe" value={formData.sexe} onChange={handleChange}>
                    <option selected>choisir...</option>
                    <option value="M">Masculin</option>
                    <option value="F">Féminin</option>
                  </select>
                </div>

                <div class="col-6">
                <label for="inputAge" class="form-label">Age</label>
                <input type="number" class="form-control" id="integer"name='age'value={formData.age} onChange={handleChange}/>
                </div>

                <div class="col-6">
                <label for="inputDateCreation" class="form-label">Date Creation</label>
                <input type="date" class="form-control" id="inputDateCreation"name='dateCreation'value={formData.dateCreation} onChange={handleChange}/>
                </div>

                <div class="col-6">
                <label for="inputEmail" class="form-label">Email Adresse</label>
                <input type="text" class="form-control" id="emailAddress"name='emailAddress'value={formData.emailAddress} onChange={handleChange}/>
                </div>

                <div class="col-6">
                <label for="inputSalaire" class="form-label">Salaire</label>
                <input type="number" class="form-control" id="integer"name='salaire'value={formData.salaire} onChange={handleChange}/>
                </div>

                <div class="col-auto pt-4 mx-4 ">
                  <a  onClick={(e) => {handleCreate(e); }} className="btn btn-primary">Enregistrer</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );


}

export default SimpleForm;


// const SimpleForm = () => {
//   return (
//     <div>SimpleForm</div>
//   )
// }

// export default SimpleForm