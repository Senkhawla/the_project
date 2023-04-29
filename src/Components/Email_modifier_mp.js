import banner from '../assets/img/banner.jpg';
import overlay from '../assets/img/overlay.png';
import logoesi from '../assets/img/logoesi.png';
import './Email_modifier_mp.css';


function Email_modifier_mp() {
  return (
    <div className='Email_modifier_mp' >
         <div className='modifier-h'>
      <h1>Ou devons-nous envoyer un code de confirmation</h1>
      <h2>Entrez l'adresse email associé à votre compte pour modifier votre mot de passe. </h2>
      
      </div>
      <div class="your-email-address"> 
      <input type="text" placeholder='Your email address'></input>
        </div>
       <div class="btn"> 
       <button type='button'>Submit</button>
       </div>
       <div className='logoesi'>
       <img src={logoesi} alt = 'logoesi img'/>
       </div>
      <nav className="navbar-modifier">
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

export default Email_modifier_mp;
