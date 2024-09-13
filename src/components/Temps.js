
import React, { Component, useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apiRequest from '../service/ApiService';


const Temps = () => {
  const [formData, setFormData] = useState({
    jour: '',
    heureArrivee:'',
    heureDepart:'',
  })
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

    const handleGetEmployerTimeById = async ( ) => {
        try {
            const response = await apiRequest("AP", `employerTime/${id}`, "GET")
            console.log('response', response)

            if (response && response.status === 200) {
                // console.log(response?.body)
                const employerTimeData = response.body;

                setFormData((prevFormData) => ({
                  ...prevFormData,
                  
                  jour: employerTimeData.jour,
                  heureArrivee:employerTimeData.heureArrivee,
                  heureDepart:employerTimeData.heureDepart
                }
              ));
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
            handleGetEmployerTimeById(id);
        }
        // Code à exécuter au chargement de la page et à chaque mise à jour
    }, [id]);
            

//             setFormData(employerTimeData)
//       setResponseMessage("EmployerTime found")
//     } else {
//       setResponseMessage("EmployerTime not found")
//     }

//   } catch (error) {
//     console.log("error", error)
//   }
// }

  
  return (
    <div>
      <form class="card-body  bg-primary-subtle card ">
        <h6 class="card-subtitle mb-2 text-body-secondary "></h6>
        <div class="row g-3 mt-4">

          <div class="col-">
            <label for="inputIdDepartement" class="form-label"> jour</label>
            <input type="text" class="form-control" id="integer" name='jour' value={formData.jour}/>
          </div>

          <div class="col-">
            <label for="inputIdPost" class="form-label"> heureArrivee</label>
            <input type="text" class="form-control" id="integer" name='heureArrivee' value={formData.heureArrivee} />
          </div>

          <div class="col-">
            <label for="inputIdPost" class="form-label">heureDepart </label>
            <input type="text" class="form-control" id="integer" name='heureDepart' value={formData.heureDepart} />

          </div>
          <div><a onClick={(e) => { handleChange(); }} className="btn btn-primary">Resultats Obtenu</a></div>
        </div>
      </form>

    </div>
  )
}

export default Temps