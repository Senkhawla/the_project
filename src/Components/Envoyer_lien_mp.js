import banner from '../assets/img/banner.jpg';
import overlay from '../assets/img/overlay.png';
import logoesi from '../assets/img/logoesi.png';
import './Envoyer_lien_mp.css';


function Envoyer_lien_mp() {
  return (
    <div className='Envoyer_lien_mp' >
         <div className='modifier-h'>
      <h1>Nous vous avons envoyé un lien</h1>
      <h2>Consulter votre email pour récupérer votre lien </h2>
       </div>
       <div class="btn_renvoyer_lien"> 
       <button type='button'>Renvoyer le lien</button>
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

export default Envoyer_lien_mp;
