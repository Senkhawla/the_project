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
import Employee_annonces_programmes from './Components/Employee_annonces_programmes';
import Admin_annonces_programmes from './Components/Admin_annonces_programmes';
import Registration from './Components/Registration';
import Email_modifier_mp from './Components/Email_modifier_mp';
import Envoyer_lien_mp from './Components/Envoyer_lien_mp';
import Nouveau_mp from './Components/Nouveau_mp';
import Table_employee from './Components/Table_employee';


const routes = [

  {
    path: "/Employees",
    element: (
      <div>
         <div className="container">
        <Sidebar/> 
        <div className="margin">
          <Table_employee/>
        </div>
      </div>
      </div>
    )
  },

  {
    path: "/Admin_annonces_programmes",
    element: (
      <div>
          <Admin_annonces_programmes/>
          
      </div>
    )
  },

  {
    path: "/Nouveau_mp",
    element: (
      <div>
          <Nouveau_mp/>
     </div>
    )
  },

  {
    path: "/Envoyer_lien_mp",
    element: (
      <div>
          <Envoyer_lien_mp/>
     </div>
    )
  },

  {
    path: "/Email_modifier_mp",
    element: (
      <div>
          <Email_modifier_mp/>
     </div>
    )
  },

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
