import React from 'react';
import Sidebar from './Components/Sidebar';
import RegistrationRegistration from './Components/RegistrationRegistration';
import Modifier_Info from './Components/Modifier_Info';
import Welcome from './Components/Welcome';
import Annances from './Components/annances';
import Programme from './Components/programmes';
import Contact from './Components/Contacts';
import Navbar from './Components/Navbar';
import Hero from './Components/hero';
import Contact_admin from './Components/Contact_admin';
import Afficher_employees from './Components/Afficher_employees';
import Employee_annonces_programmes from './Components/Employee_annonces_programmes';
import Registration from './Components/Registration';


const routes = [


  {
    path: "/Employee_annonces_programmes",
    element: (
      <div>
          <Employee_annonces_programmes/>
          
      </div>
    )
  },

  {
    path: "/Registration",
    element: (
      <div className="App">
        <div className="container">
           <RegistrationRegistration/>
         </div>
      </div>
    )
  },

  {
    path: "/Registrationn",
    element: (
      <div>
      <div className="container">
        <Sidebar/> 
        <div className="margin">
          <Registration/>
        </div>
      </div>
  </div>
    )
  },
 
  {
    path: "/Modifier_Info",
    element: (
      <div className="App">
        <div className="container">
          <Sidebar/> 
          <div className="margin">
            <Modifier_Info/>
          </div>
        </div>
      </div>
    )
  },

  {
    path: "/Contact_admin",
    element: (
      <div className="App">
        <Contact_admin/>
      </div>
    )
  },

  {
    path: "/Employees",
    element: (
          <div >
          <Afficher_employees/>
          </div>
    )
  },

  {
    path: "/Login",
    element: (
        <div className='App3'>
        <Welcome />
       </div>
    )
  },

  {
    path: "/Home",
    element: (
        <div className='App2'>

        <Navbar />

       
        <Hero
        cName="hero"
        heroimg ="https://i.ibb.co/R3LfjVb/background.jpg"
        title="LES   OUEVRES   SOCIALES"
        text="Gérez votre dossier professionnel et communiquez avec
         l'administration en toute simplicité grâce à notre site!"
        btntext="LOG IN"
        url ="/Login"
        btnClass ="show"
        />
      
      
      <Annances /> 
     <Programme  /> 
     <Contact /> 
        </div>
    )
  }
];

export default routes;
