import React from 'react'
import Programme from './programmes';
import Sidebar from './Sidebar';
import Annonces_list from './Annonces_list';
import "./Admin_annonces_programmes.css";
 
const Employee_annonces_programmes =() =>{
  return (
    <div className="App">
    <div className="container">
      <Sidebar/> 
      </div>
      <button className="ajouter_annonce_button" > Ajouter une annonce </button>
      <div className="margin_employee_page">
     < Annonces_list/>
     <button className="ajouter_programme_button" > Ajouter aux programme </button>
      < Programme />
      </div>
  </div>
  )
}

export default Employee_annonces_programmes