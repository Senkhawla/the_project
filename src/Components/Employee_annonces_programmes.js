import React from 'react'
import Programme from './programmes';
import Sidebar_employee from './Sidebar_employee';
import "./Employee_annonces_programmes.css";
 
const Employee_annonces_programmes =() =>{
  return (
    <div className="App">
    <div className="container">
      <Sidebar_employee/> 
      </div>
      <button className="ajouter_demande_button" > Ajouter une demande </button>
      <div className="margin_employee_page">
      
      < Programme />
      </div>
   
  </div>
  )
}

export default Employee_annonces_programmes