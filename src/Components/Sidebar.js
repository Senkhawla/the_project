import React from 'react'
import "../App.css"
import {SidebarData} from './SidebarData'
import {User} from './User'
import {Link} from 'react-router-dom';
 
function Sidebar() {

  return (
   <div className='Sidebar'>
   <div className="logo">
     <img src="../assets/esi-logo.png" alt=""/>
   </div>
 {User.map((val, key)=> {
      return(
        <div key={key} > {" "}
          <img src={val.picture} alt="" className="picture" />
          <div className="name"> {val.name} </div>
          <div className="job"> {val.job} </div>
        </div>  
      )
    })}

<ul className='SidebarList'>
      {SidebarData.map((val, key)=> {
      return(
        <li 
        key={key}
        className="row " 
        id={window.location.pathname == val.link ? "active" : ""}        
        onClick={()=> {window.location.pathname = val.link}} >
          {" "}
          <div> {val.title} </div>
        </li> 
      )
    })}
    </ul>
     
    < Link  to='/Home'>
    <button type="submit"className='button-logout'>Log out</button>
    </Link>
    <button type="submit"className='button-switch'>Switch to employee</button>
    
    </div>
  )
}

export default Sidebar