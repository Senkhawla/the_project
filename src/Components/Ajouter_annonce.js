import React from 'react';
import Sidebar from './Sidebar';
import './Ajouter_modifier_annonce.css';
import wireframe_image from '../assets/img/wireframe_image.png';
import { useState } from 'react';
function Ajouter_annonce() {

const[image,setImage]= useState("");

function coverToBase64(e){
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
        console.log(reader.result);
        setImage(reader.result);
    } ; 
    reader.onerror = error => {
        console.log("error:", error);
    };
}


    return (
      <div>
      <div className="sidebar">
            <Sidebar/> 
            </div>
            <h1 className='ajouter-annance'>AJOUTER ANNONCE :</h1> 
            <div className='outside'>
            <div className='outside-container'>

            <div className='image-container'>
            {image ? (
            <img src={image} className="image-uploaded" />
          ) : (
            <img src={wireframe_image} className="image-uploaded" />
          )}
            </div> 
            <input type="file" className='image-upload'  id='input' accept='image' onChange={coverToBase64}/>
            
           
            <div className='image-label'> 
            <label htmlFor="input" type="file" className='imag'>
           
            <i className='material-icons'>add_photo_alternate</i>
            Ajouter Photo
            </label>
            </div> 
           <label htmlFor="title">Title:</label>
            <input type="text" className='input'  placeholder="Title"  />
            <div className='description'> 
            <label htmlFor="Desciption">Desciption:</label>
            <textarea type="text" className='input'  placeholder="Desciption"  />
            </div> 
            <div class="btn-poster-annance"> 
                 <button type='button'>Poster Annonce</button>
             </div> 
  
  

            </div> 
            
             </div>   
 </div>

       );
  }
  export default Ajouter_annonce;
  
  
  