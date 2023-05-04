import React, { useEffect, useState } from "react";
import "./Table_employee.css";
import axios from 'axios';

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage, setEmployeesPerPage] = useState(6);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('https://server-social-benefits.vercel.app/accounts?role=0001');
        setEmployees(response.data);
      } catch (error) {
        setError('Error fetching employees. Please try again.');
      }
    };
    fetchEmployees();
  }, []);


  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(employees.length / employeesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <input className="recherche-employee" placeholder='Recherche.... '/>

      <button className='ajouter-employee'>Ajouter employee</button>
   
      <h1> EMPLOYEES </h1>
      <table className="employee-table">
        <thead>
          <tr>
            
            <th>Picture</th>
            <th>Name</th>
            <th>Email</th>
            <th>Job</th>
            

          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((employee) => (
            <tr key={employee.id}>
              
              <td>
                <img
                  className="employee-picture"
                  src={employee.profile_image_url}
                  alt={employee.name}
                />
              </td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.job}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
      {error && <p>{error}</p>}
      
      <div className="pagination">
        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={currentPage === number ? 'active' : ''}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmployeeTable;
