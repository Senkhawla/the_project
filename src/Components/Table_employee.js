import React from "react";
import "./Table_employee.css";
import employeeList from "./employeeList";
import { useNavigate } from 'react-router-dom'

const EmployeeTable = () => {
const navigate = useNavigate();
  return (
    <div>
        
        <input className="recherche-employee" placeholder='Recherche.... '/>

        <button onClick={()=>{navigate('/Registration');} } className='ajouter-employee'>Ajouter employee</button>
   
   <h1> EMPLOYEES </h1>
    <table className="employee-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Picture</th>
          <th>Name</th>
          <th>Job Title</th>
        </tr>
      </thead>
      <tbody>
        {employeeList.map((employee) => (
          <tr>
            <td>{employee.id}</td>
            <td>
              <img
                className="employee-picture"
                src={employee.image}
                alt={employee.name}
              />
            </td>
            <td>{employee.name}</td>
            <td>{employee.jobTitle}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default EmployeeTable;
