import React from 'react'
import './searchbar.css';
export const Searchbar = () => {
  return (
    <div className='searchbar'>
    <div className='input-wrapper'>
        < input placeholder='Recherche....'/>
    </div>
    <div class="btn-field"> 
    <button type='button'>Ajouter emplyé</button>
    </div>
    </div>
  )
}
