import React from "react";
import "./Annonces_list.css";
import Annonces_list_data from "./Annonces_list_data";
import topImage from "../assets/overlayy.png";
import banner from "../assets/img/banner.jpg";

const Annonces_list = () => {
    
  return (
<div className="annonces-containerr">
<h1>NOS ANNONCES</h1>
    <div className="annonces-container">

     

      {Annonces_list_data.map((annonce) => (
        <div
          key={annonce.id}
          className="annonce-box"
          style={{ backgroundImage: /*`url(${annonce.image})`*/ `url(${banner})`  }}
        >
          <img className="top-image" src={topImage} alt="Top Image" />
          <h3 className="annonce-title">{annonce.title}</h3>
             </div>
      ))}
    </div>

    </div>
  );
};

export default Annonces_list;
