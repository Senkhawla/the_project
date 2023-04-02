import banner from '../assets/img/banner.jpg';
import overlay from '../assets/img/overlay.png';
import logoesi from '../assets/img/logoesi.png';
import {Link} from 'react-router-dom';
import './Welcome.css';
import  React, { useState } from 'react';
/*import {Redirect} from 'react-router-dom';
import Contact  from '../src/Contact';*/

function Welcome() {
  /*const  [isAuth, setIsAuth] = useState(true);
  if (!isAuth){
    return <Redirect to =  {Contact}/>
  }*/
  return (
    <div className='welcome'>
      <h1>WELCOME</h1>
      <h2> Email </h2>
      <h3> Password </h3>  
      <div class="input-group">  
      <div class="input-field-email"> 
      <input type="text" placeholder='Your email address'></input>
        </div>
      <div class="input-field-password"> 
      <input type="password" placeholder='Your password'></input> 
      </div>
       </div>
       
       <div className='contactadmin' ><p> Don't have an account ? <a href='/Contact_admin' /*onClick ={()=>setIsAuth(false)}*/>Contact Admin</a> </p></div>
       
       
       <div class="btn-field"> 
       < Link  to='/Employees' >
       <button type='button'>Log in</button>
       </Link>

       
       </div>
       <div className='logoesi'>
       <img src={logoesi} alt = 'logoesi img'/>
       </div>
   
       <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/Home" className="nav-link">
            Home
          </a>
        </li>
      </ul>
    </nav> 
    
       <div className='banner'>
       <img src={banner}  alt = 'banner img'/>
      </div>
      <div className='overlay'>
       <img src={overlay}  alt = 'overlay img'/>
       </div>
    </div>
  );
}

export default Welcome;
