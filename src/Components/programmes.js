
import 'react-icons'
import "./programmes.css"
import Accordion from "./programmeitem";
import { useState } from "react";
import { programmedata } from "./progdata";
//import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';

const Programme =()=>{
  const [service01,setservice01]=useState("Title1");
  const [service02,setservice02]=useState("Title1");
 return (
  
  <div  className="programme" id="programme-section">
    <h1>NOTRE PROGRAMME</h1>
    <h2>SERVICE 01:</h2>

    {programmedata.map((item,index) => {
        return (
          
    <Accordion title ={item.titre}
                des={item.Description}
                pour={item.Pour}
                emp={item.Employé}
                pa={item.Papierdem}
                active={service01} setActive={setservice01} />
    
    
       )})}

<h2>SERVICE 02:</h2>
    
    {programmedata.map((item,index) => {
        return (
          
    <Accordion title ={item.titre}
                des={item.Description}
                pour={item.Pour}
                emp={item.Employé}
                pa={item.Papierdem}
                active={service02} setActive={setservice02} />
    
    
       )})}
        
  </div>
 )
}

export default Programme