import React, { Component, useState } from 'react';
import apiRequest from '../service/ApiService';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';



const DetailEmployes = () => {
    const [formData, setFormData] = useState({
        id: 0,
        departement: {
          departementId: 0,
          nom: '',
          description: '',
          dateCreation: '',
          localisation: '',
        },
        congesId: '', // or null, depending on the requirement
        post: {
          postId: 0,
          description: '',
          niveau: '',
          lieu: '',
          heureArrivee: '',
          heureDepart: '',
        },
        firstName: '',
        lastName: '',
        dateEmbauche: '',
        adresse: '',
        numeroTelephone: '',
        manager: '',
        statutEmploiyee: '',
        sexe: '',
        age: 0,
        dateCreation: '',
        emailAddress: '',
        salaire: 0, // assuming it's a number
      });
    const [responseMessage, setResponseMessage] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const { id } = useParams();

   // const [employer, setEmployer] = useState();

    const handleGetEmployerById = async ( id) => {
        try {
            const response = await apiRequest("AP",`employer/${id}`, "GET")
            // console.log('response', response)
            const employerData = response.body;

            if (response && response.status === 200) {
                console.log(response?.body)
              
                
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    // employer: response?.body.employer,
                    // departement: response?.body.departement,
                    // post: response?.body.post,
                    // firstName: response?.body.firstName,
                    // lastName: response?.body.lastName,
                    // dateEmbauche: response?.body.dateEmbauche,
                    // adresse: response?.body.adresse,
                    // numeroTelephone: response?.body.numeroTelephone,
                    // manager: response?.body.manager,
                    // statutEmploiyee: response?.body.statutEmploiyee,
                    // sexe: response?.body.sexe,
                    // age: response?.body.age,
                    // dateCreation: response?.body.dateCreation,
                    // emailAddress: response?.body.emailAddress,
                    // salaire: response?.body.salaire
                    id: employerData.id, // Update the id property
        departement: employerData.departement,
        post: employerData.post,
        firstName: employerData.firstName,
        lastName: employerData.lastName,
        dateEmbauche: employerData.dateEmbauche,
        adresse: employerData.adresse,
        numeroTelephone: employerData.numeroTelephone,
        manager: employerData.manager,
        statutEmploiyee: employerData.statutEmploiyee,
        sexe: employerData.sexe,
        age: employerData.age,
        dateCreation: employerData.dateCreation,
        emailAddress: employerData.emailAddress,
        salaire: employerData.salaire,
                }));
                console.log('formData : ', formData)

                // Traitement des données récupérées
            } else {
                console.log("Erreur lors de la récupération des données")
            }

        } catch (error) {
            console.log("Erreur", error)
        }
    }

    useEffect(() => {
        if (id) {
            handleGetEmployerById(id);
        }
        // Code à exécuter au chargement de la page et à chaque mise à jour
    }, [id]);

 

    // setEmployerId(response.body || [])

    return (
        <div>
            <h1> Detail Des Employes</h1>
            <div className='position-relative mt-4' >
                <div class="card bg-primary-subtle">


                    <form class="card-body  ">

                        {/* <h6 class="card-subtitle mb-2 text-body-secondary mt-4">Veuillez remplir le Formulaire </h6> */}
                        <div class="row g-3 mt-4">

                            <div class="col-6">
                                <label for="inputIdEmployes" class="form-label">id</label>
                                <input type="text" class="form-control" id="integer" name='id' value={formData.id} />
                            </div>

                            <div class="col-6">
                                <label for="inputIdDepartement" class="form-label">Id Departement</label>
                                <input type="text" class="form-control" id="integer" name='departementId' value={formData.departement?.departementId} />
                            </div>

                            <div class="col-6">
                                <label for="inputIdPost" class="form-label">Id Post</label>
                                <input type="text" class="form-control" id="postId" name='postId' value={formData.post?.postId} />
                            </div>

                            <div class="col-6">
                                <label for="inputNomFamille" class="form-label">Nom Famille</label>
                                <input type="text" class="form-control" id="inputNomFamille" name='firstName' value={formData.firstName} />
                            </div>

                            <div class="col-6">
                                <label for="inputPrenom" class="form-label">Prenom</label>
                                <input type="text" class="form-control" id="prenom" name='lastName' value={formData.lastName} />
                            </div>

                            <div class="col-6">
                                <label for="inputDateEmbauche" class="form-label">Date Embauche</label>
                                <input type="text" class="form-control" id="dateEnbauche" name='dateEmbauche' value={formData.dateEmbauche} />
                            </div>

                            <div class="col-6">
                                <label for="inputAdresse" class="form-label">Adresse</label>
                                <input type="text" class="form-control" id="Adresse" name='adresse' value={formData.adresse} />
                            </div>
                            <div class="col-6">
                                    <label for="inputNumeroTelephone" class="form-label">Numero Telephone</label>
                                    <input type="text" class="form-control" id="phone" name='numeroTelephone' value={formData.numeroTelephone} />
                                </div>

                                <div class="col-6">
                                    <label for="inputManager" class="form-label">Manager</label>
                                    <input type="text" class="form-control" id="inputManager" name='manager' value={formData.manager} />

                                </div>
{/* 
                            <div class="row g-3">
                                
                            </div> */}

                            <div class="col-6">
                                <label for="inputStatutEmployes" class="form-label">Statut Employer</label>
                                <input type="text" class="form-control" id="inputStatutEmployes" name='statutEmploiyee' value={formData.statutEmploiyee} />
                            </div>
                            <div class=" col-6">
                                <label for="inputStatutEmployes" class="form-label">Sexe</label>
                                <input class="form-select ms-2" id="sexeTypeSelect" name=' sexe' value={formData.sexe} />
                                {/* <label for="sexeTypeSelect " class="form-label btn btn-secondary">Sexe</label>
                                <input class="form-select ms-2 " id="sexeTypeSelect" name='sexe' value={formData.sexe}>
                                    <option selected>choisir...</option>
                                    <option value="M">Masculin</option>
                                    <option value="F">Féminin</option>
                                </input> */}
                            </div>

                            <div class="col-6">
                                <label for="inputAge" class="form-label">Age</label>
                                <input type="text" class="form-control" id="integer" name='age' value={formData.age} />
                            </div>

                            <div class="col-6">
                                <label for="inputDateCreation" class="form-label">Date Creation</label>
                                <input type="text" class="form-control" id="inputDateCreation" name='dateCreation' value={formData.dateCreation} />
                            </div>

                            <div class="col-6">
                                <label for="inputEmail" class="form-label">Email Adresse</label>
                                <input type="text" class="form-control" id="emailAddress" name='emailAddress' value={formData.emailAddress} />
                            </div>

                            <div class="col-6">
                                <label for="inputSalaire" class="form-label">Salaire</label>
                                <input type="text" class="form-control" id="integer" name='salaire' value={formData.salaire} />
                            </div>

                            <div class="col-auto  pb-4 pt-4 mx-4">

                                <a onClick={(e) => { handleChange(); }} className="btn btn-primary">Enregistrer</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DetailEmployes