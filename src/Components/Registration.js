import React, { useState } from 'react';
import {User} from './User'
import "../App.css"
import {useFormik} from 'formik'
import * as yup  from 'yup'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useEffect } from 'react';
function Registration() {

  const [bitmask, setBitmask] = useState(0);
  const [theRole, setTheRole] = useState("");
  const [profile_image_url, setProfile_image_url] = useState("https://www.sumasmountaindental.com/wp-content/uploads/2020/10/person-placeholder.jpg");


  useEffect(() => {
    console.log(theRole);
  }, [theRole]);
  const handleCheckboxChange =  (e) =>  {
    const { name, checked } = e.target;
  
    let mask = bitmask;
  
    switch (name) {
      case 'employee':
        if (checked) {
          mask |= 0b0001;
        } else {
          mask &= ~0b0001;
        }
        break;
      case 'responsable':
        if (checked) {
          mask |= 0b0010;
        } else {
          mask &= ~0b0010;
        }
        break;
      case 'funder':
        if (checked) {
          mask |= 0b0100;
        } else {
          mask &= ~0b0100;
        }
        break;
      case 'comptable':
        if (checked) {
          mask |= 0b1000;
        } else {
          mask &= ~0b1000;
        }
        break;
      default:
        break;
    }
  
    setBitmask(mask);

 setTheRole(mask.toString(2).padStart(4, '0'));

console.log(mask.toString(2).padStart(4, '0'))

  };















  const navigate = useNavigate()

  const {values ,handleBlur, errors ,handleChange , handleSubmit  }= useFormik({
      initialValues : {email : "" , password : "" , confirmPassword : "" ,role:"",job:"",grade:"",maritalStatus:"",name:"" } , 
      validationSchema:yup.object().shape(
        {
          email:yup.string().email().required() ,
          password:yup.string().min(6).required() ,
          confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
          job:yup.string().required(),
          grade:yup.string(),
          maritalStatus:yup.string().required(),
          name:yup.string().required()
    
        })
    , onSubmit : (values)=>{
      axios.post('https://server-social-benefits.vercel.app/signup', {
      email: values.email,
      password: values.password ,
      role : theRole ,
      job:values.job,
      grade : values.grade,
      maritalStatus : values.maritalStatus ,
      name : values.name ,
      profileImageUrl:"https://static.vecteezy.com/system/resources/previews/001/840/618/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"
    })
    .then(response => {
      console.log(response.data);
      
    })
    .catch(error => {
      console.error(error.response.data);
    });
    } }); 




  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>

        <h2 className='main-title'>AJOUTER EMPLOYE :</h2>

        <div className="form-group-col">
      <img src={profile_image_url} alt="" className="picture" />
       <div className="changer-photo">
       </div>
    </div>
      

        <div className="form-group-row">

          <div className="form-group col">
            <label htmlFor="name">Name:</label>
            <input type="text" className='input' onBlur={handleBlur}  placeholder="name"  name="name" id="name"
             value={values.name} onChange={handleChange} />
          </div>

          <div className="form-group col">
            <label htmlFor="email">Email:</label>
            <input type="email" className='input' onBlur={handleBlur}  placeholder="email"  name="email" id="email"
             value={values.email} onChange={handleChange}  />
          </div>
        </div>

                <div className="form-group-row">

          <div className="form-group col">
            <label htmlFor="password">Password:</label>
            <input type="password" className='input' onBlur={handleBlur}  placeholder="password"  name="password" id="password"
             value={values.password} onChange={handleChange} />
          </div>

          <div className="form-group col">
            <label htmlFor="confirmPassword">Confirm password:</label>
            <input type="password" className='input'  onBlur={handleBlur}  placeholder="confirm password"  name="confirmPassword"
             value={values.confirmPassword} onChange={handleChange} />
          </div>
        </div>

        <div className="form-group-row">
          <div className="form-group col">
            <label htmlFor="job">Job:</label>
            <select id="job" className='input' value={values.job} 
            onBlur={handleBlur}  placeholder="job"
              onChange={handleChange}>
              <option value="">-- Select Job --</option>
              <option value="enseignant">Enseignant</option>
              <option value="administrateur">Administrateur</option>
              <option value="secretaire">Secrétaire</option>
            </select>
          </div>

          <div className="form-group col">
            <label htmlFor="grade">Grade:</label>
            <select id="grade" className='input' value={values.grade} 
            onBlur={handleBlur}  placeholder="grade"
              onChange={handleChange}>
              <option value="">-- Select Grade --</option>
              <option value="maitre assistant">Maître Assistant</option>
              <option value="maitre conference">Maître de Conférence</option>
            </select>
          </div>
        </div>

    <div className="group">
        <div className="form-group">
          <label htmlFor="situation">Situation:</label>
          <select id="maritalStatus" className='input' value={values.maritalStatus} 
            onBlur={handleBlur}  placeholder="maritalStatus"
              onChange={handleChange}>
            <option value="">-- Select Situation --</option>
            <option value="Marie">Marie</option>
            <option value="Divorce">Divorce</option>
            <option value="Celibataire">Celibataire</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="responsabilite">Roles:</label>
          <div className="checkbox-group">
          <label>
              <input type="checkbox" name="employee" onChange={handleCheckboxChange}   />
              Employee
            </label>
    
            <label>
              <input type="checkbox" name="responsable" onChange={handleCheckboxChange} />
              Responsable des oeuvres sociales
            </label>
            <label>
              <input type="checkbox" name="funder"  onChange={handleCheckboxChange} />
              Funder
            </label>
            <label>
              <input type="checkbox" name="comptable" onChange={handleCheckboxChange}  />
              Comptable
            </label>

            </div>
        </div>
        </div>  
        
        <button type="submit" className='button-annuler'>Annuler</button>
        
        <button onClick={console.log(errors)} type="submit"className='button-ajouter'>Ajouter</button>
        


      </form>
    </div>
  )}
  export default Registration;