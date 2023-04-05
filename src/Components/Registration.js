import React, { useState } from 'react';
import {User} from './User'
import "../App.css"
import {useFormik} from 'formik'
import * as yup  from 'yup'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [job, setJob] = useState('');
  const [grade, setGrade] = useState('');
  const [situation, setSituation] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [responsabilite, setResponsabilite] = useState({
    admin: false,
    responsable: false,
    comptable: false,
    funder: false,
  });
  const [responsibilities, setResponsibilities] = useState(0);

  const RESPONSIBILITIES = {
    ADMIN: 0b0000,
    EMPLOYEE: 0b0001,
    HR_MANAGER: 0b0010,
    ACCOUNTANT: 0b0100,
    FUNDER: 0b1000
  }

  const handleResponsabiliteChange = (e) => {
    const { name, checked } = e.target;
    let mask = 0;
    if (name === 'admin' && checked) {
      mask |= RESPONSIBILITIES.ADMIN;
    }
    if (name === 'employee' && checked) {
      mask |= RESPONSIBILITIES.EMPLOYEE;
    }
    if (name === 'hrManager' && checked) {
      mask |= RESPONSIBILITIES.HR_MANAGER;
    }
    if (name === 'accountant' && checked) {
      mask |= RESPONSIBILITIES.ACCOUNTANT;
    }
    if (name === 'funder' && checked) {
      mask |= RESPONSIBILITIES.FUNDER;
    }
    setResponsibilities(mask);
  };



  const navigate = useNavigate()
  var employeeCheckbox = document.getElementById("employee-checkbox");
  var otherRoleCheckbox = document.getElementById("other-role-checkbox");
    
  const {values ,handleBlur, handleChange , handleSubmit  }= useFormik({
      initialValues : {email : "" , password : "" , confirmPassword : "" ,role:"",job:"",grade:"",maritalStatus:"",name:"" } , 
      validationSchema:yup.object().shape(
        {
          email:yup.string().email().required() ,
          password:yup.string().min(6).required() ,
          confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
          role: yup.string().required().matches(/^[0-9]+$/, "Must be only digits").min(4, 'Must be exactly 5 digits').max(4, 'Must be exactly 5 digits'),
          job:yup.string(),
          grade:yup.string(),
          maritalStatus:yup.string(),
          name:yup.string()
    
        })
    , onSubmit : (values)=>{
      axios.post('https://server-social-benefits.vercel.app/signup', {
      email: values.email,
      password: values.password ,
      role :  responsibilities ,
      job:values.job,
      grade : values.grade,
      maritalStatus : values.maritalStatus ,
      name : values.name
    })
    .then(response => {
      console.log(response.data);
      navigate('/home')
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
        {User.map((val, key)=> {
         return(
        <div key={key} > {" "}
          <img src={val.picture} alt="" className="picture" />
          <div className="changer-photo"> Changer photo </div>
        </div>  
          )
         })}
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
          <select id="situation" className='input' value={values.maritalStatus} 
            onBlur={handleBlur}  placeholder="maritalStatus"
              onChange={handleChange}>
            <option value="">-- Select Situation --</option>
            <option value="Marie">Marie</option>
            <option value="Divorce">Divorce</option>
            <option value="Celibataire">Celibataire</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="responsabilite">Responsabilité:</label>
          <div className="checkbox-group">
          <label>
              <input type="checkbox" name="employee" checked={!!(responsibilities & RESPONSIBILITIES.EMPLOYEE)} onChange={handleResponsabiliteChange} />
              Acune
            </label>
            <label>
              <input type="checkbox" name="admin" checked={!!(responsibilities & RESPONSIBILITIES.ADMIN)} onChange={handleResponsabiliteChange} />
              Admin
            </label>
            <label>
              <input type="checkbox" name="responsable" checked={!!(responsibilities & RESPONSIBILITIES.HR_MANAGER)} onChange={handleResponsabiliteChange} />
              Responsable des oeuvres sociales
            </label>
            <label>
              <input type="checkbox" name="funder" checked={!!(responsibilities & RESPONSIBILITIES.FUNDER)} onChange={handleResponsabiliteChange} />
              Funder
            </label>
            <label>
              <input type="checkbox" name="comptable" checked={!!(responsibilities & RESPONSIBILITIES.ACCOUNTANT)} onChange={handleResponsabiliteChange} />
              Comptable
            </label>

            </div>
        </div>
        </div>  
        
        <button type="submit" className='button-annuler'>Annuler</button>
        
        <button type="submit"className='button-ajouter'>Ajouter</button>
        


      </form>
    </div>
  )}
  export default Registration;