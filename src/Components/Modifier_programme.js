import React from 'react';
import Sidebar from './Sidebar';
import './Ajouter_Modifier_programme.css';
function Modifier_service_programme() {
    return (
      <div>
      <div className="sidebar">
            <Sidebar/> 
            </div>
            <h1 className='title'>Modifier au programme :</h1> 
            <div className='outside'>
            <div className='big-container'>
           

            <label htmlFor="service">Service:</label>
            <select type="text" className='inpu'   placeholder="--Selectionner un service"  name="name"  >
            <option value=""> Select Service</option>
              <option value="Opérations Chirurgicales">Opérations Chirurgicales</option>
              <option value="Bains Minéraux">Bains Minéraux</option>
              <option value="Allocation De Retraite">Allocation De Retraite</option>
              <option value="Capital-Décès">Capital-Décès</option>
              <option value="Concession de mariage">Concession de mariage</option>
              <option value="Bourse pour nouveau-né">Bourse pour nouveau-né</option>
            </select> 
           <label htmlFor="title">Title:</label>
            <input type="text" className='input'  placeholder="Title"  />
            <div className='input-description'> 
            <label htmlFor="Desciption">Desciption:</label>
            <textarea type="text" className='inputinput'  placeholder="Desciption"  />
            </div> 
            <label htmlFor="montant">Mantant/Pourcentage de Remboursement:</label>
            <div className='input-montantpoursentage'> 
            <input className='input-radio' type="radio" id="option1" name="options" value="option1"/>
            <h1 className='Mantant-fixe'>Montant fixe</h1>
             <div className="montantpourcentage">
             
            <input type="text" className='input'  placeholder="Montant"  />
              </div>
              <input className='input-radio' type="radio" id="option3" name="options" value="option3"/>
              <h2 className='pourcentage'>Pourcentage</h2>
              <div className="montantpourcentage">
              <input type="text" className='input'  placeholder="Pourcentage" /> 
             </div>
             <label htmlFor="montant">Papiers Demandées:</label>
             <textarea type="text" className='inputinput'  placeholder="Papiers Demandées" />
              </div>
              <div class="buttons">

               
                 <button className="btn-supprimer-programme"  type='button'>Supprimer Programme</button>
             
  
            
                 <button   className="btn-enregistrer-modification" type='button'>Enregistrer Modification</button>
           
  
             </div>

            </div> 
            
             </div>   
 </div>

       );
  }
  export default Modifier_service_programme;
  