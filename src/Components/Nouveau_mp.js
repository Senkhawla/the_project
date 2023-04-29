import banner from '../assets/img/banner.jpg';
import overlay from '../assets/img/overlay.png';
import logoesi from '../assets/img/logoesi.png';
import './Nouveau_mp.css';
import { useNavigate } from 'react-router-dom';

function Nouveau_mp() {
    const navigate = useNavigate();
  return (
    <div className='Nouveau_mp'>
      <h1>Tapez le nouveau mot de passe</h1>
      <h2> New password</h2> 
      <h3> Confirm password</h3>  
      <div class="input-group">  
      <div class="input-field-email"> 
      <input type="text" placeholder='New password'></input>
        </div>
      <div class="input-field-password"> 
      <input type="password" placeholder='Confirm password'></input> 
      </div>
       </div>
       
       
       <div class="btn-field"> 
       <button type='button' onClick={()=>{navigate('/Login');}} >Submit</button>
       </div>
       <div className='logoesi'>
       <img src={logoesi} alt = 'logoesi img'/>
       </div>
      <nav className="navbar_nouveau_mp">
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

export default Nouveau_mp;
