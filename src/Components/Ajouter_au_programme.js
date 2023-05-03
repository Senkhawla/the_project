import React from 'react';
import Sidebar from './Sidebar';
import './Ajouter_Modifier_programme.css';
import axios from 'axios';
import { useState } from 'react';



function Ajouter_au_programme() {
  const [chapter, setChapter] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [coverage, setCoverage] = useState('');
  const [needed_proofs, setNeededProofs] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      chapter,
      title,
      description,
      coverage,
      needed_proofs
    };

    axios.post('https://server-social-benefits.vercel.app/addSocialBenefit', data)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };


    return (
      <div>
      <div className="sidebar">
            <Sidebar/> 
            </div>
            <h1 className='title'>Ajouter au programme :</h1> 
            <div className='outside'>
            <form className='big-container' onSubmit={handleSubmit}>
           

            <label htmlFor="service" >Service:</label>
            <select type="text" className='inpu'   placeholder="--Selectionner un service"  name="name" onChange={(event) => setChapter(event.target.value)}  >
            <option value=""> Select Service</option>
              <option value="Opérations Chirurgicales">Opérations Chirurgicales</option>
              <option value="Bains Minéraux">Bains Minéraux</option>
              <option value="Allocation De Retraite">Allocation De Retraite</option>
              <option value="Capital-Décès">Capital-Décès</option>
              <option value="Concession de mariage">Concession de mariage</option>
              <option value="Bourse pour nouveau-né">Bourse pour nouveau-né</option>
            </select> 
           <label htmlFor="title">Title:</label>
            <input type="text" className='input'  placeholder="Title" onChange={(event) => setTitle(event.target.value)} />
            <div className='input-description'> 
            <label htmlFor="Desciption">Desciption:</label>
            <textarea type="text" className='inputinput'  placeholder="Desciption" onChange={(event) => setDescription(event.target.value)} />
            </div> 
            <label htmlFor="montant">Mantant/Pourcentage de Remboursement:</label>
            <div className='input-montantpoursentage'> 
            <input className='input-radio' type="radio" id="option1" name="options" value="option1"/>
            <h1 className='Mantant-fixe'>Montant fixe</h1>
             <div className="montantpourcentage">
             
            <input type="text" className='input'  placeholder="Montant" onChange={(event) => setCoverage(event.target.value)} />
              </div>
              <input className='input-radio' type="radio" id="option3" name="options" value="option3"/>
              <h2 className='pourcentage'>Pourcentage</h2>
              <div className="montantpourcentage">
              <input type="text" className='input'  placeholder="Pourcentage" /> 
             </div>
             <label htmlFor="montant">Papiers Demandées:</label>
             <textarea type="text" className='inputinput'  placeholder="Papiers Demandées" onChange={(event) => setNeededProofs(event.target.value)}/>
              </div>

             <div class="btn-ajouter-au-programme"> 
                 <button type='submit'>Ajouter au Programme</button>
             </div> 
  
  

            </form> 
            
             </div>   
 </div>

       );
  }
  export default Ajouter_au_programme;
  