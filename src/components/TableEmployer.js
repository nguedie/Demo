
import React, { Component, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import apiRequest from '../service/ApiService';
import { useEffect } from 'react';




const TableEmployer = () => {
  const [employer, setEmployer] = useState([]);
  useEffect(() => {
    // Code à exécuter au chargement de la page et à chaque mise à jour
    handleGet();
  }, []);

  const navigate = useNavigate();

  const handleGet = async () => {
    try {
      const response = await apiRequest("AP", 'employer/getAllEmployers', "GET")
      console.log('response', response)

      if (response && response.status === 200) {
        console.log(response.data)
        setEmployer(response.body || [])
        // Traitement des données récupérées
      } else {
        console.log("Erreur lors de la récupération des données")
      }

    } catch (error) {
      console.log("Erreur", error)
    }
  }


  console.log("employerdata:", employer);
  

const handleView = (id) => {
  navigate(`/detailemployes/${id}`)

}
const handleTime=(id)=>{
  navigate( `/temps/${id}`)
}

  return (
    <>
      <div className='container' style={{ zIndex: -1 }}>
        <h3 class="text-center">LIST DES EMPLOYES</h3>
        <div className='position-relative mt-5 ' >
          <div class="card ">
            <div class="card-body  bg-primary-subtle">
              <h5 class="card-title">Liste des employes de l'entreprise</h5>
              <table class="table mt-5 ">
                <thead class="table-light">
                  <tr>

                    <th scope="col">id</th>
                    <th scope="col">NomFamille</th>
                    <th scope="col">AdresseEmail</th>
                    <th scope='col'>Action</th>

                  </tr>
                </thead>
                <tbody>

                  {employer.map((employe, index) => (
                    <tr key={index}>
                      <td>{employe.id}</td>
                      <td>{employe.firstName}</td>
                      <td>{employe.emailAddress}</td>
                      <th>
                        <button type="button" class="btn btn-primary mx-4" onClick={()=> handleView(employe.id)}>
                          Voir Plus
                        </button>
                        <button type="button" class="btn btn-primary" onClick={()=> handleTime(employe.id)} >
                        <NavLink className="nav-link" to="/Temps">
                          Voir Temps</NavLink>
                        </button>
                      </th>
                    </tr>

                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div >

    </>

  )
}


export default TableEmployer