import React from 'react'
import Programme from './programmes';
import Sidebar from './Sidebar';
import Annonces_list from './Annonces_list';
import "./Admin_annonces_programmes.css";
import { useNavigate } from 'react-router-dom';
 
const Employee_annonces_programmes =() =>{
  const navigate = useNavigate();
  return (
    <div className="App">
    <div className="container">
      <Sidebar/> 
      </div>
      <button className="ajouter_annonce_button" > Ajouter une annonce </button>
      <div className="margin_employee_page">
     < Annonces_list/>
     <button className="ajouter_programme_button" onClick={() => navigate('/Ajouter_au_programme')} > Ajouter aux programme </button>
      < Programme />
      </div>
  </div>
  )
}

export default Employee_annonces_programmes